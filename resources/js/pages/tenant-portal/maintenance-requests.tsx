import { Head, Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function TenantMaintenanceRequests({ requests }: { requests: any[] }) {
    return (
        <>
            <Head title="Mes demandes de maintenance" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Mes demandes de maintenance</h1>

                <Card>
                    <CardContent className="pt-6">
                        <Form action="/tenant/maintenance-requests" method="post" className="space-y-3">
                            <div className="grid gap-2">
                                <label htmlFor="category" className="text-sm">Catégorie</label>
                                <input id="category" name="category" className="h-9 rounded-md border border-input bg-transparent px-3 text-sm" required />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="description" className="text-sm">Description</label>
                                <textarea id="description" name="description" rows={3} className="rounded-md border border-input bg-transparent px-3 py-2 text-sm" required />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="priority" className="text-sm">Priorité</label>
                                <select id="priority" name="priority" className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
                                    <option value="low">Basse</option>
                                    <option value="medium">Moyenne</option>
                                    <option value="high">Haute</option>
                                    <option value="urgent">Urgente</option>
                                </select>
                            </div>
                            <Button type="submit">Soumettre</Button>
                        </Form>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="divide-y p-0">
                        {(requests ?? []).map((request) => (
                            <div key={request.id} className="px-4 py-3">
                                <p className="text-sm font-medium">{request.category} — {request.status}</p>
                                <p className="text-sm">{request.description}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
