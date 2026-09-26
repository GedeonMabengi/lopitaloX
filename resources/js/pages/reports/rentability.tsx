import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RentabilityReport({ year, income, expenses, net }: { year: number; income: string; expenses: string; net: string }) {
    return (
        <>
            <Head title="Rentabilité" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Rentabilité {year}</h1>
                <div className="grid gap-4 sm:grid-cols-3">
                    <Card><CardHeader><CardTitle>Revenus</CardTitle></CardHeader><CardContent>{Number(income ?? 0).toFixed(2)} €</CardContent></Card>
                    <Card><CardHeader><CardTitle>Dépenses</CardTitle></CardHeader><CardContent>{Number(expenses ?? 0).toFixed(2)} €</CardContent></Card>
                    <Card><CardHeader><CardTitle>Net</CardTitle></CardHeader><CardContent>{Number(net ?? 0).toFixed(2)} €</CardContent></Card>
                </div>
            </div>
        </>
    );
}
