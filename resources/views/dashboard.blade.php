@extends('layouts.app')

@section('title', 'Tableau de bord')

@section('content')
<h1 class="mb-4">Tableau de bord</h1>

<div class="row">
    <div class="col-md-3 mb-3">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <h5 class="card-title"><i class="fas fa-user-injured me-2"></i>Patients</h5>
                <p class="card-text display-6">{{ $stats['total_patients'] }}</p>
                <a href="{{ route('patients.index') }}" class="text-white">Voir les patients →</a>
            </div>
        </div>
    </div>
    <div class="col-md-3 mb-3">
        <div class="card text-white bg-success">
            <div class="card-body">
                <h5 class="card-title"><i class="fas fa-calendar-alt me-2"></i>RDV aujourd'hui</h5>
                <p class="card-text display-6">{{ $stats['appointments_today'] }}</p>
                <a href="{{ route('appointments.index') }}" class="text-white">Voir les rendez-vous →</a>
            </div>
        </div>
    </div>
    <div class="col-md-3 mb-3">
        <div class="card text-white bg-info">
            <div class="card-body">
                <h5 class="card-title"><i class="fas fa-procedures me-2"></i>Hospitalisations actives</h5>
                <p class="card-text display-6">{{ $stats['active_admissions'] }}</p>
                <a href="{{ route('admissions.index') }}" class="text-white">Voir les admissions →</a>
            </div>
        </div>
    </div>
    <div class="col-md-3 mb-3">
        <div class="card text-white bg-warning">
            <div class="card-body">
                <h5 class="card-title"><i class="fas fa-euro-sign me-2"></i>Revenus ce mois</h5>
                <p class="card-text display-6">{{ number_format($stats['revenue_this_month'], 2) }} €</p>
                <a href="{{ route('invoices.index') }}" class="text-white">Voir les factures →</a>
            </div>
        </div>
    </div>
</div>

<div class="row mt-4">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0">Prochains rendez-vous</h5>
            </div>
            <div class="card-body">
                @if($upcoming_appointments->count() > 0)
                    <ul class="list-group list-group-flush">
                        @foreach($upcoming_appointments as $appointment)
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{{ $appointment->patient->full_name }}</strong><br>
                                    <small>{{ $appointment->scheduled_at->format('d/m/Y H:i') }} - {{ $appointment->staff->full_name ?? 'Non assigné' }}</small>
                                </div>
                                <span class="badge bg-{{ $appointment->status == 'confirmed' ? 'success' : 'secondary' }}">
                                    {{ ucfirst($appointment->status) }}
                                </span>
                            </li>
                        @endforeach
                    </ul>
                @else
                    <p>Aucun rendez-vous à venir.</p>
                @endif
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0">Derniers patients enregistrés</h5>
            </div>
            <div class="card-body">
                @if($recent_patients->count() > 0)
                    <ul class="list-group list-group-flush">
                        @foreach($recent_patients as $patient)
                            <li class="list-group-item">
                                <a href="{{ route('patients.show', $patient) }}">{{ $patient->full_name }}</a>
                                <small class="text-muted">({{ $patient->patient_code }})</small>
                                <span class="float-end">{{ $patient->created_at->diffForHumans() }}</span>
                            </li>
                        @endforeach
                    </ul>
                @else
                    <p>Aucun patient enregistré.</p>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection