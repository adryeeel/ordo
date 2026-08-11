'use client';

import { motion } from 'motion/react';

import { ArrowDownIcon } from '@ordo/ui/internal/icons';

import { HeroPreview } from '@/pages/landing/components/hero/hero-preview';
import { WaitlistForm } from '@/pages/landing/components/waitlist-form';
import { HERO_PILLARS } from '@/pages/landing/constants/landing-content';

export function HeroSection() {
    return (
        <section className='relative flex min-h-dvh flex-col justify-end overflow-hidden sm:py-10'>
            <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_82%)] [background-size:48px_48px] opacity-35 sm:[background-size:64px_64px]' />
            <div className='bg-primary/10 absolute top-20 left-1/2 -z-10 h-[36rem] w-[54rem] -translate-x-1/2 rounded-full blur-[100px]' />

            <div className='mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className='border-border bg-card/80 text-muted-foreground mb-7 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.68rem] font-medium tracking-[0.08em] uppercase shadow-sm backdrop-blur'>
                        <span className='bg-primary size-1.5 rounded-full' />
                        Built for service operations
                    </div>

                    <h1 className='max-w-3xl text-[clamp(3rem,7vw,5.75rem)] leading-[0.94] font-semibold tracking-[-0.068em] text-balance'>
                        Client work, all the way to <span className='text-primary'>approved.</span>
                    </h1>
                    <p className='text-muted-foreground mt-7 max-w-xl text-base leading-7 sm:text-lg sm:leading-8'>
                        Ordo gives service teams one accountable flow to assign work, track
                        delivery, approve outcomes, and create the invoice.
                    </p>

                    <div id='waitlist' className='mt-9 scroll-mt-28'>
                        <WaitlistForm id='hero-email' />
                        <p className='text-muted-foreground mt-3 px-2 text-xs'>
                            Early access · Product updates only
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className='lg:pt-8'
                >
                    <HeroPreview />
                </motion.div>
            </div>

            <div className='mx-auto mt-24 max-w-7xl px-5 sm:px-8 lg:mt-32'>
                <div className='border-border bg-border grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-3'>
                    {HERO_PILLARS.map((pillar) => (
                        <div key={pillar.title} className='bg-background px-6 py-5 sm:px-7'>
                            <p className='text-sm font-semibold tracking-[-0.02em]'>
                                {pillar.title}
                            </p>
                            <p className='text-muted-foreground mt-1.5 text-xs leading-5'>
                                {pillar.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
