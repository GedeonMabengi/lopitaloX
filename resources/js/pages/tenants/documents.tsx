import { Head, Form, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function TenantDocuments({ tenant }: { tenant: any }) {
    return (
        <>
            <Head title={`Documents de ${tenant.first_name} ${tenant.last_name}`} />
            <div className="mx-auto max-w-2xl space-y-4 p-4">
                <h1 className="text-2xl font-semibold">Documents de {tenant.first_name} {tenant.last_name}</h1>

                <Card>
                    <CardHeader><CardTitle>Téléverser</CardTitle></CardHeader>
                    <CardContent>
                        <Form action={`/tenants/${tenant.id}/documents`} method="post" className="space-y-3">
                            <div className="grid gap-2">
                                <Label htmlFor="document">Fichier</Label>
                                <Input id="document" type="file" name="document" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="type">Type de document</Label>
                                <Input id="type" name="type" placeholder="Pièce d'identité, contrat..." required />
                            </div>
                            <Button type="submit">Téléverser</Button>
                        </Form>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Documents</CardTitle></CardHeader>
                    <CardContent>
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Type</th>
                                    <th className="px-4 py-2 text-left font-medium">Expiration</th>
                                    <th className="px-4 py-2 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {(tenant.documents ?? []).map((doc: any) => (
                                    <tr key={doc.id}>
                                        <td className="px-4 py-2">{doc.type}</td>
                                        <td className="px-4 py-2">{doc.expiry_date ?? '—'}</td>
                                        <td className="px-4 py-2 text-right">
                                            <Button asChild variant="outline" size="sm" className="mr-2">
                                                <Link href={`/storage/${doc.file_path}`} target="_blank">Voir</Link>
                                            </Button>
                                            <Button asChild variant="destructive" size="sm">
                                                <Link href={`/tenants/${tenant.id}/documents/${doc.id}`} method="delete" as="button">Supprimer</Link>
                                            </Button>
                                        </td>
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
