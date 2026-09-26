import { Head, Link } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import StatusBadge from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function LeaseIndex({ leases }: { leases: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title="Baux" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Baux</h1>
                    <Button asChild>
                        <Link href="/leases/create">Créer un bail</Link>
                    </Button>
                </div>
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="border-b bg-muted/50">
                                    <tr>
                                        <th className="px-4 py-2 text-left font-medium">Locataire</th>
                                        <th className="px-4 py-2 text-left font-medium">Bien</th>
                                        <th className="px-4 py-2 text-left font-medium">Début</th>
                                        <th className="px-4 py-2 text-left font-medium">Loyer</th>
                                        <th className="px-4 py-2 text-left font-medium">Statut</th>
                                        <th className="px-4 py-2 text-right font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {leases.data.map((item) => (
                                        <tr key={item.id} className="hover:bg-muted/30">
                                            <td className="px-4 py-2">{item.tenant?.first_name} {item.tenant?.last_name}</td>
                                            <td className="px-4 py-2">{item.property_unit?.property?.name} - {item.property_unit?.unit_number}</td>
                                            <td className="px-4 py-2">{item.start_date}</td>
                                            <td className="px-4 py-2">{Number(item.rent_amount ?? 0).toFixed(2)} €</td>
                                            <td className="px-4 py-2"><StatusBadge status={item.status} /></td>
                                            <td className="px-4 py-2 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/leases/${item.id}`}>Voir</Link>
                                                    </Button>
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/leases/${item.id}/edit`}>Modifier</Link>
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
                <Pagination links={leases.links} />
            </div>
        </>
    );
}

LeaseIndex.layout = { breadcrumbs: [{ title: 'Baux', href: '/leases' }] };
