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
