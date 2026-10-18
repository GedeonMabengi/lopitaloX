<?php

namespace App\Models;

use App\Models\Concerns\Auditable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VitalSign extends Model
{
    use Auditable, HasFactory;

    protected $fillable = [
        'patient_id',
        'admission_id',
        'staff_id',
        'measured_at',
        'temperature',
        'heart_rate',
        'respiratory_rate',
        'blood_pressure_systolic',
        'blood_pressure_diastolic',
        'oxygen_saturation',
        'weight',
        'height',
        'notes',
    ];

    protected $casts = [
        'measured_at' => 'datetime',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function admission()
    {
        return $this->belongsTo(Admission::class);
    }

    public function staff()
    {
        return $this->belongsTo(Staff::class);
    }
}
