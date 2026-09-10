import { NAV_LINKS } from '@/features/home/constants/navigation';

export const LINKS = [
    ...NAV_LINKS.map(({ href, label }) => ({
        href,
        name: label,
    })),
    {
        href: '#waitlist',
        name: 'Join the waitlist',
    },
];
