<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TenantResource;
use App\Models\Tenant;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TenantController extends Controller
{
    use RoleScoping;

    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Tenant::query();
        $ids = $this->visibleTenantIds();
        if ($ids !== null) {
            $query->whereIn('id', $ids);
        }

        return TenantResource::collection(
            $query->orderBy('last_name')->paginate($request->integer('per_page', 100))
        );
    }

    public function show(Tenant $tenant): TenantResource
    {
        $ids = $this->visibleTenantIds();
        abort_if($ids !== null && ! $ids->contains($tenant->id), 403, 'Accès refusé.');

        return new TenantResource($tenant);
    }
}
