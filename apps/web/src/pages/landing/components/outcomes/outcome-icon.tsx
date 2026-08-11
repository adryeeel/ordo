import type { OutcomeType } from '@/pages/landing/constants/landing-content';

export function OutcomeIcon({ type }: { type: OutcomeType }) {
    if (type === 'clarity') {
        return (
            <svg aria-hidden='true' viewBox='0 0 24 24' fill='none' className='size-5'>
                <path
                    d='M5 6h14M5 12h9M5 18h6'
                    stroke='currentColor'
                    strokeWidth='1.7'
                    strokeLinecap='round'
                />
                <path
                    d='m16 17 2 2 3-4'
                    stroke='currentColor'
                    strokeWidth='1.7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        );
    }

    if (type === 'control') {
        return (
            <svg aria-hidden='true' viewBox='0 0 24 24' fill='none' className='size-5'>
                <path
                    d='M12 3 5 6v5c0 4.3 2.9 8.3 7 10 4.1-1.7 7-5.7 7-10V6l-7-3Z'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinejoin='round'
                />
                <path
                    d='m9 12 2 2 4-4'
                    stroke='currentColor'
                    strokeWidth='1.7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        );
    }

    return (
        <svg aria-hidden='true' viewBox='0 0 24 24' fill='none' className='size-5'>
            <path
                d='M4 12h13m-4-4 4 4-4 4'
                stroke='currentColor'
                strokeWidth='1.7'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M19 5h1v14h-1' stroke='currentColor' strokeWidth='1.7' strokeLinecap='round' />
        </svg>
    );
}
