import { Head, Link } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function DocumentTemplateIndex({ templates }: { templates: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title="Modèles de documents" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Modèles de documents</h1>
                    <Button asChild>
                        <Link href="/document-templates/create">Ajouter</Link>
                    </Button>
                </div>
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="border-b bg-muted/50">
                                    <tr><th className="px-4 py-2 text-left font-medium">Nom</th><th className="px-4 py-2 text-left font-medium">Type</th><th className="px-4 py-2 text-right font-medium">Actions</th></tr>
                                </thead>
                                <tbody className="divide-y">
                                    {templates.data.map((item) => (
                                        <tr key={item.id} className="hover:bg-muted/30">
                                            <td className="px-4 py-2">{String((item as any).name ?? '')}</td><td className="px-4 py-2">{String((item as any).type ?? '')}</td>
                                            <td className="px-4 py-2 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/document-templates/${item.id}`}>Voir</Link>
                                                    </Button>
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={`/document-templates/${item.id}/edit`}>Modifier</Link>
                                                    </Button>
                                                    <Button asChild variant="destructive" size="sm">
                                                        <Link href={`/document-templates/${item.id}`} method="delete" as="button">Supprimer</Link>
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
                <Pagination links={templates.links} />
            </div>
        </>
    );
}

DocumentTemplateIndex.layout = { breadcrumbs: [{ title: 'Modèles de documents', href: '/document-templates' }] };
