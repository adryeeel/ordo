import Link from 'next/link';

import { OrdoMark } from '@ordo/ui/composed/mark';

interface Props {
    onClick?: () => void;
}

export function Branding({ onClick }: Props) {
    const handleClick = () => {
        window.scrollTo({ top: 0 });
        if (onClick) onClick();
    };

    return (
        <Link href='/' onClick={handleClick}>
            <OrdoMark loading='eager' />
        </Link>
    );
}
