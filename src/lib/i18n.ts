/**
 * Internationalization — Centralized translation dictionary.
 * Turkish is the source language and default.
 * All UI text lives here; no hardcoded strings in components.
 */

export type Lang = "tr" | "en" | "de" | "ar";

export const defaultLang: Lang = "tr";
export const languages: Lang[] = ["tr", "en", "de", "ar"];

export const langNames: Record<Lang, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
  ar: "AR",
};

export const langDirs: Record<Lang, "ltr" | "rtl"> = {
  tr: "ltr",
  en: "ltr",
  de: "ltr",
  ar: "rtl",
};

export const langLabels: Record<Lang, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  ar: "العربية",
};

export interface Translations {
  nav: {
    work: string;
    notes: string;
    systems: string;
    about: string;
    contact: string;
  };
  home: {
    eyebrow: string;
    headline: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    principles: string;
    principlesList: string[];
    currentFocus: string;
    currentFocusText: string;
    workingStyle: string;
    workingStyleText: string;
    tooling: string;
    toolingText: string;
    outsideWork: string;
    outsideWorkText: string;
  };
  contact: {
    title: string;
    location: string;
    locationText: string;
    preferredMethod: string;
    inquiryTypes: string;
    whatToInclude: string;
    whatToIncludeText: string;
    responseTime: string;
    notWelcome: string;
  };
  work: {
    title: string;
    subtitle: string;
  };
  notes: {
    title: string;
    subtitle: string;
    empty: string;
  };
  systems: {
    title: string;
    subtitle: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    systems: string;
    builtWith: string;
  };
  mobileNav: {
    menu: string;
    ariaLabel: string;
  };
  meta: {
    description: string;
  };
}

const tr: Translations = {
  nav: {
    work: "Çalışmalar",
    notes: "Notlar",
    systems: "Sistemler",
    about: "Hakkımda",
    contact: "İletişim",
  },
  home: {
    eyebrow: "Yazılım Mühendisi",
    headline: "Zamanla güven kazanan yazılımlar geliştiriyorum.",
    description:
      "Ölçeklenebilir sistemler, yapay zeka destekli uygulamalar ve uzun vadeli sürdürülebilirliği öncelik alan dijital ürünler tasarlıyorum.",
    cta: "Çalışmaları Keşfet",
  },
  about: {
    title: "Hakkımda",
    principles: "Prensipler",
    principlesList: [
      "Geliştiricisinden daha uzun ömürlü sistemler kurarım.",
      "Gizli karmaşaya karşı açık tercihleri tercih ederim.",
      "Kararlarımı beş yıl sonra da geçerli olacak şekilde değerlendiririm.",
      "Kodu, onu devralacak mühendis için yazarım.",
      "Erken teslim eder, her zaman belgelerim ve kanıtla iterasyon yaparım.",
    ],
    currentFocus: "Mevcut Odak",
    currentFocusText:
      "Yapay zeka destekli uygulamalar ve otomasyon sistemleri geliştiriyorum. TypeScript, Astro ve modern web altyapısı ile çalışıyorum. Dil modellerinin ürün mühendisliği iş akışlarını nasıl değiştirdiğini keşfediyorum.",
    workingStyle: "Çalışma Tarzı",
    workingStyleText:
      "Net sahiplik alanları olan küçük ekiplerde en verimliyim. Asenkron iletişimi ve bilinçli senkron noktaları tercih ederim. Belirsizlik altında, geri alınabilir seçeneği belirleyip teslim ederek karar alırım. Uzun vadeli sürdürülebilirliği kısa vadeli hıza tercih ederim.",
    tooling: "Araçlar",
    toolingText:
      "Diller: TypeScript, Python, Go. Frontend: Astro, React, vanilla CSS. Backend: Node.js, edge functions, serverless. Altyapı: Vercel, AWS, Docker. AI: OpenAI API, LangChain, vektör veritabanları. Araçları kişisel tercihime değil, ekip bağlamına ve proje kısıtlarına göre seçerim.",
    outsideWork: "İş Dışında",
    outsideWorkText:
      "Mühendislik ve sistemler literatürü okurum — altyapı makaleleri, dil tasarımı ve tarihsel yazılım kararları. Önermeden önce fikirleri test etmek için yan projeler geliştiririm. Türkçe ve İngilizce konuşurum.",
  },
  contact: {
    title: "İletişim",
    location: "Konum",
    locationText: "İstanbul, Türkiye merkezli. Dünya çapında uzaktan işbirliğine açığım.",
    preferredMethod: "Tercih Edilen Yöntem",
    inquiryTypes: "Sorgu Türleri",
    whatToInclude: "Neler Dahil Olmalı",
    whatToIncludeText:
      "Bağlam, zaman çerçevesi ve kapsam. Spesifiklik her iki tarafa da yardımcı olur. Açık uçlu tanıtımlara göre net, sınırlı isteklere daha hızlı yanıt veririm.",
    responseTime: "Yanıt Süresi",
    notWelcome: "Kabul Edilmeyenler",
  },
  work: {
    title: "Çalışmalar",
    subtitle: "Seçilmiş projeler ve vaka analizleri.",
  },
  notes: {
    title: "Notlar",
    subtitle: "Teknik yazılar ve mühendislik denemeleri.",
    empty: "Bu kategoride henüz not bulunmuyor.",
  },
  systems: {
    title: "Sistemler",
    subtitle: "Altyapı, otomasyon ve operasyonel kararlar.",
  },
  notFound: {
    title: "Sayfa Bulunamadı",
    description: "Bu sayfa mevcut değil. Taşınmış olabilir veya hiç var olmamış olabilir.",
    cta: "Ana sayfaya dön",
  },
  footer: {
    systems: "Sistemler",
    builtWith: "Bilinçle oluşturuldu. ©",
  },
  mobileNav: {
    menu: "Menü",
    ariaLabel: "Birincil mobil",
  },
  meta: {
    description:
      "Ölçeklenebilir sistemler, yapay zeka destekli uygulamalar ve uzun vadeli sürdürülebilirliği öncelik alan dijital ürünler tasarlıyorum.",
  },
};

