<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice_id',
        'item_type',
        'description',
        'quantity',
        'unit_price',
        'reference_id',
        'reference_type',
    ];

    protected static function booted(): void
    {
        static::saved(fn (InvoiceItem $item) => $item->invoice->recalculateTotals());
        static::deleted(fn (InvoiceItem $item) => $item->invoice->recalculateTotals());
    }

    protected $casts = [
        'unit_price' => 'decimal:2',
        'total_price' => 'decimal:2',
    ];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }

    public function reference()
    {
        return $this->morphTo();
    }
}
