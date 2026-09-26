<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseResource;
use App\Models\Expense;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ExpenseController extends Controller
{
    use RoleScoping;

    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Expense::query()->with('property');
        $this->scopeByProperty($query);

        return ExpenseResource::collection(
            $query->orderByDesc('date')->paginate($request->integer('per_page', 100))
        );
    }

    public function show(Expense $expense): ExpenseResource
    {
        $ids = $this->visiblePropertyIds();
        abort_if($ids !== null && ! $ids->contains($expense->property_id), 403, 'Accès refusé.');

        return new ExpenseResource($expense->load('property'));
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'property_id' => ['nullable', 'exists:properties,id'],
            'property_unit_id' => ['nullable', 'exists:property_units,id'],
            'category_id' => ['required', 'exists:expense_categories,id'],
            'supplier_id' => ['nullable', 'exists:suppliers,id'],
            'amount' => ['required', 'numeric', 'min:0'],
            'date' => ['required', 'date'],
            'description' => ['nullable', 'string'],
            'invoice_file' => ['nullable', 'string'],
            'is_recoverable' => ['nullable', 'boolean'],
            'recovered_from_tenants' => ['nullable', 'boolean'],
            'client_uuid' => ['nullable', 'uuid'],
        ]);

        // Idempotence : rejeu d'une opération de l'outbox mobile.
        if ($request->filled('client_uuid')) {
            $existing = Expense::query()->where('client_uuid', $request->client_uuid)->first();
            if ($existing) {
                return response()->json((new ExpenseResource($existing->load('property')))->resolve());
            }
        }

        $expense = Expense::query()->create([
            ...$data,
            'client_uuid' => $request->client_uuid ?? null,
        ]);

        return response()->json((new ExpenseResource($expense->load('property')))->resolve(), 201);
    }
}
