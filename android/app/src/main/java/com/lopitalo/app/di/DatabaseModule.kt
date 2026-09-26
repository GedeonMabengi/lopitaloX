package com.lopitalo.app.di

import android.content.Context
import androidx.room.Room
import com.lopitalo.app.data.local.LopitaloDatabase
import com.lopitalo.app.data.local.dao.LeaseDao
import com.lopitalo.app.data.local.dao.MaintenanceRequestDao
import com.lopitalo.app.data.local.dao.PaymentDao
import com.lopitalo.app.data.local.dao.PendingOperationDao
import com.lopitalo.app.data.local.dao.PropertyDao
import com.lopitalo.app.data.local.dao.PropertyUnitDao
import com.lopitalo.app.data.local.dao.SyncStateDao
import com.lopitalo.app.data.local.dao.TenantDao
import com.lopitalo.app.data.local.dao.WorkOrderDao
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object DatabaseModule {

    @Provides
    @Singleton
    fun provideDatabase(@ApplicationContext context: Context): LopitaloDatabase =
        Room.databaseBuilder(context, LopitaloDatabase::class.java, "lopitalo.db")
            .fallbackToDestructiveMigration()
            .build()

    @Provides fun providePropertyDao(db: LopitaloDatabase): PropertyDao = db.propertyDao()
    @Provides fun providePropertyUnitDao(db: LopitaloDatabase): PropertyUnitDao = db.propertyUnitDao()
    @Provides fun provideTenantDao(db: LopitaloDatabase): TenantDao = db.tenantDao()
    @Provides fun provideLeaseDao(db: LopitaloDatabase): LeaseDao = db.leaseDao()
    @Provides fun providePaymentDao(db: LopitaloDatabase): PaymentDao = db.paymentDao()
    @Provides fun provideMaintenanceRequestDao(db: LopitaloDatabase): MaintenanceRequestDao = db.maintenanceRequestDao()
    @Provides fun provideWorkOrderDao(db: LopitaloDatabase): WorkOrderDao = db.workOrderDao()
    @Provides fun providePendingOperationDao(db: LopitaloDatabase): PendingOperationDao = db.pendingOperationDao()
    @Provides fun provideSyncStateDao(db: LopitaloDatabase): SyncStateDao = db.syncStateDao()
}
