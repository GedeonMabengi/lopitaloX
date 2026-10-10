<?php

namespace App\Models;

use App\Models\Concerns\Auditable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DispensingRecord extends Model
{
    use Auditable, HasFactory;

    protected $fillable = [
        'prescription_item_id',
        'medication_id',
        'dispensed_by',
        'administered_by',
        'dispensed_at',
        'administered_at',
        'quantity',
        'notes',
    ];

    protected $casts = [
        'dispensed_at' => 'datetime',
        'administered_at' => 'datetime',
    ];

    public function prescriptionItem()
    {
        return $this->belongsTo(PrescriptionItem::class);
    }

    public function medication()
    {
        return $this->belongsTo(Medication::class);
    }

    public function dispensedBy()
    {
        return $this->belongsTo(Staff::class, 'dispensed_by');
    }

    public function administeredBy()
    {
        return $this->belongsTo(Staff::class, 'administered_by');
    }
}