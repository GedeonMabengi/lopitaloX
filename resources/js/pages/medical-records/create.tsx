import { Form, Head, Link } from '@inertiajs/react';
import FormField from '@/components/form-field';
import NativeSelect from '@/components/native-select';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import medicalRecords from '@/routes/medical-records';
import patients from '@/routes/patients';
import type { Option } from '@/types';

type Props = {
    patient: { id: number; fullName: string };
    admissions: Option[];
    now: string;
};

const notes = [
    { name: 'subjective', label: 'Anamnèse / Motif', rows: 3 },
    { name: 'objective', label: 'Examen clinique', rows: 3 },
    { name: 'assessment', label: 'Diagnostic', rows: 2 },
    { name: 'plan', label: 'Conduite à tenir', rows: 2 },
] as const;

export default function MedicalRecordCreate({
    patient,
    admissions,
    now,
}: Props) {
    return (
        <>
            <Head title="Nouvelle note médicale" />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title={`Nouvelle note pour ${patient.fullName}`} />

                <Form
                    {...medicalRecords.store.form()}
                    className="max-w-3xl space-y-6"
                >
                    {({ errors, processing }) => (
                        <>
                            <input
                                type="hidden"
                                name="patient_id"
                                value={patient.id}
                            />

                            <div className="grid gap-6 sm:grid-cols-2">
                                <FormField
                                    label="Date"
                                    name="record_date"
                                    error={errors.record_date}
                                >
                                    <Input
                                        id="record_date"
                                        name="record_date"
                                        type="datetime-local"
                                        defaultValue={now}
                                        required
                                    />
                                </FormField>
                                <FormField
                                    label="Type"
                                    name="type"
                                    error={errors.type}
                                >
                                    <Input
                                        id="type"
                                        name="type"
                                        defaultValue="Consultation"
                                        required
                                    />
                                </FormField>
                            </div>

                            <FormField
                                label="Admission liée"
                                name="admission_id"
                                error={errors.admission_id}
                            >
                                <NativeSelect
                                    id="admission_id"
                                    name="admission_id"
                                    options={admissions}
                                    placeholder="Aucune"
                                />
                            </FormField>

                            {notes.map((note) => (
                                <FormField
                                    key={note.name}
                                    label={note.label}
                                    name={note.name}
                                    error={errors[note.name]}
                                >
                                    <Textarea
                                        id={note.name}
                                        name={note.name}
                                        rows={note.rows}
                                    />
                                </FormField>
                            ))}

                            <div className="flex gap-2">
                                <Button type="submit" disabled={processing}>
                                    Enregistrer
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link
                                        href={patients.medicalRecords.index(
                                            patient.id,
                                        )}
                                    >
                                        Annuler
                                    </Link>
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </>
    );
}

MedicalRecordCreate.layout = (props: Props) => ({
    breadcrumbs: [
        { title: 'Patients', href: patients.index() },
        {
            title: props.patient.fullName,
            href: patients.show(props.patient.id),
        },
        {
            title: 'Nouvelle note',
            href: medicalRecords.create(props.patient.id),
        },
    ],
});
