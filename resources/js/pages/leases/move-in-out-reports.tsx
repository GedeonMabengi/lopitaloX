import { Head, Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LeaseMoveInOutReports({ lease }: { lease: any }) {
    return (
        <>
            <Head title={`États des lieux - Bail #${lease.id}`} />
            <div className="mx-auto max-w-2xl space-y-4 p-4">
                <h1 className="text-2xl font-semibold">États des lieux - Bail #{lease.id}</h1>

                <Card>
                    <CardHeader><CardTitle>Nouvel état des lieux</CardTitle></CardHeader>
                    <CardContent>
                        <Form action={`/leases/${lease.id}/move-in-out-reports`} method="post" className="space-y-3">
                            <div className="grid gap-2">
                                <Label htmlFor="type">Type</Label>
                                <select id="type" name="type" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs">
                                    <option value="entry">Entrée</option>
                                    <option value="exit">Sortie</option>
                                </select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="report_date">Date</Label>
                                <Input id="report_date" type="date" name="report_date" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="condition_rating">État</Label>
                                <Input id="condition_rating" name="condition_rating" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="notes">Notes</Label>
                                <textarea id="notes" name="notes" rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs" />
                            </div>
                            <Button type="submit">Enregistrer</Button>
                        </Form>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Historique</CardTitle></CardHeader>
                    <CardContent className="space-y-2">
                        {(lease.move_in_out_reports ?? []).map((report: any) => (
                            <p key={report.id} className="text-sm">
                                {report.type} — {report.report_date} — {report.condition_rating}
                            </p>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
