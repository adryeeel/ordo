import { CheckIcon } from '@ordo/ui/composed/icons';

export function ReviewStage() {
    return (
        <div className='border-border bg-background/60 rounded-2xl border p-4'>
            <div className='mb-4 flex items-start gap-3'>
                <span className='bg-primary/10 text-primary grid size-10 place-items-center rounded-full'>
                    <CheckIcon className='size-5' />
                </span>
                <div>
                    <p className='text-xs font-semibold'>Ready for review</p>
                    <p className='text-muted-foreground mt-1 text-[0.62rem]'>
                        Submitted by Leo · 11:24
                    </p>
                </div>
            </div>
            <div className='border-border bg-card mb-3 rounded-xl border p-3.5'>
                <p className='text-muted-foreground mb-2 text-[0.58rem] font-medium'>
                    Delivery summary
                </p>
                <p className='text-[0.68rem] leading-relaxed'>
                    Final rollout pack includes approved templates, usage guide, and production
                    files.
                </p>
            </div>
            <div className='grid grid-cols-2 gap-2.5'>
                <button
                    type='button'
                    className='border-border bg-card h-9 rounded-full border text-[0.65rem] font-medium'
                >
                    Request changes
                </button>
                <button
                    type='button'
                    className='bg-primary text-primary-foreground h-9 rounded-full text-[0.65rem] font-medium'
                >
                    Approve work
                </button>
            </div>
        </div>
    );
}
