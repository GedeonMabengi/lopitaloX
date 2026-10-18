import { Head } from '@inertiajs/react';
import DataTable, { EmptyRow } from '@/components/data-table';
import PageHeader from '@/components/page-header';
import StatusBadge from '@/components/status-badge';
import { Card, CardContent } from '@/components/ui/card';
import prescriptions from '@/routes/prescriptions';
import type { Option } from '@/types';

type Props = {
    prescription: {
        id: number;
        patient: string;
        prescribedAt: string;
        prescriber: string | null;
        status: Option;
        notes: string | null;
        items: {
            id: number;
            medication: string | null;
            dosage: string | null;
            frequency: string | null;
            duration: string | null;
            status: Option;
        }[];
    };
};

export default function PrescriptionShow({ prescription }: Props) {
    return (
        <>
            <Head title={`Prescription #${prescription.id}`} />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title={`Prescription #${prescription.id}`} />

                <Card>
                    <CardContent>
                        <dl className="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-2 text-sm">
                            <dt className="text-muted-foreground">Patient</dt>
                            <dd>{prescription.patient}</dd>
                            <dt className="text-muted-foreground">
                                Prescrit le
                            </dt>
                            <dd>{prescription.prescribedAt}</dd>
                            <dt className="text-muted-foreground">
                                Prescripteur
                            </dt>
                            <dd>{prescription.prescriber ?? 'N/A'}</dd>
                            <dt className="text-muted-foreground">Statut</dt>
                            <dd>
                                <StatusBadge status={prescription.status} />
                            </dd>
                            {prescription.notes && (
                                <>
                                    <dt className="text-muted-foreground">
                                        Notes
                                    </dt>
                                    <dd>{prescription.notes}</dd>
                                </>
                            )}
                        </dl>
                    </CardContent>
                </Card>

                <h2 className="text-lg font-semibold">Médicaments prescrits</h2>
                <DataTable>
                    <thead>
                        <tr>
                            <th>Médicament</th>
                            <th>Dosage</th>
                            <th>Fréquence</th>
                            <th>Durée</th>
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prescription.items.length === 0 && (
                            <EmptyRow colSpan={5}>Aucun médicament.</EmptyRow>
                        )}
                        {prescription.items.map((item) => (
                            <tr key={item.id}>
                                <td className="font-medium">
                                    {item.medication}
                                </td>
                                <td>{item.dosage}</td>
                                <td>{item.frequency}</td>
                                <td>{item.duration}</td>
                                <td>
                                    <StatusBadge status={item.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </DataTable>
            </div>
        </>
    );
}

PrescriptionShow.layout = (props: Props) => ({
    breadcrumbs: [
        { title: 'Prescriptions', href: prescriptions.index() },
        {
            title: `#${props.prescription.id}`,
            href: prescriptions.show(props.prescription.id),
        },
    ],
});
