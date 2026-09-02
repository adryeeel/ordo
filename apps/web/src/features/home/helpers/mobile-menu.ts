export type MobileMenuView = 'navigation' | 'preferences';
export type Language = 'en' | 'pt';

export const MOBILE_MENU_DESKTOP_QUERY = '(min-width: 768px)';

export const LANGUAGE_OPTIONS = [
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Portuguese' },
] as const satisfies ReadonlyArray<{ value: Language; label: string }>;

export function getMobileMenuTitle(view: MobileMenuView) {
    return view === 'navigation' ? 'Navigation menu' : 'Preferences';
}

export function getLanguageIndicatorClassName(language: Language) {
    return language === 'pt' ? 'translate-x-[calc(100%+0.25rem)]' : 'translate-x-0';
}
