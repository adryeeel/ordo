import { Button } from '@ordo/ui/shadcn/button';

interface Props {
    className?: string;
}

export function ButtonCTA({ className }: Props) {
    return (
        <Button
            nativeButton={false}
            className={className}
            render={<a href='#waitlist'>Join the waitlist</a>}
        />
    );
}
