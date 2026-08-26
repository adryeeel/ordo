import { useFormContext } from '@/features/home/sections/waitlist/hooks';

export function Feedback() {
    const { error, success } = useFormContext().validation;

    if (success === null || error?.code != 'SERVER_ERROR') return null;

    return <output>{success ? 'Success.' : 'Failure.'}</output>;
}
