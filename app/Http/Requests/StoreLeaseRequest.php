<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLeaseRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'tenant_id' => 'required|exists:tenants,id',
            'property_unit_id' => 'required|exists:property_units,id',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'lease_type' => 'required|in:fixed_term,periodic,seasonal',
            'rent_amount' => 'required|numeric',
            'charges_amount' => 'nullable|numeric',
            'deposit_amount' => 'nullable|numeric',
            'payment_frequency' => 'required|in:monthly,quarterly',
            'payment_method' => 'required|in:bank_transfer,direct_debit,cash,online',
            'status' => 'required|in:active,expired,terminated,pending',
            'signed_at' => 'nullable|date',
            'file_path' => 'nullable|string',
            'notes' => 'nullable|string',
        ];
    }
}
