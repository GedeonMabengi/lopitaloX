<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\MedicalRecord;
use App\Models\Invoice;
use App\Models\Prescription;
use Illuminate\Http\Request;

class PatientPortalController extends Controller
{
    public function dashboard()
    {
        $patient = auth()->user()->patient;
        if (!$patient) {
            abort(403, 'Compte patient non associé.');
        }

        $upcomingAppointments = Appointment::where('patient_id', $patient->id)
            ->where('scheduled_at', '>=', now())
            ->orderBy('scheduled_at')
            ->take(5)
            ->get();

        $recentRecords = MedicalRecord::where('patient_id', $patient->id)
            ->latest('record_date')
            ->take(5)
            ->get();

        $unpaidInvoices = Invoice::where('patient_id', $patient->id)
            ->where('balance_due', '>', 0)
            ->get();

        return view('portal.dashboard', compact('patient', 'upcomingAppointments', 'recentRecords', 'unpaidInvoices'));
    }

    public function appointments()
    {
        $patient = auth()->user()->patient;
        $appointments = Appointment::where('patient_id', $patient->id)
            ->orderBy('scheduled_at', 'desc')
            ->paginate(10);
        return view('portal.appointments', compact('appointments'));
    }

    public function bookAppointment(Request $request)
    {
        // Logique de prise de rendez-vous en ligne
        // ...
    }

    public function medicalRecords()
    {
        $patient = auth()->user()->patient;
        $records = MedicalRecord::where('patient_id', $patient->id)
            ->orderBy('record_date', 'desc')
            ->paginate(10);
        return view('portal.medical-records', compact('records'));
    }

    public function results()
    {
        // Afficher les résultats de laboratoire et d'imagerie
        // ...
    }

    public function invoices()
    {
        $patient = auth()->user()->patient;
        $invoices = Invoice::where('patient_id', $patient->id)
            ->orderBy('invoice_date', 'desc')
            ->paginate(10);
        return view('portal.invoices', compact('invoices'));
    }

    public function payInvoice(Request $request, Invoice $invoice)
    {
        // Vérifier que la facture appartient au patient connecté
        $patient = auth()->user()->patient;
        if ($invoice->patient_id !== $patient->id) {
            abort(403);
        }
        return view('portal.pay-invoice', compact('invoice'));
    }

    public function processPayment(Request $request, Invoice $invoice)
    {
        // Traitement du paiement en ligne
        // ...
    }

    public function profile()
    {
        $patient = auth()->user()->patient;
        return view('portal.profile', compact('patient'));
    }

    public function updateProfile(Request $request)
    {
        // Mise à jour du profil patient
        // ...
    }

    public function messages()
    {
        // Messagerie sécurisée
        // ...
    }

    public function sendMessage(Request $request)
    {
        // Envoi de message
        // ...
    }
}