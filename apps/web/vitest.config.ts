import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
    resolve: {
        alias: {
            '@': new URL('./src', import.meta.url).pathname,
        },
    },

    test: {
        css: true,
        browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: 'chromium' }],
            provider: playwright({
                launchOptions: { channel: 'chromium' },
            }),
        },
    },
});
