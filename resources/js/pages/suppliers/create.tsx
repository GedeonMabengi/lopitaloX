import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CreateSupplier() {
    return (
        <>
            <Head title="Ajouter fournisseur" />
            <Form action="/suppliers" method="post" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Ajouter fournisseur</h1>
            <div className="grid gap-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" type="text" name="name" required  />
                <InputError message={errors.name} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email"  />
                <InputError message={errors.email} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="text" name="phone"  />
                <InputError message={errors.phone} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" type="text" name="address"  />
                <InputError message={errors.address} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="siret">SIRET</Label>
                <Input id="siret" type="text" name="siret"  />
                <InputError message={errors.siret} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="category">Catégorie</Label>
                <Input id="category" type="text" name="category"  />
                <InputError message={errors.category} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" name="notes" rows={3}  />
                <InputError message={errors.notes} />
            </div>
                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
