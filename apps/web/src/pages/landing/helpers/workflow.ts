export type WorkflowStepState = 'complete' | 'active' | 'upcoming';

export function getSafeWorkflowIndex(activeIndex: number, stepCount: number) {
    return Math.min(Math.max(activeIndex, 0), Math.max(stepCount - 1, 0));
}

export function getWorkflowProgress(activeIndex: number, stepCount: number) {
    if (stepCount <= 1) return 0;
    return (activeIndex / (stepCount - 1)) * 94;
}

export function getWorkflowStepState(stepIndex: number, activeIndex: number): WorkflowStepState {
    if (stepIndex < activeIndex) return 'complete';
    if (stepIndex === activeIndex) return 'active';
    return 'upcoming';
}

export function getStoryStepClassName(index: number, activeIndex: number) {
    const stateClasses =
        index === activeIndex
            ? 'border-primary opacity-100'
            : 'border-border opacity-55 hover:opacity-80';
    const spacingClasses = index > 0 ? 'mt-20 lg:mt-0' : '';

    return `flex flex-col justify-center border-l pl-6 transition-opacity duration-500 sm:pl-10 lg:min-h-[68svh] ${stateClasses} ${spacingClasses}`;
}
