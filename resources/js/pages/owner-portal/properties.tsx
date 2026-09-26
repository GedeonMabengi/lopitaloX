import { Head, Link } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';

export default function OwnerProperties({ properties }: { properties: any[] }) {
    return (
        <>
            <Head title="Mes biens" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Mes biens</h1>
                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Nom</th>
                                    <th className="px-4 py-2 text-left font-medium">Ville</th>
                                    <th className="px-4 py-2 text-left font-medium">Unités</th>
                                    <th className="px-4 py-2 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {(properties ?? []).map((property) => (
                                    <tr key={property.id}>
                                        <td className="px-4 py-2">{property.name}</td>
                                        <td className="px-4 py-2">{property.city}</td>
                                        <td className="px-4 py-2">{property.units?.length ?? 0}</td>
                                        <td className="px-4 py-2 text-right">
                                            <Link href={`/owner/properties/${property.id}/financials`} className="text-primary underline">Finances</Link>
                                        </td>
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
