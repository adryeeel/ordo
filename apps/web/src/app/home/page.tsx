import type { Metadata } from 'next';

import { Hero } from '@/features/home/sections/hero';
import { Header } from '@/features/home/sections/header';
import { Footer } from '@/features/home/sections/footer';
import { Waitlist } from '@/features/home/sections/waitlist';
import { Preferences } from '@/features/home/sections/preferences';

export const metadata: Metadata = {
    title: 'Ordo — From client work to approved invoice',
    description:
        'One structured workflow to assign client work, track progress, approve delivery, and automate billing.',
};

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Waitlist />
            </main>
            <Preferences />
            <Footer />
        </>
    );
}
