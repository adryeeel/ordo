import { FinalCtaSection } from '@/pages/landing/components/final-cta-section';
import { HeroSection } from '@/pages/landing/components/hero/hero-section';
import { LandingFooter } from '@/pages/landing/components/landing-footer';
import { LandingHeader } from '@/pages/landing/components/landing-header';
import { LandingMotionProvider } from '@/pages/landing/components/landing-motion-provider';
import { OutcomesSection } from '@/pages/landing/components/outcomes/outcomes-section';
import { PrinciplesSection } from '@/pages/landing/components/principles-section';
import { WorkflowSection } from '@/pages/landing/components/workflow/workflow-section';

export function LandingPage() {
    return (
        <LandingMotionProvider>
            <div className='bg-background min-h-screen overflow-x-clip'>
                <LandingHeader />
                <main>
                    <HeroSection />
                    <WorkflowSection />
                    <OutcomesSection />
                    <PrinciplesSection />
                    <FinalCtaSection />
                </main>
                <LandingFooter />
            </div>
        </LandingMotionProvider>
    );
}
