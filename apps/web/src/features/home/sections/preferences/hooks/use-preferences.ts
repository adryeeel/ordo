import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';

export function usePreferences() {
    const [hide, setHide] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (y) => {
        const bottomDistance = document.body.scrollHeight - window.innerHeight - y;
        setHide(bottomDistance <= 10);
    });

    return { hide };
}
