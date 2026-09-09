import { cn } from '@ordo/ui/lib/utils';
import { OrdoLogo } from '@ordo/ui/composed/logo';

interface Props {
    className?: string;
    loading?: 'eager' | 'lazy';
}

export function OrdoMark({ loading, className }: Props) {
    return (
        <div className={cn('flex items-center gap-2.5', className)}>
            <OrdoLogo loading={loading} />
            <span className='text-2xl font-semibold tracking-tighter'>Ordo.</span>
        </div>
    );
}
