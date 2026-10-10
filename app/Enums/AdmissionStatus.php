<?php

namespace App\Enums;

enum AdmissionStatus: string
{
    case Planned = 'planned';
    case Active = 'active';
    case Discharged = 'discharged';
    case Transferred = 'transferred';
    case Cancelled = 'cancelled';

    public function label(): string
    {
        return match ($this) {
            self::Planned => 'Prévue',
            self::Active => 'En cours',
            self::Discharged => 'Sortie',
            self::Transferred => 'Transférée',
            self::Cancelled => 'Annulée',
        };
    }
}
