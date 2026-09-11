import {
    DialogRoot,
    DialogTitle,
    DialogPopup,
    DialogPortal,
    DialogTrigger,
} from '@ordo/ui/primitive/dialog';

import { Socials, Hamburger, Navigation } from './components';

interface Props {
    open?: boolean;
    className?: string;
    onNavigation?: () => void;
    onOpenChange?: (open: boolean) => void;
}

export function MobileMenu({ open, className, onOpenChange, onNavigation }: Props) {
    return (
        <DialogRoot open={open} onOpenChange={onOpenChange}>
            <DialogTrigger aria-label='Open navigation menu' className={className}>
                <Hamburger open={open} />
            </DialogTrigger>

            <DialogPortal>
                <DialogPopup className='bg-background/80 fixed inset-0 z-20 flex flex-col p-5 backdrop-blur-3xl transition-opacity duration-300 data-closed:opacity-0 data-ending-style:opacity-0 data-open:opacity-100 data-starting-style:opacity-0 motion-reduce:transition-none'>
                    <DialogTitle className='sr-only'>Page Sections</DialogTitle>
                    <Navigation onClick={onNavigation} />
                    <Socials onClick={onNavigation} />
                </DialogPopup>
            </DialogPortal>
        </DialogRoot>
    );
}
