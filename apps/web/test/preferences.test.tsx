import { render } from 'vitest-browser-react';
import { afterEach, expect, test } from 'vitest';

import { ThemeProvider } from '@ordo/ui/provider/theme';

import { LandingMotionProvider } from '@/features/landing/components/landing-motion-provider';
import { DesktopPreferences } from '@/features/landing/components/menu/desktop-preferences';
import { mockMatchMedia } from '@test/mock/match-media';

afterEach(() => {
    localStorage.clear();
});

test('opens the desktop preferences window and returns focus when it closes', async () => {
    mockMatchMedia('light');
    document.documentElement.lang = 'en';

    const { getByRole } = await render(
        <ThemeProvider
            enableSystem
            attribute='class'
            defaultTheme='system'
            disableTransitionOnChange
        >
            <LandingMotionProvider>
                <DesktopPreferences />
            </LandingMotionProvider>
        </ThemeProvider>,
    );

    const trigger = getByRole('button', { name: 'Open preferences' });
    const surface = trigger.element().parentElement;
    if (!(surface instanceof HTMLElement)) throw new Error('Expected a preferences surface');
    expect(surface.classList.contains('hidden')).toBe(true);
    expect(surface.classList.contains('md:block')).toBe(true);
    await trigger.click();

    await expect.element(getByRole('dialog', { name: 'Preferences' })).toBeVisible();
    await getByRole('button', { name: 'Dark' }).click();
    await expect
        .element(getByRole('button', { name: 'Dark' }))
        .toHaveAttribute('aria-pressed', 'true');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    const portuguese = getByRole('radio', { name: 'Portuguese' });
    const portugueseInput = portuguese.element();
    if (!(portugueseInput instanceof HTMLElement)) throw new Error('Expected a radio input');
    portugueseInput.click();
    await expect.element(portuguese).toBeChecked();
    await expect.element(document.documentElement).toHaveAttribute('lang', 'en');

    await getByRole('button', { name: 'Close preferences' }).click();
    await expect.element(getByRole('dialog', { name: 'Preferences' })).not.toBeInTheDocument();
    await expect.element(getByRole('button', { name: 'Open preferences' })).toHaveFocus();
});
