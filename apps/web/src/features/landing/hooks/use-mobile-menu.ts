'use client';

import { useEffect, useState } from 'react';

import {
    MOBILE_MENU_DESKTOP_QUERY,
    type Language,
    type MobileMenuView,
} from '@/features/landing/helpers/mobile-menu';

export function useMobileMenu() {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState<MobileMenuView>('navigation');
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const desktopQuery = window.matchMedia(MOBILE_MENU_DESKTOP_QUERY);
        const closeOnDesktop = (event: MediaQueryListEvent | MediaQueryList) => {
            if (event.matches) setOpen(false);
        };

        closeOnDesktop(desktopQuery);
        desktopQuery.addEventListener('change', closeOnDesktop);
        return () => desktopQuery.removeEventListener('change', closeOnDesktop);
    }, []);

    return {
        open,
        view,
        language,
        setOpen,
        setLanguage,
        closeMenu: () => setOpen(false),
        openPreferences: () => setView('preferences'),
        showNavigation: () => setView('navigation'),
        handleOpenChangeComplete: (nextOpen: boolean) => {
            if (!nextOpen) setView('navigation');
        },
    };
}
