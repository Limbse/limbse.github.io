export type Dictionary = typeof pt;

const pt = {
  lang: "pt",
  nav: {
    produto: "Produto",
    validacao: "Validação",
    equipe: "Equipe",
    contato: "Contato",
    cta: "Falar no WhatsApp",
    toggle: "EN",
    toggleHref: "/en",
    menuLabel: "Abrir menu",
    closeLabel: "Fechar menu",
  },
  hero: {
    headline1: "Design que Transforma.",
    headline2: "Tecnologia que Fortalece.",
    subheadline:
      "Plataforma integrada de reabilitação pós-AVC com órtese 3D personalizada, prescrição digital e telereabilitação.",
    ctaPrimary: "Conheça a NeurovIvA",
    ctaSecondary: "Fale conosco",
    scrollLabel: "Rolar para baixo",
  },
  problema: {
    headline: "Cada mês sem reabilitação custa caro — em todos os sentidos.",
    metrics: [
      {
        value: "344 mil",
        label: "novos AVCs por ano no Brasil",
        highlight: true,
      },
      {
        value: "67%",
        label: "dos pacientes desenvolvem sequelas motoras",
        highlight: false,
      },
      {
        value: "70%",
        label: "dos casos são atendidos pelo SUS — sem estrutura suficiente",
        highlight: false,
      },
    ],
    body: "Cada mês sem acesso à reabilitação especializada aumenta a rigidez, a dor e a dependência do paciente.",
  },
  neuroviva: {
    headline: "NeurovIvA",
    subheadline: "Reabilitação integrada do início ao fim.",
    cards: [
      {
        title: "Órtese 3D Personalizada",
        desc: "Escaneamento 3D · Design paramétrico · Impressão com material nacional",
        badge: "TRL 6 · Estudo clínico ativo",
      },
      {
        title: "Plataforma de Prescrição",
        desc: "Profissionais prescrevem, configuram e acompanham remotamente",
        badge: "Em aceleração In.cube InovaHC/USP",
      },
      {
        title: "App de Telereabilitação",
        desc: "Exercícios supervisionados, monitoramento de adesão, teleatendimento",
        badge: "Mobile-first · Integrado ao SUS Digital",
      },
    ],
  },
  cta: {
    headline: "Pronto para conversar?",
    subheadline:
      "Somos uma startup com tecnologia validada e time sério. Se você investe, pesquisa ou quer ser parceiro — vamos falar.",
    whatsapp: "Falar no WhatsApp",
    email: "contato@limbse.com",
  },
  footer: {
    cnpj: "CNPJ 49.184.418/0001-95",
    city: "São José dos Campos, SP",
    copyright: "© 2025 Limbse Tecnologia Assistiva",
    links: [
      { label: "Produto", href: "#produto" },
      { label: "Validação", href: "#validacao" },
      { label: "Equipe", href: "#equipe" },
      { label: "Contato", href: "#contato" },
    ],
  },
};

const en: Dictionary = {
  lang: "en",
  nav: {
    produto: "Product",
    validacao: "Validation",
    equipe: "Team",
    contato: "Contact",
    cta: "Talk on WhatsApp",
    toggle: "PT",
    toggleHref: "/pt",
    menuLabel: "Open menu",
    closeLabel: "Close menu",
  },
  hero: {
    headline1: "Design that Transforms.",
    headline2: "Technology that Empowers.",
    subheadline:
      "Integrated post-stroke rehabilitation platform with personalized 3D orthosis, digital prescription and telerehabilitation.",
    ctaPrimary: "Discover NeurovIvA",
    ctaSecondary: "Get in touch",
    scrollLabel: "Scroll down",
  },
  problema: {
    headline: "Every month without rehabilitation has a cost — in every sense.",
    metrics: [
      {
        value: "344K",
        label: "new stroke cases per year in Brazil",
        highlight: true,
      },
      {
        value: "67%",
        label: "of patients develop motor sequelae",
        highlight: false,
      },
      {
        value: "70%",
        label:
          "of cases are treated by SUS (Brazil's public health system) — without adequate resources",
        highlight: false,
      },
    ],
    body: "Every month without specialized rehabilitation increases stiffness, pain, and dependency.",
  },
  neuroviva: {
    headline: "NeurovIvA",
    subheadline: "Integrated rehabilitation from start to finish.",
    cards: [
      {
        title: "Personalized 3D Orthosis",
        desc: "3D scanning · Parametric design · Printed with domestic materials",
        badge: "TRL 6 · Active clinical study",
      },
      {
        title: "Prescription Platform",
        desc: "Healthcare professionals prescribe, configure and monitor remotely",
        badge: "Accelerated at In.cube InovaHC/USP",
      },
      {
        title: "Telerehabilitation App",
        desc: "Supervised exercises, adherence monitoring, teleconsultation",
        badge: "Mobile-first · Integrated with SUS Digital",
      },
    ],
  },
  cta: {
    headline: "Ready to talk?",
    subheadline:
      "We're a startup with validated technology and a serious team. If you invest, research, or want to be a partner — let's talk.",
    whatsapp: "Talk on WhatsApp",
    email: "contato@limbse.com",
  },
  footer: {
    cnpj: "CNPJ 49.184.418/0001-95",
    city: "São José dos Campos, SP — Brazil",
    copyright: "© 2025 Limbse Assistive Technology",
    links: [
      { label: "Product", href: "#produto" },
      { label: "Validation", href: "#validacao" },
      { label: "Team", href: "#equipe" },
      { label: "Contact", href: "#contato" },
    ],
  },
};

const dictionaries = { pt, en };

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["pt", "en"];

export function isLocale(lang: string): lang is Locale {
  return lang in dictionaries;
}

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}
