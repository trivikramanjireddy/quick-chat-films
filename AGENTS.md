# Project Engineering Rules

- Keep package starting prices and bulk offer values in one exported pricing data source consumed by both the pricing page and its tests, so displayed and verified amounts cannot drift.
- Keep homepage leadership profiles in a dedicated section immediately before the footer, so existing homepage sections remain untouched.
- Use the shared cinematic Button variant for filled orange CTAs, so gradient and glow styling stays token-based and reusable.
- Use the shared Radix Sheet for header navigation, so focus trapping, Escape dismissal, and scroll locking remain accessible.
- Keep the Adobe Portfolio URL in src/lib/links.ts (PORTFOLIO_URL) and import it for every work link, so all portfolio links change together.
