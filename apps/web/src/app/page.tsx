import { Metadata } from 'next';

import { Header } from '@/components/header';

export const metadata: Metadata = {
    title: 'Ordo | Centralized Business Management & Automation',
    description: 'Centralize your business operations from request to delivery.',
};

export default function Page() {
    return (
        <main>
            <Header />
        </main>
    );
}
