<?php

namespace App\Http\Controllers;

use App\Enums\AppointmentStatus;
use App\Models\Appointment;
use App\Models\Patient;
use App\Models\Staff;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class AppointmentController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Appointment::with('patient', 'staff', 'department');

        if ($request->filled('date')) {
            $query->whereDate('scheduled_at', $request->input('date'));
        }

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        return Inertia::render('appointments/index', [
            'filters' => $request->only('date', 'status'),
            'statuses' => AppointmentStatus::options(),
            'appointments' => $query->orderBy('scheduled_at')->paginate(20)->withQueryString()
                ->through(fn (Appointment $appointment) => [
                    'id' => $appointment->id,
                    'scheduledAt' => $appointment->scheduled_at->format('d/m/Y H:i'),
                    'patient' => $appointment->patient->full_name,
                    'staff' => $appointment->staff?->full_name,
                    'department' => $appointment->department?->name,
                    'status' => $appointment->status->toOption(),
                ]),
        ]);
    }

    public function create(Request $request): Response
    {
        return Inertia::render('appointments/create', [
            'selectedPatientId' => $request->integer('patient_id') ?: null,
            'patients' => Patient::orderBy('last_name')->get()
                ->map(fn (Patient $patient) => ['value' => (string) $patient->id, 'label' => "{$patient->full_name} ({$patient->patient_code})"]),
            'staff' => Staff::orderBy('last_name')->get()
                ->map(fn (Staff $member) => ['value' => (string) $member->id, 'label' => trim("{$member->full_name} ({$member->specialty})", ' ()')]),
            'departments' => Department::orderBy('name')->get()
                ->map(fn (Department $department) => ['value' => (string) $department->id, 'label' => $department->name]),
        ]);
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

        $this->toast('Rendez-vous enregistré.');

        return redirect()->route('appointments.index');
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
            'status' => ['nullable', Rule::enum(AppointmentStatus::class)],
        ]);

        $appointment->update($data);
        $this->toast('Rendez-vous mis à jour.');
        return redirect()->route('appointments.show', $appointment);
    }

    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        $this->toast('Rendez-vous supprimé.');
        return redirect()->route('appointments.index');
    }

    // Actions spécifiques
    public function confirm(Appointment $appointment)
    {
        $appointment->update(['status' => 'confirmed']);
        $this->toast('Rendez-vous confirmé.');
        return back();
    }

    public function checkIn(Appointment $appointment)
    {
        $appointment->update(['status' => 'checked_in']);
        $this->toast('Patient arrivé.');
        return back();
    }

    public function complete(Appointment $appointment)
    {
        $appointment->update(['status' => 'completed']);
        $this->toast('Consultation terminée.');
        return back();
    }

    public function cancel(Appointment $appointment)
    {
        $appointment->update(['status' => 'cancelled']);
        $this->toast('Rendez-vous annulé.');
        return back();
    }

    public function noShow(Appointment $appointment)
    {
        $appointment->update(['status' => 'no_show']);
        $this->toast('Patient marqué comme absent.');
        return back();
    }
}