<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagingOrder extends Model
{
    use HasFactory;

    const STATUS_PENDING = 'pending';
    const STATUS_SCHEDULED = 'scheduled';
    const STATUS_PERFORMED = 'performed';
    const STATUS_REPORTED = 'reported';
    const STATUS_CANCELLED = 'cancelled';

    protected $fillable = [
        'order_code',
        'patient_id',
        'admission_id',
        'ordered_by',
        'order_date',
        'imaging_type',
        'body_part',
        'status',
        'clinical_info',
    ];

    protected $casts = [
        'order_date' => 'datetime',
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

    public function report()
    {
        return $this->hasOne(ImagingReport::class);
    }
}