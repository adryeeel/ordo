'use client';

import { AnimatePresence, m } from 'motion/react';

import { Logo } from '@ordo/ui/internal/logo';
import { CheckIcon } from '@ordo/ui/internal/icons';

import { StageContent } from '@/features/landing/components/workflow/stage-content';
import { WORKFLOW_STEPS } from '@/features/landing/constants/landing-content';
import {
    getSafeWorkflowIndex,
    getWorkflowProgress,
    getWorkflowStepState,
} from '@/features/landing/helpers/workflow';

type WorkflowVisualProps = {
    activeIndex: number;
    compact?: boolean;
};

export function WorkflowVisual({ activeIndex, compact = false }: WorkflowVisualProps) {
    const safeIndex = getSafeWorkflowIndex(activeIndex, WORKFLOW_STEPS.length);
    const activeStep = WORKFLOW_STEPS[safeIndex];

    return (
        <div
            aria-hidden='true'
            inert
            className={`border-border/70 bg-card shadow-foreground/6 relative overflow-hidden rounded-[1.75rem] border shadow-xl dark:shadow-none ${
                compact ? 'mt-8' : 'w-full'
            }`}
        >
            <div className='border-border/70 flex items-center justify-between border-b px-5 py-4'>
                <div className='flex items-center gap-2 text-xs font-semibold'>
                    <Logo className='size-6' />
                    Work / WK-2048
                </div>
                <span className='bg-muted text-muted-foreground rounded-full px-2.5 py-1 text-[0.62rem]'>
                    {safeIndex + 1} of {WORKFLOW_STEPS.length}
                </span>
            </div>

            <div className='px-5 pt-5'>
                <div className='relative flex items-center justify-between'>
                    <div className='bg-border absolute inset-x-3 top-1/2 h-px -translate-y-1/2' />
                    <m.div
                        animate={{
                            width: `${getWorkflowProgress(safeIndex, WORKFLOW_STEPS.length)}%`,
                        }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className='bg-primary absolute top-1/2 left-3 h-px -translate-y-1/2'
                    />
                    {WORKFLOW_STEPS.map((step, index) => {
                        const state = getWorkflowStepState(index, safeIndex);

                        return (
                            <m.span
                                key={step.id}
                                animate={{ scale: state === 'active' ? 1.08 : 1 }}
                                className={`relative grid size-7 place-items-center rounded-full border text-[0.58rem] font-semibold ${
                                    state === 'upcoming'
                                        ? 'border-border bg-card text-muted-foreground'
                                        : 'border-primary bg-primary text-primary-foreground'
                                }`}
                            >
                                {state === 'complete' ? (
                                    <CheckIcon className='size-3.5' />
                                ) : (
                                    index + 1
                                )}
                            </m.span>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence mode='wait' initial={false}>
                <m.div
                    key={activeStep.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                    className='p-5 sm:p-7'
                >
                    <div className='mb-5'>
                        <p className='text-primary mb-1.5 text-[0.62rem] font-semibold tracking-[0.14em] uppercase'>
                            {activeStep.eyebrow}
                        </p>
                        <p className='text-lg font-semibold tracking-[-0.035em]'>
                            {activeStep.title}
                        </p>
                    </div>
                    <StageContent activeIndex={safeIndex} />
                </m.div>
            </AnimatePresence>

            <div className='border-border/70 bg-muted/25 text-muted-foreground flex items-center gap-2 border-t px-5 py-3 text-[0.62rem]'>
                <m.span
                    animate={{ opacity: [1, 0.55, 1], scale: [1, 1.35, 1] }}
                    transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
                    className='bg-primary size-1.5 rounded-full'
                />
                Audit trail active · Every transition is timestamped
            </div>
        </div>
    );
}
