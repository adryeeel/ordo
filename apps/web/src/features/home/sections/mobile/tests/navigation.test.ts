import { expect, describe } from 'vitest';

import { LINKS } from '@/tests/const/links';

import { it } from './utils/it';

describe('Mobile navigation', () => {
    it.for(LINKS)('renders $name link', async ({ href, name }, { dialog }) => {
        const item = dialog.getByRole('link', { name });

        await expect.element(item).toBeVisible();
        await expect.element(item).toHaveAttribute('href', href);
    });

    it.for(LINKS)('closes when $name link is clicked', async ({ name }, { dialog }) => {
        const item = dialog.getByRole('link', { name });

        await item.click();
        await expect.element(dialog).not.toBeInTheDocument();
    });
});
