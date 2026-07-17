# IBS — Internet Banking System (Vite + React)

This is a Vite + React conversion of the original Next.js (App Router) IBS
banking platform project. All pages and components have been ported over to
a standard client-side React SPA using **react-router-dom** for routing.

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## What changed from the Next.js version

- **Routing**: Next's file-based App Router (`app/**/page.jsx`) was replaced
  with `react-router-dom`. Routes are declared in `src/App.jsx`:
  - `/` → `src/pages/HomePage.jsx`
  - `/login` → `src/pages/LoginPage.jsx`
  - `/register` → `src/pages/RegisterPage.jsx`
  - `/forgot-password` → `src/pages/ForgotPasswordPage.jsx`
  - `/dashboard`, `/dashboard/accounts`, `/dashboard/transfer` → nested
    routes under `src/pages/dashboard/*`, wrapped in the sidebar shell
    (`DashboardShell`) via a layout route + `<Outlet />`.
- **Links**: `next/link`'s `<Link href="...">` became react-router's
  `<Link to="...">`.
- **Active-route detection**: `usePathname()` (from `next/navigation`) became
  `useLocation().pathname`.
- **Images**: `next/image`'s `<Image>` became a plain `<img>` tag (no image
  optimization pipeline in a plain Vite SPA).
- **Fonts**: `next/font/google` was replaced with standard Google Fonts
  `<link>` tags in `index.html`, and the Tailwind theme's font variables now
  point directly at the font family names.
- **Styling**: Tailwind v4 CSS-first config is preserved in `src/index.css`.
  The `shadcn/tailwind.css` import (previously pulled from the `shadcn` CLI
  package) has been inlined directly since that package isn't meant to be a
  runtime dependency.
- **Analytics**: `@vercel/analytics` (Next-specific) was removed.
- **`'use client'` directives**: stripped, since they're a no-op outside of
  Next's Server/Client Component model.

## Project structure

```
src/
  components/       shared UI (site header/footer, cards, buttons, logo)
    auth/           auth flow bits (OTP input, stepper, password strength)
    dashboard/      dashboard shell, small UI primitives, SVG charts
    home/           marketing/home page sections
    ui/             shadcn-style primitives (Button)
  lib/               ibs-data.js (mock data), utils.js (cn helper)
  pages/             route-level components
    dashboard/       nested dashboard routes
  App.jsx            route definitions
  main.jsx           app entry point
  index.css          Tailwind v4 theme + design tokens
```

## Notes

- This app has no backend — all banking data in `src/lib/ibs-data.js` is
  mock/sample data for UI demonstration purposes.
- Only the routes present in the original export were ported
  (`/dashboard/accounts`, `/dashboard/transfer`). The sidebar links to a few
  additional sections (Bill Payments, Cards, Deposits, etc.) that weren't
  included as pages in the source project — add routes/pages for those under
  `src/pages/dashboard/` following the same pattern if needed.
