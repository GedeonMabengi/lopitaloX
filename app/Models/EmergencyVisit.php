<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmergencyVisit extends Model
{
    use HasFactory;

    const STATUS_WAITING = 'waiting';
    const STATUS_IN_TREATMENT = 'in_treatment';
    const STATUS_DISCHARGED = 'discharged';
    const STATUS_ADMITTED = 'admitted';
    const STATUS_LEFT_WITHOUT_BEING_SEEN = 'left_without_being_seen';

    protected $fillable = [
        'patient_id',
        'arrival_time',
        'triage_level',
        'chief_complaint',
        'status',
        'attending_staff_id',
    ];

    protected $casts = [
        'arrival_time' => 'datetime',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function attendingStaff()
    {
        return $this->belongsTo(Staff::class, 'attending_staff_id');
    }
}
