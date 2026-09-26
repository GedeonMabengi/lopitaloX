import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CreateTenant() {
    return (
        <>
            <Head title="Ajouter locataire" />
            <Form action="/tenants" method="post" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Ajouter locataire</h1>
            <div className="grid gap-2">
                <Label htmlFor="first_name">Prénom</Label>
                <Input id="first_name" type="text" name="first_name" required  />
                <InputError message={errors.first_name} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="last_name">Nom</Label>
                <Input id="last_name" type="text" name="last_name" required  />
                <InputError message={errors.last_name} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" required  />
                <InputError message={errors.email} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="text" name="phone"  />
                <InputError message={errors.phone} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="date_of_birth">Date de naissance</Label>
                <Input id="date_of_birth" type="date" name="date_of_birth"  />
                <InputError message={errors.date_of_birth} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="nationality">Nationalité</Label>
                <Input id="nationality" type="text" name="nationality"  />
                <InputError message={errors.nationality} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="id_number">Numéro de pièce</Label>
                <Input id="id_number" type="text" name="id_number"  />
                <InputError message={errors.id_number} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="employer">Employeur</Label>
                <Input id="employer" type="text" name="employer"  />
                <InputError message={errors.employer} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="monthly_income">Revenu mensuel</Label>
                <Input id="monthly_income" type="number" step="0.01" name="monthly_income"  />
                <InputError message={errors.monthly_income} />
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
