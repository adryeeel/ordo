'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useTheme } from 'next-themes';

import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from '@ordo/ui/shadcn/dropdown';

import { Button } from '@ordo/ui/shadcn/button';

type Props = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: Props) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button variant='outline' size='icon'>
                        <Sun className='size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
                        <Moon className='absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
                        <span className='sr-only'>Toggle theme</span>
                    </Button>
                }
            />
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

const THEME_OPTIONS = [
    { value: 'light', label: 'Light', Icon: Sun },
    { value: 'system', label: 'System', Icon: Monitor },
    { value: 'dark', label: 'Dark', Icon: Moon },
] as const;

const THEME_INDICATOR_CLASS_NAMES = {
    light: 'translate-x-0',
    system: 'translate-x-[calc(100%+0.25rem)]',
    dark: 'translate-x-[calc(200%+0.5rem)]',
} as const;

export function ThemeSelector() {
    const { theme, setTheme } = useTheme();
    const selectedTheme = theme === 'light' || theme === 'dark' ? theme : 'system';

    return (
        <div
            role='group'
            aria-label='Color theme'
            className='bg-muted/70 relative grid grid-cols-3 gap-1 rounded-2xl p-1 shadow-[inset_0_1px_3px_rgb(0_0_0_/_0.1),inset_0_-1px_0_rgb(255_255_255_/_0.55)] dark:shadow-[inset_0_1px_4px_rgb(0_0_0_/_0.45),inset_0_-1px_0_rgb(255_255_255_/_0.04)]'
        >
            <span
                aria-hidden='true'
                className={`bg-background pointer-events-none absolute top-1 bottom-1 left-1 w-[calc((100%-1rem)/3)] rounded-xl shadow-[0_1px_3px_rgb(0_0_0_/_0.1)] !transition-transform !duration-300 !ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:!transition-none dark:shadow-[0_1px_3px_rgb(0_0_0_/_0.35)] ${THEME_INDICATOR_CLASS_NAMES[selectedTheme]}`}
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
