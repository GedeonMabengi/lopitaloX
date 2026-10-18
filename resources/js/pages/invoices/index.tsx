import { Head } from '@inertiajs/react';
import DataTable, { EmptyRow } from '@/components/data-table';
import PageHeader from '@/components/page-header';
import Pagination from '@/components/pagination';
import StatusBadge from '@/components/status-badge';
import invoices from '@/routes/invoices';
import type { Option, Paginated } from '@/types';

type InvoiceRow = {
    id: number;
    code: string;
    invoiceDate: string;
    patient: string;
    totalAmount: number;
    paidAmount: number;
    balanceDue: number;
    status: Option;
};

const currency = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
});

export default function InvoiceIndex({
    invoices: list,
}: {
    invoices: Paginated<InvoiceRow>;
}) {
    return (
        <>
            <Head title="Factures" />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title="Factures" />

                <DataTable>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Date</th>
                            <th>Patient</th>
                            <th className="text-right">Montant total</th>
                            <th className="text-right">Payé</th>
                            <th className="text-right">Reste</th>
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.data.length === 0 && (
                            <EmptyRow colSpan={7}>Aucune facture.</EmptyRow>
                        )}
                        {list.data.map((invoice) => (
                            <tr key={invoice.id}>
                                <td>{invoice.code}</td>
                                <td>{invoice.invoiceDate}</td>
                                <td className="font-medium">
                                    {invoice.patient}
                                </td>
                                <td className="text-right tabular-nums">
                                    {currency.format(invoice.totalAmount)}
                                </td>
                                <td className="text-right tabular-nums">
                                    {currency.format(invoice.paidAmount)}
                                </td>
                                <td className="text-right tabular-nums">
                                    {currency.format(invoice.balanceDue)}
                                </td>
                                <td>
                                    <StatusBadge status={invoice.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </DataTable>

                <Pagination links={list.links} />
            </div>
        </>
    );
}

InvoiceIndex.layout = {
    breadcrumbs: [{ title: 'Facturation', href: invoices.index() }],
};
