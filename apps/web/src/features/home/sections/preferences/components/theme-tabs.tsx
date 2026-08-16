import { useTheme } from '@ordo/ui/provider/theme';
import { Tabs, TabsList, TabsTrigger } from '@ordo/ui/primitive/tabs';
import { SunIcon, MoonIcon, MonitorIcon } from '@ordo/ui/icons/symbols';

export function ThemeTabs() {
    const { theme, setTheme } = useTheme();

    return (
        <Tabs value={theme}>
            <p aria-label='Theme' className='text-muted-foreground text-xs font-medium'>
                Theme
            </p>
            <TabsList className='w-full'>
                <TabsTrigger value='light' onClick={() => setTheme('light')}>
                    <SunIcon />
                </TabsTrigger>
                <TabsTrigger value='system' onClick={() => setTheme('system')}>
                    <MonitorIcon />
                </TabsTrigger>
                <TabsTrigger value='dark' onClick={() => setTheme('dark')}>
                    <MoonIcon />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
