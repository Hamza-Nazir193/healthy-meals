# Healthify – Healthy Meals Landing Page

A fully responsive, component-based recreation of the supplied "Healthy Meals" design, built with
**Expo (React Native for Web)**, **Expo Router**, **TypeScript** and **NativeWind v5 (Tailwind CSS v4)**.

**Live demo:** https://healthy-meals-two.vercel.app_

## Features

- Sticky navigation with smooth scrolling, active-section highlight and a mobile menu
- Hero, statistics, about, meal-plan cards, advantages, pricing plans, 3-step process,
  testimonials, FAQ accordion, call-to-action banner and full footer
- Responsive layouts for mobile, tablet and desktop (no horizontal scrolling)
- Hover, focus-visible and pressed states, ARIA roles/labels and alt text on images
- Content lives in `src/data/content.ts`, so copy and plans are easy to change

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Expo SDK 57, React Native 0.86, React Native Web, Expo Router |
| Styling | NativeWind 5 (rc) + Tailwind CSS 4 |
| Icons | lucide-react-native + react-native-svg |
| Images | expo-image |
| Language | TypeScript (strict) |

## Project structure

```
src/
  app/            Expo Router entry (_layout, index, +html)
  components/
    layout/       Navbar, Footer, WhatsAppButton
    sections/     Hero, Stats, About, MealPlans, WhyChoose, Pricing,
                  HowItWorks, Testimonials, Faq, CtaBanner
    ui/           Button, TextLink, AppText/Heading, Container, Section,
                  SectionHeader, FoodImage, Logo
  constants/      images.ts (image registry)
  context/        page-scroll.tsx (section scrolling + active link)
  data/           content.ts (all copy, plans, FAQs, links)
  tailwind.css    Tailwind/NativeWind entry and brand colour tokens
assets/images/    app icons + food/ illustrations
```

## Getting started

Requirements: Node.js 20+ (LTS) and npm.

```bash
npm install
npm run web        # dev server, opens http://localhost:8081
```

Other commands:

```bash
npm run typecheck  # TypeScript check
npm run lint       # ESLint via Expo
npm run build      # static web export into ./dist
```

To preview the production build locally: `npx serve dist`.

## Environment variables

None are required. The project uses no API keys or external services, so no `.env` file is needed.
`.env` files are listed in `.gitignore` in case you add some later; put real values in
Vercel → Project Settings → Environment Variables, never in the repository.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel choose **Add New → Project** and import the repository.
3. The included `vercel.json` already sets the install command (`npm install`), build command
   (`npm run build`) and output directory (`dist`). Keep the framework preset on **Other**.
4. Click **Deploy**, then paste the live URL at the top of this README and push again.

## Notes

- **Tailwind setup:** `src/tailwind.css` imports `tailwindcss/theme.css` and
  `tailwindcss/utilities.css` separately instead of `@import "tailwindcss"`. The full import wraps
  utilities in a CSS `@layer`, which React Native Web's own un-layered styles override, so classes such
  as `flex-row` or `bg-*` would silently stop working on the web.
- **Images:** the food pictures in `assets/images/food` are original generated illustrations (no
  third-party or watermarked assets). To use photography, replace the files with the same names
  or edit `src/constants/images.ts`.
- **Fonts:** DM Serif Display, Inter and Caveat load from Google Fonts with Georgia/system fallbacks.
- **Contact details** (phone, e-mail, WhatsApp) in `src/data/content.ts` are sample values.
