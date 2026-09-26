import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function TechnicianIndex({ technicians }: { technicians: any[] }) {
    return (
        <>
            <Head title="Techniciens" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Techniciens</h1>
                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Nom</th>
                                    <th className="px-4 py-2 text-left font-medium">Email</th>
                                    <th className="px-4 py-2 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {technicians.map((tech) => (
                                    <tr key={tech.id}>
                                        <td className="px-4 py-2">{tech.name}</td>
                                        <td className="px-4 py-2">{tech.email}</td>
                                        <td className="px-4 py-2 text-right">
                                            <Button asChild variant="outline" size="sm">
                                                <Link href={`/technicians/${tech.id}/assignments`}>Interventions</Link>
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
