Voici une structure complète des vues Blade pour l'application de gestion hospitalière. Le code utilise Bootstrap 5 (CDN) pour le style et Font Awesome pour les icônes. Toutes les vues sont organisées par module et héritent d'un layout principal.

---

## 1. Layout principal

### `resources/views/layouts/app.blade.php`

```blade
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Gestion Hospitalière')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; }
        .sidebar { min-height: 100vh; background: #343a40; }
        .sidebar .nav-link { color: #adb5bd; }
        .sidebar .nav-link:hover, .sidebar .nav-link.active { color: #fff; background: #495057; }
        .main-content { padding: 20px; }
    </style>
</head>
<body>
    <div class="d-flex">
        <!-- Sidebar -->
        <nav class="sidebar p-3" style="width: 250px;">
            <h4 class="text-white mb-4"><i class="fas fa-hospital me-2"></i>MediCare</h4>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('dashboard') ? 'active' : '' }}" href="{{ route('dashboard') }}">
                        <i class="fas fa-tachometer-alt me-2"></i>Tableau de bord
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('patients.*') ? 'active' : '' }}" href="{{ route('patients.index') }}">
                        <i class="fas fa-user-injured me-2"></i>Patients
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('appointments.*') ? 'active' : '' }}" href="{{ route('appointments.index') }}">
                        <i class="fas fa-calendar-alt me-2"></i>Rendez-vous
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('admissions.*') ? 'active' : '' }}" href="{{ route('admissions.index') }}">
                        <i class="fas fa-procedures me-2"></i>Admissions
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('medical-records.*') ? 'active' : '' }}" href="{{ route('medical-records.index') }}">
                        <i class="fas fa-notes-medical me-2"></i>Dossiers médicaux
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('prescriptions.*') ? 'active' : '' }}" href="{{ route('prescriptions.index') }}">
                        <i class="fas fa-prescription me-2"></i>Prescriptions
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('medications.*') ? 'active' : '' }}" href="{{ route('medications.index') }}">
                        <i class="fas fa-pills me-2"></i>Médicaments
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('lab-orders.*') ? 'active' : '' }}" href="{{ route('lab-orders.index') }}">
                        <i class="fas fa-flask me-2"></i>Laboratoire
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('imaging-orders.*') ? 'active' : '' }}" href="{{ route('imaging-orders.index') }}">
                        <i class="fas fa-x-ray me-2"></i>Imagerie
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('invoices.*') ? 'active' : '' }}" href="{{ route('invoices.index') }}">
                        <i class="fas fa-file-invoice-dollar me-2"></i>Facturation
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('staff.*') ? 'active' : '' }}" href="{{ route('staff.index') }}">
                        <i class="fas fa-user-md me-2"></i>Personnel
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('departments.*') ? 'active' : '' }}" href="{{ route('departments.index') }}">
                        <i class="fas fa-building me-2"></i>Services
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('reports.*') ? 'active' : '' }}" href="{{ route('reports.occupancy') }}">
                        <i class="fas fa-chart-bar me-2"></i>Rapports
                    </a>
                </li>
                <li class="nav-item mt-3">
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="btn btn-outline-light btn-sm w-100">
                            <i class="fas fa-sign-out-alt me-2"></i>Déconnexion
                        </button>
                    </form>
                </li>
            </ul>
        </nav>

        <!-- Main Content -->
        <div class="flex-grow-1 main-content">
            @if(session('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ session('success') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            @endif
            @if(session('error'))
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{ session('error') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            @endif

            @yield('content')
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    @stack('scripts')
</body>
</html>
```

---

## 2. Page d'accueil du système (Tableau de bord)

### `resources/views/dashboard.blade.php`

```blade
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
```

---

## 3. Vues d'authentification

### `resources/views/auth/login.blade.php`

```blade
@extends('layouts.app')

@section('title', 'Connexion')

@section('content')
<div class="row justify-content-center mt-5">
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">Connexion</div>
            <div class="card-body">
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control @error('email') is-invalid @enderror" id="email" name="email" value="{{ old('email') }}" required autofocus>
                        @error('email')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Mot de passe</label>
                        <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password" required>
                        @error('password')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Se connecter</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
```

### `resources/views/auth/register.blade.php`

