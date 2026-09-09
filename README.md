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
- The redesign follows the supplied desktop and mobile layouts. Optimised
  photographs extracted from the supplied PDF are in `src/assets/old-site/design`.
- Room detail pages are available at `/rooms/private` and `/rooms/female-dorm`.
- Stay enquiries and contact messages open a prefilled email in the guest's
  email app. They do not submit to a backend or confirm a reservation.
- On mobile, tours expand individually and FAQ categories contain the full
  approved questions and answers. Gallery and blog content remain available.
- The contact details match the current public Fools Inn site.
