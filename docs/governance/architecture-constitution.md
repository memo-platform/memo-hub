# MEMO PLATFORM — Architecture Constitution v1.0

هذه الوثيقة هي الدستور الرسمي لحوكمة العمارة المعمارية في مشروع MEMO PLATFORM.
تُعتبر مرجعًا أعلى من أي Prompt لاحق، ولا يجوز مخالفتها إلا بموافقتك الصريحة.

## Document Metadata
- Document Version: v1.0
- Status: Approved
- Approval Date: 2026-07-17
- Approved By: MEMO PLATFORM Governance

## Version History
- v1.0 — Initial architecture constitution published.

## Change Log
- 2026-07-17 — Added governance folder requirement and architecture review workflow.

## 1. Architecture Constitution Priority
أي قرار معماري أو طلب مستقبلي يتعارض مع هذا الدستور يجب إيقاف تنفيذه وإصدار Architecture Conflict Report بدلاً من تنفيذه.

## 2. Locked Documents
بعد اعتماد أي وثيقة تخص الدومين تصبح حالتها:

- APPROVED
- LOCKED

ويمنع تمامًا:

- تعديل المحتوى
- إعادة ترتيب الأقسام
- إعادة تسمية الملفات أو الأقسام
- حذف أي جزء
- دمج أي قسم

ما لم يتم الحصول على موافقة صريحة.

## 3. Read Only Consistency
يُعتبر Architecture Consistency Check عملية قراءة وتحليل فقط.
يسمح فقط بـ:

- الفحص
- التحليل
- إصدار التقارير
- تقديم التوصيات

ولا يسمح بأي تعديل تلقائي على الملفات المعتمدة.

## 4. Architecture Review Workflow
لكل دومين يجب أن يمر بالتسلسل التالي:

1. Domain Vision
2. Domain Specification
3. Domain Model
4. Architecture Consistency Check
5. Traceability Matrix
6. ADR Generation
7. Architecture Score
8. Domain Lock
9. Git Commit
10. الانتقال للدومين التالي

لا يجوز تخطي أي مرحلة.

## 5. Git Commit Policy
بعد اعتماد أي دومين يجب إصدار:

- Commit Title
- Commit Description
- Architecture Summary
- ADR References

لا تعتبر الوثيقة منتهية قبل إنشاء رسالة Commit واضحة.

## 6. Zero Silent Changes
إذا احتاج المشروع لأي تعديل في وثيقة معتمدة:

- لا يتم تنفيذ التعديل.
- يتم إنشاء Architecture Change Request (ACR).

يجب أن يتضمن ACR:

- سبب التعديل
- Impact Analysis
- الملفات المتأثرة
- درجة الخطورة
- البدائل
- التوصية

ثم انتظار الموافقة.

## 7. Backward Compatibility
أي دومين جديد يجب ألا يكسر أي دومين معتمد سابقًا.
إذا حدث تعارض:

- يتم إيقاف العمل.
- يتم إنشاء Architecture Conflict Report.

## 8. ERP Global Standards
أي قرار معماري يجب أن يكون متوافقًا مع:

- Domain Driven Design (DDD)
- Clean Architecture
- SOLID
- CQRS Ready
- Event Driven
- Modular Monolith
- Microservices Ready
- Multi-Tenant
- Multi-Company
- Localization Ready
- Audit Ready
- Security by Design

## 9. Quality Gate
لا يعتبر أي دومين مكتملًا إلا إذا حصل على:

- DDD ≥ 95%
- Consistency ≥ 95%
- Enterprise Readiness ≥ 95%
- Overall ≥ 95%

إذا انخفضت أي درجة:

- يتم إنشاء تقرير تحسين.
- لا يتم الانتقال للدومين التالي.

## 10. Architecture Memory
يتم اعتبار جميع الدومينات السابقة جزءًا من ذاكرة المشروع.
قبل إنشاء أي دومين جديد يجب:

- مراجعة جميع الوثائق المعتمدة.
- فحص التوافق.
- فحص المصطلحات.
- فحص الأحداث.
- فحص الـ Aggregates.
- فحص العلاقات.
- فحص الـ Invariants.

لا يُعتمد على ملخصات أو افتراضات.

## 11. No Assumptions
إذا لم تكن المعلومة موجودة في الوثائق:

- لا تُفترض.
- اسأل أولًا أو أنشئ Design Decision مقترحًا.

## 12. Final Gate
قبل الانتقال لأي دومين جديد يجب إصدار التقرير التالي:

```text
Architecture Constitution Check

✔ Domain Complete

✔ Architecture Consistency Passed

✔ Traceability Complete

✔ ADR Complete

✔ Mermaid Validated

✔ Score Issued

✔ Git Commit Generated

✔ Domain Locked

STATUS:
READY FOR NEXT DOMAIN
```

## 13. Governance Folder
يجب إنشاء مجلد `docs/governance/` لاحتواء الوثائق الحاكمة للمشروع، مثل:

- `architecture-constitution.md`
- `architecture-decision-log.md`
- `glossary.md`
- `quality-gates.md`
- `documentation-standards.md`

الهدف هو جعل الحوكمة جزءًا من المشروع نفسه وليس ذاكرة محادثة فقط.

## Related Governance Documents
- `docs/governance/README.md`
- `docs/project-manifest.md`
- `docs/governance/architecture-decision-log.md`
- `docs/governance/glossary.md`
- `docs/governance/quality-gates.md`
- `docs/governance/documentation-standards.md`
- `docs/governance/scoring-model.md`
- `docs/governance/risk-register.md`
- `docs/governance/decision-matrix.md`
- `docs/governance/architecture-baseline.md`
- `docs/governance/rfc/RFC-0001-template.md`
- `docs/governance/governance-review-checklist.md`
- `docs/governance/acr/ACR-0001-template.md`
- `docs/governance/adr/ADR-0001-template.md`
- `docs/templates/`
- `docs/decisions/README.md`
