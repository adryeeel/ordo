# Ordo — Management & Automation

Ordo is a web-based platform for centralized business management and automation, connecting request intake, approval, billing, and reporting in a single system.

## Repository overview

- Monorepo managed with `pnpm` and `turbo`
- Root tooling includes formatting and linting for the workspace
- Application code lives under `apps/web`
- Shared utilities, config, and tooling live under `packages`
- Product and architecture docs live under `docs`

## Getting started

1. Install dependencies:

    ```bash
    pnpm install
    ```

2. Run formatting checks:

    ```bash
    pnpm run fmt:check
    ```

3. Run lint checks:

    ```bash
    pnpm run lint:check
    ```

## Documentation

- [Product documentation](docs/product/README.md) &mdash; understand the philosophy, features and workflows.
- [Architecture documentation](docs/architecture/README.md) &mdash; understand the repository structure and implementation direction.
