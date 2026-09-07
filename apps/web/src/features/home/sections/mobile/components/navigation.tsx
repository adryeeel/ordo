import { ArrowUpRightIcon } from '@ordo/ui/icons/symbols';

import { NAV_ITEMS } from '@/features/home/const/navigation';

interface Props {
    onClick?: () => void;
}

export function Navigation({ onClick }: Props) {
    return (
        <nav
            aria-label='Mobile navigation'
            className='animate-in fade-in slide-in-from-left-3 mt-18 divide-y duration-300 motion-reduce:animate-none'
        >
            {NAV_ITEMS.map(({ href, label }) => (
                <a
                    key={href}
                    href={href}
                    onClick={onClick}
                    className='group/link text-foreground/75 hover:text-foreground flex items-center justify-between py-5 text-2xl font-semibold tracking-[-0.03em] transition-colors'
                >
                    {label}
                    <ArrowUpRightIcon className='text-muted-foreground size-5 transition-transform group-hover/link:translate-x-1' />
                </a>
            ))}
        </nav>
    );
}
