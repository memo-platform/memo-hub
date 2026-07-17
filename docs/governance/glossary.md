# MEMO PLATFORM Glossary

هذا القاموس يوحد المصطلحات المعمارية عبر مستندات المشروع.

## Domain
مجال عمل وظيفي أو سياق تجاري يمثل جزءًا مستقلاً من النظام.

## Aggregate
وحدة اتساق في DDD تحتوي على جذر Aggregate Root وتفرض قواعد داخلية.

## Aggregate Root
الكيان الرئيسي داخل Aggregate الذي يتحكم في تغييرات الحالة ويضمن الالتزامات.

## Entity
كائن يجسد هوية مستقرة على مدى الزمن.

## Value Object
كائن يُعرف بقيمته فقط، ويكون غير قابل للتغيير.

## Domain Event
حدث يمثل حدثًا مهمًا في المجال ويُستخدم لتنسيق الاتساق عبر الدومينات.

## Invariant
قيد يجب أن يكون صحيحًا دائمًا داخل Aggregate للحفاظ على الاتساق.

## Policy
قاعدة تجارية أو حوكمة تحدد ما هو مسموح به أو مطلوبًا في سياق الأعمال.

## Repository
واجهة للوصول إلى Aggregate أو إلى تجميعات المجال دون تعريض التفاصيل التقنية.

## Domain Service
خدمة تحتوي على منطق مجال لا ينتمي إلى كيان أو قيمة معينة.

## Ubiquitous Language
لغة مشتركة يستخدمها الفريق بأكمله لوصف المفاهيم والمصطلحات بدقة.

## Clean Architecture
مبدأ هندسي يفصل الاعتمادات بحيث يتجه الاتجاه نحو الداخل من الطبقات الأعلى.

## CQRS
نمذجة Command Query Responsibility Segregation حيث تُفصل أوامر التغيير عن استعلامات القراءة.

## Event Driven
تصميم يعتمد على نشر الأحداث لتنسيق التغيرات بين الدومينات والخدمات.

## Modular Monolith
هيكلية تسمح بتنظيم الكود في وحدات مميزة داخل تطبيق واحد.

## Multi-Tenant
دعم تشغيل عدة عملاء مستقلين ضمن نفس المنصة مع عزل بيانات.

## Multi-Company
دعم تشغيل عدة شركات أو كيانات قانونية منفصلة في نفس النظام.

## Architecture Consistency Check
عملية مراجعة للوثائق والمعمارية بدون تعديل، تهدف إلى كشف التعارضات.

## Related Governance Documents
- `docs/governance/architecture-constitution.md`
- `docs/governance/README.md`
- `docs/governance/quality-gates.md`
- `docs/governance/documentation-standards.md`
- `docs/governance/architecture-decision-log.md`
- `docs/templates/`
