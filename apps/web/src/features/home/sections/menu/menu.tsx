import { useState } from 'react';

import {
    DialogRoot,
    DialogTitle,
    DialogPopup,
    DialogPortal,
    DialogTrigger,
} from '@ordo/ui/shadcn/dialog';

import { Socials, Hamburger, Navigation } from './components';

interface Props {
    className?: string;
}

export function Menu({ className }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DialogRoot open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger aria-label='Open navigation menu' className={className}>
                <Hamburger open={isOpen} />
            </DialogTrigger>

            <DialogPortal>
                <DialogPopup className='bg-background/80 fixed inset-0 z-20 flex flex-col p-5 backdrop-blur-3xl transition-opacity duration-300 data-closed:opacity-0 data-ending-style:opacity-0 data-open:opacity-100 data-starting-style:opacity-0 motion-reduce:transition-none'>
                    <DialogTitle className='sr-only'>Page Sections</DialogTitle>
                    <Navigation />
                    <Socials />
                </DialogPopup>
            </DialogPortal>
        </DialogRoot>
    );
}
