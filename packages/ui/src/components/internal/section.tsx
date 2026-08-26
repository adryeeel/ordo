interface Props {
    id?: string;
    className?: string;
    children?: React.ReactElement | React.ReactElement[];
}

export function Section({ id, children, className }: Props) {
    return (
        <section id={id} className='p-6 md:p-8'>
            <div className={`mx-auto max-w-7xl ${className}`}>{children}</div>
        </section>
    );
}
