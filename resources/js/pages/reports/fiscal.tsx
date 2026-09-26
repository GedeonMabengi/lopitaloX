import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FiscalReport({ totalIncome, totalExpenses, year }: { totalIncome: string; totalExpenses: string; year: number }) {
    return (
        <>
            <Head title="Rapport fiscal" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Rapport fiscal {year}</h1>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Card><CardHeader><CardTitle>Revenus totaux</CardTitle></CardHeader><CardContent>{Number(totalIncome ?? 0).toFixed(2)} €</CardContent></Card>
                    <Card><CardHeader><CardTitle>Dépenses totales</CardTitle></CardHeader><CardContent>{Number(totalExpenses ?? 0).toFixed(2)} €</CardContent></Card>
                </div>
            </div>
        </>
    );
}
