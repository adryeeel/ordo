import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@ordo/ui/lib/utils';

type OrdoBrandingProps = {
    className?: string;
    priority?: boolean;
};

type OrdoLogoProps = {
    className?: string;
    priority?: boolean;
};

export function OrdoLogo({ className, priority = false }: OrdoLogoProps) {
    return (
        <Image
            src='/img/ordo.svg'
            alt=''
            width={80}
            height={80}
            className={cn('size-8 dark:invert', className)}
            priority={priority}
        />
    );
}

export function OrdoBranding({ className, priority = false }: OrdoBrandingProps) {
    return (
        <Link
            href='/'
            aria-label='Ordo home'
            className={cn('group flex items-center gap-2.5', className)}
        >
            <OrdoLogo priority={priority} />
            <span className='text-2xl font-semibold tracking-tighter'>Ordo.</span>
        </Link>
    );
}
