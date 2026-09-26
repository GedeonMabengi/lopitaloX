<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ExpenseController;
use App\Http\Controllers\Api\InvoiceController;
use App\Http\Controllers\Api\LeaseController;
use App\Http\Controllers\Api\MaintenanceRequestController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\PropertyController;
use App\Http\Controllers\Api\PropertyUnitController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\SyncController;
use App\Http\Controllers\Api\TenantController;
use App\Http\Controllers\Api\WorkOrderController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API v1 — consommation par l'application mobile (Kotlin)
|--------------------------------------------------------------------------
| Authentification par token Sanctum. Toutes les routes authentifiées
| renvoient du JSON destiné à être mis en cache localement (offline-first).
*/

Route::prefix('v1')->group(function () {
    // --- Auth (public) ---
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);

    // --- Authentifié ---
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('me', [AuthController::class, 'me']);
        Route::post('logout', [AuthController::class, 'logout']);

        // --- Synchronisation offline-first ---
        Route::get('sync', [SyncController::class, 'index']);
        Route::post('sync/outbox', [SyncController::class, 'outbox']);

        // --- Tableau de bord & rapports ---
        Route::get('dashboard', [ReportController::class, 'dashboard']);
        Route::get('reports/occupancy', [ReportController::class, 'occupancy']);
        Route::get('reports/rentability', [ReportController::class, 'rentability']);
        Route::get('reports/financial', [ReportController::class, 'financial']);

        // --- Biens & unités ---
        Route::get('properties', [PropertyController::class, 'index']);
        Route::get('properties/{property}', [PropertyController::class, 'show']);
        Route::get('property-units', [PropertyUnitController::class, 'index']);
        Route::get('property-units/{propertyUnit}', [PropertyUnitController::class, 'show']);

        // --- Locataires ---
        Route::get('tenants', [TenantController::class, 'index']);
        Route::get('tenants/{tenant}', [TenantController::class, 'show']);

        // --- Baux ---
        Route::get('leases', [LeaseController::class, 'index']);
        Route::get('leases/{lease}', [LeaseController::class, 'show']);

        // --- Finances ---
        Route::get('payments', [PaymentController::class, 'index']);
        Route::get('payments/{payment}', [PaymentController::class, 'show']);
        Route::get('invoices', [InvoiceController::class, 'index']);
        Route::get('invoices/{invoice}', [InvoiceController::class, 'show']);
        Route::get('expenses', [ExpenseController::class, 'index']);
        Route::post('expenses', [ExpenseController::class, 'store']);
        Route::get('expenses/{expense}', [ExpenseController::class, 'show']);

        // --- Maintenance ---
        Route::get('maintenance-requests', [MaintenanceRequestController::class, 'index']);
        Route::post('maintenance-requests', [MaintenanceRequestController::class, 'store']);
        Route::get('maintenance-requests/{maintenanceRequest}', [MaintenanceRequestController::class, 'show']);
        Route::post('maintenance-requests/{maintenanceRequest}/status', [MaintenanceRequestController::class, 'updateStatus']);

        Route::get('work-orders', [WorkOrderController::class, 'index']);
        Route::get('work-orders/{workOrder}', [WorkOrderController::class, 'show']);
        Route::post('work-orders/{workOrder}/status', [WorkOrderController::class, 'updateStatus']);

        // --- Messagerie ---
        Route::get('threads', [MessageController::class, 'index']);
        Route::get('threads/{thread}', [MessageController::class, 'show']);
        Route::post('threads/{thread}/messages', [MessageController::class, 'storeMessage']);

        // --- Notifications ---
        Route::get('notifications', [NotificationController::class, 'index']);
        Route::post('notifications/{notificationId}/read', [NotificationController::class, 'markRead']);
        Route::post('notifications/read-all', [NotificationController::class, 'markAllRead']);
    });
});
