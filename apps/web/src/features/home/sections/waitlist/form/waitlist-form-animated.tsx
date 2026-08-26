'use client';

import { Feedback } from '@/features/home/sections/waitlist/components';
import { WaitlistForm, WaitlistFormProvider } from '@/features/home/sections/waitlist/form';

export function WaitlistFormAnimated() {
    return (
        <WaitlistFormProvider>
            <Feedback />
            <WaitlistForm />
        </WaitlistFormProvider>
    );
}
