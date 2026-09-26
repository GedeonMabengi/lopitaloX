import { Head, Link } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function SupplierIndex({ suppliers }: { suppliers: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title="Fournisseurs" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Fournisseurs</h1>
                    <Button asChild>
                        <Link href="/suppliers/create">Ajouter</Link>
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
                                    {suppliers.data.map((item) => (
                                        <tr key={item.id} className="hover:bg-muted/30">
                                            <td className="px-4 py-2">{String((item as any).name ?? '')}</td><td className="px-4 py-2">{String((item as any).email ?? '')}</td><td className="px-4 py-2">{String((item as any).phone ?? '')}</td>
                                            <td className="px-4 py-2 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/suppliers/${item.id}`}>Voir</Link>
                                                    </Button>
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/suppliers/${item.id}/edit`}>Modifier</Link>
                                                    </Button>
                                                    <Button asChild variant="destructive" size="sm">
                                                        <Link href={`/suppliers/${item.id}`} method="delete" as="button">Supprimer</Link>
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
                <Pagination links={suppliers.links} />
            </div>
        </>
    );
}

SupplierIndex.layout = { breadcrumbs: [{ title: 'Fournisseurs', href: '/suppliers' }] };
