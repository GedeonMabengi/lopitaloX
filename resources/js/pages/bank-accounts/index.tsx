import { Head, Link, Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function BankAccountIndex({ accounts }: { accounts: any[] }) {
    return (
        <>
            <Head title="Comptes bancaires" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Comptes bancaires</h1>
                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Banque</th>
                                    <th className="px-4 py-2 text-left font-medium">Numéro</th>
                                    <th className="px-4 py-2 text-left font-medium">Devise</th>
                                    <th className="px-4 py-2 text-left font-medium">Importer (CSV)</th>
                                    <th className="px-4 py-2 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {accounts.map((account) => (
                                    <tr key={account.id}>
                                        <td className="px-4 py-2">{account.bank_name}</td>
                                        <td className="px-4 py-2">{account.account_number}</td>
                                        <td className="px-4 py-2">{account.currency}</td>
                                        <td className="px-4 py-2">
                                            <Form action={`/bank-accounts/${account.id}/sync`} method="post" className="flex items-center gap-2">
                                                <input type="file" name="file" accept=".csv,.txt" className="text-xs" />
                                                <Button type="submit" variant="outline" size="sm">Importer</Button>
                                            </Form>
                                        </td>
                                        <td className="px-4 py-2 text-right">
                                            <Button asChild variant="outline" size="sm">
                                                <Link href={`/bank-accounts/${account.id}/transactions`}>Transactions</Link>
                                            </Button>
                                        </td>
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

BankAccountIndex.layout = { breadcrumbs: [{ title: 'Comptes bancaires', href: '/bank-accounts' }] };
