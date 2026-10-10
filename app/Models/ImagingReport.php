<?php

namespace App\Models;

use App\Models\Concerns\Auditable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagingReport extends Model
{
    use Auditable, HasFactory;

    protected $fillable = [
        'imaging_order_id',
        'radiologist_id',
        'findings',
        'impression',
        'report_file_path',
        'report_date',
    ];

    protected $casts = [
        'report_date' => 'datetime',
    ];

    public function imagingOrder()
    {
        return $this->belongsTo(ImagingOrder::class);
    }

    public function radiologist()
    {
        return $this->belongsTo(Staff::class, 'radiologist_id');
    }
}