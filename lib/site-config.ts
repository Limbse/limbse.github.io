export const siteConfig = {
  name: "Limbse Tecnologia Assistiva",
  tagline: "Design que Transforma. Tecnologia que Fortalece.",
  email: "contato@limbse.com",
  whatsappNumber: "+5511993232324",
  linkedin: "https://www.linkedin.com/company/limbse",
  instagram: "https://www.instagram.com/limbse",
  plausibleDomain: "limbse.com",
  cnpj: "49.184.418/0001-95",
  city: "São José dos Campos, SP",
};

export function getWhatsAppUrl(message?: string) {
  if (!siteConfig.whatsappNumber) return `mailto:${siteConfig.email}`;

  const baseUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

  if (!message) return baseUrl;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export function hasWhatsAppNumber() {
  return Boolean(siteConfig.whatsappNumber);
}
