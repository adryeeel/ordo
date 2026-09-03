import { m } from '@ordo/ui/provider/motion';
import type { Variants, Transition } from '@ordo/ui/provider/motion';

interface Props {
    open: boolean;
}

export function Hamburger({ open }: Props) {
    const top: Variants = {
        open: { y: 5, rotate: 45 },
        close: { y: 0, rotate: 0 },
    };

    const bot: Variants = {
        open: { y: -5, rotate: -45 },
        close: { y: 0, rotate: 0 },
    };

    const transition: Transition = {
        duration: 0.075,
        ease: 'easeInOut',
        y: { delay: open ? 0 : 0.15 },
        rotate: { delay: open ? 0.15 : 0 },
    };

    const style = 'bg-foreground h-0.5 w-full rounded-full';

    return (
        <div className='flex size-6 flex-col justify-center gap-y-2'>
            <m.span
                variants={top}
                className={style}
                transition={transition}
                animate={open ? 'open' : 'close'}
            />
            <m.span
                variants={bot}
                className={style}
                transition={transition}
                animate={open ? 'open' : 'close'}
            />
        </div>
    );
}
