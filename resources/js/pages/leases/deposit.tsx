import { Head, Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LeaseDeposit({ lease }: { lease: any }) {
    const deposit = lease.security_deposits?.[0];

    return (
        <>
            <Head title={`Dépôt de garantie - Bail #${lease.id}`} />
            <div className="mx-auto max-w-2xl space-y-4 p-4">
                <h1 className="text-2xl font-semibold">Dépôt de garantie - Bail #{lease.id}</h1>

                <Card>
                    <CardHeader><CardTitle>État</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
                        {deposit ? (
                            <>
                                <p><strong>Montant :</strong> {Number(deposit.amount ?? 0).toFixed(2)} €</p>
                                <p><strong>Statut :</strong> {deposit.status}</p>
                                {deposit.returned_date && <p><strong>Restitué le :</strong> {deposit.returned_date}</p>}
                            </>
                        ) : (
                            <p>Aucun dépôt enregistré.</p>
                        )}
                    </CardContent>
                </Card>

                <Form action={`/leases/${lease.id}/deposit/return`} method="post" className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="returned_date">Date de restitution</Label>
                        <Input id="returned_date" type="date" name="returned_date" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="returned_amount">Montant restitué</Label>
                        <Input id="returned_amount" type="number" step="0.01" name="returned_amount" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="deductions">Déductions</Label>
                        <Input id="deductions" type="number" step="0.01" name="deductions" />
                    </div>
                    <Button type="submit">Restituer</Button>
                </Form>
            </div>
        </>
    );
}
