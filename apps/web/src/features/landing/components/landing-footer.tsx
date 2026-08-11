import Image from 'next/image';

import { Separator } from '@ordo/ui/shadcn/separator';
import { OrdoBranding } from '@ordo/ui/internal/branding';

import { LANDING_NAV_ITEMS } from '@/features/landing/constants/landing-content';

export function LandingFooter() {
    return (
        <footer className='py-12 sm:py-16'>
            <div className='mx-auto max-w-7xl px-5 sm:px-8'>
                <div className='grid lg:grid-cols-[1fr_auto] lg:items-end'>
                    <div>
                        <OrdoBranding />
                        <p className='text-muted-foreground mt-3 text-sm leading-5 font-medium'>
                            Structured work. Clear outcomes.
                        </p>
                    </div>

                    <nav
                        aria-label='Footer navigation'
                        className='text-muted-foreground mt-6 flex flex-col flex-wrap gap-x-7 gap-y-3 text-sm sm:flex-row lg:justify-center lg:pt-2'
                    >
                        {LANDING_NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className='hover:text-foreground transition-colors'
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <Separator orientation='horizontal' className='my-6' />

                <div className='flex justify-between'>
                    <p className='text-muted-foreground text-xs'>
                        © 2026 Ordo. All rights reserved.
                    </p>

                    <a
                        href='https://arocha.dev'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='border-border bg-card text-muted-foreground -mt-3 inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-2.5 text-xs shadow-sm'
                        aria-label='A product by arocha.dev'
                    >
                        <span>A product by</span>
                        <Separator orientation='vertical' />
                        <Image
                            src='/img/arocha.svg'
                            alt=''
                            width={263}
                            height={171}
                            loading='eager'
                            className='ml-0.5 h-4 w-auto dark:invert'
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
