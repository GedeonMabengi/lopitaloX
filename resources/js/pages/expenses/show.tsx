import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ExpenseShow({ expense }: { expense: any }) {
    const item = expense;

    return (
        <>
            <Head title="Dépense #{item.id}" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Dépense #{item.id}</h1>
                    <Button asChild variant="outline">
                        <Link href={`/expenses/${item.id}/edit`}>Modifier</Link>
                    </Button>
                </div>
                <Card>
                    <CardHeader><CardTitle>Détails</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
<p><strong>Catégorie :</strong> {String((item as any).category_id ?? '')}</p>
<p><strong>Bien :</strong> {String((item as any).property_id ?? '')}</p>
<p><strong>Fournisseur :</strong> {String((item as any).supplier_id ?? '')}</p>
<p><strong>Montant :</strong> {String((item as any).amount ?? '')}</p>
<p><strong>Date :</strong> {String((item as any).date ?? '')}</p>
<p><strong>Description :</strong> {String((item as any).description ?? '')}</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
