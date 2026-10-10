<?php

namespace App\Models;

use App\Enums\ImagingOrderStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagingOrder extends Model
{
    use HasFactory;

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
        'status' => ImagingOrderStatus::class,
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