import { AssignStage } from '@/pages/landing/components/workflow/stages/assign-stage';
import { CompleteStage } from '@/pages/landing/components/workflow/stages/complete-stage';
import { DefineStage } from '@/pages/landing/components/workflow/stages/define-stage';
import { ExecuteStage } from '@/pages/landing/components/workflow/stages/execute-stage';
import { ReviewStage } from '@/pages/landing/components/workflow/stages/review-stage';

export function StageContent({ activeIndex }: { activeIndex: number }) {
    if (activeIndex === 0) return <DefineStage />;
    if (activeIndex === 1) return <AssignStage />;
    if (activeIndex === 2) return <ExecuteStage />;
    if (activeIndex === 3) return <ReviewStage />;
    return <CompleteStage />;
}
