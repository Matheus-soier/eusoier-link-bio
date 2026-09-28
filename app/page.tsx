import Image from "next/image";
import { LinkList } from "@/components/site/link-list";
import { MobileMenu } from "@/components/site/mobile-menu";
import { Parallax } from "@/components/site/parallax";
import { PartnerCard } from "@/components/site/partner-card";
import { ScrambleText } from "@/components/site/scramble-text";
import { education, profile, socials } from "@/lib/content";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">{children}</p>
);

export default function HomePage() {
  return (
    <Parallax className="relative h-dvh w-screen overflow-hidden bg-bg text-ink">
      {/* Name marquee running behind the photo */}
      <div
        aria-hidden="true"
        className="reveal pointer-events-none absolute inset-x-0 top-[27dvh] select-none md:top-[8dvh]"
        style={delay(0)}
      >
        <div className="depth-back">
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <span
                key={copy}
                className="whitespace-nowrap pr-[0.4em] text-[31vw] font-semibold leading-none tracking-[-0.07em] text-ink/[0.05] md:text-[21vw]"
              >
                {profile.name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Photo, anchored to the bottom and centered */}
      <div
        className="reveal absolute bottom-0 left-1/2 aspect-[1600/1361] h-[70dvh] -translate-x-1/2 md:h-[86dvh]"
        style={delay(150)}
      >
        <div className="depth-photo relative h-full w-full">
          <Image
            src={profile.photo.src}
            alt={`Foto de ${profile.name}`}
            fill
            priority
            sizes="(min-width: 768px) 100vh, 85vh"
            className="object-contain object-bottom md:[mask-composite:intersect] md:[mask-image:linear-gradient(to_bottom,#000_60%,transparent_95%),linear-gradient(to_right,transparent,#000_18%,#000_82%,transparent)]"
          />
        </div>
      </div>

      {/* Top bar */}
      <header
        className="reveal absolute inset-x-0 top-0 z-20 flex items-start justify-between p-5 md:p-8"
        style={delay(0)}
      >
        <div>
          <h1 className="font-mono text-[12px] uppercase tracking-[0.18em]">{profile.name}</h1>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">
            <ScrambleText text={profile.eyebrow} delay={400} />
          </p>
        </div>
        <a
          href={profile.contactHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-80"
        >
          Falar comigo
        </a>
      </header>

      {/* Mobile headline */}
      <p
        className="reveal absolute inset-x-5 top-[88px] z-20 max-w-[18rem] text-[22px] font-medium leading-[1.15] tracking-[-0.03em] md:hidden"
        style={delay(100)}
      >
        {profile.headline}
      </p>

      {/* Left column: headline + education */}
      <aside
        className="reveal absolute left-8 top-1/2 z-20 hidden w-[clamp(220px,19vw,270px)] -translate-y-1/2 md:block"
        style={delay(300)}
      >
        <div className="depth-front">
          <p className="text-[24px] font-medium leading-[1.1] tracking-[-0.035em]">{profile.headline}</p>
          <p className="mt-3 text-[13px] leading-relaxed text-ink/55">{profile.bio}</p>
          <div className="mt-8">
            <Label>/educação</Label>
            <LinkList items={education} numbered />
          </div>
        </div>
      </aside>

      {/* Right column: partner + socials */}
      <aside
        className="reveal absolute right-8 top-1/2 z-20 hidden w-[clamp(220px,19vw,270px)] -translate-y-1/2 md:block"
        style={delay(400)}
      >
        <div className="depth-front">
          <Label>/parceiro</Label>
          <PartnerCard />
          <div className="mt-8">
            <Label>/redes</Label>
            <LinkList items={socials} />
          </div>
        </div>
      </aside>

      {/* Bottom corners (desktop) */}
      <footer
        className="reveal absolute inset-x-0 bottom-0 z-20 hidden justify-between p-8 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45 md:flex"
        style={delay(500)}
      >
        <span>
          {profile.location} · {profile.coordinates}
        </span>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </footer>

      <MobileMenu />
    </Parallax>
  );
}
