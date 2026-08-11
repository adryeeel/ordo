import { OrdoBranding } from '@ordo/ui/internal/branding';
import { ThemeToggle } from '@ordo/ui/internal/theme';
import { Button } from '@ordo/ui/shadcn/button';

import { LANDING_NAV_ITEMS } from '@/features/landing/constants/landing-content';
import { MobileMenu } from '@/features/landing/components/menu/mobile-menu';

export function LandingHeader() {
    return (
        <header className='pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:px-5'>
            <div className='border-border/70 bg-background/80 shadow-foreground/6 pointer-events-auto relative mx-auto flex h-14 max-w-7xl items-center rounded-full border px-3 shadow-lg backdrop-blur-xl sm:px-4 dark:shadow-none'>
                <OrdoBranding priority />

                <nav
                    aria-label='Primary navigation'
                    className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex'
                >
                    {LANDING_NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className='text-muted-foreground hover:bg-muted hover:text-foreground rounded-full px-4 py-2 text-sm transition-colors'
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className='ml-auto flex items-center gap-2'>
                    <div className='hidden md:block'>
                        <ThemeToggle />
                    </div>
                    <Button
                        size='sm'
                        nativeButton={false}
                        className='hidden px-4 md:inline-flex'
                        render={<a href='#waitlist'>Join the waitlist</a>}
                    />
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
