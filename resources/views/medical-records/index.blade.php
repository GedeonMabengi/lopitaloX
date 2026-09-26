@extends('layouts.app')

@section('title', 'Dossiers médicaux')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <h1>Dossiers médicaux - {{ $patient->full_name }}</h1>
    <a href="{{ route('medical-records.create', $patient) }}" class="btn btn-primary"><i class="fas fa-plus me-2"></i>Nouvelle note</a>
</div>

<table class="table table-striped">
    <thead>
        <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Rédacteur</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @forelse($records as $record)
            <tr>
                <td>{{ $record->record_date->format('d/m/Y H:i') }}</td>
                <td>{{ $record->type }}</td>
                <td>{{ $record->staff->full_name ?? 'N/A' }}</td>
                <td>
                    <a href="{{ route('medical-records.show', $record) }}" class="btn btn-sm btn-info"><i class="fas fa-eye"></i></a>
                    <a href="{{ route('medical-records.edit', $record) }}" class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></a>
                </td>
            </tr>
        @empty
            <tr><td colspan="4">Aucun dossier.</td></tr>
        @endforelse
    </tbody>
</table>
{{ $records->links() }}
@endsection
