Statut integration: le schema ci-dessous est integre dans `database/migrations/`, une migration par table (les tables systeme Laravel sont regroupees dans les fichiers `0001_01_01_*`).

Les anciennes migrations, seeders et factories du SaaS immobilier ont ete retirees du dossier `database`. Le seeder courant cree seulement l'utilisateur administrateur et les roles hospitaliers de base.

Voici une proposition d’architecture de base de données pour une application de gestion hospitalière, sous forme de migrations Laravel (Eloquent). Elle couvre les modules essentiels : utilisateurs, patients, personnel, rendez-vous, admissions, dossier médical, prescriptions, pharmacie, laboratoire, imagerie, facturation.

L’approche est modulaire et extensible. Les tables sont reliées par des clés étrangères avec contraintes d’intégrité. Chaque information n’est stockée qu’à un seul endroit : allergies, constantes et tests de labo ont leur propre table plutôt qu’une colonne JSON.

---

## 1. Tables des utilisateurs et rôles

```php
// migration : create_users_table
Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->timestamp('email_verified_at')->nullable();
    $table->string('password');
    $table->rememberToken();
    $table->timestamps();
});

// migration : create_roles_table
Schema::create('roles', function (Blueprint $table) {
    $table->id();
    $table->string('name')->unique(); // admin, doctor, nurse, receptionist, pharmacist, lab_tech, accountant, director
    $table->string('description')->nullable();
    $table->timestamps();
});

// migration : create_role_user_table (pivot)
Schema::create('role_user', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->foreignId('role_id')->constrained()->onDelete('cascade');
    $table->timestamps();
});
```

---

## 2. Gestion des patients et du personnel

```php
// migration : create_patients_table
Schema::create('patients', function (Blueprint $table) {
    $table->id();
    $table->string('patient_code')->unique(); // identifiant interne
    $table->string('first_name');
    $table->string('last_name');
    $table->date('date_of_birth');
    $table->string('gender');
    $table->string('phone')->nullable();
    $table->string('email')->nullable();
    $table->text('address')->nullable();
    $table->string('emergency_contact_name')->nullable();
    $table->string('emergency_contact_phone')->nullable();
    $table->string('blood_group', 5)->nullable();
    $table->text('medical_history')->nullable(); // antécédents (texte libre, chiffré) ; les allergies sont dans la table `allergies`
    $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null'); // si le patient a un compte portail
    $table->timestamps();
    $table->softDeletes();
    $table->index(['last_name', 'first_name']); // recherche par nom
});

// migration : create_staff_table (personnel médical et administratif)
Schema::create('staff', function (Blueprint $table) {
    $table->id();
    $table->string('staff_code')->unique();
    $table->string('first_name');
    $table->string('last_name');
    $table->string('email')->unique();
    $table->string('phone')->nullable();
    $table->string('gender');
    $table->date('date_of_birth')->nullable();
    $table->string('specialty')->nullable(); // pour les médecins
    $table->string('license_number')->nullable(); // numéro d'ordre
    $table->foreignId('department_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null'); // compte utilisateur lié
    $table->timestamps();
    $table->softDeletes();
});

// migration : create_departments_table
Schema::create('departments', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('code')->unique();
    $table->text('description')->nullable();
    $table->timestamps();
});
```

---

## 3. Rendez-vous et admissions

```php
// migration : create_appointments_table
Schema::create('appointments', function (Blueprint $table) {
    $table->id();
    $table->foreignId('patient_id')->constrained()->restrictOnDelete();
    $table->foreignId('staff_id')->nullable()->constrained()->onDelete('set null'); // médecin ou autre soignant
    $table->foreignId('department_id')->nullable()->constrained()->onDelete('set null');
    $table->dateTime('scheduled_at');
    $table->dateTime('end_at')->nullable();
    $table->string('status')->default('pending');
    $table->text('reason')->nullable(); // motif
    $table->text('notes')->nullable();
    $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('set null');
    $table->timestamps();
    $table->softDeletes();
    $table->index(['staff_id', 'scheduled_at']); // planning d'un soignant
});

// migration : create_admissions_table (hospitalisations)
Schema::create('admissions', function (Blueprint $table) {
    $table->id();
    $table->string('admission_code')->unique();
    $table->foreignId('patient_id')->constrained()->restrictOnDelete();
    $table->foreignId('department_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('bed_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('attending_doctor_id')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('admission_date');
    $table->dateTime('discharge_date')->nullable();
    $table->string('status')->default('planned');
    $table->text('diagnosis')->nullable(); // chiffré
    $table->text('notes')->nullable();
    $table->timestamps();
    $table->softDeletes();
    $table->index('status'); // hospitalisations en cours
});

// migration : create_beds_table
Schema::create('beds', function (Blueprint $table) {
    $table->id();
    $table->string('bed_number')->unique();
    $table->foreignId('room_id')->nullable()->constrained()->onDelete('set null'); // le service se déduit de la chambre
    $table->string('status')->default('available');
    $table->timestamps();
});

// migration : create_rooms_table
Schema::create('rooms', function (Blueprint $table) {
    $table->id();
    $table->string('room_number')->unique();
    $table->string('type')->nullable(); // simple, double, ICU, etc.
    $table->foreignId('department_id')->nullable()->constrained()->onDelete('set null');
    $table->timestamps();
});
```

