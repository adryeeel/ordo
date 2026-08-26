import { Section } from '@ordo/ui/composed/section';

import { WaitlistFormAnimated } from './form';

export function Waitlist() {
    return (
        <Section
            id='waitlist'
            className='bg-primary dark:bg-primary/80 grid grid-rows-[repeat(3,auto)] gap-y-6 rounded-3xl p-6 selection:bg-white/20 md:p-8 lg:grid-cols-2 lg:grid-rows-[repeat(2,auto)] lg:p-16'
        >
            <h2 className='text-primary-foreground max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl'>
                Make every handoff count.
            </h2>
            <p className='text-primary-foreground max-w-2xl text-sm leading-6 text-balance sm:text-base sm:leading-7 lg:row-start-2'>
                Be among the first teams to bring client work, approval, and billing into one
                accountable flow.
            </p>
            <div className='lg:col-start-2 lg:row-span-2 lg:self-end'>
                <WaitlistFormAnimated />
            </div>
        </Section>
    );
}
