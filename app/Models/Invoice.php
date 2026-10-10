<?php

namespace App\Models;

use App\Enums\InvoiceStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoice extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'invoice_code',
        'patient_id',
        'admission_id',
        'appointment_id',
        'invoice_date',
        'discount',
        'tax',
        'status',
        'notes',
    ];

    protected $casts = [
        'status' => InvoiceStatus::class,
        'invoice_date' => 'datetime',
        'subtotal' => 'decimal:2',
        'discount' => 'decimal:2',
        'tax' => 'decimal:2',
        'total_amount' => 'decimal:2',
        'paid_amount' => 'decimal:2',
        'balance_due' => 'decimal:2',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function admission()
    {
        return $this->belongsTo(Admission::class);
    }

    public function appointment()
    {
        return $this->belongsTo(Appointment::class);
    }

    public function items()
    {
        return $this->hasMany(InvoiceItem::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    // Appelé automatiquement quand une ligne ou un paiement change (voir InvoiceItem et Payment)
    public function recalculateTotals()
    {
        $this->subtotal = $this->items()->sum('total_price');
        $this->paid_amount = $this->payments()->sum('amount');
        $this->save();
        $this->refresh(); // total_amount et balance_due sont calculés par la base

        $this->updateStatus();
    }

    public function updateStatus()
    {
        if ($this->status === InvoiceStatus::Cancelled) {
            return;
        }
        if ($this->total_amount > 0 && $this->balance_due <= 0) {
            $this->status = InvoiceStatus::Paid;
        } elseif ($this->paid_amount > 0) {
            $this->status = InvoiceStatus::PartiallyPaid;
        } elseif ($this->status === InvoiceStatus::Draft) {
            // keep draft
        } else {
            $this->status = InvoiceStatus::Issued;
        }
        $this->save();
    }
}