---

## 4. Dossier médical électronique (DME)

```php
// migration : create_medical_records_table
Schema::create('medical_records', function (Blueprint $table) {
    $table->id();
    $table->foreignId('patient_id')->constrained()->restrictOnDelete();
    $table->foreignId('admission_id')->nullable()->constrained()->restrictOnDelete(); // si lié à une hospitalisation
    $table->foreignId('staff_id')->nullable()->constrained()->onDelete('set null'); // soignant rédacteur
    $table->dateTime('record_date');
    $table->string('type'); // consultation, suivi, urgence, compte rendu, etc.
    $table->text('subjective')->nullable(); // motif / anamnèse (subjective, objective, assessment, plan : chiffrés)
    $table->text('objective')->nullable(); // examen clinique
    $table->text('assessment')->nullable(); // diagnostic
    $table->text('plan')->nullable(); // conduite à tenir
    $table->json('attachments')->nullable(); // liens vers documents
    $table->timestamps();
});

// migration : create_allergies_table (plus structuré)
Schema::create('allergies', function (Blueprint $table) {
    $table->id();
    $table->foreignId('patient_id')->constrained()->restrictOnDelete();
    $table->string('allergen');
    $table->string('reaction')->nullable();
    $table->string('severity')->nullable(); // mild, moderate, severe
    $table->text('notes')->nullable();
    $table->timestamps();
});

// migration : create_vital_signs_table (suivi des constantes)
Schema::create('vital_signs', function (Blueprint $table) {
    $table->id();
    $table->foreignId('patient_id')->constrained()->restrictOnDelete();
    $table->foreignId('admission_id')->nullable()->constrained()->restrictOnDelete();
    $table->foreignId('staff_id')->nullable()->constrained()->onDelete('set null');
    $table->dateTime('measured_at');
    $table->decimal('temperature', 4, 1)->nullable();
    $table->integer('heart_rate')->nullable();
    $table->integer('respiratory_rate')->nullable();
    $table->unsignedSmallInteger('blood_pressure_systolic')->nullable(); // mmHg
    $table->unsignedSmallInteger('blood_pressure_diastolic')->nullable(); // mmHg
    $table->decimal('oxygen_saturation', 5, 2)->nullable();
    $table->decimal('weight', 6, 2)->nullable();
    $table->decimal('height', 5, 2)->nullable();
    $table->text('notes')->nullable();
    $table->timestamps();
});
```

---

## 5. Prescriptions et médicaments

