import { vi, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { LinkMock, ImageMock } from '@/tests/mocks';

import { Page } from './page';

vi.mock('next/link', () => LinkMock);
vi.mock('next/image', () => ImageMock);

export const it = test.extend('header', async () => {
    const screen = await render(<Page />);
    return { ...screen };
});
