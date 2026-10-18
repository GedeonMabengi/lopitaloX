<?php

namespace App\Enums;

use App\Enums\Concerns\HasOptions;

enum LabOrderStatus: string
{
    use HasOptions;

    case Pending = 'pending';
    case SampleCollected = 'sample_collected';
    case InProgress = 'in_progress';
    case Completed = 'completed';
    case Cancelled = 'cancelled';

    public function label(): string
    {
        return match ($this) {
            self::Pending => 'En attente',
            self::SampleCollected => 'Prélèvement effectué',
            self::InProgress => 'En cours',
            self::Completed => 'Terminé',
            self::Cancelled => 'Annulé',
        };
    }
}
