import { AnchorButton } from '@ordo/ui/composed/anchor';
import { ArrowUpRightIcon } from '@ordo/ui/icons/symbols';
import { XIcon, InstagramIcon } from '@ordo/ui/icons/brands';

interface Props {
    onClick?: () => void;
}

export function Socials({ onClick }: Props) {
    return (
        <div className='mt-auto grid grid-cols-[auto_auto_1fr] gap-2 border-t pt-5'>
            <AnchorButton
                external
                size='icon-lg'
                variant='outline'
                aria-label='Instagram'
                href='https://instagram.com'
            >
                <InstagramIcon aria-label='Instagram' />
            </AnchorButton>

            <AnchorButton
                external
                size='icon-lg'
                aria-label='X'
                variant='outline'
                href='https://x.com'
            >
                <XIcon aria-hidden='true' />
            </AnchorButton>

            <AnchorButton onClick={onClick} size='lg' href='#waitlist'>
                Join the waitlist
                <ArrowUpRightIcon aria-hidden='true' />
            </AnchorButton>
        </div>
    );
}
