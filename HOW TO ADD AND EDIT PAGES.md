# How to add and edit pages

This website keeps content in GitHub so every update has a preview, review history and rollback path.

## Edit a page

Create a branch, find the page inside `app` and edit its visible text. Commit the change, open the Vercel preview and merge only after checking mobile and desktop layouts.

## Add a page

Create a folder inside `app` using the desired URL, copy the structure of `app/about/page.tsx` into a new `page.tsx`, then change its metadata and content. Add the URL to `app/sitemap.ts`.

## Add an image

Put an approved, descriptively named image in the relevant `public` folder. Reference it with a path beginning `/` and add useful alternative text.

## Change a price or Stripe link

Open `lib/site.ts`, find the product or service, and update `price` or `checkout`. Test every checkout link in the preview.

## Add a product or service

Add its approved image under `public` and add a record to the relevant list in `lib/site.ts`. Listing pages, detail pages and sitemap entries are generated from those records.

## Feature a research article

Edit the `research` list near the top of `app/page.tsx`. Use its canonical Ghost URL and an approved summary. Do not copy the full article.

## Preview, publish and roll back

Push the branch and review the Vercel preview. Merge the approved pull request to publish. To roll back, revert the merged commit and review the resulting preview, or promote the last known-good Vercel deployment in an emergency.
