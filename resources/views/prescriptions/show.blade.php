@extends('layouts.app')

@section('title', 'Prescription')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <h1>Prescription #{{ $prescription->id }}</h1>
    <a href="{{ route('prescriptions.edit', $prescription) }}" class="btn btn-warning">Modifier</a>
</div>

<div class="card mb-4">
    <div class="card-body">
        <p><strong>Patient :</strong> {{ $prescription->patient->full_name }}</p>
        <p><strong>Prescrit le :</strong> {{ $prescription->prescribed_at->format('d/m/Y H:i') }}</p>
        <p><strong>Prescripteur :</strong> {{ $prescription->prescriber->full_name ?? 'N/A' }}</p>
        <p><strong>Statut :</strong> {{ $prescription->status->label() }}</p>
        @if($prescription->notes)
            <p><strong>Notes :</strong> {{ $prescription->notes }}</p>
        @endif
    </div>
</div>

<h3>Médicaments prescrits</h3>
<table class="table">
    <thead>
        <tr>
            <th>Médicament</th>
            <th>Dosage</th>
            <th>Fréquence</th>
            <th>Durée</th>
            <th>Statut</th>
        </tr>
    </thead>
    <tbody>
        @forelse($prescription->items as $item)
            <tr>
                <td>{{ $item->medication->name ?? $item->medication_name }}</td>
                <td>{{ $item->dosage }}</td>
                <td>{{ $item->frequency }}</td>
                <td>{{ $item->duration }}</td>
                <td>{{ $item->status->label() }}</td>
            </tr>
        @empty
            <tr><td colspan="5">Aucun médicament.</td></tr>
        @endforelse
    </tbody>
</table>
@endsection
