'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { THEMES } from './theme.const';

type Props = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: Props) {
    return (
        <NextThemesProvider
            enableSystem
            attribute='class'
            themes={[...THEMES]}
            defaultTheme='system'
            disableTransitionOnChange
            {...props}
        >
            {children}
        </NextThemesProvider>
    );
}
