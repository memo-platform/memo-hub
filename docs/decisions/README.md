# Architecture Decisions Repository

This repository stores the lifecycle of architecture decisions for MEMO PLATFORM.

## Decision Lifecycle
- `proposed/` — candidate decisions under review.
- `accepted/` — approved decisions ready for implementation.
- `deprecated/` — previously accepted decisions no longer recommended.
- `superseded/` — decisions replaced by newer decisions.

## Decision Promotion
1. Create a proposal in `docs/decisions/proposed/`.
2. Review against the Architecture Constitution and governance templates.
3. Promote to `docs/decisions/accepted/` when approved.
4. If a decision is retired, move it to `deprecated/`.
5. If replaced, move the original to `superseded/` and reference the new decision.

## Deprecation Policy
- Deprecation is used when a decision remains valid but is no longer the preferred approach.
- Deprecated decisions must keep their original context and status.
- Maintain a clear rationale for why the decision is deprecated.

## Superseding Policy
- Superseding occurs when a newer decision replaces an existing one.
- The original decision must be moved to `superseded/`.
- The new decision must reference the superseded decision.
- Superseded decisions must preserve the prior decision history.
