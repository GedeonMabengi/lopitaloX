@extends('layouts.app') {{-- ou un layout spécifique pour le portail --}}

@section('title', 'Mon espace patient')

@section('content')
<h1>Bienvenue, {{ $patient->full_name }}</h1>

<div class="row mt-4">
    <div class="col-md-4 mb-3">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <h5 class="card-title">Prochains RDV</h5>
                <p class="card-text display-6">{{ $upcomingAppointments->count() }}</p>
                <a href="{{ route('portal.appointments') }}" class="text-white">Voir mes rendez-vous →</a>
            </div>
        </div>
    </div>
    <div class="col-md-4 mb-3">
        <div class="card text-white bg-info">
            <div class="card-body">
                <h5 class="card-title">Dossiers médicaux</h5>
                <p class="card-text display-6">{{ $recentRecords->count() }}</p>
                <a href="{{ route('portal.medical-records') }}" class="text-white">Voir mes dossiers →</a>
            </div>
        </div>
    </div>
    <div class="col-md-4 mb-3">
        <div class="card text-white bg-warning">
            <div class="card-body">
                <h5 class="card-title">Factures impayées</h5>
                <p class="card-text display-6">{{ $unpaidInvoices->count() }}</p>
                <a href="{{ route('portal.invoices') }}" class="text-white">Voir mes factures →</a>
            </div>
        </div>
    </div>
</div>
@endsection
