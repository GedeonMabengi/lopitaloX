<?php

namespace App\Http\Controllers;

use App\Models\Admission;
use App\Models\Appointment;
use App\Models\Invoice;
use App\Models\Patient;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('dashboard', [
            'stats' => [
                'totalPatients' => Patient::count(),
                'appointmentsToday' => Appointment::whereDate('scheduled_at', today())->count(),
                'activeAdmissions' => Admission::where('status', 'active')->count(),
                'revenueThisMonth' => (float) Invoice::whereMonth('invoice_date', now()->month)
                    ->whereYear('invoice_date', now()->year)
                    ->sum('total_amount'),
            ],
            'upcomingAppointments' => Appointment::where('scheduled_at', '>=', now())
                ->with('patient', 'staff')
                ->orderBy('scheduled_at')
                ->take(10)
                ->get()
                ->map(fn (Appointment $appointment) => [
                    'id' => $appointment->id,
                    'patient' => $appointment->patient->full_name,
                    'staff' => $appointment->staff?->full_name,
                    'scheduledAt' => $appointment->scheduled_at->format('d/m/Y H:i'),
                    'status' => $appointment->status->toOption(),
                ]),
            'recentPatients' => Patient::latest()->take(5)->get()
                ->map(fn (Patient $patient) => [
                    'id' => $patient->id,
                    'fullName' => $patient->full_name,
                    'code' => $patient->patient_code,
                    'createdAt' => $patient->created_at->diffForHumans(),
                ]),
        ]);
    }
}
