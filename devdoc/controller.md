Voici une implémentation de référence pour les contrôleurs principaux. En raison de la longueur, je fournis le code complet pour les contrôleurs les plus importants et je décris les modèles pour les autres, qui suivent les mêmes conventions CRUD.

---

## 1. Contrôleur d'authentification

### `app/Http/Controllers/Auth/LoginController.php`

```php
<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended(route('dashboard'));
        }

        return back()->withErrors([
            'email' => 'Les identifiants sont incorrects.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
```

### `app/Http/Controllers/Auth/RegisterController.php`

```php
<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function showRegistrationForm()
    {
        return view('auth.register');
    }

    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        // Assigner un rôle par défaut (par exemple, patient)
        $role = Role::where('name', 'patient')->first();
        if ($role) {
            $user->roles()->attach($role);
        }

        auth()->login($user);

        return redirect()->route('dashboard');
    }
}
```

---

## 2. Tableau de bord

### `app/Http/Controllers/DashboardController.php`

```php
<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\Appointment;
use App\Models\Admission;
use App\Models\Invoice;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'total_patients' => Patient::count(),
            'appointments_today' => Appointment::whereDate('scheduled_at', today())->count(),
            'active_admissions' => Admission::where('status', 'active')->count(),
            'revenue_this_month' => Invoice::whereMonth('invoice_date', now()->month)
                ->whereYear('invoice_date', now()->year)
                ->sum('total_amount'),
        ];

        $recent_patients = Patient::latest()->take(5)->get();
        $upcoming_appointments = Appointment::where('scheduled_at', '>=', now())
            ->with('patient', 'staff')
            ->orderBy('scheduled_at')
            ->take(10)
            ->get();

        return view('dashboard', compact('stats', 'recent_patients', 'upcoming_appointments'));
    }
}
```

---

## 3. Gestion des patients

### `app/Http/Controllers/PatientController.php`

```php
<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function index(Request $request)
    {
        $query = Patient::query();

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function($q) use ($search) {
                $q->where('first_name', 'like', "%{$search}%")
                  ->orWhere('last_name', 'like', "%{$search}%")
                  ->orWhere('patient_code', 'like', "%{$search}%");
            });
        }

        $patients = $query->orderBy('last_name')->paginate(20);
        return view('patients.index', compact('patients'));
    }

    public function create()
    {
        return view('patients.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'gender' => 'required|in:male,female,other',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email',
            'address' => 'nullable|string',
            'emergency_contact_name' => 'nullable|string',
            'emergency_contact_phone' => 'nullable|string',
            'blood_group' => 'nullable|string|max:5',
            'allergies' => 'nullable|array',
            'medical_history' => 'nullable|array',
        ]);

        // Générer un code patient unique (ex: PAT0001)
        $data['patient_code'] = 'PAT' . str_pad(Patient::max('id') + 1, 4, '0', STR_PAD_LEFT);

        Patient::create($data);

        return redirect()->route('patients.index')->with('success', 'Patient créé avec succès.');
    }

    public function show(Patient $patient)
    {
        $patient->load('medicalRecords', 'allergies', 'vitalSigns', 'appointments', 'admissions', 'invoices');
        return view('patients.show', compact('patient'));
    }

    public function edit(Patient $patient)
    {
        return view('patients.edit', compact('patient'));
    }

    public function update(Request $request, Patient $patient)
    {
        $data = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'gender' => 'required|in:male,female,other',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email',
            'address' => 'nullable|string',
            'emergency_contact_name' => 'nullable|string',
            'emergency_contact_phone' => 'nullable|string',
            'blood_group' => 'nullable|string|max:5',
            'allergies' => 'nullable|array',
            'medical_history' => 'nullable|array',
        ]);

        $patient->update($data);

        return redirect()->route('patients.show', $patient)->with('success', 'Patient mis à jour.');
    }

    public function destroy(Patient $patient)
    {
        $patient->delete();
        return redirect()->route('patients.index')->with('success', 'Patient supprimé.');
    }
}
```

