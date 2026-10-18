<?php

namespace App\Enums;

use App\Enums\Concerns\HasOptions;

enum StockTransactionType: string
{
    use HasOptions;

    case Purchase = 'purchase';
    case Sale = 'sale';
    case Adjustment = 'adjustment';
    case TransferIn = 'transfer_in';
    case TransferOut = 'transfer_out';

    public function label(): string
    {
        return match ($this) {
            self::Purchase => 'Achat',
            self::Sale => 'Sortie',
            self::Adjustment => 'Ajustement',
            self::TransferIn => 'Transfert entrant',
            self::TransferOut => 'Transfert sortant',
        };
    }
}
