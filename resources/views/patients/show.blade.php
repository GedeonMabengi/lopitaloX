@extends('layouts.app')

@section('title', 'Détails du patient')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <h1>{{ $patient->full_name }}</h1>
    <div>
        <a href="{{ route('patients.edit', $patient) }}" class="btn btn-warning"><i class="fas fa-edit me-2"></i>Modifier</a>
        <a href="{{ route('appointments.create', ['patient_id' => $patient->id]) }}" class="btn btn-primary"><i class="fas fa-calendar-plus me-2"></i>Prendre RDV</a>
    </div>
</div>

<div class="row">
    <div class="col-md-6">
        <div class="card mb-3">
            <div class="card-header">Informations personnelles</div>
            <div class="card-body">
                <p><strong>Code :</strong> {{ $patient->patient_code }}</p>
                <p><strong>Date de naissance :</strong> {{ $patient->date_of_birth->format('d/m/Y') }}</p>
                <p><strong>Genre :</strong> {{ $patient->gender->label() }}</p>
                <p><strong>Groupe sanguin :</strong> {{ $patient->blood_group ?? 'N/A' }}</p>
                <p><strong>Téléphone :</strong> {{ $patient->phone ?? 'N/A' }}</p>
                <p><strong>Email :</strong> {{ $patient->email ?? 'N/A' }}</p>
                <p><strong>Adresse :</strong> {{ $patient->address ?? 'N/A' }}</p>
                <p><strong>Contact urgence :</strong> {{ $patient->emergency_contact_name }} ({{ $patient->emergency_contact_phone }})</p>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-header">Allergies</div>
            <div class="card-body">
                @if($patient->allergies->count() > 0)
                    <ul>
                        @foreach($patient->allergies as $allergy)
                            <li>{{ $allergy->allergen }} - {{ $allergy->severity }}</li>
                        @endforeach
                    </ul>
                @else
                    <p class="text-muted">Aucune allergie enregistrée.</p>
                @endif
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card mb-3">
            <div class="card-header">Derniers dossiers médicaux</div>
            <div class="card-body">
                @if($patient->medicalRecords->count() > 0)
                    <ul class="list-group">
                        @foreach($patient->medicalRecords->take(5) as $record)
                            <li class="list-group-item">
                                <a href="{{ route('medical-records.show', $record) }}">{{ $record->type }} - {{ $record->record_date->format('d/m/Y') }}</a>
                            </li>
                        @endforeach
                    </ul>
                @else
                    <p class="text-muted">Aucun dossier médical.</p>
                @endif
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-header">Admissions</div>
            <div class="card-body">
                @if($patient->admissions->count() > 0)
                    <ul class="list-group">
                        @foreach($patient->admissions as $admission)
                            <li class="list-group-item">
                                {{ $admission->admission_date->format('d/m/Y') }} - {{ $admission->status->label() }}
                            </li>
                        @endforeach
                    </ul>
                @else
                    <p class="text-muted">Aucune admission.</p>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection
