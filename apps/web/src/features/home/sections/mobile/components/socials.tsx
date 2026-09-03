import { Button } from '@ordo/ui/primitive/button';
import { DialogClose } from '@ordo/ui/primitive/dialog';

import { ArrowUpRightIcon } from '@ordo/ui/icons/symbols';
import { XIcon, InstagramIcon } from '@ordo/ui/icons/brands';

export function Socials() {
    return (
        <div className='mt-auto grid grid-cols-[auto_auto_1fr] gap-2 border-t pt-5'>
            <Button
                size='icon-lg'
                variant='outline'
                nativeButton={false}
                render={
                    <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                        <InstagramIcon aria-label='Instagram' />
                    </a>
                }
            />
            <Button
                size='icon-lg'
                variant='outline'
                nativeButton={false}
                render={
                    <a href='https://x.com' target='_blank' rel='noopener noreferrer'>
                        <XIcon aria-label='X' />
                    </a>
                }
            />
            <DialogClose className='ml-auto max-w-max'>
                <Button
                    size='lg'
                    nativeButton={false}
                    render={
                        <a href='#waitlist' target='_self'>
                            Join the waitlist
                            <ArrowUpRightIcon />
                        </a>
                    }
                />
            </DialogClose>
        </div>
    );
}
