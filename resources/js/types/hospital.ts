import type { PaginationLink } from '@/components/pagination';

/** Valeur d'enum envoyée par le serveur (voir App\Enums\Concerns\HasOptions). */
export type Option = {
    value: string;
    label: string;
};

/** Paginateur Laravel tel que sérialisé par Inertia. */
export type Paginated<T> = {
    data: T[];
    links: PaginationLink[];
};
