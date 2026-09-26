<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseResource;
use App\Http\Resources\InvoiceResource;
use App\Http\Resources\LeaseResource;
use App\Http\Resources\MaintenanceRequestResource;
use App\Http\Resources\MessageResource;
use App\Http\Resources\NotificationResource;
use App\Http\Resources\PaymentResource;
use App\Http\Resources\PropertyResource;
use App\Http\Resources\PropertyUnitResource;
use App\Http\Resources\TenantResource;
use App\Http\Resources\ThreadResource;
use App\Http\Resources\WorkOrderResource;
use App\Models\Expense;
use App\Models\Invoice;
use App\Models\Lease;
use App\Models\MaintenanceRequest;
use App\Models\Message;
use App\Models\MessageThread;
use App\Models\Payment;
use App\Models\Property;
use App\Models\PropertyUnit;
use App\Models\Tenant;
use App\Models\WorkOrder;
use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

/**
 * Synchronisation offline-first.
 *
 * GET /api/v1/sync?since=<ISO8601> renvoie un « bundle delta » : toutes les
 * entités modifiées depuis le curseur + les ids supprimés (tombstones).
 * Le client mobile alimente sa base Room locale avec cette réponse.
 *
 * POST /api/v1/sync/outbox reçoit un lot d'opérations créées hors ligne et les
 * applique de façon idempotente (client_uuid).
 */
class SyncController extends Controller
{
    use RoleScoping;

    public function index(Request $request): JsonResponse
    {
        $since = $request->query('since');
        $cursor = $since ? Carbon::parse($since) : null;

        $scopeProperty = function (Builder $q, string $col = 'property_id'): void {
            $ids = $this->visiblePropertyIds();
            if ($ids !== null) {
                $q->whereIn($col, $ids);
            }
        };
        $scopeLease = function (Builder $q, string $col = 'lease_id'): void {
            $ids = $this->visibleLeaseIds();
            if ($ids !== null) {
                $q->whereIn($col, $ids);
            }
        };
        $scopeMaintenance = function (Builder $q): void {
            if ($this->isRole('tenant')) {
                $q->where('tenant_id', $this->tenantRecord()?->id);
            } elseif ($this->isRole('technician')) {
                $q->whereHas('assignments', fn ($s) => $s->where('technician_user_id', $this->user()->id));
            } elseif (! $this->isManager()) {
                $unitIds = PropertyUnit::query()
                    ->whereIn('property_id', $this->visiblePropertyIds() ?? [])
                    ->pluck('id');
                $q->whereIn('property_unit_id', $unitIds);
            }
        };
        $scopeThread = function (Builder $q): void {
            if ($this->isManager()) {
                return;
            }
            $threadIds = $this->user()->messageThreads()->pluck('message_threads.id');
            $q->whereIn('id', $threadIds);
        };
        $scopeMessage = function (Builder $q): void {
            if ($this->isManager()) {
                return;
            }
            $threadIds = $this->user()->messageThreads()->pluck('message_threads.id');
            $q->whereIn('thread_id', $threadIds);
        };

        $data = [
            'properties' => $this->changed(Property::class, PropertyResource::class, $cursor, fn ($q) => $this->filter($q, 'id', $this->visiblePropertyIds()), ['units']),
            'property_units' => $this->changed(PropertyUnit::class, PropertyUnitResource::class, $cursor, $scopeProperty, ['property']),
            'tenants' => $this->changed(Tenant::class, TenantResource::class, $cursor, fn ($q) => $this->filter($q, 'id', $this->visibleTenantIds())),
            'leases' => $this->changed(Lease::class, LeaseResource::class, $cursor, fn ($q) => $this->filter($q, 'id', $this->visibleLeaseIds()), ['tenant', 'propertyUnit']),
            'payments' => $this->changed(Payment::class, PaymentResource::class, $cursor, $scopeLease),
            'invoices' => $this->changed(Invoice::class, InvoiceResource::class, $cursor, $scopeLease),
            'expenses' => $this->changed(Expense::class, ExpenseResource::class, $cursor, $scopeProperty),
            'maintenance_requests' => $this->changed(MaintenanceRequest::class, MaintenanceRequestResource::class, $cursor, $scopeMaintenance, ['tenant', 'propertyUnit']),
            'work_orders' => $this->changed(WorkOrder::class, WorkOrderResource::class, $cursor, $scopeProperty, ['property', 'propertyUnit']),
            'threads' => $this->changed(MessageThread::class, ThreadResource::class, $cursor, $scopeThread, ['participants']),
            'messages' => $this->changed(Message::class, MessageResource::class, $cursor, $scopeMessage, ['sender']),
            'notifications' => $this->changedNotifications($cursor),
        ];

        $deleted = [
            'properties' => $this->deleted(Property::class, $cursor, fn ($q) => $this->filter($q, 'id', $this->visiblePropertyIds())),
            'property_units' => $this->deleted(PropertyUnit::class, $cursor, $scopeProperty),
            'tenants' => $this->deleted(Tenant::class, $cursor, fn ($q) => $this->filter($q, 'id', $this->visibleTenantIds())),
            'leases' => $this->deleted(Lease::class, $cursor, fn ($q) => $this->filter($q, 'id', $this->visibleLeaseIds())),
            'payments' => $this->deleted(Payment::class, $cursor, $scopeLease),
            'invoices' => $this->deleted(Invoice::class, $cursor, $scopeLease),
            'expenses' => $this->deleted(Expense::class, $cursor, $scopeProperty),
            'maintenance_requests' => $this->deleted(MaintenanceRequest::class, $cursor, $scopeMaintenance),
            'work_orders' => $this->deleted(WorkOrder::class, $cursor, $scopeProperty),
            'threads' => $this->deleted(MessageThread::class, $cursor, $scopeThread),
            'messages' => $this->deleted(Message::class, $cursor, $scopeMessage),
        ];

        return response()->json([
            'server_time' => now()->toIso8601String(),
            'since' => $cursor?->toIso8601String(),
            'data' => $data,
            'deleted' => $deleted,
        ]);
    }

