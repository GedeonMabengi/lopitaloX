<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MaintenanceRequestResource;
use App\Models\Lease;
use App\Models\MaintenanceRequest;
use App\Models\PropertyUnit;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class MaintenanceRequestController extends Controller
{
    use RoleScoping;

    public function index(Request $request): AnonymousResourceCollection
    {
        $query = MaintenanceRequest::query()->with('tenant', 'propertyUnit');

        if ($this->isRole('tenant')) {
            $query->where('tenant_id', $this->tenantRecord()?->id);
        } elseif ($this->isRole('technician')) {
            $query->whereHas('assignments', fn ($q) => $q->where('technician_user_id', $this->user()->id));
        } elseif (! $this->isManager()) {
            $unitIds = PropertyUnit::query()
                ->whereIn('property_id', $this->visiblePropertyIds() ?? [])
                ->pluck('id');
            $query->whereIn('property_unit_id', $unitIds);
        }

        return MaintenanceRequestResource::collection(
            $query->orderByDesc('created_at')->paginate($request->integer('per_page', 100))
        );
    }

    public function show(MaintenanceRequest $maintenanceRequest): MaintenanceRequestResource
    {
        abort_unless($this->canAccess($maintenanceRequest), 403, 'Accès refusé.');

        return new MaintenanceRequestResource($maintenanceRequest->load('tenant', 'propertyUnit', 'assignments'));
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'property_unit_id' => ['required', 'exists:property_units,id'],
            'tenant_id' => ['nullable', 'exists:tenants,id'],
            'category' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'photos' => ['nullable', 'array'],
            'priority' => ['nullable', 'string', 'in:low,medium,high,urgent'],
            'client_uuid' => ['nullable', 'uuid'],
        ]);

        // Idempotence : rejeu d'une opération de l'outbox mobile.
        if ($request->filled('client_uuid')) {
            $existing = MaintenanceRequest::query()->where('client_uuid', $request->client_uuid)->first();
            if ($existing) {
                return response()->json(
                    (new MaintenanceRequestResource($existing->load('tenant', 'propertyUnit')))->resolve()
                );
            }
        }

        $tenantId = $data['tenant_id'] ?? null;
        if ($this->isRole('tenant')) {
            $tenantId = $this->tenantRecord()?->id;
        }
        if (! $tenantId) {
            $tenantId = Lease::query()
                ->where('property_unit_id', $data['property_unit_id'])
                ->where('status', 'active')
                ->value('tenant_id');
        }

        abort_if(! $tenantId, 422, 'Impossible de rattacher la demande à un locataire.');

        $maintenanceRequest = MaintenanceRequest::query()->create([
            'tenant_id' => $tenantId,
            'property_unit_id' => $data['property_unit_id'],
            'category' => $data['category'],
            'description' => $data['description'],
            'photos' => $data['photos'] ?? null,
            'priority' => $data['priority'] ?? 'medium',
            'status' => 'open',
            'client_uuid' => $request->client_uuid ?? null,
        ]);

        return response()->json(
            (new MaintenanceRequestResource($maintenanceRequest->load('tenant', 'propertyUnit')))->resolve(),
            201
        );
    }

    public function updateStatus(Request $request, MaintenanceRequest $maintenanceRequest): MaintenanceRequestResource
    {
        abort_unless($this->canAccess($maintenanceRequest), 403, 'Accès refusé.');

        $data = $request->validate([
            'status' => ['required', 'string', 'in:open,in_progress,on_hold,resolved,closed,cancelled'],
        ]);

        $maintenanceRequest->update(['status' => $data['status']]);

        return new MaintenanceRequestResource($maintenanceRequest->load('tenant', 'propertyUnit'));
    }

    private function canAccess(MaintenanceRequest $maintenanceRequest): bool
    {
        if ($this->isManager()) {
            return true;
        }

        if ($this->isRole('tenant')) {
            return $maintenanceRequest->tenant_id === $this->tenantRecord()?->id;
        }

        if ($this->isRole('technician')) {
            return $maintenanceRequest->assignments()
                ->where('technician_user_id', $this->user()->id)
                ->exists();
        }

        $unitIds = PropertyUnit::query()
            ->whereIn('property_id', $this->visiblePropertyIds() ?? [])
            ->pluck('id');

        return $unitIds->contains($maintenanceRequest->property_unit_id);
    }
}
