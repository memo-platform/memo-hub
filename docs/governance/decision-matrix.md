# Decision Matrix

This decision matrix clarifies when to use each governance mechanism.

## Governance Mechanisms
### ADR
- Use for architectural decisions affecting long-term design.
- Example: Choosing the multi-tenant strategy for a new domain.

### ACR
- Use for requested changes to approved architecture or governance.
- Example: Updating a locked domain workflow after approval.

### Decision Log
- Use to index and summarize ADRs and governance decisions.
- Example: Maintaining the central ADR index in `docs/governance/architecture-decision-log.md`.

### RFC
- Use for broad discussion of proposed architecture changes before formal decision.
- Example: Soliciting feedback on a new repository organization approach.

### Governance Update
- Use for changes to governance documents, templates, or policies.
- Example: Adding a new scoring criterion to `docs/governance/scoring-model.md`.

### Domain Update
- Use for changes to domain-specific artifacts such as vision, specification, or model.
- Example: Creating a new domain vision document using templates.

## Practical Examples
- A new governance template is needed: create an ACR to approve the template, document it as a governance update, and add the template once approved.
- A domain lifecycle state needs refinement: submit an ACR, then capture the approved change in an ADR if it impacts architecture.
- A new platform-wide policy is required: use an RFC for review, then record the decision in the ADR index.

## Usage Guidance
- ADRs capture final decisions.
- ACRs capture requests for change.
- RFCs gather feedback before decisions.
- Governance updates preserve the repository control plane.
- Domain updates remain separate unless they require architecture governance.
