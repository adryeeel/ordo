import { AssignStage } from '@/features/home/components/workflow/stages/assign-stage';
import { CompleteStage } from '@/features/home/components/workflow/stages/complete-stage';
import { DefineStage } from '@/features/home/components/workflow/stages/define-stage';
import { ExecuteStage } from '@/features/home/components/workflow/stages/execute-stage';
import { ReviewStage } from '@/features/home/components/workflow/stages/review-stage';

export function StageContent({ activeIndex }: { activeIndex: number }) {
    if (activeIndex === 0) return <DefineStage />;
    if (activeIndex === 1) return <AssignStage />;
    if (activeIndex === 2) return <ExecuteStage />;
    if (activeIndex === 3) return <ReviewStage />;
    return <CompleteStage />;
}
