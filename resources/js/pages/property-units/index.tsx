import { Head, Link } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import StatusBadge from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PropertyUnitIndex({ units }: { units: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title="Unités locatives" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Unités locatives</h1>
                    <Button asChild>
                        <Link href="/property-units/create">Ajouter</Link>
                    </Button>
                </div>
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="border-b bg-muted/50">
                                    <tr><th className="px-4 py-2 text-left font-medium">Numéro</th><th className="px-4 py-2 text-left font-medium">Bien</th><th className="px-4 py-2 text-left font-medium">Surface</th><th className="px-4 py-2 text-left font-medium">Statut</th><th className="px-4 py-2 text-right font-medium">Actions</th></tr>
                                </thead>
                                <tbody className="divide-y">
                                    {units.data.map((item) => (
                                        <tr key={item.id} className="hover:bg-muted/30">
                                            <td className="px-4 py-2">{String((item as any).unit_number ?? '')}</td><td className="px-4 py-2">{String((item as any).property?.['name'] ?? '')}</td><td className="px-4 py-2">{String((item as any).surface ?? '')}</td><td className="px-4 py-2"><StatusBadge status={String((item as any).status ?? '')} /></td>
                                            <td className="px-4 py-2 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/property-units/${item.id}`}>Voir</Link>
                                                    </Button>
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/property-units/${item.id}/edit`}>Modifier</Link>
                                                    </Button>
                                                    <Button asChild variant="destructive" size="sm">
                                                        <Link href={`/property-units/${item.id}`} method="delete" as="button">Supprimer</Link>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
                <Pagination links={units.links} />
            </div>
        </>
    );
}

PropertyUnitIndex.layout = { breadcrumbs: [{ title: 'Unités locatives', href: '/property-units' }] };
