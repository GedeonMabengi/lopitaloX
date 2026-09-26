import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { dashboard } from '@/routes';

type Props = {
    totalProperties: number;
    activeLeases: number;
    monthlyIncome: string;
    pendingMaintenance: number;
    occupancyRate: number;
};

export default function Dashboard({ totalProperties, activeLeases, monthlyIncome, pendingMaintenance, occupancyRate }: Props) {
    const stats = [
        { label: 'Biens immobiliers', value: totalProperties },
        { label: 'Baux actifs', value: activeLeases },
        { label: 'Revenus du mois', value: `${Number(monthlyIncome ?? 0).toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €` },
        { label: 'Demandes en attente', value: pendingMaintenance },
    ];

    return (
        <>
            <Head title="Tableau de bord" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <Card key={stat.label}>
                            <CardContent className="pt-6">
                                <div className="text-2xl font-semibold">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Taux d'occupation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-primary" style={{ width: `${occupancyRate}%` }} />
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {Number(occupancyRate ?? 0).toFixed(1)} %
                        </p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [{ title: 'Tableau de bord', href: dashboard() }],
};
