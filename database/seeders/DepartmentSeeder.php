<?php

namespace Database\Seeders;

class DepartmentSeeder extends BaseSeeder
{
    public function run(): void
    {
        $departments = [
            ['code' => 'URG', 'name' => 'Urgences', 'description' => 'Prise en charge rapide des urgences'],
            ['code' => 'PED', 'name' => 'Pediatrie', 'description' => 'Soins des enfants'],
            ['code' => 'MAT', 'name' => 'Maternite', 'description' => 'Suivi grossesse et accouchement'],
            ['code' => 'CAR', 'name' => 'Cardiologie', 'description' => 'Diagnostic et suivi cardiovasculaire'],
            ['code' => 'LAB', 'name' => 'Laboratoire', 'description' => 'Analyses biologiques'],
            ['code' => 'RAD', 'name' => 'Imagerie', 'description' => 'Radiologie et echographie'],
        ];

        foreach ($departments as $department) {
            $this->upsertRow('departments', ['code' => $department['code']], $department);
        }
    }
}
