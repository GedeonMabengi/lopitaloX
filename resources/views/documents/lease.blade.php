<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Contrat de bail #{{ $lease->id }}</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; font-size: 12px; color: #1f2937; margin: 24px; }
        h1 { font-size: 20px; margin: 0 0 4px; }
        .subtitle { color: #6b7280; margin-bottom: 16px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #d1d5db; padding: 8px 10px; text-align: left; }
        th { background-color: #f3f4f6; width: 35%; }
    </style>
</head>
<body>
    <h1>Contrat de bail</h1>
    <div class="subtitle">Référence : Bail #{{ $lease->id }}</div>

    <table>
        <tr>
            <th>Locataire</th>
            <td>{{ $lease->tenant?->first_name }} {{ $lease->tenant?->last_name }}</td>
        </tr>
        <tr>
            <th>Bien</th>
            <td>{{ $lease->propertyUnit?->property?->name }} — {{ $lease->propertyUnit?->unit_number }}</td>
        </tr>
        <tr>
            <th>Date de début</th>
            <td>{{ $lease->start_date?->format('d/m/Y') }}</td>
        </tr>
        <tr>
            <th>Date de fin</th>
            <td>{{ $lease->end_date?->format('d/m/Y') ?? 'Non définie' }}</td>
        </tr>
        <tr>
            <th>Loyer mensuel</th>
            <td>{{ number_format((float) $lease->rent_amount, 2, ',', ' ') }} €</td>
        </tr>
        <tr>
            <th>Charges mensuelles</th>
            <td>{{ number_format((float) $lease->charges_amount, 2, ',', ' ') }} €</td>
        </tr>
        <tr>
            <th>Dépôt de garantie</th>
            <td>{{ number_format((float) $lease->deposit_amount, 2, ',', ' ') }} €</td>
        </tr>
        <tr>
            <th>Fréquence de paiement</th>
            <td>{{ $lease->payment_frequency }}</td>
        </tr>
        <tr>
            <th>Mode de paiement</th>
            <td>{{ $lease->payment_method }}</td>
        </tr>
    </table>
</body>
</html>
