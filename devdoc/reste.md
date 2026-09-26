Voici les fichiers de configuration supplémentaires nécessaires pour faire fonctionner l'application de gestion hospitalière avec Laravel. Ils couvrent l'enregistrement des middlewares, les seeders de rôles, la configuration de la pagination Bootstrap et d'autres réglages utiles.

---

## 1. Middleware de rôle

### `app/Http/Middleware/RoleMiddleware.php`

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Vérifie que l'utilisateur connecté possède au moins un des rôles requis.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  ...$roles
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $user = Auth::user();
        foreach ($roles as $role) {
            if ($user->hasRole($role)) {
                return $next($request);
            }
        }

        abort(403, 'Accès non autorisé.');
    }
}
```

---

## 2. Enregistrement des middlewares

### `app/Http/Kernel.php`

```php
<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * @var array<int, class-string|string>
     */
    protected $middleware = [
        // \App\Http\Middleware\TrustHosts::class,
        \App\Http\Middleware\TrustProxies::class,
        \Illuminate\Http\Middleware\HandleCors::class,
        \App\Http\Middleware\PreventRequestsDuringMaintenance::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \App\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array<string, array<int, class-string|string>>
     */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

        'api' => [
            // \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array<string, class-string|string>
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'auth.session' => \Illuminate\Session\Middleware\AuthenticateSession::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
        // Ajout du middleware personnalisé 'role'
        'role' => \App\Http\Middleware\RoleMiddleware::class,
    ];
}
```

---

## 3. Activation de la pagination Bootstrap

### `app/Providers/AppServiceProvider.php`

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\Paginator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Utilise Bootstrap 5 pour la pagination
        Paginator::useBootstrapFive();
        // Ou Paginator::useBootstrapFour() si vous utilisez Bootstrap 4
    }
}
```

---

## 4. Seeders pour les rôles

### `database/seeders/RoleSeeder.php`

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['name' => 'admin', 'description' => 'Administrateur système'],
            ['name' => 'doctor', 'description' => 'Médecin'],
            ['name' => 'nurse', 'description' => 'Infirmier / Infirmière'],
            ['name' => 'receptionist', 'description' => 'Agent d\'accueil / Admissions'],
            ['name' => 'pharmacist', 'description' => 'Pharmacien'],
            ['name' => 'lab_tech', 'description' => 'Technicien de laboratoire'],
            ['name' => 'accountant', 'description' => 'Comptable / Facturation'],
            ['name' => 'director', 'description' => 'Directeur d\'hôpital'],
            ['name' => 'patient', 'description' => 'Patient (portail)'],
        ];

        foreach ($roles as $role) {
            Role::firstOrCreate(['name' => $role['name']], $role);
        }
    }
}
```

### `database/seeders/DatabaseSeeder.php`

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            // Ajoutez d'autres seeders (départements, médicaments, etc.) ici
        ]);

        // Création d'un utilisateur admin par défaut (optionnel)
        $admin = \App\Models\User::firstOrCreate(
            ['email' => 'admin@hospital.com'],
            [
                'name' => 'Administrateur',
                'password' => bcrypt('password'),
            ]
        );
        $admin->assignRole('admin');
    }
}
```

---

## 5. Configuration de l'authentification (par défaut)

Le fichier `config/auth.php` est standard et n'a pas besoin de modification pour ce projet car nous utilisons le guard unique `web` avec le modèle `User`. Cependant, voici un extrait pour référence :

```php
// config/auth.php (extrait)
'defaults' => [
    'guard' => 'web',
    'passwords' => 'users',
],

'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],
],

'providers' => [
    'users' => [
        'driver' => 'eloquent',
        'model' => App\Models\User::class,
    ],
],
```

Aucun changement nécessaire.

---

## 6. Fichier `.env.example`

```env
APP_NAME="Gestion Hospitalière"
APP_ENV=local
APP_KEY=base64:...
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hospital
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync

SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="no-reply@hospital.com"
MAIL_FROM_NAME="${APP_NAME}"
```

---

## 7. Dépendances Composer utiles

Voici les packages recommandés pour ce projet. Ajoutez-les à votre `composer.json` si nécessaire :

```json
"require": {
    "php": "^8.1",
    "laravel/framework": "^10.0",
    "laravel/sanctum": "^3.2",
    "laravel/tinker": "^2.8",
    "barryvdh/laravel-dompdf": "^2.0",   // Pour générer des PDF (factures, comptes rendus)
    "maatwebsite/excel": "^3.1",          // Pour les exports Excel (rapports)
    "spatie/laravel-permission": "^5.10"  // Alternative à notre gestion maison des rôles (optionnel)
}
```

Si vous utilisez `spatie/laravel-permission`, vous n'avez pas besoin de votre propre table `roles` ni du middleware personnalisé. Mais dans notre architecture, nous avons implémenté un système simple de rôles, donc ce package n'est pas obligatoire.

Pour installer les packages supplémentaires :

```bash
composer require barryvdh/laravel-dompdf maatwebsite/excel
```

---

## 8. Configuration de la locale et du fuseau horaire

### `config/app.php` (extrait)

```php
'timezone' => 'Europe/Paris', // ou votre fuseau
'locale' => 'fr',
'fallback_locale' => 'fr',
'faker_locale' => 'fr_FR',
```

---

## 9. Fichier de routes API (si nécessaire)

Si vous souhaitez exposer une API pour le portail patient ou des applications mobiles, créez `routes/api.php` avec les routes correspondantes. Exemple minimal :

```php
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AppointmentController;

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::apiResource('appointments', AppointmentController::class);
});
```

---

## 10. Gestion des fichiers téléversés (documents médicaux)

Pour stocker les documents (PDF, images), assurez-vous d'avoir un lien symbolique vers le dossier `storage` :

```bash
php artisan storage:link
```

Et dans `config/filesystems.php`, définissez un disque `public` (déjà présent par défaut). Vous pouvez ajouter un disque `private` pour les documents sensibles :

```php
'disks' => [
    // ...
    'private' => [
        'driver' => 'local',
        'root' => storage_path('app/private'),
        'throw' => false,
    ],
],
```

---

Ces fichiers complètent l'architecture de l'application. Avec les contrôleurs, modèles, vues et migrations déjà fournis, vous disposez d'une base solide pour développer l'application de gestion hospitalière.