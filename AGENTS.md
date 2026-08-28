# AGENTS.md

This file is the repository-level operating guide for coding agents. It describes the code that
exists now; product and architecture documents also describe a larger target system that is not yet
implemented.

## Project at a glance

Ordo is intended to centralize service-business work from intake and assignment through approval,
billing, and reporting. The repository is currently an early frontend foundation: it contains a
small Next.js application, a shared component package, and shared development configuration. There
is no backend, database, authentication, workflow engine, billing implementation, or persisted
domain model yet.

Before implementing product behavior, read the relevant material in `docs/product/`. Before making
an architectural choice, read `docs/architecture/`, especially the approved ADRs in
`docs/architecture/decision/`.

## Repository map

```text
.
|-- apps/
|   `-- web/                    # The only runtime application currently present
|       |-- src/app/            # Next.js App Router layout, page, and route assets
|       |-- src/components/     # Web-only components
|       |-- test/               # Vitest browser tests and test helpers
|       |-- public/             # Static assets
|       |-- Dockerfile          # Pruned, standalone production image
|       `-- {next,postcss,vitest,tsconfig,ox*}.config.*
|-- packages/
|   |-- ui/                     # Shared React components, theme support, and global CSS
|   |-- typescript/             # Shared base, Next.js, and future NestJS tsconfigs
|   |-- oxfmt/                  # Shared formatter configuration
|   `-- oxlint/                 # Shared linter configuration
|-- docs/
|   |-- product/                # Product vision, rules, roles, scope, and workflows
|   `-- architecture/           # Current state, target state, and ADRs
|-- .github/                    # CI/CD, reusable actions, and contribution templates
|-- compose.yml                 # Production deployment of the published web image
|-- turbo.json                  # Workspace task graph
|-- pnpm-workspace.yaml         # Workspace package discovery
`-- package.json                # Root tooling and package-manager pin
```

Generated or installed directories such as `node_modules/`, `.next/`, and `.turbo/` are not source
and should not be edited.

## Workspace packages and ownership

| Package            | Purpose                                                        | Important entry points                                            |
| ------------------ | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| `web`              | Next.js browser application                                    | `apps/web/src/app/layout.tsx`, `apps/web/src/app/page.tsx`        |
| `@ordo/ui`         | Shared UI, design tokens, Tailwind sources, and theme behavior | `packages/ui/src/components/`, `packages/ui/src/style/global.css` |
| `@ordo/typescript` | Strict TypeScript presets                                      | `packages/typescript/tsconfig.*.json`                             |
| `@ordo/oxfmt`      | Base and Next.js formatting presets                            | `packages/oxfmt/{base,next}.ts`                                   |
| `@ordo/oxlint`     | Base and Next.js lint presets                                  | `packages/oxlint/{base,next}.ts`                                  |

Put application-specific composition in `apps/web`. Put reusable UI primitives and cross-app
styles in `packages/ui`. Put reusable tool configuration in its corresponding config package. Do
not add planned backend/domain code to the web or UI packages merely because `apps/api` does not yet
exist.

## Technology inventory

- Workspace: pnpm 11 workspaces and Turborepo 2.
- Language/module system: strict TypeScript, ECMAScript modules, ESNext target.
- Frontend: Next.js 16 App Router, React 19, React Compiler, typed routes, standalone output.
- Styling: Tailwind CSS 4 through PostCSS, CSS variables using OKLCH colors, `tw-animate-css`.
- Components: shadcn configuration backed by Base UI; variants use
  `class-variance-authority`; class composition uses `clsx` plus `tailwind-merge`; icons use Lucide.
- Themes: `next-themes`, with light, dark, and system modes.
- Tests: Vitest 4 browser mode, `vitest-browser-react`, and Playwright Chromium.
- Quality: Oxfmt, type-aware Oxlint, lint-staged, Husky, and Commitlint.
- Delivery: GitHub Actions, Docker Buildx, GHCR, Docker Compose, and VPS deployment over SSH.
- Planned only: NestJS with Fastify and PostgreSQL. The shared NestJS tsconfig and architecture ADR
  express intent; they do not indicate an existing API or database.

Use the versions in package manifests and `pnpm-lock.yaml` as the source of truth rather than this
summary when exact compatibility matters.

## Common commands

Run commands from the repository root unless noted otherwise.

```bash
pnpm install --frozen-lockfile

# Run the current web app only
pnpm --filter web dev

# Focused verification
pnpm --filter web test
pnpm --filter web build

# Workspace-wide checks
pnpm turbo fmt:check
pnpm turbo lint:check
pnpm turbo test
pnpm turbo build

