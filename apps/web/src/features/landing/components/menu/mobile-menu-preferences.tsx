import { ArrowRightIcon } from '@ordo/ui/composed/icons';
import { ThemeSelector } from '@ordo/ui/composed/theme';

import { LanguageSelector } from '@/features/landing/components/menu/language-selector';
import type { Language } from '@/features/landing/helpers/mobile-menu';

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
                    <LanguageSelector
                        language={language}
                        name='mobile-language'
                        onLanguageChange={onLanguageChange}
                    />
                </div>
            </div>
        </section>
    );
}
