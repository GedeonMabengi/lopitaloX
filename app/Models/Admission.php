<?php

namespace App\Models;

use App\Models\Concerns\Auditable;
use App\Enums\AdmissionStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Admission extends Model
{
    use Auditable, HasFactory, SoftDeletes;

    protected $fillable = [
        'admission_code',
        'patient_id',
        'department_id',
        'bed_id',
        'attending_doctor_id',
        'admission_date',
        'discharge_date',
        'status',
        'diagnosis',
        'notes',
    ];

    protected $casts = [
        'status' => AdmissionStatus::class,
        'admission_date' => 'datetime',
        'discharge_date' => 'datetime',
        'diagnosis' => 'encrypted',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function bed()
    {
        return $this->belongsTo(Bed::class);
    }

    public function attendingDoctor()
    {
        return $this->belongsTo(Staff::class, 'attending_doctor_id');
    }

    public function medicalRecords()
    {
        return $this->hasMany(MedicalRecord::class);
    }

    public function prescriptions()
    {
        return $this->hasMany(Prescription::class);
    }

    public function labOrders()
    {
        return $this->hasMany(LabOrder::class);
    }

    public function imagingOrders()
    {
        return $this->hasMany(ImagingOrder::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    public function surgeries()
    {
        return $this->hasMany(Surgery::class);
    }

    public function emergencyVisit()
    {
        return $this->hasOne(EmergencyVisit::class);
    }
}