import { vi, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { mockTheme } from '@/tests/mocks/theme.mock';

import { Page } from './page';

vi.mock('@ordo/ui/provider/theme', () => ({ useTheme: () => mockTheme }));

export const it = test
    .extend('pref', async () => {
        const screen = await render(<Page />);
        const toggle = screen.getByRole('button', { name: 'Open preferences menu' });

        return { ...screen, toggle };
    })
    .extend('lang', async ({ pref }) => {
        await pref.toggle.click();

        const en = pref.getByRole('tab', { name: 'English' });
        const pt = pref.getByRole('tab', { name: 'Português' });

        return { en, pt };
    })
    .extend('theme', async ({ pref }) => {
        await pref.toggle.click();

        const dark = pref.getByRole('tab', { name: 'Dark' });
        const light = pref.getByRole('tab', { name: 'Light' });
        const system = pref.getByRole('tab', { name: 'System' });

        return {
            dark,
            light,
            system,
            mock: mockTheme.setTheme,
        };
    });
