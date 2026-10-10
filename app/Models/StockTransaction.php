<?php

namespace App\Models;

use App\Enums\StockTransactionType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockTransaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'medication_id',
        'medication_batch_id',
        'type',
        'quantity',
        'unit_price',
        'performed_by',
        'notes',
    ];

    protected $casts = [
        'type' => StockTransactionType::class,
        'unit_price' => 'decimal:2',
    ];

    public function medication()
    {
        return $this->belongsTo(Medication::class);
    }

    public function batch()
    {
        return $this->belongsTo(MedicationBatch::class, 'medication_batch_id');
    }

    public function performedBy()
    {
        return $this->belongsTo(User::class, 'performed_by');
    }
}
