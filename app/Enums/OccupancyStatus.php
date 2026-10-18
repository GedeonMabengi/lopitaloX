<?php

namespace App\Enums;

use App\Enums\Concerns\HasOptions;

// Statut d'un lit ou d'une salle d'opération
enum OccupancyStatus: string
{
    use HasOptions;

    case Available = 'available';
    case Occupied = 'occupied';
    case Cleaning = 'cleaning';
    case Maintenance = 'maintenance';

    public function label(): string
    {
        return match ($this) {
            self::Available => 'Disponible',
            self::Occupied => 'Occupé',
            self::Cleaning => 'Nettoyage',
            self::Maintenance => 'Maintenance',
        };
    }
}
