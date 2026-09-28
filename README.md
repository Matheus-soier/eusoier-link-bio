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
educação à esquerda, parceiro e redes à direita. No mobile, os links ficam numa
aba em liquid glass aberta pelo botão "Explorar".

```
app/
  layout.tsx            # Root layout, fontes (Geist / Geist Mono) e metadata
  page.tsx              # Layout da tela única (desktop + mobile)
  globals.css           # Tokens, liquid glass e animações
components/site/
  link-list.tsx         # Lista de links com seta e sublinhado no hover
  partner-card.tsx      # Card do parceiro (Hyper)
  mobile-menu.tsx       # Botão "Explorar" + aba com todos os links (mobile)
  scramble-text.tsx     # Efeito de "decodificação" do texto
components/ui/cn.ts     # Helper clsx + tailwind-merge
lib/
  content.ts            # Todo o conteúdo: perfil, educação, parceiro, redes
public/brand/           # Foto recortada, logos da Hyper e da SNPS
```

Para editar textos ou links, ajuste apenas `lib/content.ts`.
