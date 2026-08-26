import { EmailSchema } from '@ordo/schema/email';

import { mapInputError } from '@/features/home/sections/waitlist/funcs';
import type { iValidationState } from '@/features/home/sections/waitlist/types';

export function validateEmail(input: unknown): iValidationState {
    const { success, error } = EmailSchema.safeParse(input);

    return {
        success,
        error: mapInputError(error),
    };
}
