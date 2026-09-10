import { expect, describe } from 'vitest';

import { it } from './utils/it';

describe('Mobile menu', () => {
    it('opens on first click', async ({ mobile }) => {
        await mobile.trigger.click();
        const dialog = mobile.getByRole('dialog', { name: 'page sections' });
        await expect.element(dialog).toBeVisible();
    });

    it('closes on second click', async ({ mobile }) => {
        await mobile.trigger.dblClick();
        const dialog = mobile.getByRole('dialog', { name: 'page sections' });
        await expect.element(dialog).not.toBeInTheDocument();
    });
});
