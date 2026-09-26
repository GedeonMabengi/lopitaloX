<?php

namespace App\Http\Resources;

use App\Models\PropertyUnit;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin PropertyUnit */
class PropertyUnitResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'property_id' => $this->property_id,
            'unit_number' => $this->unit_number,
            'floor' => $this->floor,
            'surface' => $this->surface,
            'bedrooms' => $this->bedrooms,
            'bathrooms' => $this->bathrooms,
            'monthly_rent_base' => $this->monthly_rent_base,
            'monthly_charges_base' => $this->monthly_charges_base,
            'current_lease_id' => $this->current_lease_id,
            'status' => $this->status,
            'property' => new PropertyResource($this->whenLoaded('property')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
