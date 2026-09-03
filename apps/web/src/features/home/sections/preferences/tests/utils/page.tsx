import '@ordo/ui/styles.css';

import { ThemeProvider } from '@ordo/ui/provider/theme';
import { Preferences } from '@/features/home/sections/preferences';

export function Page() {
    return (
        <ThemeProvider>
            <Preferences />
        </ThemeProvider>
    );
}
