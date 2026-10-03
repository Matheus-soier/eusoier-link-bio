"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, LayoutGrid, X } from "lucide-react";
import { company, education, profile, socials } from "@/lib/content";
import { cn } from "@/components/ui/cn";
import { LinkList } from "@/components/site/link-list";
import { PartnerCard } from "@/components/site/partner-card";
import { CompanyCard } from "@/components/site/company-card";
import { BRANDS, BrandIcon } from "@/components/site/brand-icons";

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">{children}</p>
);

// Explore opens the same link sheet on mobile and desktop.
export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!open) return;
    if (contentRef.current) contentRef.current.scrollTop = 0;
    // Focus once the sheet has slid in; preventScroll stops iOS from jumping the page.
    const focus = window.setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 450);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;
      const controls = sheetRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focus);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeMenu]);

  return (
    <div>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-sheet"
        className="explore-button glass-dark absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5 rounded-full py-3 pl-4 pr-5 text-[14px] font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <LayoutGrid size={16} strokeWidth={1.8} />
        Explorar
      </button>

      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={cn(
          "absolute inset-0 z-40 bg-ink/20 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        ref={sheetRef}
        id="mobile-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Links"
        inert={!open}
        className={cn(
          "glass-light absolute inset-x-2 bottom-2 z-50 flex max-h-[82dvh] flex-col rounded-[28px] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform md:inset-x-auto md:left-1/2 md:w-[420px] md:max-w-[calc(100vw-4rem)] md:-translate-x-1/2",
          open ? "translate-y-0" : "translate-y-[110%]",
        )}
      >
        <div className="flex items-center justify-between px-5 pb-2 pt-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
            {profile.name}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={closeMenu}
            aria-label="Fechar"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink outline-none transition-colors hover:bg-ink/10 focus-visible:ring-2 focus-visible:ring-ink/40"
          >
            <X size={16} />
          </button>
        </div>

        <div
          ref={contentRef}
          className="flex flex-col gap-5 overflow-y-auto overscroll-contain px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2"
        >
          <section aria-label={company.name}>
            <CompanyCard />
          </section>
          <section>
            <Label>/educação</Label>
            <LinkList items={education} numbered />
          </section>
          <section>
            <Label>/parceiro</Label>
            <PartnerCard />
          </section>
          <section>
            <Label>/redes</Label>
            <ul className="grid grid-cols-2 gap-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 rounded-xl border border-ink/10 bg-white/60 px-3.5 py-3 text-[14px] font-medium tracking-[-0.02em] text-ink transition-colors active:bg-white"
                  >
                    {social.brand && (
                      <BrandIcon
                        brand={social.brand}
                        size={16}
                        className="shrink-0"
                        style={{ color: BRANDS[social.brand].color }}
                      />
                    )}
                    <span className="flex-1">{social.name}</span>
                    <ArrowUpRight size={14} className="text-ink/40" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
