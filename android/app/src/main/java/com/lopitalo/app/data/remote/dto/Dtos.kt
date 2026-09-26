package com.lopitalo.app.data.remote.dto

import com.lopitalo.app.data.local.entity.LeaseEntity
import com.lopitalo.app.data.local.entity.MaintenanceRequestEntity
import com.lopitalo.app.data.local.entity.PaymentEntity
import com.lopitalo.app.data.local.entity.PropertyEntity
import com.lopitalo.app.data.local.entity.PropertyUnitEntity
import com.lopitalo.app.data.local.entity.TenantEntity
import com.lopitalo.app.data.local.entity.WorkOrderEntity
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement

/*
 * DTOs du wire-format (JSON de l'API Laravel, snake_case).
 *
 * Les montants décimaux (cast `decimal:2` côté Laravel) arrivent sous forme de
 * chaînes ("800.00") : ils sont déclarés en String puis convertis en Double
 * dans les mappers.
 */

@Serializable
data class LoginRequest(val email: String, val password: String)

@Serializable
data class RegisterRequest(
    val name: String,
    val email: String,
    val password: String,
    @SerialName("password_confirmation") val passwordConfirmation: String,
    val phone: String? = null,
)

@Serializable
data class LoginResponse(val token: String, val user: UserDto)

@Serializable
data class MessageDto(val message: String)

@Serializable
data class UserDto(
    val id: Long,
    val name: String,
    val email: String,
    val phone: String? = null,
    val avatar: String? = null,
    val status: String? = null,
    val roles: List<String> = emptyList(),
)

@Serializable
data class PropertyDto(
    val id: Long,
    val name: String,
    val type: String,
    @SerialName("owner_user_id") val ownerUserId: Long,
    val address: String,
    val city: String,
    @SerialName("postal_code") val postalCode: String,
    val country: String,
    val description: String? = null,
    val surface: String? = null,
    @SerialName("construction_year") val constructionYear: Int? = null,
    @SerialName("acquisition_date") val acquisitionDate: String? = null,
    @SerialName("acquisition_price") val acquisitionPrice: String? = null,
    val status: String,
    @SerialName("created_at") val createdAt: String? = null,
    @SerialName("updated_at") val updatedAt: String? = null,
)

@Serializable
data class PropertyUnitDto(
    val id: Long,
    @SerialName("property_id") val propertyId: Long,
    @SerialName("unit_number") val unitNumber: String,
    val floor: Int? = null,
    val surface: String? = null,
    val bedrooms: Int? = null,
    val bathrooms: Int? = null,
    @SerialName("monthly_rent_base") val monthlyRentBase: String? = null,
    @SerialName("monthly_charges_base") val monthlyChargesBase: String? = null,
    @SerialName("current_lease_id") val currentLeaseId: Long? = null,
    val status: String,
    @SerialName("created_at") val createdAt: String? = null,
    @SerialName("updated_at") val updatedAt: String? = null,
)

@Serializable
data class TenantDto(
    val id: Long,
    @SerialName("user_id") val userId: Long? = null,
    @SerialName("first_name") val firstName: String,
    @SerialName("last_name") val lastName: String,
    val email: String,
    val phone: String? = null,
    @SerialName("created_at") val createdAt: String? = null,
    @SerialName("updated_at") val updatedAt: String? = null,
)

@Serializable
data class LeaseDto(
    val id: Long,
    @SerialName("tenant_id") val tenantId: Long,
    @SerialName("property_unit_id") val propertyUnitId: Long,
    @SerialName("start_date") val startDate: String,
    @SerialName("end_date") val endDate: String? = null,
    @SerialName("lease_type") val leaseType: String? = null,
    @SerialName("rent_amount") val rentAmount: String? = null,
    @SerialName("charges_amount") val chargesAmount: String? = null,
    @SerialName("deposit_amount") val depositAmount: String? = null,
    val status: String,
    @SerialName("created_at") val createdAt: String? = null,
    @SerialName("updated_at") val updatedAt: String? = null,
)

@Serializable
data class PaymentDto(
    val id: Long,
    @SerialName("lease_id") val leaseId: Long,
    val amount: String? = null,
    @SerialName("payment_date") val paymentDate: String,
    val method: String,
    val status: String,
    @SerialName("created_at") val createdAt: String? = null,
    @SerialName("updated_at") val updatedAt: String? = null,
)

@Serializable
data class MaintenanceRequestDto(
    val id: Long,
    @SerialName("client_uuid") val clientUuid: String? = null,
    @SerialName("tenant_id") val tenantId: Long,
    @SerialName("property_unit_id") val propertyUnitId: Long,
    val category: String,
    val description: String,
    val photos: List<String>? = null,
    val priority: String,
    val status: String,
    @SerialName("created_at") val createdAt: String? = null,
    @SerialName("updated_at") val updatedAt: String? = null,
)

@Serializable
data class WorkOrderDto(
    val id: Long,
    @SerialName("property_id") val propertyId: Long,
    @SerialName("property_unit_id") val propertyUnitId: Long? = null,
    val title: String,
    val description: String? = null,
    val status: String,
    @SerialName("start_date") val startDate: String? = null,
    @SerialName("end_date") val endDate: String? = null,
    val budget: String? = null,
    @SerialName("actual_cost") val actualCost: String? = null,
    @SerialName("created_at") val createdAt: String? = null,
    @SerialName("updated_at") val updatedAt: String? = null,
)

