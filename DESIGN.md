---
name: Ordo
description: Structured work. Clear outcomes.
colors:
    approval-green: 'oklch(0.508 0.118 165.612)'
    approval-green-dark: 'oklch(0.432 0.095 166.913)'
    approval-foreground: 'oklch(0.979 0.021 166.113)'
    deep-operational-green: '#16352c'
    soft-success-green: '#9fe7c6'
    porcelain: 'oklch(1 0 0)'
    ink: 'oklch(0.148 0.004 228.8)'
    cool-paper: 'oklch(0.963 0.002 197.1)'
    graphite: 'oklch(0.47 0.021 213.5)'
    hairline: 'oklch(0.925 0.005 214.3)'
    night-surface: 'oklch(0.218 0.008 223.9)'
    night-muted: 'oklch(0.275 0.011 216.9)'
    night-secondary: 'oklch(0.723 0.014 214.4)'
    destructive: 'oklch(0.577 0.245 27.325)'
typography:
    display:
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
        fontSize: 'clamp(2.75rem, 7vw, 5.75rem)'
        fontWeight: 600
        lineHeight: 0.94
        letterSpacing: '-0.04em'
    headline:
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
        fontSize: 'clamp(2.25rem, 4vw, 3.75rem)'
        fontWeight: 600
        lineHeight: 1.03
        letterSpacing: '-0.04em'
    title:
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
        fontSize: '1.25rem'
        fontWeight: 600
        lineHeight: 1.4
        letterSpacing: '-0.035em'
    body:
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
        fontSize: '1rem'
        fontWeight: 400
        lineHeight: 1.75
    label:
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
        fontSize: '0.6875rem'
        fontWeight: 600
        lineHeight: 1.2
        letterSpacing: '0.12em'
rounded:
    sm: '6px'
    md: '8px'
    lg: '10px'
    xl: '14px'
    2xl: '18px'
    3xl: '22px'
    4xl: '26px'
    panel: '24px'
    feature: '28px'
    cta: '32px'
    pill: '999px'
spacing:
    2xs: '6px'
    xs: '8px'
    sm: '12px'
    md: '16px'
    lg: '20px'
    xl: '32px'
    2xl: '48px'
    section-sm: '96px'
    section-md: '128px'
    section-lg: '160px'
components:
    button-primary:
        backgroundColor: '{colors.approval-green}'
        textColor: '{colors.approval-foreground}'
        typography: '{typography.body}'
        rounded: '{rounded.pill}'
        padding: '8px 16px'
        height: '40px'
    button-quiet:
        backgroundColor: '{colors.cool-paper}'
        textColor: '{colors.ink}'
        typography: '{typography.body}'
        rounded: '{rounded.pill}'
        padding: '8px 14px'
        height: '40px'
    input-pill:
        backgroundColor: '{colors.porcelain}'
        textColor: '{colors.ink}'
        typography: '{typography.body}'
        rounded: '{rounded.pill}'
        padding: '6px'
        height: '52px'
    card-standard:
        backgroundColor: '{colors.porcelain}'
        textColor: '{colors.ink}'
        rounded: '{rounded.feature}'
        padding: '28px'
    preferences-window:
        backgroundColor: '{colors.porcelain}'
        textColor: '{colors.ink}'
        rounded: '{rounded.panel}'
        padding: '20px'
        width: '352px'
        height: '298px'
---

# Design System: Ordo

## Overview

**Creative North Star: "The Quiet Operations Room"**

Ordo feels like a calm, well-run space where consequential work becomes legible. The design is
precise, editorial, and operational without becoming cold: generous whitespace gives decisions
room, soft geometry lowers friction, and restrained green accents mark progress, approval, and
action. The visual system should communicate that the product has already organized the problem.

The interface is quiet by default and expressive only where meaning increases. Product previews
carry the operational detail; surrounding marketing surfaces remain spacious and direct. Ambient
layering provides depth without turning the page into glass, while motion explains continuity and
state rather than decorating static content.

**Key Characteristics:**

- Calm, precise, and editorial.
- Porcelain and ink neutrals with rare Approval Green emphasis.
- Soft edges, thin hairlines, and bounded ambient depth.
- Large decisive typography paired with compact operational labels.
- Motion that reveals workflow, selection, or shared-surface continuity.
- Responsive compositions that simplify structure without removing function.

## Colors

The palette pairs Porcelain & Ink neutrals with a controlled Approval Green signal; dark mode
reverses the tonal hierarchy without introducing new hues.

### Primary

