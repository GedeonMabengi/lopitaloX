<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'code', 'description'];

    public function staff()
    {
        return $this->hasMany(Staff::class);
    }

    public function beds()
    {
        return $this->hasMany(Bed::class);
    }

    public function rooms()
    {
        return $this->hasMany(Room::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function admissions()
    {
        return $this->hasMany(Admission::class);
    }
}