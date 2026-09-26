import { Badge } from '@/components/ui/badge';

const tone: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
    active: 'default',
    completed: 'default',
    paid: 'default',
    confirmed: 'default',
    occupied: 'default',
    vacant: 'secondary',
    pending: 'secondary',
    draft: 'secondary',
    open: 'secondary',
    planned: 'secondary',
    in_progress: 'secondary',
    expired: 'outline',
    terminated: 'outline',
    cancelled: 'outline',
    overdue: 'destructive',
    failed: 'destructive',
    refunded: 'outline',
    maintenance: 'outline',
};

export default function StatusBadge({ status }: { status?: string | null }) {
    if (!status) {
        return null;
    }

    return <Badge variant={tone[status] ?? 'outline'}>{status}</Badge>;
}
