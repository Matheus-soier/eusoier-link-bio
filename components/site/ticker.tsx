// Infinite horizontal marquee; the list is rendered twice so the loop is seamless.
export const Ticker = ({ items }: { items: string[] }) => (
  <div
    className="relative overflow-hidden border-y border-line py-4 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
    aria-label={items.join(", ")}
  >
    <div className="ticker-track flex w-max gap-10" aria-hidden="true">
      {[...items, ...items].map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
        >
          {item}
          <span className="text-accent">✦</span>
        </span>
      ))}
    </div>
  </div>
);