```php
// migration : create_prescriptions_table
Schema::create('prescriptions', function (Blueprint $table) {
    $table->id();
    $table->foreignId('patient_id')->constrained()->restrictOnDelete();
    $table->foreignId('admission_id')->nullable()->constrained()->restrictOnDelete();
    $table->foreignId('prescriber_id')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('prescribed_at');
    $table->string('status')->default('active');
    $table->text('notes')->nullable();
    $table->timestamps();
});

// migration : create_prescription_items_table
Schema::create('prescription_items', function (Blueprint $table) {
    $table->id();
    $table->foreignId('prescription_id')->constrained()->onDelete('cascade');
    $table->foreignId('medication_id')->nullable()->constrained()->onDelete('set null');
    $table->string('medication_name')->nullable(); // si non dans le référentiel
    $table->string('dosage')->nullable();
    $table->string('frequency')->nullable(); // ex: 3 fois par jour
    $table->string('duration')->nullable(); // ex: 7 jours
    $table->text('instructions')->nullable();
    $table->dateTime('start_date')->nullable();
    $table->dateTime('end_date')->nullable();
    $table->string('status')->default('prescribed');
    $table->timestamps();
});

// migration : create_medications_table (référentiel)
Schema::create('medications', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('generic_name')->nullable();
    $table->string('form')->nullable(); // comprimé, sirop, injection...
    $table->string('strength')->nullable();
    $table->string('unit')->nullable();
    $table->decimal('price', 10, 2)->default(0);
    $table->integer('reorder_level')->default(10); // stock et péremption : voir medication_batches
    $table->timestamps();
});

// migration : create_medication_batches_table (lots : le stock et la péremption vivent ici)
Schema::create('medication_batches', function (Blueprint $table) {
    $table->id();
    $table->foreignId('medication_id')->constrained()->restrictOnDelete();
    $table->string('batch_number');
    $table->date('expiry_date');
    $table->unsignedInteger('quantity')->default(0); // modifié uniquement via MedicationBatch::move()
    $table->timestamps();
    $table->unique(['medication_id', 'batch_number']);
    $table->index(['medication_id', 'expiry_date']);
});
```

---

## 6. Pharmacie et gestion des stocks

```php
// migration : create_dispensing_records_table (administration / dispensation)
Schema::create('dispensing_records', function (Blueprint $table) {
    $table->id();
    $table->foreignId('prescription_item_id')->constrained()->restrictOnDelete();
    $table->foreignId('medication_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('dispensed_by')->nullable()->constrained('staff')->onDelete('set null');
    $table->foreignId('administered_by')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('dispensed_at')->nullable();
    $table->dateTime('administered_at')->nullable();
    $table->integer('quantity');
    $table->text('notes')->nullable();
    $table->timestamps();
});

// migration : create_stock_transactions_table (mouvements de stock)
Schema::create('stock_transactions', function (Blueprint $table) {
    $table->id();
    $table->foreignId('medication_id')->constrained()->restrictOnDelete();
    $table->foreignId('medication_batch_id')->constrained()->restrictOnDelete();
    $table->string('type');
    $table->integer('quantity'); // signé : + entrée, - sortie
    $table->decimal('unit_price', 10, 2)->nullable();
    $table->foreignId('performed_by')->nullable()->constrained('users')->onDelete('set null');
    $table->text('notes')->nullable();
    $table->timestamps();
});

// migration : create_suppliers_table (fournisseurs)
Schema::create('suppliers', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('contact_person')->nullable();
    $table->string('phone')->nullable();
    $table->string('email')->nullable();
    $table->text('address')->nullable();
    $table->timestamps();
});

// migration : create_purchase_orders_table
Schema::create('purchase_orders', function (Blueprint $table) {
    $table->id();
    $table->string('order_code')->unique();
    $table->foreignId('supplier_id')->nullable()->constrained()->onDelete('set null');
    $table->dateTime('order_date');
    $table->dateTime('expected_delivery_date')->nullable();
    $table->string('status')->default('draft');
    $table->decimal('total_amount', 12, 2)->default(0);
    $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('set null');
    $table->timestamps();
});

// migration : create_purchase_order_items_table
Schema::create('purchase_order_items', function (Blueprint $table) {
    $table->id();
    $table->foreignId('purchase_order_id')->constrained()->onDelete('cascade');
    $table->foreignId('medication_id')->nullable()->constrained()->onDelete('set null');
    $table->integer('quantity');
    $table->decimal('unit_price', 10, 2);
    $table->decimal('total_price', 12, 2)->storedAs('quantity * unit_price');
    $table->timestamps();
});
```

---

## 7. Laboratoire et imagerie

