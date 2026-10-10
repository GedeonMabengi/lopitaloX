<?php

namespace App\Enums;

enum PrescriptionItemStatus: string
{
    case Prescribed = 'prescribed';
    case Dispensed = 'dispensed';
    case Administered = 'administered';
    case Stopped = 'stopped';

    public function label(): string
    {
        return match ($this) {
            self::Prescribed => 'Prescrit',
            self::Dispensed => 'Délivré',
            self::Administered => 'Administré',
            self::Stopped => 'Arrêté',
        };
    }
}
