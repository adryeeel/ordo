import { ArrowRightIcon, SettingsIcon } from '@ordo/ui/icons/symbols';

import { LANDING_NAV_ITEMS } from '@/features/home/constants/landing-content';

type MobileMenuNavigationProps = {
    onClose: () => void;
    onOpenPreferences: () => void;
};

export function MobileMenuNavigation({ onClose, onOpenPreferences }: MobileMenuNavigationProps) {
    return (
        <>
            <nav
                aria-label='Mobile navigation'
                className='divide-border animate-in fade-in slide-in-from-left-3 mt-6 divide-y duration-300 motion-reduce:animate-none'
            >
                {LANDING_NAV_ITEMS.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className='group/link hover:text-primary flex min-h-16 items-center justify-between text-2xl font-semibold tracking-[-0.03em] transition-colors'
                    >
                        {item.label}
                        <ArrowRightIcon className='text-muted-foreground size-5 transition-transform group-hover/link:translate-x-1' />
                    </a>
                ))}
            </nav>

            <div className='animate-in fade-in slide-in-from-bottom-3 mt-auto flex items-center gap-2 pt-10 duration-300 motion-reduce:animate-none'>
                <button
                    type='button'
                    aria-label='Open preferences'
                    onClick={onOpenPreferences}
                    className='bg-muted hover:bg-accent focus-visible:ring-ring grid size-12 shrink-0 place-items-center rounded-full transition-colors outline-none focus-visible:ring-3'
                >
                    <SettingsIcon className='size-5' />
                </button>
                <a
                    href='#waitlist'
                    onClick={onClose}
                    className='bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:ring-ring flex h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-full px-3 text-sm font-medium transition-colors outline-none focus-visible:ring-3'
                >
                    Join the waitlist
                    <ArrowRightIcon className='size-4' />
                </a>
            </div>
        </>
    );
}
