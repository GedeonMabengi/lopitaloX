import { Head, Link, Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LeaseShow({ lease }: { lease: any }) {
    return (
        <>
            <Head title={`Bail #${lease.id}`} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Bail #{lease.id}</h1>
                    <div className="flex gap-2">
                        <Button asChild variant="outline">
                            <Link href={`/leases/${lease.id}/edit`}>Modifier</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href={`/leases/${lease.id}/deposit`}>Dépôt</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href={`/leases/${lease.id}/move-in-out-reports`}>États des lieux</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href={`/leases/${lease.id}/charges`}>Charges</Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader><CardTitle>Informations</CardTitle></CardHeader>
                        <CardContent className="space-y-1">
                            <p><strong>Locataire :</strong> {lease.tenant?.first_name} {lease.tenant?.last_name}</p>
                            <p><strong>Bien :</strong> {lease.property_unit?.property?.name} - {lease.property_unit?.unit_number}</p>
                            <p><strong>Début :</strong> {lease.start_date}</p>
                            <p><strong>Fin :</strong> {lease.end_date ?? 'Non définie'}</p>
                            <p><strong>Loyer :</strong> {Number(lease.rent_amount ?? 0).toFixed(2)} € / mois</p>
                            <p><strong>Charges :</strong> {Number(lease.charges_amount ?? 0).toFixed(2)} € / mois</p>
                            <p><strong>Dépôt :</strong> {Number(lease.deposit_amount ?? 0).toFixed(2)} €</p>
                            <p><strong>Statut :</strong> {lease.status}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Actions</CardTitle></CardHeader>
                        <CardContent className="space-y-3">
                            <Form action={`/leases/${lease.id}/generate-document`} method="post">
                                <Button type="submit" variant="secondary" size="sm">Générer le bail PDF</Button>
                            </Form>

                            <Form action={`/leases/${lease.id}/revise-rent`} method="post" className="flex items-center gap-2">
                                <input type="number" step="0.01" name="new_rent" placeholder="Nouveau loyer" className="h-9 w-32 rounded-md border border-input bg-transparent px-3 text-sm" required />
                                <input type="number" step="0.01" name="index_value" placeholder="Indice" className="h-9 w-24 rounded-md border border-input bg-transparent px-3 text-sm" required />
                                <input type="number" step="0.01" name="percentage_change" placeholder="%" className="h-9 w-24 rounded-md border border-input bg-transparent px-3 text-sm" required />
                                <input type="hidden" name="revision_date" value={new Date().toISOString().slice(0, 10)} />
                                <Button type="submit" size="sm">Réviser le loyer</Button>
                            </Form>

                            <Form action={`/leases/${lease.id}/renew`} method="post" className="flex items-center gap-2">
                                <input type="date" name="new_end_date" className="h-9 rounded-md border border-input bg-transparent px-3 text-sm" required />
                                <Button type="submit" size="sm">Renouveler</Button>
                            </Form>

                            <Form action={`/leases/${lease.id}/terminate`} method="post" className="flex items-center gap-2">
                                <input type="date" name="termination_date" className="h-9 rounded-md border border-input bg-transparent px-3 text-sm" required />
                                <input type="text" name="reason" placeholder="Motif" className="h-9 rounded-md border border-input bg-transparent px-3 text-sm" />
                                <Button type="submit" variant="destructive" size="sm">Résilier</Button>
                            </Form>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader><CardTitle>Paiements récents</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
                        {(lease.payments ?? []).slice(0, 5).map((payment: any) => (
                            <p key={payment.id}>{payment.payment_date} : {Number(payment.amount ?? 0).toFixed(2)} € ({payment.status})</p>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
