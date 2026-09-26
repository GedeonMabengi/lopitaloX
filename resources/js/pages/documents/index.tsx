import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DocumentIndex({ propertyDocs, tenantDocs }: { propertyDocs: any[]; tenantDocs: any[] }) {
    return (
        <>
            <Head title="Documents" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Documents</h1>

                <Card>
                    <CardHeader><CardTitle>Documents des biens</CardTitle></CardHeader>
                    <CardContent className="space-y-2">
                        {(propertyDocs ?? []).map((doc) => (
                            <div key={doc.id} className="flex items-center justify-between">
                                <span>{doc.type}</span>
                                <a href={`/documents/property/${doc.id}/download`} className="text-primary underline">Télécharger</a>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Documents des locataires</CardTitle></CardHeader>
                    <CardContent className="space-y-2">
                        {(tenantDocs ?? []).map((doc) => (
                            <div key={doc.id} className="flex items-center justify-between">
                                <span>{doc.type}</span>
                                <a href={`/documents/tenant/${doc.id}/download`} className="text-primary underline">Télécharger</a>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