const en: Translations = {
  nav: {
    work: "Work",
    notes: "Notes",
    systems: "Systems",
    about: "About",
    contact: "Contact",
  },
  home: {
    eyebrow: "Software Engineer",
    headline: "Building software that earns trust over time.",
    description:
      "I design scalable systems, AI-powered applications, and thoughtful digital products with long-term maintainability in mind.",
    cta: "Explore Work",
  },
  about: {
    title: "About",
    principles: "Principles",
    principlesList: [
      "I build systems that outlast their builder.",
      "I prefer explicit trade-offs over hidden complexity.",
      "I measure decisions by what remains true in five years.",
      "I write code for the engineer who inherits it.",
      "I ship early, document always, and iterate with evidence.",
    ],
    currentFocus: "Current Focus",
    currentFocusText:
      "Building AI-powered applications and automation systems. Working with TypeScript, Astro, and modern web infrastructure. Exploring how language models change product engineering workflows.",
    workingStyle: "Working Style",
    workingStyleText:
      "I work best in small teams with clear ownership. I prefer async communication with intentional sync points. I make decisions under ambiguity by identifying the reversible choice and shipping it. I optimize for long-term maintainability over short-term velocity.",
    tooling: "Tooling",
    toolingText:
      "Languages: TypeScript, Python, Go. Frontend: Astro, React, vanilla CSS. Backend: Node.js, edge functions, serverless. Infrastructure: Vercel, AWS, Docker. AI: OpenAI API, LangChain, vector databases. I choose tools based on team context and project constraints, not personal preference.",
    outsideWork: "Outside of Work",
    outsideWorkText:
      "I read engineering and systems literature — infrastructure papers, language design, and historical software decisions. I build side projects to test ideas before recommending them. I speak Turkish and English.",
  },
  contact: {
    title: "Contact",
    location: "Location",
    locationText: "Based in Istanbul, Türkiye. Available for remote collaboration worldwide.",
    preferredMethod: "Preferred Method",
    inquiryTypes: "Inquiry Types",
    whatToInclude: "What to Include",
    whatToIncludeText:
      "Context, timeline, and scope. Specificity helps both parties. I respond to clear, bounded requests faster than open-ended introductions.",
    responseTime: "Response Time",
    notWelcome: "Not Welcome",
  },
  work: {
    title: "Work",
    subtitle: "Selected projects and case studies.",
  },
  notes: {
    title: "Notes",
    subtitle: "Technical writing and engineering essays.",
    empty: "No notes in this category yet.",
  },
  systems: {
    title: "Systems",
    subtitle: "Infrastructure, automation, and operational decisions.",
  },
  notFound: {
    title: "Page Not Found",
    description: "This page does not exist. It may have moved, or it may never have existed.",
    cta: "Return to the homepage",
  },
  footer: {
    systems: "Systems",
    builtWith: "Built with intention. ©",
  },
  mobileNav: {
    menu: "Menu",
    ariaLabel: "Primary mobile",
  },
  meta: {
    description:
      "I design scalable systems, AI-powered applications, and thoughtful digital products with long-term maintainability in mind.",
  },
};

