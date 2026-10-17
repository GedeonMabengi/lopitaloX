<?php

namespace Database\Seeders;

// Dépend de : MedicationSeeder
class MedicationBatchSeeder extends BaseSeeder
{
    public function run(): void
    {
        $medicationIds = $this->ids('medications', 'name');

        // Stock initial : un lot par médicament [quantité, péremption]
        $batches = [
            'Paracetamol' => [250, '2027-12-31'],
            'Amoxicilline' => [120, '2027-09-30'],
            'Ceftriaxone' => [80, '2027-06-30'],
            'Ibuprofene' => [160, '2028-01-31'],
            'Metformine' => [90, '2027-11-30'],
            'Salbutamol' => [45, '2027-08-31'],
        ];

        foreach ($batches as $name => [$quantity, $expiryDate]) {
            $this->upsertRow('medication_batches', [
                'medication_id' => $medicationIds[$name],
                'batch_number' => 'LOT-' . strtoupper(substr($name, 0, 4)) . '-001',
            ], [
                'expiry_date' => $expiryDate,
                'quantity' => $quantity,
            ]);
        }
    }
}
