import AuthController from './AuthController'
import SyncController from './SyncController'
import ReportController from './ReportController'
import PropertyController from './PropertyController'
import PropertyUnitController from './PropertyUnitController'
import TenantController from './TenantController'
import LeaseController from './LeaseController'
import PaymentController from './PaymentController'
import InvoiceController from './InvoiceController'
import ExpenseController from './ExpenseController'
import MaintenanceRequestController from './MaintenanceRequestController'
import WorkOrderController from './WorkOrderController'
import MessageController from './MessageController'
import NotificationController from './NotificationController'

const Api = {
    AuthController: Object.assign(AuthController, AuthController),
    SyncController: Object.assign(SyncController, SyncController),
    ReportController: Object.assign(ReportController, ReportController),
    PropertyController: Object.assign(PropertyController, PropertyController),
    PropertyUnitController: Object.assign(PropertyUnitController, PropertyUnitController),
    TenantController: Object.assign(TenantController, TenantController),
    LeaseController: Object.assign(LeaseController, LeaseController),
    PaymentController: Object.assign(PaymentController, PaymentController),
    InvoiceController: Object.assign(InvoiceController, InvoiceController),
    ExpenseController: Object.assign(ExpenseController, ExpenseController),
    MaintenanceRequestController: Object.assign(MaintenanceRequestController, MaintenanceRequestController),
    WorkOrderController: Object.assign(WorkOrderController, WorkOrderController),
    MessageController: Object.assign(MessageController, MessageController),
    NotificationController: Object.assign(NotificationController, NotificationController),
}

export default Api