<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\MedicalRecordController;
use App\Http\Controllers\AllergyController;
use App\Http\Controllers\VitalSignController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AdmissionController;
use App\Http\Controllers\BedController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\PrescriptionController;
use App\Http\Controllers\PrescriptionItemController;
use App\Http\Controllers\MedicationController;
use App\Http\Controllers\DispensingRecordController;
use App\Http\Controllers\StockTransactionController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\PurchaseOrderController;
use App\Http\Controllers\LabOrderController;
use App\Http\Controllers\LabResultController;
use App\Http\Controllers\ImagingOrderController;
use App\Http\Controllers\ImagingReportController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\SurgeryController;
use App\Http\Controllers\OperatingRoomController;
use App\Http\Controllers\EmergencyVisitController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PatientPortalController;

/*
|--------------------------------------------------------------------------
| Routes publiques
|--------------------------------------------------------------------------
| Connexion, inscription, déconnexion, mot de passe oublié et double
| authentification sont fournis par Fortify (voir config/fortify.php).
*/
Route::get('/', function () {
    return view('welcome');
})->name('home');

/*
|--------------------------------------------------------------------------
| Routes protégées par authentification
|--------------------------------------------------------------------------
*/
Route::middleware(['auth'])->group(function () {

    // Tableau de bord principal
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    /*
    |--------------------------------------------------------------------------
    | Gestion des patients
    |--------------------------------------------------------------------------
    */
    Route::resource('patients', PatientController::class);
    Route::get('patients/{patient}/medical-records', [MedicalRecordController::class, 'index'])
        ->name('patients.medical-records.index');


        Route::get('medical-records', [MedicalRecordController::class, 'index'])
            ->name('medical-records.index');


    Route::get('patients/{patient}/allergies', [AllergyController::class, 'index'])
        ->name('patients.allergies.index');
    Route::post('patients/{patient}/allergies', [AllergyController::class, 'store'])
        ->name('patients.allergies.store');
    Route::delete('patients/{patient}/allergies/{allergy}', [AllergyController::class, 'destroy'])
        ->name('patients.allergies.destroy');
    Route::get('patients/{patient}/vital-signs', [VitalSignController::class, 'index'])
        ->name('patients.vital-signs.index');
    Route::post('patients/{patient}/vital-signs', [VitalSignController::class, 'store'])
        ->name('patients.vital-signs.store');

    /*
    |--------------------------------------------------------------------------
    | Dossiers médicaux (DME)
    |--------------------------------------------------------------------------
    */
    Route::resource('medical-records', MedicalRecordController::class)->except(['index', 'create']);
    Route::get('medical-records/create/{patient}', [MedicalRecordController::class, 'create'])
        ->name('medical-records.create');
    Route::post('medical-records/{medicalRecord}/attach-document', [MedicalRecordController::class, 'attachDocument'])
        ->name('medical-records.attach-document');

    /*
    |--------------------------------------------------------------------------
    | Rendez-vous
    |--------------------------------------------------------------------------
    */
    Route::resource('appointments', AppointmentController::class);
    Route::post('appointments/{appointment}/confirm', [AppointmentController::class, 'confirm'])
        ->name('appointments.confirm');
    Route::post('appointments/{appointment}/check-in', [AppointmentController::class, 'checkIn'])
        ->name('appointments.check-in');
    Route::post('appointments/{appointment}/complete', [AppointmentController::class, 'complete'])
        ->name('appointments.complete');
    Route::post('appointments/{appointment}/cancel', [AppointmentController::class, 'cancel'])
        ->name('appointments.cancel');
    Route::post('appointments/{appointment}/no-show', [AppointmentController::class, 'noShow'])
        ->name('appointments.no-show');

    /*
    |--------------------------------------------------------------------------
    | Admissions / hospitalisations
    |--------------------------------------------------------------------------
    */
    Route::resource('admissions', AdmissionController::class);
    Route::post('admissions/{admission}/transfer', [AdmissionController::class, 'transfer'])
        ->name('admissions.transfer');
    Route::post('admissions/{admission}/discharge', [AdmissionController::class, 'discharge'])
        ->name('admissions.discharge');
    Route::get('admissions/{admission}/beds', [AdmissionController::class, 'availableBeds'])
        ->name('admissions.available-beds');

    /*
    |--------------------------------------------------------------------------
    | Lits et chambres
    |--------------------------------------------------------------------------
    */
    Route::resource('beds', BedController::class);
    Route::post('beds/{bed}/change-status', [BedController::class, 'changeStatus'])
        ->name('beds.change-status');
    Route::resource('rooms', RoomController::class);

    /*
    |--------------------------------------------------------------------------
    | Départements / services
    |--------------------------------------------------------------------------
    */
    Route::resource('departments', DepartmentController::class);

    /*
    |--------------------------------------------------------------------------
    | Personnel (médecins, infirmiers, etc.)
    |--------------------------------------------------------------------------
    */
    Route::resource('staff', StaffController::class);
    Route::get('staff/{staff}/schedule', [StaffController::class, 'schedule'])
        ->name('staff.schedule');
    Route::post('staff/{staff}/schedule', [StaffController::class, 'updateSchedule'])
        ->name('staff.schedule.update');
    Route::get('staff/{staff}/leaves', [StaffController::class, 'leaves'])
        ->name('staff.leaves');
    Route::post('staff/{staff}/leaves', [StaffController::class, 'storeLeave'])
        ->name('staff.leaves.store');

    /*
    |--------------------------------------------------------------------------
    | Prescriptions
    |--------------------------------------------------------------------------
    */
    Route::resource('prescriptions', PrescriptionController::class);
    Route::post('prescriptions/{prescription}/items', [PrescriptionItemController::class, 'store'])
        ->name('prescriptions.items.store');
    Route::put('prescriptions/items/{item}', [PrescriptionItemController::class, 'update'])
        ->name('prescriptions.items.update');
    Route::delete('prescriptions/items/{item}', [PrescriptionItemController::class, 'destroy'])
        ->name('prescriptions.items.destroy');
    Route::post('prescriptions/items/{item}/dispense', [DispensingRecordController::class, 'dispense'])
        ->name('prescriptions.items.dispense');
    Route::post('prescriptions/items/{item}/administer', [DispensingRecordController::class, 'administer'])
        ->name('prescriptions.items.administer');

    /*
    |--------------------------------------------------------------------------
    | Médicaments et stock
    |--------------------------------------------------------------------------
    */
    Route::resource('medications', MedicationController::class);
    Route::get('medications/{medication}/stock', [StockTransactionController::class, 'index'])
        ->name('medications.stock');
    Route::post('medications/{medication}/stock/adjust', [StockTransactionController::class, 'adjust'])
        ->name('medications.stock.adjust');
    Route::get('stock-transactions', [StockTransactionController::class, 'index'])
        ->name('stock-transactions.index');

    /*
    |--------------------------------------------------------------------------
    | Fournisseurs et commandes (pharmacie)
    |--------------------------------------------------------------------------
    */
    Route::resource('suppliers', SupplierController::class);
    Route::resource('purchase-orders', PurchaseOrderController::class);
    Route::post('purchase-orders/{purchaseOrder}/receive', [PurchaseOrderController::class, 'receive'])
        ->name('purchase-orders.receive');
    Route::post('purchase-orders/{purchaseOrder}/cancel', [PurchaseOrderController::class, 'cancel'])
        ->name('purchase-orders.cancel');

    /*
    |--------------------------------------------------------------------------
    | Laboratoire
    |--------------------------------------------------------------------------
    */
    Route::resource('lab-orders', LabOrderController::class);
    Route::post('lab-orders/{labOrder}/collect-sample', [LabOrderController::class, 'collectSample'])
        ->name('lab-orders.collect-sample');
    Route::post('lab-orders/{labOrder}/start-analysis', [LabOrderController::class, 'startAnalysis'])
        ->name('lab-orders.start-analysis');
    Route::post('lab-orders/{labOrder}/complete', [LabOrderController::class, 'complete'])
        ->name('lab-orders.complete');
    Route::post('lab-orders/{labOrder}/results', [LabResultController::class, 'store'])
        ->name('lab-orders.results.store');
    Route::put('lab-results/{result}', [LabResultController::class, 'update'])
        ->name('lab-results.update');
    Route::delete('lab-results/{result}', [LabResultController::class, 'destroy'])
        ->name('lab-results.destroy');

    /*
    |--------------------------------------------------------------------------
    | Imagerie médicale
    |--------------------------------------------------------------------------
    */
    Route::resource('imaging-orders', ImagingOrderController::class);
    Route::post('imaging-orders/{imagingOrder}/schedule', [ImagingOrderController::class, 'schedule'])
        ->name('imaging-orders.schedule');
    Route::post('imaging-orders/{imagingOrder}/perform', [ImagingOrderController::class, 'perform'])
        ->name('imaging-orders.perform');
    Route::post('imaging-orders/{imagingOrder}/report', [ImagingReportController::class, 'store'])
        ->name('imaging-orders.report.store');
    Route::put('imaging-reports/{report}', [ImagingReportController::class, 'update'])
        ->name('imaging-reports.update');

    /*
    |--------------------------------------------------------------------------
    | Facturation et paiements
    |--------------------------------------------------------------------------
    */
    Route::resource('invoices', InvoiceController::class);
    Route::post('invoices/{invoice}/issue', [InvoiceController::class, 'issue'])
        ->name('invoices.issue');
    Route::post('invoices/{invoice}/cancel', [InvoiceController::class, 'cancel'])
        ->name('invoices.cancel');
    Route::post('invoices/{invoice}/payments', [PaymentController::class, 'store'])
        ->name('invoices.payments.store');
    Route::delete('payments/{payment}', [PaymentController::class, 'destroy'])
        ->name('payments.destroy');
    Route::get('payments', [PaymentController::class, 'index'])
        ->name('payments.index');

    /*
    |--------------------------------------------------------------------------
    | Bloc opératoire et chirurgies
    |--------------------------------------------------------------------------
    */
    Route::resource('surgeries', SurgeryController::class);
    Route::post('surgeries/{surgery}/start', [SurgeryController::class, 'start'])
        ->name('surgeries.start');
    Route::post('surgeries/{surgery}/complete', [SurgeryController::class, 'complete'])
        ->name('surgeries.complete');
    Route::post('surgeries/{surgery}/cancel', [SurgeryController::class, 'cancel'])
        ->name('surgeries.cancel');
    Route::resource('operating-rooms', OperatingRoomController::class);

    /*
    |--------------------------------------------------------------------------
    | Urgences
    |--------------------------------------------------------------------------
    */
    Route::resource('emergency-visits', EmergencyVisitController::class);
    Route::post('emergency-visits/{emergencyVisit}/triage', [EmergencyVisitController::class, 'triage'])
        ->name('emergency-visits.triage');
    Route::post('emergency-visits/{emergencyVisit}/admit', [EmergencyVisitController::class, 'admit'])
        ->name('emergency-visits.admit');
    Route::post('emergency-visits/{emergencyVisit}/discharge', [EmergencyVisitController::class, 'discharge'])
        ->name('emergency-visits.discharge');

    /*
    |--------------------------------------------------------------------------
    | Rapports et statistiques
    |--------------------------------------------------------------------------
    */
    Route::get('/reports/occupancy', [ReportController::class, 'occupancy'])
        ->name('reports.occupancy');
    Route::get('/reports/activity', [ReportController::class, 'activity'])
        ->name('reports.activity');
    Route::get('/reports/finance', [ReportController::class, 'finance'])
        ->name('reports.finance');
    Route::get('/reports/quality', [ReportController::class, 'quality'])
        ->name('reports.quality');

    /*
    |--------------------------------------------------------------------------
    | Administration (utilisateurs, rôles)
    |--------------------------------------------------------------------------
    */
    Route::resource('users', UserController::class);
    Route::resource('roles', RoleController::class);
    Route::post('users/{user}/assign-role', [UserController::class, 'assignRole'])
        ->name('users.assign-role');
    Route::post('users/{user}/revoke-role', [UserController::class, 'revokeRole'])
        ->name('users.revoke-role');
});

