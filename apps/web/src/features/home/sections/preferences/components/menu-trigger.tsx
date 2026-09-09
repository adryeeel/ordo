'use client';

import { cn } from '@ordo/ui/lib/utils';
import { Button } from '@ordo/ui/primitive/button';
import { SettingsIcon } from '@ordo/ui/icons/symbols';
import { PopoverTrigger } from '@ordo/ui/primitive/popover';

import { usePreferences } from '../hooks';

interface Props {
    className?: string;
}

export function MenuTrigger({ className }: Props) {
    const { hidden } = usePreferences();

    const styles = cn(
        hidden && 'invisible opacity-0',
        'transition-all duration-150 2xl:visible 2xl:opacity-100',
        className,
    );

    return (
        <PopoverTrigger
            className={styles}
            aria-hidden={hidden}
            data-testid='preferences-trigger'
            aria-label='Open preferences menu'
            render={<Button variant='outline' size='icon-lg' />}
        >
            <SettingsIcon className='size-5 stroke-[1.5]' />
        </PopoverTrigger>
    );
}
