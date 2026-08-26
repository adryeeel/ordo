import { cn } from '@ordo/ui/lib/utils';
import { Button } from '@ordo/ui/shadcn/button';

import { NAV_ITEMS } from '@/features/home/const/navigation';

interface NavigationProps {
    className?: string;
}

interface NavigationItemProps {
    href: string;
    label: string;
}

export function Navigation({ className }: NavigationProps) {
    return (
        <nav
            aria-label='Primary navigation'
            className={cn('absolute left-1/2 -translate-x-1/2 items-center gap-1', className)}
        >
            {NAV_ITEMS.map((item) => (
                <NavigationItem key={item.href} {...item} />
            ))}
        </nav>
    );
}

const NavigationItem = ({ href, label }: NavigationItemProps) => (
    <Button
        variant='ghost'
        nativeButton={false}
        className='text-muted-foreground hover:text-foreground'
        render={<a href={href}>{label}</a>}
    />
);
