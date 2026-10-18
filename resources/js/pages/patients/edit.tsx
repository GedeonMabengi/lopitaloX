import { Head } from '@inertiajs/react';
import PageHeader from '@/components/page-header';
import PatientForm from '@/components/patients/patient-form';
import type { PatientFormValues } from '@/components/patients/patient-form';
import patients from '@/routes/patients';
import type { Option } from '@/types';

type Props = {
    patient: PatientFormValues & { id: number; fullName: string };
    genders: Option[];
};

export default function PatientEdit({ patient, genders }: Props) {
    return (
        <>
            <Head title={`Modifier ${patient.fullName}`} />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader
                    title={`Modifier le patient : ${patient.fullName}`}
                />
                <PatientForm
                    form={patients.update.form(patient.id)}
                    genders={genders}
                    patient={patient}
                    submitLabel="Mettre à jour"
                    cancelHref={patients.show(patient.id)}
                />
            </div>
        </>
    );
}

PatientEdit.layout = (props: Props) => ({
    breadcrumbs: [
        { title: 'Patients', href: patients.index() },
        {
            title: props.patient.fullName,
            href: patients.show(props.patient.id),
        },
        { title: 'Modifier', href: patients.edit(props.patient.id) },
    ],
});
