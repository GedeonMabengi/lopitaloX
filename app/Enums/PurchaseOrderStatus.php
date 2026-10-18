<?php

namespace App\Enums;

use App\Enums\Concerns\HasOptions;

enum PurchaseOrderStatus: string
{
    use HasOptions;

    case Draft = 'draft';
    case Ordered = 'ordered';
    case Received = 'received';
    case Cancelled = 'cancelled';

    public function label(): string
    {
        return match ($this) {
            self::Draft => 'Brouillon',
            self::Ordered => 'Commandé',
            self::Received => 'Reçu',
            self::Cancelled => 'Annulé',
        };
    }
}
