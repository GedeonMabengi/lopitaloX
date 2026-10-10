<?php

namespace App\Enums;

enum ImagingOrderStatus: string
{
    case Pending = 'pending';
    case Scheduled = 'scheduled';
    case Performed = 'performed';
    case Reported = 'reported';
    case Cancelled = 'cancelled';

    public function label(): string
    {
        return match ($this) {
            self::Pending => 'En attente',
            self::Scheduled => 'Planifié',
            self::Performed => 'Réalisé',
            self::Reported => 'Interprété',
            self::Cancelled => 'Annulé',
        };
    }
}
