Voici l’ensemble des modèles Eloquent correspondant aux migrations précédemment définies. Chaque modèle est placé dans `app/Models` avec les relations, les `$fillable`, les `$casts` et quelques méthodes utilitaires.

---

## 1. Modèle `User`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_user');
    }

    public function patient()
    {
        return $this->hasOne(Patient::class);
    }

    public function staff()
    {
        return $this->hasOne(Staff::class);
    }

    public function hasRole($roleName)
    {
        return $this->roles->contains('name', $roleName);
    }

    public function assignRole($role)
    {
        if (is_string($role)) {
            $role = Role::where('name', $role)->firstOrFail();
        }
        $this->roles()->syncWithoutDetaching([$role->id]);
    }

    public function revokeRole($role)
    {
        if (is_string($role)) {
            $role = Role::where('name', $role)->firstOrFail();
        }
        $this->roles()->detach($role->id);
    }
}
```

---

## 2. Modèle `Role`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function users()
    {
        return $this->belongsToMany(User::class, 'role_user');
    }
}
```

---

## 3. Modèle `Patient`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'patient_code',
        'first_name',
        'last_name',
        'date_of_birth',
        'gender',
        'phone',
        'email',
        'address',
        'emergency_contact_name',
        'emergency_contact_phone',
        'blood_group',
        'allergies',
        'medical_history',
        'user_id',
    ];

    protected $casts = [
        'date_of_birth' => 'date',
        'allergies' => 'array',
        'medical_history' => 'array',
    ];

    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function admissions()
    {
        return $this->hasMany(Admission::class);
    }

    public function medicalRecords()
    {
        return $this->hasMany(MedicalRecord::class);
    }

    public function allergiesList()
    {
        return $this->hasMany(Allergy::class);
    }

    public function vitalSigns()
    {
        return $this->hasMany(VitalSign::class);
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

    public function emergencyVisits()
    {
        return $this->hasMany(EmergencyVisit::class);
    }
}
```

---

## 4. Modèle `Staff`

```php
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
```

---

## 5. Modèle `Department`

```php
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
```

---

## 6. Modèle `Appointment`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use HasFactory, SoftDeletes;

    const STATUS_PENDING = 'pending';
    const STATUS_CONFIRMED = 'confirmed';
    const STATUS_CHECKED_IN = 'checked_in';
    const STATUS_COMPLETED = 'completed';
    const STATUS_CANCELLED = 'cancelled';
    const STATUS_NO_SHOW = 'no_show';

    protected $fillable = [
        'patient_id',
        'staff_id',
        'department_id',
        'scheduled_at',
        'end_at',
        'status',
        'reason',
        'notes',
        'created_by',
    ];

    protected $casts = [
        'scheduled_at' => 'datetime',
        'end_at' => 'datetime',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function staff()
    {
        return $this->belongsTo(Staff::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function scopeUpcoming($query)
    {
        return $query->where('scheduled_at', '>=', now());
    }

    public function scopeToday($query)
    {
        return $query->whereDate('scheduled_at', today());
    }
}
```

---

## 7. Modèle `Admission`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Admission extends Model
{
    use HasFactory, SoftDeletes;

    const STATUS_PLANNED = 'planned';
    const STATUS_ACTIVE = 'active';
    const STATUS_DISCHARGED = 'discharged';
    const STATUS_TRANSFERRED = 'transferred';
    const STATUS_CANCELLED = 'cancelled';

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
        'admission_date' => 'datetime',
        'discharge_date' => 'datetime',
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
}
```

---

## 8. Modèle `Bed`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bed extends Model
{
    use HasFactory;

    const STATUS_AVAILABLE = 'available';
    const STATUS_OCCUPIED = 'occupied';
    const STATUS_CLEANING = 'cleaning';
    const STATUS_MAINTENANCE = 'maintenance';

    protected $fillable = [
        'bed_number',
        'room_id',
        'department_id',
        'status',
    ];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function admissions()
    {
        return $this->hasMany(Admission::class);
    }

    public function scopeAvailable($query)
    {
        return $query->where('status', self::STATUS_AVAILABLE);
    }
}
```

---

