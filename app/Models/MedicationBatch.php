<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class MedicationBatch extends Model
{
    use HasFactory;

    protected $fillable = [
        'medication_id',
        'batch_number',
        'expiry_date',
    ];

    protected $casts = [
        'expiry_date' => 'date',
        'quantity' => 'integer',
    ];

    public function medication()
    {
        return $this->belongsTo(Medication::class);
    }

    public function stockTransactions()
    {
        return $this->hasMany(StockTransaction::class);
    }

    /**
     * Seul point d'entrée pour modifier le stock : la quantité du lot et le
     * mouvement sont écrits ensemble, ou pas du tout.
     *
     * @param  int  $quantity  signé : positif = entrée, négatif = sortie
     */
    public function move(string $type, int $quantity, array $attributes = []): StockTransaction
    {
        return DB::transaction(function () use ($type, $quantity, $attributes) {
            $batch = static::lockForUpdate()->findOrFail($this->id);

            if ($batch->quantity + $quantity < 0) {
                throw new RuntimeException("Stock insuffisant pour le lot {$batch->batch_number}.");
            }

            $batch->increment('quantity', $quantity);
            $this->quantity = $batch->quantity;

            return $batch->stockTransactions()->create([
                'medication_id' => $batch->medication_id,
                'type' => $type,
                'quantity' => $quantity,
                'performed_by' => auth()->id(),
            ] + $attributes);
        });
    }
}
