<?php

namespace App\Enums;

use App\Enums\Concerns\HasOptions;

enum SurgeryStatus: string
{
    use HasOptions;

    case Scheduled = 'scheduled';
    case InProgress = 'in_progress';
    case Completed = 'completed';
    case Cancelled = 'cancelled';

    public function label(): string
    {
        return match ($this) {
            self::Scheduled => 'Planifiée',
            self::InProgress => 'En cours',
            self::Completed => 'Terminée',
            self::Cancelled => 'Annulée',
        };
    }
}
