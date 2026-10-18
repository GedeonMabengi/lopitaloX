<?php

namespace App\Models;

use App\Models\Concerns\Auditable;
use App\Enums\PrescriptionStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
    use Auditable, HasFactory;

    protected $fillable = [
        'patient_id',
        'admission_id',
        'prescriber_id',
        'prescribed_at',
        'status',
        'notes',
    ];

    protected $casts = [
        'status' => PrescriptionStatus::class,
        'prescribed_at' => 'datetime',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function admission()
    {
        return $this->belongsTo(Admission::class);
    }

    public function prescriber()
    {
        return $this->belongsTo(Staff::class, 'prescriber_id');
    }

    public function items()
    {
        return $this->hasMany(PrescriptionItem::class);
    }
}