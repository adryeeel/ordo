import type { iValidationState } from '@/features/home/sections/waitlist/types';

export type FormSubmitEvent = React.SubmitEvent<HTMLFormElement>;

export interface iUseFormValidation {
    validation: iValidationState;
    clear: () => void;
    checkEmail: (email: string) => void;
    handleSubmit: (e: FormSubmitEvent) => void;
}

export interface iUseFormAction {
    isPending: boolean;
    validation: iValidationState;
    submit: (payload: FormData) => void;
}

export interface iFormContext {
    action: Omit<iUseFormAction, 'validation'>;
    validation: iValidationState & Omit<iUseFormValidation, 'validation'>;
}
