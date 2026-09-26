<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePaymentRequest extends FormRequest
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
            'lease_id' => 'required|exists:leases,id',
            'invoice_id' => 'nullable|exists:invoices,id',
            'amount' => 'required|numeric|min:0',
            'payment_date' => 'required|date',
            'method' => 'required|in:bank_transfer,direct_debit,cash,online',
            'reference' => 'nullable|string',
            'status' => 'required|in:pending,completed,failed,refunded',
            'received_by' => 'nullable|string',
            'note' => 'nullable|string',
        ];
    }
}
