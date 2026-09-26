import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function EditWorkOrder({ workOrder, properties = [], units = [] }: any) {
    return (
        <>
            <Head title="Modifier ordre de travail" />
            <Form action={`/work-orders/${workOrder.id}`} method="put" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Modifier ordre de travail</h1>
            <div className="grid gap-2">
                <Label htmlFor="property_id">Bien</Label>
                <select id="property_id" name="property_id" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" defaultValue={(workOrder as any).property_id ?? ''}>
                    <option value="">—</option>
                    {properties.map((o: any) => <option key={o.id} value={o.id}>{o.name}</option>)}
                </select>
                <InputError message={errors.property_id} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="property_unit_id">Unité</Label>
                <select id="property_unit_id" name="property_unit_id" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" defaultValue={(workOrder as any).property_unit_id ?? ''}>
                    <option value="">—</option>
                    {units.map((o: any) => <option key={o.id} value={o.id}>{o.unit_number}</option>)}
                </select>
                <InputError message={errors.property_unit_id} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="title">Titre</Label>
                <Input id="title" type="text" name="title" required defaultValue={(workOrder as any).title ?? ''} />
                <InputError message={errors.title} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" rows={3} defaultValue={(workOrder as any).description ?? ''} />
                <InputError message={errors.description} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="status">Statut</Label>
                <select id="status" name="status" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" defaultValue={(workOrder as any).status ?? ''}>
                    <option value="">—</option>
                    <option value="planned">Planifié</option><option value="in_progress">En cours</option><option value="completed">Terminé</option><option value="cancelled">Annulé</option>
                </select>
                <InputError message={errors.status} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="start_date">Début</Label>
                <Input id="start_date" type="date" name="start_date" defaultValue={(workOrder as any).start_date ?? ''} />
                <InputError message={errors.start_date} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="end_date">Fin</Label>
                <Input id="end_date" type="date" name="end_date" defaultValue={(workOrder as any).end_date ?? ''} />
                <InputError message={errors.end_date} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="budget">Budget</Label>
                <Input id="budget" type="number" step="0.01" name="budget" defaultValue={(workOrder as any).budget ?? ''} />
                <InputError message={errors.budget} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="actual_cost">Coût réel</Label>
                <Input id="actual_cost" type="number" step="0.01" name="actual_cost" defaultValue={(workOrder as any).actual_cost ?? ''} />
                <InputError message={errors.actual_cost} />
            </div>
                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
