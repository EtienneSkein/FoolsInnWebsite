# Fools Inn website

Static front-end website for Fools Inn in Sea Point, Cape Town.

The site includes accommodation, experiences, neighbourhood, gallery, contact,
blog and booking pages. It is built as a lightweight JavaScript front end with
local assets from the existing Fools Inn website.

## Local preview

```bash
npm run dev
```

The preview server runs at `http://127.0.0.1:5173/`.

## Build

```bash
npm run build
```

This creates the production build in `dist/`.

For a client-friendly preview folder that can be opened directly from
`dist/index.html`, use:

```bash
npm run build -- --client-preview
```

## Project notes

- Booking links currently point to Activitar and should be replaced with final
  product-specific booking URLs when supplied.
- Gallery and room imagery are temporary assets copied from the existing Fools
  Inn website.
- The contact details match the current public Fools Inn site.