```blade
@extends('layouts.app')

@section('title', 'Inscription')

@section('content')
<div class="row justify-content-center mt-5">
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">Créer un compte</div>
            <div class="card-body">
                <form method="POST" action="{{ route('register') }}">
                    @csrf
                    <div class="mb-3">
                        <label for="name" class="form-label">Nom complet</label>
                        <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ old('name') }}" required>
                        @error('name')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control @error('email') is-invalid @enderror" id="email" name="email" value="{{ old('email') }}" required>
                        @error('email')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Mot de passe</label>
                        <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password" required>
                        @error('password')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="password_confirmation" class="form-label">Confirmer le mot de passe</label>
                        <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">S'inscrire</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
```

---

## 4. Vues pour les Patients

### `resources/views/patients/index.blade.php`

```blade
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
```

### `resources/views/patients/create.blade.php`

```blade
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
```

### `resources/views/patients/edit.blade.php`

```blade
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
```

*(Pour des raisons de brièveté, seuls les deux premiers champs sont montrés ; le reste suit le même principe avec `old('champ', $patient->champ)`)*

### `resources/views/patients/show.blade.php`

```blade
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
                <p><strong>Genre :</strong> {{ $patient->gender == 'male' ? 'Homme' : ($patient->gender == 'female' ? 'Femme' : 'Autre') }}</p>
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
                                {{ $admission->admission_date->format('d/m/Y') }} - {{ $admission->status }}
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
```

---

## 5. Vues pour les Rendez-vous

### `resources/views/appointments/index.blade.php`

```blade
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
```

### `resources/views/appointments/create.blade.php`

```blade
@extends('layouts.app')

@section('title', 'Nouveau rendez-vous')

@section('content')
<h1>Nouveau rendez-vous</h1>

<form method="POST" action="{{ route('appointments.store') }}">
    @csrf
    <div class="mb-3">
        <label for="patient_id" class="form-label">Patient</label>
        <select class="form-select @error('patient_id') is-invalid @enderror" id="patient_id" name="patient_id" required>
            <option value="">Sélectionner un patient</option>
            @foreach($patients as $patient)
                <option value="{{ $patient->id }}" {{ old('patient_id') == $patient->id ? 'selected' : '' }}>{{ $patient->full_name }} ({{ $patient->patient_code }})</option>
            @endforeach
        </select>
        @error('patient_id')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>
    <div class="mb-3">
        <label for="staff_id" class="form-label">Médecin</label>
        <select class="form-select" id="staff_id" name="staff_id">
            <option value="">Non assigné</option>
            @foreach($staff as $member)
                <option value="{{ $member->id }}" {{ old('staff_id') == $member->id ? 'selected' : '' }}>{{ $member->full_name }} ({{ $member->specialty }})</option>
            @endforeach
        </select>
    </div>
    <div class="mb-3">
        <label for="department_id" class="form-label">Service</label>
        <select class="form-select" id="department_id" name="department_id">
            <option value="">Sélectionner...</option>
            @foreach($departments as $department)
                <option value="{{ $department->id }}" {{ old('department_id') == $department->id ? 'selected' : '' }}>{{ $department->name }}</option>
            @endforeach
        </select>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="scheduled_at" class="form-label">Date et heure</label>
            <input type="datetime-local" class="form-control @error('scheduled_at') is-invalid @enderror" id="scheduled_at" name="scheduled_at" value="{{ old('scheduled_at') }}" required>
            @error('scheduled_at')<div class="invalid-feedback">{{ $message }}</div>@enderror
        </div>
        <div class="col-md-6 mb-3">
            <label for="end_at" class="form-label">Fin prévue</label>
            <input type="datetime-local" class="form-control" id="end_at" name="end_at" value="{{ old('end_at') }}">
        </div>
    </div>
    <div class="mb-3">
        <label for="reason" class="form-label">Motif</label>
        <textarea class="form-control" id="reason" name="reason" rows="2">{{ old('reason') }}</textarea>
    </div>
    <div class="mb-3">
        <label for="notes" class="form-label">Notes</label>
        <textarea class="form-control" id="notes" name="notes" rows="2">{{ old('notes') }}</textarea>
    </div>
    <button type="submit" class="btn btn-success">Enregistrer</button>
    <a href="{{ route('appointments.index') }}" class="btn btn-secondary">Annuler</a>
</form>
@endsection
```

*(Les vues `edit`, `show` suivent le même schéma)*

---

