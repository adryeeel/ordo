'use client';

import { useEffect, useRef, useState } from 'react';

import type { Language } from '@/features/home/helpers/mobile-menu';

export function useDesktopPreferences() {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState<Language>('en');
    const triggerRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDialogElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const hasOpened = useRef(false);

    useEffect(() => {
        if (!open) {
            if (hasOpened.current) requestAnimationFrame(() => triggerRef.current?.focus());
            return;
        }

        hasOpened.current = true;
        requestAnimationFrame(() => closeRef.current?.focus());

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false);
        };
        const closeOnOutsidePress = (event: PointerEvent) => {
            if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
        };

        window.addEventListener('keydown', closeOnEscape);
        document.addEventListener('pointerdown', closeOnOutsidePress);
        return () => {
            window.removeEventListener('keydown', closeOnEscape);
            document.removeEventListener('pointerdown', closeOnOutsidePress);
        };
    }, [open]);

    return {
        open,
        language,
        triggerRef,
        panelRef,
        closeRef,
        openPreferences: () => setOpen(true),
        closePreferences: () => setOpen(false),
        setLanguage,
    };
}
