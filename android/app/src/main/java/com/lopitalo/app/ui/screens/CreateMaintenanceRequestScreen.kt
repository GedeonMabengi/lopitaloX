package com.lopitalo.app.ui.screens

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.Button
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewModelScope
import com.lopitalo.app.data.local.entity.PropertyUnitEntity
import com.lopitalo.app.data.repository.MaintenanceRepository
import com.lopitalo.app.data.repository.PropertyRepository
import com.lopitalo.app.data.sync.SyncScheduler
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch

@HiltViewModel
class CreateMaintenanceRequestViewModel @Inject constructor(
    propertyRepository: PropertyRepository,
    private val maintenanceRepository: MaintenanceRepository,
    private val syncScheduler: SyncScheduler,
) : ViewModel() {

    val units: StateFlow<List<PropertyUnitEntity>> = propertyRepository.observeAllUnits()
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), emptyList())

    fun submit(
        unit: PropertyUnitEntity,
        category: String,
        description: String,
        priority: String,
        onDone: () -> Unit,
    ) {
        viewModelScope.launch {
            maintenanceRepository.createOffline(
                propertyUnitId = unit.id,
                category = category,
                description = description,
                priority = priority,
            )
            syncScheduler.requestSyncNow()
            onDone()
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CreateMaintenanceRequestScreen(
    onDone: () -> Unit,
    onCancel: () -> Unit,
    viewModel: CreateMaintenanceRequestViewModel = hiltViewModel(),
) {
    val units by viewModel.units.collectAsStateWithLifecycle()

    var selectedUnit by remember { mutableStateOf<PropertyUnitEntity?>(null) }
    var category by remember { mutableStateOf("") }
    var description by remember { mutableStateOf("") }
    var priority by remember { mutableStateOf("medium") }

    var unitMenuExpanded by remember { mutableStateOf(false) }
    var priorityMenuExpanded by remember { mutableStateOf(false) }

    val priorities = listOf("low", "medium", "high", "urgent")

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Demande de maintenance") },
                navigationIcon = {
                    IconButton(onClick = onCancel) {
                        Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Retour")
                    }
                },
            )
        },
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .padding(16.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Text(
                "La demande sera enregistrée localement et envoyée " +
                    "automatiquement dès que le réseau sera disponible.",
                style = MaterialTheme.typography.bodySmall,
            )

            // Sélection de l'unité
            Box {
                OutlinedButton(
                    onClick = { unitMenuExpanded = true },
                    modifier = Modifier.fillMaxWidth(),
                ) {
                    Text("Unité : ${selectedUnit?.unitNumber ?: "choisir"}")
                }
                DropdownMenu(
                    expanded = unitMenuExpanded,
                    onDismissRequest = { unitMenuExpanded = false },
                ) {
                    units.forEach { unit ->
                        DropdownMenuItem(
                            text = { Text("${unit.unitNumber} (${unit.status})") },
                            onClick = {
                                selectedUnit = unit
                                unitMenuExpanded = false
                            },
                        )
                    }
                }
            }

            OutlinedTextField(
                value = category,
                onValueChange = { category = it },
                label = { Text("Catégorie (ex : plomberie)") },
                modifier = Modifier.fillMaxWidth(),
            )

            OutlinedTextField(
                value = description,
                onValueChange = { description = it },
                label = { Text("Description du problème") },
                minLines = 3,
                modifier = Modifier.fillMaxWidth(),
            )

            // Priorité
            Box {
                OutlinedButton(
                    onClick = { priorityMenuExpanded = true },
                    modifier = Modifier.fillMaxWidth(),
                ) {
                    Text("Priorité : $priority")
                }
                DropdownMenu(
                    expanded = priorityMenuExpanded,
                    onDismissRequest = { priorityMenuExpanded = false },
                ) {
                    priorities.forEach { p ->
                        DropdownMenuItem(
                            text = { Text(p) },
                            onClick = {
                                priority = p
                                priorityMenuExpanded = false
                            },
                        )
                    }
                }
            }

            val canSubmit = selectedUnit != null && category.isNotBlank() && description.isNotBlank()

            Button(
                onClick = {
                    viewModel.submit(
                        unit = selectedUnit!!,
                        category = category.trim(),
                        description = description.trim(),
                        priority = priority,
                        onDone = onDone,
                    )
                },
                enabled = canSubmit,
                modifier = Modifier.fillMaxWidth(),
            ) {
                Text("Enregistrer (hors ligne)")
            }
        }
    }
}
