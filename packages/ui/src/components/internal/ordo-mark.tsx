import { cn } from '@ordo/ui/lib/utils';

type OrdoMarkProps = {
    className?: string;
};

export function OrdoMark({ className }: OrdoMarkProps) {
    return (
        <span className={cn('text-primary relative block size-6', className)} aria-hidden='true'>
            {Array.from({ length: 8 }).map((_, index) => (
                <span
                    key={index}
                    className='absolute top-1/2 left-1/2 h-1.5 w-2.5 origin-left rounded-full bg-current'
                    style={{ transform: `rotate(${index * 45}deg) translateX(2px)` }}
                />
            ))}
            <span className='absolute top-1/2 left-1/2 size-2 -translate-1/2 rounded-full bg-current' />
        </span>
    );
}
