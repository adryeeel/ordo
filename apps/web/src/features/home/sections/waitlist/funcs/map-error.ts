import type { iParseError } from '@ordo/schema/types';

import { iError } from '@/features/home/sections/waitlist/types';

export function mapInputError(error?: iParseError): iError | null {
    if (!error) return null;

    return {
        code: 'BAD_INPUT',
        message: error.issues[0].message,
    };
}
