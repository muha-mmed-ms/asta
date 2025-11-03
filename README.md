## Asta Website (Vite + React + Tailwind v4)

Dev setup that mirrors the Figma design structure. Styling uses Tailwind v4 with CSS theme tokens for faithful design mapping.

### Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview build

### How to run

1. Install dependencies
   - `npm install`
2. Start dev server
   - `npm run dev`

### Design tokens

Edit `src/index.css` `@theme` block to match Figma tokens (fonts, colors, spacing). For pixel-perfect accuracy, replace placeholder values with exact Figma values from the design: `https://www.figma.com/design/wzW1NcfnEdBgxs0McBwdO0/Asta-website-revamp?node-id=0-1&p=f&t=AkH2GysAb3oSoq2I-0`.

### Structure

- `src/components/Header.jsx`, `Footer.jsx`
- `src/components/Hero.jsx`, `Features.jsx`, `About.jsx`, `Testimonials.jsx`, `Cta.jsx`
- `src/App.jsx` assembles sections
