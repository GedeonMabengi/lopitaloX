<?php

namespace App\Http\Controllers;

use App\Enums\Gender;
use App\Models\Patient;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class PatientController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Patient::query();

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('first_name', 'like', "%{$search}%")
                    ->orWhere('last_name', 'like', "%{$search}%")
                    ->orWhere('patient_code', 'like', "%{$search}%");
            });
        }

        return Inertia::render('patients/index', [
            'filters' => $request->only('search'),
            'patients' => $query->orderBy('last_name')->paginate(20)->withQueryString()
                ->through(fn (Patient $patient) => [
                    'id' => $patient->id,
                    'code' => $patient->patient_code,
                    'fullName' => $patient->full_name,
                    'dateOfBirth' => $patient->date_of_birth->format('d/m/Y'),
                    'gender' => $patient->gender->label(),
                    'phone' => $patient->phone,
                ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('patients/create', [
            'genders' => Gender::options(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate($this->rules());

        // Générer un code patient unique (ex: PAT0001)
        $data['patient_code'] = 'PAT' . str_pad(Patient::max('id') + 1, 4, '0', STR_PAD_LEFT);

        Patient::create($data);

        $this->toast('Patient créé avec succès.');

        return redirect()->route('patients.index');
    }

    public function show(Patient $patient): Response
    {
        $patient->load('medicalRecords', 'allergies', 'admissions');

        return Inertia::render('patients/show', [
            'patient' => [
                'id' => $patient->id,
                'fullName' => $patient->full_name,
                'code' => $patient->patient_code,
                'dateOfBirth' => $patient->date_of_birth->format('d/m/Y'),
                'gender' => $patient->gender->label(),
                'bloodGroup' => $patient->blood_group,
                'phone' => $patient->phone,
                'email' => $patient->email,
                'address' => $patient->address,
                'emergencyContactName' => $patient->emergency_contact_name,
                'emergencyContactPhone' => $patient->emergency_contact_phone,
                'allergies' => $patient->allergies->map(fn ($allergy) => [
                    'id' => $allergy->id,
                    'allergen' => $allergy->allergen,
                    'severity' => $allergy->severity,
                ]),
                'medicalRecords' => $patient->medicalRecords->sortByDesc('record_date')->take(5)->values()->map(fn ($record) => [
                    'id' => $record->id,
                    'type' => $record->type,
                    'recordDate' => $record->record_date->format('d/m/Y'),
                ]),
                'admissions' => $patient->admissions->map(fn ($admission) => [
                    'id' => $admission->id,
                    'admissionDate' => $admission->admission_date->format('d/m/Y'),
                    'status' => $admission->status->toOption(),
                ]),
            ],
        ]);
    }

    public function edit(Patient $patient): Response
    {
        return Inertia::render('patients/edit', [
            'patient' => [
                'id' => $patient->id,
                'fullName' => $patient->full_name,
                'first_name' => $patient->first_name,
                'last_name' => $patient->last_name,
                'date_of_birth' => $patient->date_of_birth->format('Y-m-d'),
                'gender' => $patient->gender->value,
                'blood_group' => $patient->blood_group,
                'phone' => $patient->phone,
                'email' => $patient->email,
                'address' => $patient->address,
                'emergency_contact_name' => $patient->emergency_contact_name,
                'emergency_contact_phone' => $patient->emergency_contact_phone,
                'medical_history' => $patient->medical_history,
            ],
            'genders' => Gender::options(),
        ]);
    }

    public function update(Request $request, Patient $patient): RedirectResponse
    {
        $patient->update($request->validate($this->rules()));

        $this->toast('Patient mis à jour.');

        return redirect()->route('patients.show', $patient);
    }

    public function destroy(Patient $patient): RedirectResponse
    {
        $patient->delete();

        $this->toast('Patient supprimé.');

        return redirect()->route('patients.index');
    }

    /** @return array<string, mixed> */
    private function rules(): array
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'gender' => ['required', Rule::enum(Gender::class)],
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email',
            'address' => 'nullable|string',
            'emergency_contact_name' => 'nullable|string',
            'emergency_contact_phone' => 'nullable|string',
            'blood_group' => 'nullable|string|max:5',
            'medical_history' => 'nullable|string',
        ];
    }
}
