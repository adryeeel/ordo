'use client';

import { useFormContext } from '@/features/home/sections/waitlist/hooks';
import { ErrorMessage, Interactive } from '@/features/home/sections/waitlist/components';

export function WaitlistForm() {
    const { action, validation } = useFormContext();
    const invalid = validation.success === false;

    return (
        <form
            data-invalid={invalid}
            action={action.submit}
            onSubmit={validation.handleSubmit}
            className='group space-y-3'
        >
            <label
                htmlFor='email'
                className='group-data-[invalid=true]:text-destructive text-primary-foreground inline-block cursor-pointer text-sm font-medium'
            >
                Join the Waitlist
            </label>
            <Interactive />
            <ErrorMessage message={validation.error?.message} />
            <p className='text-primary-foreground/75 text-sm'>
                Early access &middot; Product updates only
            </p>
        </form>
    );
}