```php
// migration : create_lab_orders_table
Schema::create('lab_orders', function (Blueprint $table) {
    $table->id();
    $table->string('order_code')->unique();
    $table->foreignId('patient_id')->constrained()->restrictOnDelete();
    $table->foreignId('admission_id')->nullable()->constrained()->restrictOnDelete();
    $table->foreignId('ordered_by')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('order_date');
    $table->string('status')->default('pending');
    $table->text('clinical_info')->nullable();
    $table->timestamps();
});

// migration : create_lab_results_table
Schema::create('lab_results', function (Blueprint $table) {
    $table->id();
    $table->foreignId('lab_order_id')->constrained()->restrictOnDelete();
    $table->string('test_name'); // une ligne par test demandé, créée à la commande (résultat vide)
    $table->string('result_value')->nullable();
    $table->string('unit')->nullable();
    $table->string('reference_range')->nullable();
    $table->boolean('is_abnormal')->default(false);
    $table->text('notes')->nullable();
    $table->foreignId('performed_by')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('result_date')->nullable();
    $table->timestamps();
});

// migration : create_imaging_orders_table
Schema::create('imaging_orders', function (Blueprint $table) {
    $table->id();
    $table->string('order_code')->unique();
    $table->foreignId('patient_id')->constrained()->restrictOnDelete();
    $table->foreignId('admission_id')->nullable()->constrained()->restrictOnDelete();
    $table->foreignId('ordered_by')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('order_date');
    $table->string('imaging_type'); // X-ray, MRI, CT, Ultrasound
    $table->string('body_part')->nullable();
    $table->string('status')->default('pending');
    $table->text('clinical_info')->nullable();
    $table->timestamps();
});

// migration : create_imaging_reports_table
Schema::create('imaging_reports', function (Blueprint $table) {
    $table->id();
    $table->foreignId('imaging_order_id')->constrained()->restrictOnDelete();
    $table->foreignId('radiologist_id')->nullable()->constrained('staff')->onDelete('set null');
    $table->text('findings')->nullable();
    $table->text('impression')->nullable();
    $table->string('report_file_path')->nullable(); // lien vers PDF ou image
    $table->dateTime('report_date')->nullable();
    $table->timestamps();
});
```

---

## 8. Facturation et paiements

```php
// migration : create_invoices_table
Schema::create('invoices', function (Blueprint $table) {
    $table->id();
    $table->string('invoice_code')->unique();
    $table->foreignId('patient_id')->constrained()->restrictOnDelete();
    $table->foreignId('admission_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('appointment_id')->nullable()->constrained()->onDelete('set null');
    $table->dateTime('invoice_date');
    // subtotal et paid_amount : agrégats des lignes et paiements, tenus à jour par Invoice::recalculateTotals()
    $table->decimal('subtotal', 12, 2)->default(0);
    $table->decimal('discount', 12, 2)->default(0);
    $table->decimal('tax', 12, 2)->default(0);
    $table->decimal('paid_amount', 12, 2)->default(0);
    $table->decimal('total_amount', 12, 2)->storedAs('subtotal - discount + tax');
    $table->decimal('balance_due', 12, 2)->storedAs('subtotal - discount + tax - paid_amount');
    $table->string('status')->default('draft');
    $table->text('notes')->nullable();
    $table->timestamps();
    $table->softDeletes();
});

// migration : create_invoice_items_table
Schema::create('invoice_items', function (Blueprint $table) {
    $table->id();
    $table->foreignId('invoice_id')->constrained()->onDelete('cascade');
    $table->string('item_type'); // consultation, medication, lab_test, imaging, room, procedure
    $table->string('description');
    $table->integer('quantity')->default(1);
    $table->decimal('unit_price', 10, 2);
    $table->decimal('total_price', 12, 2)->storedAs('quantity * unit_price');
    $table->nullableMorphs('reference'); // lien polymorphe vers la source (consultation, médicament, examen...)
    $table->timestamps();
});

// migration : create_payments_table
Schema::create('payments', function (Blueprint $table) {
    $table->id();
    $table->string('payment_code')->unique();
    $table->foreignId('invoice_id')->constrained()->restrictOnDelete();
    $table->dateTime('payment_date');
    $table->decimal('amount', 12, 2);
    $table->string('payment_method');
    $table->string('transaction_reference')->nullable();
    $table->foreignId('received_by')->nullable()->constrained('users')->onDelete('set null');
    $table->timestamps();
});
```

---

## 9. Tables supplémentaires (bloc opératoire, urgences, etc.)

