@extends('layouts.app')

@section('title', 'Nouveau patient')

@section('content')
<h1>Nouveau patient</h1>

<form method="POST" action="{{ route('patients.store') }}">
    @csrf
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="first_name" class="form-label">Prénom</label>
            <input type="text" class="form-control @error('first_name') is-invalid @enderror" id="first_name" name="first_name" value="{{ old('first_name') }}" required>
            @error('first_name')<div class="invalid-feedback">{{ $message }}</div>@enderror
        </div>
        <div class="col-md-6 mb-3">
            <label for="last_name" class="form-label">Nom</label>
            <input type="text" class="form-control @error('last_name') is-invalid @enderror" id="last_name" name="last_name" value="{{ old('last_name') }}" required>
            @error('last_name')<div class="invalid-feedback">{{ $message }}</div>@enderror
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 mb-3">
            <label for="date_of_birth" class="form-label">Date de naissance</label>
            <input type="date" class="form-control @error('date_of_birth') is-invalid @enderror" id="date_of_birth" name="date_of_birth" value="{{ old('date_of_birth') }}" required>
            @error('date_of_birth')<div class="invalid-feedback">{{ $message }}</div>@enderror
        </div>
        <div class="col-md-4 mb-3">
            <label for="gender" class="form-label">Genre</label>
            <select class="form-select @error('gender') is-invalid @enderror" id="gender" name="gender" required>
                <option value="">Sélectionner...</option>
                <option value="male" {{ old('gender') == 'male' ? 'selected' : '' }}>Homme</option>
                <option value="female" {{ old('gender') == 'female' ? 'selected' : '' }}>Femme</option>
                <option value="other" {{ old('gender') == 'other' ? 'selected' : '' }}>Autre</option>
            </select>
            @error('gender')<div class="invalid-feedback">{{ $message }}</div>@enderror
        </div>
        <div class="col-md-4 mb-3">
            <label for="blood_group" class="form-label">Groupe sanguin</label>
            <input type="text" class="form-control" id="blood_group" name="blood_group" value="{{ old('blood_group') }}" maxlength="5">
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="phone" class="form-label">Téléphone</label>
            <input type="text" class="form-control" id="phone" name="phone" value="{{ old('phone') }}">
        </div>
        <div class="col-md-6 mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" value="{{ old('email') }}">
        </div>
    </div>
    <div class="mb-3">
        <label for="address" class="form-label">Adresse</label>
        <textarea class="form-control" id="address" name="address" rows="2">{{ old('address') }}</textarea>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="emergency_contact_name" class="form-label">Contact d'urgence (nom)</label>
            <input type="text" class="form-control" id="emergency_contact_name" name="emergency_contact_name" value="{{ old('emergency_contact_name') }}">
        </div>
        <div class="col-md-6 mb-3">
            <label for="emergency_contact_phone" class="form-label">Contact d'urgence (téléphone)</label>
            <input type="text" class="form-control" id="emergency_contact_phone" name="emergency_contact_phone" value="{{ old('emergency_contact_phone') }}">
        </div>
    </div>
    <div class="mb-3">
        <label for="medical_history" class="form-label">Antécédents médicaux</label>
        <textarea class="form-control" id="medical_history" name="medical_history" rows="3">{{ old('medical_history') }}</textarea>
    </div>
    <button type="submit" class="btn btn-success">Enregistrer</button>
    <a href="{{ route('patients.index') }}" class="btn btn-secondary">Annuler</a>
</form>
@endsection