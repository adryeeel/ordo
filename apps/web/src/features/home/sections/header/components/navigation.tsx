import { cn } from '@ordo/ui/lib/utils';
import { AnchorButton } from '@ordo/ui/composed/anchor';

import { NAV_LINKS } from '@/features/home/constants/navigation';

interface Props {
    className?: string;
}

export function Navigation({ className }: Props) {
    return (
        <nav
            aria-label='Primary navigation'
            className={cn('absolute left-1/2 -translate-x-1/2 items-center gap-1', className)}
        >
            {NAV_LINKS.map(({ href, label }) => (
                <AnchorButton
                    key={href}
                    href={href}
                    variant='ghost'
                    className='text-muted-foreground hover:text-foreground'
                >
                    {label}
                </AnchorButton>
            ))}
        </nav>
    );
}
