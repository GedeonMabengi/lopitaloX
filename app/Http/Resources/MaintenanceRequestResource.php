<?php

namespace App\Http\Resources;

use App\Models\MaintenanceRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin MaintenanceRequest */
class MaintenanceRequestResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'client_uuid' => $this->client_uuid,
            'tenant_id' => $this->tenant_id,
            'property_unit_id' => $this->property_unit_id,
            'category' => $this->category,
            'description' => $this->description,
            'photos' => $this->photos,
            'priority' => $this->priority,
            'status' => $this->status,
            'tenant' => new TenantResource($this->whenLoaded('tenant')),
            'property_unit' => new PropertyUnitResource($this->whenLoaded('propertyUnit')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
