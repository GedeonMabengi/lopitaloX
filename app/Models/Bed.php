<?php

namespace App\Models;

use App\Enums\OccupancyStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bed extends Model
{
    use HasFactory;

    protected $fillable = [
        'bed_number',
        'room_id',
        'status',
    ];

    protected $casts = [
        'status' => OccupancyStatus::class,
    ];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    // Le service d'un lit est celui de sa chambre
    public function department()
    {
        return $this->hasOneThrough(Department::class, Room::class, 'id', 'id', 'room_id', 'department_id');
    }

    public function admissions()
    {
        return $this->hasMany(Admission::class);
    }

    public function scopeAvailable($query)
    {
        return $query->where('status', OccupancyStatus::Available);
    }
}