import { Form, Head, Link } from '@inertiajs/react';
import { Check, Plus } from 'lucide-react';
import DataTable, { EmptyRow } from '@/components/data-table';
import NativeSelect from '@/components/native-select';
import PageHeader from '@/components/page-header';
import Pagination from '@/components/pagination';
import StatusBadge from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import appointments from '@/routes/appointments';
import type { Option, Paginated } from '@/types';

type AppointmentRow = {
    id: number;
    scheduledAt: string;
    patient: string;
    staff: string | null;
    department: string | null;
    status: Option;
};

type Props = {
    appointments: Paginated<AppointmentRow>;
    statuses: Option[];
    filters: { date?: string; status?: string };
};

export default function AppointmentIndex({
    appointments: list,
    statuses,
    filters,
}: Props) {
    return (
        <>
            <Head title="Rendez-vous" />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title="Rendez-vous">
                    <Button asChild>
                        <Link href={appointments.create()}>
                            <Plus />
                            Nouveau RDV
                        </Link>
                    </Button>
                </PageHeader>

                <Form
                    {...appointments.index.form()}
                    options={{ preserveState: true }}
                    className="flex flex-wrap items-end gap-2"
                >
                    <Input
                        type="date"
                        name="date"
                        defaultValue={filters.date ?? ''}
                        className="w-full sm:w-48"
                        aria-label="Date"
                    />
                    <NativeSelect
                        name="status"
                        options={statuses}
                        placeholder="Tous les statuts"
                        defaultValue={filters.status ?? ''}
                        className="w-full sm:w-56"
                        aria-label="Statut"
                    />
                    <Button type="submit" variant="outline">
                        Filtrer
                    </Button>
                </Form>

                <DataTable>
                    <thead>
                        <tr>
                            <th>Date/heure</th>
                            <th>Patient</th>
                            <th>Médecin</th>
                            <th>Service</th>
                            <th>Statut</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.data.length === 0 && (
                            <EmptyRow colSpan={6}>Aucun rendez-vous.</EmptyRow>
                        )}
                        {list.data.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>{appointment.scheduledAt}</td>
                                <td className="font-medium">
                                    {appointment.patient}
                                </td>
                                <td>{appointment.staff ?? 'Non assigné'}</td>
                                <td>{appointment.department ?? 'N/A'}</td>
                                <td>
                                    <StatusBadge status={appointment.status} />
                                </td>
                                <td>
                                    <div className="flex justify-end">
                                        {appointment.status.value ===
                                            'pending' && (
                                            <Button
                                                asChild
                                                variant="outline"
                                                size="sm"
                                            >
                                                <Link
                                                    href={appointments.confirm(
                                                        appointment.id,
                                                    )}
                                                    as="button"
                                                    preserveScroll
                                                >
                                                    <Check />
                                                    Confirmer
                                                </Link>
                                            </Button>
                                        )}
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

AppointmentIndex.layout = {
    breadcrumbs: [{ title: 'Rendez-vous', href: appointments.index() }],
};
