import { page } from 'vitest/browser';
import { expect, describe, afterAll, beforeAll } from 'vitest';

import { LINKS } from '@/tests/const/links';

import { it } from './utils/context';

describe('Header on narrow screens', async () => {
    it(`renders 'Home' link`, async ({ header }) => {
        const link = header.getByRole('link', { name: 'Ordo.' });

        await expect.element(link).toBeVisible();
        await expect.element(link).toHaveAttribute('href', '/');
    });

    it.for(LINKS)('hides $name link', async ({ name }, { header }) => {
        const item = header.getByRole('link', { name });
        await expect.element(item).not.toBeInTheDocument();
    });

    it(`renders hamburger menu`, async ({ header }) => {
        const menu = header.getByRole('button', { name: 'Open navigation menu' });
        await expect.element(menu).toBeInTheDocument();
    });
});

describe('Header on wide screens', () => {
    beforeAll(() => page.viewport(1920, 1080));
    afterAll(() => page.viewport(390, 844));

    it(`renders 'Home' link`, async ({ header }) => {
        const link = header.getByRole('link', { name: 'Ordo.' });

        await expect.element(link).toBeVisible();
        await expect.element(link).toHaveAttribute('href', '/');
    });

    it.for(LINKS)('renders $name link', async ({ href, name }, { header }) => {
        const link = header.getByRole('link', { name });

        await expect.element(link).toBeVisible();
        await expect.element(link).toHaveAttribute('href', href);
    });

    it(`hides hamburger menu`, async ({ header }) => {
        const menu = header.getByRole('button', { name: 'Open navigation menu' });
        await expect.element(menu).not.toBeInTheDocument();
    });
});
