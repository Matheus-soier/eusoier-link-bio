import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { partner } from "@/lib/content";

export const PartnerCard = () => (
  <a
    href={partner.href}
    target="_blank"
    rel="noreferrer"
    className="group block rounded-2xl border border-ink/10 bg-white/60 p-4 transition-colors hover:border-ink/25"
  >
    <div className="flex items-center justify-between">
      <Image
        src={partner.logo.src}
        alt={partner.name}
        width={partner.logo.width}
        height={partner.logo.height}
        className="h-6 w-auto"
      />
      <ArrowUpRight
        size={15}
        className="text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
      />
    </div>
    <p className="mt-3 text-[13px] leading-snug text-ink/70">{partner.description}</p>
    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">
      {partner.label}
    </p>
  </a>
);