---

## 4. Rendez-vous

### `app/Http/Controllers/AppointmentController.php`

```php
<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Patient;
use App\Models\Staff;
use App\Models\Department;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index(Request $request)
    {
        $query = Appointment::with('patient', 'staff', 'department');

        if ($request->filled('date')) {
            $query->whereDate('scheduled_at', $request->input('date'));
        }

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        $appointments = $query->orderBy('scheduled_at')->paginate(20);
        return view('appointments.index', compact('appointments'));
    }

    public function create()
    {
        $patients = Patient::orderBy('last_name')->get();
        $staff = Staff::orderBy('last_name')->get();
        $departments = Department::orderBy('name')->get();
        return view('appointments.create', compact('patients', 'staff', 'departments'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'staff_id' => 'nullable|exists:staff,id',
            'department_id' => 'nullable|exists:departments,id',
            'scheduled_at' => 'required|date',
            'end_at' => 'nullable|date|after:scheduled_at',
            'reason' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        $data['status'] = 'pending';
        $data['created_by'] = auth()->id();

        Appointment::create($data);

        return redirect()->route('appointments.index')->with('success', 'Rendez-vous enregistré.');
    }

    public function show(Appointment $appointment)
    {
        $appointment->load('patient', 'staff', 'department');
        return view('appointments.show', compact('appointment'));
    }

    public function edit(Appointment $appointment)
    {
        $patients = Patient::orderBy('last_name')->get();
        $staff = Staff::orderBy('last_name')->get();
        $departments = Department::orderBy('name')->get();
        return view('appointments.edit', compact('appointment', 'patients', 'staff', 'departments'));
    }

    public function update(Request $request, Appointment $appointment)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'staff_id' => 'nullable|exists:staff,id',
            'department_id' => 'nullable|exists:departments,id',
            'scheduled_at' => 'required|date',
            'end_at' => 'nullable|date|after:scheduled_at',
            'reason' => 'nullable|string',
            'notes' => 'nullable|string',
            'status' => 'nullable|in:pending,confirmed,checked_in,completed,cancelled,no_show',
        ]);

        $appointment->update($data);
        return redirect()->route('appointments.show', $appointment)->with('success', 'Rendez-vous mis à jour.');
    }

    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        return redirect()->route('appointments.index')->with('success', 'Rendez-vous supprimé.');
    }

    // Actions spécifiques
    public function confirm(Appointment $appointment)
    {
        $appointment->update(['status' => 'confirmed']);
        return back()->with('success', 'Rendez-vous confirmé.');
    }

    public function checkIn(Appointment $appointment)
    {
        $appointment->update(['status' => 'checked_in']);
        return back()->with('success', 'Patient arrivé.');
    }

    public function complete(Appointment $appointment)
    {
        $appointment->update(['status' => 'completed']);
        return back()->with('success', 'Consultation terminée.');
    }

    public function cancel(Appointment $appointment)
    {
        $appointment->update(['status' => 'cancelled']);
        return back()->with('success', 'Rendez-vous annulé.');
    }

    public function noShow(Appointment $appointment)
    {
        $appointment->update(['status' => 'no_show']);
        return back()->with('success', 'Patient marqué comme absent.');
    }
}
```

---

## 5. Dossier médical

### `app/Http/Controllers/MedicalRecordController.php`

