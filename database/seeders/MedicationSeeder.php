<?php

namespace Database\Seeders;

class MedicationSeeder extends BaseSeeder
{
    public function run(): void
    {
        $medications = [
            ['name' => 'Paracetamol', 'generic_name' => 'Acetaminophene', 'form' => 'comprime', 'strength' => '500mg', 'unit' => 'boite', 'price' => 2.50, 'reorder_level' => 30],
            ['name' => 'Amoxicilline', 'generic_name' => 'Amoxicilline', 'form' => 'capsule', 'strength' => '500mg', 'unit' => 'boite', 'price' => 5.00, 'reorder_level' => 25],
            ['name' => 'Ceftriaxone', 'generic_name' => 'Ceftriaxone', 'form' => 'injection', 'strength' => '1g', 'unit' => 'flacon', 'price' => 8.75, 'reorder_level' => 20],
            ['name' => 'Ibuprofene', 'generic_name' => 'Ibuprofene', 'form' => 'comprime', 'strength' => '400mg', 'unit' => 'boite', 'price' => 3.25, 'reorder_level' => 25],
            ['name' => 'Metformine', 'generic_name' => 'Metformine', 'form' => 'comprime', 'strength' => '850mg', 'unit' => 'boite', 'price' => 4.80, 'reorder_level' => 20],
            ['name' => 'Salbutamol', 'generic_name' => 'Salbutamol', 'form' => 'inhalateur', 'strength' => '100mcg', 'unit' => 'piece', 'price' => 9.50, 'reorder_level' => 10],
        ];

        foreach ($medications as $medication) {
            $this->upsertRow('medications', ['name' => $medication['name']], $medication);
        }
    }
}
