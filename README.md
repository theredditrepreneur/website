# The Redditrepreneur website

The public website for The Redditrepreneur: The Home of Community Intelligence.

## Local development

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and change only the values required locally.
3. Run `npm run dev` and open `http://localhost:3000`.

The Free Community Intelligence Score and PostHog are disabled by default. Do not add secrets to any `NEXT_PUBLIC_` variable.

Commercial content and global URLs are centralised in `lib/site.ts`. See `HOW TO ADD AND EDIT PAGES.md` for editing instructions.

All changes must be reviewed in a Vercel preview before production. The canonical domain is `https://theredditrepreneur.com`; `www` should permanently redirect to it. Do not modify the `app`, `blog`, or `research` subdomain records.
