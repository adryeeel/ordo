import { describe, expect } from 'vitest';
import { userEvent } from 'vitest/browser';

import { it } from '@/features/home/sections/preferences/tests/utils';

describe('Preferences menu', () => {
    it('receives focus on tab', async ({ menu }) => {
        await userEvent.tab();
        await expect.element(menu.trigger).toHaveFocus();
    });

    it('opens on first click', async ({ menu }) => {
        await menu.trigger.click();
        const dialog = menu.getByRole('dialog', { name: /preferences/i });
        await expect.element(dialog).toBeVisible();
    });

    it('closes on second click', async ({ menu }) => {
        await menu.trigger.dblClick();
        const dialog = menu.getByRole('dialog', { name: /preferences/i });
        await expect.element(dialog).not.toBeInTheDocument();
    });

    it('hides near page bottom', async ({ menu }) => {
        document.body.className = 'h-[110vh] **:duration-0';
        window.scrollTo(0, document.body.scrollHeight - window.innerHeight - 5);
        await expect.element(menu.trigger).not.toBeVisible();
    });
});
