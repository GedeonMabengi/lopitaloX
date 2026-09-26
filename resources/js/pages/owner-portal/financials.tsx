import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OwnerFinancials({ property, income, expenses }: { property: any; income: string; expenses: string }) {
    return (
        <>
            <Head title={`Finances - ${property.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Finances - {property.name}</h1>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Card><CardHeader><CardTitle>Revenus</CardTitle></CardHeader><CardContent>{Number(income ?? 0).toFixed(2)} €</CardContent></Card>
                    <Card><CardHeader><CardTitle>Dépenses</CardTitle></CardHeader><CardContent>{Number(expenses ?? 0).toFixed(2)} €</CardContent></Card>
                </div>
            </div>
        </>
    );
}
