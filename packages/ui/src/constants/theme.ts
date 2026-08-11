import { Monitor, Moon, Sun } from 'lucide-react';

export const THEME_OPTIONS = [
    { value: 'light', label: 'Light', Icon: Sun },
    { value: 'system', label: 'System', Icon: Monitor },
    { value: 'dark', label: 'Dark', Icon: Moon },
] as const;

export const THEME_INDICATOR_TRANSFORMS = {
    light: 'translateX(0)',
    system: 'translateX(calc(100% + 0.25rem))',
    dark: 'translateX(calc(200% + 0.5rem))',
} as const;
