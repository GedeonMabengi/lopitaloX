import { Head, Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SettingIndex({ settings }: { settings: Record<string, string> }) {
    return (
        <>
            <Head title="Paramètres" />
            <div className="mx-auto max-w-2xl space-y-4 p-4">
                <h1 className="text-2xl font-semibold">Paramètres</h1>
                <Card>
                    <CardContent>
                        <Form action="/app-settings" method="post" className="space-y-4">
                            {Object.entries(settings ?? {}).map(([key, value]) => (
                                <div key={key} className="grid gap-2">
                                    <Label htmlFor={key}>{key}</Label>
                                    <Input id={key} name={key} defaultValue={value ?? ''} />
                                </div>
                            ))}
                            <Button type="submit">Enregistrer</Button>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