const de: Translations = {
  nav: {
    work: "Arbeit",
    notes: "Notizen",
    systems: "Systeme",
    about: "Über",
    contact: "Kontakt",
  },
  home: {
    eyebrow: "Softwareingenieur",
    headline: "Software entwickeln, die im Laufe der Zeit Vertrauen verdient.",
    description:
      "Ich entwerfe skalierbare Systeme, KI-gestützte Anwendungen und durchdachte digitale Produkte mit langfristiger Wartbarkeit.",
    cta: "Arbeit erkunden",
  },
  about: {
    title: "Über",
    principles: "Prinzipien",
    principlesList: [
      "Ich baue Systeme, die ihren Erbauer überdauern.",
      "Ich bevorzuge explizite Abwägungen gegenüber versteckter Komplexität.",
      "Ich bewerte Entscheidungen danach, was in fünf Jahren noch gilt.",
      "Ich schreibe Code für den Ingenieur, der ihn erbt.",
      "Ich liefere früh, dokumentiere immer und iteriere mit Beweisen.",
    ],
    currentFocus: "Aktueller Fokus",
    currentFocusText:
      "Entwicklung von KI-gestützten Anwendungen und Automatisierungssystemen. Arbeit mit TypeScript, Astro und moderner Web-Infrastruktur. Erforschung, wie Sprachmodelle Produktentwicklungs-Workflows verändern.",
    workingStyle: "Arbeitsstil",
    workingStyleText:
      "Ich arbeite am besten in kleinen Teams mit klaren Zuständigkeiten. Ich bevorzuge asynchrone Kommunikation mit gezielten Synchronisationen. Unter Unsicherheit treffe ich Entscheidungen, indem ich die reversible Option identifiziere und ausliefere. Ich optimiere für langfristige Wartbarkeit gegenüber kurzfristiger Geschwindigkeit.",
    tooling: "Werkzeuge",
    toolingText:
      "Sprachen: TypeScript, Python, Go. Frontend: Astro, React, vanilla CSS. Backend: Node.js, Edge Functions, Serverless. Infrastruktur: Vercel, AWS, Docker. KI: OpenAI API, LangChain, Vektordatenbanken. Ich wähle Werkzeuge basierend auf Teamkontext und Projekteinschränkungen, nicht persönlicher Präferenz.",
    outsideWork: "Außerhalb der Arbeit",
    outsideWorkText:
      "Ich lese Ingenieur- und Systemliteratur — Infrastrukturpapiere, Sprachdesign und historische Softwareentscheidungen. Ich entwickle Nebenprojekte, um Ideen zu testen, bevor ich sie empfehle. Ich spreche Türkisch und Englisch.",
  },
  contact: {
    title: "Kontakt",
    location: "Standort",
    locationText: "Ansässig in Istanbul, Türkiye. Weltweite Remote-Zusammenarbeit möglich.",
    preferredMethod: "Bevorzugte Methode",
    inquiryTypes: "Anfragetypen",
    whatToInclude: "Was beifügen",
    whatToIncludeText:
      "Kontext, Zeitrahmen und Umfang. Konkretheit hilft beiden Parteien. Ich reagiere auf klare, begrenzte Anfragen schneller als auf offene Einleitungen.",
    responseTime: "Antwortzeit",
    notWelcome: "Nicht erwünscht",
  },
  work: {
    title: "Arbeit",
    subtitle: "Ausgewählte Projekte und Fallstudien.",
  },
  notes: {
    title: "Notizen",
    subtitle: "Technische Schriften und Ingenieuraufsätze.",
    empty: "Noch keine Notizen in dieser Kategorie.",
  },
  systems: {
    title: "Systeme",
    subtitle: "Infrastruktur, Automatisierung und operative Entscheidungen.",
  },
  notFound: {
    title: "Seite nicht gefunden",
    description:
      "Diese Seite existiert nicht. Sie könnte verschoben worden sein oder niemals existiert haben.",
    cta: "Zurück zur Startseite",
  },
  footer: {
    systems: "Systeme",
    builtWith: "Mit Absicht erstellt. ©",
  },
  mobileNav: {
    menu: "Menü",
    ariaLabel: "Primär mobil",
  },
  meta: {
    description:
      "Ich entwerfe skalierbare Systeme, KI-gestützte Anwendungen und durchdachte digitale Produkte mit langfristiger Wartbarkeit.",
  },
};

