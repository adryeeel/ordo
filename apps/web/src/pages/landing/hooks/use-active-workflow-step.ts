'use client';

import { useEffect, useRef, useState } from 'react';

export function useActiveWorkflowStep() {
    const [activeStep, setActiveStep] = useState(0);
    const storyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const story = storyRef.current;

        if (!story || !('IntersectionObserver' in window)) return;

        const elements = story.querySelectorAll<HTMLElement>('[data-story-step]');
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry) {
                    setActiveStep(Number((visibleEntry.target as HTMLElement).dataset.storyStep));
                }
            },
            { rootMargin: '-34% 0px -46% 0px', threshold: [0, 0.25, 0.5, 0.75] },
        );

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return { activeStep, storyRef };
}
