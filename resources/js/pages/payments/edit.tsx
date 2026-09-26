import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function EditPayment({ payment, leases = [] }: any) {
    return (
        <>
            <Head title="Modifier paiement" />
            <Form action={`/payments/${payment.id}`} method="put" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Modifier paiement</h1>
            <div className="grid gap-2">
                <Label htmlFor="lease_id">Bail</Label>
                <select id="lease_id" name="lease_id" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" defaultValue={(payment as any).lease_id ?? ''}>
                    <option value="">—</option>
                    {leases.map((o: any) => <option key={o.id} value={o.id}>{o.id}</option>)}
                </select>
                <InputError message={errors.lease_id} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="amount">Montant</Label>
                <Input id="amount" type="number" step="0.01" name="amount" required defaultValue={(payment as any).amount ?? ''} />
                <InputError message={errors.amount} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="payment_date">Date</Label>
                <Input id="payment_date" type="date" name="payment_date" required defaultValue={(payment as any).payment_date ?? ''} />
                <InputError message={errors.payment_date} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="method">Méthode</Label>
                <select id="method" name="method" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" defaultValue={(payment as any).method ?? ''}>
                    <option value="">—</option>
                    <option value="bank_transfer">Virement</option><option value="direct_debit">Prélèvement</option><option value="cash">Espèces</option><option value="online">En ligne</option>
                </select>
                <InputError message={errors.method} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="reference">Référence</Label>
                <Input id="reference" type="text" name="reference" defaultValue={(payment as any).reference ?? ''} />
                <InputError message={errors.reference} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="status">Statut</Label>
                <select id="status" name="status" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" defaultValue={(payment as any).status ?? ''}>
                    <option value="">—</option>
                    <option value="pending">En attente</option><option value="completed">Complété</option><option value="failed">Échoué</option><option value="refunded">Remboursé</option>
                </select>
                <InputError message={errors.status} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="received_by">Reçu par</Label>
                <Input id="received_by" type="text" name="received_by" defaultValue={(payment as any).received_by ?? ''} />
                <InputError message={errors.received_by} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="note">Note</Label>
                <Textarea id="note" name="note" rows={3} defaultValue={(payment as any).note ?? ''} />
                <InputError message={errors.note} />
            </div>
                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
