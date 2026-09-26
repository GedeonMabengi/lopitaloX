import { Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CreateDocumentTemplate() {
    return (
        <>
            <Head title="Ajouter modèle de document" />
            <Form action="/document-templates" method="post" className="mx-auto max-w-2xl space-y-4">
                {({ errors, processing }) => (
                    <>
                        <h1 className="text-2xl font-semibold">Ajouter modèle de document</h1>
            <div className="grid gap-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" type="text" name="name" required  />
                <InputError message={errors.name} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="type">Type</Label>
                <select id="type" name="type" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" >
                    <option value="">—</option>
                    <option value="lease">Bail</option><option value="receipt">Quittance</option><option value="notice">Avis</option>
                </select>
                <InputError message={errors.type} />
            </div>            <div className="grid gap-2">
                <Label htmlFor="content">Contenu</Label>
                <Textarea id="content" name="content" rows={3}  />
                <InputError message={errors.content} />
            </div>            <div className="flex items-center gap-2">
                <input type="checkbox" id="is_active" name="is_active" value="1" className="size-4"  />
                <Label htmlFor="is_active">Actif</Label>
                <InputError message={errors.is_active} />
            </div>
                        <Button type="submit" disabled={processing}>Enregistrer</Button>
                    </>
                )}
            </Form>
        </>
    );
}
