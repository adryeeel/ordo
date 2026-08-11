import { WaitlistForm } from '@/features/landing/components/waitlist-form';

export function FinalCtaSection() {
    return (
        <section className='py-8 sm:py-12'>
            <div className='mx-auto max-w-7xl px-5 sm:px-8'>
                <div className='relative overflow-hidden rounded-[2rem] bg-[#16352c] px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-20 lg:py-24'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_1px,transparent_1px)] mask-[radial-gradient(circle_at_80%_50%,black,transparent_70%)] bg-size-[32px_32px] opacity-25' />
                    <div className='relative grid min-w-0 gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end'>
                        <div className='min-w-0'>
                            <h2 className='max-w-2xl text-4xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl'>
                                Make every handoff count.
                            </h2>
                            <p className='mt-5 max-w-lg text-sm leading-6 text-white/75 sm:text-base sm:leading-7'>
                                Be among the first teams to bring client work, approval, and billing
                                into one accountable flow.
                            </p>
                        </div>
                        <div className='min-w-0 lg:w-full lg:max-w-xl lg:justify-self-end'>
                            <WaitlistForm id='footer-email' inverse />
                            <p className='mt-3 px-2 text-xs text-white/65'>
                                Early access · Product updates only
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
