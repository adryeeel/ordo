import type { OxlintConfig } from 'oxlint';
import { baseConfig } from './base.ts';

export const nextConfig: OxlintConfig = {
    extends: [baseConfig],
    plugins: ['nextjs', 'react', 'jsx-a11y', 'vitest'],
    rules: {
        'vitest/no-standalone-expect': [
            'warn',
            {
                additionalTestBlockFunctions: [
                    'it',
                    'it.skip',
                    'it.only',
                    'it.todo',
                    'it.concurrent',
                ],
            },
        ],
    },
};
