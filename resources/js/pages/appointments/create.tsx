import { Form, Head, Link } from '@inertiajs/react';
import FormField from '@/components/form-field';
import NativeSelect from '@/components/native-select';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import appointments from '@/routes/appointments';
import type { Option } from '@/types';

type Props = {
    patients: Option[];
    staff: Option[];
    departments: Option[];
    selectedPatientId: number | null;
};

export default function AppointmentCreate({
    patients,
    staff,
    departments,
    selectedPatientId,
}: Props) {
    return (
        <>
            <Head title="Nouveau rendez-vous" />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title="Nouveau rendez-vous" />

                <Form
                    {...appointments.store.form()}
                    className="max-w-3xl space-y-6"
                >
                    {({ errors, processing }) => (
                        <>
                            <FormField
                                label="Patient"
                                name="patient_id"
                                error={errors.patient_id}
                            >
                                <NativeSelect
                                    id="patient_id"
                                    name="patient_id"
                                    options={patients}
                                    placeholder="Sélectionner un patient"
                                    defaultValue={
                                        selectedPatientId?.toString() ?? ''
                                    }
                                    required
                                />
                            </FormField>

                            <FormField
                                label="Médecin"
                                name="staff_id"
                                error={errors.staff_id}
                            >
                                <NativeSelect
                                    id="staff_id"
                                    name="staff_id"
                                    options={staff}
                                    placeholder="Non assigné"
                                />
                            </FormField>

                            <FormField
                                label="Service"
                                name="department_id"
                                error={errors.department_id}
                            >
                                <NativeSelect
                                    id="department_id"
                                    name="department_id"
                                    options={departments}
                                    placeholder="Sélectionner..."
                                />
                            </FormField>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <FormField
                                    label="Date et heure"
                                    name="scheduled_at"
                                    error={errors.scheduled_at}
                                >
                                    <Input
                                        id="scheduled_at"
                                        name="scheduled_at"
                                        type="datetime-local"
                                        required
                                    />
                                </FormField>
                                <FormField
                                    label="Fin prévue"
                                    name="end_at"
                                    error={errors.end_at}
                                >
                                    <Input
                                        id="end_at"
                                        name="end_at"
                                        type="datetime-local"
                                    />
                                </FormField>
                            </div>

                            <FormField
                                label="Motif"
                                name="reason"
                                error={errors.reason}
                            >
                                <Textarea id="reason" name="reason" rows={2} />
                            </FormField>

                            <FormField
                                label="Notes"
                                name="notes"
                                error={errors.notes}
                            >
                                <Textarea id="notes" name="notes" rows={2} />
                            </FormField>

                            <div className="flex gap-2">
                                <Button type="submit" disabled={processing}>
                                    Enregistrer
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href={appointments.index()}>
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

AppointmentCreate.layout = {
    breadcrumbs: [
        { title: 'Rendez-vous', href: appointments.index() },
        { title: 'Nouveau rendez-vous', href: appointments.create() },
    ],
};
