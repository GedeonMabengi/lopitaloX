import { Head } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import { Card, CardContent } from '@/components/ui/card';

export default function TechnicianAssignments({ user, assignments }: { user: any; assignments: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title={`Interventions - ${user.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Interventions - {user.name}</h1>
                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Demande</th>
                                    <th className="px-4 py-2 text-left font-medium">Assigné le</th>
                                    <th className="px-4 py-2 text-left font-medium">Planifié</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {assignments.data.map((a) => (
                                    <tr key={a.id}>
                                        <td className="px-4 py-2">{a.maintenance_request?.category}</td>
                                        <td className="px-4 py-2">{a.assigned_at}</td>
                                        <td className="px-4 py-2">{a.scheduled_at ?? '—'}</td>
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
