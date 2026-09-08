import { expect, describe } from 'vitest';

import { NAV_LINKS } from '@/tests/const/links';

import { it } from './utils/it';

describe('Mobile navigation', () => {
    it.for(NAV_LINKS)('renders $name link', async ({ href, name }, { dialog }) => {
        const item = dialog.getByRole('link', { name });

        await expect.element(item).toBeVisible();
        await expect.element(item).toHaveAttribute('href', href);
    });

    it.for(NAV_LINKS)('closes when $name link is clicked', async ({ name }, { dialog }) => {
        const item = dialog.getByRole('link', { name });

        await item.click();
        await expect.element(dialog).not.toBeInTheDocument();
    });
});
