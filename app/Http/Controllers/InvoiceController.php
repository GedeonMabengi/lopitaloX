<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\Patient;
use App\Models\Admission;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index(Request $request)
    {
        $query = Invoice::with('patient');

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        $invoices = $query->orderBy('invoice_date', 'desc')->paginate(20);
        return view('invoices.index', compact('invoices'));
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

        return redirect()->route('invoices.show', $invoice)->with('success', 'Facture créée. Ajoutez des lignes.');
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

        return redirect()->route('invoices.show', $invoice)->with('success', 'Facture mise à jour.');
    }

    public function destroy(Invoice $invoice)
    {
        $invoice->delete();
        return redirect()->route('invoices.index')->with('success', 'Facture supprimée.');
    }

    public function issue(Invoice $invoice)
    {
        $invoice->update(['status' => 'issued']);
        return back()->with('success', 'Facture émise.');
    }

    public function cancel(Invoice $invoice)
    {
        $invoice->update(['status' => 'cancelled']);
        return back()->with('success', 'Facture annulée.');
    }
}