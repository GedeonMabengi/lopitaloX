<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LeaseResource;
use App\Models\Lease;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class LeaseController extends Controller
{
    use RoleScoping;

    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Lease::query()->with('tenant', 'propertyUnit');
        $ids = $this->visibleLeaseIds();
        if ($ids !== null) {
            $query->whereIn('id', $ids);
        }

        return LeaseResource::collection(
            $query->orderByDesc('start_date')->paginate($request->integer('per_page', 100))
        );
    }

    public function show(Lease $lease): LeaseResource
    {
        $ids = $this->visibleLeaseIds();
        abort_if($ids !== null && ! $ids->contains($lease->id), 403, 'Accès refusé.');

        return new LeaseResource($lease->load('tenant', 'propertyUnit', 'payments'));
    }
}
