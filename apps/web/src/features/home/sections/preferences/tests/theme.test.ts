import { expect, describe } from 'vitest';
import { userEvent } from 'vitest/browser';

import { it } from './utils/it';

describe('Theme options', () => {
    it('renders dark, light and system as choices', async ({ theme }) => {
        await expect.element(theme.dark).toBeVisible();
        await expect.element(theme.light).toBeVisible();
        await expect.element(theme.system).toBeVisible();
    });

    it('focus and pre-selects system by default', async ({ theme }) => {
        await expect.element(theme.system).toHaveFocus();
        await expect.element(theme.system).toHaveAttribute('aria-selected', 'true');
    });

    it('navigates with arrow keys', async ({ theme }) => {
        await userEvent.keyboard('{ArrowRight}');
        await expect.element(theme.dark).toHaveFocus();

        await userEvent.keyboard('{ArrowLeft}');
        await expect.element(theme.system).toHaveFocus();

        await userEvent.keyboard('{ArrowLeft}');
        await expect.element(theme.light).toHaveFocus();
    });
});

describe('When system preference is light', () => {
    it.override('system', 'light');

    it('puts the page in light mode by default', async ({ pref }) => {
        void pref;
        await expect.element(document.documentElement).toHaveClass('light');
    });

    it('switches to light mode when light option is selected', async ({ theme }) => {
        await theme.light.click();
        await expect.element(document.documentElement).toHaveClass('light');
    });
});

describe('When system preference is dark', () => {
    it.override('system', 'dark');

    it('puts the page in dark mode by default', async ({ pref }) => {
        void pref;
        await expect.element(document.documentElement).toHaveClass('dark');
    });

    it('switches to dark mode when dark option is selected', async ({ theme }) => {
        await theme.dark.click();
        await expect.element(document.documentElement).toHaveClass('dark');
    });
});
