import type { ReactNode } from 'react';
import InputError from '@/components/input-error';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Props = {
    label: string;
    name: string;
    error?: string;
    className?: string;
    children: ReactNode;
};

/** Libellé + champ + erreur de validation. Le champ doit porter id={name}. */
export default function FormField({
    label,
    name,
    error,
    className,
    children,
}: Props) {
    return (
        <div className={cn('grid gap-2', className)}>
            <Label htmlFor={name}>{label}</Label>
            {children}
            <InputError message={error} />
        </div>
    );
}
