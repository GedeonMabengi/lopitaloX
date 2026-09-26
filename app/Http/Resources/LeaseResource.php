<?php

namespace App\Http\Resources;

use App\Models\Lease;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Lease */
class LeaseResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'tenant_id' => $this->tenant_id,
            'property_unit_id' => $this->property_unit_id,
            'tenant' => new TenantResource($this->whenLoaded('tenant')),
            'property_unit' => new PropertyUnitResource($this->whenLoaded('propertyUnit')),
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'lease_type' => $this->lease_type,
            'rent_amount' => $this->rent_amount,
            'charges_amount' => $this->charges_amount,
            'deposit_amount' => $this->deposit_amount,
            'payment_frequency' => $this->payment_frequency,
            'status' => $this->status,
            'payments' => PaymentResource::collection($this->whenLoaded('payments')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
