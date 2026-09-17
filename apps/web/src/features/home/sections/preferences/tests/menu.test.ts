import { userEvent } from 'vitest/browser';
import { expect, describe, afterAll } from 'vitest';

import { it } from './utils/context';

afterAll(() => {
    window.scrollTo({ top: 0 });
    document.body.classList = '';
});

describe('Preferences menu', () => {
    it('receives focus on tab', async ({ pref }) => {
        await userEvent.tab();
        await expect.element(pref.toggle).toHaveFocus();
    });

    it('opens on first click', async ({ pref }) => {
        await pref.toggle.click();
        const dialog = pref.getByRole('dialog', { name: 'Preferences' });

        await expect.element(dialog).toBeVisible();
    });

    it('closes on second click', async ({ pref }) => {
        await pref.toggle.dblClick();
        const dialog = pref.getByRole('dialog', { name: 'Preferences' });

        await expect.element(dialog).not.toBeInTheDocument();
    });

    it('hides near page bottom', async ({ pref }) => {
        document.body.className = 'h-[110vh] **:duration-0';
        window.scrollTo({ top: document.body.scrollHeight - window.innerHeight - 5 });

        await expect.element(pref.toggle).not.toBeInTheDocument();
    });
});
