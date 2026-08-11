import { cn } from '@ordo/ui/lib/utils';

import { LanguageFlag } from '@/features/landing/components/menu/language-flag';
import {
    getLanguageIndicatorClassName,
    LANGUAGE_OPTIONS,
    type Language,
} from '@/features/landing/helpers/mobile-menu';

type LanguageSelectorProps = {
    language: Language;
    name: string;
    onLanguageChange: (language: Language) => void;
};

export function LanguageSelector({ language, name, onLanguageChange }: LanguageSelectorProps) {
    return (
        <div
            role='radiogroup'
            aria-label='Language'
            className='bg-muted/70 relative grid grid-cols-2 gap-1 rounded-2xl p-1 shadow-[inset_0_1px_3px_rgb(0_0_0_/_0.1),inset_0_-1px_0_rgb(255_255_255_/_0.55)] dark:shadow-[inset_0_1px_4px_rgb(0_0_0_/_0.45)]'
        >
            <span
                aria-hidden='true'
                className={cn(
                    'bg-background absolute top-1 bottom-1 left-1 w-[calc((100%-0.75rem)/2)] rounded-xl shadow-[0_1px_3px_rgb(0_0_0_/_0.1)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none dark:shadow-[0_1px_3px_rgb(0_0_0_/_0.35)]',
                    getLanguageIndicatorClassName(language),
                )}
            />
            {LANGUAGE_OPTIONS.map((option) => (
                <label key={option.value} className='relative z-10 cursor-pointer'>
                    <input
                        type='radio'
                        name={name}
                        value={option.value}
                        checked={language === option.value}
                        onChange={() => onLanguageChange(option.value)}
                        className='peer sr-only'
                    />
                    <span className='text-muted-foreground peer-checked:text-foreground peer-focus-visible:ring-ring flex min-h-11 items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors peer-focus-visible:ring-2'>
                        <LanguageFlag language={option.value} />
                        {option.label}
                    </span>
                </label>
            ))}
        </div>
    );
}
