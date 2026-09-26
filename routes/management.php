<?php

use App\Http\Controllers\AiController;
use App\Http\Controllers\BankAccountController;
use App\Http\Controllers\ChargeController;
use App\Http\Controllers\CleaningScheduleController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\DocumentTemplateController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\LeaseController;
use App\Http\Controllers\MaintenanceRequestController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\OwnerPortalController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\PropertyUnitController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\SeasonalBookingController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\TechnicianController;
use App\Http\Controllers\TechnicianPortalController;
use App\Http\Controllers\TenantController;
use App\Http\Controllers\TenantPortalController;
use App\Http\Controllers\TenantScreeningController;
use App\Http\Controllers\WorkOrderController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    // Tableau de bord
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Biens immobiliers
    Route::resource('properties', PropertyController::class);
    Route::get('properties/{property}/photos', [PropertyController::class, 'photos'])->name('properties.photos');
    Route::post('properties/{property}/photos', [PropertyController::class, 'uploadPhoto'])->name('properties.photos.upload');
    Route::delete('properties/{property}/photos/{photoId}', [PropertyController::class, 'deletePhoto'])->name('properties.photos.delete');

    Route::resource('property-units', PropertyUnitController::class);
    Route::post('property-units/{propertyUnit}/assign-lease', [PropertyUnitController::class, 'assignLease'])->name('property-units.assign-lease');

    // Locataires
    Route::resource('tenants', TenantController::class);
    Route::get('tenants/{tenant}/documents', [TenantController::class, 'documents'])->name('tenants.documents');
    Route::post('tenants/{tenant}/documents', [TenantController::class, 'uploadDocument'])->name('tenants.documents.upload');
    Route::delete('tenants/{tenant}/documents/{documentId}', [TenantController::class, 'deleteDocument'])->name('tenants.documents.delete');

    // Baux
    Route::resource('leases', LeaseController::class);
    Route::post('leases/{lease}/generate-document', [LeaseController::class, 'generateDocument'])->name('leases.generate-document');
    Route::post('leases/{lease}/revise-rent', [LeaseController::class, 'reviseRent'])->name('leases.revise-rent');
    Route::post('leases/{lease}/renew', [LeaseController::class, 'renew'])->name('leases.renew');
    Route::post('leases/{lease}/terminate', [LeaseController::class, 'terminate'])->name('leases.terminate');
    Route::get('leases/{lease}/deposit', [LeaseController::class, 'deposit'])->name('leases.deposit');
    Route::post('leases/{lease}/deposit/return', [LeaseController::class, 'returnDeposit'])->name('leases.deposit.return');
    Route::get('leases/{lease}/move-in-out-reports', [LeaseController::class, 'moveInOutReports'])->name('leases.move-in-out-reports');
    Route::post('leases/{lease}/move-in-out-reports', [LeaseController::class, 'storeMoveInOutReport'])->name('leases.move-in-out-reports.store');

    // Charges
    Route::get('leases/{lease}/charges', [ChargeController::class, 'index'])->name('leases.charges');
    Route::post('leases/{lease}/charges', [ChargeController::class, 'store'])->name('leases.charges.store');
    Route::post('leases/{lease}/charges/regulate', [ChargeController::class, 'regulate'])->name('leases.charges.regulate');

    // Finances
    Route::resource('payments', PaymentController::class);
    Route::post('payments/{payment}/receipt', [PaymentController::class, 'generateReceipt'])->name('payments.receipt');
    Route::post('payments/{payment}/reminder', [PaymentController::class, 'sendReminder'])->name('payments.reminder');
    Route::resource('invoices', InvoiceController::class);
    Route::post('invoices/{invoice}/send', [InvoiceController::class, 'send'])->name('invoices.send');
    Route::post('invoices/{invoice}/mark-paid', [InvoiceController::class, 'markPaid'])->name('invoices.mark-paid');
    Route::resource('expenses', ExpenseController::class);
    Route::resource('suppliers', SupplierController::class);

    Route::get('bank-accounts', [BankAccountController::class, 'index'])->name('bank-accounts.index');
    Route::post('bank-accounts/{account}/sync', [BankAccountController::class, 'sync'])->name('bank-accounts.sync');
    Route::get('bank-accounts/{account}/transactions', [BankAccountController::class, 'transactions'])->name('bank-accounts.transactions');
    Route::post('bank-accounts/{account}/transactions/{transactionId}/reconcile', [BankAccountController::class, 'reconcile'])->name('bank-accounts.transactions.reconcile');

    // Maintenance
    Route::resource('maintenance-requests', MaintenanceRequestController::class);
    Route::post('maintenance-requests/{maintenanceRequest}/assign', [MaintenanceRequestController::class, 'assign'])->name('maintenance-requests.assign');
    Route::post('maintenance-requests/{maintenanceRequest}/update-status', [MaintenanceRequestController::class, 'updateStatus'])->name('maintenance-requests.update-status');
    Route::resource('work-orders', WorkOrderController::class);
    Route::post('work-orders/{workOrder}/quotes', [WorkOrderController::class, 'addQuote'])->name('work-orders.quotes.store');
    Route::post('work-orders/{workOrder}/quotes/{quoteId}/accept', [WorkOrderController::class, 'acceptQuote'])->name('work-orders.quotes.accept');
    Route::post('work-orders/{workOrder}/invoices', [WorkOrderController::class, 'addInvoice'])->name('work-orders.invoices.store');
    Route::post('work-orders/{workOrder}/complete', [WorkOrderController::class, 'complete'])->name('work-orders.complete');

    // Techniciens
    Route::get('technicians', [TechnicianController::class, 'index'])->name('technicians.index');
    Route::get('technicians/{user}/assignments', [TechnicianController::class, 'assignments'])->name('technicians.assignments');

    // Documents
    Route::get('documents', [DocumentController::class, 'index'])->name('documents.index');
    Route::get('documents/{type}/{id}/download', [DocumentController::class, 'download'])->name('documents.download');
    Route::delete('documents/{type}/{id}', [DocumentController::class, 'destroy'])->name('documents.destroy');

    // Communication
    Route::resource('message-threads', MessageController::class)
        ->only(['index', 'show', 'store', 'destroy'])
        ->parameters(['message-threads' => 'thread']);
    Route::post('message-threads/{thread}/messages', [MessageController::class, 'storeMessage'])->name('message-threads.messages.store');

    Route::get('notifications', [NotificationController::class, 'index'])->name('notifications.index');
    Route::post('notifications/{notificationId}/mark-read', [NotificationController::class, 'markRead'])->name('notifications.mark-read');
    Route::post('notifications/mark-all-read', [NotificationController::class, 'markAllRead'])->name('notifications.mark-all-read');

    // Rapports
    Route::get('reports/occupancy', [ReportController::class, 'occupancy'])->name('reports.occupancy');
    Route::get('reports/rentability', [ReportController::class, 'rentability'])->name('reports.rentability');
    Route::get('reports/financial', [ReportController::class, 'financial'])->name('reports.financial');
    Route::get('reports/fiscal', [ReportController::class, 'fiscal'])->name('reports.fiscal');

    // Locations saisonnières
    Route::resource('seasonal-bookings', SeasonalBookingController::class);
    Route::post('seasonal-bookings/{seasonalBooking}/confirm', [SeasonalBookingController::class, 'confirm'])->name('seasonal-bookings.confirm');
    Route::post('seasonal-bookings/{seasonalBooking}/cancel', [SeasonalBookingController::class, 'cancel'])->name('seasonal-bookings.cancel');
    Route::get('cleaning-schedules', [CleaningScheduleController::class, 'index'])->name('cleaning-schedules.index');
    Route::post('cleaning-schedules', [CleaningScheduleController::class, 'store'])->name('cleaning-schedules.store');
    Route::post('cleaning-schedules/{cleaningSchedule}/complete', [CleaningScheduleController::class, 'complete'])->name('cleaning-schedules.complete');

    // Screening des locataires
    Route::post('tenants/{tenant}/screenings', [TenantScreeningController::class, 'store'])->name('tenants.screenings.store');
    Route::get('tenants/{tenant}/screenings/{screening}', [TenantScreeningController::class, 'show'])->name('tenants.screenings.show');
    Route::post('screenings/{screening}/generate-report', [TenantScreeningController::class, 'generateReport'])->name('screenings.generate-report');

    // Paramètres et modèles de documents
    Route::get('app-settings', [SettingController::class, 'index'])->name('settings.index');
    Route::post('app-settings', [SettingController::class, 'update'])->name('settings.update');
    Route::resource('document-templates', DocumentTemplateController::class);

    // Intelligence Artificielle
    Route::post('ai/classify-maintenance-request', [AiController::class, 'classifyMaintenanceRequest'])->name('ai.classify-maintenance-request');
});

