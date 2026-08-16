'use client';

import { SettingsIcon } from '@ordo/ui/icons/symbols';

import {
    Popover,
    PopoverTitle,
    PopoverHeader,
    PopoverContent,
    PopoverTrigger,
    PopoverDescription,
} from '@ordo/ui/shadcn/popover';

import { Button } from '@ordo/ui/shadcn/button';

import { ThemeTabs, LanguageTabs } from './components';

export function Preferences() {
    return (
        <Popover>
            <PopoverTrigger
                aria-label='preferences'
                className='fixed right-5 bottom-5 z-10'
                render={<Button variant='outline' size='icon-lg' />}
            >
                <SettingsIcon className='size-5 stroke-[1.5]' />
            </PopoverTrigger>
            <PopoverContent aria-label='preferences' className='mr-5'>
                <PopoverHeader>
                    <PopoverTitle>Preferences</PopoverTitle>
                    <PopoverDescription>Change theme or language.</PopoverDescription>
                </PopoverHeader>
                <ThemeTabs />
                <LanguageTabs />
            </PopoverContent>
        </Popover>
    );
}
