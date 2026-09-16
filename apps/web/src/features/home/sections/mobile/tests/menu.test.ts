import { expect, describe } from 'vitest';

import { it } from './utils/it';

describe('Mobile menu', () => {
    it('opens on first click', async ({ mobile }) => {
        await mobile.toggle.click();
        const dialog = mobile.getByRole('dialog', { name: 'Page Sections' });
        await expect.element(dialog).toBeVisible();
    });

    it('closes on second click', async ({ mobile }) => {
        await mobile.toggle.dblClick();
        const dialog = mobile.getByRole('dialog', { name: 'Page Sections' });
        await expect.element(dialog).not.toBeInTheDocument();
    });
});
