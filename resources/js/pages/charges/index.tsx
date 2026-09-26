import { Head, Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ChargeIndex({ lease, charges }: { lease: any; charges: any[] }) {
    return (
        <>
            <Head title={`Charges - Bail #${lease.id}`} />
            <div className="mx-auto max-w-2xl space-y-4 p-4">
                <h1 className="text-2xl font-semibold">Charges - Bail #{lease.id}</h1>

                <Card>
                    <CardHeader><CardTitle>Ajouter une charge</CardTitle></CardHeader>
                    <CardContent>
                        <Form action={`/leases/${lease.id}/charges`} method="post" className="space-y-3">
                            <div className="grid gap-2">
                                <Label htmlFor="period">Période</Label>
                                <Input id="period" name="period" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="amount">Montant</Label>
                                <Input id="amount" type="number" step="0.01" name="amount" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="type">Type</Label>
                                <select id="type" name="type" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs">
                                    <option value="provision">Provision</option>
                                    <option value="regularization">Régularisation</option>
                                </select>
                            </div>
                            <Button type="submit">Enregistrer</Button>
                        </Form>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Historique</CardTitle></CardHeader>
                    <CardContent className="space-y-2">
                        {(charges ?? []).map((charge) => (
                            <p key={charge.id} className="text-sm">
                                {charge.period} — {Number(charge.amount ?? 0).toFixed(2)} € ({charge.type})
                            </p>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
