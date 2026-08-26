import { Button } from '@ordo/ui/primitive/button';
import { ArrowRightIcon, LoaderCircleIcon } from '@ordo/ui/icons/symbols';

import { useFormContext } from '@/features/home/sections/waitlist/hooks';

export function SubmitButton() {
    const { isPending } = useFormContext().action;

    return (
        <Button
            type='submit'
            variant='secondary'
            disabled={isPending}
            className='mt-2.5 sm:mt-0 dark:invert'
        >
            Subscribe
            {isPending ? <LoaderCircleIcon className='animate-spin' /> : <ArrowRightIcon />}
        </Button>
    );
}
