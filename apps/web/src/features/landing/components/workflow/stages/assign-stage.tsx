import { CheckIcon } from '@ordo/ui/icons/symbols';

import { TEAM_ASSIGNMENTS } from '@/features/landing/constants/landing-content';

export function AssignStage() {
    return (
        <div className='space-y-3'>
            {TEAM_ASSIGNMENTS.map((member) => (
                <div
                    key={member.name}
                    className={`flex items-center gap-3 rounded-2xl border p-3.5 transition-colors ${
                        member.selected
                            ? 'border-primary/25 bg-primary/6'
                            : 'border-border bg-background/60'
                    }`}
                >
                    <span className='bg-muted grid size-9 place-items-center rounded-full text-[0.62rem] font-semibold'>
                        {member.initials}
                    </span>
                    <div className='min-w-0 flex-1'>
                        <p className='truncate text-xs font-semibold'>{member.name}</p>
                        <p className='text-muted-foreground text-[0.62rem]'>{member.role}</p>
                    </div>
                    <span
                        className={`grid size-5 place-items-center rounded-full border ${
                            member.selected
                                ? 'border-primary bg-primary text-primary-foreground'
                                : 'border-border'
                        }`}
                    >
                        {member.selected && <CheckIcon className='size-3' />}
                    </span>
                </div>
            ))}
        </div>
    );
}
