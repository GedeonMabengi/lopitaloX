import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';

export default function TenantPayments({ payments }: { payments: any[] }) {
    return (
        <>
            <Head title="Mes paiements" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Mes paiements</h1>
                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Date</th>
                                    <th className="px-4 py-2 text-left font-medium">Montant</th>
                                    <th className="px-4 py-2 text-left font-medium">Statut</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {(payments ?? []).map((payment) => (
                                    <tr key={payment.id}>
                                        <td className="px-4 py-2">{payment.payment_date}</td>
                                        <td className="px-4 py-2">{Number(payment.amount ?? 0).toFixed(2)} €</td>
                                        <td className="px-4 py-2">{payment.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
