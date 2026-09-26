import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DocumentTemplateShow({ documentTemplate }: { documentTemplate: any }) {
    const item = documentTemplate;

    return (
        <>
            <Head title="Modèle de document #{item.id}" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Modèle de document #{item.id}</h1>
                    <Button asChild variant="outline">
                        <Link href={`/document-templates/${item.id}/edit`}>Modifier</Link>
                    </Button>
                </div>
                <Card>
                    <CardHeader><CardTitle>Détails</CardTitle></CardHeader>
                    <CardContent className="space-y-1">
<p><strong>Nom :</strong> {String((item as any).name ?? '')}</p>
<p><strong>Type :</strong> {String((item as any).type ?? '')}</p>
<p><strong>Contenu :</strong> {String((item as any).content ?? '')}</p>
<p><strong>Actif :</strong> {String((item as any).is_active ?? '')}</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
