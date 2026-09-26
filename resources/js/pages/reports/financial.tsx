import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FinancialReport({ payments, expenses, year }: { payments: any[]; expenses: any[]; year: number }) {
    const totalIncome = (payments ?? []).reduce((sum, p) => sum + Number(p.amount ?? 0), 0);
    const totalExpenses = (expenses ?? []).reduce((sum, e) => sum + Number(e.amount ?? 0), 0);

    return (
        <>
            <Head title="Rapport financier" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Rapport financier {year}</h1>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Card><CardHeader><CardTitle>Revenus</CardTitle></CardHeader><CardContent>{totalIncome.toFixed(2)} €</CardContent></Card>
                    <Card><CardHeader><CardTitle>Dépenses</CardTitle></CardHeader><CardContent>{totalExpenses.toFixed(2)} €</CardContent></Card>
                </div>
                <p>Paiements : {(payments ?? []).length} — Dépenses : {(expenses ?? []).length}</p>
            </div>
        </>
    );
}
