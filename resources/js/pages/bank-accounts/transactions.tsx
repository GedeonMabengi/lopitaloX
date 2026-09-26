import { Head } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import { Card, CardContent } from '@/components/ui/card';

export default function BankAccountTransactions({ account, transactions }: { account: any; transactions: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title={`Transactions - ${account.bank_name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Transactions - {account.bank_name}</h1>
                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Date</th>
                                    <th className="px-4 py-2 text-left font-medium">Libellé</th>
                                    <th className="px-4 py-2 text-left font-medium">Montant</th>
                                    <th className="px-4 py-2 text-left font-medium">Rapprochée</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {transactions.data.map((t) => (
                                    <tr key={t.id}>
                                        <td className="px-4 py-2">{t.date}</td>
                                        <td className="px-4 py-2">{t.label}</td>
                                        <td className="px-4 py-2">{Number(t.amount ?? 0).toFixed(2)} €</td>
                                        <td className="px-4 py-2">{t.reconciled ? 'Oui' : 'Non'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
                <Pagination links={transactions.links} />
            </div>
        </>
    );
}
