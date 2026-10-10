@extends('layouts.app')

@section('title', 'Factures')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <h1>Factures</h1>
    <a href="{{ route('invoices.create') }}" class="btn btn-primary"><i class="fas fa-plus me-2"></i>Nouvelle facture</a>
</div>

<table class="table table-striped">
    <thead>
        <tr>
            <th>Code</th>
            <th>Date</th>
            <th>Patient</th>
            <th>Montant total</th>
            <th>Payé</th>
            <th>Reste</th>
            <th>Statut</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @forelse($invoices as $invoice)
            <tr>
                <td>{{ $invoice->invoice_code }}</td>
                <td>{{ $invoice->invoice_date->format('d/m/Y') }}</td>
                <td>{{ $invoice->patient->full_name }}</td>
                <td>{{ number_format($invoice->total_amount, 2) }} €</td>
                <td>{{ number_format($invoice->paid_amount, 2) }} €</td>
                <td>{{ number_format($invoice->balance_due, 2) }} €</td>
                <td><span class="badge bg-{{ $invoice->status->value == 'paid' ? 'success' : ($invoice->status->value == 'partially_paid' ? 'warning' : 'secondary') }}">{{ $invoice->status->label() }}</span></td>
                <td>
                    <a href="{{ route('invoices.show', $invoice) }}" class="btn btn-sm btn-info"><i class="fas fa-eye"></i></a>
                </td>
            </tr>
        @empty
            <tr><td colspan="8">Aucune facture.</td></tr>
        @endforelse
    </tbody>
</table>
{{ $invoices->links() }}
@endsection
