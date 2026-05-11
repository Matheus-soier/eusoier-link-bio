import Image from "next/image";
import { Verified } from "lucide-react";
import { linkBioProfile, linkBioSocials } from "@/lib/linktree-content";

export const LinkBioProfile = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] pb-5 text-white">
      <article className="w-full overflow-hidden bg-[#0a0a0a] shadow-[0_18px_60px_rgba(0,0,0,0.4)]">
        <div className="relative overflow-hidden px-5 pb-7 pt-12 text-center">
          <video
            src="/linktree/cover.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover grayscale"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/55"
          />

          <div className="relative flex justify-center">
            <div className="rounded-full bg-white p-[1px] shadow-[0_0_24px_rgba(0,0,0,0.35)]">
              <Image
                src={linkBioProfile.avatarSrc}
                alt="Foto do perfil de eusoier"
                width={104}
                height={104}
                priority
                className="h-[104px] w-[104px] rounded-full border-2 border-white object-cover"
              />
            </div>
          </div>

          <div className="relative mt-4 flex items-center justify-center gap-1.5">
            <h1 className="text-2xl font-bold tracking-[-0.04em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {linkBioProfile.name}
            </h1>
            <Verified
              size={18}
              className="fill-white text-[#1a1a1a]"
              aria-label="Perfil verificado"
            />
          </div>
          <p className="relative mt-2 text-sm font-medium text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
            {linkBioProfile.title}
          </p>
        </div>

        <div className="mx-auto max-w-[430px] px-5 pb-6 pt-4 text-center">
          <p className="mx-auto mt-1 max-w-[330px] text-sm font-semibold leading-5 tracking-[-0.02em] text-white">
            Para quem quer entender, aplicar e lucrar com IA antes da maioria.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            {linkBioSocials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2a2a2a] bg-transparent text-white transition hover:border-white hover:bg-white hover:text-[#0a0a0a]"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <a
            href="https://snps.ai/"
            target="_blank"
            rel="noreferrer"
            className="group mt-7 block overflow-hidden rounded-[10px] border border-[#2a2a2a] bg-[#1a1a1a] text-left transition"
            aria-label="Acesso à Sinapse"
          >
            <div className="overflow-hidden">
              <Image
                src="/linktree/sinapse-club.png"
                alt="SINAPSE Club"
                width={760}
                height={400}
                className="h-auto w-full transition group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-center border-t border-[#2a2a2a] bg-[#111] px-4 py-3 text-sm font-semibold text-white transition">
              Acesso à Sinapse
            </div>
          </a>

          <a
            href="https://sp3company.com/"
            target="_blank"
            rel="noreferrer"
            className="group mt-5 block overflow-hidden rounded-[10px] border border-[#2a2a2a] bg-[#1a1a1a] text-left transition"
            aria-label="Acessar o site SP3 Company"
          >
            <div className="overflow-hidden">
              <Image
                src="/linktree/sp3-company.png"
                alt="SP3 Company"
                width={760}
                height={400}
                className="h-auto w-full transition group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-center border-t border-[#2a2a2a] bg-[#111] px-4 py-3 text-sm font-semibold text-white transition">
              Acesso ao site
            </div>
          </a>

          <a
            href="https://www.mindloop.com.br/"
            target="_blank"
            rel="noreferrer"
            className="group mt-5 block overflow-hidden rounded-[10px] border border-[#2a2a2a] bg-[#1a1a1a] text-left transition"
            aria-label="Acessar o site Mindloop"
          >
            <div className="overflow-hidden">
              <Image
                src="/linktree/icon-mindloop.png"
                alt="Mindloop"
                width={760}
                height={400}
                className="h-auto w-full transition group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-center border-t border-[#2a2a2a] bg-[#111] px-4 py-3 text-sm font-semibold text-white transition">
              Acesso ao site
            </div>
          </a>

          <a
            href="https://sociosai.info/"
            target="_blank"
            rel="noreferrer"
            className="group mt-5 block overflow-hidden rounded-[10px] border border-[#2a2a2a] bg-[#b2f691] text-left transition"
            aria-label="Acessar o site Sócios AI"
          >
            <div className="overflow-hidden">
              <Image
                src="/linktree/icon-socios-ai.png"
                alt="Sócios AI"
                width={760}
                height={400}
                className="h-auto w-full transition group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-center border-t border-[#2a2a2a] bg-[#111] px-4 py-3 text-sm font-semibold text-white transition">
              Acesso ao site
            </div>
          </a>

          <a
            href="https://www.hypercash.com.br/?utm_source=googleads&utm_medium=branding&matchtype=p&keyword=hypercash&utm_source=google&utm_medium=cpc&utm_campaign=22237028079&utm_adgroup=175018595717&utm_content=797054807247-&utm_term=hypercash&gad_source=1&gad_campaignid=22237028079&gbraid=0AAAAA-ae8gvBsf_xAdIOUhbJsdkfUfT1c&gclid=Cj0KCQjw2YDQBhD_ARIsAE1qeSfIQOMXk089LcXt6YSp2igLTEW4NU8v0GuymYcBU0wB82tXSX7CpmEaAjKlEALw_wcB"
            target="_blank"
            rel="noreferrer"
            className="group mt-5 block overflow-hidden rounded-[10px] border border-[#2a2a2a] bg-[#0d2a1a] text-left transition"
            aria-label="Acessar o site HyperCash"
          >
            <div className="overflow-hidden">
              <Image
                src="/linktree/hypercash.png"
                alt="HyperCash"
                width={760}
                height={400}
                className="h-auto w-full transition group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-center border-t border-[#2a2a2a] bg-[#111] px-4 py-3 text-sm font-semibold text-white transition">
              Acesso ao site
            </div>
          </a>

          <a
            href="https://www.rocketseat.com.br/eventos/aniversario-rocketseat?v=pro&utm_source=instagram&utm_medium=stories&utm_campaign=influencer&utm_term=aniversario-rocketseat-publico-ia&utm_content=inscricao_eusoier"
            target="_blank"
            rel="noreferrer"
            className="group mt-5 block overflow-hidden rounded-[10px] border border-[#2a2a2a] bg-[#8257e5] text-left transition"
            aria-label="Acessar o site Rocketseat"
          >
            <div className="overflow-hidden">
              <Image
                src="/linktree/rocketseat.png"
                alt="Rocketseat"
                width={760}
                height={400}
                className="h-auto w-full transition group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-center border-t border-[#2a2a2a] bg-[#111] px-4 py-3 text-sm font-semibold text-white transition">
              Acesso ao site
            </div>
          </a>

        </div>

      </article>
    </section>
  );
};
