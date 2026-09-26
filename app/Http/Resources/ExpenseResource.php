<?php

namespace App\Http\Resources;

use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Expense */
class ExpenseResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'client_uuid' => $this->client_uuid,
            'property_id' => $this->property_id,
            'property_unit_id' => $this->property_unit_id,
            'category_id' => $this->category_id,
            'supplier_id' => $this->supplier_id,
            'amount' => $this->amount,
            'date' => $this->date,
            'description' => $this->description,
            'invoice_file' => $this->invoice_file,
            'is_recoverable' => $this->is_recoverable,
            'recovered_from_tenants' => $this->recovered_from_tenants,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
