# eusoier-link-bio

Portfólio pessoal do [@eusoier](https://instagram.com/eusoier) — Matheus Soier, IA aplicada a tráfego e growth.

Online em **[matheussoier.com](https://matheussoier.com)**.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS 4
- TypeScript
- lucide-react para ícones

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

Página única, sem scroll (100dvh × 100vw): foto centralizada sobre fundo branco,
educação à esquerda, parceiro e redes à direita. O botão "Explorar" abre uma aba
com todos os links no computador e no celular. O card da SINAPSE aparece apenas
nessa aba, com a logo oficial e acesso ao site da empresa.

```
app/
  layout.tsx            # Root layout, fontes (Geist / Geist Mono) e metadata
  page.tsx              # Layout da tela única (desktop + mobile)
  globals.css           # Tokens, liquid glass e animações
components/site/
  link-list.tsx         # Lista de links com seta e sublinhado no hover
  company-card.tsx      # Card da SINAPSE com logo oficial e acesso a sinapse.si
  partner-card.tsx      # Card do parceiro (Hyper)
  mobile-menu.tsx       # Botão "Explorar" + aba com todos os links
  scramble-text.tsx     # Efeito de "decodificação" do texto
components/ui/cn.ts     # Helper clsx + tailwind-merge
lib/
  content.ts            # Todo o conteúdo: perfil, empresa, educação, parceiro, redes
public/brand/           # Foto recortada, logos da Hyper e da SNPS
```

Para editar textos ou links, ajuste apenas `lib/content.ts`.

A logo da SINAPSE em `public/brand/sinapse-wordmark-official.svg` é o SVG original
de [sinapse.si](https://sinapse.si/sinapse-portal/assets/brand/sinapse-wordmark-clean.svg),
baixado em 03/10/2026. SHA-256: `f9eab980b299ce66eb1ca304569650a8ac1f62a18329cd5004640e2baf1d8f79`.