## 9. Modèle `Room`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'room_number',
        'type',
        'department_id',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function beds()
    {
        return $this->hasMany(Bed::class);
    }
}
```

---

## 10. Modèle `MedicalRecord`

```php
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
```

---

## 11. Modèle `Allergy`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Allergy extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'allergen',
        'reaction',
        'severity',
        'notes',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
```

---

## 12. Modèle `VitalSign`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VitalSign extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'admission_id',
        'staff_id',
        'measured_at',
        'temperature',
        'heart_rate',
        'respiratory_rate',
        'blood_pressure_systolic',
        'blood_pressure_diastolic',
        'oxygen_saturation',
        'weight',
        'height',
        'notes',
    ];

    protected $casts = [
        'measured_at' => 'datetime',
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
```

---

## 13. Modèle `Prescription`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
    use HasFactory;

    const STATUS_ACTIVE = 'active';
    const STATUS_COMPLETED = 'completed';
    const STATUS_CANCELLED = 'cancelled';
    const STATUS_EXPIRED = 'expired';

    protected $fillable = [
        'patient_id',
        'admission_id',
        'prescriber_id',
        'prescribed_at',
        'status',
        'notes',
    ];

    protected $casts = [
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
```

---

## 14. Modèle `PrescriptionItem`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrescriptionItem extends Model
{
    use HasFactory;

    const STATUS_PRESCRIBED = 'prescribed';
    const STATUS_DISPENSED = 'dispensed';
    const STATUS_ADMINISTERED = 'administered';
    const STATUS_STOPPED = 'stopped';

    protected $fillable = [
        'prescription_id',
        'medication_id',
        'medication_name',
        'dosage',
        'frequency',
        'duration',
        'instructions',
        'start_date',
        'end_date',
        'status',
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];

    public function prescription()
    {
        return $this->belongsTo(Prescription::class);
    }

    public function medication()
    {
        return $this->belongsTo(Medication::class);
    }

    public function dispensingRecords()
    {
        return $this->hasMany(DispensingRecord::class);
    }
}
```

---

## 15. Modèle `Medication`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medication extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'generic_name',
        'form',
        'strength',
        'unit',
        'price',
        'stock_quantity',
        'reorder_level',
        'expiry_date',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'expiry_date' => 'date',
    ];

    public function prescriptionItems()
    {
        return $this->hasMany(PrescriptionItem::class);
    }

    public function dispensingRecords()
    {
        return $this->hasMany(DispensingRecord::class);
    }

    public function stockTransactions()
    {
        return $this->hasMany(StockTransaction::class);
    }

    public function purchaseOrderItems()
    {
        return $this->hasMany(PurchaseOrderItem::class);
    }

    public function isLowStock()
    {
        return $this->stock_quantity <= $this->reorder_level;
    }
}
```

---

## 16. Modèle `DispensingRecord`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DispensingRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'prescription_item_id',
        'medication_id',
        'dispensed_by',
        'administered_by',
        'dispensed_at',
        'administered_at',
        'quantity',
        'notes',
    ];

    protected $casts = [
        'dispensed_at' => 'datetime',
        'administered_at' => 'datetime',
    ];

    public function prescriptionItem()
    {
        return $this->belongsTo(PrescriptionItem::class);
    }

    public function medication()
    {
        return $this->belongsTo(Medication::class);
    }

    public function dispensedBy()
    {
        return $this->belongsTo(Staff::class, 'dispensed_by');
    }

    public function administeredBy()
    {
        return $this->belongsTo(Staff::class, 'administered_by');
    }
}
```

---

## 17. Modèle `StockTransaction`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockTransaction extends Model
{
    use HasFactory;

    const TYPE_PURCHASE = 'purchase';
    const TYPE_SALE = 'sale';
    const TYPE_ADJUSTMENT = 'adjustment';
    const TYPE_TRANSFER_IN = 'transfer_in';
    const TYPE_TRANSFER_OUT = 'transfer_out';

    protected $fillable = [
        'medication_id',
        'type',
        'quantity',
        'unit_price',
        'performed_by',
        'notes',
    ];

    protected $casts = [
        'unit_price' => 'decimal:2',
    ];

    public function medication()
    {
        return $this->belongsTo(Medication::class);
    }

    public function performedBy()
    {
        return $this->belongsTo(User::class, 'performed_by');
    }
}
```

---

