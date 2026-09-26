<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'admission_id',
        'staff_id',
        'record_date',
        'type',
        'subjective',
        'objective',
        'assessment',
        'plan',
        'vital_signs',
        'attachments',
    ];

    protected $casts = [
        'record_date' => 'datetime',
        'vital_signs' => 'array',
        'attachments' => 'array',
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