import { Head } from '@inertiajs/react';
import PageHeader from '@/components/page-header';
import PatientForm from '@/components/patients/patient-form';
import patients from '@/routes/patients';
import type { Option } from '@/types';

export default function PatientCreate({ genders }: { genders: Option[] }) {
    return (
        <>
            <Head title="Nouveau patient" />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title="Nouveau patient" />
                <PatientForm
                    form={patients.store.form()}
                    genders={genders}
                    submitLabel="Enregistrer"
                    cancelHref={patients.index()}
                />
            </div>
        </>
    );
}

PatientCreate.layout = {
    breadcrumbs: [
        { title: 'Patients', href: patients.index() },
        { title: 'Nouveau patient', href: patients.create() },
    ],
};
