import { describe, expect, test } from 'vitest';

import { getClosestWorkflowStep } from '@/features/landing/hooks/use-active-workflow-step';

function createStep(top: number, height = 400) {
    const element = document.createElement('article');
    element.getBoundingClientRect = () =>
        ({ top, height }) as Pick<DOMRect, 'top' | 'height'> as DOMRect;
    return element;
}

describe('getClosestWorkflowStep', () => {
    test('selects the stage whose center is closest to the viewport anchor', () => {
        const steps = [createStep(-500), createStep(100), createStep(700)];

        expect(getClosestWorkflowStep(steps, 400)).toBe(1);
        expect(getClosestWorkflowStep(steps, 900)).toBe(2);
    });

    test('defaults to the first stage when no stages are available', () => {
        expect(getClosestWorkflowStep([], 400)).toBe(0);
    });
});
