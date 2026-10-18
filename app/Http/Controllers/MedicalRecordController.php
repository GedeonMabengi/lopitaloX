<?php

namespace App\Http\Controllers;

use App\Models\MedicalRecord;
use App\Models\Patient;
use App\Models\Admission;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MedicalRecordController extends Controller
{
    public function index(Patient $patient): Response
    {
        return Inertia::render('medical-records/index', [
            'patient' => ['id' => $patient->id, 'fullName' => $patient->full_name],
            'records' => MedicalRecord::where('patient_id', $patient->id)
                ->with('staff')
                ->orderBy('record_date', 'desc')
                ->paginate(20)
                ->through(fn (MedicalRecord $record) => [
                    'id' => $record->id,
                    'recordDate' => $record->record_date->format('d/m/Y H:i'),
                    'type' => $record->type,
                    'staff' => $record->staff?->full_name,
                ]),
        ]);
    }

    public function create(Patient $patient): Response
    {
        return Inertia::render('medical-records/create', [
            'patient' => ['id' => $patient->id, 'fullName' => $patient->full_name],
            'now' => now()->format('Y-m-d\TH:i'),
            'admissions' => Admission::where('patient_id', $patient->id)->get()
                ->map(fn (Admission $admission) => [
                    'value' => (string) $admission->id,
                    'label' => "{$admission->admission_date->format('d/m/Y')} - {$admission->status->label()}",
                ]),
        ]);
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
        $this->toast('Note médicale enregistrée.');
        return redirect()->route('patients.medical-records.index', $data['patient_id']);
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
        $this->toast('Note mise à jour.');
        return redirect()->route('medical-records.show', $medicalRecord);
    }

    public function destroy(MedicalRecord $medicalRecord)
    {
        $medicalRecord->delete();
        $this->toast('Note supprimée.');
        return redirect()->route('patients.medical-records.index', $medicalRecord->patient_id);
    }

    public function attachDocument(Request $request, MedicalRecord $medicalRecord)
    {
        // Logique pour stocker un fichier et l'ajouter au champ JSON attachments
        // ...
    }
}