import { DialogClose } from '@ordo/ui/shadcn/dialog';
import { ArrowUpRightIcon } from '@ordo/ui/icons/symbols';

import { NAV_ITEMS } from '@/features/home/const/navigation';

interface Props {
    href: string;
    label: string;
}

export function Navigation() {
    return (
        <nav
            aria-label='Mobile navigation'
            className='animate-in fade-in slide-in-from-left-3 mt-15 divide-y duration-300 motion-reduce:animate-none'
        >
            {NAV_ITEMS.map((item) => (
                <NavigationItem key={item.href} {...item} />
            ))}
        </nav>
    );
}

const NavigationItem = ({ href, label }: Props) => (
    <DialogClose
        nativeButton={false}
        render={
            <a
                href={href}
                className='group/link text-primary-foreground/75 hover:text-foreground flex items-center justify-between py-5 text-2xl font-semibold tracking-[-0.03em] transition-colors'
            >
                {label}
                <ArrowUpRightIcon className='text-muted-foreground size-5 transition-transform group-hover/link:translate-x-1' />
            </a>
        }
    />
);
