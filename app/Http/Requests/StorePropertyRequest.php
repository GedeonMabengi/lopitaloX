<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePropertyRequest extends FormRequest
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
            'owner_user_id' => 'required|exists:users,id',
            'name' => 'required|string|max:255',
            'type' => 'required|in:apartment,house,commercial,seasonal',
            'address' => 'required|string',
            'city' => 'required|string',
            'postal_code' => 'required|string',
            'country' => 'required|string',
            'description' => 'nullable|string',
            'surface' => 'nullable|numeric',
            'construction_year' => 'nullable|integer',
            'status' => 'required|in:active,inactive',
            'acquisition_date' => 'nullable|date',
            'acquisition_price' => 'nullable|numeric',
        ];
    }
}
