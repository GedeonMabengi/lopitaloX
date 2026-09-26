<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LabOrder extends Model
{
    use HasFactory;

    const STATUS_PENDING = 'pending';
    const STATUS_SAMPLE_COLLECTED = 'sample_collected';
    const STATUS_IN_PROGRESS = 'in_progress';
    const STATUS_COMPLETED = 'completed';
    const STATUS_CANCELLED = 'cancelled';

    protected $fillable = [
        'order_code',
        'patient_id',
        'admission_id',
        'ordered_by',
        'order_date',
        'status',
        'clinical_info',
        'tests',
    ];

    protected $casts = [
        'order_date' => 'datetime',
        'tests' => 'array',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function admission()
    {
        return $this->belongsTo(Admission::class);
    }

    public function orderedBy()
    {
        return $this->belongsTo(Staff::class, 'ordered_by');
    }

    public function results()
    {
        return $this->hasMany(LabResult::class);
    }
}
