Statut integration: le schema ci-dessous est integre dans `database/migrations/2026_08_23_000000_create_hospital_management_schema.php`.

Les anciennes migrations, seeders et factories du SaaS immobilier ont ete retirees du dossier `database`. Le seeder courant cree seulement l'utilisateur administrateur et les roles hospitaliers de base.

Voici une proposition d’architecture de base de données pour une application de gestion hospitalière, sous forme de migrations Laravel (Eloquent). Elle couvre les modules essentiels : utilisateurs, patients, personnel, rendez-vous, admissions, dossier médical, prescriptions, pharmacie, laboratoire, imagerie, facturation.

L’approche est modulaire et extensible. Les tables sont reliées par des clés étrangères avec contraintes d’intégrité. Certaines tables utilisent des colonnes JSON pour plus de flexibilité.

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
    $table->enum('gender', ['male', 'female', 'other']);
    $table->string('phone')->nullable();
    $table->string('email')->nullable();
    $table->text('address')->nullable();
    $table->string('emergency_contact_name')->nullable();
    $table->string('emergency_contact_phone')->nullable();
    $table->string('blood_group', 5)->nullable();
    $table->json('allergies')->nullable(); // liste d'allergies
    $table->json('medical_history')->nullable(); // antécédents
    $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null'); // si le patient a un compte portail
    $table->timestamps();
    $table->softDeletes();
});

// migration : create_staff_table (personnel médical et administratif)
Schema::create('staff', function (Blueprint $table) {
    $table->id();
    $table->string('staff_code')->unique();
    $table->string('first_name');
    $table->string('last_name');
    $table->string('email')->unique();
    $table->string('phone')->nullable();
    $table->enum('gender', ['male', 'female', 'other']);
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
    $table->foreignId('patient_id')->constrained()->onDelete('cascade');
    $table->foreignId('staff_id')->nullable()->constrained()->onDelete('set null'); // médecin ou autre soignant
    $table->foreignId('department_id')->nullable()->constrained()->onDelete('set null');
    $table->dateTime('scheduled_at');
    $table->dateTime('end_at')->nullable();
    $table->enum('status', ['pending', 'confirmed', 'checked_in', 'completed', 'cancelled', 'no_show'])->default('pending');
    $table->text('reason')->nullable(); // motif
    $table->text('notes')->nullable();
    $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('set null');
    $table->timestamps();
    $table->softDeletes();
});

