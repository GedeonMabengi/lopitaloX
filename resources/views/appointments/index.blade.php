@extends('layouts.app')

@section('title', 'Liste des rendez-vous')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <h1>Rendez-vous</h1>
    <a href="{{ route('appointments.create') }}" class="btn btn-primary"><i class="fas fa-plus me-2"></i>Nouveau RDV</a>
</div>

<form method="GET" action="{{ route('appointments.index') }}" class="mb-3 row">
    <div class="col-md-3">
        <input type="date" name="date" class="form-control" value="{{ request('date') }}">
    </div>
    <div class="col-md-3">
        <select name="status" class="form-select">
            <option value="">Tous les statuts</option>
            <option value="pending" {{ request('status') == 'pending' ? 'selected' : '' }}>En attente</option>
            <option value="confirmed" {{ request('status') == 'confirmed' ? 'selected' : '' }}>Confirmé</option>
            <option value="checked_in" {{ request('status') == 'checked_in' ? 'selected' : '' }}>Arrivé</option>
            <option value="completed" {{ request('status') == 'completed' ? 'selected' : '' }}>Terminé</option>
            <option value="cancelled" {{ request('status') == 'cancelled' ? 'selected' : '' }}>Annulé</option>
        </select>
    </div>
    <div class="col-md-2">
        <button type="submit" class="btn btn-outline-secondary">Filtrer</button>
    </div>
</form>

<table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>Date/heure</th>
            <th>Patient</th>
            <th>Médecin</th>
            <th>Service</th>
            <th>Statut</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @forelse($appointments as $appointment)
            <tr>
                <td>{{ $appointment->scheduled_at->format('d/m/Y H:i') }}</td>
                <td>{{ $appointment->patient->full_name }}</td>
                <td>{{ $appointment->staff->full_name ?? 'Non assigné' }}</td>
                <td>{{ $appointment->department->name ?? 'N/A' }}</td>
                <td><span class="badge bg-{{ $appointment->status == 'confirmed' ? 'success' : ($appointment->status == 'cancelled' ? 'danger' : 'secondary') }}">{{ ucfirst($appointment->status) }}</span></td>
                <td>
                    <a href="{{ route('appointments.show', $appointment) }}" class="btn btn-sm btn-info"><i class="fas fa-eye"></i></a>
                    <a href="{{ route('appointments.edit', $appointment) }}" class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></a>
                    @if($appointment->status == 'pending')
                        <form action="{{ route('appointments.confirm', $appointment) }}" method="POST" class="d-inline">
                            @csrf
                            <button type="submit" class="btn btn-sm btn-success"><i class="fas fa-check"></i></button>
                        </form>
                    @endif
                </td>
            </tr>
        @empty
            <tr><td colspan="6" class="text-center">Aucun rendez-vous.</td></tr>
        @endforelse
    </tbody>
</table>
{{ $appointments->links() }}
@endsection
