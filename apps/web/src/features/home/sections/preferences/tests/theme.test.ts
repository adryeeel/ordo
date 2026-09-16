import { expect, describe } from 'vitest';
import { userEvent } from 'vitest/browser';

import { it } from './utils/context';

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

    it('calls setTheme() when clicked', async ({ theme }) => {
        await theme.dark.click();
        expect(theme.mock).toHaveBeenCalledWith('dark');

        await theme.light.click();
        expect(theme.mock).toHaveBeenCalledWith('light');

        await theme.system.click();
        expect(theme.mock).toHaveBeenCalledWith('system');
    });
});
