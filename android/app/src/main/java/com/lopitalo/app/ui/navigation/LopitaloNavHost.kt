package com.lopitalo.app.ui.navigation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.lopitalo.app.ui.RootViewModel
import com.lopitalo.app.ui.screens.CreateMaintenanceRequestScreen
import com.lopitalo.app.ui.screens.DashboardScreen
import com.lopitalo.app.ui.screens.LoginScreen
import com.lopitalo.app.ui.screens.PropertyListScreen

object Routes {
    const val DASHBOARD = "dashboard"
    const val PROPERTIES = "properties"
    const val CREATE_MAINTENANCE = "create_maintenance"
}

@Composable
fun LopitaloNavHost(rootViewModel: RootViewModel) {
    val isLoggedIn by rootViewModel.isLoggedIn.collectAsStateWithLifecycle()

    when (isLoggedIn) {
        null -> {} // restauration de session : pas d'écran le temps d'un instant
        false -> LoginScreen(rootViewModel)
        true -> MainFlow(rootViewModel)
    }
}

@Composable
private fun MainFlow(rootViewModel: RootViewModel) {
    var currentRoute by remember { mutableStateOf(Routes.DASHBOARD) }

    when (currentRoute) {
        Routes.DASHBOARD -> DashboardScreen(
            onOpenProperties = { currentRoute = Routes.PROPERTIES },
            onCreateMaintenance = { currentRoute = Routes.CREATE_MAINTENANCE },
            onLogout = rootViewModel::logout,
        )
        Routes.PROPERTIES -> PropertyListScreen(
            onBack = { currentRoute = Routes.DASHBOARD },
            onCreateMaintenance = { currentRoute = Routes.CREATE_MAINTENANCE },
        )
        Routes.CREATE_MAINTENANCE -> CreateMaintenanceRequestScreen(
            onDone = { currentRoute = Routes.DASHBOARD },
            onCancel = { currentRoute = Routes.DASHBOARD },
        )
    }
}
