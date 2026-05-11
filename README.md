# eusoier-link-bio

Link na bio do [@eusoier](https://instagram.com/eusoier) — Matheus Soier, IA aplicada a tráfego e growth.

Online em **[eusoier.link](https://eusoier.link)**.

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
  layout.tsx          # Root layout + metadata
  page.tsx            # Renderiza o LinkBioProfile
  globals.css         # Tailwind + variáveis CSS
components/
  link-bio-profile.tsx  # Componente principal da página
  brand-icons.tsx       # Ícones de marca (WhatsApp, Instagram, etc.)
  ui/cn.ts              # Helper clsx + tailwind-merge
lib/
  linktree-content.ts   # Conteúdo: perfil, redes sociais, links
public/linktree/        # Avatares, capas, logos dos cards
```

Para editar links, perfil ou redes sociais, ajuste `lib/linktree-content.ts` e os blocos de cards em `components/link-bio-profile.tsx`.
