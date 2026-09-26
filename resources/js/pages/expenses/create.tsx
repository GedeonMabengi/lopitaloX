import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CreateExpense({ categories = [], properties = [], suppliers = [] }: any) {
    return (
        <>
            <Head title="Ajouter dépense" />
            <Form action="/expenses" method="post" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Ajouter dépense</h1>
            <div className="grid gap-2">
                <Label htmlFor="category_id">Catégorie</Label>
                <select id="category_id" name="category_id" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    {categories.map((o: any) => <option key={o.id} value={o.id}>{o.name}</option>)}
                </select>
                <InputError message={errors.category_id} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="property_id">Bien</Label>
                <select id="property_id" name="property_id" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    {properties.map((o: any) => <option key={o.id} value={o.id}>{o.name}</option>)}
                </select>
                <InputError message={errors.property_id} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="supplier_id">Fournisseur</Label>
                <select id="supplier_id" name="supplier_id" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    {suppliers.map((o: any) => <option key={o.id} value={o.id}>{o.name}</option>)}
                </select>
                <InputError message={errors.supplier_id} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="amount">Montant</Label>
                <Input id="amount" type="number" step="0.01" name="amount" required  />
                <InputError message={errors.amount} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" name="date" required  />
                <InputError message={errors.date} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" rows={3}  />
                <InputError message={errors.description} />
            </div>
                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
