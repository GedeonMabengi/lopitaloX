import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TenantDashboard({ activeLease, upcomingPayments }: { activeLease: any; upcomingPayments: any[] }) {
    return (
        <>
            <Head title="Mon espace locataire" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Mon espace locataire</h1>

                {activeLease ? (
                    <Card>
                        <CardHeader><CardTitle>Bail actif</CardTitle></CardHeader>
                        <CardContent className="space-y-1">
                            <p>Bien : {activeLease.property_unit?.property?.name} - {activeLease.property_unit?.unit_number}</p>
                            <p>Loyer mensuel : {Number(activeLease.rent_amount ?? 0).toFixed(2)} €</p>
                        </CardContent>
                    </Card>
                ) : (
                    <p>Aucun bail actif.</p>
                )}

                <Card>
                    <CardHeader><CardTitle>Factures à venir</CardTitle></CardHeader>
                    <CardContent className="space-y-2">
                        {(upcomingPayments ?? []).map((invoice: any) => (
                            <p key={invoice.id}>Facture due le {invoice.due_date} : {Number(invoice.total_amount ?? 0).toFixed(2)} €</p>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
