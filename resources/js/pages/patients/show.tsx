import { Head, Link } from '@inertiajs/react';
import { CalendarPlus, NotebookPen, Pencil } from 'lucide-react';
import PageHeader from '@/components/page-header';
import StatusBadge from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import appointments from '@/routes/appointments';
import medicalRecords from '@/routes/medical-records';
import patients from '@/routes/patients';
import type { Option } from '@/types';

type Props = {
    patient: {
        id: number;
        fullName: string;
        code: string;
        dateOfBirth: string;
        gender: string;
        bloodGroup: string | null;
        phone: string | null;
        email: string | null;
        address: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        allergies: { id: number; allergen: string; severity: string | null }[];
        medicalRecords: { id: number; type: string; recordDate: string }[];
        admissions: { id: number; admissionDate: string; status: Option }[];
    };
};

export default function PatientShow({ patient }: Props) {
    const details: [string, string | null][] = [
        ['Code', patient.code],
        ['Date de naissance', patient.dateOfBirth],
        ['Genre', patient.gender],
        ['Groupe sanguin', patient.bloodGroup],
        ['Téléphone', patient.phone],
        ['Email', patient.email],
        ['Adresse', patient.address],
        [
            'Contact urgence',
            patient.emergencyContactName &&
                `${patient.emergencyContactName} (${patient.emergencyContactPhone ?? '-'})`,
        ],
    ];

    return (
        <>
            <Head title={patient.fullName} />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title={patient.fullName}>
                    <Button variant="outline" asChild>
                        <Link href={patients.edit(patient.id)}>
                            <Pencil />
                            Modifier
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link
                            href={appointments.create({
                                query: { patient_id: patient.id },
                            })}
                        >
                            <CalendarPlus />
                            Prendre RDV
                        </Link>
                    </Button>
                </PageHeader>

                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Informations personnelles</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
                                    {details.map(([label, value]) => (
                                        <div key={label} className="contents">
                                            <dt className="text-muted-foreground">
                                                {label}
                                            </dt>
                                            <dd>{value ?? 'N/A'}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Allergies</CardTitle>
                            </CardHeader>
                            <CardContent className="divide-y text-sm">
                                {patient.allergies.length === 0 && (
                                    <p className="text-muted-foreground">
                                        Aucune allergie enregistrée.
                                    </p>
                                )}
                                {patient.allergies.map((allergy) => (
                                    <p
                                        key={allergy.id}
                                        className="py-2 first:pt-0 last:pb-0"
                                    >
                                        {allergy.allergen}
                                        {allergy.severity && (
                                            <span className="text-muted-foreground">
                                                {' '}
                                                - {allergy.severity}
                                            </span>
                                        )}
                                    </p>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>
                                    Derniers dossiers médicaux
                                </CardTitle>
                                <div className="flex gap-1">
                                    <Button variant="ghost" size="sm" asChild>
                                        <Link
                                            href={patients.medicalRecords.index(
                                                patient.id,
                                            )}
                                        >
                                            Tout voir
                                        </Link>
                                    </Button>
                                    <Button variant="ghost" size="sm" asChild>
                                        <Link
                                            href={medicalRecords.create(
                                                patient.id,
                                            )}
                                        >
                                            <NotebookPen />
                                            Nouvelle note
                                        </Link>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="divide-y text-sm">
                                {patient.medicalRecords.length === 0 && (
                                    <p className="text-muted-foreground">
                                        Aucun dossier médical.
                                    </p>
                                )}
                                {patient.medicalRecords.map((record) => (
                                    <p
                                        key={record.id}
                                        className="py-2 first:pt-0 last:pb-0"
                                    >
                                        {record.type} - {record.recordDate}
                                    </p>
                                ))}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Admissions</CardTitle>
                            </CardHeader>
                            <CardContent className="divide-y text-sm">
                                {patient.admissions.length === 0 && (
                                    <p className="text-muted-foreground">
                                        Aucune admission.
                                    </p>
                                )}
                                {patient.admissions.map((admission) => (
                                    <div
                                        key={admission.id}
                                        className="flex items-center justify-between py-2 first:pt-0 last:pb-0"
                                    >
                                        <span>{admission.admissionDate}</span>
                                        <StatusBadge
                                            status={admission.status}
                                        />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

PatientShow.layout = (props: Props) => ({
    breadcrumbs: [
        { title: 'Patients', href: patients.index() },
        {
            title: props.patient.fullName,
            href: patients.show(props.patient.id),
        },
    ],
});
