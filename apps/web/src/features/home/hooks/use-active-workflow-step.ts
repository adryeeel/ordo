'use client';

import { useEffect, useRef, useState } from 'react';

export function getClosestWorkflowStep(elements: readonly HTMLElement[], viewportAnchor: number) {
    return elements.reduce(
        (closestIndex, element, index) => {
            const bounds = element.getBoundingClientRect();
            const distance = Math.abs(bounds.top + bounds.height / 2 - viewportAnchor);

            return distance < closestIndex.distance ? { index, distance } : closestIndex;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
    ).index;
}

export function useActiveWorkflowStep() {
    const [activeStep, setActiveStep] = useState(0);
    const storyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const story = storyRef.current;

        if (!story) return;

        const elements = Array.from(story.querySelectorAll<HTMLElement>('[data-story-step]'));
        let frameId = 0;

        const updateActiveStep = () => {
            frameId = 0;
            setActiveStep(getClosestWorkflowStep(elements, window.innerHeight * 0.5));
        };

        const scheduleUpdate = () => {
            if (frameId) return;
            frameId = window.requestAnimationFrame(updateActiveStep);
        };

        updateActiveStep();
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);

        return () => {
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
            if (frameId) window.cancelAnimationFrame(frameId);
        };
    }, []);

    return { activeStep, storyRef };
}
