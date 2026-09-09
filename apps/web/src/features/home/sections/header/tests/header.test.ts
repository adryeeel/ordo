import { page } from 'vitest/browser';
import { expect, describe, beforeAll } from 'vitest';

import { NAV_LINKS } from '@/tests/const/links';

import { it } from './utils/it';

describe('Header on larger screens', () => {
    beforeAll(() => page.viewport(1920, 1080));

    it(`renders 'Home' link`, async ({ header }) => {
        const link = header.getByRole('link', { name: 'ordo.' });

        await expect.element(link).toBeVisible();
        await expect.element(link).toHaveAttribute('href', '/');
    });

    it.for(NAV_LINKS)('renders $name link', async ({ href, name }, { header }) => {
        const link = header.getByRole('link', { name });

        await expect.element(link).toBeVisible();
        await expect.element(link).toHaveAttribute('href', href);
    });

    it(`hides hamburger menu`, async ({ header }) => {
        const menu = header.getByRole('button', { name: 'open navigation menu' });
        await expect.element(menu).not.toBeInTheDocument();
    });
});

describe('Header on smaller screens', async () => {
    beforeAll(() => page.viewport(390, 844));

    it(`renders 'Home' link`, async ({ header }) => {
        const link = header.getByRole('link', { name: 'ordo.' });

        await expect.element(link).toBeVisible();
        await expect.element(link).toHaveAttribute('href', '/');
    });

    it.for(NAV_LINKS)('hides $name link', async ({ name }, { header }) => {
        const item = header.getByRole('link', { name });
        await expect.element(item).not.toBeInTheDocument();
    });

    it(`renders hamburger menu`, async ({ header }) => {
        const menu = header.getByRole('button', { name: 'open navigation menu' });
        await expect.element(menu).toBeInTheDocument();
    });
});
