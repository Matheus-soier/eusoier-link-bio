import type { Brand } from "@/components/site/brand-icons";

const WHATSAPP_NUMBER = "5511975403881";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export type LinkItem = {
  name: string;
  meta: string;
  href: string;
  brand?: Brand;
};

export const profile = {
  name: "Matheus Soier",
  handle: "@eusoier",
  eyebrow: "IA × Tráfego × Growth",
  headline: "IA aplicada a tráfego e growth.",
  bio: "Para quem quer entender, aplicar e lucrar com IA antes da maioria.",
  location: "São Paulo, BR",
  coordinates: "23.55°S 46.63°W",
  url: "https://matheussoier.com",
  contactHref: whatsappLink("Olá, Matheus! Vim pelo seu site e queria conversar com você."),
};

export const education: LinkItem[] = [
  {
    name: "Sinapse School",
    meta: "Curso gravado",
    href: "https://school.snps.ai/matheus",
  },
  {
    name: "Guias gratuitos",
    meta: "Grátis · passo a passo",
    href: "https://snps.ai/guias",
  },
  {
    name: "Mentoria 1:1",
    meta: "Individual · WhatsApp",
    href: whatsappLink(
      "Olá, Matheus! Vim pelo seu site e quero saber mais sobre a mentoria individual 1:1.",
    ),
  },
  {
    name: "Mentoria In-Company",
    meta: "Para empresas · WhatsApp",
    href: whatsappLink(
      "Olá, Matheus! Vim pelo seu site e quero saber mais sobre a mentoria in-company para a minha empresa.",
    ),
  },
];

export const partner = {
  name: "Hyper",
  label: "Parceiro oficial · Pagamentos",
  description: "Link de pagamento para agências, mentores e prestadores de serviço.",
  logo: { src: "/brand/hyper-logo-black.png", width: 1012, height: 320 },
  href: "https://hyperco.com.br/f/link-de-pagamento",
};

export const socials: LinkItem[] = [
  {
    name: "Instagram",
    meta: "@eusoier",
    href: "https://www.instagram.com/eusoier/",
    brand: "instagram",
  },
  {
    name: "YouTube",
    meta: "@eusoier",
    href: "https://www.youtube.com/@eusoier/videos",
    brand: "youtube",
  },
  { name: "X", meta: "@eusoier", href: "https://x.com/eusoier", brand: "x" },
  {
    name: "Comunidade",
    meta: "WhatsApp",
    href: "https://chat.whatsapp.com/LRLVSVm9WIDEgWNbnQVf0X?mode=gi_t",
    brand: "whatsapp",
  },
];
