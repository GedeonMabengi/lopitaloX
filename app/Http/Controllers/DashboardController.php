<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\Appointment;
use App\Models\Admission;
use App\Models\Invoice;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'total_patients' => Patient::count(),
            'appointments_today' => Appointment::whereDate('scheduled_at', today())->count(),
            'active_admissions' => Admission::where('status', 'active')->count(),
            'revenue_this_month' => Invoice::whereMonth('invoice_date', now()->month)
                ->whereYear('invoice_date', now()->year)
                ->sum('total_amount'),
        ];

        $recent_patients = Patient::latest()->take(5)->get();
        $upcoming_appointments = Appointment::where('scheduled_at', '>=', now())
            ->with('patient', 'staff')
            ->orderBy('scheduled_at')
            ->take(10)
            ->get();

        return view('dashboard', compact('stats', 'recent_patients', 'upcoming_appointments'));
    }
}
