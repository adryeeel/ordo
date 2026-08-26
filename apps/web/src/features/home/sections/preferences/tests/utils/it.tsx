import { test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Page, mockMatchMedia } from '@/features/home/sections/preferences/tests/utils';
import type { Theme } from '@/features/home/sections/preferences/tests/utils';

export const it = test
    .extend('system', 'dark' as Theme)
    .extend('mockTheme', { auto: true }, ({ system }) => {
        localStorage.clear();
        mockMatchMedia(system);
    })
    .extend('menu', async () => {
        const screen = await render(<Page />);
        const trigger = screen.getByTestId('preferences-trigger');

        return { ...screen, trigger };
    })
    .extend('language', async ({ menu }) => {
        await menu.trigger.click();

        const en = menu.getByRole('tab', { name: /english/i });
        const pt = menu.getByRole('tab', { name: /português/i });

        return { options: { en, pt } };
    })
    .extend('theme', async ({ menu }) => {
        await menu.trigger.click();

        const dark = menu.getByRole('tab', { name: /dark/i });
        const light = menu.getByRole('tab', { name: /light/i });
        const system = menu.getByRole('tab', { name: /system/i });

        return { options: { dark, light, system } };
    });
