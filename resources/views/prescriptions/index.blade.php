@extends('layouts.app')

@section('title', 'Liste des prescriptions')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <h1>Prescriptions</h1>
    <a href="{{ route('prescriptions.create') }}" class="btn btn-primary"><i class="fas fa-plus me-2"></i>Nouvelle prescription</a>
</div>

<table class="table table-striped">
    <thead>
        <tr>
            <th>Date</th>
            <th>Patient</th>
            <th>Prescripteur</th>
            <th>Statut</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @forelse($prescriptions as $prescription)
            <tr>
                <td>{{ $prescription->prescribed_at->format('d/m/Y H:i') }}</td>
                <td>{{ $prescription->patient->full_name }}</td>
                <td>{{ $prescription->prescriber->full_name ?? 'N/A' }}</td>
                <td><span class="badge bg-{{ $prescription->status == 'active' ? 'success' : 'secondary' }}">{{ $prescription->status }}</span></td>
                <td>
                    <a href="{{ route('prescriptions.show', $prescription) }}" class="btn btn-sm btn-info"><i class="fas fa-eye"></i></a>
                </td>
            </tr>
        @empty
            <tr><td colspan="5">Aucune prescription.</td></tr>
        @endforelse
    </tbody>
</table>
{{ $prescriptions->links() }}
@endsection
