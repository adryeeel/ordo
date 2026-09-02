import { FinalCtaSection } from '@/features/home/components/final-cta-section';
import { HeroSection } from '@/features/home/components/hero/hero-section';
import { LandingFooter } from '@/features/home/components/landing-footer';
import { LandingHeader } from '@/features/home/components/landing-header';
import { LandingMotionProvider } from '@/features/home/components/landing-motion-provider';
import { DesktopPreferences } from '@/features/home/components/menu/desktop-preferences';
import { OutcomesSection } from '@/features/home/components/outcomes/outcomes-section';
import { PrinciplesSection } from '@/features/home/components/principles-section';
import { WorkflowSection } from '@/features/home/components/workflow/workflow-section';

export function HomePage() {
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
