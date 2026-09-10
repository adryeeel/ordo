import { FinalCtaSection } from '@/features/home/components/final-cta-section';
import { HeroSection } from '@/features/home/components/hero/hero-section';
import { LandingFooter } from '@/features/home/components/landing-footer';
import { OutcomesSection } from '@/features/home/components/outcomes/outcomes-section';
import { PrinciplesSection } from '@/features/home/components/principles-section';
import { WorkflowSection } from '@/features/home/components/workflow/workflow-section';

import { Header } from '@/features/home/sections/header';
import { Preferences } from '@/features/home/sections/preferences';

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <WorkflowSection />
                <OutcomesSection />
                <PrinciplesSection />
                <FinalCtaSection />
                <Preferences />
            </main>
            <LandingFooter />
        </>
    );
}
