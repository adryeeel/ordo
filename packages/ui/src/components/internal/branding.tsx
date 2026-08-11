import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@ordo/ui/lib/utils';

type OrdoBrandingProps = {
    className?: string;
    priority?: boolean;
};

export function OrdoBranding({ className, priority = false }: OrdoBrandingProps) {
    return (
        <Link
            href='/'
            aria-label='Ordo home'
            className={cn('group flex items-center gap-2.5', className)}
        >
            <Image
                src='/img/ordo.svg'
                alt=''
                width={32}
                height={32}
                className='size-8 dark:invert'
                priority={priority}
            />
            <span className='text-2xl font-semibold tracking-tighter'>Ordo.</span>
        </Link>
    );
}
