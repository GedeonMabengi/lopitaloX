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
