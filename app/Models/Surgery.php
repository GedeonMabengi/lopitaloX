<?php

namespace App\Models;

use App\Enums\SurgeryStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Surgery extends Model
{
    use HasFactory;

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
        'status' => SurgeryStatus::class,
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
