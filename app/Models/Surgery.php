<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Surgery extends Model
{
    use HasFactory;

    const STATUS_SCHEDULED = 'scheduled';
    const STATUS_IN_PROGRESS = 'in_progress';
    const STATUS_COMPLETED = 'completed';
    const STATUS_CANCELLED = 'cancelled';

    protected $fillable = [
        'patient_id',
        'admission_id',
        'surgeon_id',
        'scheduled_at',
        'end_at',
        'surgery_type',
        'status',
        'operating_room_id',
        'notes',
    ];

    protected $casts = [
        'scheduled_at' => 'datetime',
        'end_at' => 'datetime',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function admission()
    {
        return $this->belongsTo(Admission::class);
    }

    public function surgeon()
    {
        return $this->belongsTo(Staff::class, 'surgeon_id');
    }

    public function operatingRoom()
    {
        return $this->belongsTo(OperatingRoom::class);
    }
}
