import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PropertyShow({ property }: { property: any }) {
    return (
        <>
            <Head title={property.name} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">{property.name}</h1>
                    <div className="flex gap-2">
                        <Button asChild variant="outline">
                            <Link href={`/properties/${property.id}/edit`}>Modifier</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href={`/properties/${property.id}/photos`}>Photos</Link>
                        </Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Informations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <p><strong>Type :</strong> {property.type}</p>
                        <p><strong>Adresse :</strong> {property.address}, {property.postal_code} {property.city}</p>
                        <p><strong>Statut :</strong> {property.status}</p>
                        <p><strong>Surface :</strong> {property.surface} m²</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Unités</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button asChild variant="outline" size="sm" className="mb-3">
                            <Link href={`/property-units/create?property_id=${property.id}`}>Ajouter une unité</Link>
                        </Button>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="border-b bg-muted/50">
                                    <tr>
                                        <th className="px-4 py-2 text-left font-medium">Numéro</th>
                                        <th className="px-4 py-2 text-left font-medium">Surface</th>
                                        <th className="px-4 py-2 text-left font-medium">Statut</th>
                                        <th className="px-4 py-2 text-right font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {(property.units ?? []).map((unit: any) => (
                                        <tr key={unit.id}>
                                            <td className="px-4 py-2">{unit.unit_number}</td>
                                            <td className="px-4 py-2">{unit.surface} m²</td>
                                            <td className="px-4 py-2">{unit.status}</td>
                                            <td className="px-4 py-2 text-right">
                                                <Button asChild variant="outline" size="sm">
                                                    <Link href={`/property-units/${unit.id}`}>Voir</Link>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Photos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                            {(property.photos ?? []).map((photo: any) => (
                                <img key={photo.id} src={`/storage/${photo.path}`} className="aspect-square w-full rounded-md object-cover" alt={photo.caption ?? ''} />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
