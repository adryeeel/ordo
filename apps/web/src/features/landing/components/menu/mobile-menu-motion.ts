export const MOBILE_MENU_SURFACE_MOTION = [
    'data-starting-style:[&_.mobile-menu-morph-layer]:[clip-path:inset(0.75rem_0.75rem_calc(100%-4.25rem)_0.75rem_round_9999px)]',
    'data-ending-style:[&_.mobile-menu-morph-layer]:[clip-path:inset(0.75rem_0.75rem_calc(100%-4.25rem)_0.75rem_round_9999px)]',
    'data-ending-style:[&_.mobile-menu-morph-layer]:duration-380 data-ending-style:[&_.mobile-menu-morph-layer]:ease-in-out',
    'data-starting-style:[&_.mobile-menu-content]:-translate-y-2 data-starting-style:[&_.mobile-menu-content]:opacity-0',
    'data-ending-style:[&_.mobile-menu-content]:-translate-y-1.5 data-ending-style:[&_.mobile-menu-content]:opacity-0',
    'data-ending-style:[&_.mobile-menu-content]:delay-0 data-ending-style:[&_.mobile-menu-content]:duration-110',
    'data-starting-style:[&_.mobile-menu-ambient]:opacity-0',
    'data-starting-style:[&_.mobile-menu-icon-line]:transform-none',
    'motion-reduce:transition-none',
].join(' ');

export const MOBILE_MENU_MORPH_LAYER_MOTION =
    'mobile-menu-morph-layer fixed inset-0 -z-20 will-change-[clip-path] transition-[clip-path] duration-460 ease-[cubic-bezier(0.16,1,0.3,1)] [clip-path:inset(0_round_0)] motion-reduce:transition-none';

export const MOBILE_MENU_CONTENT_MOTION =
    'mobile-menu-content translate-y-0 opacity-100 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] delay-180 motion-reduce:transition-none';

export const MOBILE_MENU_AMBIENT_MOTION =
    'mobile-menu-ambient opacity-100 transition-opacity duration-240 ease-out delay-140 motion-reduce:transition-none';
