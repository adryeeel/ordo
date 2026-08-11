'use client';

import { m } from 'motion/react';

import { OutcomeIcon } from '@/features/landing/components/outcomes/outcome-icon';
import { OUTCOMES } from '@/features/landing/constants/landing-content';

export function OutcomesSection() {
    return (
        <section id='outcomes' className='scroll-mt-20 py-24 sm:py-32 lg:py-40'>
            <div className='mx-auto max-w-7xl px-5 sm:px-8'>
                <div className='grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end'>
                    <div>
                        <h2 className='max-w-2xl text-4xl leading-[1.03] font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl'>
                            Less chasing. More completed work.
                        </h2>
                    </div>
                    <p className='text-muted-foreground max-w-2xl text-base leading-7 lg:justify-self-end lg:text-lg lg:leading-8'>
                        Ordo replaces coordination overhead with a workflow your team can see,
                        understand, and trust—from the first request to the final record.
                    </p>
                </div>

                <div className='mt-16 grid gap-4 md:grid-cols-3'>
                    {OUTCOMES.map((outcome, index) => (
                        <m.article
                            key={outcome.label}
                            initial='rest'
                            whileHover='hover'
                            animate='rest'
                            variants={{ rest: { y: 0 }, hover: { y: -4 } }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                            className={`relative min-h-80 overflow-hidden rounded-[1.75rem] border p-7 sm:p-8 ${
                                index === 1
                                    ? 'border-[#1f4c3e] bg-[#16352c] text-white shadow-xl shadow-[#16352c]/15'
                                    : 'border-border bg-card'
                            }`}
                        >
                            <div
                                className={`mb-16 grid size-11 place-items-center rounded-xl ${
                                    index === 1
                                        ? 'bg-white/10 text-[#9fe7c6]'
                                        : 'bg-primary/10 text-primary'
                                }`}
                            >
                                <OutcomeIcon type={outcome.type} />
                            </div>
                            <p
                                className={`mb-3 text-[0.65rem] font-semibold tracking-[0.15em] uppercase ${
                                    index === 1 ? 'text-[#9fe7c6]' : 'text-primary'
                                }`}
                            >
                                {outcome.label}
                            </p>
                            <h3 className='max-w-sm text-xl leading-7 font-semibold tracking-[-0.035em]'>
                                {outcome.title}
                            </h3>
                            <p
                                className={`mt-4 max-w-sm text-sm leading-6 ${
                                    index === 1 ? 'text-white/60' : 'text-muted-foreground'
                                }`}
                            >
                                {outcome.body}
                            </p>
                            <m.span
                                variants={{ rest: { scale: 1 }, hover: { scale: 1.25 } }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className={`absolute -right-12 -bottom-12 size-36 rounded-full border ${
                                    index === 1 ? 'border-white/10' : 'border-primary/10'
                                }`}
                            />
                        </m.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
