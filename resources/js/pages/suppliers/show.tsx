import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SupplierShow({ supplier }: { supplier: any }) {
    const item = supplier;

    return (
        <>
            <Head title="Fournisseur #{item.id}" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Fournisseur #{item.id}</h1>
                    <Button asChild variant="outline">
                        <Link href={`/suppliers/${item.id}/edit`}>Modifier</Link>
                    </Button>
                </div>
                <Card>
                    <CardHeader><CardTitle>Détails</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
<p><strong>Nom :</strong> {String((item as any).name ?? '')}</p>
<p><strong>Email :</strong> {String((item as any).email ?? '')}</p>
<p><strong>Téléphone :</strong> {String((item as any).phone ?? '')}</p>
<p><strong>Adresse :</strong> {String((item as any).address ?? '')}</p>
<p><strong>SIRET :</strong> {String((item as any).siret ?? '')}</p>
<p><strong>Catégorie :</strong> {String((item as any).category ?? '')}</p>
<p><strong>Notes :</strong> {String((item as any).notes ?? '')}</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
