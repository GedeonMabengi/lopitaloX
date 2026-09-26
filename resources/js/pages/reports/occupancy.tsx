import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OccupancyReport({ rate, occupied, total }: { rate: number; occupied: number; total: number }) {
    return (
        <>
            <Head title="Taux d'occupation" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Taux d'occupation</h1>
                <Card>
                    <CardHeader><CardTitle>Vue d'ensemble</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                        <p>Occupées : {occupied} / {total}</p>
                        <p>Taux : {Number(rate ?? 0).toFixed(1)}%</p>
                        <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-primary" style={{ width: `${rate}%` }} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
