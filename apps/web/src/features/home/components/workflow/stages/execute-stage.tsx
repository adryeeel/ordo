'use client';

import { m } from 'motion/react';

import { CheckIcon } from '@ordo/ui/icons/symbols';

import { WORK_MILESTONES } from '@/features/home/const/landing-content';

export function ExecuteStage() {
    return (
        <div className='border-border bg-background/60 rounded-2xl border p-4'>
            <div className='mb-5 flex items-end justify-between'>
                <div>
                    <p className='text-muted-foreground text-[0.6rem]'>Work in progress</p>
                    <p className='mt-1 text-2xl font-semibold tracking-[-0.045em]'>72%</p>
                </div>
                <span className='bg-primary/10 text-primary rounded-full px-2.5 py-1 text-[0.6rem] font-medium'>
                    On track
                </span>
            </div>
            <div className='bg-muted mb-5 h-1.5 overflow-hidden rounded-full'>
                <m.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className='bg-primary h-full w-[72%] origin-left rounded-full'
                />
            </div>
            <div className='space-y-2.5'>
                {WORK_MILESTONES.map((milestone) => (
                    <div
                        key={milestone.title}
                        className='bg-card flex items-center gap-3 rounded-xl p-3'
                    >
                        <span
                            className={`grid size-5 place-items-center rounded-full ${
                                milestone.complete
                                    ? 'bg-primary text-primary-foreground'
                                    : 'border-primary text-primary border'
                            }`}
                        >
                            {milestone.complete ? (
                                <CheckIcon className='size-3' />
                            ) : (
                                <span className='bg-primary size-1.5 rounded-full' />
                            )}
                        </span>
                        <p className='flex-1 text-[0.68rem] font-medium'>{milestone.title}</p>
                        <p className='text-muted-foreground text-[0.58rem]'>{milestone.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
