# SaaS Landing Page

A lightweight landing page built with React, TypeScript, Vite, and shadcn/ui.

## Project structure

- `src/App.tsx` — main application layout
- `src/main.tsx` — Vite entry point
- `src/layouts/` — page sections such as header, features, feedbacks, and footer
- `src/components/` — reusable UI components and visual elements
- `src/index.css` — global styling
- `public/` — static assets and images

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal to preview the landing page.

## Build for production

```bash
npm run build
```

## Why this tech stack

This stack was chosen for SaaS and product marketing because it combines strong developer experience with fast, production-ready output:

- `React` makes it easy to compose reusable UI sections like feature lists, customer quotes, and hero banners.
- `TypeScript` adds type safety and helps keep components predictable as the page grows.
- `Vite` provides instant feedback during development and fast builds for production launches.
- `shadcn/ui` offers polished, accessible UI components that speed up delivery without compromising brand styling.

These tools work well for industries that need polished landing pages, rapid iteration, and reliable frontend performance.

## Notes

- The project uses Vite for fast builds and hot module replacement.
- UI components are organized in `src/components/` and can be reused across layouts.
- Modify `src/layouts/feedbacks.tsx` to edit testimonial text and user feedback content.

