import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
    optimizeDeps: {
        include: ['motion/react'],
    },
    resolve: {
        alias: {
            '@': new URL('./src', import.meta.url).pathname,
            '@test': new URL('./test', import.meta.url).pathname,
        },
    },
    test: {
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
