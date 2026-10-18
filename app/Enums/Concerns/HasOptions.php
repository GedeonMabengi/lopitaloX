<?php

namespace App\Enums\Concerns;

/**
 * Forme envoyée aux pages Inertia : la valeur pour la logique et les formulaires,
 * le libellé pour l'affichage.
 */
trait HasOptions
{
    /** @return array{value: string, label: string} */
    public function toOption(): array
    {
        return ['value' => $this->value, 'label' => $this->label()];
    }

    /** @return list<array{value: string, label: string}> */
    public static function options(): array
    {
        return array_map(fn (self $case) => $case->toOption(), self::cases());
    }
}
