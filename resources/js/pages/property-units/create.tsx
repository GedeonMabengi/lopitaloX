import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CreatePropertyUnit({ properties = [] }: any) {
    return (
        <>
            <Head title="Ajouter unité" />
            <Form action="/property-units" method="post" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Ajouter unité</h1>
            <div className="grid gap-2">
                <Label htmlFor="property_id">Bien</Label>
                <select id="property_id" name="property_id" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    {properties.map((o: any) => <option key={o.id} value={o.id}>{o.name}</option>)}
                </select>
                <InputError message={errors.property_id} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="unit_number">Numéro</Label>
                <Input id="unit_number" type="text" name="unit_number" required  />
                <InputError message={errors.unit_number} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="floor">Étage</Label>
                <Input id="floor" type="number" step="0.01" name="floor"  />
                <InputError message={errors.floor} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="surface">Surface (m²)</Label>
                <Input id="surface" type="number" step="0.01" name="surface"  />
                <InputError message={errors.surface} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="bedrooms">Chambres</Label>
                <Input id="bedrooms" type="number" step="0.01" name="bedrooms"  />
                <InputError message={errors.bedrooms} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="bathrooms">Salles de bain</Label>
                <Input id="bathrooms" type="number" step="0.01" name="bathrooms"  />
                <InputError message={errors.bathrooms} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="monthly_rent_base">Loyer de base (€)</Label>
                <Input id="monthly_rent_base" type="number" step="0.01" name="monthly_rent_base"  />
                <InputError message={errors.monthly_rent_base} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="monthly_charges_base">Charges de base (€)</Label>
                <Input id="monthly_charges_base" type="number" step="0.01" name="monthly_charges_base"  />
                <InputError message={errors.monthly_charges_base} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="status">Statut</Label>
                <select id="status" name="status" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    <option value="vacant">Vacant</option><option value="occupied">Occupé</option><option value="maintenance">Maintenance</option>
                </select>
                <InputError message={errors.status} />
            </div>
                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
