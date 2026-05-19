# 03snds — Jacob Bouie Portfolio

Static portfolio site (HTML, CSS, vanilla JS) for [03snds.com](https://03snds.com).

## Deploy (Cloudflare Pages)

This repo uses [Workers static assets](https://developers.cloudflare.com/workers/static-assets/) via `wrangler.jsonc`.

- **Build command:** `npm install && npm run build`
- **Build output directory:** not used (Wrangler uploads assets from the project root)

For a dashboard-only static deploy (no Wrangler), remove `wrangler.jsonc` and `package.json`, then set build command to empty and output directory to `/`.
