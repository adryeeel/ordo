'use client';

import { createContext } from 'react';

import { INITIAL_VALIDATION } from '@/features/home/sections/waitlist/const';
import { useFormAction, useFormValidation } from '@/features/home/sections/waitlist/hooks';
import type { iFormContext, iValidationState } from '@/features/home/sections/waitlist/types';

export const FormContext = createContext<iFormContext | null>(null);

interface Props {
    children: React.ReactElement | React.ReactElement[];
}

export function WaitlistFormProvider({ children }: Props) {
    const { validation: form, ...formRest } = useFormValidation();
    const { validation: action, ...actionRest } = useFormAction();

    const validation = (): iValidationState => {
        if (action.error) return action;
        if (form.error) return form;

        return INITIAL_VALIDATION;
    };

    const value = {
        action: { ...actionRest },
        validation: { ...formRest, ...validation() },
    };

    return <FormContext value={value}>{children}</FormContext>;
}
