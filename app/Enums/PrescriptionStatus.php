<?php

namespace App\Enums;

enum PrescriptionStatus: string
{
    case Active = 'active';
    case Completed = 'completed';
    case Cancelled = 'cancelled';
    case Expired = 'expired';

    public function label(): string
    {
        return match ($this) {
            self::Active => 'Active',
            self::Completed => 'Terminée',
            self::Cancelled => 'Annulée',
            self::Expired => 'Expirée',
        };
    }
}
