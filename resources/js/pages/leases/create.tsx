import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const SEL = 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs';

export default function CreateLease({ tenants, units, selectedTenant, selectedUnit }: any) {
    return (
        <>
            <Head title="Créer un bail" />
            <Form action="/leases" method="post" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Créer un bail</h1>

                        <div className="grid gap-2">
                            <Label htmlFor="tenant_id">Locataire</Label>
                            <select id="tenant_id" name="tenant_id" defaultValue={selectedTenant ?? ''} className={SEL}>
                                <option value="">—</option>
                                {tenants.map((t: any) => <option key={t.id} value={t.id}>{t.first_name} {t.last_name}</option>)}
                            </select>
                            <InputError message={errors.tenant_id} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="property_unit_id">Unité</Label>
                            <select id="property_unit_id" name="property_unit_id" defaultValue={selectedUnit ?? ''} className={SEL}>
                                <option value="">—</option>
                                {units.map((u: any) => <option key={u.id} value={u.id}>{u.property?.name} - {u.unit_number}</option>)}
                            </select>
                            <InputError message={errors.property_unit_id} />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="grid gap-2">
                                <Label htmlFor="start_date">Date de début</Label>
                                <Input id="start_date" type="date" name="start_date" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="end_date">Date de fin</Label>
                                <Input id="end_date" type="date" name="end_date" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="grid gap-2">
                                <Label htmlFor="rent_amount">Loyer mensuel (€)</Label>
                                <Input id="rent_amount" type="number" step="0.01" name="rent_amount" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="charges_amount">Charges (€)</Label>
                                <Input id="charges_amount" type="number" step="0.01" name="charges_amount" />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="deposit_amount">Dépôt de garantie (€)</Label>
                            <Input id="deposit_amount" type="number" step="0.01" name="deposit_amount" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="lease_type">Type de bail</Label>
                            <select id="lease_type" name="lease_type" className={SEL}>
                                <option value="fixed_term">Durée déterminée</option>
                                <option value="periodic">Périodique</option>
                                <option value="seasonal">Saisonnier</option>
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="payment_frequency">Fréquence de paiement</Label>
                            <select id="payment_frequency" name="payment_frequency" className={SEL}>
                                <option value="monthly">Mensuel</option>
                                <option value="quarterly">Trimestriel</option>
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="payment_method">Mode de paiement</Label>
                            <select id="payment_method" name="payment_method" className={SEL}>
                                <option value="bank_transfer">Virement</option>
                                <option value="direct_debit">Prélèvement</option>
                                <option value="cash">Espèces</option>
                                <option value="online">En ligne</option>
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="notes">Notes</Label>
                            <Textarea id="notes" name="notes" rows={3} />
                        </div>

                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
