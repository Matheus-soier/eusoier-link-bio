import { ArrowUpRight } from "lucide-react";
import { company } from "@/lib/content";

export const CompanyCard = () => (
  <a
    href={company.href}
    target="_blank"
    rel="noopener noreferrer"
    className="company-card group block rounded-2xl bg-ink p-4 text-white outline-none transition-colors hover:bg-ink/90 focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 active:bg-ink/80 motion-reduce:transition-none"
  >
    <p className="company-eyebrow font-mono text-[10px] uppercase tracking-[0.16em] text-white/65">
      {company.label}
    </p>
    <h2 className="company-name mt-2 text-[22px] font-semibold leading-tight tracking-[-0.035em]">
      {company.name}
    </h2>
    <p className="mt-1 max-w-[17rem] text-[14px] leading-snug text-white/85">
      {company.tagline}
    </p>
    <div className="company-cta mt-4 flex items-center justify-between gap-3 border-t border-white/20 pt-3">
      <span className="text-[12px] font-medium">{company.cta}</span>
      <ArrowUpRight
        size={16}
        aria-hidden="true"
        className="shrink-0 text-white/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none"
      />
    </div>
  </a>
);
