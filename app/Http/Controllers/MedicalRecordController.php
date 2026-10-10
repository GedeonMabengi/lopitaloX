<?php

namespace App\Http\Controllers;

use App\Models\MedicalRecord;
use App\Models\Patient;
use App\Models\Admission;
use Illuminate\Http\Request;

class MedicalRecordController extends Controller
{
    public function index(Patient $patient)
    {
        $records = MedicalRecord::where('patient_id', $patient->id)
            ->with('staff')
            ->orderBy('record_date', 'desc')
            ->paginate(20);
        return view('medical-records.index', compact('patient', 'records'));
    }

    public function create(Patient $patient)
    {
        $admissions = Admission::where('patient_id', $patient->id)->get();
        return view('medical-records.create', compact('patient', 'admissions'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'admission_id' => 'nullable|exists:admissions,id',
            'record_date' => 'required|date',
            'type' => 'required|string',
            'subjective' => 'nullable|string',
            'objective' => 'nullable|string',
            'assessment' => 'nullable|string',
            'plan' => 'nullable|string',
            'attachments' => 'nullable|array',
        ]);

        $data['staff_id'] = auth()->user()->staff->id ?? null;

        MedicalRecord::create($data);
        return redirect()->route('patients.medical-records.index', $data['patient_id'])
            ->with('success', 'Note médicale enregistrée.');
    }

    public function show(MedicalRecord $medicalRecord)
    {
        $medicalRecord->load('patient', 'staff', 'admission');
        return view('medical-records.show', compact('medicalRecord'));
    }

    public function edit(MedicalRecord $medicalRecord)
    {
        $admissions = Admission::where('patient_id', $medicalRecord->patient_id)->get();
        return view('medical-records.edit', compact('medicalRecord', 'admissions'));
    }

    public function update(Request $request, MedicalRecord $medicalRecord)
    {
        $data = $request->validate([
            'admission_id' => 'nullable|exists:admissions,id',
            'record_date' => 'required|date',
            'type' => 'required|string',
            'subjective' => 'nullable|string',
            'objective' => 'nullable|string',
            'assessment' => 'nullable|string',
            'plan' => 'nullable|string',
            'attachments' => 'nullable|array',
        ]);

        $medicalRecord->update($data);
        return redirect()->route('medical-records.show', $medicalRecord)->with('success', 'Note mise à jour.');
    }

    public function destroy(MedicalRecord $medicalRecord)
    {
        $medicalRecord->delete();
        return redirect()->route('patients.medical-records.index', $medicalRecord->patient_id)
            ->with('success', 'Note supprimée.');
    }

    public function attachDocument(Request $request, MedicalRecord $medicalRecord)
    {
        // Logique pour stocker un fichier et l'ajouter au champ JSON attachments
        // ...
    }
}