const ar: Translations = {
  nav: {
    work: "أعمال",
    notes: "ملاحظات",
    systems: "أنظمة",
    about: "نبذة",
    contact: "تواصل",
  },
  home: {
    eyebrow: "مهندس برمجيات",
    headline: "أبني برمجيات تكسب الثقة مع مرور الوقت.",
    description:
      "أصمم أنظمة قابلة للتوسع، وتطبيقات مدعومة بالذكاء الاصطناعي، ومنتجات رقمية مدروسة مع الأخذ في الاعتبار الصيانة طويلة المدى.",
    cta: "استكشف الأعمال",
  },
  about: {
    title: "نبذة",
    principles: "المبادئ",
    principlesList: [
      "أبني أنظمة تدوم أطول من منشئها.",
      "أفضل التنازلات الصريحة على التعقيد الخفي.",
      "أقيس القرارات بما يبقى صحيحاً بعد خمس سنوات.",
      "أكتب الكود للمهندس الذي يرثه.",
      "أسلم مبكراً، أُوثق دائماً، وأتكرر بالأدلة.",
    ],
    currentFocus: "التركيز الحالي",
    currentFocusText:
      "أبني تطبيقات مدعومة بالذكاء الاصطناعي وأنظمة أتمتة. أعمل مع TypeScript و Astro والبنية التحتية الحديثة للويب. أستكشف كيف تغير نماذج اللغة سير عمل هندسة المنتجات.",
    workingStyle: "أسلوب العمل",
    workingStyleText:
      "أعمل بأفضل شكل في فرق صغيرة مع ملكية واضحة. أفضل التواصل غير المتزامن مع نقاط تزامن مقصودة. أتخذ القرارات في حالة عدم اليقين من خلال تحديد الخيار القابل للتراجع عنه وتسليمه. أُحسّن للصيانة طويلة المدى على حساب السرعة قصيرة المدى.",
    tooling: "الأدوات",
    toolingText:
      "لغات: TypeScript, Python, Go. الواجهة الأمامية: Astro, React, vanilla CSS. الواجهة الخلفية: Node.js, edge functions, serverless. البنية التحتية: Vercel, AWS, Docker. الذكاء الاصطناعي: OpenAI API, LangChain, قواعد بيانات المتجهات. أختار الأدوات بناءً على سياق الفريق وقيود المشروع، وليس التفضيل الشخصي.",
    outsideWork: "خارج العمل",
    outsideWorkText:
      "أقرأ الأدبيات الهندسية وعلوم الأنظمة — أوراق البنية التحتية، تصميم اللغات، والقرارات البرمجية التاريخية. أبني مشاريع جانبية لاختبار الأفكار قبل التوصية بها. أتحدث التركية والإنجليزية.",
  },
  contact: {
    title: "تواصل",
    location: "الموقع",
    locationText: "مقر في إسطنبول، تركيا. متاح للتعاون عن بُعد على مستوى العالم.",
    preferredMethod: "الطريقة المفضلة",
    inquiryTypes: "أنواع الاستفسارات",
    whatToInclude: "ما يجب إدراجه",
    whatToIncludeText:
      "السياق والجدول الزمني والنطاق. التحدد يساعد الطرفين. أستجيب للطلبات الواضحة والمحددة أسرع من المقدمات المفتوحة.",
    responseTime: "وقت الاستجابة",
    notWelcome: "غير مرحب به",
  },
  work: {
    title: "أعمال",
    subtitle: "مشاريع مختارة ودراسات حالة.",
  },
  notes: {
    title: "ملاحظات",
    subtitle: "كتابات تقنية ومقالات هندسية.",
    empty: "لا توجد ملاحظات في هذه الفئة بعد.",
  },
  systems: {
    title: "أنظمة",
    subtitle: "البنية التحتية، الأتمتة، والقرارات التشغيلية.",
  },
  notFound: {
    title: "الصفحة غير موجودة",
    description: "هذه الصفحة غير موجودة. ربما تم نقلها أو لم تكن موجودة أبداً.",
    cta: "العودة إلى الصفحة الرئيسية",
  },
  footer: {
    systems: "أنظمة",
    builtWith: "بُني بوعي. ©",
  },
  mobileNav: {
    menu: "القائمة",
    ariaLabel: "التنقل الرئيسي",
  },
  meta: {
    description:
      "أصمم أنظمة قابلة للتوسع، وتطبيقات مدعومة بالذكاء الاصطناعي، ومنتجات رقمية مدروسة مع الأخذ في الاعتبار الصيانة طويلة المدى.",
  },
};

export const translations: Record<Lang, Translations> = { tr, en, de, ar };

export function t(lang: Lang): Translations {
  return translations[lang] ?? translations[defaultLang];
}
