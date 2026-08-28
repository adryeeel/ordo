'use client';

import { useTheme } from '@ordo/ui/provider/theme';
import { THEME_INDICATOR_TRANSFORMS, THEME_OPTIONS } from '@ordo/ui/constants/theme';

export function ThemeSelector() {
    const { theme, setTheme } = useTheme();
    const selectedTheme = theme === 'light' || theme === 'dark' ? theme : 'system';

    return (
        <div
            role='tablist'
            aria-label='Color theme'
            className='bg-muted/70 relative grid grid-cols-3 gap-1 rounded-2xl p-1 shadow-[inset_0_1px_3px_rgb(0_0_0/0.1),inset_0_-1px_0_rgb(255_255_255/0.55)] dark:shadow-[inset_0_1px_4px_rgb(0_0_0/0.45)]'
        >
            <span
                aria-hidden='true'
                style={{ transform: THEME_INDICATOR_TRANSFORMS[selectedTheme] }}
                className='bg-background pointer-events-none absolute top-1 bottom-1 left-1 w-[calc((100%-1rem)/3)] rounded-xl shadow-[0_1px_3px_rgb(0_0_0/0.1)] transition-transform! duration-300! ease-[cubic-bezier(0.16,1,0.3,1)]! motion-reduce:transition-none! dark:shadow-[0_1px_3px_rgb(0_0_0/0.35)]'
            />
            {THEME_OPTIONS.map(({ value, label, Icon }) => {
                const selected = selectedTheme === value;

                return (
                    <button
                        key={value}
                        type='button'
                        aria-pressed={selected}
                        onClick={() => setTheme(value)}
                        className='aria-pressed:text-foreground text-muted-foreground hover:text-foreground focus-visible:ring-ring relative z-10 flex min-h-11 items-center justify-center gap-2 rounded-xl text-xs font-medium transition-colors outline-none focus-visible:ring-2'
                    >
                        <Icon className='size-4' />
                        {label}
                    </button>
                );
            })}
        </div>
    );
}
