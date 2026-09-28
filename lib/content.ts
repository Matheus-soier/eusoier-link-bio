const WHATSAPP_NUMBER = "5511975403881";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export type Offer = {
  name: string;
  tag: string;
  description: string;
  cta: string;
  href: string;
};

export type Partner = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  logo: { src: string; width: number; height: number };
  href: string;
  domain: string;
};

export type Social = {
  label: string;
  handle: string;
  href: string;
};

export type Post = {
  src: string;
  alt: string;
};

export const profile = {
  name: "Matheus Soier",
  handle: "@eusoier",
  eyebrow: "IA × Tráfego × Growth",
  headline: "IA aplicada a tráfego e growth.",
  bio: "Para quem quer entender, aplicar e lucrar com IA antes da maioria.",
  location: "São Paulo, BR",
  coordinates: "23.55°S 46.63°W",
  portrait: "/linktree/eusoier-perfil.png",
  url: "https://eusoier.link",
  instagram: "https://www.instagram.com/eusoier/",
  contactHref: whatsappLink("Olá, Matheus! Vim pelo seu site e queria conversar com você."),
};

export const announcement = {
  label: "Turma 04 da Sinapse School · lista de espera aberta",
  href: "https://snps.ai/educacional",
};

export const topics = [
  "Claude Code",
  "Meta Ads",
  "AI Agents",
  "Automação",
  "Criativos com IA",
  "Tráfego pago",
  "Growth",
];

export const school = {
  name: "Sinapse School",
  logo: { src: "/brand/snps-wordmark.png", width: 540, height: 84 },
  tag: "Curso · Turma 04",
  headline: "Aprenda a operar IA pra construir qualquer coisa, do zero.",
  description:
    "Mentoria em grupo ao vivo: IA do básico ao avançado com o repertório de marketing aplicado em cada call.",
  stats: ["8 calls ao vivo", "4 semanas", "100+ formados"],
  cta: "Entrar na lista de espera",
  href: "https://snps.ai/educacional",
  cover: "/linktree/sinapse-club.png",
};

export const mentorships: Offer[] = [
  {
    name: "Mentoria 1:1",
    tag: "Individual",
    description: "Sessões individuais comigo pra aplicar IA na sua operação, no seu contexto.",
    cta: "Agendar pelo WhatsApp",
    href: whatsappLink(
      "Olá, Matheus! Vim pelo seu site e quero saber mais sobre a mentoria individual 1:1.",
    ),
  },
  {
    name: "Mentoria In-Company",
    tag: "Para empresas",
    description: "Treinamento de IA aplicada pro seu time, desenhado para a realidade da sua empresa.",
    cta: "Solicitar proposta",
    href: whatsappLink(
      "Olá, Matheus! Vim pelo seu site e quero saber mais sobre a mentoria in-company para a minha empresa.",
    ),
  },
];

export const partners: Partner[] = [
  {
    name: "Hyper",
    category: "Pagamentos",
    description:
      "Link de pagamento especializado para agências, mentores e prestadores de serviço.",
    highlights: ["PIX D+0", "Onboarding em 2 dias úteis", "CS humano dedicado"],
    logo: { src: "/brand/hyper-logo-white.png", width: 1012, height: 320 },
    href: "https://hyperco.com.br/f/link-de-pagamento",
    domain: "hyperco.com.br",
  },
];

export const socials: Social[] = [
  {
    label: "Instagram",
    handle: "@eusoier",
    href: "https://www.instagram.com/eusoier/",
  },
  {
    label: "YouTube",
    handle: "@eusoier",
    href: "https://www.youtube.com/@eusoier/videos",
  },
  {
    label: "X",
    handle: "@eusoier",
    href: "https://x.com/eusoier",
  },
  {
    label: "Comunidade",
    handle: "WhatsApp",
    href: "https://chat.whatsapp.com/LRLVSVm9WIDEgWNbnQVf0X?mode=gi_t",
  },
];

export const posts: Post[] = [
  { src: "/linktree/instagram/post-1.jpg", alt: "Reel sobre Claude Code no modo workshop" },
  { src: "/linktree/instagram/post-2.jpg", alt: "Reel sobre conector oficial da Meta para Claude" },
  { src: "/linktree/instagram/post-3.jpg", alt: "Reel sobre push notification no Claude Code" },
  { src: "/linktree/instagram/post-4.jpg", alt: "Reel sobre Claude e Creative Cloud" },
  { src: "/linktree/instagram/post-5.jpg", alt: "Reel sobre Claude operando Blender" },
  { src: "/linktree/instagram/post-6.jpg", alt: "Reel sobre Claude Code em terminal e wearable" },
];