```php
// migration : create_surgeries_table
Schema::create('surgeries', function (Blueprint $table) {
    $table->id();
    $table->foreignId('patient_id')->constrained()->restrictOnDelete();
    $table->foreignId('admission_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('surgeon_id')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('scheduled_at');
    $table->dateTime('end_at')->nullable();
    $table->string('surgery_type');
    $table->string('status')->default('scheduled');
    $table->foreignId('operating_room_id')->nullable()->constrained()->onDelete('set null');
    $table->text('notes')->nullable();
    $table->timestamps();
});

// migration : create_operating_rooms_table
Schema::create('operating_rooms', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('location')->nullable();
    $table->string('status')->default('available');
    $table->timestamps();
});

// migration : create_emergency_visits_table
Schema::create('emergency_visits', function (Blueprint $table) {
    $table->id();
    $table->foreignId('patient_id')->constrained()->restrictOnDelete();
    $table->dateTime('arrival_time');
    $table->string('triage_level')->nullable(); // 1-5
    $table->text('chief_complaint')->nullable();
    $table->string('status')->default('waiting');
    $table->foreignId('attending_staff_id')->nullable()->constrained('staff')->onDelete('set null');
    $table->foreignId('admission_id')->nullable()->constrained()->restrictOnDelete(); // si le patient est hospitalisé
    $table->timestamps();
});

// migration : create_audit_logs_table (traçabilité des données médicales)
Schema::create('audit_logs', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
    $table->string('action'); // created, updated, deleted
    $table->morphs('auditable');
    $table->json('old_values')->nullable();
    $table->json('new_values')->nullable();
    $table->string('ip_address', 45)->nullable();
    $table->text('user_agent')->nullable();
    $table->timestamps();
});
```

---

## Remarques importantes

- Toutes les migrations utilisent `foreignId()->constrained()` pour assurer l’intégrité référentielle.
- Index : les clés étrangères sont indexées automatiquement ; des index composites couvrent les requêtes fréquentes (planning d'un soignant, hospitalisations en cours, recherche patient par nom).
- Traçabilité : les modèles médicaux (`Patient`, `Admission`, `MedicalRecord`, `Allergy`, `VitalSign`, `Prescription`, `PrescriptionItem`, `DispensingRecord`, `LabResult`, `ImagingReport`) utilisent le trait `App\Models\Concerns\Auditable` : chaque création/modification/suppression écrit une ligne dans `audit_logs` (qui, quand, IP, anciennes et nouvelles valeurs). Les écritures via `DB::table()` contournent le journal.
- Chiffrement : `medical_records.subjective/objective/assessment/plan`, `admissions.diagnosis` et `patients.medical_history` utilisent le cast `encrypted` (clé `APP_KEY`). Ces colonnes ne sont pas interrogeables en SQL (pas de `where`/`like`) et restent chiffrées dans `audit_logs`. Perdre ou changer `APP_KEY` sans `APP_PREVIOUS_KEYS` rend ces données illisibles.
- Suppressions : les données médicales et financières (dossiers, constantes, prescriptions, labo, imagerie, factures, paiements) utilisent `restrictOnDelete()` : on ne peut pas supprimer définitivement un patient, une admission ou une facture qui a un historique. Les patients, admissions, rendez-vous et factures utilisent `softDeletes`. La cascade est réservée aux lignes qui n'existent pas sans leur parent (`role_user`, `prescription_items`, `invoice_items`, `purchase_order_items`).
- Montants : `total_price`, `total_amount` et `balance_due` sont des colonnes générées (`storedAs`) — on ne les écrit jamais. Les agrégats `invoices.subtotal`/`paid_amount` et `purchase_orders.total_amount` sont recalculés automatiquement à chaque création/modification/suppression d'une ligne ou d'un paiement (événements des modèles).
- Stock : il vit dans `medication_batches.quantity` (un lot = un numéro, une péremption, une quantité). Toute entrée/sortie passe par `MedicationBatch::move($type, $quantite)`, qui met à jour le lot et écrit la `stock_transaction` dans une même transaction (stock négatif refusé). `Medication->stock_quantity` et `->expiry_date` sont calculés depuis les lots.
- Statuts et types : colonnes `string` (pas d'`enum` SQL, qui oblige à écrire une migration pour ajouter une valeur). Les valeurs autorisées sont définies par les enums PHP de `app/Enums` (castés dans les modèles, avec `label()` pour l'affichage en français) et validées avec `Rule::enum()`.
- Pas de doublon JSON : une information = une table (`allergies`, `vital_signs`, `lab_results`). Le JSON reste seulement pour `medical_records.attachments`.
- Pour une application réelle, il faudra ajouter des migrations pour la gestion des documents, des consentements, etc.
- Pensez à exécuter `php artisan migrate` après avoir créé ces fichiers.

Cette architecture est un point de départ solide. Elle peut être étendue en fonction des besoins spécifiques de l’hôpital.
