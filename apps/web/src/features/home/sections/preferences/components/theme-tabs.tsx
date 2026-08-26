'use client';

import { useTheme } from '@ordo/ui/provider/theme';
import { Tabs, TabsList, TabsTrigger } from '@ordo/ui/primitive/tabs';
import { SunIcon, MoonIcon, MonitorIcon } from '@ordo/ui/icons/symbols';

export function ThemeTabs() {
    const { theme, setTheme } = useTheme();

    return (
        <Tabs value={theme}>
            <p className='text-muted-foreground text-xs font-medium'>Theme</p>
            <TabsList className='w-full'>
                <TabsTrigger aria-label='Light' value='light' onClick={() => setTheme('light')}>
                    <SunIcon />
                </TabsTrigger>
                <TabsTrigger aria-label='System' value='system' onClick={() => setTheme('system')}>
                    <MonitorIcon />
                </TabsTrigger>
                <TabsTrigger aria-label='Dark' value='dark' onClick={() => setTheme('dark')}>
                    <MoonIcon />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
