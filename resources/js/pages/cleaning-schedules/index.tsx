import { Head, Form } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import StatusBadge from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CleaningScheduleIndex({ schedules }: { schedules: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title="Plannings de nettoyage" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Plannings de nettoyage</h1>
                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Date</th>
                                    <th className="px-4 py-2 text-left font-medium">Unité</th>
                                    <th className="px-4 py-2 text-left font-medium">Statut</th>
                                    <th className="px-4 py-2 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {schedules.data.map((schedule) => (
                                    <tr key={schedule.id}>
                                        <td className="px-4 py-2">{schedule.scheduled_date}</td>
                                        <td className="px-4 py-2">{schedule.property_unit?.unit_number}</td>
                                        <td className="px-4 py-2"><StatusBadge status={schedule.status} /></td>
                                        <td className="px-4 py-2 text-right">
                                            <Form action={`/cleaning-schedules/${schedule.id}/complete`} method="post">
                                                <Button type="submit" variant="outline" size="sm">Terminer</Button>
                                            </Form>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
                <Pagination links={schedules.links} />
            </div>
        </>
    );
}
