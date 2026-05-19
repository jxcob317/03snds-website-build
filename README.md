# 03snds — Jacob Bouie Portfolio

Static portfolio site (HTML, CSS, vanilla JS) for [03snds.com](https://03snds.com).

## Deploy (Cloudflare Pages / Workers)

This repo uses [Workers static assets](https://developers.cloudflare.com/workers/static-assets/) via `wrangler.jsonc`. A tiny Worker ([`src/worker.ts`](src/worker.ts)) forwards requests to the `ASSETS` binding so `wrangler versions upload` (used by some Cloudflare autoconfig flows) always has an entry point.

- **Build command:** `npm install` (optional if you rely on `npx wrangler` only)
- **Deploy command:** `npx wrangler deploy` **or** `npx wrangler versions upload` (both should work)
- **Build output directory:** not used for Wrangler deploys

`.assetsignore` excludes `src/`, `node_modules/`, and config files from the static bundle so they are not served publicly.

For a dashboard-only static deploy (no Wrangler), remove `wrangler.jsonc`, `package.json`, and `src/`, then set build command to empty and output directory to `/`.
