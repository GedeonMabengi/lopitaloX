import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import type { Option } from '@/types';

type Props = ComponentProps<'select'> & {
    options: Option[];
    placeholder?: string;
};

/**
 * <select> natif au style de ui/input. Contrairement au Select Radix, il est
 * lu directement par <Form> d'Inertia et accepte defaultValue.
 */
export default function NativeSelect({
    options,
    placeholder,
    className,
    ...props
}: Props) {
    return (
        <select
            className={cn(
                'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none md:text-sm',
                'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
                'aria-invalid:border-destructive dark:bg-input/30',
                className,
            )}
            {...props}
        >
            {placeholder !== undefined && (
                <option value="">{placeholder}</option>
            )}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
