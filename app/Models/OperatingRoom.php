<?php

namespace App\Models;

use App\Enums\OccupancyStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OperatingRoom extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'location',
        'status',
    ];

    protected $casts = [
        'status' => OccupancyStatus::class,
    ];

    public function surgeries()
    {
        return $this->hasMany(Surgery::class);
    }

    public function scopeAvailable($query)
    {
        return $query->where('status', OccupancyStatus::Available);
    }
}