## 18. Modèle `Supplier`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'contact_person',
        'phone',
        'email',
        'address',
    ];

    public function purchaseOrders()
    {
        return $this->hasMany(PurchaseOrder::class);
    }
}
```

---

## 19. Modèle `PurchaseOrder`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    use HasFactory;

    const STATUS_DRAFT = 'draft';
    const STATUS_ORDERED = 'ordered';
    const STATUS_RECEIVED = 'received';
    const STATUS_CANCELLED = 'cancelled';

    protected $fillable = [
        'order_code',
        'supplier_id',
        'order_date',
        'expected_delivery_date',
        'status',
        'total_amount',
        'created_by',
    ];

    protected $casts = [
        'order_date' => 'datetime',
        'expected_delivery_date' => 'datetime',
        'total_amount' => 'decimal:2',
    ];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function items()
    {
        return $this->hasMany(PurchaseOrderItem::class);
    }

    public function recalculateTotal()
    {
        $this->total_amount = $this->items->sum('total_price');
        $this->save();
    }
}
```

---

## 20. Modèle `PurchaseOrderItem`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'purchase_order_id',
        'medication_id',
        'quantity',
        'unit_price',
        'total_price',
    ];

    protected $casts = [
        'unit_price' => 'decimal:2',
        'total_price' => 'decimal:2',
    ];

    public function purchaseOrder()
    {
        return $this->belongsTo(PurchaseOrder::class);
    }

    public function medication()
    {
        return $this->belongsTo(Medication::class);
    }
}
```

---

## 21. Modèle `LabOrder`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LabOrder extends Model
{
    use HasFactory;

    const STATUS_PENDING = 'pending';
    const STATUS_SAMPLE_COLLECTED = 'sample_collected';
    const STATUS_IN_PROGRESS = 'in_progress';
    const STATUS_COMPLETED = 'completed';
    const STATUS_CANCELLED = 'cancelled';

    protected $fillable = [
        'order_code',
        'patient_id',
        'admission_id',
        'ordered_by',
        'order_date',
        'status',
        'clinical_info',
        'tests',
    ];

    protected $casts = [
        'order_date' => 'datetime',
        'tests' => 'array',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function admission()
    {
        return $this->belongsTo(Admission::class);
    }

    public function orderedBy()
    {
        return $this->belongsTo(Staff::class, 'ordered_by');
    }

    public function results()
    {
        return $this->hasMany(LabResult::class);
    }
}
```

---

## 22. Modèle `LabResult`

```php
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
```

---

