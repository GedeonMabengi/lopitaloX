# Lopitalo Mobile — Android (Kotlin + Jetpack Compose)

Application mobile Android de **Lopitalo** (gestion locative immobilière),
conçue en **offline-first** : l'utilisateur peut consulter ses données et créer
des demandes de maintenance **sans connexion réseau**.

## Stack

- Kotlin 2.1 + Jetpack Compose (Material 3)
- Architecture MVVM + Hilt (injection de dépendances)
- Room (SQLite) comme source de vérité locale
- Retrofit + kotlinx.serialization pour l'API REST
- WorkManager pour la synchronisation en arrière-plan
- DataStore pour la session (token Sanctum)

## Prérequis backend

L'app consomme l'API REST Laravel du projet (voir `routes/api.php`) :

- `POST /api/v1/login` → token Sanctum
- `GET  /api/v1/sync?since=<ISO8601>` → bundle delta
- `POST /api/v1/sync/outbox` → rejeu des opérations hors ligne (idempotent)
- `POST /api/v1/maintenance-requests` → création de demande
- `POST /api/v1/maintenance-requests/{id}/status`, `work-orders/{id}/status`

Lancer le backend : `php artisan serve` puis vérifier `/api/v1/login`.

## Configuration de l'URL de l'API

Dans `app/build.gradle.kts`, `defaultConfig` :

```kotlin
buildConfigField("String", "API_BASE_URL", "\"http://10.0.2.2:8000/api/v1/\"")
```

- `10.0.2.2` = machine hôte vue depuis l'émulateur Android.
- Pour un appareil physique, remplacez par l'IP de la machine sur le LAN
  (ex. `http://192.168.1.20:8000/api/v1/`).

Le manifest autorise le trafic en clair (`usesCleartextTraffic="true"`) pour le
développement local ; à retirer en production (HTTPS).

## Compilation

Ouvrir le dossier `android/` dans Android Studio, laisser le sync Gradle se
terminer, puis lancer sur un émulateur/appareil. En ligne de commande :

```bash
cd android
./gradlew :app:assembleDebug
```

## Architecture offline-first

```
 UI (Compose) ──> ViewModel ──> Repository ──> Room (Flow)   <── source de vérité
                                    │
                                    └── SyncWorker (WorkManager)
                                          │  1. push outbox (opérations locales)
                                          │  2. pull  delta (GET /sync?since=)
                                          └── met à jour Room + tombstones
```

- **Lecture** : l'UI observe toujours Room. Les données sont téléchargées par la
  synchronisation et restent consultables hors ligne.
- **Écriture hors ligne** : toute création (ex. demande de maintenance) est
  stockée dans `pending_operations` (outbox) avec un `client_uuid` (UUID). Le
  serveur déduplique via `client_uuid`, ce qui rend le rejeu sûr.
- **Synchronisation** : `SyncWorker` (périodique 15 min + à la reconnexion, avec
  contrainte `NetworkType.CONNECTED`) pousse l'outbox puis tire le delta.

## Ce qui fonctionne hors ligne

- Tableau de bord (KPIs calculés depuis Room)
- Liste des biens et unités
- Création d'une demande de maintenance (mise en file, envoyée ensuite)

## Ce qui reste en ligne (par nature)

Paiement en ligne, sync bancaire, classification IA, screening locataire, envoi
d'emails/SMS, première connexion / 2FA.

## Structure

```
app/src/main/java/com/lopitalo/app/
├── auth/            SessionManager (DataStore + token en mémoire)
├── data/
│   ├── local/       Room : entities, DAOs, LopitaloDatabase
│   ├── remote/      LopitaloApi (Retrofit) + dto/
│   ├── repository/  Auth / Property / Maintenance / Sync
│   └── sync/        SyncWorker + SyncScheduler
├── di/              Modules Hilt (réseau, base de données)
└── ui/              theme, navigation, écrans (Login, Dashboard, Biens, Demande)
```
