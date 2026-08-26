import { expect, describe } from 'vitest';
import { userEvent } from 'vitest/browser';

import { it } from '@/features/home/sections/preferences/tests/utils';

describe('Language options', () => {
    it('renders english and portuguese as choices', async ({ language }) => {
        const { en, pt } = language.options;

        await expect.element(en).toBeVisible();
        await expect.element(pt).toBeVisible();
    });

    it('pre-selects english by default', async ({ language }) => {
        await expect.element(language.options.en).toHaveAttribute('aria-selected', 'true');
    });

    it('disables portuguese by default', async ({ language }) => {
        await expect.element(language.options.pt).toBeDisabled();
    });

    it('focus english when tab is pressed', async ({ language }) => {
        await userEvent.tab();
        await expect.element(language.options.en).toHaveFocus();
    });
});
