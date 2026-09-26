package com.lopitalo.app.data.remote

import com.lopitalo.app.data.remote.dto.CreateMaintenanceRequestRequest
import com.lopitalo.app.data.remote.dto.LoginRequest
import com.lopitalo.app.data.remote.dto.LoginResponse
import com.lopitalo.app.data.remote.dto.MaintenanceRequestDto
import com.lopitalo.app.data.remote.dto.MessageDto
import com.lopitalo.app.data.remote.dto.OutboxRequest
import com.lopitalo.app.data.remote.dto.OutboxResponse
import com.lopitalo.app.data.remote.dto.RegisterRequest
import com.lopitalo.app.data.remote.dto.StatusRequest
import com.lopitalo.app.data.remote.dto.SyncBundleDto
import com.lopitalo.app.data.remote.dto.UserDto
import com.lopitalo.app.data.remote.dto.WorkOrderDto
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Path
import retrofit2.http.Query

interface LopitaloApi {

    @POST("login")
    suspend fun login(@Body body: LoginRequest): LoginResponse

    @POST("register")
    suspend fun register(@Body body: RegisterRequest): LoginResponse

    @GET("me")
    suspend fun me(): UserDto

    @POST("logout")
    suspend fun logout(): MessageDto

    @GET("sync")
    suspend fun sync(@Query("since") since: String? = null): SyncBundleDto

    @POST("sync/outbox")
    suspend fun pushOutbox(@Body body: OutboxRequest): OutboxResponse

    @POST("maintenance-requests")
    suspend fun createMaintenanceRequest(@Body body: CreateMaintenanceRequestRequest): MaintenanceRequestDto

    @POST("maintenance-requests/{id}/status")
    suspend fun updateMaintenanceRequestStatus(
        @Path("id") id: Long,
        @Body body: StatusRequest,
    ): MaintenanceRequestDto

    @POST("work-orders/{id}/status")
    suspend fun updateWorkOrderStatus(
        @Path("id") id: Long,
        @Body body: StatusRequest,
    ): WorkOrderDto
}
