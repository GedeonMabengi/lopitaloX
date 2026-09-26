package com.lopitalo.app.data.sync

import android.content.Context
import androidx.hilt.work.HiltWorker
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import com.lopitalo.app.auth.SessionManager
import com.lopitalo.app.data.repository.SyncRepository
import dagger.assisted.Assisted
import dagger.assisted.AssistedInject

/**
 * Worker de synchronisation bidirectionnelle :
 *   1. pousse l'outbox (opérations créées hors ligne),
 *   2. tire le delta serveur et met à jour la base locale.
 *
 * Contrainte réseau `CONNECTED` posée par le scheduler : le worker ne tourne
 * que lorsque le réseau est disponible, et attend sinon.
 */
@HiltWorker
class SyncWorker @AssistedInject constructor(
    @Assisted context: Context,
    @Assisted params: WorkerParameters,
    private val syncRepository: SyncRepository,
    private val sessionManager: SessionManager,
) : CoroutineWorker(context, params) {

    override suspend fun doWork(): Result {
        if (!sessionManager.isLoggedIn) {
            return Result.success()
        }

        return runCatching {
            syncRepository.pushOutbox()
            syncRepository.pull()
        }.fold(
            onSuccess = { Result.success() },
            onFailure = {
                // Réessaie jusqu'à 3 fois (backoff géré par WorkManager), puis abandonne.
                if (runAttemptCount < 3) Result.retry() else Result.failure()
            },
        )
    }
}
