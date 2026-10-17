<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Hash;

class UserSeeder extends BaseSeeder
{
    public const ADMIN_EMAIL = 'admin@example.com';

    public function run(): void
    {
        $this->upsertRow('users', ['email' => self::ADMIN_EMAIL], [
            'name' => 'Admin',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
    }
}
