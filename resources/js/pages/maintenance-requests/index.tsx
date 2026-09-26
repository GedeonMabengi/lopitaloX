import { Head, Link } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import StatusBadge from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function MaintenanceRequestIndex({ requests }: { requests: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title="Demandes de maintenance" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Demandes de maintenance</h1>
                    <Button asChild>
                        <Link href="/maintenance-requests/create">Ajouter</Link>
                    </Button>
                </div>
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="border-b bg-muted/50">
                                    <tr><th className="px-4 py-2 text-left font-medium">Catégorie</th><th className="px-4 py-2 text-left font-medium">Priorité</th><th className="px-4 py-2 text-left font-medium">Statut</th><th className="px-4 py-2 text-right font-medium">Actions</th></tr>
                                </thead>
                                <tbody className="divide-y">
                                    {requests.data.map((item) => (
                                        <tr key={item.id} className="hover:bg-muted/30">
                                            <td className="px-4 py-2">{String((item as any).category ?? '')}</td><td className="px-4 py-2">{String((item as any).priority ?? '')}</td><td className="px-4 py-2"><StatusBadge status={String((item as any).status ?? '')} /></td>
                                            <td className="px-4 py-2 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/maintenance-requests/${item.id}`}>Voir</Link>
                                                    </Button>
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/maintenance-requests/${item.id}/edit`}>Modifier</Link>
                                                    </Button>
                                                    <Button asChild variant="destructive" size="sm">
                                                        <Link href={`/maintenance-requests/${item.id}`} method="delete" as="button">Supprimer</Link>
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
                <Pagination links={requests.links} />
            </div>
        </>
    );
}

MaintenanceRequestIndex.layout = { breadcrumbs: [{ title: 'Demandes de maintenance', href: '/maintenance-requests' }] };
