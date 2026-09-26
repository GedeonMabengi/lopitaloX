@extends('layouts.app')

@section('title', 'Modifier le patient')

@section('content')
<h1>Modifier le patient : {{ $patient->full_name }}</h1>

<form method="POST" action="{{ route('patients.update', $patient) }}">
    @csrf @method('PUT')
    <!-- Même champs que create, avec value="{{ old('field', $patient->field) }}" -->
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="first_name" class="form-label">Prénom</label>
            <input type="text" class="form-control @error('first_name') is-invalid @enderror" id="first_name" name="first_name" value="{{ old('first_name', $patient->first_name) }}" required>
            @error('first_name')<div class="invalid-feedback">{{ $message }}</div>@enderror
        </div>
        <div class="col-md-6 mb-3">
            <label for="last_name" class="form-label">Nom</label>
            <input type="text" class="form-control @error('last_name') is-invalid @enderror" id="last_name" name="last_name" value="{{ old('last_name', $patient->last_name) }}" required>
            @error('last_name')<div class="invalid-feedback">{{ $message }}</div>@enderror
        </div>
    </div>
    <!-- ... autres champs ... -->
    <button type="submit" class="btn btn-primary">Mettre à jour</button>
    <a href="{{ route('patients.show', $patient) }}" class="btn btn-secondary">Annuler</a>
</form>
@endsection
