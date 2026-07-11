# Deployment and migration

Configure the public URLs and feature flags shown in `.env.example`. Free Score and PostHog remain `false` for launch. Secrets must never use `NEXT_PUBLIC_` or be committed. The mailto contact flow requires no Resend or Turnstile credentials.

## Preview workflow

1. Push the feature branch and open its Vercel preview.
2. Review mobile, tablet and desktop layouts.
3. Confirm Free Score is absent from navigation and sitemap.
4. Confirm PostHog does not load.
5. Test SaaS, Ghost, research, Substack and Stripe links.

## Domain

Use `theredditrepreneur.com` as canonical and permanently redirect `www` to it. Preserve DNS records for `app`, `blog` and `research`. Connect production only after explicit approval.

## Rollback

Keep the current production deployment available. If validation fails, promote the last known-good Vercel deployment or revert the release commit. DNS should not need to change.

## Known limitations

- Free Score is disabled and its URL is unconfirmed.
- Alerts is coming soon.
- Legal pages are drafts pending business review.
- Contact uses the visitor’s email application.
- Research is manually curated; articles remain canonical on Ghost.
