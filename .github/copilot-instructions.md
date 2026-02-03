# Portfolio Website - AI Coding Agent Instructions

## Project Overview
Next.js 16 portfolio website using App Router, TypeScript, Tailwind CSS v4, and Biome for linting/formatting. Built with React 19 and managed via pnpm.

## Architecture & Structure
- **Framework**: Next.js App Router (`app/` directory) with TypeScript
- **Styling**: Tailwind CSS v4 (modern PostCSS-based configuration) + custom CSS variables
- **Code Quality**: Biome (replaces ESLint + Prettier) with Next.js and React domain rules
- **Package Manager**: pnpm with workspace configuration (ignores sharp, unrs-resolver)
- **Fonts**: Geist Sans & Geist Mono loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx)

## Critical Workflows

### Development
```bash
pnpm dev          # Start dev server (http://localhost:3000)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run Biome checks (biome check)
pnpm format       # Auto-format with Biome (biome format --write)
```

### Code Quality
- **Biome** handles both linting and formatting (no ESLint/Prettier)
- Run `pnpm lint` before commits
- Auto-format on save is configured via Biome
- Import organization is enabled via `assist.actions.source.organizeImports`

## Styling Conventions

### Design System
The project uses a **custom design system** with CSS variables defined in [app/globals.css](app/globals.css):
- Dark-first theme with custom color palette (HSL-based)
- Primary: `--primary` (140 100% 47% - green accent)
- Secondary: `--secondary` (193 100% 47% - cyan accent)
- Background hierarchy: `--background` (13% lightness), `--background-light` (19% lightness)

### Tailwind Configuration ([tailwind.config.ts](tailwind.config.ts))
- **Dark mode**: Dual strategy `["class", "media"]` for automatic + manual control
- **Custom theme extensions**:
  - Container: max-width 1148px (2xl breakpoint), auto-centered
  - Custom padding: `p-section` (160px) and responsive `py-section`/`pb-section` (40px → 160px)
  - Custom fonts: `font-anton`, `font-roboto-flex` (loaded as CSS variables)
  - Border radius system: lg, md, sm calculated from `--radius`
- **Utility layers**: Custom components layer for `.grid` (gap-[25px]), section padding utilities
- **Plugin**: `tailwindcss-animate` for animations (ensure it's installed)

### Tailwind CSS v4 Specifics
- PostCSS-based (`@tailwindcss/postcss` plugin in [postcss.config.mjs](postcss.config.mjs))
- Import structure: `@import "tailwindcss/preflight"` + `@tailwind utilities`
- No `@tailwind base` or `@tailwind components` - use `@layer` directives instead

## TypeScript Configuration
- Path alias: `@/*` maps to project root (use `@/app/...`, `@/components/...`)
- React JSX transform: `"jsx": "react-jsx"` (no need to import React)
- Bundler module resolution for Next.js compatibility
- Strict mode enabled

## File Organization
```
app/
  ├── layout.tsx      # Root layout with fonts, metadata
  ├── page.tsx        # Homepage
  ├── globals.css     # Tailwind imports + CSS variables
  └── favicon.ico
```

## Project-Specific Patterns

### Component Style
- Use functional components with TypeScript
- Apply Tailwind classes directly (no CSS modules)
- Reference CSS variables via Tailwind theme (e.g., `bg-primary`, `text-foreground`)
- Dark mode classes: `dark:` prefix works automatically

### CSS Variable Usage
Always use through Tailwind theme, not raw CSS:
```tsx
// ✅ Correct
<div className="bg-primary text-primary-foreground">
// ❌ Avoid
<div style={{ background: "hsl(var(--primary))" }}>
```

### Scrollbar Styling
Scrollbars are hidden globally via `::-webkit-scrollbar { display: none }` in [app/globals.css](app/globals.css)

## Important Notes
- **No test suite** currently configured
- **Next.js config** is minimal (default) - no custom webpack/redirects
- **Biome domains** enabled for Next.js and React - follows framework best practices
- Git VCS integration enabled in Biome config
- Uses Next.js `Image` component for optimized images (see [app/page.tsx](app/page.tsx) examples)

## When Adding Features
1. Place components in appropriate `app/` subdirectories
2. Use Server Components by default (add `"use client"` only when needed)
3. Follow Biome's auto-organize imports
4. Test dark mode appearance (`dark:` classes)
5. Ensure responsive design with Tailwind breakpoints (sm, md, lg, xl, 2xl)
6. Leverage custom utilities: `pb-section`, `py-section`, custom container
