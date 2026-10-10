<?php

namespace App\Http\Controllers;

use App\Enums\Gender;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PatientController extends Controller
{
    public function index(Request $request)
    {
        $query = Patient::query();

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function($q) use ($search) {
                $q->where('first_name', 'like', "%{$search}%")
                  ->orWhere('last_name', 'like', "%{$search}%")
                  ->orWhere('patient_code', 'like', "%{$search}%");
            });
        }

        $patients = $query->orderBy('last_name')->paginate(20);
        return view('patients.index', compact('patients'));
    }

    public function create()
    {
        return view('patients.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
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
        ]);

        // Générer un code patient unique (ex: PAT0001)
        $data['patient_code'] = 'PAT' . str_pad(Patient::max('id') + 1, 4, '0', STR_PAD_LEFT);

        Patient::create($data);

        return redirect()->route('patients.index')->with('success', 'Patient créé avec succès.');
    }

    public function show(Patient $patient)
    {
        $patient->load('medicalRecords', 'allergies', 'vitalSigns', 'appointments', 'admissions', 'invoices');
        return view('patients.show', compact('patient'));
    }

    public function edit(Patient $patient)
    {
        return view('patients.edit', compact('patient'));
    }

    public function update(Request $request, Patient $patient)
    {
        $data = $request->validate([
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
        ]);

        $patient->update($data);

        return redirect()->route('patients.show', $patient)->with('success', 'Patient mis à jour.');
    }

    public function destroy(Patient $patient)
    {
        $patient->delete();
        return redirect()->route('patients.index')->with('success', 'Patient supprimé.');
    }
}