import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import DataTable, { EmptyRow } from '@/components/data-table';
import PageHeader from '@/components/page-header';
import Pagination from '@/components/pagination';
import { Button } from '@/components/ui/button';
import medicalRecords from '@/routes/medical-records';
import patients from '@/routes/patients';
import type { Paginated } from '@/types';

type Props = {
    patient: { id: number; fullName: string };
    records: Paginated<{
        id: number;
        recordDate: string;
        type: string;
        staff: string | null;
    }>;
};

export default function MedicalRecordIndex({ patient, records }: Props) {
    return (
        <>
            <Head title={`Dossiers médicaux - ${patient.fullName}`} />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title={`Dossiers médicaux - ${patient.fullName}`}>
                    <Button asChild>
                        <Link href={medicalRecords.create(patient.id)}>
                            <Plus />
                            Nouvelle note
                        </Link>
                    </Button>
                </PageHeader>

                <DataTable>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Rédacteur</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.data.length === 0 && (
                            <EmptyRow colSpan={3}>Aucun dossier.</EmptyRow>
                        )}
                        {records.data.map((record) => (
                            <tr key={record.id}>
                                <td>{record.recordDate}</td>
                                <td>{record.type}</td>
                                <td>{record.staff ?? 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </DataTable>

                <Pagination links={records.links} />
            </div>
        </>
    );
}

MedicalRecordIndex.layout = (props: Props) => ({
    breadcrumbs: [
        { title: 'Patients', href: patients.index() },
        {
            title: props.patient.fullName,
            href: patients.show(props.patient.id),
        },
        {
            title: 'Dossiers médicaux',
            href: patients.medicalRecords.index(props.patient.id),
        },
    ],
});
