import { Head } from '@inertiajs/react';
import DataTable, { EmptyRow } from '@/components/data-table';
import PageHeader from '@/components/page-header';
import Pagination from '@/components/pagination';
import StatusBadge from '@/components/status-badge';
import portal from '@/routes/portal';
import type { Option, Paginated } from '@/types';

type Props = {
    appointments: Paginated<{
        id: number;
        scheduledAt: string;
        staff: string | null;
        status: Option;
    }>;
};

export default function PortalAppointments({ appointments }: Props) {
    return (
        <>
            <Head title="Mes rendez-vous" />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title="Mes rendez-vous" />

                <DataTable>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Médecin</th>
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.data.length === 0 && (
                            <EmptyRow colSpan={3}>Aucun rendez-vous.</EmptyRow>
                        )}
                        {appointments.data.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>{appointment.scheduledAt}</td>
                                <td>{appointment.staff ?? 'Non assigné'}</td>
                                <td>
                                    <StatusBadge status={appointment.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </DataTable>

                <Pagination links={appointments.links} />
            </div>
        </>
    );
}

PortalAppointments.layout = {
    breadcrumbs: [
        { title: 'Mon espace', href: portal.dashboard() },
        { title: 'Mes rendez-vous', href: portal.appointments() },
    ],
};
