<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PropertyController extends Controller
{
    use RoleScoping;

    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Property::query()->with('units');
        $ids = $this->visiblePropertyIds();
        if ($ids !== null) {
            $query->whereIn('id', $ids);
        }

        return PropertyResource::collection(
            $query->orderBy('name')->paginate($request->integer('per_page', 100))
        );
    }

    public function show(Property $property): PropertyResource
    {
        $ids = $this->visiblePropertyIds();
        abort_if($ids !== null && ! $ids->contains($property->id), 403, 'Accès refusé.');

        return new PropertyResource($property->load('units'));
    }
}
