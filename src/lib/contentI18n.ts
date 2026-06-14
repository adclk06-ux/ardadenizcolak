/**
 * Localized overrides for content-collection entries (work, systems, notes).
 *
 * Content markdown frontmatter is authored in English (source). These maps
 * provide localized titles / summaries / excerpts per language, keyed by slug.
 * English (en) intentionally has no overrides — it falls back to the original
 * English frontmatter. Turkish notes that are already authored in Turkish are
 * not overridden.
 */

import type { Lang } from "./i18n.js";

type Localized = { title?: string; summary?: string; excerpt?: string };
type ContentMap = Record<string, Localized>;

interface LangContent {
  work: ContentMap;
  systems: ContentMap;
  notes: ContentMap;
}

const tr: LangContent = {
  work: {
    "ai-coding-assistant": {
      title: "Yapay Zekâ Kodlama Asistanı",
      summary:
        "Mevcut kod tabanlarında kodu açıklamak, yeniden düzenlemek ve üretmek için dil modellerini kullanan dahili bir geliştirici aracı.",
    },
    "ai-resume-analyzer": {
      title: "Yapay Zekâ Özgeçmiş Analiz Aracı",
      summary: "Yapay zekâ destekli işe alım asistanı.",
    },
    "automated-deployment-pipeline": {
      title: "Otomatik Dağıtım Süreci",
      summary:
        "Otomatik geri alma yetenekleriyle, mikroservis mimarisi için kesintisiz dağıtım sistemi.",
    },
  },
  systems: {
    authentication: { title: "Kimlik Doğrulama Mimarisi" },
    "caching-strategy": { title: "Önbellekleme Stratejisi" },
    deployment: { title: "Dağıtım" },
    "folder-structures": { title: "Klasör Yapıları" },
    "naming-conventions": { title: "İsimlendirme Standartları" },
  },
  notes: {
    "api-design-consistency": {
      title: "Açık Sözleşmelerle API Tasarım Tutarlılığı",
      excerpt:
        "API sözleşmelerini tip seviyesinde zorunlu kılmanın entegrasyon hatalarını nasıl azalttığı ve ön uç-arka uç iş birliğini nasıl iyileştirdiği.",
    },
    "choosing-postgres-over-mongodb": {
      title: "Belge Yoğun Bir Uygulama İçin MongoDB Yerine PostgreSQL Seçmek",
      excerpt:
        "Belge odaklı bir uygulamanın MongoDB'den PostgreSQL'e neden geçtiğine dair, performans ölçümleri ve bakım gözlemleri içeren bir karar kaydı.",
    },
    "folder-structure-as-documentation": {
      title: "Dokümantasyon Olarak Klasör Yapısı",
      excerpt:
        "Dosyaları türe göre değil alana göre düzenlemenin kod tabanının keşfedilebilirliğini nasıl artırdığı ve işe alışma sürecini nasıl kolaylaştırdığı.",
    },
    "structured-output-llm-reliability": {
      title: "LLM Güvenilirliği İçin Yapılandırılmış Çıktı Şemaları",
      excerpt:
        "Yapılandırılmış çıktı şemalarının LLM tabanlı süreçlerde ayrıştırma kırılganlığını nasıl ortadan kaldırdığı ve gecikmeyi nasıl azalttığı.",
    },
    "why-gradients-were-removed": {
      title: "Gradyanlar Neden Kaldırıldı",
      excerpt:
        "Tasarım sisteminden tüm gradyanları kaldırmaya ve bu seçimin görsel sonuçlarını kabul etmeye dair bir karar günlüğü.",
    },
    "why-i-chose-astro-over-nextjs": {
      title: "İçerik Siteleri İçin Next.js Yerine Neden Astro'yu Seçtim",
      excerpt:
        "İçerik yoğun siteler için Astro ile Next.js'i karşılaştıran, performans ölçümleri ve mimari ödünleşimler içeren bir çerçeve karar kaydı.",
    },
    "why-motion-only-communicates-state": {
      title: "Hareket Neden Yalnızca Durumu İletir",
      excerpt:
        "Animasyon politikasını belirleyen bir karar günlüğü: hareket yalnızca durum değişikliklerini iletmek için vardır, asla eğlence veya süsleme için değil.",
    },
  },
};

