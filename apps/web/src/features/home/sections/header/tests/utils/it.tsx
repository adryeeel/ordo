import { vi, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Link } from '@/tests/mocks/next-link.mock';
import { Image } from '@/tests/mocks/next-image.mock';

import { Page } from './page';

vi.mock('next/link', () => Link);
vi.mock('next/image', () => Image);

export const it = test.extend('header', async () => {
    const screen = await render(<Page />);
    return { ...screen };
});
