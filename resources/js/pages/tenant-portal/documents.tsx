import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';

export default function TenantDocuments({ documents }: { documents: any[] }) {
    return (
        <>
            <Head title="Mes documents" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Mes documents</h1>
                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Type</th>
                                    <th className="px-4 py-2 text-left font-medium">Expiration</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {(documents ?? []).map((doc) => (
                                    <tr key={doc.id}>
                                        <td className="px-4 py-2">{doc.type}</td>
                                        <td className="px-4 py-2">{doc.expiry_date ?? '—'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
