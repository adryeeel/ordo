'use client';

import { motion } from 'motion/react';

import { CheckIcon } from '@ordo/ui/internal/icons';
import { OrdoMark } from '@ordo/ui/internal/ordo-mark';

import {
    WORK_ACTIVITY,
    WORK_ASSIGNEES,
    WORK_SUMMARY_FIELDS,
    WORKSPACE_NAV_ITEMS,
} from '@/pages/landing/constants/landing-content';

export function HeroPreview() {
    return (
        <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
            className='relative mx-auto w-full max-w-2xl'
        >
            <div className='bg-primary/10 absolute -inset-8 rounded-full blur-3xl' />
            <div className='border-border/80 bg-card shadow-foreground/10 relative overflow-hidden rounded-[1.75rem] border shadow-2xl dark:shadow-none'>
                <div className='border-border/70 flex h-12 items-center border-b px-5'>
                    <div className='flex gap-1.5' aria-hidden='true'>
                        <span className='bg-foreground/15 size-2 rounded-full' />
                        <span className='bg-foreground/15 size-2 rounded-full' />
                        <span className='bg-foreground/15 size-2 rounded-full' />
                    </div>
                    <div className='text-muted-foreground mx-auto flex items-center gap-2 text-[0.68rem] font-medium'>
                        Ordo Workspace
                    </div>
                    <span className='bg-muted size-6 rounded-full' />
                </div>

                <div className='grid min-h-[29rem] grid-cols-[4.75rem_1fr] sm:grid-cols-[10.5rem_1fr]'>
                    <aside className='border-border/70 bg-muted/30 border-r p-3 sm:p-4'>
                        <p className='text-muted-foreground mb-5 hidden text-[0.65rem] font-semibold tracking-[0.12em] uppercase sm:block'>
                            Workspace
                        </p>
                        <div className='space-y-2'>
                            {WORKSPACE_NAV_ITEMS.map((item, index) => (
                                <div
                                    key={item}
                                    className={`flex h-8 items-center gap-2.5 rounded-lg px-2.5 text-[0.7rem] ${
                                        index === 1
                                            ? 'bg-card text-foreground font-medium shadow-sm'
                                            : 'text-muted-foreground'
                                    }`}
                                >
                                    <span
                                        className={`size-2 rounded-sm ${index === 1 ? 'bg-primary' : 'bg-foreground/15'}`}
                                    />
                                    <span className='hidden sm:inline'>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className='border-border bg-card mt-36 hidden rounded-xl border p-3 sm:block'>
                            <div className='bg-primary/30 mb-2 h-1.5 w-12 rounded-full' />
                            <p className='text-muted-foreground text-[0.62rem] leading-relaxed'>
                                Every action stays recorded.
                            </p>
                        </div>
                    </aside>

                    <div className='bg-background/40 min-w-0 p-4 sm:p-6'>
                        <div className='mb-5 flex items-start justify-between gap-3'>
                            <div>
                                <p className='text-muted-foreground mb-1 text-[0.62rem] font-medium tracking-[0.1em] uppercase'>
                                    Work · WK-2048
                                </p>
                                <h2 className='text-base font-semibold tracking-[-0.025em] sm:text-lg'>
                                    Brand rollout
                                </h2>
                            </div>
                            <span className='border-primary/15 bg-primary/8 text-primary rounded-full border px-2.5 py-1 text-[0.62rem] font-medium'>
                                In progress
                            </span>
                        </div>

                        <div className='mb-4 grid gap-3 sm:grid-cols-3'>
                            {WORK_SUMMARY_FIELDS.map((field) => (
                                <div
                                    key={field.label}
                                    className='border-border/70 bg-card rounded-xl border p-3'
                                >
                                    <p className='text-muted-foreground mb-1 text-[0.6rem]'>
                                        {field.label}
                                    </p>
                                    <p className='truncate text-[0.72rem] font-medium'>
                                        {field.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className='border-border/70 bg-card rounded-2xl border p-4 sm:p-5'>
                            <div className='mb-4 flex items-center justify-between'>
                                <div>
                                    <p className='text-muted-foreground text-[0.65rem]'>
                                        Overall progress
                                    </p>
                                    <p className='mt-0.5 text-xl font-semibold tracking-[-0.04em]'>
                                        72%
                                    </p>
                                </div>
                                <div className='flex -space-x-2'>
                                    {WORK_ASSIGNEES.map((initials, index) => (
                                        <span
                                            key={initials}
                                            className={`border-card grid size-8 place-items-center rounded-full border-2 text-[0.55rem] font-semibold ${
                                                index === 0
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'bg-muted text-muted-foreground'
                                            }`}
                                        >
                                            {initials}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='bg-muted h-1.5 overflow-hidden rounded-full'>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        duration: 0.9,
                                        delay: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className='bg-primary h-full w-[72%] origin-left rounded-full'
                                />
                            </div>
                        </div>

                        <div className='border-border/70 bg-card mt-4 rounded-2xl border p-4 sm:p-5'>
                            <div className='mb-4 flex items-center justify-between'>
                                <p className='text-xs font-semibold'>Latest activity</p>
                                <span className='text-muted-foreground text-[0.62rem]'>Today</span>
                            </div>
                            <div className='space-y-4'>
                                {WORK_ACTIVITY.map((activity, index) => (
                                    <div key={activity.title} className='flex items-start gap-3'>
                                        <span
                                            className={`mt-1 size-2 rounded-full ${
                                                index === 0 ? 'bg-primary' : 'bg-border'
                                            }`}
                                        />
                                        <div>
                                            <p className='text-[0.68rem] font-medium'>
                                                {activity.title}
                                            </p>
                                            <p className='text-muted-foreground mt-0.5 text-[0.6rem]'>
                                                {activity.meta}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                // animate={{ x: [0, -4, 0], y: [0, -7, 0] }}
                // transition={{ duration: 1, delay: 0.8, ease: 'easeInOut', repeat: Infinity }}
                className='border-border bg-card absolute -right-2 -bottom-5 hidden rounded-2xl border p-3 pr-6 shadow-xl sm:flex sm:items-center sm:gap-3'
            >
                <span className='bg-primary/10 text-primary grid size-9 place-items-center rounded-full'>
                    <CheckIcon className='size-5' />
                </span>
                <div>
                    <p className='text-[0.68rem] font-semibold'>Progress captured</p>
                    <p className='text-muted-foreground text-[0.6rem]'>
                        Timeline updated automatically
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}
