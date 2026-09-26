package com.lopitalo.app.data.repository

import com.lopitalo.app.data.local.dao.MaintenanceRequestDao
import com.lopitalo.app.data.local.dao.PendingOperationDao
import com.lopitalo.app.data.local.entity.MaintenanceRequestEntity
import com.lopitalo.app.data.local.entity.PendingOperationEntity
import com.lopitalo.app.data.remote.dto.CreateMaintenanceRequestRequest
import java.util.UUID
import javax.inject.Inject
import javax.inject.Singleton
import kotlinx.coroutines.flow.Flow
import kotlinx.serialization.json.Json

/**
 * Demandes de maintenance. La création est systématiquement mise en file
 * d'attente (outbox) pour fonctionner hors ligne : l'opération est rejouée
 * côté serveur par le moteur de synchronisation, de façon idempotente via
 * `client_uuid`.
 */
@Singleton
class MaintenanceRepository @Inject constructor(
    private val maintenanceRequestDao: MaintenanceRequestDao,
    private val pendingOperationDao: PendingOperationDao,
    private val json: Json,
) {
    fun observeRequests(): Flow<List<MaintenanceRequestEntity>> = maintenanceRequestDao.observeAll()

    fun observeOpenCount(): Flow<Int> = maintenanceRequestDao.observeOpenCount()

    fun observePendingCount(): Flow<Int> = pendingOperationDao.observeCount()

    suspend fun createOffline(
        propertyUnitId: Long,
        category: String,
        description: String,
        priority: String = "medium",
        photos: List<String>? = null,
    ) {
        val clientUuid = UUID.randomUUID().toString()
        val request = CreateMaintenanceRequestRequest(
            propertyUnitId = propertyUnitId,
            category = category,
            description = description,
            photos = photos,
            priority = priority,
            clientUuid = clientUuid,
        )

        pendingOperationDao.insert(
            PendingOperationEntity(
                clientUuid = clientUuid,
                type = "maintenance_request.create",
                payload = json.encodeToString(CreateMaintenanceRequestRequest.serializer(), request),
                createdAt = System.currentTimeMillis(),
            ),
        )
    }
}
