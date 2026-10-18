import { Head, Link } from '@inertiajs/react';
import PageHeader from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import portal from '@/routes/portal';

type Props = {
    patient: { fullName: string };
    counts: {
        upcomingAppointments: number;
        medicalRecords: number;
        unpaidInvoices: number;
    };
};

export default function PortalDashboard({ patient, counts }: Props) {
    const tiles = [
        {
            label: 'Prochains RDV',
            value: counts.upcomingAppointments,
            href: portal.appointments(),
            link: 'Voir mes rendez-vous',
        },
        {
            label: 'Dossiers médicaux',
            value: counts.medicalRecords,
            href: portal.medicalRecords(),
            link: 'Voir mes dossiers',
        },
        {
            label: 'Factures impayées',
            value: counts.unpaidInvoices,
            href: portal.invoices(),
            link: 'Voir mes factures',
        },
    ];

    return (
        <>
            <Head title="Mon espace patient" />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title={`Bienvenue, ${patient.fullName}`} />

                <div className="grid gap-4 sm:grid-cols-3">
                    {tiles.map((tile) => (
                        <Card key={tile.label}>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {tile.label}
                                </p>
                                <p className="mt-1 text-2xl font-semibold">
                                    {tile.value}
                                </p>
                                <Link
                                    href={tile.href}
                                    className="mt-2 inline-block text-sm text-primary hover:underline"
                                >
                                    {tile.link} →
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

PortalDashboard.layout = {
    breadcrumbs: [{ title: 'Mon espace', href: portal.dashboard() }],
};
