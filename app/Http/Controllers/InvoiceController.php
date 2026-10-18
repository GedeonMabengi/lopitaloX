<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\Patient;
use App\Models\Admission;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InvoiceController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Invoice::with('patient');

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        return Inertia::render('invoices/index', [
            'invoices' => $query->orderBy('invoice_date', 'desc')->paginate(20)->withQueryString()
                ->through(fn (Invoice $invoice) => [
                    'id' => $invoice->id,
                    'code' => $invoice->invoice_code,
                    'invoiceDate' => $invoice->invoice_date->format('d/m/Y'),
                    'patient' => $invoice->patient->full_name,
                    'totalAmount' => (float) $invoice->total_amount,
                    'paidAmount' => (float) $invoice->paid_amount,
                    'balanceDue' => (float) $invoice->balance_due,
                    'status' => $invoice->status->toOption(),
                ]),
        ]);
    }

    public function create()
    {
        $patients = Patient::orderBy('last_name')->get();
        $admissions = Admission::orderBy('admission_date', 'desc')->get();
        return view('invoices.create', compact('patients', 'admissions'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'admission_id' => 'nullable|exists:admissions,id',
            'invoice_date' => 'required|date',
            'notes' => 'nullable|string',
        ]);

        $data['invoice_code'] = 'INV' . str_pad(Invoice::max('id') + 1, 6, '0', STR_PAD_LEFT);
        $data['status'] = 'draft';

        $invoice = Invoice::create($data);

        $this->toast('Facture créée. Ajoutez des lignes.');

        return redirect()->route('invoices.show', $invoice);
    }

    public function show(Invoice $invoice)
    {
        $invoice->load('patient', 'admission', 'items', 'payments');
        return view('invoices.show', compact('invoice'));
    }

    public function edit(Invoice $invoice)
    {
        $patients = Patient::orderBy('last_name')->get();
        $admissions = Admission::orderBy('admission_date', 'desc')->get();
        return view('invoices.edit', compact('invoice', 'patients', 'admissions'));
    }

    public function update(Request $request, Invoice $invoice)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'admission_id' => 'nullable|exists:admissions,id',
            'invoice_date' => 'required|date',
            'notes' => 'nullable|string',
            'discount' => 'nullable|numeric|min:0',
            'tax' => 'nullable|numeric|min:0',
        ]);

        $invoice->update($data);
        // Recalculer les totaux
        $invoice->recalculateTotals();

        $this->toast('Facture mise à jour.');

        return redirect()->route('invoices.show', $invoice);
    }

    public function destroy(Invoice $invoice)
    {
        $invoice->delete();
        $this->toast('Facture supprimée.');
        return redirect()->route('invoices.index');
    }

    public function issue(Invoice $invoice)
    {
        $invoice->update(['status' => 'issued']);
        $this->toast('Facture émise.');
        return back();
    }

    public function cancel(Invoice $invoice)
    {
        $invoice->update(['status' => 'cancelled']);
        $this->toast('Facture annulée.');
        return back();
    }
}