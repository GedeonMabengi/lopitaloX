import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';

export default function TenantLeases({ leases }: { leases: any[] }) {
    return (
        <>
            <Head title="Mes baux" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Mes baux</h1>
                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Bien</th>
                                    <th className="px-4 py-2 text-left font-medium">Début</th>
                                    <th className="px-4 py-2 text-left font-medium">Loyer</th>
                                    <th className="px-4 py-2 text-left font-medium">Statut</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {(leases ?? []).map((lease) => (
                                    <tr key={lease.id}>
                                        <td className="px-4 py-2">{lease.property_unit?.property?.name} - {lease.property_unit?.unit_number}</td>
                                        <td className="px-4 py-2">{lease.start_date}</td>
                                        <td className="px-4 py-2">{Number(lease.rent_amount ?? 0).toFixed(2)} €</td>
                                        <td className="px-4 py-2">{lease.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
