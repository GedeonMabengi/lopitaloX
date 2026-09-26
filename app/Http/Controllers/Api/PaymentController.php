<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PaymentResource;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PaymentController extends Controller
{
    use RoleScoping;

    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Payment::query()->with('lease');
        $ids = $this->visibleLeaseIds();
        if ($ids !== null) {
            $query->whereIn('lease_id', $ids);
        }

        return PaymentResource::collection(
            $query->orderByDesc('payment_date')->paginate($request->integer('per_page', 100))
        );
    }

    public function show(Payment $payment): PaymentResource
    {
        $ids = $this->visibleLeaseIds();
        abort_if($ids !== null && ! $ids->contains($payment->lease_id), 403, 'Accès refusé.');

        return new PaymentResource($payment->load('lease'));
    }
}
