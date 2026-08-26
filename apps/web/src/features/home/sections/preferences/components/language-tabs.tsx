import { USFlagIcon, PTFlagIcon } from '@ordo/ui/icons/flags';
import { Tabs, TabsList, TabsTrigger } from '@ordo/ui/primitive/tabs';

export function LanguageTabs() {
    return (
        <Tabs>
            <p aria-label='Theme' className='text-muted-foreground text-xs font-medium'>
                Language
            </p>
            <TabsList className='w-full'>
                <TabsTrigger value='en'>
                    <USFlagIcon />
                    English
                </TabsTrigger>
                <TabsTrigger value='pt' disabled>
                    <PTFlagIcon />
                    Português
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
