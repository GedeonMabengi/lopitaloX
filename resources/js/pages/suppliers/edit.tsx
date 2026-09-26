import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function EditSupplier({ supplier }: any) {
    return (
        <>
            <Head title="Modifier fournisseur" />
            <Form action={`/suppliers/${supplier.id}`} method="put" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Modifier fournisseur</h1>
            <div className="grid gap-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" type="text" name="name" required defaultValue={(supplier as any).name ?? ''} />
                <InputError message={errors.name} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" defaultValue={(supplier as any).email ?? ''} />
                <InputError message={errors.email} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="text" name="phone" defaultValue={(supplier as any).phone ?? ''} />
                <InputError message={errors.phone} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" type="text" name="address" defaultValue={(supplier as any).address ?? ''} />
                <InputError message={errors.address} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="siret">SIRET</Label>
                <Input id="siret" type="text" name="siret" defaultValue={(supplier as any).siret ?? ''} />
                <InputError message={errors.siret} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="category">Catégorie</Label>
                <Input id="category" type="text" name="category" defaultValue={(supplier as any).category ?? ''} />
                <InputError message={errors.category} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" name="notes" rows={3} defaultValue={(supplier as any).notes ?? ''} />
                <InputError message={errors.notes} />
            </div>
                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
