<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;

// Dépend de : PurchaseOrderSeeder, MedicationSeeder
class PurchaseOrderItemSeeder extends BaseSeeder
{
    public function run(): void
    {
        $purchaseOrderIds = $this->ids('purchase_orders', 'order_code');
        $medicationIds = $this->ids('medications', 'name');

        $medications = ['Paracetamol', 'Amoxicilline', 'Ceftriaxone', 'Ibuprofene', 'Metformine', 'Salbutamol'];
        $quantities = [100, 100, 80, 100, 100, 100];
        $unitPrices = [2.50, 5.00, 8.75, 3.25, 4.80, 9.50];

        foreach (range(1, 6) as $index) {
            $this->upsertRow('purchase_order_items', [
                'purchase_order_id' => $purchaseOrderIds[sprintf('PO-%03d', $index)],
                'medication_id' => $medicationIds[$medications[$index - 1]],
            ], [
                'quantity' => $quantities[$index - 1],
                'unit_price' => $unitPrices[$index - 1],
            ]);
        }

        // DB::table ne déclenche pas les événements des modèles : on aligne le total de chaque bon sur ses lignes
        DB::table('purchase_orders')->update([
            'total_amount' => DB::raw('(select coalesce(sum(total_price), 0) from purchase_order_items where purchase_order_items.purchase_order_id = purchase_orders.id)'),
        ]);
    }
}
