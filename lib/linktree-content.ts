import type { ComponentType } from "react";
import {
  BrandInstagram,
  BrandWhatsapp,
  BrandX,
  BrandYoutube,
} from "@/components/brand-icons";

export type LinkBioItem = {
  title: string;
  description: string;
  href: string;
  accent: "cyan" | "lime" | "fuchsia" | "violet";
  icon: ComponentType<{ size?: number; className?: string }>;
};

export type LinkBioSocial = {
  label: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

export type LinkBioPost = {
  src: string;
  alt: string;
};

export const linkBioProfile = {
  name: "Matheus Soier",
  handle: "@eusoier",
  location: "São Paulo, Brasil",
  title: "IA aplicada a tráfego e growth",
  bio: "IA aplicada a tráfego e growth. Lista de espera, bastidores e automações para quem opera com performance.",
  avatarSrc: "/linktree/instagram/profile.png",
  profileUrl: "https://eusoier.link",
  fallbackProfileUrl: "/eusoier",
  instagramHref: "https://www.instagram.com/eusoier/",
};

export const linkBioLinks: LinkBioItem[] = [];

export const linkBioSocials: LinkBioSocial[] = [
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/LRLVSVm9WIDEgWNbnQVf0X?mode=gi_t",
    icon: BrandWhatsapp,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/eusoier/",
    icon: BrandInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@eusoier/videos",
    icon: BrandYoutube,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/eusoier",
    icon: BrandX,
  },
];

export const linkBioPosts: LinkBioPost[] = [
  {
    src: "/linktree/instagram/post-1.jpg",
    alt: "Reel sobre Claude Code no modo workshop",
  },
  {
    src: "/linktree/instagram/post-2.jpg",
    alt: "Reel sobre conector oficial da Meta para Claude",
  },
  {
    src: "/linktree/instagram/post-3.jpg",
    alt: "Reel sobre push notification no Claude Code",
  },
  {
    src: "/linktree/instagram/post-4.jpg",
    alt: "Reel sobre Claude e Creative Cloud",
  },
  {
    src: "/linktree/instagram/post-5.jpg",
    alt: "Reel sobre Claude operando Blender",
  },
  {
    src: "/linktree/instagram/post-6.jpg",
    alt: "Reel sobre Claude Code em terminal e wearable",
  },
];
