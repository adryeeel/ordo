'use client';

import { Button } from '@ordo/ui/primitive/button';
import { SettingsIcon } from '@ordo/ui/icons/symbols';
import { PopoverTrigger } from '@ordo/ui/primitive/popover';

import { usePreferences } from '../hooks';

export function MenuTrigger() {
    const { hide } = usePreferences();

    return (
        <PopoverTrigger
            data-testid='preferences-trigger'
            aria-label='Open preferences menu'
            className={`${hide && 'invisible opacity-0'} fixed right-5 bottom-5 z-10 transition-all duration-150 2xl:visible 2xl:opacity-100`}
            render={<Button variant='outline' size='icon-lg' />}
        >
            <SettingsIcon className='size-5 stroke-[1.5]' />
        </PopoverTrigger>
    );
}
