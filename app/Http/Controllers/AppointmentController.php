<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Patient;
use App\Models\Staff;
use App\Models\Department;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index(Request $request)
    {
        $query = Appointment::with('patient', 'staff', 'department');

        if ($request->filled('date')) {
            $query->whereDate('scheduled_at', $request->input('date'));
        }

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        $appointments = $query->orderBy('scheduled_at')->paginate(20);
        return view('appointments.index', compact('appointments'));
    }

    public function create()
    {
        $patients = Patient::orderBy('last_name')->get();
        $staff = Staff::orderBy('last_name')->get();
        $departments = Department::orderBy('name')->get();
        return view('appointments.create', compact('patients', 'staff', 'departments'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'staff_id' => 'nullable|exists:staff,id',
            'department_id' => 'nullable|exists:departments,id',
            'scheduled_at' => 'required|date',
            'end_at' => 'nullable|date|after:scheduled_at',
            'reason' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        $data['status'] = 'pending';
        $data['created_by'] = auth()->id();

        Appointment::create($data);

        return redirect()->route('appointments.index')->with('success', 'Rendez-vous enregistré.');
    }

    public function show(Appointment $appointment)
    {
        $appointment->load('patient', 'staff', 'department');
        return view('appointments.show', compact('appointment'));
    }

    public function edit(Appointment $appointment)
    {
        $patients = Patient::orderBy('last_name')->get();
        $staff = Staff::orderBy('last_name')->get();
        $departments = Department::orderBy('name')->get();
        return view('appointments.edit', compact('appointment', 'patients', 'staff', 'departments'));
    }

    public function update(Request $request, Appointment $appointment)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'staff_id' => 'nullable|exists:staff,id',
            'department_id' => 'nullable|exists:departments,id',
            'scheduled_at' => 'required|date',
            'end_at' => 'nullable|date|after:scheduled_at',
            'reason' => 'nullable|string',
            'notes' => 'nullable|string',
            'status' => 'nullable|in:pending,confirmed,checked_in,completed,cancelled,no_show',
        ]);

        $appointment->update($data);
        return redirect()->route('appointments.show', $appointment)->with('success', 'Rendez-vous mis à jour.');
    }

    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        return redirect()->route('appointments.index')->with('success', 'Rendez-vous supprimé.');
    }

    // Actions spécifiques
    public function confirm(Appointment $appointment)
    {
        $appointment->update(['status' => 'confirmed']);
        return back()->with('success', 'Rendez-vous confirmé.');
    }

    public function checkIn(Appointment $appointment)
    {
        $appointment->update(['status' => 'checked_in']);
        return back()->with('success', 'Patient arrivé.');
    }

    public function complete(Appointment $appointment)
    {
        $appointment->update(['status' => 'completed']);
        return back()->with('success', 'Consultation terminée.');
    }

    public function cancel(Appointment $appointment)
    {
        $appointment->update(['status' => 'cancelled']);
        return back()->with('success', 'Rendez-vous annulé.');
    }

    public function noShow(Appointment $appointment)
    {
        $appointment->update(['status' => 'no_show']);
        return back()->with('success', 'Patient marqué comme absent.');
    }
}