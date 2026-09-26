package com.lopitalo.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import com.lopitalo.app.ui.RootViewModel
import com.lopitalo.app.ui.navigation.LopitaloNavHost
import com.lopitalo.app.ui.theme.LopitaloTheme
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class MainActivity : ComponentActivity() {

    private val rootViewModel: RootViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            LopitaloTheme {
                LopitaloNavHost(rootViewModel)
            }
        }
    }
}
