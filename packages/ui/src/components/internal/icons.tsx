import { Settings as SettingsLucideIcon } from 'lucide-react';

type IconProps = {
    className?: string;
};

export function ArrowRightIcon({ className }: IconProps) {
    return (
        <svg aria-hidden='true' viewBox='0 0 20 20' fill='none' className={className}>
            <path
                d='M4 10h12m-5-5 5 5-5 5'
                stroke='currentColor'
                strokeWidth='1.7'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export function ArrowDownIcon({ className }: IconProps) {
    return (
        <svg aria-hidden='true' viewBox='0 0 20 20' fill='none' className={className}>
            <path
                d='M10 4v12m-4-4 4 4 4-4'
                stroke='currentColor'
                strokeWidth='1.6'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export function CheckIcon({ className }: IconProps) {
    return (
        <svg aria-hidden='true' viewBox='0 0 20 20' fill='none' className={className}>
            <path
                d='m4.5 10.5 3.25 3.25L15.5 6'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export function MenuIcon({ className }: IconProps) {
    return (
        <svg aria-hidden='true' viewBox='0 0 20 20' fill='none' className={className}>
            <path
                d='M3.5 6.5h13m-13 7h13'
                stroke='currentColor'
                strokeWidth='1.7'
                strokeLinecap='round'
            />
        </svg>
    );
}

export function CloseIcon({ className }: IconProps) {
    return (
        <svg aria-hidden='true' viewBox='0 0 20 20' fill='none' className={className}>
            <path
                d='m5 5 10 10M15 5 5 15'
                stroke='currentColor'
                strokeWidth='1.7'
                strokeLinecap='round'
            />
        </svg>
    );
}

export function SettingsIcon({ className }: IconProps) {
    return <SettingsLucideIcon aria-hidden='true' className={className} strokeWidth={1.7} />;
}