// Portail locataire
Route::middleware(['auth', 'role:tenant'])->prefix('tenant')->name('tenant.')->group(function () {
    Route::get('dashboard', [TenantPortalController::class, 'dashboard'])->name('dashboard');
    Route::get('leases', [TenantPortalController::class, 'leases'])->name('leases');
    Route::get('payments', [TenantPortalController::class, 'payments'])->name('payments');
    Route::post('payments/initiate', [TenantPortalController::class, 'initiatePayment'])->name('payments.initiate');
    Route::get('documents', [TenantPortalController::class, 'documents'])->name('documents');
    Route::post('maintenance-requests', [TenantPortalController::class, 'storeMaintenanceRequest'])->name('maintenance-requests.store');
    Route::get('maintenance-requests', [TenantPortalController::class, 'maintenanceRequests'])->name('maintenance-requests');
    Route::get('messages', [TenantPortalController::class, 'messages'])->name('messages');
    Route::post('messages', [TenantPortalController::class, 'storeMessage'])->name('messages.store');
});

// Portail propriétaire
Route::middleware(['auth', 'role:owner'])->prefix('owner')->name('owner.')->group(function () {
    Route::get('dashboard', [OwnerPortalController::class, 'dashboard'])->name('dashboard');
    Route::get('properties', [OwnerPortalController::class, 'properties'])->name('properties');
    Route::get('properties/{property}/financials', [OwnerPortalController::class, 'propertyFinancials'])->name('properties.financials');
    Route::get('documents', [OwnerPortalController::class, 'documents'])->name('documents');
    Route::get('messages', [OwnerPortalController::class, 'messages'])->name('messages');
    Route::post('messages', [OwnerPortalController::class, 'storeMessage'])->name('messages.store');
});

// Portail technicien
Route::middleware(['auth', 'role:technician'])->prefix('technician')->name('technician.')->group(function () {
    Route::get('assignments', [TechnicianPortalController::class, 'assignments'])->name('assignments');
    Route::post('assignments/{assignment}/accept', [TechnicianPortalController::class, 'accept'])->name('assignments.accept');
    Route::post('assignments/{assignment}/update-status', [TechnicianPortalController::class, 'updateStatus'])->name('assignments.update-status');
});
