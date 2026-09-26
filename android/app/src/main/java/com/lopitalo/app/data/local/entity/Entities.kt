package com.lopitalo.app.data.local.entity

import androidx.room.Entity
import androidx.room.PrimaryKey

/**
 * Miroirs locaux des entités du serveur Laravel.
 *
 * Les horodatages sont stockés en ISO-8601 (String) pour un aller-retour
 * trivial avec l'API et une comparaison lexicographique fiable pour le curseur
 * de synchronisation delta.
 */

@Entity(tableName = "properties")
data class PropertyEntity(
    @PrimaryKey val id: Long,
    val ownerUserId: Long,
    val name: String,
    val type: String,
    val address: String,
    val city: String,
    val postalCode: String,
    val country: String,
    val description: String? = null,
    val surface: Double? = null,
    val status: String,
    val createdAt: String? = null,
    val updatedAt: String? = null,
)

@Entity(tableName = "property_units")
data class PropertyUnitEntity(
    @PrimaryKey val id: Long,
    val propertyId: Long,
    val unitNumber: String,
    val floor: Int? = null,
    val surface: Double? = null,
    val bedrooms: Int? = null,
    val bathrooms: Int? = null,
    val monthlyRentBase: Double? = null,
    val status: String,
    val createdAt: String? = null,
    val updatedAt: String? = null,
)

@Entity(tableName = "tenants")
data class TenantEntity(
    @PrimaryKey val id: Long,
    val userId: Long? = null,
    val firstName: String,
    val lastName: String,
    val email: String,
    val phone: String? = null,
    val createdAt: String? = null,
    val updatedAt: String? = null,
)

@Entity(tableName = "leases")
data class LeaseEntity(
    @PrimaryKey val id: Long,
    val tenantId: Long,
    val propertyUnitId: Long,
    val startDate: String,
    val endDate: String? = null,
    val leaseType: String,
    val rentAmount: Double,
    val chargesAmount: Double,
    val depositAmount: Double? = null,
    val status: String,
    val createdAt: String? = null,
    val updatedAt: String? = null,
)

@Entity(tableName = "payments")
data class PaymentEntity(
    @PrimaryKey val id: Long,
    val leaseId: Long,
    val amount: Double,
    val paymentDate: String,
    val method: String,
    val status: String,
    val createdAt: String? = null,
    val updatedAt: String? = null,
)

@Entity(tableName = "maintenance_requests")
data class MaintenanceRequestEntity(
    @PrimaryKey val id: Long,
    val clientUuid: String? = null,
    val tenantId: Long,
    val propertyUnitId: Long,
    val category: String,
    val description: String,
    val photos: String? = null,
    val priority: String,
    val status: String,
    val createdAt: String? = null,
    val updatedAt: String? = null,
)

@Entity(tableName = "work_orders")
data class WorkOrderEntity(
    @PrimaryKey val id: Long,
    val propertyId: Long,
    val propertyUnitId: Long? = null,
    val title: String,
    val description: String? = null,
    val status: String,
    val startDate: String? = null,
    val endDate: String? = null,
    val budget: Double? = null,
    val actualCost: Double? = null,
    val createdAt: String? = null,
    val updatedAt: String? = null,
)

/** Opération créée hors ligne, à rejouer côté serveur une fois connecté. */
@Entity(tableName = "pending_operations")
data class PendingOperationEntity(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val clientUuid: String,
    val type: String,
    val payload: String,
    val createdAt: Long,
)

/** État de synchronisation (curseur delta, etc.). */
@Entity(tableName = "sync_state")
data class SyncStateEntity(
    @PrimaryKey val key: String,
    val value: String,
)
