<?php

namespace Database\Seeders;

class SupplierSeeder extends BaseSeeder
{
    public function run(): void
    {
        $suppliers = [
            ['name' => 'Pharma Plus', 'contact_person' => 'Eric Banza', 'phone' => '+243840000001', 'email' => 'contact@pharmaplus.example', 'address' => 'Lubumbashi'],
            ['name' => 'MediStock Congo', 'contact_person' => 'Linda Kabeya', 'phone' => '+243840000002', 'email' => 'vente@medistock.example', 'address' => 'Kinshasa'],
            ['name' => 'Sante Distribution', 'contact_person' => 'Oscar Kalonji', 'phone' => '+243840000003', 'email' => 'info@santedistribution.example', 'address' => 'Lubumbashi'],
            ['name' => 'BioLab Supply', 'contact_person' => 'Marie Tshiala', 'phone' => '+243840000004', 'email' => 'orders@biolab.example', 'address' => 'Goma'],
            ['name' => 'Clinique Equipement', 'contact_person' => 'Paul Ilunga', 'phone' => '+243840000005', 'email' => 'support@cliniqueequip.example', 'address' => 'Likasi'],
            ['name' => 'Radiomed', 'contact_person' => 'Ange Musasa', 'phone' => '+243840000006', 'email' => 'sales@radiomed.example', 'address' => 'Lubumbashi'],
        ];

        foreach ($suppliers as $supplier) {
            $this->upsertRow('suppliers', ['name' => $supplier['name']], $supplier);
        }
    }
}
