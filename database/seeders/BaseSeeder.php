<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

/**
 * Helpers partagés. Les seeders sont idempotents (updateOrInsert) :
 * on peut relancer `db:seed` sans créer de doublons.
 */
abstract class BaseSeeder extends Seeder
{
    protected function upsertRow(string $table, array $keys, array $values): void
    {
        $now = now();

        DB::table($table)->updateOrInsert($keys, $values + ['created_at' => $now, 'updated_at' => $now]);
    }

    /** Ids d'une table indexés par une colonne métier (code, numéro, nom...). */
    protected function ids(string $table, string $column): Collection
    {
        return DB::table($table)->pluck('id', $column);
    }

    protected function adminId(): int
    {
        return DB::table('users')->where('email', UserSeeder::ADMIN_EMAIL)->value('id');
    }

    // DB::table contourne le cast `encrypted` des modèles : on chiffre comme lui
    protected function encrypt(?string $value): ?string
    {
        return $value === null ? null : Crypt::encryptString($value);
    }
}
