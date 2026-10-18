<?php

namespace App\Http\Controllers;

use App\Enums\PrescriptionStatus;
use App\Models\Prescription;
use App\Models\Patient;
use App\Models\Admission;
use App\Models\Staff;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class PrescriptionController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Prescription::with('patient', 'prescriber');

        if ($request->filled('patient_id')) {
            $query->where('patient_id', $request->input('patient_id'));
        }

        return Inertia::render('prescriptions/index', [
            'prescriptions' => $query->orderBy('prescribed_at', 'desc')->paginate(20)->withQueryString()
                ->through(fn (Prescription $prescription) => [
                    'id' => $prescription->id,
                    'prescribedAt' => $prescription->prescribed_at->format('d/m/Y H:i'),
                    'patient' => $prescription->patient->full_name,
                    'prescriber' => $prescription->prescriber?->full_name,
                    'status' => $prescription->status->toOption(),
                ]),
        ]);
    }

    public function create(Request $request)
    {
        $patients = Patient::orderBy('last_name')->get();
        $admissions = Admission::where('status', 'active')->get();
        $staff = Staff::orderBy('last_name')->get();

        $patient_id = $request->input('patient_id');
        return view('prescriptions.create', compact('patients', 'admissions', 'staff', 'patient_id'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'admission_id' => 'nullable|exists:admissions,id',
            'prescriber_id' => 'nullable|exists:staff,id',
            'prescribed_at' => 'required|date',
            'notes' => 'nullable|string',
        ]);

        $data['status'] = 'active';
        $prescription = Prescription::create($data);

        $this->toast('Prescription créée. Ajoutez maintenant les médicaments.');

        return redirect()->route('prescriptions.show', $prescription);
    }

    public function show(Prescription $prescription): Response
    {
        $prescription->load('patient', 'prescriber', 'items.medication');

        return Inertia::render('prescriptions/show', [
            'prescription' => [
                'id' => $prescription->id,
                'patient' => $prescription->patient->full_name,
                'prescribedAt' => $prescription->prescribed_at->format('d/m/Y H:i'),
                'prescriber' => $prescription->prescriber?->full_name,
                'status' => $prescription->status->toOption(),
                'notes' => $prescription->notes,
                'items' => $prescription->items->map(fn ($item) => [
                    'id' => $item->id,
                    'medication' => $item->medication?->name ?? $item->medication_name,
                    'dosage' => $item->dosage,
                    'frequency' => $item->frequency,
                    'duration' => $item->duration,
                    'status' => $item->status->toOption(),
                ]),
            ],
        ]);
    }

    public function edit(Prescription $prescription)
    {
        $patients = Patient::orderBy('last_name')->get();
        $admissions = Admission::where('status', 'active')->get();
        $staff = Staff::orderBy('last_name')->get();
        return view('prescriptions.edit', compact('prescription', 'patients', 'admissions', 'staff'));
    }

    public function update(Request $request, Prescription $prescription)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'admission_id' => 'nullable|exists:admissions,id',
            'prescriber_id' => 'nullable|exists:staff,id',
            'prescribed_at' => 'required|date',
            'notes' => 'nullable|string',
            'status' => ['nullable', Rule::enum(PrescriptionStatus::class)],
        ]);

        $prescription->update($data);
        $this->toast('Prescription mise à jour.');
        return redirect()->route('prescriptions.show', $prescription);
    }

    public function destroy(Prescription $prescription)
    {
        $prescription->delete();
        $this->toast('Prescription supprimée.');
        return redirect()->route('prescriptions.index');
    }
}
