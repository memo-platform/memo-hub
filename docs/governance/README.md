# Governance Overview

This folder is the single entry point for MEMO PLATFORM governance. It contains the project rules, architecture policies, approval workflows, documentation standards, ADR registry, and governance responsibilities.

## Purpose of Governance
- Ensure architectural decisions are explicit, traceable, and enterprise-grade.
- Preserve approved domain documents as read-only assets.
- Maintain repository-level clarity across architecture, documentation, and delivery.
- Support governance for a modular, multi-tenant ERP platform.

## Architecture Constitution Overview
The `architecture-constitution.md` document is the highest-level governance artifact. It defines:
- Architecture priority rules
- Locked document policy
- Review workflow
- Commit policy
- Change control and conflict handling
- Quality gate expectations

## Repository Governance
Repository governance makes the project's rules part of the source tree, not just conversations. Key governance assets live under:
- `docs/governance/`
- `docs/templates/`
- `docs/governance/adr/`
- `docs/decisions/`

## Documentation Workflow
All documentation must follow the standards in `docs/governance/documentation-standards.md`.
The documentation workflow includes:
1. Create or update the draft.
2. Validate content against the glossary and standards.
3. Link to related governance assets.
4. Keep approved domain documents locked.

## Domain Approval Workflow
Each domain must follow the Architecture Review Workflow:
1. Domain Vision
2. Domain Specification
3. Domain Model
4. Architecture Consistency Check
5. Traceability Matrix
6. ADR Generation
7. Architecture Score
8. Domain Lock
9. Git Commit
10. Next domain

## Architecture Review Workflow
Architecture reviews must be documented and traceable.
- Use `docs/templates/architecture-consistency-report-template.md` for consistency reports.
- Use `docs/templates/architecture-score-template.md` for scoring.
- Use ADR templates and the ADR index for decisions.

## Quality Gates
Quality gates are defined in `docs/governance/quality-gates.md`.
The platform requires:
- DDD ≥ 95%
- Consistency ≥ 95%
- Enterprise Readiness ≥ 95%
- Overall ≥ 95%

## ADR Process
The decision registry is located at `docs/governance/architecture-decision-log.md` and `docs/governance/adr/`.
Each ADR must have:
- Unique ADR Number
- Title
- Status
- Date
- Owner
- Related Domains
- Supersession history

## Versioning Policy
Architecture and governance documents follow semantic versioning.
- Current constitution version: `v1.0`
- Future updates: `v1.1`, `v1.2`, `v2.0`, ...
- Document changes must be recorded in change logs.

## Naming Conventions
Use consistent naming for repository artifacts:
- Governance files: `docs/governance/*.md`
- Templates: `docs/templates/*.md`
- Decisions: `docs/decisions/`
- ADRs: `docs/governance/adr/ADR-xxxx-*.md`

## Folder Structure
- `docs/governance/` — governance policies and operational rules
- `docs/governance/adr/` — ADR templates and decision artifacts
- `docs/decisions/` — decision lifecycle workspace
- `docs/templates/` — architecture and domain templates
- `docs/project-manifest.md` — project-level definition

## Governance Responsibilities
Governance responsibilities include:
- Maintaining approved documents as read-only
- Validating architecture decisions and ADRs
- Updating governance metadata and changelogs
- Ensuring cross-document consistency
- Managing decision lifecycles in `docs/decisions/`

## Governance Documents
- `docs/governance/architecture-constitution.md`
- `docs/governance/architecture-decision-log.md`
- `docs/governance/scoring-model.md`
- `docs/governance/risk-register.md`
- `docs/governance/decision-matrix.md`
- `docs/governance/architecture-baseline.md`
- `docs/governance/acr/ACR-0001-template.md`
- `docs/governance/rfc/README.md`
- `docs/governance/rfc/RFC-0001-template.md`
- `docs/governance/governance-review-checklist.md`
- `docs/governance/governance-signoff-template.md`
- `docs/governance/glossary.md`
- `docs/governance/quality-gates.md`
- `docs/governance/documentation-standards.md`
- `docs/governance/governance-review-checklist.md`
- `docs/governance/adr/ADR-0001-template.md`
- `docs/templates/domain-vision-template.md`
- `docs/templates/domain-specification-template.md`
- `docs/templates/domain-model-template.md`
- `docs/templates/adr-template.md`
- `docs/templates/architecture-consistency-report-template.md`
- `docs/templates/architecture-score-template.md`
- `docs/templates/traceability-matrix-template.md`
- `docs/templates/rfc-template.md`
- `docs/templates/domain-traceability-matrix-template.md`
- `docs/repository-map.md`
- `docs/traceability/traceability-framework.md`
- `docs/traceability/organization-traceability.md`
- `docs/domain/domain-registry.md`
- `docs/decisions/README.md`
