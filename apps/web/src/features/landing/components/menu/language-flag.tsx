import type { Language } from '@/features/landing/helpers/mobile-menu';

type LanguageFlagProps = {
    language: Language;
};

export function LanguageFlag({ language }: LanguageFlagProps) {
    if (language === 'pt') {
        return (
            <svg
                aria-hidden='true'
                viewBox='0 0 20 14'
                className='h-3.5 w-5 overflow-hidden rounded-xs shadow-sm'
            >
                <rect width='8' height='14' fill='#046A38' />
                <rect x='8' width='12' height='14' fill='#DA291C' />
                <circle cx='8' cy='7' r='2.55' fill='#FFCD00' />
                <circle cx='8' cy='7' r='1.55' fill='none' stroke='#fff' strokeWidth='.65' />
            </svg>
        );
    }

    return (
        <svg
            aria-hidden='true'
            viewBox='0 0 20 14'
            className='h-3.5 w-5 overflow-hidden rounded-xs shadow-sm'
        >
            <rect width='20' height='14' fill='#fff' />
            {[0, 4, 8, 12].map((y) => (
                <rect key={y} y={y} width='20' height='2' fill='#B22234' />
            ))}
            <rect width='9' height='8' fill='#3C3B6E' />
            {[2, 4.5, 7].flatMap((x) =>
                [2, 4, 6].map((y) => (
                    <circle key={`${x}-${y}`} cx={x} cy={y} r='.45' fill='#fff' />
                )),
            )}
        </svg>
    );
}
