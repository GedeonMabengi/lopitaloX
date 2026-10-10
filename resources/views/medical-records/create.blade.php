@extends('layouts.app')

@section('title', 'Nouvelle note médicale')

@section('content')
<h1>Nouvelle note pour {{ $patient->full_name }}</h1>

<form method="POST" action="{{ route('medical-records.store') }}">
    @csrf
    <input type="hidden" name="patient_id" value="{{ $patient->id }}">
    <div class="mb-3">
        <label for="record_date" class="form-label">Date</label>
        <input type="datetime-local" class="form-control" id="record_date" name="record_date" value="{{ now()->format('Y-m-d\TH:i') }}" required>
    </div>
    <div class="mb-3">
        <label for="type" class="form-label">Type</label>
        <input type="text" class="form-control" id="type" name="type" value="Consultation" required>
    </div>
    <div class="mb-3">
        <label for="admission_id" class="form-label">Admission liée</label>
        <select class="form-select" id="admission_id" name="admission_id">
            <option value="">Aucune</option>
            @foreach($admissions as $admission)
                <option value="{{ $admission->id }}">{{ $admission->admission_date->format('d/m/Y') }} - {{ $admission->status->label() }}</option>
            @endforeach
        </select>
    </div>
    <div class="mb-3">
        <label for="subjective" class="form-label">Anamnèse / Motif</label>
        <textarea class="form-control" id="subjective" name="subjective" rows="3"></textarea>
    </div>
    <div class="mb-3">
        <label for="objective" class="form-label">Examen clinique</label>
        <textarea class="form-control" id="objective" name="objective" rows="3"></textarea>
    </div>
    <div class="mb-3">
        <label for="assessment" class="form-label">Diagnostic</label>
        <textarea class="form-control" id="assessment" name="assessment" rows="2"></textarea>
    </div>
    <div class="mb-3">
        <label for="plan" class="form-label">Conduite à tenir</label>
        <textarea class="form-control" id="plan" name="plan" rows="2"></textarea>
    </div>
    <button type="submit" class="btn btn-success">Enregistrer</button>
    <a href="{{ route('patients.medical-records.index', $patient) }}" class="btn btn-secondary">Annuler</a>
</form>
@endsection
