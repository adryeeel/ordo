'use client';

import { useId } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'motion/react';

import { SettingsIcon } from '@ordo/ui/icons/symbols';

import { DesktopPreferencesPanel } from '@/features/landing/components/menu/desktop-preferences-panel';
import { useDesktopPreferences } from '@/features/landing/hooks/use-desktop-preferences';

const SURFACE_TRANSITION = {
    delay: 0.05,
    duration: 0.33,
    ease: [0.16, 1, 0.3, 1],
} as const;

const OUTGOING_CONTENT_TRANSITION = { duration: 0.05 } as const;
const INCOMING_CONTENT_TRANSITION = {
    delay: 0.26,
    duration: 0.12,
    ease: 'easeOut',
} as const;
const INCOMING_ICON_TRANSITION = { delay: 0.28, duration: 0.1 } as const;

export function DesktopPreferences() {
    const titleId = useId();
    const reduceMotion = useReducedMotion();
    const {
        open,
        language,
        triggerRef,
        panelRef,
        closeRef,
        openPreferences,
        closePreferences,
        setLanguage,
    } = useDesktopPreferences();
    const surfaceTransition = reduceMotion ? { duration: 0 } : SURFACE_TRANSITION;

    return (
        <m.div
            initial={false}
            animate={{
                width: open ? 352 : 48,
                height: open ? 298 : 48,
                borderRadius: open ? 24 : 999,
            }}
            transition={surfaceTransition}
            className='border-border/70 bg-background/95 text-foreground fixed right-5 bottom-5 z-[60] hidden overflow-hidden border shadow-2xl backdrop-blur-xl md:block dark:shadow-black/40'
        >
            <AnimatePresence initial={false}>
                {open ? (
                    <m.dialog
                        key='preferences-panel'
                        ref={panelRef}
                        open
                        aria-modal='false'
                        aria-labelledby={titleId}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: reduceMotion
                                ? { duration: 0 }
                                : INCOMING_CONTENT_TRANSITION,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            transition: reduceMotion
                                ? { duration: 0 }
                                : OUTGOING_CONTENT_TRANSITION,
                        }}
                        className='text-foreground absolute inset-0 m-0 size-full max-h-none max-w-none border-0 bg-transparent p-5'
                    >
                        <DesktopPreferencesPanel
                            closeRef={closeRef}
                            language={language}
                            onClose={closePreferences}
                            onLanguageChange={setLanguage}
                            titleId={titleId}
                        />
                    </m.dialog>
                ) : (
                    <m.button
                        key='preferences-trigger'
                        ref={triggerRef}
                        type='button'
                        aria-label='Open preferences'
                        onClick={openPreferences}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: reduceMotion ? { duration: 0 } : INCOMING_ICON_TRANSITION,
                        }}
                        exit={{
                            opacity: 0,
                            transition: reduceMotion
                                ? { duration: 0 }
                                : OUTGOING_CONTENT_TRANSITION,
                        }}
                        whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                        whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                        className='text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-0 grid size-full place-items-center outline-none focus-visible:ring-3'
                    >
                        <SettingsIcon className='size-5' />
                    </m.button>
                )}
            </AnimatePresence>
        </m.div>
    );
}
