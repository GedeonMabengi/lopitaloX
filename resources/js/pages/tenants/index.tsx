import { Head, Link } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function TenantIndex({ tenants }: { tenants: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title="Locataires" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Locataires</h1>
                    <Button asChild>
                        <Link href="/tenants/create">Ajouter</Link>
                    </Button>
                </div>
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="border-b bg-muted/50">
                                    <tr><th className="px-4 py-2 text-left font-medium">Nom</th><th className="px-4 py-2 text-left font-medium">Email</th><th className="px-4 py-2 text-left font-medium">Téléphone</th><th className="px-4 py-2 text-right font-medium">Actions</th></tr>
                                </thead>
                                <tbody className="divide-y">
                                    {tenants.data.map((item) => (
                                        <tr key={item.id} className="hover:bg-muted/30">
                                            <td className="px-4 py-2">{String((item as any).first_name ?? '')}</td><td className="px-4 py-2">{String((item as any).email ?? '')}</td><td className="px-4 py-2">{String((item as any).phone ?? '')}</td>
                                            <td className="px-4 py-2 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/tenants/${item.id}`}>Voir</Link>
                                                    </Button>
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/tenants/${item.id}/edit`}>Modifier</Link>
                                                    </Button>
                                                    <Button asChild variant="destructive" size="sm">
                                                        <Link href={`/tenants/${item.id}`} method="delete" as="button">Supprimer</Link>
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
                <Pagination links={tenants.links} />
            </div>
        </>
    );
}

TenantIndex.layout = { breadcrumbs: [{ title: 'Locataires', href: '/tenants' }] };
