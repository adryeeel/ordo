import { EmailInput, SubmitButton } from '@/features/home/sections/waitlist/components';

//grid items-center *:col-start-1 *:row-start-1

export function Interactive() {
    return (
        <div className='ring-ring/50 group-data-[invalid=true]:ring-destructive/50 group-data-[invalid=true]:border-destructive/75 flex flex-col rounded-2xl border border-white/20 bg-white/10 p-1.5 transition-shadow duration-200 group-data-[invalid=true]:ring-3 focus-within:ring-3 sm:flex-row sm:rounded-full'>
            <EmailInput className='placeholder:text-primary-foreground/50 w-full p-2 placeholder:text-sm focus:outline-none sm:px-2 sm:py-0' />
            <SubmitButton />
        </div>
    );
}
