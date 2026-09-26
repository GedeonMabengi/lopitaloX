<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\InvoiceResource;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class InvoiceController extends Controller
{
    use RoleScoping;

    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Invoice::query()->with('lease');
        $ids = $this->visibleLeaseIds();
        if ($ids !== null) {
            $query->whereIn('lease_id', $ids);
        }

        return InvoiceResource::collection(
            $query->orderByDesc('period_start')->paginate($request->integer('per_page', 100))
        );
    }

    public function show(Invoice $invoice): InvoiceResource
    {
        $ids = $this->visibleLeaseIds();
        abort_if($ids !== null && ! $ids->contains($invoice->lease_id), 403, 'Accès refusé.');

        return new InvoiceResource($invoice->load('lease'));
    }
}
