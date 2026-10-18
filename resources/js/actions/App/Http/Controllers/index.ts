import Api from './Api'
import DashboardController from './DashboardController'
import PatientController from './PatientController'
import MedicalRecordController from './MedicalRecordController'
import AllergyController from './AllergyController'
import VitalSignController from './VitalSignController'
import AppointmentController from './AppointmentController'
import AdmissionController from './AdmissionController'
import BedController from './BedController'
import RoomController from './RoomController'
import DepartmentController from './DepartmentController'
import StaffController from './StaffController'
import PrescriptionController from './PrescriptionController'
import PrescriptionItemController from './PrescriptionItemController'
import DispensingRecordController from './DispensingRecordController'
import MedicationController from './MedicationController'
import StockTransactionController from './StockTransactionController'
import SupplierController from './SupplierController'
import PurchaseOrderController from './PurchaseOrderController'
import LabOrderController from './LabOrderController'
import LabResultController from './LabResultController'
import ImagingOrderController from './ImagingOrderController'
import ImagingReportController from './ImagingReportController'
import InvoiceController from './InvoiceController'
import PaymentController from './PaymentController'
import SurgeryController from './SurgeryController'
import OperatingRoomController from './OperatingRoomController'
import EmergencyVisitController from './EmergencyVisitController'
import ReportController from './ReportController'
import UserController from './UserController'
import RoleController from './RoleController'
import PatientPortalController from './PatientPortalController'
import Settings from './Settings'
const Controllers = {
    Api: Object.assign(Api, Api),
DashboardController: Object.assign(DashboardController, DashboardController),
PatientController: Object.assign(PatientController, PatientController),
MedicalRecordController: Object.assign(MedicalRecordController, MedicalRecordController),
AllergyController: Object.assign(AllergyController, AllergyController),
VitalSignController: Object.assign(VitalSignController, VitalSignController),
AppointmentController: Object.assign(AppointmentController, AppointmentController),
AdmissionController: Object.assign(AdmissionController, AdmissionController),
BedController: Object.assign(BedController, BedController),
RoomController: Object.assign(RoomController, RoomController),
DepartmentController: Object.assign(DepartmentController, DepartmentController),
StaffController: Object.assign(StaffController, StaffController),
PrescriptionController: Object.assign(PrescriptionController, PrescriptionController),
PrescriptionItemController: Object.assign(PrescriptionItemController, PrescriptionItemController),
DispensingRecordController: Object.assign(DispensingRecordController, DispensingRecordController),
MedicationController: Object.assign(MedicationController, MedicationController),
StockTransactionController: Object.assign(StockTransactionController, StockTransactionController),
SupplierController: Object.assign(SupplierController, SupplierController),
PurchaseOrderController: Object.assign(PurchaseOrderController, PurchaseOrderController),
LabOrderController: Object.assign(LabOrderController, LabOrderController),
LabResultController: Object.assign(LabResultController, LabResultController),
ImagingOrderController: Object.assign(ImagingOrderController, ImagingOrderController),
ImagingReportController: Object.assign(ImagingReportController, ImagingReportController),
InvoiceController: Object.assign(InvoiceController, InvoiceController),
PaymentController: Object.assign(PaymentController, PaymentController),
SurgeryController: Object.assign(SurgeryController, SurgeryController),
OperatingRoomController: Object.assign(OperatingRoomController, OperatingRoomController),
EmergencyVisitController: Object.assign(EmergencyVisitController, EmergencyVisitController),
ReportController: Object.assign(ReportController, ReportController),
UserController: Object.assign(UserController, UserController),
RoleController: Object.assign(RoleController, RoleController),
PatientPortalController: Object.assign(PatientPortalController, PatientPortalController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers