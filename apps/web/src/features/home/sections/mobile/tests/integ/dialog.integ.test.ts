import { expect, describe } from 'vitest';

import { it } from '../utils/it';

describe('Mobile navigation menu', () => {
    const items = [
        { name: 'workflow' },
        { name: 'outcomes' },
        { name: 'principles' },
        { name: 'join the waitlist' },
    ];

    it.for(items)('renders $name option', async ({ name }, { dialog }) => {
        const item = dialog.getByRole('link', { name });
        await expect.element(item).toBeVisible();
    });

    it.for(items)('closes when $name option is selected', async ({ name }, { dialog }) => {
        const item = dialog.getByRole('link', { name });

        await item.click();
        await expect.element(dialog).not.toBeInTheDocument();
    });
});
