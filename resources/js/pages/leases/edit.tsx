import { Head, Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const SEL = 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs';

export default function EditLease({ lease, tenants, units }: any) {
    return (
        <>
            <Head title={`Modifier le bail #${lease.id}`} />
            <Form action={`/leases/${lease.id}`} method="put" className="mx-auto max-w-2xl space-y-4">
                {({ processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Modifier le bail #{lease.id}</h1>

                        <div className="grid gap-2">
                            <Label htmlFor="tenant_id">Locataire</Label>
                            <select id="tenant_id" name="tenant_id" defaultValue={lease.tenant_id ?? ''} className={SEL}>
                                <option value="">—</option>
                                {tenants.map((t: any) => <option key={t.id} value={t.id}>{t.first_name} {t.last_name}</option>)}
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="property_unit_id">Unité</Label>
                            <select id="property_unit_id" name="property_unit_id" defaultValue={lease.property_unit_id ?? ''} className={SEL}>
                                <option value="">—</option>
                                {units.map((u: any) => <option key={u.id} value={u.id}>{u.property?.name} - {u.unit_number}</option>)}
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="grid gap-2">
                                <Label htmlFor="start_date">Date de début</Label>
                                <Input id="start_date" type="date" name="start_date" defaultValue={lease.start_date ?? ''} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="end_date">Date de fin</Label>
                                <Input id="end_date" type="date" name="end_date" defaultValue={lease.end_date ?? ''} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="grid gap-2">
                                <Label htmlFor="rent_amount">Loyer mensuel (€)</Label>
                                <Input id="rent_amount" type="number" step="0.01" name="rent_amount" defaultValue={lease.rent_amount ?? ''} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="charges_amount">Charges (€)</Label>
                                <Input id="charges_amount" type="number" step="0.01" name="charges_amount" defaultValue={lease.charges_amount ?? ''} />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="deposit_amount">Dépôt de garantie (€)</Label>
                            <Input id="deposit_amount" type="number" step="0.01" name="deposit_amount" defaultValue={lease.deposit_amount ?? ''} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="status">Statut</Label>
                            <select id="status" name="status" defaultValue={lease.status ?? 'active'} className={SEL}>
                                <option value="active">Actif</option>
                                <option value="expired">Expiré</option>
                                <option value="terminated">Résilié</option>
                                <option value="pending">En attente</option>
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="notes">Notes</Label>
                            <Textarea id="notes" name="notes" rows={3} defaultValue={lease.notes ?? ''} />
                        </div>

                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
