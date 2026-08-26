import { useActionState } from 'react';

import { INITIAL_VALIDATION } from '@/features/home/sections/waitlist/const';
import type { iUseFormAction, iValidationState } from '@/features/home/sections/waitlist/types';

type Reducer = (_: iValidationState, data: FormData) => Promise<iValidationState>;

export function useFormAction(): iUseFormAction {
    const reducer: Reducer = async (_, data) => {
        void data;

        // TODO: Make server call

        return { error: null, success: true };
    };

    const [validation, submit, isPending] = useActionState(reducer, INITIAL_VALIDATION);

    return { validation, submit, isPending };
}
