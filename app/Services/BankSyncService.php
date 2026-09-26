<?php

namespace App\Services;

use App\Models\BankAccount;
use App\Models\BankTransaction;
use Illuminate\Support\Carbon;
use InvalidArgumentException;

class BankSyncService
{
    /**
     * Importe des transactions bancaires depuis un fichier CSV.
     *
     * Colonnes attendues (avec en-tête) : date, label, amount, type.
     * - "type" est optionnel : credit|debit (déduit du signe du montant sinon).
     *
     * @return int Nombre de transactions importées.
     */
    public function importTransactions(BankAccount $account, string $filePath): int
    {
        $handle = @fopen($filePath, 'r');

        if ($handle === false) {
            throw new InvalidArgumentException('Impossible de lire le fichier CSV.');
        }

        try {
            $header = fgetcsv($handle);

            if ($header === false) {
                return 0;
            }

            $header = array_map(fn ($column) => strtolower(trim((string) $column)), $header);
            $columns = array_flip($header);

            $count = 0;

            while (($row = fgetcsv($handle)) !== false) {
                $data = $this->mapRow($account, $row, $columns);

                if ($data !== null) {
                    BankTransaction::create($data);
                    $count++;
                }
            }

            return $count;
        } finally {
            fclose($handle);
        }
    }

    /**
     * @param  array<int, string|null>  $row
     * @param  array<string, int>  $columns
     * @return array<string, mixed>|null
     */
    private function mapRow(BankAccount $account, array $row, array $columns): ?array
    {
        $value = fn (string $key): ?string => array_key_exists($key, $columns)
            ? (string) ($row[$columns[$key]] ?? '')
            : null;

        $date = trim((string) $value('date'));
        $label = trim((string) $value('label'));
        $amount = (float) $value('amount');
        $type = strtolower(trim((string) $value('type')));

        if ($date === '' || $label === '') {
            return null;
        }

        $type = in_array($type, ['credit', 'debit'], true) ? $type : ($amount >= 0 ? 'credit' : 'debit');

        return [
            'bank_account_id' => $account->id,
            'date' => Carbon::parse($date)->format('Y-m-d'),
            'label' => $label,
            'amount' => abs($amount),
            'type' => $type,
            'reconciled' => false,
        ];
    }
}
