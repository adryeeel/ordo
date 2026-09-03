'use client';

import { m, AnimatePresence } from '@ordo/ui/provider/motion';

import { ArrowRightIcon, CheckIcon } from '@ordo/ui/icons/symbols';
import { Button } from '@ordo/ui/primitive/button';

import { useWaitlistForm } from '@/features/home/hooks/use-waitlist-form';

type WaitlistFormProps = {
    id: string;
    inverse?: boolean;
};

export function WaitlistForm({ id, inverse = false }: WaitlistFormProps) {
    const { submitted, handleSubmit } = useWaitlistForm();

    return (
        <AnimatePresence mode='wait' initial={false}>
            {submitted ? (
                <m.output
                    key='success'
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                    className={`flex min-h-13 items-center gap-3 rounded-2xl border px-5 py-3 text-sm min-[480px]:rounded-full min-[480px]:py-0 ${
                        inverse
                            ? 'border-white/15 bg-white/10 text-white'
                            : 'border-primary/20 bg-primary/8 text-foreground'
                    }`}
                >
                    <span
                        className={`grid size-7 shrink-0 place-items-center rounded-full ${
                            inverse
                                ? 'bg-white text-[#16352c]'
                                : 'bg-primary text-primary-foreground'
                        }`}
                    >
                        <CheckIcon className='size-4' />
                    </span>
                    You&apos;re on the early-access list. We&apos;ll keep you posted.
                </m.output>
            ) : (
                <m.form
                    key='form'
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className={`flex w-full max-w-xl min-w-0 flex-col items-stretch gap-2 rounded-2xl border p-1.5 shadow-lg transition-shadow focus-within:ring-3 min-[480px]:flex-row min-[480px]:items-center min-[480px]:rounded-full dark:shadow-none ${
                        inverse
                            ? 'border-white/15 bg-white/10 shadow-black/20 focus-within:ring-white/15'
                            : 'border-border bg-card shadow-foreground/5 focus-within:ring-primary/15'
                    }`}
                >
                    <label htmlFor={id} className='sr-only'>
                        Work email
                    </label>
                    <input
                        id={id}
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        placeholder='you@company.com'
                        className={`placeholder:text-muted-foreground h-10 min-h-10 w-full min-w-0 flex-1 bg-transparent px-4 text-sm outline-none ${
                            inverse ? 'text-white placeholder:text-white/65' : 'text-foreground'
                        }`}
                    />
                    <Button
                        type='submit'
                        size='lg'
                        className={
                            inverse
                                ? 'w-full bg-white text-[#16352c] hover:bg-white/90 focus-visible:ring-white/50 min-[480px]:w-auto'
                                : 'w-full min-[480px]:w-auto'
                        }
                    >
                        Join waitlist
                        <ArrowRightIcon className='size-4' />
                    </Button>
                </m.form>
            )}
        </AnimatePresence>
    );
}
