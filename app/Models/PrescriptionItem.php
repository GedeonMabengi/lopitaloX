<?php

namespace App\Models;

use App\Models\Concerns\Auditable;
use App\Enums\PrescriptionItemStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrescriptionItem extends Model
{
    use Auditable, HasFactory;

    protected $fillable = [
        'prescription_id',
        'medication_id',
        'medication_name',
        'dosage',
        'frequency',
        'duration',
        'instructions',
        'start_date',
        'end_date',
        'status',
    ];

    protected $casts = [
        'status' => PrescriptionItemStatus::class,
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];

    public function prescription()
    {
        return $this->belongsTo(Prescription::class);
    }

    public function medication()
    {
        return $this->belongsTo(Medication::class);
    }

    public function dispensingRecords()
    {
        return $this->hasMany(DispensingRecord::class);
    }
}
