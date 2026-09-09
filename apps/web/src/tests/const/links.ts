import { NAV_ITEMS } from '@/features/home/const/navigation';

export const NAV_LINKS = [
    ...NAV_ITEMS.map(({ href, label }) => ({
        href,
        name: label,
    })),
    {
        href: '#waitlist',
        name: 'Join the waitlist',
    },
];
