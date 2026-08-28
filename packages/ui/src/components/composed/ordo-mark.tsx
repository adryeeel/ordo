import { OrdoLogo } from '@ordo/ui/composed/branding';

type OrdoMarkProps = {
    className?: string;
};

export function OrdoMark({ className }: OrdoMarkProps) {
    return <OrdoLogo className={className ?? 'size-6'} />;
}
