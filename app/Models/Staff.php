<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Staff extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'staff_code',
        'first_name',
        'last_name',
        'email',
        'phone',
        'gender',
        'date_of_birth',
        'specialty',
        'license_number',
        'department_id',
        'user_id',
    ];

    protected $casts = [
        'date_of_birth' => 'date',
    ];

    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function medicalRecords()
    {
        return $this->hasMany(MedicalRecord::class);
    }

    public function prescriptions()
    {
        return $this->hasMany(Prescription::class, 'prescriber_id');
    }

    public function dispensingRecordsAsDispenser()
    {
        return $this->hasMany(DispensingRecord::class, 'dispensed_by');
    }

    public function dispensingRecordsAsAdministerer()
    {
        return $this->hasMany(DispensingRecord::class, 'administered_by');
    }

    public function labOrders()
    {
        return $this->hasMany(LabOrder::class, 'ordered_by');
    }

    public function labResults()
    {
        return $this->hasMany(LabResult::class, 'performed_by');
    }

    public function imagingOrders()
    {
        return $this->hasMany(ImagingOrder::class, 'ordered_by');
    }

    public function imagingReports()
    {
        return $this->hasMany(ImagingReport::class, 'radiologist_id');
    }

    public function surgeries()
    {
        return $this->hasMany(Surgery::class, 'surgeon_id');
    }

    public function emergencyVisits()
    {
        return $this->hasMany(EmergencyVisit::class, 'attending_staff_id');
    }
}