## 23. Modèle `ImagingOrder`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagingOrder extends Model
{
    use HasFactory;

    const STATUS_PENDING = 'pending';
    const STATUS_SCHEDULED = 'scheduled';
    const STATUS_PERFORMED = 'performed';
    const STATUS_REPORTED = 'reported';
    const STATUS_CANCELLED = 'cancelled';

    protected $fillable = [
        'order_code',
        'patient_id',
        'admission_id',
        'ordered_by',
        'order_date',
        'imaging_type',
        'body_part',
        'status',
        'clinical_info',
    ];

    protected $casts = [
        'order_date' => 'datetime',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function admission()
    {
        return $this->belongsTo(Admission::class);
    }

    public function orderedBy()
    {
        return $this->belongsTo(Staff::class, 'ordered_by');
    }

    public function report()
    {
        return $this->hasOne(ImagingReport::class);
    }
}
```

---

## 24. Modèle `ImagingReport`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagingReport extends Model
{
    use HasFactory;

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
```

---

## 25. Modèle `Invoice`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoice extends Model
{
    use HasFactory, SoftDeletes;

    const STATUS_DRAFT = 'draft';
    const STATUS_ISSUED = 'issued';
    const STATUS_PARTIALLY_PAID = 'partially_paid';
    const STATUS_PAID = 'paid';
    const STATUS_OVERDUE = 'overdue';
    const STATUS_CANCELLED = 'cancelled';

    protected $fillable = [
        'invoice_code',
        'patient_id',
        'admission_id',
        'appointment_id',
        'invoice_date',
        'subtotal',
        'discount',
        'tax',
        'total_amount',
        'paid_amount',
        'balance_due',
        'status',
        'notes',
    ];

    protected $casts = [
        'invoice_date' => 'datetime',
        'subtotal' => 'decimal:2',
        'discount' => 'decimal:2',
        'tax' => 'decimal:2',
        'total_amount' => 'decimal:2',
        'paid_amount' => 'decimal:2',
        'balance_due' => 'decimal:2',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function admission()
    {
        return $this->belongsTo(Admission::class);
    }

    public function appointment()
    {
        return $this->belongsTo(Appointment::class);
    }

    public function items()
    {
        return $this->hasMany(InvoiceItem::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function recalculateTotals()
    {
        $this->subtotal = $this->items->sum('total_price');
        $this->total_amount = $this->subtotal - $this->discount + $this->tax;
        $this->balance_due = $this->total_amount - $this->paid_amount;
        $this->save();

        $this->updateStatus();
    }

    public function updateStatus()
    {
        if ($this->status === self::STATUS_CANCELLED) {
            return;
        }
        if ($this->balance_due <= 0) {
            $this->status = self::STATUS_PAID;
        } elseif ($this->paid_amount > 0) {
            $this->status = self::STATUS_PARTIALLY_PAID;
        } elseif ($this->status === self::STATUS_DRAFT) {
            // keep draft
        } else {
            $this->status = self::STATUS_ISSUED;
        }
        $this->save();
    }
}
```

---

## 26. Modèle `InvoiceItem`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice_id',
        'item_type',
        'description',
        'quantity',
        'unit_price',
        'total_price',
        'reference_id',
        'reference_type',
    ];

    protected $casts = [
        'unit_price' => 'decimal:2',
        'total_price' => 'decimal:2',
    ];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }

    public function reference()
    {
        return $this->morphTo();
    }
}
```

---

## 27. Modèle `Payment`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    const METHOD_CASH = 'cash';
    const METHOD_CREDIT_CARD = 'credit_card';
    const METHOD_BANK_TRANSFER = 'bank_transfer';
    const METHOD_INSURANCE = 'insurance';
    const METHOD_MOBILE_MONEY = 'mobile_money';

    protected $fillable = [
        'payment_code',
        'invoice_id',
        'payment_date',
        'amount',
        'payment_method',
        'transaction_reference',
        'received_by',
    ];

    protected $casts = [
        'payment_date' => 'datetime',
        'amount' => 'decimal:2',
    ];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }

    public function receivedBy()
    {
        return $this->belongsTo(User::class, 'received_by');
    }
}
```

---

## 28. Modèle `Surgery`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Surgery extends Model
{
    use HasFactory;

    const STATUS_SCHEDULED = 'scheduled';
    const STATUS_IN_PROGRESS = 'in_progress';
    const STATUS_COMPLETED = 'completed';
    const STATUS_CANCELLED = 'cancelled';

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
```

---

## 29. Modèle `OperatingRoom`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OperatingRoom extends Model
{
    use HasFactory;

    const STATUS_AVAILABLE = 'available';
    const STATUS_OCCUPIED = 'occupied';
    const STATUS_CLEANING = 'cleaning';
    const STATUS_MAINTENANCE = 'maintenance';

    protected $fillable = [
        'name',
        'location',
        'status',
    ];

    public function surgeries()
    {
        return $this->hasMany(Surgery::class);
    }

    public function scopeAvailable($query)
    {
        return $query->where('status', self::STATUS_AVAILABLE);
    }
}
```

---

## 30. Modèle `EmergencyVisit`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmergencyVisit extends Model
{
    use HasFactory;

    const STATUS_WAITING = 'waiting';
    const STATUS_IN_TREATMENT = 'in_treatment';
    const STATUS_DISCHARGED = 'discharged';
    const STATUS_ADMITTED = 'admitted';
    const STATUS_LEFT_WITHOUT_BEING_SEEN = 'left_without_being_seen';

    protected $fillable = [
        'patient_id',
        'arrival_time',
        'triage_level',
        'chief_complaint',
        'status',
        'attending_staff_id',
    ];

    protected $casts = [
        'arrival_time' => 'datetime',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function attendingStaff()
    {
        return $this->belongsTo(Staff::class, 'attending_staff_id');
    }
}
```

---

Ces modèles couvrent l’ensemble des entités de l’application. Ils respectent les conventions Laravel et sont prêts à être utilisés dans les contrôleurs, les formulaires et les vues.