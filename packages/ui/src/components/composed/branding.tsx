import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@ordo/ui/lib/utils';

interface Props {
    className?: string;
    loading?: 'eager' | 'lazy';
}

export function OrdoLogo({ className, loading }: Props) {
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

export function OrdoMark({ className, loading }: Props) {
    return (
        <Link
            href='/'
            aria-label='Go to home'
            className={cn('group flex items-center gap-2.5', className)}
        >
            <OrdoLogo loading={loading} />
            <span className='text-2xl font-semibold tracking-tighter'>Ordo.</span>
        </Link>
    );
}
