import Image from 'next/image';

import { cn } from '@ordo/ui/lib/utils';

interface Props {
    className?: string;
    loading?: 'eager' | 'lazy';
}

export function Logo({ className, loading }: Props) {
    return (
        <Image
            src='/img/ordo.svg'
            alt='Minimalist round flower petals'
            width={80}
            height={80}
            loading={loading}
            className={cn('size-8 dark:invert', className)}
        />
    );
}
