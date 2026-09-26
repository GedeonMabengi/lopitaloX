<?php

namespace App\Services;

use App\Models\Lease;
use App\Models\Payment;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Response;

class PdfGeneratorService
{
    public function generateLeasePdf(Lease $lease): Response
    {
        $pdf = Pdf::loadView('documents.lease', compact('lease'));

        return $pdf->download('bail_'.$lease->id.'.pdf');
    }

    public function generateReceiptPdf(Payment $payment): Response
    {
        $pdf = Pdf::loadView('documents.receipt', compact('payment'));

        return $pdf->download('quittance_'.$payment->id.'.pdf');
    }
}
