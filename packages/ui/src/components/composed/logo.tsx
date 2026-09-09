import Image from 'next/image';

import { cn } from '@ordo/ui/lib/utils';

interface Props {
    className?: string;
    loading?: 'eager' | 'lazy';
}

export function OrdoLogo({ loading, className }: Props) {
    return (
        <Image
            alt=''
            width={80}
            height={80}
            loading={loading}
            src='/img/ordo.svg'
            className={cn('size-8 dark:invert', className)}
        />
    );
}
