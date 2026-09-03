import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';

type Props = {
    children: React.ReactNode;
};

export function MotionProvider({ children }: Props) {
    return (
        <LazyMotion features={domAnimation} strict>
            <MotionConfig reducedMotion='user'>{children}</MotionConfig>
        </LazyMotion>
    );
}
