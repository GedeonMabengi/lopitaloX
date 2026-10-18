<?php

namespace App\Enums;

use App\Enums\Concerns\HasOptions;

enum EmergencyVisitStatus: string
{
    use HasOptions;

    case Waiting = 'waiting';
    case InTreatment = 'in_treatment';
    case Discharged = 'discharged';
    case Admitted = 'admitted';
    case LeftWithoutBeingSeen = 'left_without_being_seen';

    public function label(): string
    {
        return match ($this) {
            self::Waiting => 'En attente',
            self::InTreatment => 'En soins',
            self::Discharged => 'Sorti',
            self::Admitted => 'Hospitalisé',
            self::LeftWithoutBeingSeen => 'Parti sans être vu',
        };
    }
}
