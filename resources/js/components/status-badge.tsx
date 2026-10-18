import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Option } from '@/types';

const tones: Record<string, string> = {
    confirmed:
        'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
    active: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
    paid: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
    completed: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
    checked_in: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
    partially_paid:
        'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
    overdue: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
    no_show: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
};

export default function StatusBadge({ status }: { status?: Option | null }) {
    if (!status) {
        return null;
    }

    return (
        <Badge variant="secondary" className={cn(tones[status.value])}>
            {status.label}
        </Badge>
    );
}