## 6. Vues pour les Dossiers médicaux

### `resources/views/medical-records/index.blade.php`

```blade
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
```

### `resources/views/medical-records/create.blade.php`

```blade
@extends('layouts.app')

@section('title', 'Nouvelle note médicale')

@section('content')
<h1>Nouvelle note pour {{ $patient->full_name }}</h1>

<form method="POST" action="{{ route('medical-records.store') }}">
    @csrf
    <input type="hidden" name="patient_id" value="{{ $patient->id }}">
    <div class="mb-3">
        <label for="record_date" class="form-label">Date</label>
        <input type="datetime-local" class="form-control" id="record_date" name="record_date" value="{{ now()->format('Y-m-d\TH:i') }}" required>
    </div>
    <div class="mb-3">
        <label for="type" class="form-label">Type</label>
        <input type="text" class="form-control" id="type" name="type" value="Consultation" required>
    </div>
    <div class="mb-3">
        <label for="admission_id" class="form-label">Admission liée</label>
        <select class="form-select" id="admission_id" name="admission_id">
            <option value="">Aucune</option>
            @foreach($admissions as $admission)
                <option value="{{ $admission->id }}">{{ $admission->admission_date->format('d/m/Y') }} - {{ $admission->status }}</option>
            @endforeach
        </select>
    </div>
    <div class="mb-3">
        <label for="subjective" class="form-label">Anamnèse / Motif</label>
        <textarea class="form-control" id="subjective" name="subjective" rows="3"></textarea>
    </div>
    <div class="mb-3">
        <label for="objective" class="form-label">Examen clinique</label>
        <textarea class="form-control" id="objective" name="objective" rows="3"></textarea>
    </div>
    <div class="mb-3">
        <label for="assessment" class="form-label">Diagnostic</label>
        <textarea class="form-control" id="assessment" name="assessment" rows="2"></textarea>
    </div>
    <div class="mb-3">
        <label for="plan" class="form-label">Conduite à tenir</label>
        <textarea class="form-control" id="plan" name="plan" rows="2"></textarea>
    </div>
    <button type="submit" class="btn btn-success">Enregistrer</button>
    <a href="{{ route('patients.medical-records.index', $patient) }}" class="btn btn-secondary">Annuler</a>
</form>
@endsection
```

*(Les vues `show` et `edit` affichent les champs de façon similaire)*

---

## 7. Vues pour les Prescriptions

### `resources/views/prescriptions/index.blade.php`

```blade
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
```

### `resources/views/prescriptions/show.blade.php`

```blade
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
        <p><strong>Statut :</strong> {{ $prescription->status }}</p>
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
                <td>{{ $item->status }}</td>
            </tr>
        @empty
            <tr><td colspan="5">Aucun médicament.</td></tr>
        @endforelse
    </tbody>
</table>
@endsection
```

*(Les autres vues pour prescriptions sont analogues)*

---

## 8. Vues pour les Médicaments (inventaire)

### `resources/views/medications/index.blade.php`

```blade
@extends('layouts.app')

@section('title', 'Médicaments')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <h1>Médicaments</h1>
    <a href="{{ route('medications.create') }}" class="btn btn-primary"><i class="fas fa-plus me-2"></i>Ajouter un médicament</a>
</div>

<table class="table table-striped">
    <thead>
        <tr>
            <th>Nom</th>
            <th>Forme</th>
            <th>Dosage</th>
            <th>Prix</th>
            <th>Stock</th>
            <th>Expiration</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @forelse($medications as $medication)
            <tr>
                <td>{{ $medication->name }}</td>
                <td>{{ $medication->form }}</td>
                <td>{{ $medication->strength }}</td>
                <td>{{ number_format($medication->price, 2) }} €</td>
                <td>
                    <span class="badge {{ $medication->isLowStock() ? 'bg-danger' : 'bg-success' }}">
                        {{ $medication->stock_quantity }}
                    </span>
                </td>
                <td>{{ $medication->expiry_date?->format('d/m/Y') }}</td>
                <td>
                    <a href="{{ route('medications.edit', $medication) }}" class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></a>
                </td>
            </tr>
        @empty
            <tr><td colspan="7">Aucun médicament.</td></tr>
        @endforelse
    </tbody>
</table>
{{ $medications->links() }}
@endsection
```

---

## 9. Vues pour les Factures

