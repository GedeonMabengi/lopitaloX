<?php

namespace App\Http\Resources;

use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Invoice */
class InvoiceResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'lease_id' => $this->lease_id,
            'period_start' => $this->period_start,
            'period_end' => $this->period_end,
            'amount' => $this->amount,
            'charges_amount' => $this->charges_amount,
            'total_amount' => $this->total_amount,
            'status' => $this->status,
            'due_date' => $this->due_date,
            'issued_at' => $this->issued_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
