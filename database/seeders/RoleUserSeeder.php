<?php

namespace Database\Seeders;

// Dépend de : UserSeeder, RoleSeeder
class RoleUserSeeder extends BaseSeeder
{
    public function run(): void
    {
        $this->upsertRow('role_user', [
            'user_id' => $this->adminId(),
            'role_id' => $this->ids('roles', 'name')['admin'],
        ], []);
    }
}
