# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Artifacts

### Next Trip Prayagraj (react-vite, path: `/`)
- **Purpose**: Travel & tourism website for Next Trip Prayagraj — a Prayagraj-based sacred stays and yatra planning agency
- **Tech**: React + Vite + TypeScript + TailwindCSS, Wouter routing, react-hook-form, Zod, embla-carousel-react, react-helmet-async
- **Pages**: Home, About Us, Packages (5 packages), Contact/Enquiry, FAQ (15 FAQs), 404
- **Features**:
  - Image carousel (embla-carousel-react + autoplay) with 8 AI-generated Prayagraj images
  - Google Translate widget for language switching
  - WhatsApp integration — all bookings/enquiries redirect to WhatsApp
  - Contact form that composes and sends WhatsApp message with form data
  - Full keyboard accessibility with ARIA labels
  - SEO: react-helmet-async, per-page meta tags, OG tags, robots.txt, sitemap.xml, JSON-LD schema
  - Warm saffron/amber/terracotta color palette, Playfair Display serif + Inter sans-serif
  - Sticky header with phone/WhatsApp announcement bar
  - Floating WhatsApp button

### API Server (express, path: `/api`)
- Standard Express 5 API server, health check endpoint

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
