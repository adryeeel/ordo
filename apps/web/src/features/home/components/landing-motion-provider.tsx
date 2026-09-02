'use client';

import { domAnimation, LazyMotion, MotionConfig } from 'motion/react';

type LandingMotionProviderProps = {
    children: React.ReactNode;
};

export function LandingMotionProvider({ children }: LandingMotionProviderProps) {
    return (
        <LazyMotion features={domAnimation} strict>
            <MotionConfig reducedMotion='user'>{children}</MotionConfig>
        </LazyMotion>
    );
}