const de: LangContent = {
  work: {
    "ai-coding-assistant": {
      title: "KI-Programmierassistent",
      summary:
        "Ein internes Entwicklerwerkzeug, das Sprachmodelle nutzt, um Code in bestehenden Codebasen zu erklären, umzustrukturieren und zu generieren.",
    },
    "ai-resume-analyzer": {
      title: "KI-Lebenslauf-Analysetool",
      summary: "KI-gestützter Rekrutierungsassistent.",
    },
    "automated-deployment-pipeline": {
      title: "Automatisierte Deployment-Pipeline",
      summary:
        "Ausfallfreies Deployment-System für eine Microservices-Architektur mit automatischen Rollback-Funktionen.",
    },
  },
  systems: {
    authentication: { title: "Authentifizierungsarchitektur" },
    "caching-strategy": { title: "Caching-Strategie" },
    deployment: { title: "Deployment" },
    "folder-structures": { title: "Ordnerstrukturen" },
    "naming-conventions": { title: "Namenskonventionen" },
  },
  notes: {
    "api-design-consistency": {
      title: "API-Designkonsistenz durch explizite Verträge",
      excerpt:
        "Wie die Durchsetzung von API-Verträgen auf Typebene Integrationsfehler reduzierte und die Zusammenarbeit zwischen Frontend und Backend verbesserte.",
    },
    "choosing-postgres-over-mongodb": {
      title: "Warum PostgreSQL statt MongoDB für eine dokumentenlastige Anwendung",
      excerpt:
        "Eine Entscheidungsdokumentation, warum eine dokumentenorientierte Anwendung von MongoDB zu PostgreSQL wechselte, mit Leistungsmessungen und Wartungsbeobachtungen.",
    },
    "folder-structure-as-documentation": {
      title: "Ordnerstruktur als Dokumentation",
      excerpt:
        "Warum die Organisation von Dateien nach Domäne statt nach Typ die Auffindbarkeit der Codebasis verbessert und die Einarbeitung erleichtert.",
    },
    "structured-output-llm-reliability": {
      title: "Strukturierte Ausgabeschemata für LLM-Zuverlässigkeit",
      excerpt:
        "Wie strukturierte Ausgabeschemata die Parsing-Anfälligkeit beseitigen und die Latenz in LLM-gestützten Pipelines reduzieren.",
    },
    "why-gradients-were-removed": {
      title: "Warum Farbverläufe entfernt wurden",
      excerpt:
        "Ein Entscheidungsprotokoll über das Entfernen aller Farbverläufe aus dem Designsystem und das Akzeptieren der visuellen Folgen dieser Wahl.",
    },
    "why-i-chose-astro-over-nextjs": {
      title: "Warum ich Astro statt Next.js für Content-Websites gewählt habe",
      excerpt:
        "Eine Framework-Entscheidungsdokumentation, die Astro und Next.js für inhaltslastige Websites vergleicht, mit Leistungsmessungen und architektonischen Abwägungen.",
    },
    "why-motion-only-communicates-state": {
      title: "Warum Bewegung nur Zustände kommuniziert",
      excerpt:
        "Ein Entscheidungsprotokoll, das die Animationsrichtlinie festlegt: Bewegung existiert nur, um Zustandsänderungen zu kommunizieren, niemals zur Unterhaltung oder Dekoration.",
    },
  },
};

