import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CreateInvoice({ leases = [] }: any) {
    return (
        <>
            <Head title="Ajouter facture" />
            <Form action="/invoices" method="post" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Ajouter facture</h1>
            <div className="grid gap-2">
                <Label htmlFor="lease_id">Bail</Label>
                <select id="lease_id" name="lease_id" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    {leases.map((o: any) => <option key={o.id} value={o.id}>{o.id}</option>)}
                </select>
                <InputError message={errors.lease_id} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="period_start">Début de période</Label>
                <Input id="period_start" type="date" name="period_start" required  />
                <InputError message={errors.period_start} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="period_end">Fin de période</Label>
                <Input id="period_end" type="date" name="period_end" required  />
                <InputError message={errors.period_end} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="amount">Montant</Label>
                <Input id="amount" type="number" step="0.01" name="amount" required  />
                <InputError message={errors.amount} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="charges_amount">Charges</Label>
                <Input id="charges_amount" type="number" step="0.01" name="charges_amount"  />
                <InputError message={errors.charges_amount} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="total_amount">Total</Label>
                <Input id="total_amount" type="number" step="0.01" name="total_amount" required  />
                <InputError message={errors.total_amount} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="status">Statut</Label>
                <select id="status" name="status" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    <option value="draft">Brouillon</option><option value="sent">Envoyée</option><option value="paid">Payée</option><option value="overdue">En retard</option><option value="cancelled">Annulée</option>
                </select>
                <InputError message={errors.status} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="due_date">Échéance</Label>
                <Input id="due_date" type="date" name="due_date" required  />
                <InputError message={errors.due_date} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="issued_at">Émise le</Label>
                <Input id="issued_at" type="date" name="issued_at" required  />
                <InputError message={errors.issued_at} />
            </div>
                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
