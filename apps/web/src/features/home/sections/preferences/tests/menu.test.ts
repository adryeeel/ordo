import { describe, expect } from 'vitest';
import { userEvent } from 'vitest/browser';

import { it } from './utils/it';

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
        window.scrollTo(0, document.body.scrollHeight - window.innerHeight - 5);
        await expect.element(pref.toggle).not.toBeInTheDocument();
    });
});
