import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/lib/content";
import { cn } from "@/components/ui/cn";
import { BRANDS, BrandIcon } from "@/components/site/brand-icons";

type LinkListProps = {
  items: LinkItem[];
  numbered?: boolean;
  className?: string;
};

export const LinkList = ({ items, numbered = false, className }: LinkListProps) => (
  <ul className={cn("border-t border-ink/10", className)}>
    {items.map((item, i) => (
      <li key={item.name}>
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center gap-3 border-b border-ink/10 py-3.5 outline-none"
        >
          {numbered && (
            <span className="w-5 font-mono text-[10px] text-ink/35">
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          {item.brand && (
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors duration-300 group-hover:text-[var(--brand)]"
              style={{ "--brand": BRANDS[item.brand].color } as React.CSSProperties}
            >
              <BrandIcon brand={item.brand} size={16} />
            </span>
          )}
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="text-[15px] font-medium tracking-[-0.02em] text-ink transition-transform duration-300 group-hover:translate-x-1">
              {item.name}
            </span>
            <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">
              {item.meta}
            </span>
          </span>
          <ArrowUpRight
            size={15}
            className="shrink-0 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-px left-0 h-px w-0 bg-ink transition-[width] duration-500 group-hover:w-full group-focus-visible:w-full"
          />
        </a>
      </li>
    ))}
  </ul>
);
