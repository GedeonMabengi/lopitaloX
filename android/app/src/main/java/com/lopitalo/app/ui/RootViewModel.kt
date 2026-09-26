package com.lopitalo.app.ui

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lopitalo.app.auth.SessionManager
import com.lopitalo.app.data.repository.AuthRepository
import com.lopitalo.app.data.sync.SyncScheduler
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

/**
 * État global de session + orchestration de la synchronisation au démarrage.
 */
@HiltViewModel
class RootViewModel @Inject constructor(
    private val sessionManager: SessionManager,
    private val authRepository: AuthRepository,
    private val syncScheduler: SyncScheduler,
) : ViewModel() {

    /** `null` = restauration de session en cours. */
    private val _isLoggedIn = MutableStateFlow<Boolean?>(null)
    val isLoggedIn: StateFlow<Boolean?> = _isLoggedIn.asStateFlow()

    private val _isBusy = MutableStateFlow(false)
    val isBusy: StateFlow<Boolean> = _isBusy.asStateFlow()

    private val _error = MutableStateFlow<String?>(null)
    val error: StateFlow<String?> = _error.asStateFlow()

    init {
        viewModelScope.launch {
            sessionManager.restore()
            syncScheduler.schedulePeriodic()
            _isLoggedIn.value = sessionManager.isLoggedIn
            if (sessionManager.isLoggedIn) {
                syncScheduler.requestSyncNow()
            }
        }
    }

    fun login(email: String, password: String) {
        viewModelScope.launch {
            _isBusy.value = true
            _error.value = null
            authRepository.login(email, password)
                .onSuccess {
                    _isLoggedIn.value = true
                    syncScheduler.requestSyncNow()
                }
                .onFailure { _error.value = it.message ?: "Connexion impossible" }
            _isBusy.value = false
        }
    }

    fun logout() {
        viewModelScope.launch {
            authRepository.logout()
            _isLoggedIn.value = false
        }
    }
}
