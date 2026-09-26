import { Head, Form } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import StatusBadge from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function TechnicianPortalAssignments({ assignments }: { assignments: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title="Mes interventions" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Mes interventions</h1>
                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Catégorie</th>
                                    <th className="px-4 py-2 text-left font-medium">Statut</th>
                                    <th className="px-4 py-2 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {assignments.data.map((assignment) => (
                                    <tr key={assignment.id}>
                                        <td className="px-4 py-2">{assignment.maintenance_request?.category}</td>
                                        <td className="px-4 py-2">
                                            <StatusBadge status={assignment.maintenance_request?.status} />
                                        </td>
                                        <td className="px-4 py-2 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Form action={`/technician/assignments/${assignment.id}/accept`} method="post">
                                                    <Button type="submit" variant="outline" size="sm">Accepter</Button>
                                                </Form>
                                                <Form action={`/technician/assignments/${assignment.id}/update-status`} method="post" className="inline-flex gap-1">
                                                    <input type="hidden" name="status" value="completed" />
                                                    <Button type="submit" variant="outline" size="sm">Terminer</Button>
                                                </Form>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
                <Pagination links={assignments.links} />
            </div>
        </>
    );
}