// --- Requêtes de création / mise à jour ---

@Serializable
data class CreateMaintenanceRequestRequest(
    @SerialName("property_unit_id") val propertyUnitId: Long,
    val category: String,
    val description: String,
    val photos: List<String>? = null,
    val priority: String? = null,
    @SerialName("client_uuid") val clientUuid: String? = null,
)

@Serializable
data class StatusRequest(val status: String)

// --- Synchronisation ---

@Serializable
data class SyncDataDto(
    val properties: List<PropertyDto> = emptyList(),
    @SerialName("property_units") val propertyUnits: List<PropertyUnitDto> = emptyList(),
    val tenants: List<TenantDto> = emptyList(),
    val leases: List<LeaseDto> = emptyList(),
    val payments: List<PaymentDto> = emptyList(),
    @SerialName("maintenance_requests") val maintenanceRequests: List<MaintenanceRequestDto> = emptyList(),
    @SerialName("work_orders") val workOrders: List<WorkOrderDto> = emptyList(),
)

@Serializable
data class SyncDeletedDto(
    val properties: List<Long> = emptyList(),
    @SerialName("property_units") val propertyUnits: List<Long> = emptyList(),
    val tenants: List<Long> = emptyList(),
    val leases: List<Long> = emptyList(),
    val payments: List<Long> = emptyList(),
    @SerialName("maintenance_requests") val maintenanceRequests: List<Long> = emptyList(),
    @SerialName("work_orders") val workOrders: List<Long> = emptyList(),
)

@Serializable
data class SyncBundleDto(
    @SerialName("server_time") val serverTime: String,
    val since: String? = null,
    val data: SyncDataDto,
    val deleted: SyncDeletedDto,
)

@Serializable
data class OutboxOperation(
    val type: String,
    @SerialName("client_uuid") val clientUuid: String,
    val payload: JsonElement,
)

@Serializable
data class OutboxRequest(val operations: List<OutboxOperation>)

@Serializable
data class OutboxResult(
    @SerialName("client_uuid") val clientUuid: String,
    val ok: Boolean,
    val error: String? = null,
)

@Serializable
data class OutboxResponse(val results: List<OutboxResult>)

// --- Mappers DTO -> Entité Room ---

private fun String?.toDoubleOrNullSafe(): Double? = this?.toDoubleOrNull()

fun PropertyDto.toEntity() = PropertyEntity(
    id = id,
    ownerUserId = ownerUserId,
    name = name,
    type = type,
    address = address,
    city = city,
    postalCode = postalCode,
    country = country,
    description = description,
    surface = surface.toDoubleOrNullSafe(),
    status = status,
    createdAt = createdAt,
    updatedAt = updatedAt,
)

fun PropertyUnitDto.toEntity() = PropertyUnitEntity(
    id = id,
    propertyId = propertyId,
    unitNumber = unitNumber,
    floor = floor,
    surface = surface.toDoubleOrNullSafe(),
    bedrooms = bedrooms,
    bathrooms = bathrooms,
    monthlyRentBase = monthlyRentBase.toDoubleOrNullSafe(),
    status = status,
    createdAt = createdAt,
    updatedAt = updatedAt,
)

fun TenantDto.toEntity() = TenantEntity(
    id = id,
    userId = userId,
    firstName = firstName,
    lastName = lastName,
    email = email,
    phone = phone,
    createdAt = createdAt,
    updatedAt = updatedAt,
)

fun LeaseDto.toEntity() = LeaseEntity(
    id = id,
    tenantId = tenantId,
    propertyUnitId = propertyUnitId,
    startDate = startDate,
    endDate = endDate,
    leaseType = leaseType ?: "",
    rentAmount = rentAmount.toDoubleOrNullSafe() ?: 0.0,
    chargesAmount = chargesAmount.toDoubleOrNullSafe() ?: 0.0,
    depositAmount = depositAmount.toDoubleOrNullSafe(),
    status = status,
    createdAt = createdAt,
    updatedAt = updatedAt,
)

fun PaymentDto.toEntity() = PaymentEntity(
    id = id,
    leaseId = leaseId,
    amount = amount.toDoubleOrNullSafe() ?: 0.0,
    paymentDate = paymentDate,
    method = method,
    status = status,
    createdAt = createdAt,
    updatedAt = updatedAt,
)

fun MaintenanceRequestDto.toEntity() = MaintenanceRequestEntity(
    id = id,
    clientUuid = clientUuid,
    tenantId = tenantId,
    propertyUnitId = propertyUnitId,
    category = category,
    description = description,
    photos = photos?.joinToString(","),
    priority = priority,
    status = status,
    createdAt = createdAt,
    updatedAt = updatedAt,
)

fun WorkOrderDto.toEntity() = WorkOrderEntity(
    id = id,
    propertyId = propertyId,
    propertyUnitId = propertyUnitId,
    title = title,
    description = description,
    status = status,
    startDate = startDate,
    endDate = endDate,
    budget = budget.toDoubleOrNullSafe(),
    actualCost = actualCost.toDoubleOrNullSafe(),
    createdAt = createdAt,
    updatedAt = updatedAt,
)
