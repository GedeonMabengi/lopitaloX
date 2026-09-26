import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TenantShow({ tenant }: { tenant: any }) {
    const item = tenant;

    return (
        <>
            <Head title="Locataire #{item.id}" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Locataire #{item.id}</h1>
                    <Button asChild variant="outline">
                        <Link href={`/tenants/${item.id}/edit`}>Modifier</Link>
                    </Button>
                </div>
                <Card>
                    <CardHeader><CardTitle>Détails</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
<p><strong>Prénom :</strong> {String((item as any).first_name ?? '')}</p>
<p><strong>Nom :</strong> {String((item as any).last_name ?? '')}</p>
<p><strong>Email :</strong> {String((item as any).email ?? '')}</p>
<p><strong>Téléphone :</strong> {String((item as any).phone ?? '')}</p>
<p><strong>Date de naissance :</strong> {String((item as any).date_of_birth ?? '')}</p>
<p><strong>Nationalité :</strong> {String((item as any).nationality ?? '')}</p>
<p><strong>Numéro de pièce :</strong> {String((item as any).id_number ?? '')}</p>
<p><strong>Employeur :</strong> {String((item as any).employer ?? '')}</p>
<p><strong>Revenu mensuel :</strong> {String((item as any).monthly_income ?? '')}</p>
<p><strong>Notes :</strong> {String((item as any).notes ?? '')}</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
