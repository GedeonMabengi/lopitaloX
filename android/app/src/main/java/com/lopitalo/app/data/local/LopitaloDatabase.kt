package com.lopitalo.app.data.local

import androidx.room.Database
import androidx.room.RoomDatabase
import com.lopitalo.app.data.local.dao.LeaseDao
import com.lopitalo.app.data.local.dao.MaintenanceRequestDao
import com.lopitalo.app.data.local.dao.PaymentDao
import com.lopitalo.app.data.local.dao.PendingOperationDao
import com.lopitalo.app.data.local.dao.PropertyDao
import com.lopitalo.app.data.local.dao.PropertyUnitDao
import com.lopitalo.app.data.local.dao.SyncStateDao
import com.lopitalo.app.data.local.dao.TenantDao
import com.lopitalo.app.data.local.dao.WorkOrderDao
import com.lopitalo.app.data.local.entity.LeaseEntity
import com.lopitalo.app.data.local.entity.MaintenanceRequestEntity
import com.lopitalo.app.data.local.entity.PaymentEntity
import com.lopitalo.app.data.local.entity.PendingOperationEntity
import com.lopitalo.app.data.local.entity.PropertyEntity
import com.lopitalo.app.data.local.entity.PropertyUnitEntity
import com.lopitalo.app.data.local.entity.SyncStateEntity
import com.lopitalo.app.data.local.entity.TenantEntity
import com.lopitalo.app.data.local.entity.WorkOrderEntity

@Database(
    entities = [
        PropertyEntity::class,
        PropertyUnitEntity::class,
        TenantEntity::class,
        LeaseEntity::class,
        PaymentEntity::class,
        MaintenanceRequestEntity::class,
        WorkOrderEntity::class,
        PendingOperationEntity::class,
        SyncStateEntity::class,
    ],
    version = 1,
    exportSchema = false,
)
abstract class LopitaloDatabase : RoomDatabase() {
    abstract fun propertyDao(): PropertyDao
    abstract fun propertyUnitDao(): PropertyUnitDao
    abstract fun tenantDao(): TenantDao
    abstract fun leaseDao(): LeaseDao
    abstract fun paymentDao(): PaymentDao
    abstract fun maintenanceRequestDao(): MaintenanceRequestDao
    abstract fun workOrderDao(): WorkOrderDao
    abstract fun pendingOperationDao(): PendingOperationDao
    abstract fun syncStateDao(): SyncStateDao
}
