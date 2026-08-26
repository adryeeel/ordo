import { expect, describe } from 'vitest';
import { userEvent } from 'vitest/browser';

import { it } from '@/features/home/sections/preferences/tests/utils';

describe('Language options', () => {
    it('renders english and portuguese as choices', async ({ language }) => {
        const { en, pt } = language.options;

        await expect.element(en).toBeVisible();
        await expect.element(pt).toBeVisible();
    });

    it('pre-selects english and disable portuguese by default', async ({ language }) => {
        const { en, pt } = language.options;

        await expect.element(pt).toBeDisabled();
        await expect.element(en).toHaveAttribute('aria-selected', 'true');
    });

    it('focus english when tab is pressed', async ({ language }) => {
        await userEvent.tab();
        await expect.element(language.options.en).toHaveFocus();
    });

    it('navigates with arrow keys', async ({ language }) => {
        const { en, pt } = language.options;

        await userEvent.tab();

        await userEvent.keyboard('{ArrowRight}');
        await expect.element(pt).toHaveFocus();

        await userEvent.keyboard('{ArrowLeft}');
        await expect.element(en).toHaveFocus();
    });
});
