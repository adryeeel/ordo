import { OrdoBranding } from '@ordo/ui/internal/branding';
import { ThemeToggle } from '@ordo/ui/internal/theme';
import { Button } from '@ordo/ui/shadcn/button';

import { LANDING_NAV_ITEMS } from '@/features/landing/constants/landing-content';

export function LandingHeader() {
    return (
        <header className='border-border/60 bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl'>
            <div className='mx-auto flex h-18 max-w-7xl items-center px-5 sm:px-8'>
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
                    <ThemeToggle />
                    <a href='#waitlist'>
                        <Button size='sm' className='hidden px-4 sm:inline-flex'>
                            Join the waitlist
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    );
}