    public function outbox(Request $request): JsonResponse
    {
        $operations = $request->validate([
            'operations' => ['required', 'array', 'max:100'],
            'operations.*.type' => ['required', 'string'],
            'operations.*.client_uuid' => ['required', 'uuid'],
            'operations.*.payload' => ['required', 'array'],
        ])['operations'];

        $results = [];

        foreach ($operations as $operation) {
            try {
                $this->dispatchOperation($operation['type'], $operation['client_uuid'], $operation['payload']);
                $results[] = ['client_uuid' => $operation['client_uuid'], 'ok' => true];
            } catch (\Throwable $e) {
                $results[] = [
                    'client_uuid' => $operation['client_uuid'],
                    'ok' => false,
                    'error' => $e->getMessage(),
                ];
            }
        }

        return response()->json(['results' => $results]);
    }

    private function dispatchOperation(string $type, string $clientUuid, array $payload): void
    {
        $payload['client_uuid'] = $clientUuid;

        $sub = Request::create('/api/v1/sync/outbox', 'POST', $payload);
        $sub->setUserResolver(fn () => $this->user());

        match ($type) {
            'maintenance_request.create' => app(MaintenanceRequestController::class)->store($sub),
            'expense.create' => app(ExpenseController::class)->store($sub),
            'message.create' => app(MessageController::class)->storeMessage($sub, MessageThread::query()->findOrFail($payload['thread_id'])),
            'maintenance_request.status' => app(MaintenanceRequestController::class)->updateStatus($sub, MaintenanceRequest::query()->findOrFail($payload['maintenance_request_id'])),
            'work_order.status' => app(WorkOrderController::class)->updateStatus($sub, WorkOrder::query()->findOrFail($payload['work_order_id'])),
            default => throw new \InvalidArgumentException("Opération inconnue : {$type}"),
        };
    }

    private function filter(Builder $query, string $column, ?Collection $ids): void
    {
        if ($ids !== null) {
            $query->whereIn($column, $ids);
        }
    }

    private function changed(string $model, string $resource, ?Carbon $cursor, ?Closure $scope = null, array $with = []): array
    {
        $query = $model::query()->with($with);
        if ($scope !== null) {
            $scope($query);
        }
        if ($cursor !== null) {
            $query->where('updated_at', '>', $cursor);
        }

        return $resource::collection($query->limit(5000)->get())->resolve();
    }

    private function deleted(string $model, ?Carbon $cursor, ?Closure $scope = null): array
    {
        if ($cursor === null) {
            return [];
        }

        // Les modèles sans SoftDeletes (messages, threads) sont supprimés en dur :
        // pas de tombstone possible, le client les récupère via une resync complète.
        if (! in_array(SoftDeletes::class, class_uses_recursive($model), true)) {
            return [];
        }

        $query = $model::query()->onlyTrashed()->where('deleted_at', '>', $cursor);
        if ($scope !== null) {
            $scope($query);
        }

        return $query->pluck('id')->all();
    }

    private function changedNotifications(?Carbon $cursor): array
    {
        $query = $this->user()->notifications();
        if ($cursor !== null) {
            $query->where('updated_at', '>', $cursor);
        }

        return NotificationResource::collection($query->limit(1000)->get())->resolve();
    }
}
