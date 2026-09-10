import { test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Page } from './page';

export const it = test
    .extend('mobile', async () => {
        document.body.classList = '**:duration-0';

        const screen = await render(<Page />);
        const trigger = screen.getByRole('button', { name: 'open navigation menu' });

        return { ...screen, trigger };
    })
    .extend('dialog', async ({ mobile }) => {
        await mobile.trigger.click();
        return mobile.getByRole('dialog', { name: 'page sections' });
    });
