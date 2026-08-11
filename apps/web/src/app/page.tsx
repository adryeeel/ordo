import type { Metadata } from 'next';

import { LandingPage } from '@/pages/landing/landing-page';

export const metadata: Metadata = {
    title: 'Ordo — From client work to approved invoice',
    description:
        'One structured workflow to assign client work, track progress, approve delivery, and automate billing.',
};

export default function Page() {
    return <LandingPage />;
}
