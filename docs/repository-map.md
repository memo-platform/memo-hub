# Repository Map

This document describes the top-level repository structure and ownership.

## Repository Structure
```
/ (repo root)
  .husky/
  .gitignore
  .eslintrc.js
  .prettierrc
  Dockerfile
  docker-compose.yml
  package.json
  tsconfig.json
  apps/
    api/
    web/
  packages/
    config/
    ui/
  docs/
    architecture/
    domain/
    governance/
    templates/
    traceability/
  README.md
```

## Folder Responsibilities
- `.husky/` — Git hooks and repository automation.
- `apps/` — application codebases for `api` and `web`.
- `packages/` — shared packages and UI components.
- `docs/` — documentation and governance artifacts.
- `docs/architecture/` — architecture-specific reference documents.
- `docs/domain/` — domain artifacts and specifications; includes the domain registry.
- `docs/governance/` — governance policies, templates, ADRs, RFCs, ACRs, and risk management.
- `docs/templates/` — reusable document templates.
- `docs/traceability/` — traceability framework and domain traceability maps.

## Ownership
- Chief Architect — overall architecture and governance design.
- Governance Lead — governance documents, ADRs, ACRs, and risk register.
- Domain Owners — domain-specific vision, specification, and model artifacts.
- Documentation Lead — templates and documentation standards.
- Repository Architect — repository structure, map, and scalability.

## Notes
- Add future domain folders under `docs/domain/`.
- Keep governance references centralized under `docs/governance/`.
- Use `docs/traceability/` for mapping and audit readiness.
