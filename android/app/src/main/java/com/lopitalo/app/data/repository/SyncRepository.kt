package com.lopitalo.app.data.repository

import com.lopitalo.app.data.local.dao.LeaseDao
import com.lopitalo.app.data.local.dao.MaintenanceRequestDao
import com.lopitalo.app.data.local.dao.PaymentDao
import com.lopitalo.app.data.local.dao.PendingOperationDao
import com.lopitalo.app.data.local.dao.PropertyDao
import com.lopitalo.app.data.local.dao.PropertyUnitDao
import com.lopitalo.app.data.local.dao.SyncStateDao
import com.lopitalo.app.data.local.dao.TenantDao
import com.lopitalo.app.data.local.dao.WorkOrderDao
import com.lopitalo.app.data.local.entity.SyncStateEntity
import com.lopitalo.app.data.remote.LopitaloApi
import com.lopitalo.app.data.remote.dto.OutboxOperation
import com.lopitalo.app.data.remote.dto.OutboxRequest
import com.lopitalo.app.data.remote.dto.SyncBundleDto
import com.lopitalo.app.data.remote.dto.toEntity
import javax.inject.Inject
import javax.inject.Singleton
import kotlinx.serialization.json.Json

/**
 * Cœur de la stratégie offline-first.
 *
 *  - `pull()`  : récupère le bundle delta depuis le serveur (GET /sync?since=)
 *                et met à jour la base locale + les tombstones.
 *  - `push()`  : rejoue les opérations en attente (outbox) via POST /sync/outbox.
 */
@Singleton
class SyncRepository @Inject constructor(
    private val api: LopitaloApi,
    private val propertyDao: PropertyDao,
    private val propertyUnitDao: PropertyUnitDao,
    private val tenantDao: TenantDao,
    private val leaseDao: LeaseDao,
    private val paymentDao: PaymentDao,
    private val maintenanceRequestDao: MaintenanceRequestDao,
    private val workOrderDao: WorkOrderDao,
    private val syncStateDao: SyncStateDao,
    private val pendingOperationDao: PendingOperationDao,
    private val json: Json,
) {
    suspend fun pull() {
        val since = syncStateDao.get(KEY_LAST_SYNC)
        val bundle = api.sync(since)
        applyBundle(bundle)
        syncStateDao.put(SyncStateEntity(KEY_LAST_SYNC, bundle.serverTime))
    }

    suspend fun pushOutbox() {
        val pending = pendingOperationDao.getAll()
        if (pending.isEmpty()) return

        val operations = pending.map { op ->
            OutboxOperation(
                type = op.type,
                clientUuid = op.clientUuid,
                payload = json.parseToJsonElement(op.payload),
            )
        }

        val response = api.pushOutbox(OutboxRequest(operations))

        val successful = response.results.filter { it.ok }.map { it.clientUuid }.toSet()
        pending.filter { it.clientUuid in successful }
            .forEach { pendingOperationDao.delete(it.id) }
    }

    private suspend fun applyBundle(bundle: SyncBundleDto) {
        val data = bundle.data

        propertyDao.upsertAll(data.properties.map { it.toEntity() })
        propertyUnitDao.upsertAll(data.propertyUnits.map { it.toEntity() })
        tenantDao.upsertAll(data.tenants.map { it.toEntity() })
        leaseDao.upsertAll(data.leases.map { it.toEntity() })
        paymentDao.upsertAll(data.payments.map { it.toEntity() })
        maintenanceRequestDao.upsertAll(data.maintenanceRequests.map { it.toEntity() })
        workOrderDao.upsertAll(data.workOrders.map { it.toEntity() })

        val deleted = bundle.deleted
        propertyDao.deleteByIds(deleted.properties)
        propertyUnitDao.deleteByIds(deleted.propertyUnits)
        tenantDao.deleteByIds(deleted.tenants)
        leaseDao.deleteByIds(deleted.leases)
        paymentDao.deleteByIds(deleted.payments)
        maintenanceRequestDao.deleteByIds(deleted.maintenanceRequests)
        workOrderDao.deleteByIds(deleted.workOrders)
    }

    companion object {
        const val KEY_LAST_SYNC = "last_sync_server_time"
    }
}
