import { Button } from '@ordo/ui/primitive/button';
import { OrdoMark } from '@ordo/ui/composed/branding';

import { MobileMenu } from '@/features/home/sections/mobile';

import { Navigation } from './components';

export function Header() {
    return (
        <header className='fixed inset-x-0 z-50 p-4 md:p-6'>
            <div className='border-border/70 bg-background/70 shadow-foreground/6 relative mx-auto flex max-w-7xl items-center rounded-full border p-3 shadow-lg backdrop-blur-md dark:shadow-none'>
                <OrdoMark loading='eager' />

                <Navigation className='hidden md:flex' />

                <div className='ml-auto flex pr-1.5'>
                    <MobileMenu className='md:hidden' />
                    <Button
                        nativeButton={false}
                        className='hidden md:inline-flex'
                        render={<a href='#waitlist'>Join the waitlist</a>}
                    />
                </div>
            </div>
        </header>
    );
}
