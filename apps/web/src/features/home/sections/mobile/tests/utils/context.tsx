import { test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Page } from './page';

export const it = test
    .extend('mobile', async () => {
        document.body.classList = '**:duration-0';

        const screen = await render(<Page />);
        const toggle = screen.getByRole('button', { name: 'Open navigation menu' });

        return { ...screen, toggle };
    })
    .extend('dialog', async ({ mobile }) => {
        await mobile.toggle.click();
        return mobile.getByRole('dialog', { name: 'Page Sections' });
    });
