import Image from "next/image";
import { ArrowRight, ArrowUpRight, Building2, MessageCircle, UserRound } from "lucide-react";
import { Portrait } from "@/components/site/portrait";
import { Reveal } from "@/components/site/reveal";
import { ScrambleText } from "@/components/site/scramble-text";
import { SpotlightCard } from "@/components/site/spotlight-card";
import { Ticker } from "@/components/site/ticker";
import {
  announcement,
  mentorships,
  partners,
  posts,
  profile,
  school,
  socials,
  topics,
} from "@/lib/content";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

const nav = [
  { label: "Educação", href: "#educacao" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Conteúdo", href: "#conteudo" },
];

const mentorshipIcons = [UserRound, Building2];

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
    {children}
  </span>
);

const SectionHeading = ({
  id,
  label,
  title,
  description,
}: {
  id: string;
  label: string;
  title: string;
  description?: string;
}) => (
  <div id={id} className="mb-8 flex flex-col gap-3 sm:mb-10">
    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">/{label}</span>
    <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">{title}</h2>
    {description && <p className="max-w-md text-muted">{description}</p>}
  </div>
);

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="font-mono text-[12px] uppercase tracking-[0.16em] text-fg">
            eusoier<span className="text-accent">.</span>link
          </a>

          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-fg">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <a
              href={profile.contactHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-fg px-4 py-2 text-[13px] font-medium text-bg transition-opacity hover:opacity-85"
            >
              Falar comigo
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Hero */}
        <section className="grid items-center gap-12 pb-16 pt-14 md:grid-cols-[1fr_auto] md:gap-16 md:pb-24 md:pt-24">
          <div>
            <a
              href={announcement.href}
              target="_blank"
              rel="noreferrer"
              className="reveal group inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] py-1 pl-2 pr-3 text-[12px] text-muted transition-colors hover:border-fg/20 hover:text-fg"
              style={delay(0)}
            >
              <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                Novo
              </span>
              {announcement.label}
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </a>

            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              <ScrambleText text={profile.eyebrow} delay={200} />
            </p>

            <h1
              className="reveal mt-4 text-[clamp(3rem,10vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.055em]"
              style={delay(120)}
            >
              Matheus
              <br />
              <span className="text-fg/45">Soier</span>
            </h1>

            <p
              className="reveal mt-7 max-w-[30rem] text-lg leading-relaxed tracking-[-0.01em] text-muted sm:text-xl"
              style={delay(240)}
            >
              <span className="text-fg">{profile.headline}</span> {profile.bio}
            </p>

            <div className="reveal mt-9 flex flex-wrap gap-3" style={delay(360)}>
              <a
                href={school.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-black transition-[filter] hover:brightness-110"
              >
                Conhecer a {school.name}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#educacao"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-fg transition-colors hover:border-fg/30 hover:bg-white/[0.03]"
              >
                Ver mentorias
              </a>
            </div>
          </div>

          <div className="reveal justify-self-start md:justify-self-end" style={delay(200)}>
            <Portrait
              src={profile.portrait}
              alt={`Foto de ${profile.name}`}
              caption={profile.handle}
              location={profile.location}
            />
          </div>
        </section>

        <Ticker items={topics} />

        {/* Educação */}
        <section className="pt-24 sm:pt-32">
          <Reveal>
            <SectionHeading
              id="educacao"
              label="educação"
              title="Aprenda IA comigo"
              description="Do curso em grupo à mentoria individual ou para o seu time."
            />
          </Reveal>

          <Reveal className="grid gap-3 md:grid-cols-2">
            <SpotlightCard href={school.href} className="flex min-h-[420px] flex-col p-7 md:row-span-2 sm:p-8">
              <Image
                src={school.cover}
                alt=""
                fill
                sizes="(min-width: 768px) 500px, 100vw"
                className="-z-20 scale-125 object-cover opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-card via-card/80 to-card/20"
              />

              <div className="flex items-center justify-between">
                <Chip>{school.tag}</Chip>
                <ArrowUpRight
                  size={18}
                  className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                />
              </div>

              <div className="mt-auto pt-16">
                <Image
                  src={school.logo.src}
                  alt={school.name}
                  width={school.logo.width}
                  height={school.logo.height}
                  className="h-6 w-auto sm:h-7"
                />
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {school.name}
                </p>
                <h3 className="mt-6 max-w-sm text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-[28px]">
                  {school.headline}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{school.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {school.stats.map((stat) => (
                    <Chip key={stat}>{stat}</Chip>
                  ))}
                </div>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  {school.cta}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </SpotlightCard>

            {mentorships.map((offer, i) => {
              const Icon = mentorshipIcons[i];
              return (
                <SpotlightCard key={offer.name} href={offer.href} className="flex flex-col p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-fg">
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <Chip>{offer.tag}</Chip>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-[-0.03em]">{offer.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{offer.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-fg">
                    <MessageCircle size={15} className="text-accent" />
                    {offer.cta}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </SpotlightCard>
              );
            })}
          </Reveal>
        </section>

        {/* Parceiros */}
        <section className="pt-24 sm:pt-32">
          <Reveal>
            <SectionHeading id="parceiros" label="parceiros" title="Parceiros" />
          </Reveal>

          <Reveal className="grid gap-3">
            {partners.map((partner) => (
              <SpotlightCard
                key={partner.name}
                href={partner.href}
                glow="rgba(108, 235, 88, 0.12)"
                className="grid gap-8 p-7 sm:p-8 md:grid-cols-[220px_1fr_auto] md:items-center"
              >
                <div
                  aria-hidden="true"
                  className="absolute -left-20 -top-24 -z-10 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(108,235,88,0.14),transparent)]"
                />
                <div className="flex flex-col gap-4">
                  <Image
                    src={partner.logo.src}
                    alt={partner.name}
                    width={partner.logo.width}
                    height={partner.logo.height}
                    className="h-9 w-auto self-start"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Parceiro oficial · {partner.category}
                  </span>
                </div>

                <div>
                  <p className="max-w-md text-lg leading-snug tracking-[-0.02em] text-fg">
                    {partner.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {partner.highlights.map((highlight) => (
                      <Chip key={highlight}>{highlight}</Chip>
                    ))}
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-fg">
                  {partner.domain}
                  <ArrowUpRight size={14} />
                </span>
              </SpotlightCard>
            ))}
          </Reveal>
        </section>

        {/* Conteúdo */}
        <section className="pt-24 sm:pt-32">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <SectionHeading id="conteudo" label="conteúdo" title="Últimos conteúdos" />
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="mb-8 hidden items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-fg sm:mb-10 sm:inline-flex"
              >
                Ver no Instagram <ArrowUpRight size={13} />
              </a>
            </div>
          </Reveal>

          <Reveal className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
            {posts.map((post) => (
              <a
                key={post.src}
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-line"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 640px) 160px, 33vw"
                  className="object-cover opacity-70 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </a>
            ))}
          </Reveal>
        </section>

        {/* Contato */}
        <section id="contato" className="py-24 sm:py-32">
          <Reveal>
            <SpotlightCard className="px-7 py-14 text-center sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 mx-auto h-80 w-[36rem] max-w-full rounded-full bg-[radial-gradient(closest-side,rgba(198,255,61,0.12),transparent)]"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">/contato</span>
              <h2 className="mx-auto mt-5 max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                Vamos construir com IA?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted">
                Me acompanhe nas redes e entre na comunidade.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-fg/30 hover:text-fg"
                  >
                    {social.label}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>
            {profile.location} · {profile.coordinates}
          </span>
        </div>
      </footer>
    </>
  );
}
