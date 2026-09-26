package com.lopitalo.app.data.local.dao

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import com.lopitalo.app.data.local.entity.LeaseEntity
import com.lopitalo.app.data.local.entity.MaintenanceRequestEntity
import com.lopitalo.app.data.local.entity.PaymentEntity
import com.lopitalo.app.data.local.entity.PendingOperationEntity
import com.lopitalo.app.data.local.entity.PropertyEntity
import com.lopitalo.app.data.local.entity.PropertyUnitEntity
import com.lopitalo.app.data.local.entity.SyncStateEntity
import com.lopitalo.app.data.local.entity.TenantEntity
import com.lopitalo.app.data.local.entity.WorkOrderEntity
import kotlinx.coroutines.flow.Flow

/*
 * NB : les colonnes Room portent le nom des propriétés Kotlin (camelCase).
 * Les requêtes SQL utilisent donc ces mêmes noms camelCase.
 */

@Dao
interface PropertyDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsertAll(items: List<PropertyEntity>)

    @Query("SELECT * FROM properties ORDER BY name")
    fun observeAll(): Flow<List<PropertyEntity>>

    @Query("DELETE FROM properties WHERE id IN (:ids)")
    suspend fun deleteByIds(ids: List<Long>)
}

@Dao
interface PropertyUnitDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsertAll(items: List<PropertyUnitEntity>)

    @Query("SELECT * FROM property_units ORDER BY unitNumber")
    fun observeAll(): Flow<List<PropertyUnitEntity>>

    @Query("SELECT * FROM property_units WHERE propertyId = :propertyId ORDER BY unitNumber")
    fun observeByProperty(propertyId: Long): Flow<List<PropertyUnitEntity>>

    @Query("DELETE FROM property_units WHERE id IN (:ids)")
    suspend fun deleteByIds(ids: List<Long>)
}

@Dao
interface TenantDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsertAll(items: List<TenantEntity>)

    @Query("SELECT * FROM tenants ORDER BY lastName")
    fun observeAll(): Flow<List<TenantEntity>>

    @Query("DELETE FROM tenants WHERE id IN (:ids)")
    suspend fun deleteByIds(ids: List<Long>)
}

@Dao
interface LeaseDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsertAll(items: List<LeaseEntity>)

    @Query("SELECT * FROM leases ORDER BY startDate DESC")
    fun observeAll(): Flow<List<LeaseEntity>>

    @Query("SELECT COUNT(*) FROM leases WHERE status = 'active'")
    fun observeActiveCount(): Flow<Int>

    @Query("DELETE FROM leases WHERE id IN (:ids)")
    suspend fun deleteByIds(ids: List<Long>)
}

@Dao
interface PaymentDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsertAll(items: List<PaymentEntity>)

    @Query("SELECT * FROM payments ORDER BY paymentDate DESC")
    fun observeAll(): Flow<List<PaymentEntity>>

    @Query("DELETE FROM payments WHERE id IN (:ids)")
    suspend fun deleteByIds(ids: List<Long>)
}

@Dao
interface MaintenanceRequestDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsertAll(items: List<MaintenanceRequestEntity>)

    @Query("SELECT * FROM maintenance_requests ORDER BY createdAt DESC")
    fun observeAll(): Flow<List<MaintenanceRequestEntity>>

    @Query("SELECT COUNT(*) FROM maintenance_requests WHERE status IN ('open', 'in_progress')")
    fun observeOpenCount(): Flow<Int>

    @Query("DELETE FROM maintenance_requests WHERE id IN (:ids)")
    suspend fun deleteByIds(ids: List<Long>)
}

@Dao
interface WorkOrderDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsertAll(items: List<WorkOrderEntity>)

    @Query("SELECT * FROM work_orders ORDER BY createdAt DESC")
    fun observeAll(): Flow<List<WorkOrderEntity>>

    @Query("DELETE FROM work_orders WHERE id IN (:ids)")
    suspend fun deleteByIds(ids: List<Long>)
}

@Dao
interface PendingOperationDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(operation: PendingOperationEntity)

    @Query("SELECT * FROM pending_operations ORDER BY createdAt ASC")
    suspend fun getAll(): List<PendingOperationEntity>

    @Query("SELECT COUNT(*) FROM pending_operations")
    fun observeCount(): Flow<Int>

    @Query("DELETE FROM pending_operations WHERE id = :id")
    suspend fun delete(id: Long)
}

@Dao
interface SyncStateDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun put(state: SyncStateEntity)

    @Query("SELECT value FROM sync_state WHERE `key` = :key LIMIT 1")
    suspend fun get(key: String): String?
}
