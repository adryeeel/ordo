import { render } from 'vitest-browser-react';
import { test, expect, describe, afterEach } from 'vitest';

import { mockMatchMedia } from '@test/mock/match-media';
import { ThemeSelector } from '@ordo/ui/composed/theme';
import { ThemeProvider } from '@ordo/ui/provider/theme';

afterEach(() => {
    localStorage.clear();
});

describe('ThemeSelector', () => {
    test('change theme to dark', async () => {
        const { getByRole } = await render(
            <ThemeProvider>
                <ThemeSelector />
            </ThemeProvider>,
        );

        await getByRole('button', { name: /dark/i }).click();
        await expect.element(document.documentElement).toHaveClass('dark');
    });

    test('change theme to light', async () => {
        const { getByRole } = await render(
            <ThemeProvider>
                <ThemeSelector />
            </ThemeProvider>,
        );

        await getByRole('button', { name: /light/i }).click();
        await expect.element(document.documentElement).toHaveClass('light');
    });

    test('theme is light by default', async () => {
        mockMatchMedia('light');

        await render(
            <ThemeProvider>
                <ThemeSelector />
            </ThemeProvider>,
        );

        await expect.element(document.documentElement).toHaveClass('light');
    });

    test('theme is dark by default', async () => {
        mockMatchMedia('dark');

        await render(
            <ThemeProvider>
                <ThemeSelector />
            </ThemeProvider>,
        );

        await expect.element(document.documentElement).toHaveClass('dark');
    });
});
