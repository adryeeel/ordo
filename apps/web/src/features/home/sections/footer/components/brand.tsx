import { Branding } from '@ordo/ui/internal/branding';

export function Brand() {
    return (
        <div>
            <Branding />
            <p className='text-muted-foreground mt-3 text-sm leading-5 font-medium'>
                Structured work. Clear outcomes.
            </p>
        </div>
    );
}
