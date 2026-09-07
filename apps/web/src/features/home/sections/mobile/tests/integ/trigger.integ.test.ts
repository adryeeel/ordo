import { expect, describe } from 'vitest';

import { it } from '../utils/it';

describe('Mobile navigation trigger', () => {
    it('opens the menu on first click', async ({ mobile }) => {
        await mobile.trigger.click();
        const dialog = mobile.getByRole('dialog', { name: 'page sections' });
        await expect.element(dialog).toBeVisible();
    });

    it('closes the menu on second click', async ({ mobile }) => {
        await mobile.trigger.dblClick();
        const dialog = mobile.getByRole('dialog', { name: 'page sections' });
        await expect.element(dialog).not.toBeInTheDocument();
    });
});
