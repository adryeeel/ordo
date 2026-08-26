'use client';

import { CloseIcon, MenuIcon } from '@ordo/ui/internal/icons';
import {
    DialogClose,
    DialogPopup,
    DialogPortal,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
    DialogViewport,
} from '@ordo/ui/shadcn/dialog';

import { MobileMenuNavigation } from '@/features/landing/components/menu/mobile-menu-navigation';
import { MobileMenuPreferences } from '@/features/landing/components/menu/mobile-menu-preferences';
import { getMobileMenuTitle } from '@/features/landing/helpers/mobile-menu';
import { useMobileMenu } from '@/features/landing/hooks/use-mobile-menu';

export function MobileMenu() {
    const {
        open,
        view,
        language,
        setOpen,
        setLanguage,
        closeMenu,
        openPreferences,
        showNavigation,
        handleOpenChangeComplete,
    } = useMobileMenu();

    return (
        <DialogRoot
            open={open}
            onOpenChange={setOpen}
            onOpenChangeComplete={handleOpenChangeComplete}
        >
            <DialogTrigger
                aria-label='Open navigation menu'
                className='bg-muted hover:bg-accent focus-visible:ring-ring grid size-10 place-items-center rounded-full transition-colors outline-none focus-visible:ring-3 md:hidden'
            >
                <MenuIcon className='size-5' />
            </DialogTrigger>

            <DialogPortal>
                <DialogViewport className='fixed inset-0 z-70 md:hidden'>
                    <DialogPopup className='group/menu bg-background text-foreground relative size-full overflow-y-auto transition-[opacity,clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:inset(0_0_0_0)] data-ending-style:opacity-0 motion-reduce:transition-none'>
                        <DialogTitle className='sr-only'>{getMobileMenuTitle(view)}</DialogTitle>

                        <div className='bg-primary/10 absolute top-0 right-0 -z-10 size-56 rounded-full blur-3xl' />
                        <div className='mx-auto flex min-h-dvh max-w-lg flex-col px-5 pb-5'>
                            <div className='flex h-16 shrink-0 items-center justify-between'>
                                <div className='flex items-center gap-2.5' aria-label='Ordo'>
                                    <span
                                        aria-hidden='true'
                                        className="size-8 bg-[url('/img/ordo.svg')] bg-contain bg-center bg-no-repeat dark:invert"
                                    />
                                    <span className='text-2xl font-semibold tracking-tighter'>
                                        Ordo.
                                    </span>
                                </div>
                                <DialogClose
                                    aria-label='Close navigation menu'
                                    className='bg-muted hover:bg-accent focus-visible:ring-ring grid size-10 place-items-center rounded-full transition-colors outline-none focus-visible:ring-3'
                                >
                                    <CloseIcon className='size-5' />
                                </DialogClose>
                            </div>

                            {view === 'navigation' ? (
                                <MobileMenuNavigation
                                    onClose={closeMenu}
                                    onOpenPreferences={openPreferences}
                                />
                            ) : (
                                <MobileMenuPreferences
                                    language={language}
                                    onBack={showNavigation}
                                    onLanguageChange={setLanguage}
                                />
                            )}
                        </div>
                    </DialogPopup>
                </DialogViewport>
            </DialogPortal>
        </DialogRoot>
    );
}
