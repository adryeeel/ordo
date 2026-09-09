import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';

export function usePreferences() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (y) => {
        const bottomDistance = document.body.scrollHeight - window.innerHeight - y;
        setHidden(bottomDistance <= 10);
    });

    return { hidden };
}
