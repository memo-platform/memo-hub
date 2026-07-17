# Governance Scoring Model

This scoring model provides objective evaluation criteria for repository health and governance maturity.

## Purpose
Define a consistent, measurable model for scoring governance across MEMO PLATFORM.

## Scoring Criteria
Each criterion includes weight, evaluation method, score calculation, and acceptance threshold.

### 1. Documentation Quality
- Weight: 15%
- Evaluation method: Review documentation completeness, structure, readability, and adherence to standards.
- Score calculation: `(Sections Compliant / Sections Reviewed) * 100`
- Acceptance threshold: 90%

### 2. Architecture Quality
- Weight: 15%
- Evaluation method: Assess architecture consistency, alignment with DDD, clean architecture, and modularity.
- Score calculation: `(Architecture Points Achieved / Architecture Points Total) * 100`
- Acceptance threshold: 92%

### 3. DDD Compliance
- Weight: 12%
- Evaluation method: Verify domain artifacts use aggregates, entities, value objects, events, and ubiquitous language.
- Score calculation: `(DDD Compliance Checks Passed / Total DDD Checks) * 100`
- Acceptance threshold: 95%

### 4. Clean Architecture Compliance
- Weight: 10%
- Evaluation method: Confirm separation of concerns, dependency direction, and infrastructure isolation.
- Score calculation: `(Compliance Checks Passed / Total Checks) * 100`
- Acceptance threshold: 95%

### 5. Repository Organization
- Weight: 12%
- Evaluation method: Review folder structure, naming conventions, and scalability for future domains.
- Score calculation: `(Organizational Criteria Met / Total Criteria) * 100`
- Acceptance threshold: 90%

### 6. Governance
- Weight: 12%
- Evaluation method: Evaluate governance documents, cross references, versioning, and approval workflows.
- Score calculation: `(Governance Criteria Met / Total Criteria) * 100`
- Acceptance threshold: 92%

### 7. Traceability
- Weight: 10%
- Evaluation method: Assess traceability from vision through model, events, and future artifacts.
- Score calculation: `(Traceability Links Verified / Total Traceability Links) * 100`
- Acceptance threshold: 95%

### 8. Templates
- Weight: 6%
- Evaluation method: Verify presence, quality, and usage of governance and domain templates.
- Score calculation: `(Templates Available and Compliant / Total Expected Templates) * 100`
- Acceptance threshold: 90%

### 9. ADR Coverage
- Weight: 5%
- Evaluation method: Confirm ADR index exists and major decisions are captured.
- Score calculation: `(ADRs Documented / Expected ADRs) * 100`
- Acceptance threshold: 80%

### 10. Cross References
- Weight: 3%
- Evaluation method: Validate bidirectional references among governance docs.
- Score calculation: `(Cross Reference Links Verified / Expected Links) * 100`
- Acceptance threshold: 95%

## Overall Score Calculation
- Calculate each criterion score as a percentage.
- Multiply each score by its weight.
- Sum weighted scores to obtain the repository governance score.

### Example
- Documentation Quality: 92% * 0.15 = 13.8
- Architecture Quality: 95% * 0.15 = 14.25
- DDD Compliance: 96% * 0.12 = 11.52
- Clean Architecture Compliance: 94% * 0.10 = 9.4
- Repository Organization: 91% * 0.12 = 10.92
- Governance: 93% * 0.12 = 11.16
- Traceability: 96% * 0.10 = 9.6
- Templates: 92% * 0.06 = 5.52
- ADR Coverage: 85% * 0.05 = 4.25
- Cross References: 97% * 0.03 = 2.91
- Total Score: 93.7

## Reporting
- Store governance scores in `docs/governance/architecture-baseline.md`.
- Update the scoring model when new governance criteria are approved.

## Related Documents
- `docs/governance/architecture-baseline.md`
- `docs/governance/README.md`
- `docs/governance/quality-gates.md`
- `docs/governance/decision-matrix.md`
