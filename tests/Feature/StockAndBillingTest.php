<?php

use App\Enums\InvoiceStatus;
use App\Models\Invoice;
use App\Models\Medication;
use App\Models\Patient;

test('un mouvement de stock met à jour le lot et le journal ensemble', function () {
    $medication = Medication::create(['name' => 'Paracetamol', 'price' => 2.5]);
    $batch = $medication->batches()->create(['batch_number' => 'LOT-1', 'expiry_date' => '2027-12-31']);

    $batch->move('purchase', 100);
    $batch->move('sale', -30);

    expect($medication->stock_quantity)->toBe(70)
        ->and((int) $batch->stockTransactions()->sum('quantity'))->toBe(70)
        ->and($medication->expiry_date->toDateString())->toBe('2027-12-31');

    // Une sortie supérieure au stock est refusée et ne laisse aucune trace
    expect(fn () => $batch->move('sale', -71))->toThrow(RuntimeException::class);
    expect($batch->fresh()->quantity)->toBe(70)
        ->and($batch->stockTransactions()->count())->toBe(2);
});

test('les totaux de la facture suivent ses lignes et ses paiements', function () {
    $patient = Patient::create([
        'patient_code' => 'PAT-T1',
        'first_name' => 'Test',
        'last_name' => 'Patient',
        'date_of_birth' => '1990-01-01',
        'gender' => 'female',
    ]);
    $invoice = Invoice::create([
        'invoice_code' => 'INV-T1',
        'patient_id' => $patient->id,
        'invoice_date' => now(),
        'status' => 'issued',
        'discount' => 5,
    ]);

    $invoice->items()->create(['item_type' => 'consultation', 'description' => 'Consultation', 'quantity' => 2, 'unit_price' => 25]);
    $invoice->refresh();

    expect((float) $invoice->total_amount)->toBe(45.0)
        ->and((float) $invoice->balance_due)->toBe(45.0);

    $invoice->payments()->create(['payment_code' => 'PAY-T1', 'payment_date' => now(), 'amount' => 45, 'payment_method' => 'cash']);
    $invoice->refresh();

    expect((float) $invoice->balance_due)->toBe(0.0)
        ->and($invoice->status)->toBe(InvoiceStatus::Paid);
});
