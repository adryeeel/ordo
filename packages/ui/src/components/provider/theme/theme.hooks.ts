import { useTheme as useNextTheme } from 'next-themes';

import { Theme, SetTheme } from './theme.types';

export function useTheme() {
    const { theme, setTheme, resolvedTheme, ...rest } = useNextTheme();

    return {
        theme: theme as Theme,
        setTheme: setTheme as SetTheme,
        resolvedTheme: resolvedTheme as Theme,
        ...rest,
    };
}
