export const LANDING_NAV_ITEMS = [
    { label: 'Workflow', href: '#workflow' },
    { label: 'Outcomes', href: '#outcomes' },
    { label: 'Principles', href: '#principles' },
] as const;

export const HERO_PILLARS = [
    {
        title: 'One record',
        body: 'Scope, ownership, delivery, and billing stay connected.',
    },
    {
        title: 'One clear path',
        body: 'Every handoff follows a visible, controlled state.',
    },
    {
        title: 'One audit trail',
        body: 'Key actions and decisions remain traceable.',
    },
] as const;

export const WORKFLOW_STEPS = [
    {
        id: 'define',
        eyebrow: '01 · Define',
        title: 'Give every request a clear beginning.',
        description:
            'Capture the client, scope, budget, and delivery context in one structured work item—before details disappear into another thread.',
        result: 'A complete brief becomes the shared source of truth.',
    },
    {
        id: 'assign',
        eyebrow: '02 · Assign',
        title: 'Make ownership explicit.',
        description:
            'Assign the right people and make responsibilities visible. The team knows what they own; managers know exactly where work sits.',
        result: 'Assignment controls visibility, access, and accountability.',
    },
    {
        id: 'execute',
        eyebrow: '03 · Execute',
        title: 'See progress without chasing updates.',
        description:
            'Progress notes, milestones, and deliverables stay connected to the work while it moves forward—not scattered across tools.',
        result: 'Everyone sees the current state and the path behind it.',
    },
    {
        id: 'review',
        eyebrow: '04 · Review',
        title: 'Create a real quality gate.',
        description:
            'Submission locks the work for review. Approve a complete delivery or return it with specific feedback and a clear route back.',
        result: 'Decisions are deliberate, visible, and recorded.',
    },
    {
        id: 'complete',
        eyebrow: '05 · Complete',
        title: 'Turn approval into action.',
        description:
            'Once work is approved, Ordo generates the completion report and invoice, records delivery, and closes the operational loop.',
        result: 'Billing starts from trusted work data—not manual reconstruction.',
    },
] as const;

export const WORKSPACE_NAV_ITEMS = ['Overview', 'Work', 'Review', 'Billing'] as const;

export const WORK_SUMMARY_FIELDS = [
    { label: 'Client', value: 'Northstar' },
    { label: 'Budget', value: '€6,400' },
    { label: 'Due', value: '24 Aug' },
] as const;

export const WORK_ACTIVITY = [
    { title: 'Deliverables attached', meta: 'Maya · 10:42' },
    { title: 'Milestone 3 completed', meta: 'Leo · 09:18' },
    { title: 'Progress updated to 72%', meta: 'System · 09:18' },
] as const;

export const WORK_ASSIGNEES = ['LA', 'MK', 'RS'] as const;

export const DEFINE_FIELDS = [
    { label: 'Work title', value: 'Brand rollout' },
    { label: 'Client', value: 'Northstar' },
    { label: 'Budget', value: '€6,400' },
    { label: 'Due date', value: '24 Aug 2026' },
] as const;

export const TEAM_ASSIGNMENTS = [
    { initials: 'LA', name: 'Leo Alves', role: 'Design lead', selected: true },
    { initials: 'MK', name: 'Maya Kim', role: 'Content', selected: true },
    { initials: 'RS', name: 'Rui Silva', role: 'Development', selected: false },
] as const;

export const WORK_MILESTONES = [
    { title: 'Discovery & direction', status: 'Complete', complete: true },
    { title: 'Design system', status: 'Complete', complete: true },
    { title: 'Rollout assets', status: 'In progress', complete: false },
] as const;

export const COMPLETION_OUTPUTS = [
    { title: 'Completion report', status: 'Generated', meta: 'PDF' },
    { title: 'Invoice #INV-2048', status: 'Sent', meta: '€6,400', featured: true },
    { title: 'Audit record', status: 'Sealed', meta: '11:31' },
] as const;

export const OUTCOMES = [
    {
        type: 'clarity',
        label: 'Clarity',
        title: 'Know what is owned and what comes next.',
        body: 'Scope, assignments, status, and decisions stay attached to the work—not buried in conversations.',
    },
    {
        type: 'control',
        label: 'Control',
        title: 'Approve the outcome before it becomes final.',
        body: 'A deliberate review step protects quality while feedback loops cleanly back to the team.',
    },
    {
        type: 'momentum',
        label: 'Momentum',
        title: 'Move approved work straight into billing.',
        body: 'Reports and invoices follow the trusted completion record, removing one more manual handoff.',
    },
] as const;

export type OutcomeType = (typeof OUTCOMES)[number]['type'];

export const PRINCIPLES = [
    {
        title: 'Explicit ownership',
        body: 'Assignments make responsibility and access clear from the start.',
    },
    {
        title: 'Controlled transitions',
        body: 'Work moves through defined moments instead of ambiguous status changes.',
    },
    {
        title: 'Managerial validation',
        body: 'Nothing is complete—or billable—until the delivery is approved.',
    },
    {
        title: 'Durable history',
        body: 'Assignments, progress, feedback, and decisions remain traceable.',
    },
] as const;
