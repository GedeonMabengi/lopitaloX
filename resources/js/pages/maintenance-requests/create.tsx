import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CreateMaintenanceRequest({ tenants = [], units = [] }: any) {
    return (
        <>
            <Head title="Ajouter demande de maintenance" />
            <Form action="/maintenance-requests" method="post" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Ajouter demande de maintenance</h1>
            <div className="grid gap-2">
                <Label htmlFor="tenant_id">Locataire</Label>
                <select id="tenant_id" name="tenant_id" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    {tenants.map((o: any) => <option key={o.id} value={o.id}>{o.first_name}</option>)}
                </select>
                <InputError message={errors.tenant_id} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="property_unit_id">Unité</Label>
                <select id="property_unit_id" name="property_unit_id" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    {units.map((o: any) => <option key={o.id} value={o.id}>{o.unit_number}</option>)}
                </select>
                <InputError message={errors.property_unit_id} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="category">Catégorie</Label>
                <Input id="category" type="text" name="category" required  />
                <InputError message={errors.category} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" rows={3}  />
                <InputError message={errors.description} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="priority">Priorité</Label>
                <select id="priority" name="priority" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    <option value="low">Basse</option><option value="medium">Moyenne</option><option value="high">Haute</option><option value="urgent">Urgente</option>
                </select>
                <InputError message={errors.priority} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="status">Statut</Label>
                <select id="status" name="status" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    <option value="open">Ouverte</option><option value="assigned">Assignée</option><option value="in_progress">En cours</option><option value="completed">Terminée</option><option value="cancelled">Annulée</option>
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
