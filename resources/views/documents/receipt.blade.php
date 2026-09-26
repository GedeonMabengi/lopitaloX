<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Quittance de loyer #{{ $payment->id }}</title>
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
    <h1>Quittance de loyer</h1>
    <div class="subtitle">Référence : #{{ $payment->id }}</div>

    <table>
        <tr>
            <th>Locataire</th>
            <td>{{ $payment->lease?->tenant?->first_name }} {{ $payment->lease?->tenant?->last_name }}</td>
        </tr>
        <tr>
            <th>Montant</th>
            <td>{{ number_format((float) $payment->amount, 2, ',', ' ') }} €</td>
        </tr>
        <tr>
            <th>Date de paiement</th>
            <td>{{ $payment->payment_date?->format('d/m/Y') }}</td>
        </tr>
        <tr>
            <th>Méthode</th>
            <td>{{ $payment->method }}</td>
        </tr>
        <tr>
            <th>Référence</th>
            <td>{{ $payment->reference ?? '—' }}</td>
        </tr>
    </table>
</body>
</html>
