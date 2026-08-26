import { useState } from 'react';

import { validateEmail } from '@/features/home/sections/waitlist/funcs';
import { INITIAL_VALIDATION } from '@/features/home/sections/waitlist/const';
import type { FormSubmitEvent, iUseFormValidation } from '@/features/home/sections/waitlist/types';

export function useFormValidation(): iUseFormValidation {
    const [validation, setValidation] = useState(INITIAL_VALIDATION);

    const clear = () => setValidation(INITIAL_VALIDATION);
    const checkEmail = (email: string) => setValidation(validateEmail(email));

    const handleSubmit = (e: FormSubmitEvent) => {
        const email = new FormData(e.currentTarget).get('email');
        const result = validateEmail(email);

        setValidation(result);

        if (!result.success) e.preventDefault();
    };

    return { validation, clear, checkEmail, handleSubmit };
}
