@extends('layouts.app')

@section('title', 'Nouveau rendez-vous')

@section('content')
<h1>Nouveau rendez-vous</h1>

<form method="POST" action="{{ route('appointments.store') }}">
    @csrf
    <div class="mb-3">
        <label for="patient_id" class="form-label">Patient</label>
        <select class="form-select @error('patient_id') is-invalid @enderror" id="patient_id" name="patient_id" required>
            <option value="">Sélectionner un patient</option>
            @foreach($patients as $patient)
                <option value="{{ $patient->id }}" {{ old('patient_id') == $patient->id ? 'selected' : '' }}>{{ $patient->full_name }} ({{ $patient->patient_code }})</option>
            @endforeach
        </select>
        @error('patient_id')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>
    <div class="mb-3">
        <label for="staff_id" class="form-label">Médecin</label>
        <select class="form-select" id="staff_id" name="staff_id">
            <option value="">Non assigné</option>
            @foreach($staff as $member)
                <option value="{{ $member->id }}" {{ old('staff_id') == $member->id ? 'selected' : '' }}>{{ $member->full_name }} ({{ $member->specialty }})</option>
            @endforeach
        </select>
    </div>
    <div class="mb-3">
        <label for="department_id" class="form-label">Service</label>
        <select class="form-select" id="department_id" name="department_id">
            <option value="">Sélectionner...</option>
            @foreach($departments as $department)
                <option value="{{ $department->id }}" {{ old('department_id') == $department->id ? 'selected' : '' }}>{{ $department->name }}</option>
            @endforeach
        </select>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="scheduled_at" class="form-label">Date et heure</label>
            <input type="datetime-local" class="form-control @error('scheduled_at') is-invalid @enderror" id="scheduled_at" name="scheduled_at" value="{{ old('scheduled_at') }}" required>
            @error('scheduled_at')<div class="invalid-feedback">{{ $message }}</div>@enderror
        </div>
        <div class="col-md-6 mb-3">
            <label for="end_at" class="form-label">Fin prévue</label>
            <input type="datetime-local" class="form-control" id="end_at" name="end_at" value="{{ old('end_at') }}">
        </div>
    </div>
    <div class="mb-3">
        <label for="reason" class="form-label">Motif</label>
        <textarea class="form-control" id="reason" name="reason" rows="2">{{ old('reason') }}</textarea>
    </div>
    <div class="mb-3">
        <label for="notes" class="form-label">Notes</label>
        <textarea class="form-control" id="notes" name="notes" rows="2">{{ old('notes') }}</textarea>
    </div>
    <button type="submit" class="btn btn-success">Enregistrer</button>
    <a href="{{ route('appointments.index') }}" class="btn btn-secondary">Annuler</a>
</form>
@endsection
