<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LabResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'lab_order_id',
        'test_name',
        'result_value',
        'unit',
        'reference_range',
        'is_abnormal',
        'notes',
        'performed_by',
        'result_date',
    ];

    protected $casts = [
        'is_abnormal' => 'boolean',
        'result_date' => 'datetime',
    ];

    public function labOrder()
    {
        return $this->belongsTo(LabOrder::class);
    }

    public function performedBy()
    {
        return $this->belongsTo(Staff::class, 'performed_by');
    }
}
