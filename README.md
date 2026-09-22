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

## Deployment

The site is hosted on Cloudflare Workers and is live at
<https://fools-inn.etienneskein97.workers.dev>.

```bash
npm run deploy
```

That builds and publishes in one step. `wrangler.toml` serves `dist/` as static
assets with `not_found_handling = "single-page-application"`, which is what
makes client-side routes like `/rooms` return a real 200 on a hard refresh or a
shared link. Without it the asset router redirects them back to `/`.

To preview the deployed configuration locally:

```bash
npm run cf-dev
```

Deploys are manual: pushing to `main` does not publish the site. Cloudflare is
a staging host until the site moves to its permanent home, so there is no
automatic deploy to maintain.

### Hosting somewhere other than the domain root

Cloudflare serves the site from the root, so no extra configuration is needed.
For a host that serves from a subpath, such as a GitHub Pages project site,
build with a base:

```bash
node build.mjs --base=FoolsInnWebsite
```

That rewrites the asset URLs, sets `window.__BASE_PATH__` for the client router,
writes a `404.html` copy of `index.html` as an SPA fallback, and adds
`.nojekyll`. Note that on GitHub Pages deep links still return a 404 status
while rendering correctly, because the fallback is the 404 page.

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

## September design update

- The home page uses the revised photo layout and features Kayak, Surf and Shark
  Cage Diving. Tour cards use the supplied taglines, prices and offer labels;
  existing duration and inclusion information remains under Tour details.
- Terms & Conditions are available at `/terms` and linked in the footer.
- Payment wording uses bank transfer before arrival in both the FAQ and terms,
  as confirmed by the client instead of the alternative policy in the export.
- Leave a Review opens the Google reviews page supplied by the client.
  No star ratings have been inferred from review text.
- Unfinished gallery/guide copy and booking placeholders from the export are
  not rendered; the existing gallery and enquiry flow remain functional.
