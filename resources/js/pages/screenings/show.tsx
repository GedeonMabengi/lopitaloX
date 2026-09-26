import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ScreeningShow({ tenant, screening }: { tenant: any; screening: any }) {
    return (
        <>
            <Head title={`Vérification - ${tenant.first_name} ${tenant.last_name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Vérification - {tenant.first_name} {tenant.last_name}</h1>

                <Card>
                    <CardHeader><CardTitle>Statut</CardTitle></CardHeader>
                    <CardContent>{screening.status}</CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Rapports</CardTitle></CardHeader>
                    <CardContent className="space-y-2">
                        {(screening.reports ?? []).map((report: any) => (
                            <div key={report.id} className="rounded-md border p-3 text-sm">
                                <p>Score de crédit : {report.credit_score}</p>
                                <p>Revenus vérifiés : {report.income_verified ? 'Oui' : 'Non'}</p>
                                <p>Casier judiciaire : {report.criminal_record ? 'Oui' : 'Non'}</p>
                                <p>Historique d'expulsion : {report.eviction_history ? 'Oui' : 'Non'}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