- **Approval Green** (`oklch(0.508 0.118 165.612)`): Primary actions, active progress, success,
  selected workflow states, and the emphasized word in the hero.
- **Night Approval Green** (`oklch(0.432 0.095 166.913)`): Dark-mode primary that preserves
  contrast without appearing luminous.
- **Deep Operational Green** (`#16352c`): Large committed surfaces such as the final CTA and the
  featured outcome card.
- **Soft Success Green** (`#9fe7c6`): Supporting labels and icons placed on Deep Operational Green.

### Neutral

- **Porcelain** (`oklch(1 0 0)`): Light background and primary card surface.
- **Ink** (`oklch(0.148 0.004 228.8)`): Primary text and dark-mode page background.
- **Cool Paper** (`oklch(0.963 0.002 197.1)`): Recessed controls, muted bands, and quiet hover
  surfaces.
- **Graphite** (`oklch(0.47 0.021 213.5)`): Secondary light-mode text.
- **Hairline** (`oklch(0.925 0.005 214.3)`): Borders, separators, and structural rules.
- **Night Surface** (`oklch(0.218 0.008 223.9)`): Dark cards, previews, and raised surfaces.
- **Night Muted** (`oklch(0.275 0.011 216.9)`): Dark recessed controls and hover surfaces.
- **Night Secondary** (`oklch(0.723 0.014 214.4)`): Secondary dark-mode text.

**The Approval Rarity Rule.** Approval Green marks action, state, or verified progress. It is never
used as general decoration or spread evenly across a page.

**The Tonal Reversal Rule.** Dark mode changes surface hierarchy and shadow character, not brand
meaning. White inset highlights disappear; dark controls use black inset depth.

## Typography

**Display Font:** Inter (with `ui-sans-serif`, `system-ui`, and `sans-serif` fallback)

**Body Font:** Inter (with the same fallback stack)

**Character:** A single sans-serif family keeps the product direct and coherent. Personality comes
from scale, tight display tracking, decisive semibold weights, and generous body leading rather
than from decorative type pairing.

### Hierarchy

- **Display** (600, `clamp(2.75rem, 7vw, 5.75rem)`, 0.94): Hero statements only; balance lines and
  use the accent on one meaningful phrase.
- **Headline** (600, `2.25rem–3.75rem`, 1.03): Section propositions and major conversion moments.
- **Title** (600, `1.25rem`, 1.4): Cards, dialogs, and product-preview headings.
- **Body** (400, `1rem`, 1.75): Explanatory copy, usually constrained to approximately 65–70
  characters per line.
- **Label** (600, `0.6875rem`, `0.12em`, uppercase when categorical): Workflow stages, statuses,
  metadata, and compact operational context.

**The One Typeface Rule.** Do not add a display font for personality. Use scale, measure, weight,
and rhythm to create hierarchy while preserving operational clarity.

## Layout

The primary container is `80rem` (`max-w-7xl`) with `20px` mobile gutters and `32px` gutters from
the small breakpoint upward. Major sections use a generous vertical rhythm: `96px` on mobile,
`128px` on tablet, and up to `160px` on large desktop surfaces. Content groups stay tight inside
that larger cadence.

Desktop compositions use asymmetric grids—commonly `0.78fr / 1.22fr` or `0.9fr / 1.1fr`—to place
editorial explanation beside a denser operational preview. At `1024px`, the workflow becomes a
sticky two-column story; below that breakpoint, each step carries its own inline preview. At
`768px`, persistent desktop navigation gives way to a full-screen mobile menu. Forms stack below
`480px` and become horizontal pills above it.

The floating header sits `12px` from the viewport edge and never spans the full browser width. The
hero occupies at least one dynamic viewport height. Fixed preferences remain a desktop enhancement;
mobile preferences live inside the navigation flow.

## Elevation & Depth

Ordo uses ambient layering rather than decorative glass. Thin borders define most surfaces; soft
shadows are reserved for floating navigation, product previews, conversion forms, and the desktop
preferences surface. Tonal changes carry depth in dark mode, where broad light shadows are removed
or replaced by restrained black shadows. Backdrop blur is valid only when a fixed surface needs to
remain legible over moving page content.

### Shadow Vocabulary

