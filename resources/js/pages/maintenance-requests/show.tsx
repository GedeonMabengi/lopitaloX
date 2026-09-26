import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MaintenanceRequestShow({ maintenanceRequest }: { maintenanceRequest: any }) {
    const item = maintenanceRequest;

    return (
        <>
            <Head title="Demande de maintenance #{item.id}" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Demande de maintenance #{item.id}</h1>
                    <Button asChild variant="outline">
                        <Link href={`/maintenance-requests/${item.id}/edit`}>Modifier</Link>
                    </Button>
                </div>
                <Card>
                    <CardHeader><CardTitle>Détails</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
<p><strong>Locataire :</strong> {String((item as any).tenant_id ?? '')}</p>
<p><strong>Unité :</strong> {String((item as any).property_unit_id ?? '')}</p>
<p><strong>Catégorie :</strong> {String((item as any).category ?? '')}</p>
<p><strong>Description :</strong> {String((item as any).description ?? '')}</p>
<p><strong>Priorité :</strong> {String((item as any).priority ?? '')}</p>
<p><strong>Statut :</strong> {String((item as any).status ?? '')}</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