```php
<?php

namespace App\Http\Controllers;

use App\Models\MedicalRecord;
use App\Models\Patient;
use App\Models\Admission;
use Illuminate\Http\Request;

class MedicalRecordController extends Controller
{
    public function index(Patient $patient)
    {
        $records = MedicalRecord::where('patient_id', $patient->id)
            ->with('staff')
            ->orderBy('record_date', 'desc')
            ->paginate(20);
        return view('medical-records.index', compact('patient', 'records'));
    }

    public function create(Patient $patient)
    {
        $admissions = Admission::where('patient_id', $patient->id)->get();
        return view('medical-records.create', compact('patient', 'admissions'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'admission_id' => 'nullable|exists:admissions,id',
            'record_date' => 'required|date',
            'type' => 'required|string',
            'subjective' => 'nullable|string',
            'objective' => 'nullable|string',
            'assessment' => 'nullable|string',
            'plan' => 'nullable|string',
            'vital_signs' => 'nullable|array',
            'attachments' => 'nullable|array',
        ]);

        $data['staff_id'] = auth()->user()->staff->id ?? null;

        MedicalRecord::create($data);
        return redirect()->route('patients.medical-records.index', $data['patient_id'])
            ->with('success', 'Note médicale enregistrée.');
    }

    public function show(MedicalRecord $medicalRecord)
    {
        $medicalRecord->load('patient', 'staff', 'admission');
        return view('medical-records.show', compact('medicalRecord'));
    }

    public function edit(MedicalRecord $medicalRecord)
    {
        $admissions = Admission::where('patient_id', $medicalRecord->patient_id)->get();
        return view('medical-records.edit', compact('medicalRecord', 'admissions'));
    }

    public function update(Request $request, MedicalRecord $medicalRecord)
    {
        $data = $request->validate([
            'admission_id' => 'nullable|exists:admissions,id',
            'record_date' => 'required|date',
            'type' => 'required|string',
            'subjective' => 'nullable|string',
            'objective' => 'nullable|string',
            'assessment' => 'nullable|string',
            'plan' => 'nullable|string',
            'vital_signs' => 'nullable|array',
            'attachments' => 'nullable|array',
        ]);

        $medicalRecord->update($data);
        return redirect()->route('medical-records.show', $medicalRecord)->with('success', 'Note mise à jour.');
    }

    public function destroy(MedicalRecord $medicalRecord)
    {
        $medicalRecord->delete();
        return redirect()->route('patients.medical-records.index', $medicalRecord->patient_id)
            ->with('success', 'Note supprimée.');
    }

    public function attachDocument(Request $request, MedicalRecord $medicalRecord)
    {
        // Logique pour stocker un fichier et l'ajouter au champ JSON attachments
        // ...
    }
}
```

---

## 6. Prescriptions

### `app/Http/Controllers/PrescriptionController.php`

```php
<?php

namespace App\Http\Controllers;

use App\Models\Prescription;
use App\Models\Patient;
use App\Models\Admission;
use App\Models\Staff;
use Illuminate\Http\Request;

class PrescriptionController extends Controller
{
    public function index(Request $request)
    {
        $query = Prescription::with('patient', 'prescriber');

        if ($request->filled('patient_id')) {
            $query->where('patient_id', $request->input('patient_id'));
        }

        $prescriptions = $query->orderBy('prescribed_at', 'desc')->paginate(20);
        return view('prescriptions.index', compact('prescriptions'));
    }

    public function create(Request $request)
    {
        $patients = Patient::orderBy('last_name')->get();
        $admissions = Admission::where('status', 'active')->get();
        $staff = Staff::orderBy('last_name')->get();

        $patient_id = $request->input('patient_id');
        return view('prescriptions.create', compact('patients', 'admissions', 'staff', 'patient_id'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'admission_id' => 'nullable|exists:admissions,id',
            'prescriber_id' => 'nullable|exists:staff,id',
            'prescribed_at' => 'required|date',
            'notes' => 'nullable|string',
        ]);

        $data['status'] = 'active';
        $prescription = Prescription::create($data);

        return redirect()->route('prescriptions.show', $prescription)
            ->with('success', 'Prescription créée. Ajoutez maintenant les médicaments.');
    }

    public function show(Prescription $prescription)
    {
        $prescription->load('patient', 'prescriber', 'admission', 'items.medication', 'items.dispensingRecords');
        return view('prescriptions.show', compact('prescription'));
    }

    public function edit(Prescription $prescription)
    {
        $patients = Patient::orderBy('last_name')->get();
        $admissions = Admission::where('status', 'active')->get();
        $staff = Staff::orderBy('last_name')->get();
        return view('prescriptions.edit', compact('prescription', 'patients', 'admissions', 'staff'));
    }

    public function update(Request $request, Prescription $prescription)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'admission_id' => 'nullable|exists:admissions,id',
            'prescriber_id' => 'nullable|exists:staff,id',
            'prescribed_at' => 'required|date',
            'notes' => 'nullable|string',
            'status' => 'nullable|in:active,completed,cancelled,expired',
        ]);

        $prescription->update($data);
        return redirect()->route('prescriptions.show', $prescription)->with('success', 'Prescription mise à jour.');
    }

    public function destroy(Prescription $prescription)
    {
        $prescription->delete();
        return redirect()->route('prescriptions.index')->with('success', 'Prescription supprimée.');
    }
}
```

