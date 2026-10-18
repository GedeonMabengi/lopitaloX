import { Form, Link } from '@inertiajs/react';
import FormField from '@/components/form-field';
import NativeSelect from '@/components/native-select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Option } from '@/types';
import type { RouteDefinition, RouteFormDefinition } from '@/wayfinder';

export type PatientFormValues = {
    first_name: string;
    last_name: string;
    date_of_birth: string;
    gender: string;
    blood_group: string | null;
    phone: string | null;
    email: string | null;
    address: string | null;
    emergency_contact_name: string | null;
    emergency_contact_phone: string | null;
    medical_history: string | null;
};

type Props = {
    form: RouteFormDefinition<'post'>;
    genders: Option[];
    patient?: Partial<PatientFormValues>;
    submitLabel: string;
    cancelHref: RouteDefinition<'get'>;
};

/** Formulaire commun à la création et à la modification d'un patient. */
export default function PatientForm({
    form,
    genders,
    patient = {},
    submitLabel,
    cancelHref,
}: Props) {
    return (
        <Form {...form} className="max-w-4xl space-y-6">
            {({ errors, processing }) => (
                <>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                            label="Prénom"
                            name="first_name"
                            error={errors.first_name}
                        >
                            <Input
                                id="first_name"
                                name="first_name"
                                defaultValue={patient.first_name}
                                required
                            />
                        </FormField>
                        <FormField
                            label="Nom"
                            name="last_name"
                            error={errors.last_name}
                        >
                            <Input
                                id="last_name"
                                name="last_name"
                                defaultValue={patient.last_name}
                                required
                            />
                        </FormField>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3">
                        <FormField
                            label="Date de naissance"
                            name="date_of_birth"
                            error={errors.date_of_birth}
                        >
                            <Input
                                id="date_of_birth"
                                name="date_of_birth"
                                type="date"
                                defaultValue={patient.date_of_birth}
                                required
                            />
                        </FormField>
                        <FormField
                            label="Genre"
                            name="gender"
                            error={errors.gender}
                        >
                            <NativeSelect
                                id="gender"
                                name="gender"
                                options={genders}
                                placeholder="Sélectionner..."
                                defaultValue={patient.gender ?? ''}
                                required
                            />
                        </FormField>
                        <FormField
                            label="Groupe sanguin"
                            name="blood_group"
                            error={errors.blood_group}
                        >
                            <Input
                                id="blood_group"
                                name="blood_group"
                                defaultValue={patient.blood_group ?? ''}
                                maxLength={5}
                            />
                        </FormField>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                            label="Téléphone"
                            name="phone"
                            error={errors.phone}
                        >
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                defaultValue={patient.phone ?? ''}
                            />
                        </FormField>
                        <FormField
                            label="Email"
                            name="email"
                            error={errors.email}
                        >
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                defaultValue={patient.email ?? ''}
                            />
                        </FormField>
                    </div>

                    <FormField
                        label="Adresse"
                        name="address"
                        error={errors.address}
                    >
                        <Textarea
                            id="address"
                            name="address"
                            rows={2}
                            defaultValue={patient.address ?? ''}
                        />
                    </FormField>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                            label="Contact d'urgence (nom)"
                            name="emergency_contact_name"
                            error={errors.emergency_contact_name}
                        >
                            <Input
                                id="emergency_contact_name"
                                name="emergency_contact_name"
                                defaultValue={
                                    patient.emergency_contact_name ?? ''
                                }
                            />
                        </FormField>
                        <FormField
                            label="Contact d'urgence (téléphone)"
                            name="emergency_contact_phone"
                            error={errors.emergency_contact_phone}
                        >
                            <Input
                                id="emergency_contact_phone"
                                name="emergency_contact_phone"
                                type="tel"
                                defaultValue={
                                    patient.emergency_contact_phone ?? ''
                                }
                            />
                        </FormField>
                    </div>

                    <FormField
                        label="Antécédents médicaux"
                        name="medical_history"
                        error={errors.medical_history}
                    >
                        <Textarea
                            id="medical_history"
                            name="medical_history"
                            rows={3}
                            defaultValue={patient.medical_history ?? ''}
                        />
                    </FormField>

                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing}>
                            {submitLabel}
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={cancelHref}>Annuler</Link>
                        </Button>
                    </div>
                </>
            )}
        </Form>
    );
}