/*
|--------------------------------------------------------------------------
| Portail patient (protégé par authentification et rôle patient)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'role:patient'])->prefix('portal')->name('portal.')->group(function () {
    Route::get('/', [PatientPortalController::class, 'dashboard'])->name('dashboard');
    Route::get('/appointments', [PatientPortalController::class, 'appointments'])->name('appointments');
    Route::post('/appointments', [PatientPortalController::class, 'bookAppointment'])->name('appointments.book');
    Route::get('/medical-records', [PatientPortalController::class, 'medicalRecords'])->name('medical-records');
    Route::get('/results', [PatientPortalController::class, 'results'])->name('results');
    Route::get('/invoices', [PatientPortalController::class, 'invoices'])->name('invoices');
    Route::get('/invoices/{invoice}/pay', [PatientPortalController::class, 'payInvoice'])->name('invoices.pay');
    Route::post('/invoices/{invoice}/pay', [PatientPortalController::class, 'processPayment'])->name('invoices.pay.process');
    Route::get('/profile', [PatientPortalController::class, 'profile'])->name('profile');
    Route::put('/profile', [PatientPortalController::class, 'updateProfile'])->name('profile.update');
    Route::get('/messages', [PatientPortalController::class, 'messages'])->name('messages');
    Route::post('/messages', [PatientPortalController::class, 'sendMessage'])->name('messages.send');
});
require __DIR__.'/settings.php';
