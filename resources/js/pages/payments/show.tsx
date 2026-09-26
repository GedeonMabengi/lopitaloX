import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PaymentShow({ payment }: { payment: any }) {
    const item = payment;

    return (
        <>
            <Head title="Paiement #{item.id}" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Paiement #{item.id}</h1>
                    <Button asChild variant="outline">
                        <Link href={`/payments/${item.id}/edit`}>Modifier</Link>
                    </Button>
                </div>
                <Card>
                    <CardHeader><CardTitle>Détails</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
<p><strong>Bail :</strong> {String((item as any).lease_id ?? '')}</p>
<p><strong>Montant :</strong> {String((item as any).amount ?? '')}</p>
<p><strong>Date :</strong> {String((item as any).payment_date ?? '')}</p>
<p><strong>Méthode :</strong> {String((item as any).method ?? '')}</p>
<p><strong>Référence :</strong> {String((item as any).reference ?? '')}</p>
<p><strong>Statut :</strong> {String((item as any).status ?? '')}</p>
<p><strong>Reçu par :</strong> {String((item as any).received_by ?? '')}</p>
<p><strong>Note :</strong> {String((item as any).note ?? '')}</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
