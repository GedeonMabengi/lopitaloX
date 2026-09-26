import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';

export default function OwnerDocuments({ documents }: { documents: any[] }) {
    return (
        <>
            <Head title="Mes documents" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Mes documents</h1>
                <Card>
                    <CardContent className="divide-y p-0">
                        {(documents ?? []).map((doc) => (
                            <div key={doc.id} className="flex items-center justify-between px-4 py-3">
                                <span>{doc.type}</span>
                                <a href={`/documents/property/${doc.id}/download`} className="text-primary underline">Télécharger</a>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
