import { DEFINE_FIELDS } from '@/features/home/const/landing-content';

export function DefineStage() {
    return (
        <div className='border-border bg-background/60 rounded-2xl border p-4'>
            <div className='grid gap-3 sm:grid-cols-2'>
                {DEFINE_FIELDS.map((field, index) => (
                    <div
                        key={field.label}
                        className={`bg-card rounded-xl border p-3 ${
                            index === 0
                                ? 'border-primary/30 ring-primary/8 ring-2'
                                : 'border-border'
                        }`}
                    >
                        <p className='text-muted-foreground mb-1 text-[0.58rem]'>{field.label}</p>
                        <p className='text-[0.7rem] font-medium'>{field.value}</p>
                    </div>
                ))}
            </div>
            <div className='border-border bg-card mt-3 rounded-xl border p-3'>
                <p className='text-muted-foreground mb-2 text-[0.58rem]'>Scope</p>
                <div className='space-y-1.5'>
                    <span className='bg-muted block h-1.5 w-full rounded-full' />
                    <span className='bg-muted block h-1.5 w-4/5 rounded-full' />
                </div>
            </div>
        </div>
    );
}
