'use client';

import { MotionConfig } from 'motion/react';

type LandingMotionProviderProps = {
    children: React.ReactNode;
};

export function LandingMotionProvider({ children }: LandingMotionProviderProps) {
    return <MotionConfig reducedMotion='user'>{children}</MotionConfig>;
}
