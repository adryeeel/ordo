import {
    Popover,
    PopoverTitle,
    PopoverHeader,
    PopoverContent,
    PopoverDescription,
} from '@ordo/ui/shadcn/popover';

import { MenuTrigger, ThemeTabs, LanguageTabs } from './components';

export function Preferences() {
    return (
        <Popover>
            <MenuTrigger />
            <PopoverContent className='mr-5'>
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
