import { Head, Link } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';

export default function TenantMessages({ threads }: { threads: any[] }) {
    return (
        <>
            <Head title="Mes messages" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Mes messages</h1>
                <Card>
                    <CardContent className="divide-y p-0">
                        {(threads ?? []).map((thread) => (
                            <div key={thread.id} className="px-4 py-3">
                                <Link href={`/message-threads/${thread.id}`} className="font-medium text-primary underline">
                                    {thread.subject}
                                </Link>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
