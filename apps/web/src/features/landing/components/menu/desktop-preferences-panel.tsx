import type { RefObject } from 'react';

import { CloseIcon } from '@ordo/ui/icons/symbols';
import { ThemeSelector } from '@ordo/ui/composed/theme';

import { LanguageSelector } from '@/features/landing/components/menu/language-selector';
import type { Language } from '@/features/landing/helpers/mobile-menu';

type DesktopPreferencesPanelProps = {
    closeRef: RefObject<HTMLButtonElement | null>;
    language: Language;
    onClose: () => void;
    onLanguageChange: (language: Language) => void;
    titleId: string;
};

export function DesktopPreferencesPanel({
    closeRef,
    language,
    onClose,
    onLanguageChange,
    titleId,
}: DesktopPreferencesPanelProps) {
    return (
        <>
            <div className='flex items-start justify-between gap-6'>
                <div>
                    <h2 id={titleId} className='text-xl font-semibold tracking-[-0.03em]'>
                        Preferences
                    </h2>
                    <p className='text-muted-foreground mt-1 text-xs'>
                        Adjust how Ordo appears for you.
                    </p>
                </div>
                <button
                    ref={closeRef}
                    type='button'
                    aria-label='Close preferences'
                    onClick={onClose}
                    className='bg-muted hover:bg-accent focus-visible:ring-ring grid size-9 shrink-0 place-items-center rounded-full transition-colors outline-none focus-visible:ring-2'
                >
                    <CloseIcon className='size-4' />
                </button>
            </div>

            <div className='mt-7 space-y-6'>
                <div>
                    <p className='text-muted-foreground mb-2.5 text-xs font-medium'>Theme</p>
                    <ThemeSelector />
                </div>
                <div>
                    <p className='text-muted-foreground mb-2.5 text-xs font-medium'>Language</p>
                    <LanguageSelector
                        language={language}
                        name='desktop-language'
                        onLanguageChange={onLanguageChange}
                    />
                </div>
            </div>
        </>
    );
}
