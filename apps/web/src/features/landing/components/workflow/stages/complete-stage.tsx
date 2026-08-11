import { CheckIcon } from '@ordo/ui/internal/icons';

import { COMPLETION_OUTPUTS } from '@/features/landing/constants/landing-content';

export function CompleteStage() {
    return (
        <div className='space-y-3'>
            {COMPLETION_OUTPUTS.map((output) => (
                <div
                    key={output.title}
                    className={`flex items-center gap-3 rounded-2xl border p-3.5 ${
                        'featured' in output && output.featured
                            ? 'border-primary/30 bg-primary/6'
                            : 'border-border bg-background/60'
                    }`}
                >
                    <span className='bg-card text-primary grid size-9 place-items-center rounded-xl shadow-sm'>
                        <CheckIcon className='size-4' />
                    </span>
                    <div className='min-w-0 flex-1'>
                        <p className='truncate text-xs font-semibold'>{output.title}</p>
                        <p className='text-muted-foreground mt-0.5 text-[0.6rem]'>
                            {output.status}
                        </p>
                    </div>
                    <span className='text-muted-foreground text-[0.62rem] font-medium'>
                        {output.meta}
                    </span>
                </div>
            ))}
        </div>
    );
}