### `resources/views/invoices/index.blade.php`

```blade
@extends('layouts.app')

@section('title', 'Factures')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <h1>Factures</h1>
    <a href="{{ route('invoices.create') }}" class="btn btn-primary"><i class="fas fa-plus me-2"></i>Nouvelle facture</a>
</div>

<table class="table table-striped">
    <thead>
        <tr>
            <th>Code</th>
            <th>Date</th>
            <th>Patient</th>
            <th>Montant total</th>
            <th>Payé</th>
            <th>Reste</th>
            <th>Statut</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @forelse($invoices as $invoice)
            <tr>
                <td>{{ $invoice->invoice_code }}</td>
                <td>{{ $invoice->invoice_date->format('d/m/Y') }}</td>
                <td>{{ $invoice->patient->full_name }}</td>
                <td>{{ number_format($invoice->total_amount, 2) }} €</td>
                <td>{{ number_format($invoice->paid_amount, 2) }} €</td>
                <td>{{ number_format($invoice->balance_due, 2) }} €</td>
                <td><span class="badge bg-{{ $invoice->status == 'paid' ? 'success' : ($invoice->status == 'partially_paid' ? 'warning' : 'secondary') }}">{{ ucfirst($invoice->status) }}</span></td>
                <td>
                    <a href="{{ route('invoices.show', $invoice) }}" class="btn btn-sm btn-info"><i class="fas fa-eye"></i></a>
                </td>
            </tr>
        @empty
            <tr><td colspan="8">Aucune facture.</td></tr>
        @endforelse
    </tbody>
</table>
{{ $invoices->links() }}
@endsection
```

---

## 10. Vues du Portail Patient

### `resources/views/portal/dashboard.blade.php`

```blade
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
```

### `resources/views/portal/appointments.blade.php`

```blade
@extends('layouts.app')

@section('title', 'Mes rendez-vous')

@section('content')
<h1>Mes rendez-vous</h1>

<table class="table">
    <thead>
        <tr>
            <th>Date</th>
            <th>Médecin</th>
            <th>Statut</th>
        </tr>
    </thead>
    <tbody>
        @foreach($appointments as $appointment)
            <tr>
                <td>{{ $appointment->scheduled_at->format('d/m/Y H:i') }}</td>
                <td>{{ $appointment->staff->full_name ?? 'Non assigné' }}</td>
                <td>{{ ucfirst($appointment->status) }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
{{ $appointments->links() }}
@endsection
```

---

## 11. Autres vues (exemples rapides)

Pour les entités restantes (Admissions, Lab Orders, Imaging Orders, Staff, Departments, etc.), les vues suivent exactement le même modèle :

- **index** : tableau avec pagination, bouton "Nouveau", filtres éventuels.
- **create** : formulaire avec les champs correspondant aux colonnes de la table.
- **edit** : formulaire pré-rempli.
- **show** : affichage détaillé avec les relations.

Par exemple, pour **Admissions** :

```blade
{{-- admissions/index.blade.php --}}
@extends('layouts.app')
@section('title', 'Admissions')
@section('content')
    <h1>Admissions</h1>
    <a href="{{ route('admissions.create') }}" class="btn btn-primary mb-3">Nouvelle admission</a>
    <table class="table">
        <thead>
            <tr>
                <th>Code</th>
                <th>Patient</th>
                <th>Service</th>
                <th>Lit</th>
                <th>Date d'admission</th>
                <th>Statut</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($admissions as $admission)
                <tr>
                    <td>{{ $admission->admission_code }}</td>
                    <td>{{ $admission->patient->full_name }}</td>
                    <td>{{ $admission->department->name ?? 'N/A' }}</td>
                    <td>{{ $admission->bed->bed_number ?? 'N/A' }}</td>
                    <td>{{ $admission->admission_date->format('d/m/Y') }}</td>
                    <td>{{ $admission->status }}</td>
                    <td>
                        <a href="{{ route('admissions.show', $admission) }}" class="btn btn-sm btn-info">Voir</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
```

Le formulaire de création contiendra les champs patient, service, lit, médecin, dates, etc.

---

Ces vues couvrent l'essentiel de l'application. Vous pouvez adapter le style et ajouter des composants pour une meilleure expérience utilisateur. Pour les modules non détaillés, il suffit de reproduire les patterns ci-dessus en utilisant les champs appropriés de chaque table.