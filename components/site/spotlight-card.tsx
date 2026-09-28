"use client";

import { cn } from "@/components/ui/cn";

type SpotlightCardProps = {
  href?: string;
  glow?: string;
  className?: string;
  children: React.ReactNode;
};

// Card with a soft light that follows the cursor. Renders a link when `href` is set.
export const SpotlightCard = ({
  href,
  glow = "rgba(198, 255, 61, 0.09)",
  className,
  children,
}: SpotlightCardProps) => {
  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  const classes = cn(
    "group relative isolate overflow-hidden rounded-2xl border border-line bg-card",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors duration-300 hover:border-fg/20",
    className,
  );

  const light = (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: `radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), ${glow}, transparent 60%)`,
      }}
    />
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onPointerMove={handlePointerMove}
        className={classes}
      >
        {light}
        {children}
      </a>
    );
  }

  return (
    <div onPointerMove={handlePointerMove} className={classes}>
      {light}
      {children}
    </div>
  );
};
