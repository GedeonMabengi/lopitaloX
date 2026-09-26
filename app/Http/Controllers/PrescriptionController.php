<?php

namespace App\Http\Controllers;

use App\Models\Prescription;
use App\Models\Patient;
use App\Models\Admission;
use App\Models\Staff;
use Illuminate\Http\Request;

class PrescriptionController extends Controller
{
    public function index(Request $request)
    {
        $query = Prescription::with('patient', 'prescriber');

        if ($request->filled('patient_id')) {
            $query->where('patient_id', $request->input('patient_id'));
        }

        $prescriptions = $query->orderBy('prescribed_at', 'desc')->paginate(20);
        return view('prescriptions.index', compact('prescriptions'));
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

        return redirect()->route('prescriptions.show', $prescription)
            ->with('success', 'Prescription créée. Ajoutez maintenant les médicaments.');
    }

    public function show(Prescription $prescription)
    {
        $prescription->load('patient', 'prescriber', 'admission', 'items.medication', 'items.dispensingRecords');
        return view('prescriptions.show', compact('prescription'));
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
            'status' => 'nullable|in:active,completed,cancelled,expired',
        ]);

        $prescription->update($data);
        return redirect()->route('prescriptions.show', $prescription)->with('success', 'Prescription mise à jour.');
    }

    public function destroy(Prescription $prescription)
    {
        $prescription->delete();
        return redirect()->route('prescriptions.index')->with('success', 'Prescription supprimée.');
    }
}
