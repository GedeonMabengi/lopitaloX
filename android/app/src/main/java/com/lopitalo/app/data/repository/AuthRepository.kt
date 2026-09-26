package com.lopitalo.app.data.repository

import com.lopitalo.app.auth.SessionManager
import com.lopitalo.app.data.remote.LopitaloApi
import com.lopitalo.app.data.remote.dto.LoginRequest
import com.lopitalo.app.data.remote.dto.RegisterRequest
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class AuthRepository @Inject constructor(
    private val api: LopitaloApi,
    private val sessionManager: SessionManager,
) {
    suspend fun login(email: String, password: String): Result<Unit> = runCatching {
        val response = api.login(LoginRequest(email, password))
        sessionManager.save(response.token, response.user)
    }

    suspend fun register(
        name: String,
        email: String,
        password: String,
        passwordConfirmation: String,
    ): Result<Unit> = runCatching {
        val response = api.register(
            RegisterRequest(
                name = name,
                email = email,
                password = password,
                passwordConfirmation = passwordConfirmation,
            ),
        )
        sessionManager.save(response.token, response.user)
    }

    suspend fun logout() {
        runCatching { api.logout() }
        sessionManager.clear()
    }
}
