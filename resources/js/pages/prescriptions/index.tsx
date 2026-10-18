import { Head, Link } from '@inertiajs/react';
import { Eye } from 'lucide-react';
import DataTable, { EmptyRow } from '@/components/data-table';
import PageHeader from '@/components/page-header';
import Pagination from '@/components/pagination';
import StatusBadge from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import prescriptions from '@/routes/prescriptions';
import type { Option, Paginated } from '@/types';

type PrescriptionRow = {
    id: number;
    prescribedAt: string;
    patient: string;
    prescriber: string | null;
    status: Option;
};

export default function PrescriptionIndex({
    prescriptions: list,
}: {
    prescriptions: Paginated<PrescriptionRow>;
}) {
    return (
        <>
            <Head title="Prescriptions" />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title="Prescriptions" />

                <DataTable>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Patient</th>
                            <th>Prescripteur</th>
                            <th>Statut</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.data.length === 0 && (
                            <EmptyRow colSpan={5}>
                                Aucune prescription.
                            </EmptyRow>
                        )}
                        {list.data.map((prescription) => (
                            <tr key={prescription.id}>
                                <td>{prescription.prescribedAt}</td>
                                <td className="font-medium">
                                    {prescription.patient}
                                </td>
                                <td>{prescription.prescriber ?? 'N/A'}</td>
                                <td>
                                    <StatusBadge status={prescription.status} />
                                </td>
                                <td>
                                    <div className="flex justify-end">
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="icon"
                                            aria-label="Voir"
                                        >
                                            <Link
                                                href={prescriptions.show(
                                                    prescription.id,
                                                )}
                                            >
                                                <Eye />
                                            </Link>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </DataTable>

                <Pagination links={list.links} />
            </div>
        </>
    );
}

PrescriptionIndex.layout = {
    breadcrumbs: [{ title: 'Prescriptions', href: prescriptions.index() }],
};
