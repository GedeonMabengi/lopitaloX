import { Head, Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MessageShow({ thread }: { thread: any }) {
    return (
        <>
            <Head title={thread.subject} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">{thread.subject}</h1>

                <Card>
                    <CardContent className="space-y-3 pt-6">
                        {(thread.messages ?? []).map((message: any) => (
                            <div key={message.id} className="rounded-md border p-3">
                                <p className="text-sm font-medium">{message.sender?.name}</p>
                                <p className="text-sm">{message.body}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Répondre</CardTitle></CardHeader>
                    <CardContent>
                        <Form action={`/message-threads/${thread.id}/messages`} method="post" className="space-y-3">
                            <textarea name="body" rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs" required />
                            <Button type="submit">Envoyer</Button>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
