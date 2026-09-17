import { expect, describe } from 'vitest';
import { userEvent } from 'vitest/browser';

import { it } from './utils/context';

describe('Language options', () => {
    it('renders english and portuguese as choices', async ({ lang }) => {
        await expect.element(lang.en).toBeVisible();
        await expect.element(lang.pt).toBeVisible();
    });

    it('pre-selects english and disable portuguese by default', async ({ lang }) => {
        await expect.element(lang.pt).toBeDisabled();
        await expect.element(lang.en).toHaveAttribute('aria-selected', 'true');
    });

    it('focus english when tab is pressed', async ({ lang }) => {
        await userEvent.tab();
        await expect.element(lang.en).toHaveFocus();
    });

    it('navigates with arrow keys', async ({ lang }) => {
        await userEvent.tab();

        await userEvent.keyboard('{ArrowRight}');
        await expect.element(lang.pt).toHaveFocus();

        await userEvent.keyboard('{ArrowLeft}');
        await expect.element(lang.en).toHaveFocus();
    });
});
