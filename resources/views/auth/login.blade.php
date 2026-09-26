@extends('layouts.guest')

@section('title', 'Connexion - MediCare')

@section('content')
<div class="row justify-content-center">
    <div class="col-md-5 col-lg-4">
        <div class="card guest-card">
            <div class="card-header">
                <div class="logo-icon">
                    <i class="fas fa-hospital"></i>
                </div>
                <div>MediCare</div>
                <small class="text-muted" style="font-size: 0.9rem; font-weight: normal;">Espace professionnel</small>
            </div>
            <div class="card-body">
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="mb-4">
                        <label for="email" class="form-label fw-semibold">Adresse email</label>
                        <div class="input-group">
                            <span class="input-group-text bg-light"><i class="fas fa-envelope text-muted"></i></span>
                            <input type="email" class="form-control @error('email') is-invalid @enderror" id="email" name="email" value="{{ old('email') }}" placeholder="votre@email.com" required autofocus>
                        </div>
                        @error('email')
                            <div class="invalid-feedback d-block">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-label fw-semibold">Mot de passe</label>
                        <div class="input-group">
                            <span class="input-group-text bg-light"><i class="fas fa-lock text-muted"></i></span>
                            <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password" placeholder="••••••••" required>
                        </div>
                        @error('password')
                            <div class="invalid-feedback d-block">{{ $message }}</div>
                        @enderror
                    </div>
                    
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                            <label class="form-check-label text-muted" for="remember">
                                Se souvenir de moi
                            </label>
                        </div>
                        @if (Route::has('password.request'))
                            <a href="{{ route('password.request') }}" class="text-decoration-none small" style="color: #667eea;">
                                Mot de passe oublié ?
                            </a>
                        @endif
                    </div>

                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary btn-lg">
                            <i class="fas fa-sign-in-alt me-2"></i>Se connecter
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
        <!-- Message informatif au lieu du lien d'inscription -->
        <div class="text-center mt-3">
            <p class="text-white opacity-75 small mb-1">
                <i class="fas fa-shield-alt me-1"></i> Accès réservé au personnel autorisé
            </p>
            <p class="text-white opacity-50 small">
                <small>© {{ date('Y') }} MediCare - Gestion Hospitalière</small>
            </p>
        </div>
    </div>
</div>
@endsection