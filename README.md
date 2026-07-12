# DahmsIO Website

Marketing site for DahmsIO ("Where innovation meets intelligence") — Home, Data, Technology, and Consulting pages. React + Vite, deployed to Netlify.

Recreated from the design handoff at `../design_handoff_dahmsio_website/` (see that folder's README for the full design spec).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Connected to Netlify via `netlify.toml` (build command `npm run build`, publish dir `dist`, with a catch-all SPA redirect for client-side routing).
