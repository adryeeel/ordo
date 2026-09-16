import { test } from 'vitest';
import { render } from 'vitest-browser-react';

import { type Theme, mockMatchMedia } from '@/tests/mocks/match-media.mock';

import { Page } from './page';

export const it = test
    .extend('system', 'dark' as Theme)
    .extend('mockTheme', { auto: true }, ({ system }) => {
        localStorage.clear();
        mockMatchMedia(system);
    })
    .extend('menu', async () => {
        const screen = await render(<Page />);
        const trigger = screen.getByRole('button', { name: 'Open preferences menu' });

        return { ...screen, trigger };
    })
    .extend('language', async ({ menu }) => {
        await menu.trigger.click();

        const en = menu.getByRole('tab', { name: 'English' });
        const pt = menu.getByRole('tab', { name: 'Português' });

        return { options: { en, pt } };
    })
    .extend('theme', async ({ menu }) => {
        await menu.trigger.click();

        const dark = menu.getByRole('tab', { name: 'Dark' });
        const light = menu.getByRole('tab', { name: 'Light' });
        const system = menu.getByRole('tab', { name: 'System' });

        return { options: { dark, light, system } };
    });