// migration : create_admissions_table (hospitalisations)
Schema::create('admissions', function (Blueprint $table) {
    $table->id();
    $table->string('admission_code')->unique();
    $table->foreignId('patient_id')->constrained()->onDelete('cascade');
    $table->foreignId('department_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('bed_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('attending_doctor_id')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('admission_date');
    $table->dateTime('discharge_date')->nullable();
    $table->enum('status', ['planned', 'active', 'discharged', 'transferred', 'cancelled'])->default('planned');
    $table->text('diagnosis')->nullable();
    $table->text('notes')->nullable();
    $table->timestamps();
    $table->softDeletes();
});

// migration : create_beds_table
Schema::create('beds', function (Blueprint $table) {
    $table->id();
    $table->string('bed_number')->unique();
    $table->foreignId('room_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('department_id')->nullable()->constrained()->onDelete('set null');
    $table->enum('status', ['available', 'occupied', 'cleaning', 'maintenance'])->default('available');
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
    $table->foreignId('patient_id')->constrained()->onDelete('cascade');
    $table->foreignId('admission_id')->nullable()->constrained()->onDelete('cascade'); // si lié à une hospitalisation
    $table->foreignId('staff_id')->nullable()->constrained()->onDelete('set null'); // soignant rédacteur
    $table->dateTime('record_date');
    $table->string('type'); // consultation, suivi, urgence, compte rendu, etc.
    $table->text('subjective')->nullable(); // motif / anamnèse
    $table->text('objective')->nullable(); // examen clinique
    $table->text('assessment')->nullable(); // diagnostic
    $table->text('plan')->nullable(); // conduite à tenir
    $table->json('vital_signs')->nullable(); // constantes
    $table->json('attachments')->nullable(); // liens vers documents
    $table->timestamps();
});

// migration : create_allergies_table (plus structuré)
Schema::create('allergies', function (Blueprint $table) {
    $table->id();
    $table->foreignId('patient_id')->constrained()->onDelete('cascade');
    $table->string('allergen');
    $table->string('reaction')->nullable();
    $table->string('severity')->nullable(); // mild, moderate, severe
    $table->text('notes')->nullable();
    $table->timestamps();
});

// migration : create_vital_signs_table (suivi des constantes)
Schema::create('vital_signs', function (Blueprint $table) {
    $table->id();
    $table->foreignId('patient_id')->constrained()->onDelete('cascade');
    $table->foreignId('admission_id')->nullable()->constrained()->onDelete('cascade');
    $table->foreignId('staff_id')->nullable()->constrained()->onDelete('set null');
    $table->dateTime('measured_at');
    $table->decimal('temperature', 4, 1)->nullable();
    $table->integer('heart_rate')->nullable();
    $table->integer('respiratory_rate')->nullable();
    $table->string('blood_pressure_systolic', 3)->nullable();
    $table->string('blood_pressure_diastolic', 3)->nullable();
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
    $table->foreignId('patient_id')->constrained()->onDelete('cascade');
    $table->foreignId('admission_id')->nullable()->constrained()->onDelete('cascade');
    $table->foreignId('prescriber_id')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('prescribed_at');
    $table->enum('status', ['active', 'completed', 'cancelled', 'expired'])->default('active');
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
    $table->enum('status', ['prescribed', 'dispensed', 'administered', 'stopped'])->default('prescribed');
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
    $table->integer('stock_quantity')->default(0);
    $table->integer('reorder_level')->default(10);
    $table->date('expiry_date')->nullable();
    $table->timestamps();
});
```

---

## 6. Pharmacie et gestion des stocks

```php
// migration : create_dispensing_records_table (administration / dispensation)
Schema::create('dispensing_records', function (Blueprint $table) {
    $table->id();
    $table->foreignId('prescription_item_id')->constrained()->onDelete('cascade');
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
    $table->foreignId('medication_id')->constrained()->onDelete('cascade');
    $table->enum('type', ['purchase', 'sale', 'adjustment', 'transfer_in', 'transfer_out']);
    $table->integer('quantity');
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
    $table->enum('status', ['draft', 'ordered', 'received', 'cancelled'])->default('draft');
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
    $table->decimal('total_price', 12, 2);
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
    $table->foreignId('patient_id')->constrained()->onDelete('cascade');
    $table->foreignId('admission_id')->nullable()->constrained()->onDelete('cascade');
    $table->foreignId('ordered_by')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('order_date');
    $table->enum('status', ['pending', 'sample_collected', 'in_progress', 'completed', 'cancelled'])->default('pending');
    $table->text('clinical_info')->nullable();
    $table->json('tests'); // liste des tests demandés
    $table->timestamps();
});

// migration : create_lab_results_table
Schema::create('lab_results', function (Blueprint $table) {
    $table->id();
    $table->foreignId('lab_order_id')->constrained()->onDelete('cascade');
    $table->string('test_name');
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
    $table->foreignId('patient_id')->constrained()->onDelete('cascade');
    $table->foreignId('admission_id')->nullable()->constrained()->onDelete('cascade');
    $table->foreignId('ordered_by')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('order_date');
    $table->string('imaging_type'); // X-ray, MRI, CT, Ultrasound
    $table->string('body_part')->nullable();
    $table->enum('status', ['pending', 'scheduled', 'performed', 'reported', 'cancelled'])->default('pending');
    $table->text('clinical_info')->nullable();
    $table->timestamps();
});

// migration : create_imaging_reports_table
Schema::create('imaging_reports', function (Blueprint $table) {
    $table->id();
    $table->foreignId('imaging_order_id')->constrained()->onDelete('cascade');
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
    $table->foreignId('patient_id')->constrained()->onDelete('cascade');
    $table->foreignId('admission_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('appointment_id')->nullable()->constrained()->onDelete('set null');
    $table->dateTime('invoice_date');
    $table->decimal('subtotal', 12, 2)->default(0);
    $table->decimal('discount', 12, 2)->default(0);
    $table->decimal('tax', 12, 2)->default(0);
    $table->decimal('total_amount', 12, 2)->default(0);
    $table->decimal('paid_amount', 12, 2)->default(0);
    $table->decimal('balance_due', 12, 2)->default(0);
    $table->enum('status', ['draft', 'issued', 'partially_paid', 'paid', 'overdue', 'cancelled'])->default('draft');
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
    $table->decimal('total_price', 12, 2);
    $table->foreignId('reference_id')->nullable(); // polymorphic link to source record
    $table->string('reference_type')->nullable();
    $table->timestamps();
});

// migration : create_payments_table
Schema::create('payments', function (Blueprint $table) {
    $table->id();
    $table->string('payment_code')->unique();
    $table->foreignId('invoice_id')->constrained()->onDelete('cascade');
    $table->dateTime('payment_date');
    $table->decimal('amount', 12, 2);
    $table->enum('payment_method', ['cash', 'credit_card', 'bank_transfer', 'insurance', 'mobile_money']);
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
    $table->foreignId('patient_id')->constrained()->onDelete('cascade');
    $table->foreignId('admission_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('surgeon_id')->nullable()->constrained('staff')->onDelete('set null');
    $table->dateTime('scheduled_at');
    $table->dateTime('end_at')->nullable();
    $table->string('surgery_type');
    $table->enum('status', ['scheduled', 'in_progress', 'completed', 'cancelled'])->default('scheduled');
    $table->foreignId('operating_room_id')->nullable()->constrained()->onDelete('set null');
    $table->text('notes')->nullable();
    $table->timestamps();
});

// migration : create_operating_rooms_table
Schema::create('operating_rooms', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('location')->nullable();
    $table->enum('status', ['available', 'occupied', 'cleaning', 'maintenance'])->default('available');
    $table->timestamps();
});

// migration : create_emergency_visits_table
Schema::create('emergency_visits', function (Blueprint $table) {
    $table->id();
    $table->foreignId('patient_id')->constrained()->onDelete('cascade');
    $table->dateTime('arrival_time');
    $table->string('triage_level')->nullable(); // 1-5
    $table->text('chief_complaint')->nullable();
    $table->enum('status', ['waiting', 'in_treatment', 'discharged', 'admitted', 'left_without_being_seen'])->default('waiting');
    $table->foreignId('attending_staff_id')->nullable()->constrained('staff')->onDelete('set null');
    $table->timestamps();
});
```

---

## Remarques importantes

- Toutes les migrations utilisent `foreignId()->constrained()` pour assurer l’intégrité référentielle.
- Des index supplémentaires peuvent être ajoutés avec `->index()` sur les colonnes fréquemment interrogées (ex: `patient_id`, `status`).
- Les colonnes `json` permettent de stocker des structures flexibles (ex: constantes, résultats de labo complexes).
- Pour une application réelle, il faudra ajouter des migrations pour la gestion des documents, des consentements, des audits, etc.
- Pensez à exécuter `php artisan migrate` après avoir créé ces fichiers.

Cette architecture est un point de départ solide. Elle peut être étendue en fonction des besoins spécifiques de l’hôpital.
