import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-empty': [2, 'never'],
        'scope-enum': [
            2,
            'always',
            [
                // dependencies scope
                'deps',
                'deps-dev',

                // documentation scopes
                'arch',
                'infra',
                'product',

                // repository scopes
                'repo',
                'tools',
                'actions',

                // packages scope
                'ui',
                'web',
                'api',
                'schema',
            ],
        ],
    },
};

export default config;
