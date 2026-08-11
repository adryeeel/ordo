'use client';

import { CheckIcon } from '@ordo/ui/internal/icons';

import { WorkflowVisual } from '@/pages/landing/components/workflow/workflow-visual';
import { WORKFLOW_STEPS } from '@/pages/landing/constants/landing-content';
import { getStoryStepClassName } from '@/pages/landing/helpers/workflow';
import { useActiveWorkflowStep } from '@/pages/landing/hooks/use-active-workflow-step';

export function WorkflowSection() {
    const { activeStep, storyRef } = useActiveWorkflowStep();

    return (
        <section
            id='workflow'
            className='border-border bg-muted/25 scroll-mt-20 border-t py-24 sm:py-32 lg:py-40'
        >
            <div className='mx-auto max-w-7xl px-5 sm:px-8'>
                <div className='mb-20 max-w-3xl lg:mb-8'>
                    <p className='text-primary mb-4 text-xs font-semibold tracking-[0.16em] uppercase'>
                        The Ordo workflow
                    </p>
                    <h2 className='text-4xl leading-[1.03] font-semibold tracking-[-0.055em] text-balance sm:text-5xl lg:text-6xl'>
                        One continuous story, from request to revenue.
                    </h2>
                    <p className='text-muted-foreground mt-5 max-w-2xl text-base leading-7 sm:text-lg'>
                        Scroll through the workflow. Each stage adds control without adding another
                        tool, spreadsheet, or status meeting.
                    </p>
                </div>

                <div
                    ref={storyRef}
                    className='grid items-start gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24'
                >
                    <div>
                        {WORKFLOW_STEPS.map((step, index) => (
                            <article
                                key={step.id}
                                data-story-step={index}
                                className={getStoryStepClassName(index, activeStep)}
                            >
                                <p className='text-primary mb-4 text-[0.68rem] font-semibold tracking-[0.15em] uppercase'>
                                    {step.eyebrow}
                                </p>
                                <h3 className='max-w-lg text-3xl leading-[1.06] font-semibold tracking-[-0.05em] sm:text-4xl'>
                                    {step.title}
                                </h3>
                                <p className='text-muted-foreground mt-5 max-w-lg text-sm leading-6 sm:text-base sm:leading-7'>
                                    {step.description}
                                </p>
                                <div className='mt-6 flex max-w-lg items-start gap-3 text-sm leading-6'>
                                    <span className='bg-primary/10 text-primary mt-0.5 grid size-5 shrink-0 place-items-center rounded-full'>
                                        <CheckIcon className='size-3.5' />
                                    </span>
                                    <span>{step.result}</span>
                                </div>

                                <div className='lg:hidden'>
                                    <WorkflowVisual activeIndex={index} compact />
                                </div>
                            </article>
                        ))}
                    </div>

                    <aside className='sticky top-28 hidden h-[calc(100svh-8.5rem)] items-center lg:flex'>
                        <WorkflowVisual activeIndex={activeStep} />
                    </aside>
                </div>
            </div>
        </section>
    );
}
