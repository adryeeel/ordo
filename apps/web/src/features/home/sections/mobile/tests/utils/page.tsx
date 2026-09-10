import '@ordo/ui/styles.css';

import { MobileMenu } from '@/features/home/sections/mobile';
import { useHeader } from '@/features/home/sections/header/hooks';

export function Page() {
    const { open, close, setOpen } = useHeader();

    return (
        <MobileMenu
            open={open}
            onNavigation={close}
            onOpenChange={setOpen}
            className='fixed z-30'
        />
    );
}
