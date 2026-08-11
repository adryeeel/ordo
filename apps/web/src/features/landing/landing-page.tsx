import { FinalCtaSection } from '@/features/landing/components/final-cta-section';
import { HeroSection } from '@/features/landing/components/hero/hero-section';
import { LandingFooter } from '@/features/landing/components/landing-footer';
import { LandingHeader } from '@/features/landing/components/landing-header';
import { LandingMotionProvider } from '@/features/landing/components/landing-motion-provider';
import { DesktopPreferences } from '@/features/landing/components/menu/desktop-preferences';
import { OutcomesSection } from '@/features/landing/components/outcomes/outcomes-section';
import { PrinciplesSection } from '@/features/landing/components/principles-section';
import { WorkflowSection } from '@/features/landing/components/workflow/workflow-section';

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
                <DesktopPreferences />
            </div>
        </LandingMotionProvider>
    );
}
