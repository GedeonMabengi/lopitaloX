<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;

// Dépend de : UserSeeder, MedicationBatchSeeder
class StockTransactionSeeder extends BaseSeeder
{
    public function run(): void
    {
        $adminId = $this->adminId();

        // Le mouvement d'entrée correspond exactement à la quantité de chaque lot,
        // pour que le journal de stock et les lots restent cohérents.
        foreach (DB::table('medication_batches')->get() as $batch) {
            $this->upsertRow('stock_transactions', [
                'medication_batch_id' => $batch->id,
                'type' => 'purchase',
            ], [
                'medication_id' => $batch->medication_id,
                'quantity' => $batch->quantity,
                'performed_by' => $adminId,
                'notes' => 'Stock initial',
            ]);
        }
    }
}
