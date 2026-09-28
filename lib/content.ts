export type Project = {
  index: string;
  name: string;
  description: string;
  href: string;
  domain: string;
  image: string;
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
};

export const projects: Project[] = [
  {
    index: "01",
    name: "SINAPSE Club",
    description: "Comunidade de IA aplicada",
    href: "https://snps.ai/",
    domain: "snps.ai",
    image: "/linktree/sinapse-club.png",
  },
  {
    index: "02",
    name: "HyperCash",
    description: "Pagamentos",
    href: "https://hyperco.com.br/f/link-de-pagamento",
    domain: "hyperco.com.br",
    image: "/linktree/hypercash.png",
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
    label: "WhatsApp",
    handle: "Comunidade",
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
