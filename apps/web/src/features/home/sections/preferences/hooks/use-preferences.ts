import { useState } from 'react';

import { useScroll, useMotionValueEvent } from '@ordo/ui/provider/motion';

export function usePreferences() {
    const [hide, setHide] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (y) => {
        const bottomDistance = document.body.scrollHeight - window.innerHeight - y;
        setHide(bottomDistance <= 10);
    });

    return { hide };
}
