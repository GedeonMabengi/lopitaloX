import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function EditTenant({ tenant }: any) {
    return (
        <>
            <Head title="Modifier locataire" />
            <Form action={`/tenants/${tenant.id}`} method="put" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Modifier locataire</h1>
            <div className="grid gap-2">
                <Label htmlFor="first_name">Prénom</Label>
                <Input id="first_name" type="text" name="first_name" required defaultValue={(tenant as any).first_name ?? ''} />
                <InputError message={errors.first_name} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="last_name">Nom</Label>
                <Input id="last_name" type="text" name="last_name" required defaultValue={(tenant as any).last_name ?? ''} />
                <InputError message={errors.last_name} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" required defaultValue={(tenant as any).email ?? ''} />
                <InputError message={errors.email} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="text" name="phone" defaultValue={(tenant as any).phone ?? ''} />
                <InputError message={errors.phone} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="date_of_birth">Date de naissance</Label>
                <Input id="date_of_birth" type="date" name="date_of_birth" defaultValue={(tenant as any).date_of_birth ?? ''} />
                <InputError message={errors.date_of_birth} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="nationality">Nationalité</Label>
                <Input id="nationality" type="text" name="nationality" defaultValue={(tenant as any).nationality ?? ''} />
                <InputError message={errors.nationality} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="id_number">Numéro de pièce</Label>
                <Input id="id_number" type="text" name="id_number" defaultValue={(tenant as any).id_number ?? ''} />
                <InputError message={errors.id_number} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="employer">Employeur</Label>
                <Input id="employer" type="text" name="employer" defaultValue={(tenant as any).employer ?? ''} />
                <InputError message={errors.employer} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="monthly_income">Revenu mensuel</Label>
                <Input id="monthly_income" type="number" step="0.01" name="monthly_income" defaultValue={(tenant as any).monthly_income ?? ''} />
                <InputError message={errors.monthly_income} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" name="notes" rows={3} defaultValue={(tenant as any).notes ?? ''} />
                <InputError message={errors.notes} />
            </div>
                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
