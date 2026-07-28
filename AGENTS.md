# Smart Salon Management System

## Stack

- React 19 + Vite 8 + React Router v7 (SPA, no SSR)
- Tailwind CSS v4 via `@tailwindcss/vite` plugin
- framer-motion for animations, lucide-react for icons
- Deployed on Netlify (SPA redirect in `netlify.toml`)
- Backend API expected at `VITE_API_BASE_URL` (default `http://localhost:5000/api`) — mostly unused currently; auth and data are mock/client-side

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # Production build
npm run lint      # ESLint (no typecheck — JS project, no TypeScript)
npm run preview   # Serve production build locally
```

No test runner is configured.

## Project Structure

```
src/
  main.jsx              # Entry: BrowserRouter > AuthProvider > App
  App.jsx               # Routes + conditional Navbar/Footer (hidden on dashboard paths)
  index.css             # Tailwind @theme config + global styles
  Login.jsx             # Top-level (not in pages/)
  context/AuthContext.jsx  # Mock auth, roles, permissions, session in localStorage
  services/api.js       # Axios instance (unused by most components currently)
  components/           # Navbar, Footer, DashboardLayout, ProtectedRoute, CookieConsent
  pages/                # All route pages (Home, Booking, Dashboard, etc.)
```

## Tailwind v4 Theme Convention

All custom colors are defined in `src/index.css` inside `@theme { }`. Tailwind v4 auto-generates utility classes from these:

- `--color-primary` → `text-primary`, `bg-primary`, `border-primary`
- `--color-text-muted` → `text-text-muted`, `bg-text-muted` (note the doubled `text-text-` prefix)
- `--color-bg` → `text-bg`, `bg-bg`
- `--color-border` → `border-border`

**Gotcha**: Class names for colors like `text-muted` do NOT exist. The correct class is `text-text-muted` (from `--color-text-muted`). This is a common mistake.

## Auth & Permissions

- Three hardcoded roles: Administrator, Salon Manager, Receptionist (`src/context/AuthContext.jsx`)
- Login: `/login` → redirects to `/dashboard`
- Dashboard routes (`/dashboard`, `/customers`, `/check-in`) are wrapped in `<ProtectedRoute requiredPermission="...">`
- Dashboard routes use `<DashboardLayout>` (sidebar + topbar); public routes use `<Navbar>` + `<Footer>`
- The `isDashboardPath()` check in `App.jsx` controls layout switching
- Session stored in localStorage with 8-hour expiry

## Code Conventions

- All components are `.jsx` files, no TypeScript
- Icons come exclusively from `lucide-react` (never emoji in UI, except role config icons)
- Path alias: `@/` maps to `src/` (configured in `vite.config.js` and `jsconfig.json`)
- No form library — manual state management with `useState`
- No state management library — React Context only (AuthContext)
- No CSS modules or styled-components — all styling via Tailwind utility classes
