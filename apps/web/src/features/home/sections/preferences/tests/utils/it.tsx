import { test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Page } from './page';
import { type Theme, mockMatchMedia } from './mock-match-media';

export const it = test
    .extend('system', 'dark' as Theme)
    .extend('mockTheme', { auto: true }, ({ system }) => {
        localStorage.clear();
        mockMatchMedia(system);
    })
    .extend('menu', async () => {
        const screen = await render(<Page />);
        const trigger = screen.getByRole('button', { name: 'open preferences menu' });

        return { ...screen, trigger };
    })
    .extend('language', async ({ menu }) => {
        await menu.trigger.click();

        const options = {
            en: menu.getByRole('tab', { name: 'english' }),
            pt: menu.getByRole('tab', { name: 'português' }),
        };

        return { options };
    })
    .extend('theme', async ({ menu }) => {
        await menu.trigger.click();

        const options = {
            dark: menu.getByRole('tab', { name: 'dark' }),
            light: menu.getByRole('tab', { name: 'light' }),
            system: menu.getByRole('tab', { name: 'system' }),
        };

        return { options };
    });
