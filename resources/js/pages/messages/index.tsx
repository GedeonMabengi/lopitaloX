import { Head, Link } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function MessageIndex({ threads }: { threads: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title="Messages" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Messages</h1>
                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-medium">Sujet</th>
                                    <th className="px-4 py-2 text-left font-medium">Messages</th>
                                    <th className="px-4 py-2 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {threads.data.map((thread) => (
                                    <tr key={thread.id}>
                                        <td className="px-4 py-2">{thread.subject}</td>
                                        <td className="px-4 py-2">{thread.messages?.length ?? 0}</td>
                                        <td className="px-4 py-2 text-right">
                                            <Button asChild variant="outline" size="sm">
                                                <Link href={`/message-threads/${thread.id}`}>Voir</Link>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
                <Pagination links={threads.links} />
            </div>
        </>
    );
}
