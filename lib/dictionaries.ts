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
    ariaLabel: "Navegação principal",
    mobileAriaLabel: "Menu mobile",
    whatsappMessage:
      "Olá, gostaria de conversar sobre parceria ou investimento na Limbse.",
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
    headline: "Cada mês sem reabilitação custa caro - em todos os sentidos.",
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
        label: "dos casos são atendidos pelo SUS, sem estrutura suficiente",
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
        desc: "Escaneamento 3D, design paramétrico e impressão com material nacional",
        badge: "TRL 6 - estudo clínico ativo",
      },
      {
        title: "Plataforma de Prescrição",
        desc: "Profissionais prescrevem, configuram e acompanham remotamente",
        badge: "Em aceleração In.cube InovaHC/USP",
      },
      {
        title: "App de Telereabilitação",
        desc: "Exercícios supervisionados, monitoramento de adesão e teleatendimento",
        badge: "Mobile-first - integrado ao SUS Digital",
      },
    ],
  },
  validacao: {
    eyebrow: "Validação científica",
    headline: "Tecnologia validada com pesquisa aplicada e parceiros fortes.",
    body: "A Limbse combina engenharia biomédica, design digital e colaboração clínica para transformar personalização em cuidado viável.",
    evidenceTitle: "Evidência clínica",
    evidence: [
      "Estudo com 12 pacientes pós-AVC",
      "Parceria UNIFESP e UniVap",
      "CAAE 85355924.1.0000.5503",
      "CNPq - Edital Nº 21/2023, Processo 445657/2023-5",
      "Finep - Rede 5.0 de Tecnologia Assistiva da UNIFESP",
    ],
    recognitionTitle: "Reconhecimento",
    recognition: [
      "1º lugar - Acelera Startup FIESP 2025",
      "2º lugar - Prêmio Inovação Engenharia Biomédica para o SUS, SBEB 2025",
      "In.cube - InovaHC / USP",
      "UPLab",
    ],
    partnersTitle: "Parceiros institucionais",
    partners: [
      "UNIFESP",
      "UniVap",
      "SENAI",
      "AWS Startups",
      "Sebrae",
      "Mão3D",
      "SUS Digital",
      "Ministério da Saúde",
    ],
  },
  impacto: {
    eyebrow: "Impacto humano",
    headline:
      "Tecnologia assistiva só importa quando cabe na vida real das pessoas.",
    body: "A NeurovIvA nasce para reduzir tempo de espera, ampliar acesso e apoiar profissionais em planos de cuidado mais personalizados.",
    quote:
      "Tornar a personalização na reabilitação acessível e inteligente.",
    note: "Imagem real pendente de autorização para uso institucional. Até lá, esta seção evita expor pacientes identificáveis.",
  },
  equipe: {
    eyebrow: "Equipe",
    headline: "A equipe por trás da NeurovIvA.",
    members: [
      {
        name: "Thabata Ganga",
        role: "CEO",
        bio: "Engenheira Biomédica, mestre e doutoranda. Lidera estratégia, gestão, marketing, comercial, captação e relações institucionais.",
        specialty: "Estratégia, saúde digital e impacto institucional",
      },
      {
        name: "Eduardo Rorato",
        role: "CTO",
        bio: "Designer Industrial, mestre e doutorando. Lidera desenvolvimento, prototipagem, CAD/CAE/CAM e documentação técnica.",
        specialty: "Design paramétrico, manufatura aditiva e produto",
      },
      {
        name: "Dra. Maria Elizete Kunkel",
        role: "Head do Conselho Científico",
        bio: "Professora da UNIFESP. Coordena pesquisa aplicada, validação com usuários e cooperação acadêmica.",
        specialty: "Pesquisa aplicada e validação clínica",
      },
    ],
    councilTitle: "Conselho científico",
    council: [
      "Dr. Mário Oliveira Lima - Reabilitação",
      "Dr. Alessandro Hakme - Tecnologia",
      "Dr. Rodrigo Dornelles - Medicina",
    ],
  },
  cta: {
    headline: "Pronto para conversar?",
    subheadline:
      "Somos uma startup com tecnologia validada e time sério. Se você investe, pesquisa ou quer ser parceiro, vamos falar.",
    primaryLabel: "Falar no WhatsApp",
    secondaryLabel: "contato@limbse.com",
    whatsappMessage:
      "Olá, gostaria de conversar sobre parceria ou investimento na Limbse.",
  },
  footer: {
    cnpj: "CNPJ 49.184.418/0001-95",
    city: "São José dos Campos, SP",
    copyright: "© 2026 Limbse Tecnologia Assistiva",
    links: [
      { label: "Produto", href: "#produto" },
      { label: "Validação", href: "#validacao" },
      { label: "Equipe", href: "#equipe" },
      { label: "Contato", href: "#contato" },
    ],
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  lang: "en",
  nav: {
    produto: "Product",
    validacao: "Validation",
    equipe: "Team",
    contato: "Contact",
    cta: "Email us",
    toggle: "PT",
    toggleHref: "/pt",
    menuLabel: "Open menu",
    closeLabel: "Close menu",
    ariaLabel: "Main navigation",
    mobileAriaLabel: "Mobile menu",
    whatsappMessage:
      "Hello, I would like to talk about partnering with or investing in Limbse.",
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
    headline: "Every month without rehabilitation has a cost - in every sense.",
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
          "of cases are treated by SUS, Brazil's public health system, without adequate resources",
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
        desc: "3D scanning, parametric design and printing with domestic materials",
        badge: "TRL 6 - active clinical study",
      },
      {
        title: "Prescription Platform",
        desc: "Healthcare professionals prescribe, configure and monitor remotely",
        badge: "Accelerated at In.cube InovaHC/USP",
      },
      {
        title: "Telerehabilitation App",
        desc: "Supervised exercises, adherence monitoring and teleconsultation",
        badge: "Mobile-first - integrated with SUS Digital",
      },
    ],
  },
  validacao: {
    eyebrow: "Scientific validation",
    headline: "Validated technology backed by applied research and strong partners.",
    body: "Limbse combines biomedical engineering, digital design and clinical collaboration to turn personalization into scalable care.",
    evidenceTitle: "Clinical evidence",
    evidence: [
      "Study with 12 post-stroke patients",
      "Partnership with UNIFESP and UniVap",
      "CAAE 85355924.1.0000.5503",
      "CNPq - Call Nº 21/2023, Process 445657/2023-5",
      "Finep - UNIFESP Assistive Technology Network 5.0",
    ],
    recognitionTitle: "Recognition",
    recognition: [
      "1st place - Acelera Startup FIESP 2025",
      "2nd place - Biomedical Engineering Innovation Award for SUS, SBEB 2025",
      "In.cube - InovaHC / USP",
      "UPLab",
    ],
    partnersTitle: "Institutional partners",
    partners: [
      "UNIFESP",
      "UniVap",
      "SENAI",
      "AWS Startups",
      "Sebrae",
      "Mão3D",
      "SUS Digital",
      "Brazilian Ministry of Health",
    ],
  },
  impacto: {
    eyebrow: "Human impact",
    headline:
      "Assistive technology only matters when it fits real people's lives.",
    body: "NeurovIvA is designed to reduce waiting time, expand access and help professionals deliver more personalized care plans.",
    quote: "Making personalized rehabilitation accessible and intelligent.",
    note: "Real patient imagery is pending authorization for institutional use. Until then, this section avoids exposing identifiable patients.",
  },
  equipe: {
    eyebrow: "Team",
    headline: "The team behind NeurovIvA.",
    members: [
      {
        name: "Thabata Ganga",
        role: "CEO",
        bio: "Biomedical Engineer, MSc and PhD candidate. Leads strategy, management, marketing, commercial development, fundraising and institutional relations.",
        specialty: "Strategy, digital health and institutional impact",
      },
      {
        name: "Eduardo Rorato",
        role: "CTO",
        bio: "Industrial Designer, MSc and PhD candidate. Leads development, prototyping, CAD/CAE/CAM and technical documentation.",
        specialty: "Parametric design, additive manufacturing and product",
      },
      {
        name: "Dr. Maria Elizete Kunkel",
        role: "Head of Scientific Council",
        bio: "Professor at UNIFESP. Coordinates applied research, user validation and academic cooperation.",
        specialty: "Applied research and clinical validation",
      },
    ],
    councilTitle: "Scientific council",
    council: [
      "Dr. Mário Oliveira Lima - Rehabilitation",
      "Dr. Alessandro Hakme - Technology",
      "Dr. Rodrigo Dornelles - Medicine",
    ],
  },
  cta: {
    headline: "Ready to talk?",
    subheadline:
      "We're a startup with validated technology and a serious team. If you invest, research, or want to partner, let's talk.",
    primaryLabel: "Email us",
    secondaryLabel: "Talk on WhatsApp",
    whatsappMessage:
      "Hello, I would like to talk about partnering with or investing in Limbse.",
  },
  footer: {
    cnpj: "CNPJ 49.184.418/0001-95",
    city: "São José dos Campos, SP - Brazil",
    copyright: "© 2026 Limbse Assistive Technology",
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
