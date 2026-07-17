# Documentation Standards

هذه الوثيقة تحدد قواعد كتابة الوثائق المعمارية في MEMO PLATFORM.

## تنسيق Markdown
- استخدم عناوين واضحة ومرتبة (`#`, `##`, `###`).
- احتفظ بالأسطر الفارغة بين الأقسام لتسهيل القراءة.
- استخدم القوائم المرقمة للقوائم التسلسلية والقوائم النقطية للعناصر المرتبطة.
- استخدم `code fences` للأكواد والمخططات.

## المصطلحات الموحدة
- استخدم المصطلحات الموجودة في `docs/governance/glossary.md`.
- لا تستحدث مصطلحات جديدة بدون تعريفها في القاموس.

## Mermaid Diagrams
- يجب التحقق من صحة كل مخطط Mermaid قبل الاعتماد.
- لا تستخدم مخططات مكررة في نفس الوثيقة.
- تأكد أن المخطط يطابق النص المرافق له.

## الأخطاء الصامتة
- لا تقم بأي تعديل على الوثائق المعتمدة دون موافقة صريحة.
- أي حاجة لتعديل يجب أن تترجم إلى Architecture Change Request.

## التوثيق لكل Domain
لكل دومين يجب أن يحتوي على:

- Vision
- Specification
- Model
- Traceability Matrix
- ADRs
- Architecture Score
- Consistency Check Report

## التقارير
يجب كتابة أي تقرير معماري بصيغة واضحة تشمل:

- المشكلة
- السبب
- مستوى الخطورة
- الملفات المتأثرة
- الحل المقترح
- سبب اقتراح الحل

## دقة المحتوى
- لا تفترض معلومات غير موجودة في الوثائق.
- إذا كانت البيانات غير كافية، اسأل أو أنشئ مقترح قرار معماري.
- لا تستخدم عبارات غامضة مثل "قد يكون" أو "ربما" في القرارات المعمارية.

## Governance References
- `docs/governance/architecture-constitution.md`
- `docs/governance/README.md`
- `docs/governance/quality-gates.md`
- `docs/governance/glossary.md`
- `docs/governance/architecture-decision-log.md`
- `docs/governance/scoring-model.md`
- `docs/governance/risk-register.md`
- `docs/governance/decision-matrix.md`
- `docs/governance/architecture-baseline.md`
- `docs/governance/rfc/RFC-0001-template.md`
- `docs/governance/rfc/README.md`
- `docs/governance/acr/ACR-0001-template.md`
- `docs/governance/governance-review-checklist.md`
- `docs/governance/governance-signoff-template.md`
- `docs/repository-map.md`
- `docs/traceability/traceability-framework.md`
- `docs/templates/`
