import Image from 'next/image';

export function Credits() {
    return (
        <a
            href='https://arocha.dev'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5'
            aria-label='A product by arocha.dev'
        >
            <span className='text-muted-foreground text-xs'>A product by</span>
            <Image
                src='/img/arocha.svg'
                alt='Minimalist A.R. wordmark'
                width={263}
                height={171}
                className='h-6 w-auto dark:invert'
            />
        </a>
    );
}
