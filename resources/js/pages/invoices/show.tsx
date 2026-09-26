import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InvoiceShow({ invoice }: { invoice: any }) {
    const item = invoice;

    return (
        <>
            <Head title="Facture #{item.id}" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Facture #{item.id}</h1>
                    <Button asChild variant="outline">
                        <Link href={`/invoices/${item.id}/edit`}>Modifier</Link>
                    </Button>
                </div>
                <Card>
                    <CardHeader><CardTitle>Détails</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
<p><strong>Bail :</strong> {String((item as any).lease_id ?? '')}</p>
<p><strong>Début de période :</strong> {String((item as any).period_start ?? '')}</p>
<p><strong>Fin de période :</strong> {String((item as any).period_end ?? '')}</p>
<p><strong>Montant :</strong> {String((item as any).amount ?? '')}</p>
<p><strong>Charges :</strong> {String((item as any).charges_amount ?? '')}</p>
<p><strong>Total :</strong> {String((item as any).total_amount ?? '')}</p>
<p><strong>Statut :</strong> {String((item as any).status ?? '')}</p>
<p><strong>Échéance :</strong> {String((item as any).due_date ?? '')}</p>
<p><strong>Émise le :</strong> {String((item as any).issued_at ?? '')}</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