---

## 7. Facturation

### `app/Http/Controllers/InvoiceController.php`

```php
<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\Patient;
use App\Models\Admission;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index(Request $request)
    {
        $query = Invoice::with('patient');

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        $invoices = $query->orderBy('invoice_date', 'desc')->paginate(20);
        return view('invoices.index', compact('invoices'));
    }

    public function create()
    {
        $patients = Patient::orderBy('last_name')->get();
        $admissions = Admission::orderBy('admission_date', 'desc')->get();
        return view('invoices.create', compact('patients', 'admissions'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'admission_id' => 'nullable|exists:admissions,id',
            'invoice_date' => 'required|date',
            'notes' => 'nullable|string',
        ]);

        $data['invoice_code'] = 'INV' . str_pad(Invoice::max('id') + 1, 6, '0', STR_PAD_LEFT);
        $data['status'] = 'draft';
        $data['subtotal'] = 0;
        $data['discount'] = 0;
        $data['tax'] = 0;
        $data['total_amount'] = 0;
        $data['paid_amount'] = 0;
        $data['balance_due'] = 0;

        $invoice = Invoice::create($data);

        return redirect()->route('invoices.show', $invoice)->with('success', 'Facture créée. Ajoutez des lignes.');
    }

    public function show(Invoice $invoice)
    {
        $invoice->load('patient', 'admission', 'items', 'payments');
        return view('invoices.show', compact('invoice'));
    }

    public function edit(Invoice $invoice)
    {
        $patients = Patient::orderBy('last_name')->get();
        $admissions = Admission::orderBy('admission_date', 'desc')->get();
        return view('invoices.edit', compact('invoice', 'patients', 'admissions'));
    }

    public function update(Request $request, Invoice $invoice)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'admission_id' => 'nullable|exists:admissions,id',
            'invoice_date' => 'required|date',
            'notes' => 'nullable|string',
            'discount' => 'nullable|numeric|min:0',
            'tax' => 'nullable|numeric|min:0',
        ]);

        $invoice->update($data);
        // Recalculer les totaux
        $invoice->recalculateTotals();

        return redirect()->route('invoices.show', $invoice)->with('success', 'Facture mise à jour.');
    }

    public function destroy(Invoice $invoice)
    {
        $invoice->delete();
        return redirect()->route('invoices.index')->with('success', 'Facture supprimée.');
    }

    public function issue(Invoice $invoice)
    {
        $invoice->update(['status' => 'issued']);
        return back()->with('success', 'Facture émise.');
    }

    public function cancel(Invoice $invoice)
    {
        $invoice->update(['status' => 'cancelled']);
        return back()->with('success', 'Facture annulée.');
    }
}
```

---

## 8. Portail patient (extrait)

### `app/Http/Controllers/PatientPortalController.php`

