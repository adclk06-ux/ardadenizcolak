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

export interface TranslationMaps {
  category: Record<string, string>;
  complexity: Record<string, string>;
  status: Record<string, string>;
}

export interface Translations {
  nav: {
    home: string;
    work: string;
    notes: string;
    systems: string;
    about: string;
    contact: string;
  };
  maps: TranslationMaps;
  home: {
    eyebrow: string;
    headline: string;
    description: string;
    cta: string;
  };
  homeSections: {
    services: {
      title: string;
      items: { title: string; description: string }[];
    };
    value: {
      title: string;
      items: string[];
    };
    process: {
      title: string;
      steps: string[];
    };
    packages: {
      title: string;
      items: { title: string; description: string }[];
      pricingNote: string;
    };
    exampleSolutions: {
      title: string;
      intro: string;
      items: { title: string; description: string }[];
    };
    faq: {
      title: string;
      items: { question: string; answer: string }[];
    };
    trust: {
      title: string;
      items: string[];
    };
    cta: {
      title: string;
      text: string;
      primaryButton: string;
      whatsappButton: string;
      workButton: string;
    };
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
    fullName: string;
    email: string;
    phone: string;
    whatsapp: string;
    location: string;
    locationText: string;
    availability: string;
    availabilityText: string;
    preferredMethod: string;
    inquiryTypesLabel: string;
    inquiryTypes: string[];
    whatToInclude: string;
    whatToIncludeText: string;
    responseTimeLabel: string;
    responseTime: string;
    notWelcomeLabel: string;
    notWelcome: string[];
    ctaHeading: string;
    ctaSubtext: string;
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
  form: {
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    required: string;
    invalidEmail: string;
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
  maps: {
    category: {
      Engineering: "Mühendislik",
      Architecture: "Mimari",
      Performance: "Performans",
      AI: "Yapay Zekâ",
      Systems: "Sistemler",
      Design: "Tasarım",
      Observations: "Gözlemler",
      "Decision Log": "Karar Günlüğü",
    },
    complexity: { low: "Düşük", medium: "Orta", high: "Yüksek" },
    status: { Shipped: "Yayınlandı", Active: "Aktif", Archived: "Arşivlendi" },
  },
  nav: {
    home: "Ana Sayfa",
    work: "Çalışmalar",
    notes: "Notlar",
    systems: "Sistemler",
    about: "Hakkımda",
    contact: "İletişim",
  },
  home: {
    eyebrow: "Otomasyon Entegrasyonu, Web Site Geliştirme ve Yazılım Çözümleri Uzmanı",
    headline: "Zamanla güven kazanan yazılımlar geliştiriyorum.",
    description:
      "Ölçeklenebilir sistemler, yapay zeka destekli uygulamalar ve uzun vadeli sürdürülebilirliği öncelik alan dijital ürünler tasarlıyorum.",
    cta: "Çalışmaları Keşfet",
  },
  homeSections: {
    services: {
      title: "Neler Yapıyorum?",
      items: [
        {
          title: "Web Site Yapımı",
          description: "Kurumsal, hızlı, mobil uyumlu ve SEO temelli web siteleri geliştiriyorum.",
        },
        {
          title: "Otomasyon Entegrasyonu",
          description:
            "Tekrarlayan işleri azaltan form, tablo, CRM, WhatsApp, e-posta ve iş akışı otomasyonları kuruyorum.",
        },
        {
          title: "Yazılım Çözümleri",
          description:
            "İşletmeye özel panel, takip sistemi, veri yönetimi ve entegrasyon çözümleri geliştiriyorum.",
        },
      ],
    },
    value: {
      title: "Size Ne Kazandırır?",
      items: [
        "Daha profesyonel dijital görünüm",
        "Daha hızlı operasyon",
        "Daha az manuel iş",
        "Daha kolay müşteri iletişimi",
        "Ölçülebilir ve sürdürülebilir sistem",
        "Yayına alma ve teknik kurulum desteği",
      ],
    },
    process: {
      title: "Nasıl Çalışırım?",
      steps: [
        "İhtiyacı anlarız",
        "Yapıyı planlarız",
        "Tasarım ve geliştirme yapılır",
        "Test edilir",
        "Yayına alınır",
        "Gerekirse destek verilir",
      ],
    },
    packages: {
      title: "Hizmet Alanları",
      items: [
        {
          title: "Başlangıç Web Sitesi",
          description:
            "Kişisel marka, portfolyo veya küçük işletmeler için hızlı ve şık web sitesi.",
        },
        {
          title: "Kurumsal Web Sitesi",
          description: "Şirketler için güven veren, mobil uyumlu ve SEO temelli web sitesi.",
        },
        {
          title: "Otomasyon Danışmanlığı",
          description: "Manuel iş yükünü azaltan dijital süreç ve entegrasyon çözümleri.",
        },
        {
          title: "Özel Yazılım / Panel",
          description: "İşletmeye özel takip, yönetim ve veri işleme sistemleri.",
        },
      ],
      pricingNote: "Proje kapsamına göre tekliflendirilir.",
    },
    exampleSolutions: {
      title: "Örnek Çözümler",
      intro:
        "Farklı işletme ihtiyaçları için uygulanabilir, sade ve sürdürülebilir dijital çözümler geliştiriyorum.",
      items: [
        {
          title: "Restoran ve Kafeler",
          description:
            "QR menü, WhatsApp sipariş yönlendirmesi, rezervasyon ve müşteri iletişim akışları.",
        },
        {
          title: "Küçük İşletmeler",
          description:
            "Kurumsal web sitesi, iletişim formları, Google görünürlüğü ve temel dijital altyapı.",
        },
        {
          title: "Emlak ve Danışmanlık",
          description: "İlan, müşteri, randevu ve takip süreçleri için özel panel ve otomasyonlar.",
        },
        {
          title: "Servis ve Hizmet Firmaları",
          description: "Randevu, teklif, müşteri kaydı ve iş takibi için sade yönetim sistemleri.",
        },
        {
          title: "Excel ve Manuel İşler",
          description: "Tekrarlayan tablo, raporlama ve veri giriş süreçlerini otomasyona çevirme.",
        },
        {
          title: "Kişisel Marka ve Portfolyo",
          description: "Güven veren, hızlı, mobil uyumlu ve profesyonel kişisel web siteleri.",
        },
      ],
    },
    faq: {
      title: "Sık Sorulan Sorular",
      items: [
        {
          question: "Web sitesi kaç günde hazırlanır?",
          answer:
            "Projenin kapsamına göre değişir. Basit portfolyo ve tanıtım siteleri genellikle daha kısa sürede, kapsamlı kurumsal siteler ise planlama ve içerik durumuna göre hazırlanır.",
        },
        {
          question: "Domain ve yayınlama kurulumu dahil mi?",
          answer:
            "Evet. Domain yönlendirme, Vercel yayını, temel teknik kurulum ve yayına alma sürecinde destek sağlayabilirim.",
        },
        {
          question: "Mobil uyumlu olur mu?",
          answer:
            "Evet. Tüm web siteleri mobil, tablet ve masaüstü cihazlarda düzgün çalışacak şekilde tasarlanır.",
        },
        {
          question: "Teslimden sonra destek veriyor musunuz?",
          answer:
            "Evet. Teslim sonrası küçük düzenlemeler, teknik kontrol ve yönlendirme konusunda destek verilebilir.",
        },
        {
          question: "Otomasyon mevcut iş akışıma uyarlanır mı?",
          answer:
            "Evet. Önce mevcut süreci anlayıp, manuel yükü azaltacak en uygun otomasyon yapısı planlanır.",
        },
        {
          question: "Fiyatlandırma nasıl yapılır?",
          answer:
            "Fiyatlandırma projenin kapsamına, sayfa sayısına, entegrasyon ihtiyacına ve özel yazılım gereksinimlerine göre belirlenir.",
        },
      ],
    },
    trust: {
      title: "Neden Benimle Çalışmalısınız?",
      items: [
        "Temiz ve sürdürülebilir kod",
        "Mobil uyumlu modern arayüz",
        "Hızlı ve güvenli yayın süreci",
        "Domain, hosting ve Vercel kurulum desteği",
        "SEO temeli ve performans odaklı yapı",
        "Teslim sonrası teknik destek",
      ],
    },
    cta: {
      title: "Projenizi dijitale taşımaya hazır mısınız?",
      text: "Web sitesi, otomasyon veya özel yazılım ihtiyacınızı netleştirip uygulanabilir bir çözüme dönüştürelim.",
      primaryButton: "Proje için görüşelim",
      whatsappButton: "WhatsApp'tan yaz",
      workButton: "Çalışmaları incele",
    },
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
    fullName: "Arda Deniz Çolak",
    email: "E-posta",
    phone: "Telefon",
    whatsapp: "WhatsApp",
    location: "Konum",
    locationText: "Çekmeköy, İstanbul, Türkiye",
    availability: "Müsaitlik",
    availabilityText: "Tam zamanlı çalışmaya uygun",
    preferredMethod: "Tercih Edilen Yöntem",
    inquiryTypesLabel: "Sorgu Türleri",
    inquiryTypes: ["İş Birliği", "Danışmanlık", "Konuşma", "İstihdam"],
    whatToInclude: "Neler Dahil Olmalı",
    whatToIncludeText:
      "Bağlam, zaman planı ve kapsam. Netlik iki taraf için de süreci kolaylaştırır. Açık ve sınırları belirlenmiş taleplere daha hızlı yanıt veririm.",
    responseTimeLabel: "Yanıt Süresi",
    responseTime:
      "Anlamlı talepler için 48 saat içinde, daha karmaşık istekler için 72 saat içinde yanıt veririm.",
    notWelcomeLabel: "Kabul Edilmeyenler",
    notWelcome: [
      "Spam içerikler",
      "Bağlam içermeyen belirsiz “tanışalım” mesajları",
      "Ücretsiz spekülatif çalışma talepleri",
      "Belirtilen uzmanlık alanlarım dışındaki işe alım teklifleri",
    ],
    ctaHeading: "Başlamaya hazır mısınız?",
    ctaSubtext: "Kısa bir mesaj bırakın, en kısa sürede size dönüş yapayım.",
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
  form: {
    name: "İsim",
    email: "E-posta",
    subject: "Konu",
    message: "Mesaj",
    submit: "Gönder",
    sending: "Gönderiliyor...",
    success: "Mesajınız başarıyla gönderildi.",
    error: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
    required: "Bu alan zorunludur.",
    invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
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
  maps: {
    category: {
      Engineering: "Engineering",
      Architecture: "Architecture",
      Performance: "Performance",
      AI: "AI",
      Systems: "Systems",
      Design: "Design",
      Observations: "Observations",
      "Decision Log": "Decision Log",
    },
    complexity: { low: "Low", medium: "Medium", high: "High" },
    status: { Shipped: "Shipped", Active: "Active", Archived: "Archived" },
  },
  nav: {
    home: "Home",
    work: "Work",
    notes: "Notes",
    systems: "Systems",
    about: "About",
    contact: "Contact",
  },
  home: {
    eyebrow: "Automation Integration, Website Development and Software Solutions Specialist",
    headline: "Building software that earns trust over time.",
    description:
      "I design scalable systems, AI-powered applications, and thoughtful digital products with long-term maintainability in mind.",
    cta: "Explore Work",
  },
  homeSections: {
    services: {
      title: "What I Do",
      items: [
        {
          title: "Website Development",
          description: "I build corporate, fast, mobile-friendly and SEO-based websites.",
        },
        {
          title: "Automation Integration",
          description:
            "I set up automations for forms, spreadsheets, CRMs, WhatsApp, email and workflows that reduce repetitive tasks.",
        },
        {
          title: "Software Solutions",
          description:
            "I develop custom dashboards, tracking systems, data management and integration solutions tailored to your business.",
        },
      ],
    },
    value: {
      title: "What You Gain",
      items: [
        "A more professional digital presence",
        "Faster operations",
        "Less manual work",
        "Easier customer communication",
        "A measurable and sustainable system",
        "Deployment and technical setup support",
      ],
    },
    process: {
      title: "How I Work",
      steps: [
        "We understand the need",
        "We plan the structure",
        "Design and development",
        "Testing",
        "Go live",
        "Ongoing support if needed",
      ],
    },
    packages: {
      title: "Service Areas",
      items: [
        {
          title: "Starter Website",
          description:
            "A fast and elegant website for personal brands, portfolios or small businesses.",
        },
        {
          title: "Corporate Website",
          description: "A trustworthy, mobile-friendly, SEO-based website for companies.",
        },
        {
          title: "Automation Consulting",
          description: "Digital process and integration solutions that reduce manual workload.",
        },
        {
          title: "Custom Software / Panel",
          description: "Custom tracking, management and data processing systems for your business.",
        },
      ],
      pricingNote: "Pricing is based on project scope.",
    },
    exampleSolutions: {
      title: "Example Solutions",
      intro:
        "I develop practical, clean and sustainable digital solutions for different business needs.",
      items: [
        {
          title: "Restaurants and Cafes",
          description:
            "QR menu, WhatsApp order routing, reservation and customer communication flows.",
        },
        {
          title: "Small Businesses",
          description:
            "Corporate website, contact forms, Google visibility and basic digital infrastructure.",
        },
        {
          title: "Real Estate and Consulting",
          description:
            "Custom dashboards and automations for listings, clients, appointments and tracking.",
        },
        {
          title: "Service Companies",
          description:
            "Simple management systems for appointments, quotes, customer records and job tracking.",
        },
        {
          title: "Excel and Manual Work",
          description:
            "Converting recurring spreadsheets, reporting and data entry processes into automation.",
        },
        {
          title: "Personal Brand and Portfolio",
          description: "Trustworthy, fast, mobile-friendly and professional personal websites.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long does it take to build a website?",
          answer:
            "It depends on the project scope. Simple portfolio and landing sites are usually ready sooner, while comprehensive corporate sites depend on planning and content readiness.",
        },
        {
          question: "Is domain and publishing setup included?",
          answer:
            "Yes. I can assist with domain routing, Vercel deployment, basic technical setup and the go-live process.",
        },
        {
          question: "Will it be mobile-friendly?",
          answer:
            "Yes. All websites are designed to work properly on mobile, tablet and desktop devices.",
        },
        {
          question: "Do you provide support after delivery?",
          answer: "Yes. Small edits, technical checks and guidance can be provided after delivery.",
        },
        {
          question: "Can automation be adapted to my existing workflow?",
          answer:
            "Yes. I first understand your current process, then plan the most suitable automation structure to reduce manual workload.",
        },
        {
          question: "How is pricing determined?",
          answer:
            "Pricing is determined based on project scope, page count, integration needs and custom software requirements.",
        },
      ],
    },
    trust: {
      title: "Why Work With Me?",
      items: [
        "Clean and maintainable code",
        "Mobile-friendly modern interface",
        "Fast and secure deployment process",
        "Domain, hosting and Vercel setup support",
        "SEO foundation and performance-focused structure",
        "Post-delivery technical support",
      ],
    },
    cta: {
      title: "Ready to take your project digital?",
      text: "Let's clarify your website, automation or custom software needs and turn them into an actionable solution.",
      primaryButton: "Let's discuss your project",
      whatsappButton: "Message on WhatsApp",
      workButton: "View my work",
    },
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
    fullName: "Arda Deniz Çolak",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    location: "Location",
    locationText: "Çekmeköy, İstanbul, Türkiye",
    availability: "Availability",
    availabilityText: "Available for full-time work",
    preferredMethod: "Preferred Method",
    inquiryTypesLabel: "Inquiry Types",
    inquiryTypes: ["Collaboration", "Consulting", "Speaking", "Hiring"],
    whatToInclude: "What to Include",
    whatToIncludeText:
      "Context, timeline and scope. Specificity helps both sides. Clear, well-bounded requests receive faster replies.",
    responseTimeLabel: "Response Time",
    responseTime:
      "I usually respond within 48 hours for meaningful inquiries and within 72 hours for more complex requests.",
    notWelcomeLabel: "Not Welcome",
    notWelcome: [
      "Spam",
      "Vague “let’s connect” requests without context",
      "Unpaid speculative work",
      "Recruiter pitches for roles outside stated domains",
    ],
    ctaHeading: "Ready to start?",
    ctaSubtext: "Leave a short message and I’ll get back to you as soon as possible.",
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
  form: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    submit: "Send",
    sending: "Sending...",
    success: "Your message has been sent successfully.",
    error: "The message could not be sent. Please try again.",
    required: "This field is required.",
    invalidEmail: "Please enter a valid email address.",
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
  maps: {
    category: {
      Engineering: "Engineering",
      Architecture: "Architektur",
      Performance: "Performance",
      AI: "KI",
      Systems: "Systeme",
      Design: "Design",
      Observations: "Beobachtungen",
      "Decision Log": "Entscheidungsprotokoll",
    },
    complexity: { low: "Niedrig", medium: "Mittel", high: "Hoch" },
    status: { Shipped: "Veröffentlicht", Active: "Aktiv", Archived: "Archiviert" },
  },
  nav: {
    home: "Startseite",
    work: "Arbeiten",
    notes: "Notizen",
    systems: "Systeme",
    about: "Über mich",
    contact: "Kontakt",
  },
  home: {
    eyebrow: "Spezialist für Automatisierungsintegration, Website-Entwicklung und Softwarelösungen",
    headline: "Software entwickeln, die im Laufe der Zeit Vertrauen verdient.",
    description:
      "Ich entwerfe skalierbare Systeme, KI-gestützte Anwendungen und durchdachte digitale Produkte mit langfristiger Wartbarkeit.",
    cta: "Arbeit erkunden",
  },
  homeSections: {
    services: {
      title: "Was ich mache",
      items: [
        {
          title: "Website-Entwicklung",
          description: "Ich entwickle professionelle, schnelle, mobile und SEO-basierte Websites.",
        },
        {
          title: "Automatisierungsintegration",
          description:
            "Ich richte Automatisierungen für Formulare, Tabellen, CRMs, WhatsApp, E-Mail und Workflows ein, die repetitive Aufgaben reduzieren.",
        },
        {
          title: "Softwarelösungen",
          description:
            "Ich entwickle maßgeschneiderte Dashboards, Tracking-Systeme, Datenmanagement- und Integrationslösungen für Ihr Unternehmen.",
        },
      ],
    },
    value: {
      title: "Was Sie gewinnen",
      items: [
        "Eine professionellere digitale Präsenz",
        "Schnellere Abläufe",
        "Weniger manuelle Arbeit",
        "Einfachere Kundenkommunikation",
        "Ein messbares und nachhaltiges System",
        "Unterstützung bei Bereitstellung und technischem Setup",
      ],
    },
    process: {
      title: "Wie ich arbeite",
      steps: [
        "Wir verstehen den Bedarf",
        "Wir planen die Struktur",
        "Design und Entwicklung",
        "Tests",
        "Veröffentlichung",
        "Laufende Unterstützung bei Bedarf",
      ],
    },
    packages: {
      title: "Servicebereiche",
      items: [
        {
          title: "Starter-Website",
          description:
            "Eine schnelle und elegante Website für Personal Brands, Portfolios oder kleine Unternehmen.",
        },
        {
          title: "Unternehmenswebsite",
          description: "Eine vertrauenswürdige, mobile und SEO-basierte Website für Unternehmen.",
        },
        {
          title: "Automatisierungsberatung",
          description:
            "Digitale Prozess- und Integrationslösungen, die manuelle Arbeitslast reduzieren.",
        },
        {
          title: "Maßgeschneiderte Software / Panel",
          description:
            "Maßgeschneiderte Tracking-, Management- und Datenverarbeitungssysteme für Ihr Unternehmen.",
        },
      ],
      pricingNote: "Die Preisgestaltung erfolgt je nach Projektumfang.",
    },
    exampleSolutions: {
      title: "Beispiellösungen",
      intro:
        "Ich entwickle praktische, übersichtliche und nachhaltige digitale Lösungen für unterschiedliche Geschäftsanforderungen.",
      items: [
        {
          title: "Restaurants und Cafés",
          description:
            "QR-Menü, WhatsApp-Bestellweiterleitung, Reservierungs- und Kundenkommunikationsabläufe.",
        },
        {
          title: "Kleine Unternehmen",
          description:
            "Unternehmenswebsite, Kontaktformulare, Google-Sichtbarkeit und grundlegende digitale Infrastruktur.",
        },
        {
          title: "Immobilien und Beratung",
          description:
            "Maßgeschneiderte Dashboards und Automatisierungen für Anzeigen, Kunden, Termine und Nachverfolgung.",
        },
        {
          title: "Dienstleistungsunternehmen",
          description:
            "Einfache Verwaltungssysteme für Termine, Angebote, Kundenakten und Auftragsverfolgung.",
        },
        {
          title: "Excel und manuelle Arbeiten",
          description:
            "Umwandlung wiederkehrender Tabellenkalkulationen, Berichterstellung und Dateneingabeprozesse in Automatisierung.",
        },
        {
          title: "Persönliche Marke und Portfolio",
          description:
            "Vertrauenswürdige, schnelle, mobile und professionelle persönliche Websites.",
        },
      ],
    },
    faq: {
      title: "Häufig gestellte Fragen",
      items: [
        {
          question: "Wie lange dauert die Erstellung einer Website?",
          answer:
            "Es hängt vom Projektumfang ab. Einfache Portfolio- und Landingpage-Sites sind in der Regel schneller fertig, während umfassende Unternehmenswebsites von Planung und Inhaltsverfügbarkeit abhängen.",
        },
        {
          question: "Ist Domain- und Veröffentlichungs-Setup inbegriffen?",
          answer:
            "Ja. Ich kann bei Domain-Routing, Vercel-Bereitstellung, grundlegendem technischem Setup und dem Go-Live-Prozess unterstützen.",
        },
        {
          question: "Ist es mobilfreundlich?",
          answer:
            "Ja. Alle Websites werden so gestaltet, dass sie auf Mobilgeräten, Tablets und Desktop-Geräten ordnungsgemäß funktionieren.",
        },
        {
          question: "Bieten Sie Support nach der Auslieferung?",
          answer:
            "Ja. Kleine Bearbeitungen, technische Überprüfungen und Beratung können nach der Auslieferung erfolgen.",
        },
        {
          question: "Kann die Automatisierung an meinen bestehenden Workflow angepasst werden?",
          answer:
            "Ja. Ich verstehe zunächst Ihren aktuellen Prozess und plane dann die passendste Automatisierungsstruktur zur Reduzierung manueller Arbeit.",
        },
        {
          question: "Wie wird die Preisgestaltung festgelegt?",
          answer:
            "Die Preisgestaltung erfolgt je nach Projektumfang, Seitenanzahl, Integrationsbedarf und individuellen Softwareanforderungen.",
        },
      ],
    },
    trust: {
      title: "Warum mit mir arbeiten?",
      items: [
        "Sauberer und wartbarer Code",
        "Mobilefreundliche moderne Oberfläche",
        "Schneller und sicherer Bereitstellungsprozess",
        "Unterstützung bei Domain, Hosting und Vercel-Setup",
        "SEO-Grundlage und leistungsorientierte Struktur",
        "Technischer Support nach der Auslieferung",
      ],
    },
    cta: {
      title: "Bereit, Ihr Projekt digital umzusetzen?",
      text: "Lassen Sie uns Ihre Website-, Automatisierungs- oder Softwareanforderungen klären und in eine umsetzbare Lösung verwandeln.",
      primaryButton: "Projekt besprechen",
      whatsappButton: "Auf WhatsApp schreiben",
      workButton: "Arbeiten ansehen",
    },
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
    fullName: "Arda Deniz Çolak",
    email: "E-Mail",
    phone: "Telefon",
    whatsapp: "WhatsApp",
    location: "Standort",
    locationText: "Çekmeköy, İstanbul, Türkiye",
    availability: "Verfügbarkeit",
    availabilityText: "Verfügbar für Vollzeitbeschäftigung",
    preferredMethod: "Bevorzugte Methode",
    inquiryTypesLabel: "Anfragetypen",
    inquiryTypes: ["Zusammenarbeit", "Beratung", "Vortrag", "Einstellung"],
    whatToInclude: "Was beifügen",
    whatToIncludeText:
      "Kontext, Zeitrahmen und Umfang. Präzision hilft beiden Seiten. Klare und gut abgegrenzte Anfragen erhalten schneller eine Antwort.",
    responseTimeLabel: "Antwortzeit",
    responseTime:
      "Auf sinnvolle Anfragen antworte ich in der Regel innerhalb von 48 Stunden, bei komplexeren Anliegen innerhalb von 72 Stunden.",
    notWelcomeLabel: "Nicht erwünscht",
    notWelcome: [
      "Spam",
      "Unklare „Lass uns vernetzen“-Anfragen ohne Kontext",
      "Unbezahlte spekulative Arbeitsanfragen",
      "Recruiting-Angebote außerhalb der genannten Fachbereiche",
    ],
    ctaHeading: "Bereit zu starten?",
    ctaSubtext:
      "Hinterlassen Sie eine kurze Nachricht, ich melde mich so schnell wie möglich zurück.",
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
  form: {
    name: "Name",
    email: "E-Mail",
    subject: "Betreff",
    message: "Nachricht",
    submit: "Senden",
    sending: "Wird gesendet...",
    success: "Ihre Nachricht wurde erfolgreich gesendet.",
    error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    required: "Dieses Feld ist erforderlich.",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
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
  maps: {
    category: {
      Engineering: "هندسة",
      Architecture: "بنية",
      Performance: "أداء",
      AI: "ذكاء اصطناعي",
      Systems: "أنظمة",
      Design: "تصميم",
      Observations: "ملاحظات",
      "Decision Log": "سجل القرارات",
    },
    complexity: { low: "منخفض", medium: "متوسط", high: "عالي" },
    status: { Shipped: "منشور", Active: "نشط", Archived: "مؤرشف" },
  },
  nav: {
    home: "الرئيسية",
    work: "الأعمال",
    notes: "الملاحظات",
    systems: "الأنظمة",
    about: "نبذة عني",
    contact: "التواصل",
  },
  home: {
    eyebrow: "متخصص في تكامل الأتمتة وتطوير المواقع وحلول البرمجيات",
    headline: "أبني برمجيات تكسب الثقة مع مرور الوقت.",
    description:
      "أصمم أنظمة قابلة للتوسع، وتطبيقات مدعومة بالذكاء الاصطناعي، ومنتجات رقمية مدروسة مع الأخذ في الاعتبار الصيانة طويلة المدى.",
    cta: "استكشف الأعمال",
  },
  homeSections: {
    services: {
      title: "ماذا أفعل؟",
      items: [
        {
          title: "تطوير المواقع",
          description:
            "أبني مواقع مؤسسية سريعة ومتجاوبة مع الجوال ومبنية على أساس تحسين محركات البحث.",
        },
        {
          title: "تكامل الأتمتة",
          description:
            "أُنشئ أتمتة للنماذج والجداول وإدارة علاقات العملاء وواتساب والبريد الإلكتروني وسير العمل لتقليل المهام المتكررة.",
        },
        {
          title: "حلول البرمجيات",
          description: "أطور لوحات تحكم وأنظمة تتبع وإدارة بيانات وحلول تكامل مخصصة لعملك.",
        },
      ],
    },
    value: {
      title: "ما الذي ستكتسبه؟",
      items: [
        "حضور رقمي أكثر احترافية",
        "عمليات أسرع",
        "عمل يدوي أقل",
        "تواصل أسهل مع العملاء",
        "نظام قابل للقياس والاستدامة",
        "دعم النشر والإعداد التقني",
      ],
    },
    process: {
      title: "كيف أعمل؟",
      steps: [
        "نفهم الاحتياج",
        "نخطط البنية",
        "التصميم والتطوير",
        "الاختبار",
        "النشر",
        "الدعم المستمر عند الحاجة",
      ],
    },
    packages: {
      title: "مجالات الخدمة",
      items: [
        {
          title: "موقع البداية",
          description: "موقع سريع وأنيق للعلامات التجارية الشخصية أو المحافظ أو الشركات الصغيرة.",
        },
        {
          title: "موقع المؤسسة",
          description: "موقع موثوق ومتجاوب مع الجوال ومبني على أساس تحسين محركات البحث للشركات.",
        },
        {
          title: "استشارات الأتمتة",
          description: "حلول العمليات الرقمية والتكامل التي تقلل من العبء اليدوي.",
        },
        {
          title: "برمجيات / لوحة مخصصة",
          description: "أنظمة تتبع وإدارة ومعالجة بيانات مخصصة لعملك.",
        },
      ],
      pricingNote: "يتم تحديد السعر حسب نطاق المشروع.",
    },
    exampleSolutions: {
      title: "حلول مثالية",
      intro: "أطور حلولاً رقمية عملية ونظيفة ومستدامة لتلبية احتياجات الأعمال المختلفة.",
      items: [
        {
          title: "المطاعم والمقاهي",
          description: "قائمة QR، توجيه طلبات واتساب، حجوزات وتدفقات التواصل مع العملاء.",
        },
        {
          title: "الشركات الصغيرة",
          description: "موقع شركة، نماذج اتصال، الظهور على جوجل والبنية التحتية الرقمية الأساسية.",
        },
        {
          title: "العقارات والاستشارات",
          description: "لوحات تحكم وأتمتة مخصصة للقوائم والعملاء والمواعيد والتتبع.",
        },
        {
          title: "شركات الخدمات",
          description: "أنظمة إدارة بسيطة للمواعيد والعروض وسجلات العملاء وتتبع الأعمال.",
        },
        {
          title: "إكسل والعمل اليدوي",
          description: "تحويل جداول البيانات المتكررة والتقارير وعمليات إدخال البيانات إلى أتمتة.",
        },
        {
          title: "العلامة التجارية الشخصية والمحفظة",
          description: "مواقع شخصية موثوقة وسريعة ومتجاوبة مع الجوال واحترافية.",
        },
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          question: "كم يستغرق بناء الموقع؟",
          answer:
            "يعتمد على نطاق المشروع. مواقع المحافظ والصفحات المقصودة البسيطة تكون جاهزة عادةً بشكل أسرع، بينما المواقع المؤسسية الشاملة تعتمد على التخطيط وتوفر المحتوى.",
        },
        {
          question: "هل يشمل ذلك إعداد النطاق والنشر؟",
          answer:
            "نعم. يمكنني المساعدة في توجيه النطاق، والنشر على Vercel، والإعداد التقني الأساسي وعملية الإطلاق.",
        },
        {
          question: "هل هو متجاوب مع الجوال؟",
          answer:
            "نعم. جميع المواقع مصممة لتعمل بشكل صحيح على أجهزة الجوال والأجهزة اللوحية وأجهزة الكمبيوتر المكتبية.",
        },
        {
          question: "هل تقدم دعماً بعد التسليم؟",
          answer: "نعم. يمكن تقديم تعديلات بسيطة، وفحوصات تقنية وإرشادات بعد التسليم.",
        },
        {
          question: "هل يمكن تكييف الأتمتة مع سير العمل الحالي لدي؟",
          answer: "نعم. أفهم أولاً عمليتك الحالية، ثم أخطط لأنسب بنية أتمتة لتقليل العمل اليدوي.",
        },
        {
          question: "كيف يتم تحديد الأسعار؟",
          answer:
            "يتم تحديد الأسعار بناءً على نطاق المشروع، وعدد الصفحات، واحتياجات التكامل ومتطلبات البرمجيات المخصصة.",
        },
      ],
    },
    trust: {
      title: "لماذا تعمل معي؟",
      items: [
        "كود نظيف وقابل للصيانة",
        "واجهة حديثة متجاوبة مع الجوال",
        "عملية نشر سريعة وآمنة",
        "دعم إعداد النطاق والاستضافة وVercel",
        "أساس تحسين محركات البحث وبنية موجهة نحو الأداء",
        "دعم تقني ما بعد التسليم",
      ],
    },
    cta: {
      title: "هل أنت مستعد لتحويل مشروعك إلى رقمي؟",
      text: "لنُوضح احتياجات موقعك أو الأتمتة أو البرمجيات المخصصة ونحوّلها إلى حل قابل للتنفيذ.",
      primaryButton: "لنناقش مشروعك",
      whatsappButton: "تواصل عبر واتساب",
      workButton: "استعرض أعمالي",
    },
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
    title: "التواصل",
    fullName: "Arda Deniz Çolak",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    whatsapp: "WhatsApp",
    location: "الموقع",
    locationText: "Çekmeköy، İstanbul، Türkiye",
    availability: "التوفر",
    availabilityText: "متاح للعمل بدوام كامل",
    preferredMethod: "الطريقة المفضلة",
    inquiryTypesLabel: "أنواع الاستفسارات",
    inquiryTypes: ["تعاون", "استشارة", "محاضرة", "توظيف"],
    whatToInclude: "ما يجب إدراجه",
    whatToIncludeText:
      "السياق والجدول الزمني ونطاق العمل. يساعد الوضوح كلا الطرفين، وتحصل الطلبات المحددة جيدًا على رد أسرع.",
    responseTimeLabel: "وقت الاستجابة",
    responseTime:
      "عادةً أرد خلال 48 ساعة على الطلبات الواضحة، وخلال 72 ساعة على الطلبات الأكثر تعقيدًا.",
    notWelcomeLabel: "غير مرحب به",
    notWelcome: [
      "رسائل مزعجة",
      "طلبات تواصل عامة وغير واضحة من دون سياق",
      "طلبات عمل تجريبية غير مدفوعة",
      "عروض توظيف خارج مجالات التخصص المذكورة",
    ],
    ctaHeading: "هل أنت مستعد للبدء؟",
    ctaSubtext: "اترك رسالة قصيرة وسأرد عليك في أقرب وقت ممكن.",
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
  form: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    submit: "إرسال",
    sending: "جاري الإرسال...",
    success: "تم إرسال رسالتك بنجاح.",
    error: "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    required: "هذا الحقل مطلوب.",
    invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صالح.",
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
