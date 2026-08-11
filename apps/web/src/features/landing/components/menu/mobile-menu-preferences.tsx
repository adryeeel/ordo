import { ArrowRightIcon } from '@ordo/ui/internal/icons';
import { ThemeSelector } from '@ordo/ui/internal/theme';

import { LanguageFlag } from '@/features/landing/components/menu/language-flag';
import {
    getLanguageIndicatorClassName,
    LANGUAGE_OPTIONS,
    type Language,
} from '@/features/landing/helpers/mobile-menu';

type MobileMenuPreferencesProps = {
    language: Language;
    onBack: () => void;
    onLanguageChange: (language: Language) => void;
};

export function MobileMenuPreferences({
    language,
    onBack,
    onLanguageChange,
}: MobileMenuPreferencesProps) {
    return (
        <section
            aria-labelledby='preferences-title'
            className='animate-in fade-in slide-in-from-right-3 mt-6 duration-300 motion-reduce:animate-none'
        >
            <button
                type='button'
                onClick={onBack}
                className='group/back bg-muted/65 text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring mb-8 inline-flex min-h-10 items-center gap-2 rounded-full px-3.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2'
            >
                <ArrowRightIcon className='size-4 rotate-180 transition-transform duration-200 group-hover/back:-translate-x-0.5 motion-reduce:transition-none' />
                Back to menu
            </button>

            <h2 id='preferences-title' className='text-3xl font-semibold tracking-[-0.04em]'>
                Preferences
            </h2>

            <div className='mt-8 space-y-8'>
                <div>
                    <p className='text-muted-foreground mb-3 text-xs font-medium'>Theme</p>
                    <ThemeSelector />
                </div>

                <div>
                    <p className='text-muted-foreground mb-3 text-xs font-medium'>Language</p>
                    <div
                        role='radiogroup'
                        aria-label='Language'
                        className='bg-muted/70 relative grid grid-cols-2 gap-1 rounded-2xl p-1 shadow-[inset_0_1px_3px_rgb(0_0_0_/_0.1),inset_0_-1px_0_rgb(255_255_255_/_0.55)] dark:shadow-[inset_0_1px_4px_rgb(0_0_0_/_0.45),inset_0_-1px_0_rgb(255_255_255_/_0.04)]'
                    >
                        <span
                            aria-hidden='true'
                            className={`bg-background absolute top-1 bottom-1 left-1 w-[calc((100%-0.75rem)/2)] rounded-xl shadow-[0_1px_3px_rgb(0_0_0_/_0.1)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none dark:shadow-[0_1px_3px_rgb(0_0_0_/_0.35)] ${getLanguageIndicatorClassName(language)}`}
                        />
                        {LANGUAGE_OPTIONS.map((option) => (
                            <label key={option.value} className='relative z-10 cursor-pointer'>
                                <input
                                    type='radio'
                                    name='language'
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
                </div>
            </div>
        </section>
    );
}