- **Quiet Lift** (`0 1px 3px rgb(0 0 0 / 0.10)`): Selected tabs, flags, and compact state surfaces.
- **Ambient Float** (`0 10px 15px -3px rgb(0 0 0 / 0.10)`): Floating header and waitlist form.
- **Preview Depth** (`0 25px 50px -12px rgb(0 0 0 / 0.25)`): Hero preview and preferences window.
- **Carved Track** (`inset 0 1px 3px rgb(0 0 0 / 0.10), inset 0 -1px 0 rgb(255 255 255 / 0.55)`):
  Light segmented controls only; dark mode uses a black inset shadow without the white lower edge.

**The Bounded Depth Rule.** Blur and strong shadow belong to small fixed surfaces or one focal
preview. Never wash an entire section in glass or stack a border and large shadow on every card.

## Shapes

Soft geometry reduces friction without making the interface playful. Standard controls and content
surfaces use radii from `10px` to `18px`; major cards use `24px–28px`; the final CTA uses `32px`.
Pills are reserved for buttons, compact status chips, the floating header, and controls with one
short line of content. Borders are usually one pixel and use Hairline or a low-alpha semantic color.

Circular forms have specific jobs: icon buttons, avatars, status points, and the collapsed desktop
preferences trigger. The preferences surface deliberately morphs from a `48px` circle into a
`352×298px` window with a `24px` radius, making the relationship between trigger and panel explicit.

## Components

### Buttons

- **Shape:** Full pill for primary and compact actions; `32–40px` standard height and at least
  `40px` for prominent actions.
- **Primary:** Approval Green with Approval Foreground; semibold, compact, and direct.
- **Hover / Focus:** Slight tonal darkening on hover, a three-pixel low-alpha ring on keyboard
  focus, and a one-pixel active press. Disabled controls retain shape and drop to 50% opacity.
- **Quiet:** Cool Paper or transparent backgrounds with Ink text; use for settings, close, and back
  actions.

### Chips

- **Style:** Small pills with semantic text, a low-alpha background, and an optional hairline.
- **State:** Approval Green identifies active or complete work; neutral chips stay Cool Paper and
  Graphite.

### Cards / Containers

- **Corner Style:** `18px` for nested operational cards; `24–28px` for major previews and outcome
  cards.
- **Background:** Porcelain or Night Surface. One featured marketing card may use Deep Operational
  Green.
- **Shadow Strategy:** Flat by default; apply Preview Depth only to focal or floating surfaces.
- **Border:** One-pixel Hairline or a semantic low-alpha variant.
- **Internal Padding:** `16–20px` for operational UI and `28–32px` for marketing cards.

### Inputs / Fields

- **Style:** Transparent text field inside a bordered `52px` wrapper; stack on narrow screens and
  become a horizontal pill at `480px`.
- **Focus:** Keep the border stable and add a three-pixel Approval Green alpha ring around the
  complete field group.
- **Success:** Replace the form in place with a bordered confirmation row and a circular check.

### Navigation

The desktop header is a floating, rounded, blurred bar with branding left, centered links, and the
primary CTA right. Links are compact, Graphite by default, and gain a Cool Paper pill on hover. The
mobile menu becomes a full-screen surface with large divided links and bottom-anchored actions.

### Segmented Selectors

Theme and language preferences use carved two- or three-column tracks. A single elevated indicator
slides beneath the selected option over `300ms` with an exponential ease-out. Theme changes must
move the indicator even while global palette transitions are disabled. Flags are authored SVGs,
not emoji.

### Morphing Preferences

On desktop, a fixed bottom-right gear opens the preferences window. The complete transition remains
`380ms`: outgoing content clears in `50ms`, the surface transforms over the remaining `330ms`, and
incoming content or icon appears in the final phase. Escape and outside press close the window,
focus returns to the gear, and reduced-motion users receive the same state change without travel.

## Do's and Don'ts

### Do:

- **Do** use Approval Green for decisions, actions, progress, and completed states.
- **Do** pair large editorial statements with compact operational detail.
- **Do** keep surfaces mostly flat and let one preview or floating control carry the strongest depth.
- **Do** preserve visible content before hydration and respect reduced-motion preferences.
- **Do** use asymmetric desktop grids and simplify them into a direct vertical story on mobile.
- **Do** give keyboard focus a visible ring and keep mobile touch targets at least `40–44px`.

### Don't:

- **Don't** introduce generic SaaS gradients, gradient text, or multicolor decorative accents.
- **Don't** use excessive glass, full-page blur, or elevation on every card.
- **Don't** add decorative motion; animation must explain state, selection, workflow, or continuity.
- **Don't** use white inset highlights on dark segmented controls.
- **Don't** replace the authored logo and flags with text placeholders or emoji.
- **Don't** make the interface feel like a dense enterprise dashboard outside the product previews.
