import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeasonalBookingShow({ seasonalBooking }: { seasonalBooking: any }) {
    const item = seasonalBooking;

    return (
        <>
            <Head title="Réservation #{item.id}" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Réservation #{item.id}</h1>
                    <Button asChild variant="outline">
                        <Link href={`/seasonal-bookings/${item.id}/edit`}>Modifier</Link>
                    </Button>
                </div>
                <Card>
                    <CardHeader><CardTitle>Détails</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
<p><strong>Unité :</strong> {String((item as any).property_unit_id ?? '')}</p>
<p><strong>Nom du client :</strong> {String((item as any).guest_name ?? '')}</p>
<p><strong>Email :</strong> {String((item as any).guest_email ?? '')}</p>
<p><strong>Téléphone :</strong> {String((item as any).guest_phone ?? '')}</p>
<p><strong>Arrivée :</strong> {String((item as any).check_in ?? '')}</p>
<p><strong>Départ :</strong> {String((item as any).check_out ?? '')}</p>
<p><strong>Nombre de voyageurs :</strong> {String((item as any).number_of_guests ?? '')}</p>
<p><strong>Prix total :</strong> {String((item as any).total_price ?? '')}</p>
<p><strong>Statut :</strong> {String((item as any).status ?? '')}</p>
<p><strong>Paiement :</strong> {String((item as any).payment_status ?? '')}</p>
<p><strong>Demandes spéciales :</strong> {String((item as any).special_requests ?? '')}</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
