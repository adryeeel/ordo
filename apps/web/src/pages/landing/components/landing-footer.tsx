import { OrdoBranding } from '@ordo/ui/internal/branding';

import { LANDING_NAV_ITEMS } from '@/pages/landing/constants/landing-content';

export function LandingFooter() {
    return (
        <footer className='py-10'>
            <div className='mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:px-8'>
                <OrdoBranding />
                <p className='text-muted-foreground text-xs sm:ml-4'>
                    Structured work. Clear outcomes.
                </p>
                <div className='text-muted-foreground flex items-center gap-6 text-xs sm:ml-auto'>
                    {LANDING_NAV_ITEMS.slice(0, 2).map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className='hover:text-foreground transition-colors'
                        >
                            {item.label}
                        </a>
                    ))}
                    <span>© 2026 Ordo</span>
                </div>
            </div>
        </footer>
    );
}
