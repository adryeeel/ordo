import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';

import { ThemeProvider } from '@ordo/ui/internal/theme';

import { mockMatchMedia } from '@test/mock/match-media';
import { MobileMenu } from '../src/features/landing/components/menu/mobile-menu';

function clickElement(element: HTMLElement | SVGElement) {
    if (!(element instanceof HTMLElement)) throw new Error('Expected an HTML element');
    element.click();
}

test('opens and closes the mobile navigation', async () => {
    mockMatchMedia('light');
    document.documentElement.lang = 'en';

    const { getByRole } = await render(
        <ThemeProvider>
            <MobileMenu />
        </ThemeProvider>,
    );

    await getByRole('button', { name: 'Open navigation menu' }).click();

    await expect.element(getByRole('dialog')).toBeVisible();
    await expect.element(getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
    await expect.element(getByRole('link', { name: 'Join the waitlist' })).toBeVisible();
    clickElement(getByRole('button', { name: 'Open preferences' }).element());

    await expect.element(getByRole('heading', { name: 'Preferences' }).last()).toBeVisible();
    await expect.element(getByRole('group', { name: 'Color theme' })).toBeVisible();
    await expect.element(getByRole('radio', { name: 'English' })).toBeVisible();
    const portugueseOption = getByRole('radio', { name: 'Portuguese' });
    await expect.element(portugueseOption).toBeVisible();
    clickElement(portugueseOption.element());
    await expect.element(portugueseOption).toBeChecked();
    await expect.element(document.documentElement).toHaveAttribute('lang', 'en');

    clickElement(getByRole('button', { name: 'Close navigation menu' }).element());
    await expect.element(getByRole('dialog')).not.toBeInTheDocument();
});
