import {
    Popover,
    PopoverTitle,
    PopoverHeader,
    PopoverContent,
    PopoverDescription,
} from '@ordo/ui/primitive/popover';

import { MenuTrigger, ThemeTabs, LanguageTabs } from './components';

export function Preferences() {
    return (
        <Popover>
            <MenuTrigger className='fixed right-3 bottom-3 z-10 md:right-5 md:bottom-5' />
            <PopoverContent className='mr-3 md:mr-5'>
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
