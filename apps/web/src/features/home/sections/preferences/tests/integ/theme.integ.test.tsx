import { expect, describe } from 'vitest';
import { userEvent } from 'vitest/browser';

import { it } from '@/features/home/sections/preferences/tests/utils';

describe('Theme options', () => {
    it('renders dark, light and system as choices', async ({ theme }) => {
        const { dark, light, system } = theme.options;

        await expect.element(dark).toBeVisible();
        await expect.element(light).toBeVisible();
        await expect.element(system).toBeVisible();
    });

    it('focus and pre-selects system by default', async ({ theme }) => {
        await expect.element(theme.options.system).toHaveFocus();
        await expect.element(theme.options.system).toHaveAttribute('aria-selected', 'true');
    });

    it('navigates with arrow keys', async ({ theme }) => {
        const { dark, light, system } = theme.options;

        await userEvent.keyboard('{ArrowRight}');
        await expect.element(dark).toHaveFocus();

        await userEvent.keyboard('{ArrowLeft}');
        await expect.element(system).toHaveFocus();

        await userEvent.keyboard('{ArrowLeft}');
        await expect.element(light).toHaveFocus();
    });
});

describe('When system preference is light', () => {
    it.override('system', 'light');

    it('puts the page in light mode by default', async ({ menu }) => {
        void menu;
        await expect.element(document.documentElement).toHaveClass('light');
    });

    it('switches to light mode when light option is selected', async ({ theme }) => {
        await theme.options.light.click();
        await expect.element(document.documentElement).toHaveClass('light');
    });
});

describe('When system preference is dark', () => {
    it.override('system', 'dark');

    it('puts the page in dark mode by default', async ({ menu }) => {
        void menu;
        await expect.element(document.documentElement).toHaveClass('dark');
    });

    it('switches to dark mode when dark option is selected', async ({ theme }) => {
        await theme.options.dark.click();
        await expect.element(document.documentElement).toHaveClass('dark');
    });
});
