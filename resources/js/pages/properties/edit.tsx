import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function EditProperty({ property, users }: { property: any; users: any[] }) {
    return (
        <>
            <Head title={`Modifier ${property.name}`} />
            <Form action={`/properties/${property.id}`} method="put" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Modifier {property.name}</h1>

                        <div className="grid gap-2">
                            <Label htmlFor="owner_user_id">Propriétaire</Label>
                            <select id="owner_user_id" name="owner_user_id" defaultValue={property.owner_user_id ?? ''} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs">
                                <option value="">—</option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))}
                            </select>
                            <InputError message={errors.owner_user_id} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="name">Nom du bien</Label>
                            <Input id="name" name="name" required defaultValue={property.name ?? ''} />
                            <InputError message={errors.name} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="type">Type</Label>
                            <select id="type" name="type" defaultValue={property.type ?? ''} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs">
                                <option value="apartment">Appartement</option>
                                <option value="house">Maison</option>
                                <option value="commercial">Local commercial</option>
                                <option value="seasonal">Saisonnier</option>
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="address">Adresse</Label>
                            <Input id="address" name="address" required defaultValue={property.address ?? ''} />
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <div className="grid gap-2">
                                <Label htmlFor="city">Ville</Label>
                                <Input id="city" name="city" defaultValue={property.city ?? ''} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="postal_code">Code postal</Label>
                                <Input id="postal_code" name="postal_code" defaultValue={property.postal_code ?? ''} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="country">Pays</Label>
                                <Input id="country" name="country" defaultValue={property.country ?? ''} />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="surface">Surface (m²)</Label>
                            <Input id="surface" type="number" step="0.01" name="surface" defaultValue={property.surface ?? ''} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="status">Statut</Label>
                            <select id="status" name="status" defaultValue={property.status ?? 'active'} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs">
                                <option value="active">Actif</option>
                                <option value="inactive">Inactif</option>
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" rows={3} defaultValue={property.description ?? ''} />
                        </div>

                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
