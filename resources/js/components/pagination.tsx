import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};

function normalize(label: string): string {
    return label
        .replace('&laquo;', '«')
        .replace('&raquo;', '»')
        .replace('Previous', 'Précédent')
        .replace('Next', 'Suivant')
        .trim();
}

export default function Pagination({ links }: { links: PaginationLink[] }) {
    if (!links || links.length <= 3) {
        return null;
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-1">
            {links.map((link, index) => {
                const label = normalize(link.label);

                if (!link.url) {
                    return (
                        <span
                            key={index}
                            className="px-3 py-1.5 text-sm text-muted-foreground"
                        >
                            {label}
                        </span>
                    );
                }

                return (
                    <Button
                        key={index}
                        asChild
                        variant={link.active ? 'default' : 'outline'}
                        size="sm"
                        disabled={!link.url}
                    >
                        <Link href={link.url} preserveScroll>
                            {label}
                        </Link>
                    </Button>
                );
            })}
        </div>
    );
}
