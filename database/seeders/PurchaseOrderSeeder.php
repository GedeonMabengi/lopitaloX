<?php

namespace Database\Seeders;

// Dépend de : UserSeeder, SupplierSeeder
class PurchaseOrderSeeder extends BaseSeeder
{
    public function run(): void
    {
        $adminId = $this->adminId();
        $supplierIds = $this->ids('suppliers', 'name');

        $suppliers = ['Pharma Plus', 'MediStock Congo', 'Sante Distribution', 'BioLab Supply', 'Clinique Equipement', 'Radiomed'];

        // total_amount reste à 0 : PurchaseOrderItemSeeder le recalcule à partir des lignes
        foreach (range(1, 6) as $index) {
            $this->upsertRow('purchase_orders', ['order_code' => sprintf('PO-%03d', $index)], [
                'supplier_id' => $supplierIds[$suppliers[$index - 1]],
                'order_date' => "2026-08-1{$index} 11:00:00",
                'expected_delivery_date' => "2026-08-2{$index} 11:00:00",
                'status' => $index <= 3 ? 'ordered' : 'draft',
                'created_by' => $adminId,
            ]);
        }
    }
}
