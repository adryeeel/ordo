import { PRINCIPLES } from '@/features/landing/constants/landing-content';

export function PrinciplesSection() {
    return (
        <section
            id='principles'
            className='border-border bg-muted/25 scroll-mt-20 border-y py-24 sm:py-32'
        >
            <div className='mx-auto max-w-7xl px-5 sm:px-8'>
                <div className='grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24'>
                    <div>
                        <h2 className='text-3xl leading-[1.08] font-semibold tracking-[-0.04em] sm:text-4xl'>
                            A system your operation can rely on.
                        </h2>
                    </div>

                    <div className='grid gap-x-10 gap-y-10 sm:grid-cols-2'>
                        {PRINCIPLES.map((principle, index) => (
                            <div key={principle.title} className='border-border border-t pt-5'>
                                <div className='mb-7 flex items-center justify-between'>
                                    <span className='text-muted-foreground text-[0.65rem] font-semibold tracking-[0.12em]'>
                                        0{index + 1}
                                    </span>
                                    <span className='bg-primary size-1.5 rounded-full' />
                                </div>
                                <h3 className='text-base font-semibold tracking-[-0.025em]'>
                                    {principle.title}
                                </h3>
                                <p className='text-muted-foreground mt-2 text-sm leading-6'>
                                    {principle.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
