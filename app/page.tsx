import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Clock } from "@/components/site/clock";
import { Portrait } from "@/components/site/portrait";
import { ProjectList } from "@/components/site/project-list";
import { ScrambleText } from "@/components/site/scramble-text";
import { posts, profile, projects, socials } from "@/lib/content";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

const Section = ({
  label,
  delayMs,
  children,
}: {
  label: string;
  delayMs: number;
  children: React.ReactNode;
}) => (
  <section
    className="reveal grid gap-5 py-10 sm:grid-cols-[120px_1fr] sm:gap-8"
    style={delay(delayMs)}
  >
    <h2 className="pt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
      /{label}
    </h2>
    <div>{children}</div>
  </section>
);

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col px-5 sm:px-8">
      <header
        className="reveal flex items-center justify-between py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
        style={delay(0)}
      >
        <span className="text-fg">eusoier.link</span>
        <span className="flex items-center gap-2">
          <span className="blink h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="hidden sm:inline">{profile.location} ·</span>
          <Clock />
        </span>
      </header>

      <main className="flex-1">
        <section className="pb-12 pt-14 sm:pb-16 sm:pt-24">
          <div className="reveal" style={delay(100)}>
            <Portrait src={profile.portrait} alt={`Foto de ${profile.name}`} />
          </div>

          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            <ScrambleText text={profile.eyebrow} delay={250} />
          </p>

          <h1
            className="reveal mt-4 text-[clamp(2.75rem,10vw,5.75rem)] font-medium leading-[0.95] tracking-[-0.05em]"
            style={delay(200)}
          >
            {profile.name}
          </h1>

          <p
            className="reveal mt-6 max-w-[34rem] text-lg leading-relaxed tracking-[-0.01em] text-muted sm:text-xl"
            style={delay(320)}
          >
            <span className="text-fg">{profile.headline}</span> {profile.bio}
          </p>
        </section>

        <Section label="projetos" delayMs={440}>
          <ProjectList projects={projects} />
        </Section>

        <Section label="conteudo" delayMs={540}>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {posts.map((post) => (
              <a
                key={post.src}
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-[3px] border border-line"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 640px) 100px, 33vw"
                  className="object-cover opacity-70 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </a>
            ))}
          </div>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-fg"
          >
            Ver tudo no Instagram <ArrowUpRight size={12} />
          </a>
        </Section>

        <Section label="contato" delayMs={640}>
          <ul>
            {socials.map((social, i) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex items-center justify-between border-b border-line py-3.5 transition-colors hover:border-fg/30 ${i === 0 ? "border-t" : ""}`}
                >
                  <span className="text-fg transition-transform duration-300 group-hover:translate-x-1">
                    {social.label}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-muted transition-colors group-hover:text-fg">
                    {social.handle}
                    <ArrowUpRight size={14} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer
        className="reveal mt-10 flex items-center justify-between border-t border-line py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
        style={delay(740)}
      >
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.coordinates}</span>
      </footer>
    </div>
  );
}
