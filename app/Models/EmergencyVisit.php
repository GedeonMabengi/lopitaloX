<?php

namespace App\Models;

use App\Enums\EmergencyVisitStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmergencyVisit extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'arrival_time',
        'triage_level',
        'chief_complaint',
        'status',
        'attending_staff_id',
        'admission_id',
    ];

    protected $casts = [
        'status' => EmergencyVisitStatus::class,
        'arrival_time' => 'datetime',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function admission()
    {
        return $this->belongsTo(Admission::class);
    }

    public function attendingStaff()
    {
        return $this->belongsTo(Staff::class, 'attending_staff_id');
    }
}
