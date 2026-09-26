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
