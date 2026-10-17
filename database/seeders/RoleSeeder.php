<?php

namespace Database\Seeders;

class RoleSeeder extends BaseSeeder
{
    public function run(): void
    {
        $roles = [
            'admin' => 'Administrateur systeme',
            'doctor' => 'Medecin',
            'nurse' => 'Infirmier',
            'receptionist' => 'Reception',
            'pharmacist' => 'Pharmacien',
            'lab_tech' => 'Technicien de laboratoire',
            'accountant' => 'Comptable',
            'director' => 'Directeur',
        ];

        foreach ($roles as $name => $description) {
            $this->upsertRow('roles', ['name' => $name], ['description' => $description]);
        }
    }
}
