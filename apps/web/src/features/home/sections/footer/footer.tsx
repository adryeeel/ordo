import { Separator } from '@ordo/ui/shadcn/separator';

import { Brand, Legal, Credits, Navigation } from './components';

export function Footer() {
    return (
        <footer className='p-6 md:p-8'>
            <div className='mx-auto max-w-7xl'>
                <div className='flex flex-col md:flex-row md:items-end'>
                    <Brand />
                    <Navigation className='md:ml-auto' />
                </div>

                <Separator orientation='horizontal' className='my-6' />

                <div className='flex items-center justify-between gap-4'>
                    <Legal />
                    <Credits />
                </div>
            </div>
        </footer>
    );
}
