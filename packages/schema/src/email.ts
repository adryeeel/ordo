import { z } from 'zod/mini';

export const EmailSchema = z
    .string()
    .check(
        z.minLength(1, 'Email is required.'),
        z.email('Invalid email address.'),
        z.maxLength(254, 'Email is too long.'),
    );