# Apply automated cleanup
pnpm run fmt:fix
pnpm run lint:fix
```

The root `package.json` exposes formatting and linting scripts, but not `dev`, `test`, or `build`.
Use filtered package scripts or `pnpm turbo ...` for those tasks. The Turbo `dev` task currently
declares `api#dev` as a companion even though `apps/api` does not exist, so use
`pnpm --filter web dev` for the implemented application.

Browser tests require a Chromium installation:

```bash
pnpm --filter web exec playwright install chromium
```

CI installs Chromium with system dependencies, then runs affected format, lint, test, and build
tasks. For a change, run the narrowest relevant check first and the workspace checks affected by
the change before handing it off. UI behavior changes should include or update a browser test.

## Code and import conventions

- Follow Oxfmt: four-space indentation, 100-column print width, and single quotes in TypeScript and
  JSX. Let the formatter order Tailwind classes.
- Oxlint performs type-aware and type-checked linting. Do not bypass it with broad disables or
  unsafe casts without a documented reason.
- In `apps/web`, use `@/*` for code under `src/` and `@test/*` for test helpers.
- Consume shared UI via published subpaths such as `@ordo/ui/primitive/button`,
  `@ordo/ui/composed/theme`, and `@ordo/ui/global.css`; avoid reaching into another package with
  relative filesystem imports.
- In `packages/ui`, use `@ordo/ui/*` self-references. Add new public modules to the package's
  `exports` map when the existing wildcard entries do not cover them.
- Keep React Server Components as the default. Add `'use client'` only where browser APIs, state,
  effects, or client-only libraries require it.
- Use the shared `cn()` helper when combining conditional Tailwind classes.
- Preserve accessibility semantics in shared primitives. Prefer role/name-based browser-test
  queries over implementation-specific selectors.
- Global design tokens and Tailwind source discovery live in
  `packages/ui/src/style/global.css`. The web root layout imports that stylesheet once.

## Testing notes

- Tests live in `apps/web/test/` and use a real headless Chromium browser, not jsdom.
- Import `test`, `expect`, lifecycle functions, and mocking helpers from `vitest`; render React with
  `vitest-browser-react`.
- Browser globals are available. Reset persistent state such as `localStorage` between tests.
- Shared browser mocks belong under `apps/web/test/mock/`.
- There is currently no separate unit, integration, or end-to-end test suite for an API.

## Product and architecture guardrails

- Treat `docs/architecture/current-state.md` as the statement of what is implemented.
- Treat `docs/architecture/target-state.md` and ADR 003 as direction for future work, not current
  runtime facts.
- The approved target boundary is a presentation-focused `apps/web`, a future NestJS/Fastify
  `apps/api` that owns business rules, and PostgreSQL as the system of record.
- The central product lifecycle is work intake/planning, assignment/execution, review/approval, and
  completion/billing. Roles are Admin, Manager, and Employee; key actions must ultimately be
  auditable.
- Some product scope checkboxes describe intended MVP scope even though the implementation does not
  exist. Verify behavior in code before claiming a feature is complete.
- Update documentation when a change alters repository structure, technology choices, commands,
  architecture boundaries, product rules, or implementation status.

## Git, CI, and deployment

- Commits follow Conventional Commits and require a scope. Allowed scopes are defined in
  `commitlint.config.ts`: `web`, `api`, `deps`, `repo`, `arch`, `infra`, `tools`, `actions`,
  `product`, `deps-dev`, and `templates`.
- The pre-commit hook runs lint-staged; staged Markdown/YAML/JSON is formatted, and staged
  TypeScript/TSX is linted and formatted.
- Pull-request CI targets `master` and runs commit linting, affected formatting/linting/tests, then
  affected builds.
- A push to `master` builds `apps/web/Dockerfile`, publishes `web` images to GHCR, copies
  `compose.yml` to the VPS, and redeploys with Docker Compose.
- Next.js is built with `output: 'standalone'`; preserve that assumption when changing build or
  runtime paths.
- `.env` is consumed by Compose and Turbo treats `.env.*` files as global task inputs. Never commit,
  print, or document secret values. Describe required variables by name in safe documentation when
  introducing them.

## Agent workflow

1. Inspect the closest package manifest, configs, tests, and relevant documentation before editing.
2. Confirm whether the request concerns implemented behavior or the planned product architecture.
3. Keep changes within the package boundary that owns the behavior; avoid unrelated cleanup.
4. Add or update tests and documentation when behavior or project conventions change.
5. Run focused checks, then the relevant workspace-level checks.
6. Report what changed, which checks ran, and any known gaps or assumptions.
