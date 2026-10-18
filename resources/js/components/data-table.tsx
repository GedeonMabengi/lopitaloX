import type { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

/** Les pages écrivent un <thead>/<tbody> classique : le style des cellules est appliqué ici. */
export default function DataTable({ children }: { children: ReactNode }) {
    return (
        <Card className="overflow-hidden py-0">
            <div className="overflow-x-auto">
                <table className="w-full text-sm [&_tbody]:divide-y [&_tbody_tr]:hover:bg-muted/30 [&_td]:px-4 [&_td]:py-3 [&_td]:whitespace-nowrap [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-medium [&_thead]:border-b [&_thead]:bg-muted/50">
                    {children}
                </table>
            </div>
        </Card>
    );
}

export function EmptyRow({
    colSpan,
    children,
}: {
    colSpan: number;
    children: ReactNode;
}) {
    return (
        <tr>
            <td colSpan={colSpan} className="text-center text-muted-foreground">
                {children}
            </td>
        </tr>
    );
}
