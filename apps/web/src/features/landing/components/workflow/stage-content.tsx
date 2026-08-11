import { AssignStage } from '@/features/landing/components/workflow/stages/assign-stage';
import { CompleteStage } from '@/features/landing/components/workflow/stages/complete-stage';
import { DefineStage } from '@/features/landing/components/workflow/stages/define-stage';
import { ExecuteStage } from '@/features/landing/components/workflow/stages/execute-stage';
import { ReviewStage } from '@/features/landing/components/workflow/stages/review-stage';

export function StageContent({ activeIndex }: { activeIndex: number }) {
    if (activeIndex === 0) return <DefineStage />;
    if (activeIndex === 1) return <AssignStage />;
    if (activeIndex === 2) return <ExecuteStage />;
    if (activeIndex === 3) return <ReviewStage />;
    return <CompleteStage />;
}
