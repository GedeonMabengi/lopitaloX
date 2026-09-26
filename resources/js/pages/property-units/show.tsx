import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PropertyUnitShow({ propertyUnit }: { propertyUnit: any }) {
    const item = propertyUnit;

    return (
        <>
            <Head title="Unité #{item.id}" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Unité #{item.id}</h1>
                    <Button asChild variant="outline">
                        <Link href={`/property-units/${item.id}/edit`}>Modifier</Link>
                    </Button>
                </div>
                <Card>
                    <CardHeader><CardTitle>Détails</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
<p><strong>Bien :</strong> {String((item as any).property_id ?? '')}</p>
<p><strong>Numéro :</strong> {String((item as any).unit_number ?? '')}</p>
<p><strong>Étage :</strong> {String((item as any).floor ?? '')}</p>
<p><strong>Surface (m²) :</strong> {String((item as any).surface ?? '')}</p>
<p><strong>Chambres :</strong> {String((item as any).bedrooms ?? '')}</p>
<p><strong>Salles de bain :</strong> {String((item as any).bathrooms ?? '')}</p>
<p><strong>Loyer de base (€) :</strong> {String((item as any).monthly_rent_base ?? '')}</p>
<p><strong>Charges de base (€) :</strong> {String((item as any).monthly_charges_base ?? '')}</p>
<p><strong>Statut :</strong> {String((item as any).status ?? '')}</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