```php
<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\MedicalRecord;
use App\Models\Invoice;
use App\Models\Prescription;
use Illuminate\Http\Request;

class PatientPortalController extends Controller
{
    public function dashboard()
    {
        $patient = auth()->user()->patient;
        if (!$patient) {
            abort(403, 'Compte patient non associé.');
        }

        $upcomingAppointments = Appointment::where('patient_id', $patient->id)
            ->where('scheduled_at', '>=', now())
            ->orderBy('scheduled_at')
            ->take(5)
            ->get();

        $recentRecords = MedicalRecord::where('patient_id', $patient->id)
            ->latest('record_date')
            ->take(5)
            ->get();

        $unpaidInvoices = Invoice::where('patient_id', $patient->id)
            ->where('balance_due', '>', 0)
            ->get();

        return view('portal.dashboard', compact('patient', 'upcomingAppointments', 'recentRecords', 'unpaidInvoices'));
    }

    public function appointments()
    {
        $patient = auth()->user()->patient;
        $appointments = Appointment::where('patient_id', $patient->id)
            ->orderBy('scheduled_at', 'desc')
            ->paginate(10);
        return view('portal.appointments', compact('appointments'));
    }

    public function bookAppointment(Request $request)
    {
        // Logique de prise de rendez-vous en ligne
        // ...
    }

    public function medicalRecords()
    {
        $patient = auth()->user()->patient;
        $records = MedicalRecord::where('patient_id', $patient->id)
            ->orderBy('record_date', 'desc')
            ->paginate(10);
        return view('portal.medical-records', compact('records'));
    }

    public function results()
    {
        // Afficher les résultats de laboratoire et d'imagerie
        // ...
    }

    public function invoices()
    {
        $patient = auth()->user()->patient;
        $invoices = Invoice::where('patient_id', $patient->id)
            ->orderBy('invoice_date', 'desc')
            ->paginate(10);
        return view('portal.invoices', compact('invoices'));
    }

    public function payInvoice(Request $request, Invoice $invoice)
    {
        // Vérifier que la facture appartient au patient connecté
        $patient = auth()->user()->patient;
        if ($invoice->patient_id !== $patient->id) {
            abort(403);
        }
        return view('portal.pay-invoice', compact('invoice'));
    }

    public function processPayment(Request $request, Invoice $invoice)
    {
        // Traitement du paiement en ligne
        // ...
    }

    public function profile()
    {
        $patient = auth()->user()->patient;
        return view('portal.profile', compact('patient'));
    }

    public function updateProfile(Request $request)
    {
        // Mise à jour du profil patient
        // ...
    }

    public function messages()
    {
        // Messagerie sécurisée
        // ...
    }

    public function sendMessage(Request $request)
    {
        // Envoi de message
        // ...
    }
}
```

---

## Autres contrôleurs (modèles CRUD standard)

Pour les entités restantes (`BedController`, `RoomController`, `DepartmentController`, `StaffController`, `MedicationController`, `SupplierController`, `PurchaseOrderController`, `LabOrderController`, `ImagingOrderController`, `SurgeryController`, `OperatingRoomController`, `EmergencyVisitController`, `UserController`, `RoleController`), le code suit le même schéma :

- **index()** : liste paginée avec filtres éventuels
- **create()** : affiche le formulaire
- **store(Request $request)** : validation et création
- **show($id)** : détail avec relations
- **edit($id)** : formulaire d'édition
- **update(Request $request, $id)** : validation et mise à jour
- **destroy($id)** : suppression

Des méthodes supplémentaires sont ajoutées pour les actions spécifiques (changement de statut, transfert, etc.) comme vu pour `AppointmentController`.

Vous pouvez générer rapidement ces contrôleurs avec la commande Artisan :

```bash
php artisan make:controller BedController --resource --model=Bed
php artisan make:controller DepartmentController --resource --model=Department
# etc.
```

Puis compléter la logique métier selon les besoins.

---

Cette base de code vous permet de démarrer le développement. Pour une application complète, il faudra également créer les vues Blade, les Form Requests pour la validation, les Policies pour l'autorisation, et éventuellement des services métier.