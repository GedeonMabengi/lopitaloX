import { Head, Link } from '@inertiajs/react';
import { BedDouble, CalendarDays, Euro, Users } from 'lucide-react';
import PageHeader from '@/components/page-header';
import StatusBadge from '@/components/status-badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { dashboard } from '@/routes';
import appointments from '@/routes/appointments';
import invoices from '@/routes/invoices';
import patients from '@/routes/patients';
import type { Option } from '@/types';

type Props = {
    stats: {
        totalPatients: number;
        appointmentsToday: number;
        activeAdmissions: number;
        revenueThisMonth: number;
    };
    upcomingAppointments: {
        id: number;
        patient: string;
        staff: string | null;
        scheduledAt: string;
        status: Option;
    }[];
    recentPatients: {
        id: number;
        fullName: string;
        code: string;
        createdAt: string;
    }[];
};

const currency = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
});

export default function Dashboard({
    stats,
    upcomingAppointments,
    recentPatients,
}: Props) {
    const tiles = [
        {
            label: 'Patients',
            value: stats.totalPatients,
            icon: Users,
            href: patients.index(),
        },
        {
            label: "RDV aujourd'hui",
            value: stats.appointmentsToday,
            icon: CalendarDays,
            href: appointments.index(),
        },
        {
            label: 'Hospitalisations actives',
            value: stats.activeAdmissions,
            icon: BedDouble,
            href: null,
        },
        {
            label: 'Revenus ce mois',
            value: currency.format(stats.revenueThisMonth),
            icon: Euro,
            href: invoices.index(),
        },
    ];

    return (
        <>
            <Head title="Tableau de bord" />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title="Tableau de bord" />

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {tiles.map((tile) => (
                        <Card key={tile.label}>
                            <CardContent className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        {tile.label}
                                    </p>
                                    <p className="mt-1 text-2xl font-semibold">
                                        {tile.value}
                                    </p>
                                    {tile.href && (
                                        <Link
                                            href={tile.href}
                                            className="mt-2 inline-block text-sm text-primary hover:underline"
                                        >
                                            Voir le détail →
                                        </Link>
                                    )}
                                </div>
                                <tile.icon className="size-5 text-muted-foreground" />
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Prochains rendez-vous</CardTitle>
                        </CardHeader>
                        <CardContent className="divide-y">
                            {upcomingAppointments.length === 0 && (
                                <p className="text-sm text-muted-foreground">
                                    Aucun rendez-vous à venir.
                                </p>
                            )}
                            {upcomingAppointments.map((appointment) => (
                                <div
                                    key={appointment.id}
                                    className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                                >
                                    <div>
                                        <p className="font-medium">
                                            {appointment.patient}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {appointment.scheduledAt} -{' '}
                                            {appointment.staff ?? 'Non assigné'}
                                        </p>
                                    </div>
                                    <StatusBadge status={appointment.status} />
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Derniers patients enregistrés</CardTitle>
                        </CardHeader>
                        <CardContent className="divide-y">
                            {recentPatients.length === 0 && (
                                <p className="text-sm text-muted-foreground">
                                    Aucun patient enregistré.
                                </p>
                            )}
                            {recentPatients.map((patient) => (
                                <div
                                    key={patient.id}
                                    className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                                >
                                    <p>
                                        <Link
                                            href={patients.show(patient.id)}
                                            className="font-medium text-primary hover:underline"
                                        >
                                            {patient.fullName}
                                        </Link>{' '}
                                        <span className="text-sm text-muted-foreground">
                                            ({patient.code})
                                        </span>
                                    </p>
                                    <span className="text-sm text-muted-foreground">
                                        {patient.createdAt}
                                    </span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [{ title: 'Tableau de bord', href: dashboard() }],
};
