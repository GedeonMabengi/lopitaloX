import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CreateSeasonalBooking({ units = [] }: any) {
    return (
        <>
            <Head title="Ajouter réservation" />
            <Form action="/seasonal-bookings" method="post" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Ajouter réservation</h1>
            <div className="grid gap-2">
                <Label htmlFor="property_unit_id">Unité</Label>
                <select id="property_unit_id" name="property_unit_id" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    {units.map((o: any) => <option key={o.id} value={o.id}>{o.unit_number}</option>)}
                </select>
                <InputError message={errors.property_unit_id} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="guest_name">Nom du client</Label>
                <Input id="guest_name" type="text" name="guest_name" required  />
                <InputError message={errors.guest_name} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="guest_email">Email</Label>
                <Input id="guest_email" type="email" name="guest_email" required  />
                <InputError message={errors.guest_email} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="guest_phone">Téléphone</Label>
                <Input id="guest_phone" type="text" name="guest_phone"  />
                <InputError message={errors.guest_phone} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="check_in">Arrivée</Label>
                <Input id="check_in" type="date" name="check_in" required  />
                <InputError message={errors.check_in} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="check_out">Départ</Label>
                <Input id="check_out" type="date" name="check_out" required  />
                <InputError message={errors.check_out} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="number_of_guests">Nombre de voyageurs</Label>
                <Input id="number_of_guests" type="number" step="0.01" name="number_of_guests" required  />
                <InputError message={errors.number_of_guests} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="total_price">Prix total</Label>
                <Input id="total_price" type="number" step="0.01" name="total_price" required  />
                <InputError message={errors.total_price} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="status">Statut</Label>
                <select id="status" name="status" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    <option value="pending">En attente</option><option value="confirmed">Confirmée</option><option value="cancelled">Annulée</option><option value="completed">Terminée</option>
                </select>
                <InputError message={errors.status} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="payment_status">Paiement</Label>
                <select id="payment_status" name="payment_status" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    <option value="unpaid">Impayé</option><option value="partial">Partiel</option><option value="paid">Payé</option>
                </select>
                <InputError message={errors.payment_status} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="special_requests">Demandes spéciales</Label>
                <Textarea id="special_requests" name="special_requests" rows={3}  />
                <InputError message={errors.special_requests} />
            </div>
                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
