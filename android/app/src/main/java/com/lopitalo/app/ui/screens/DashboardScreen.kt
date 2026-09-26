package com.lopitalo.app.ui.screens

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewModelScope
import com.lopitalo.app.data.local.dao.LeaseDao
import com.lopitalo.app.data.local.dao.PendingOperationDao
import com.lopitalo.app.data.repository.MaintenanceRepository
import com.lopitalo.app.data.repository.PropertyRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.stateIn

@HiltViewModel
class DashboardViewModel @Inject constructor(
    propertyRepository: PropertyRepository,
    maintenanceRepository: MaintenanceRepository,
    leaseDao: LeaseDao,
    pendingOperationDao: PendingOperationDao,
) : ViewModel() {

    val propertyCount: StateFlow<Int> = propertyRepository.observeProperties()
        .map { it.size }
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), 0)

    val unitCount: StateFlow<Int> = propertyRepository.observeAllUnits()
        .map { it.size }
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), 0)

    val activeLeaseCount: StateFlow<Int> = leaseDao.observeActiveCount()
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), 0)

    val openMaintenanceCount: StateFlow<Int> = maintenanceRepository.observeOpenCount()
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), 0)

    val pendingSyncCount: StateFlow<Int> = pendingOperationDao.observeCount()
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), 0)
}

@Composable
fun DashboardScreen(
    onOpenProperties: () -> Unit,
    onCreateMaintenance: () -> Unit,
    onLogout: () -> Unit,
    viewModel: DashboardViewModel = hiltViewModel(),
) {
    val propertyCount by viewModel.propertyCount.collectAsStateWithLifecycle()
    val unitCount by viewModel.unitCount.collectAsStateWithLifecycle()
    val activeLeaseCount by viewModel.activeLeaseCount.collectAsStateWithLifecycle()
    val openMaintenanceCount by viewModel.openMaintenanceCount.collectAsStateWithLifecycle()
    val pendingSyncCount by viewModel.pendingSyncCount.collectAsStateWithLifecycle()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        Text(text = "Tableau de bord", style = MaterialTheme.typography.headlineMedium)

        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            StatCard("Biens", propertyCount, Modifier.weight(1f))
            StatCard("Unités", unitCount, Modifier.weight(1f))
        }
        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            StatCard("Baux actifs", activeLeaseCount, Modifier.weight(1f))
            StatCard("Demandes ouvertes", openMaintenanceCount, Modifier.weight(1f))
        }

        if (pendingSyncCount > 0) {
            Card(modifier = Modifier.fillMaxWidth()) {
                Text(
                    text = "$pendingSyncCount opération(s) en attente de synchronisation " +
                        "(seront envoyées à la prochaine connexion).",
                    modifier = Modifier.padding(16.dp),
                    style = MaterialTheme.typography.bodyMedium,
                )
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        Button(onClick = onOpenProperties, modifier = Modifier.fillMaxWidth()) {
            Text("Biens immobiliers")
        }
        Button(onClick = onCreateMaintenance, modifier = Modifier.fillMaxWidth()) {
            Text("Nouvelle demande de maintenance (hors ligne)")
        }
        OutlinedButton(onClick = onLogout, modifier = Modifier.fillMaxWidth()) {
            Text("Se déconnecter")
        }
    }
}

@Composable
private fun StatCard(label: String, value: Int, modifier: Modifier = Modifier) {
    Card(modifier = modifier) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = value.toString(), style = MaterialTheme.typography.headlineLarge)
            Text(text = label, style = MaterialTheme.typography.bodyMedium)
        }
    }
}
