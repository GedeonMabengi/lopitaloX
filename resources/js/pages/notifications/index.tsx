import { Head, Form } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotificationIndex({ notifications }: { notifications: { data: any[]; links: any[] } }) {
    return (
        <>
            <Head title="Notifications" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Notifications</h1>
                    <Form action="/notifications/mark-all-read" method="post">
                        <Button type="submit" variant="outline" size="sm">Tout marquer comme lu</Button>
                    </Form>
                </div>
                <Card>
                    <CardContent className="divide-y p-0">
                        {notifications.data.map((n) => (
                            <div key={n.id} className="flex items-center justify-between px-4 py-3">
                                <p className="text-sm">{JSON.stringify(n.data)}</p>
                                {!n.read_at && (
                                    <Form action={`/notifications/${n.id}/mark-read`} method="post">
                                        <Button type="submit" variant="outline" size="sm">Marquer lu</Button>
                                    </Form>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Pagination links={notifications.links} />
            </div>
        </>
    );
}
