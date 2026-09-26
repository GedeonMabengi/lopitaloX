package com.lopitalo.app.auth

import android.content.Context
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.stringPreferencesKey
import androidx.datastore.preferences.preferencesDataStore
import com.lopitalo.app.data.remote.dto.UserDto
import dagger.hilt.android.qualifiers.ApplicationContext
import kotlinx.coroutines.flow.first
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import javax.inject.Inject
import javax.inject.Singleton

private val Context.dataStore by preferencesDataStore(name = "session")

/**
 * Gère la session (token Sanctum + utilisateur courant).
 *
 * Le token est gardé en mémoire (`@Volatile`) pour un accès synchrone depuis
 * l'intercepteur OkHttp, et persisté dans DataStore pour survivre aux
 * redémarrages — ce qui permet d'ouvrir l'app et de consulter les données
 * mises en cache même hors ligne après la première connexion.
 */
@Singleton
class SessionManager @Inject constructor(
    @ApplicationContext private val context: Context,
    private val json: Json,
) {
    @Volatile
    var token: String? = null
        private set

    @Volatile
    var user: UserDto? = null
        private set

    val isLoggedIn: Boolean get() = token != null

    suspend fun restore() {
        val prefs = context.dataStore.data.first()
        token = prefs[KEY_TOKEN]
        user = prefs[KEY_USER]?.let { runCatching { json.decodeFromString<UserDto>(it) }.getOrNull() }
    }

    suspend fun save(token: String, user: UserDto) {
        this.token = token
        this.user = user
        context.dataStore.edit {
            it[KEY_TOKEN] = token
            it[KEY_USER] = json.encodeToString(UserDto.serializer(), user)
        }
    }

    suspend fun clear() {
        token = null
        user = null
        context.dataStore.edit { it.clear() }
    }

    companion object {
        private val KEY_TOKEN = stringPreferencesKey("token")
        private val KEY_USER = stringPreferencesKey("user")
    }
}
