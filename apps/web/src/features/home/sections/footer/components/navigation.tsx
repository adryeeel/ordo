import { cn } from '@ordo/ui/lib/utils';

import { NAV_ITEMS } from '@/features/home/const/navigation';

interface Props {
    className?: string;
}

export function Navigation({ className }: Props) {
    return (
        <nav
            aria-label='Footer navigation'
            className={cn(
                'text-muted-foreground mt-6 flex flex-col flex-wrap gap-y-3 text-sm md:flex-row',
                className,
            )}
        >
            {NAV_ITEMS.map((item) => (
                <li key={item.href} className='list-none [&:last-child_span]:hidden'>
                    <a
                        target='_self'
                        href={item.href}
                        className='hover:text-foreground transition-colors'
                    >
                        {item.label}
                    </a>
                    <span className='mx-[1ch] hidden select-none md:inline-block'>&middot;</span>
                </li>
            ))}
        </nav>
    );
}