const ar: LangContent = {
  work: {
    "ai-coding-assistant": {
      title: "مساعد البرمجة بالذكاء الاصطناعي",
      summary:
        "أداة تطوير داخلية تستخدم نماذج اللغة لشرح الكود وإعادة هيكلته وتوليده داخل قواعد الكود القائمة.",
    },
    "ai-resume-analyzer": {
      title: "أداة تحليل السير الذاتية بالذكاء الاصطناعي",
      summary: "مساعد توظيف مدعوم بالذكاء الاصطناعي.",
    },
    "automated-deployment-pipeline": {
      title: "خط نشر آلي",
      summary:
        "نظام نشر دون توقف لبنية الخدمات المصغّرة مع إمكانيات التراجع التلقائي.",
    },
  },
  systems: {
    authentication: { title: "بنية المصادقة" },
    "caching-strategy": { title: "استراتيجية التخزين المؤقت" },
    deployment: { title: "النشر" },
    "folder-structures": { title: "هياكل المجلدات" },
    "naming-conventions": { title: "اصطلاحات التسمية" },
  },
  notes: {
    "api-design-consistency": {
      title: "اتساق تصميم واجهات البرمجة عبر العقود الصريحة",
      excerpt:
        "كيف أدى فرض عقود واجهات البرمجة على مستوى الأنواع إلى تقليل أخطاء التكامل وتحسين التعاون بين الواجهة الأمامية والخلفية.",
    },
    "choosing-postgres-over-mongodb": {
      title: "اختيار PostgreSQL بدلاً من MongoDB لتطبيق كثيف المستندات",
      excerpt:
        "سجل قرار حول سبب انتقال تطبيق موجّه للمستندات من MongoDB إلى PostgreSQL، مع قياسات الأداء وملاحظات الصيانة.",
    },
    "folder-structure-as-documentation": {
      title: "هيكل المجلدات كتوثيق",
      excerpt:
        "لماذا يؤدي تنظيم الملفات حسب المجال بدلاً من النوع إلى تحسين قابلية اكتشاف قاعدة الكود وتقليل صعوبة الانضمام.",
    },
    "structured-output-llm-reliability": {
      title: "مخططات المخرجات المنظمة لموثوقية نماذج اللغة الكبيرة",
      excerpt:
        "كيف تقضي مخططات المخرجات المنظمة على هشاشة التحليل وتقلل زمن الاستجابة في الأنظمة المدعومة بنماذج اللغة الكبيرة.",
    },
    "why-gradients-were-removed": {
      title: "لماذا تمت إزالة التدرجات اللونية",
      excerpt:
        "سجل قرار حول إزالة جميع التدرجات اللونية من نظام التصميم وقبول النتيجة البصرية لهذا الخيار.",
    },
    "why-i-chose-astro-over-nextjs": {
      title: "لماذا اخترت Astro بدلاً من Next.js لمواقع المحتوى",
      excerpt:
        "سجل قرار حول الأطر يقارن بين Astro وNext.js للمواقع كثيفة المحتوى، مع قياسات الأداء والمفاضلات المعمارية.",
    },
    "why-motion-only-communicates-state": {
      title: "لماذا تنقل الحركة الحالة فقط",
      excerpt:
        "سجل قرار يحدد سياسة الحركة: توجد الحركة فقط لنقل تغيّرات الحالة، وليست للترفيه أو الزخرفة أبداً.",
    },
  },
};

const contentByLang: Partial<Record<Lang, LangContent>> = { tr, de, ar };

type ContentType = "work" | "systems" | "notes";

export function localizedTitle(
  lang: Lang,
  type: ContentType,
  slug: string,
  fallback: string,
): string {
  return contentByLang[lang]?.[type]?.[slug]?.title ?? fallback;
}

export function localizedSummary(
  lang: Lang,
  type: ContentType,
  slug: string,
  fallback: string,
): string {
  return contentByLang[lang]?.[type]?.[slug]?.summary ?? fallback;
}

export function localizedExcerpt(
  lang: Lang,
  type: ContentType,
  slug: string,
  fallback: string,
): string {
  return contentByLang[lang]?.[type]?.[slug]?.excerpt ?? fallback;
}
