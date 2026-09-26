import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WorkOrderShow({ workOrder }: { workOrder: any }) {
    const item = workOrder;

    return (
        <>
            <Head title="Ordre de travail #{item.id}" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Ordre de travail #{item.id}</h1>
                    <Button asChild variant="outline">
                        <Link href={`/work-orders/${item.id}/edit`}>Modifier</Link>
                    </Button>
                </div>
                <Card>
                    <CardHeader><CardTitle>Détails</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
<p><strong>Bien :</strong> {String((item as any).property_id ?? '')}</p>
<p><strong>Unité :</strong> {String((item as any).property_unit_id ?? '')}</p>
<p><strong>Titre :</strong> {String((item as any).title ?? '')}</p>
<p><strong>Description :</strong> {String((item as any).description ?? '')}</p>
<p><strong>Statut :</strong> {String((item as any).status ?? '')}</p>
<p><strong>Début :</strong> {String((item as any).start_date ?? '')}</p>
<p><strong>Fin :</strong> {String((item as any).end_date ?? '')}</p>
<p><strong>Budget :</strong> {String((item as any).budget ?? '')}</p>
<p><strong>Coût réel :</strong> {String((item as any).actual_cost ?? '')}</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
