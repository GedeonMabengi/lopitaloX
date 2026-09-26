<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyUnitResource;
use App\Models\PropertyUnit;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PropertyUnitController extends Controller
{
    use RoleScoping;

    public function index(Request $request): AnonymousResourceCollection
    {
        $query = PropertyUnit::query()->with('property');
        $ids = $this->visiblePropertyIds();
        if ($ids !== null) {
            $query->whereIn('property_id', $ids);
        }

        return PropertyUnitResource::collection(
            $query->orderBy('unit_number')->paginate($request->integer('per_page', 200))
        );
    }

    public function show(PropertyUnit $propertyUnit): PropertyUnitResource
    {
        $ids = $this->visiblePropertyIds();
        abort_if($ids !== null && ! $ids->contains($propertyUnit->property_id), 403, 'Accès refusé.');

        return new PropertyUnitResource($propertyUnit->load('property'));
    }
}
