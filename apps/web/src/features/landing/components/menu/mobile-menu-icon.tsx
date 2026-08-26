import { cn } from '@ordo/ui/lib/utils';

type MobileMenuIconProps = {
    open: boolean;
    className?: string;
};

export function MobileMenuIcon({ open, className }: MobileMenuIconProps) {
    return (
        <svg
            aria-hidden='true'
            viewBox='0 0 20 20'
            fill='none'
            data-open={open}
            className={className}
        >
            <path
                d='M3.5 6.5h13'
                stroke='currentColor'
                strokeWidth='1.7'
                strokeLinecap='round'
                className={cn(
                    'mobile-menu-icon-line origin-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none',
                    open && 'translate-y-[3.5px] rotate-45',
                )}
            />
            <path
                d='M3.5 13.5h13'
                stroke='currentColor'
                strokeWidth='1.7'
                strokeLinecap='round'
                className={cn(
                    'mobile-menu-icon-line origin-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none',
                    open && 'translate-y-[-3.5px] -rotate-45',
                )}
            />
        </svg>
    );
}
