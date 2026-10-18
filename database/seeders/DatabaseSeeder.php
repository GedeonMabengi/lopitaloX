<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * L'ordre suit les clés étrangères : chaque seeder ne référence
     * que des tables remplies par les seeders qui le précèdent.
     */
    public function run(): void
    {
        $this->call([
            // Comptes et accès
            UserSeeder::class,
            RoleSeeder::class,
            RoleUserSeeder::class,

            // Organisation et personnes
            DepartmentSeeder::class,
            StaffSeeder::class,
            PatientSeeder::class,
            RoomSeeder::class,
            BedSeeder::class,

            // Pharmacie
            MedicationSeeder::class,
            MedicationBatchSeeder::class,
            StockTransactionSeeder::class,
            SupplierSeeder::class,

            // Parcours patient
            AppointmentSeeder::class,
            AdmissionSeeder::class,
            AllergySeeder::class,
            VitalSignSeeder::class,

            // Achats
            PurchaseOrderSeeder::class,
            PurchaseOrderItemSeeder::class,
        ]);
    }
}
