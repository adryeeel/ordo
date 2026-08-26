import { useContext } from 'react';

import { FormContext } from '@/features/home/sections/waitlist/form';

export function useFormContext() {
    const ctx = useContext(FormContext);

    if (!ctx) {
        throw new Error('Hook must be called within a <WaitlistFormProvider>');
    }

    return ctx;
}
