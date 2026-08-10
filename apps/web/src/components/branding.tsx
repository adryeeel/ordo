import Link from 'next/link';
import Image from 'next/image';

import { Separator } from '@ordo/ui/shadcn/separator';

export function Branding() {
    const LOGO_SIZE = 36;

    return (
        <>
            <Link href='https://arocha.dev' target='_blank' rel='noopener noreferrer'>
                <Image
                    src='/img/arocha.svg'
                    alt='Logo'
                    width={LOGO_SIZE}
                    height={LOGO_SIZE}
                    className='h-10 w-auto dark:invert'
                    priority
                />
            </Link>

            <Separator orientation='vertical' className='mx-4 my-1 w-0.5! rotate-25' />

            <Link href='/' target='_blank' rel='noopener noreferrer'>
                <Image
                    src='/img/ordo.svg'
                    alt='Logo'
                    width={LOGO_SIZE}
                    height={LOGO_SIZE}
                    priority
                    className='dark:invert'
                />
            </Link>
        </>
    );
}
