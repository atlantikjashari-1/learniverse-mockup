# Learniverse — Landing Page

A marketing landing page for **Learniverse**, a guided learning-path platform, built with
**Nuxt 3 + Vue 3** and a luminous **blue** theme. Content is based on the project brief
(homepage structure + copy blocks).

## Tech

- **Nuxt 3** (SSR) / **Vue 3** `<script setup>`
- Plain CSS design system with tokens (`assets/css/main.css`) — no UI framework
- Fonts: **Fraunces** (display) + **Plus Jakarta Sans** (body) via Google Fonts
- Custom `v-reveal` scroll-reveal directive (`plugins/reveal.ts`)

## Sections (homepage structure from the brief)

1. Sticky header  2. Hero (with animated path-preview mockup)  3. Trust bar (count-up stats)
4. Goal selector  5. How it works  6. Featured learning paths  7. Why Learniverse
8. Testimonials  9. FAQ (accordion)  10. Final CTA  11. Footer

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # production server build
npm run preview  # preview the production build
npm run generate # static site (optional)
```

## Project structure

```
app.vue                 # page shell + ambient background
assets/css/main.css     # design tokens, buttons, layout, reveal animation
plugins/reveal.ts       # v-reveal directive (IntersectionObserver)
components/
  AppHeader.vue         # sticky nav + mobile menu
  HeroSection.vue       # hero + product preview card
  TrustBar.vue          # animated stats + logos
  GoalSelector.vue      # 4 goal cards
  HowItWorks.vue        # 3 steps
  FeaturedPaths.vue     # 3 learning-path cards
  WhyLearniverse.vue    # 4 benefits
  Testimonials.vue      # 3 quotes
  FaqSection.vue        # accordion (8 Q&A)
  FinalCta.vue          # dark blue CTA band
  AppFooter.vue         # footer
  BrandMark.vue         # logo mark
```

## Customising the blue theme

All colors live as CSS variables in `assets/css/main.css` under `:root` — adjust
`--blue`, `--blue-strong`, `--sky`, `--navy`, etc. to retune the palette.
