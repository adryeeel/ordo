import Link from 'next/link';

import { cn } from '@ordo/ui/lib/utils';
import { Logo } from '@ordo/ui/composed/logo';

interface Props {
    className?: string;
    loading?: 'eager' | 'lazy';
}

export function Branding({ className, loading }: Props) {
    return (
        <Link
            href='/'
            aria-label='Go to home'
            className={cn('group flex items-center gap-2.5', className)}
        >
            <Logo loading={loading} />
            <span className='text-2xl font-semibold tracking-tighter'>Ordo.</span>
        </Link>
    );
}
