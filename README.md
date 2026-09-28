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

```
app/
  layout.tsx            # Root layout, fontes (Geist / Geist Mono) e metadata
  page.tsx              # Página única: hero, /projetos, /conteudo, /contato
  globals.css           # Tokens de cor, grid de pontos e animações
components/site/
  clock.tsx             # Relógio ao vivo (horário de São Paulo)
  scramble-text.tsx     # Efeito de "decodificação" do texto
  project-list.tsx      # Lista de projetos com preview que segue o cursor
  portrait.tsx          # Retrato P&B com scanlines
components/ui/cn.ts     # Helper clsx + tailwind-merge
lib/
  content.ts            # Todo o conteúdo: perfil, projetos, redes, posts
public/linktree/        # Foto, capas dos projetos e thumbs do Instagram
```

Para editar textos, projetos ou redes sociais, ajuste apenas `lib/content.ts`.
