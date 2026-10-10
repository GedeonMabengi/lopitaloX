<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Medication extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'generic_name',
        'form',
        'strength',
        'unit',
        'price',
        'reorder_level',
    ];

    protected $casts = [
        'price' => 'decimal:2',
    ];

    public function batches()
    {
        return $this->hasMany(MedicationBatch::class);
    }

    public function prescriptionItems()
    {
        return $this->hasMany(PrescriptionItem::class);
    }

    public function dispensingRecords()
    {
        return $this->hasMany(DispensingRecord::class);
    }

    public function stockTransactions()
    {
        return $this->hasMany(StockTransaction::class);
    }

    public function purchaseOrderItems()
    {
        return $this->hasMany(PurchaseOrderItem::class);
    }

    // Stock = somme des lots. En liste, charger avec withSum('batches', 'quantity') pour éviter une requête par ligne.
    public function getStockQuantityAttribute(): int
    {
        return (int) ($this->batches_sum_quantity ?? $this->batches()->sum('quantity'));
    }

    // Péremption la plus proche parmi les lots encore en stock
    public function getExpiryDateAttribute(): ?Carbon
    {
        $date = $this->batches()->where('quantity', '>', 0)->min('expiry_date');

        return $date ? Carbon::parse($date) : null;
    }

    public function isLowStock()
    {
        return $this->stock_quantity <= $this->reorder_level;
    }
}
