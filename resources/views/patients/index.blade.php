@extends('layouts.app')

@section('title', 'Liste des patients')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <h1>Patients</h1>
    <a href="{{ route('patients.create') }}" class="btn btn-primary"><i class="fas fa-plus me-2"></i>Nouveau patient</a>
</div>

<form method="GET" action="{{ route('patients.index') }}" class="mb-3">
    <div class="input-group">
        <input type="text" name="search" class="form-control" placeholder="Rechercher par nom ou code..." value="{{ request('search') }}">
        <button class="btn btn-outline-secondary" type="submit"><i class="fas fa-search"></i></button>
    </div>
</form>

<div class="table-responsive">
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Code</th>
                <th>Nom</th>
                <th>Date de naissance</th>
                <th>Genre</th>
                <th>Téléphone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @forelse($patients as $patient)
                <tr>
                    <td>{{ $patient->patient_code }}</td>
                    <td>{{ $patient->full_name }}</td>
                    <td>{{ $patient->date_of_birth->format('d/m/Y') }}</td>
                    <td>{{ $patient->gender == 'male' ? 'Homme' : ($patient->gender == 'female' ? 'Femme' : 'Autre') }}</td>
                    <td>{{ $patient->phone ?? 'N/A' }}</td>
                    <td>
                        <a href="{{ route('patients.show', $patient) }}" class="btn btn-sm btn-info"><i class="fas fa-eye"></i></a>
                        <a href="{{ route('patients.edit', $patient) }}" class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></a>
                        <form action="{{ route('patients.destroy', $patient) }}" method="POST" class="d-inline">
                            @csrf @method('DELETE')
                            <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Supprimer ce patient ?')"><i class="fas fa-trash"></i></button>
                        </form>
                    </td>
                </tr>
            @empty
                <tr><td colspan="6" class="text-center">Aucun patient trouvé.</td></tr>
            @endforelse
        </tbody>
    </table>
</div>
{{ $patients->links() }}
@endsection