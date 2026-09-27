# AGENTS.md

How to write code in this repository: conventions, patterns and constraints. Setup and scripts for people are in [README.md](README.md). This file is the single source of guidance for every agent; `CLAUDE.md` imports it.

## Constraints

- **Read the bundled Next.js docs first.** This is Next.js 16, whose APIs and conventions differ from older versions and from most training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing code, and heed deprecation notices. `next.config.ts` sets `agentRules: false`, so `next dev` leaves this file alone.
- **pnpm only.** Node 24 or newer, pnpm 12 or newer. Never use npm or yarn. Run one-off CLIs with `pnpm dlx`.
- **TypeScript 7**, strict. `any` is a lint error. Use `import type` for type-only imports (enforced). `next build` type-checks every file `tsconfig.json` includes, through the `tsc` CLI.
- **Oxlint and oxfmt.** Lint with Oxlint and [`@shadcn/lint`](https://github.com/shadcn-ui/lint), format with oxfmt. Do not add ESLint, Prettier or typescript-eslint: TypeScript 7 has no JavaScript compiler API, so typescript-eslint and `eslint-config-next` cannot run.
- **Fresh releases wait a day.** pnpm refuses versions published in the last 24 hours. Pick an older version or wait. Never add `minimumReleaseAgeExclude`.

## Code conventions

- **kebab-case filenames**, such as `site-header.tsx`. Next's file conventions, like `page.tsx`, `not-found.tsx`, `opengraph-image.tsx`, `[slug]/` and `(group)/`, are the only exception.
- **Always import through the `@/` alias**, which maps to `src/*`. No relative imports.
- **Formatting** is oxfmt: 2-space indent, single quotes, trailing commas, 100-character lines, no semicolons. The pre-commit hook formats staged files; `pnpm format` does the whole repo.
- **Comments only when really necessary**, one line at most, and never a ticket or issue reference. Prefer a clearer name over an explanation.
- **No em dashes anywhere**: code, comments, UI copy, docs, commits and PRs. Use a plain hyphen or rephrase. The only exception is vendored third-party content, the installed skills in `.claude/skills/` and `.agents/skills/`, which we never hand-edit.
- **English only, in Title Case for labels**, capitalising every word: headings, titles, buttons, links, navigation, eyebrows, badges and the `aria-label` of a control, such as "Get The Starter". The hero headline is a full sentence and keeps sentence case, as do descriptions, captions, list items and FAQ answers. Write Title Case in the source, not with the CSS `capitalize` class, so the text people and screen readers get matches the screen.
- **Docs are for humans.** The README and other docs are written for people using, supporting or deploying the project: plain language, concise, easy to follow. Guidance for whoever writes code belongs in this file.
- **Commits** follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `test:`). No `Co-Authored-By` lines in commits or PRs. Never bypass the hooks with `--no-verify`.

## Architecture

### Pages and content

- `src/app/layout.tsx` renders the skip link, `SiteHeader`, `<main id="main">` and `SiteFooter` around every page. `src/app/page.tsx` only lists the sections, in order.
- **Copy lives in `src/content/`**: one typed file per section, and `navigation.ts` for the header and footer links. Sections render what they are given and never hard-code words. Site-wide details, like the name, description and links, live in `src/config/site.ts`.
- Backticks in a content string render as inline code through `withInlineCode` from `src/lib/inline-code.tsx`, and `stripInlineCode` gives the plain text for JSON-LD, so one string feeds both.
- **Every component lives flat in `src/components/`**, one kebab-case file each, sections and their parts included, such as `features.tsx` and `feature-visuals.tsx`. `src/components/ui/` is the only folder, and it holds what the shadcn CLI writes. A section is a `<section>` with an `id` for in-page links and `aria-labelledby` pointing at its `<h2>`, which `SectionHeading` renders with the eyebrow and description.
- Every page has one `<h1>` and never skips a heading level; card titles are `<h3>`.
- **The site URL is never hard-coded.** Read it with `getSiteUrl()` from `src/lib/site-url.ts`: `SITE_URL`, then Vercel's production domain, then localhost.
- Screenshots live in `src/content/images/` and are imported statically, one per theme. Both render, with `dark:hidden` and `hidden dark:block`, and both stay lazy, because a lazy image that is not displayed never loads; `preload` or `loading="eager"` would load both. Decorative ones take `alt=""`.

### Server first

- **Server Components by default.** The only client islands are the footer's theme toggle, the mobile menu, the copy button and the logo's `HomeLink`, which scrolls back to the top on the home page, where a link to the current page would keep the scroll. Add `'use client'` only where a component needs state, effects or browser APIs, and keep that island as small as the interaction.
- **Everything a crawler needs is in the server HTML.** The FAQ keeps `hiddenUntilFound` on its `Accordion`: Base UI renders closed panels with `hidden` on the server and switches them to `hidden="until-found"` after hydration, and a `scripting: none` rule in `src/app/globals.css` shows every answer when JavaScript is off.
- **Testimonials, if you add them, stay plain quotes.** Never turn them into `Review` or `AggregateRating` markup; reviews a site publishes about itself do not qualify.
- Style a link as a button with `ButtonLink` from `src/components/button-link.tsx`. It merges the variant classes through `cn`, as `Button` does, opens external links in a new tab and uses Next's `Link` for internal ones. A bare `buttonVariants()` on a link keeps the transparent base border, so the outline variant loses its edge.

### Motion

- **Motion never gates content.** Entrances, scroll reveals and loops are CSS only (`animate-rise`, `animate-rise-fade`, `animate-float`, `animate-marquee` and `reveal` in `src/app/globals.css`), so the server HTML, the first client render and a page without JavaScript all match. Never start content at `opacity: 0` from JavaScript, and never branch rendered output on the reduced-motion setting.
- The headline uses `animate-rise`, which moves without fading, because the largest paint skips transparent elements.
- Put `motion-reduce:animate-none` beside every animation class. `reveal` needs nothing extra: it only runs where scroll timelines exist and motion is not reduced. Neither does `shimmer` from shadcn's stylesheet, which stops by itself.
- Keep `reveal` off anything in the first screen, where it would load half faded.
- The stack marquee under the hero scrolls two copies of one list. The copy is `aria-hidden`, and under reduced motion it is hidden and the list wraps in place. The hero's floating tiles stay above it.
- The header turns to frosted glass on a scroll timeline in `header-glass`; without scroll timelines it is always glass.
- The illustrations loop gently through the utilities in the `Illustrations` block of `src/app/globals.css`, such as `animate-swap`, `animate-wave` and `animate-hop`. An element's own style is the finished frame, which reduced motion keeps. Items that take turns, like the routes in the build log, share one grid cell and wait at `opacity-0` until their delay.
- Decorative visuals, like the hero's floating logos, the CTA cards and the illustrations, are `aria-hidden` and `data-nosnippet`, so they stay out of screen readers and search snippets.

## Design system

`@shadcn/lint` checks Tailwind usage against the design system. All six rules are errors and gate CI: `no-restyle`, `no-raw-colors`, `no-arbitrary-values`, `no-unknown-classes`, `require-static-classes` and `no-inline-styles`. Keep the codebase at zero findings rather than downgrading a rule.

- **Theme tokens only, and only shadcn's own.** Every colour, radius and font comes from the tokens `shadcn init` writes into `src/app/globals.css`, so `pnpm dlx shadcn@latest apply <code>` restyles the whole site at once. A preset rewrites exactly those tokens, so never add a token of your own: it would keep its old value after a restyle. Derive a shade from an existing token instead, such as `bg-primary/10`. Shadows stay on Tailwind's default scale, like `shadow-sm`. Motion and effects are the exception, defined once in `src/app/globals.css` as keyframes and `@utility` rules.
- **Keep `src/components/ui/` as the CLI writes it.** `shadcn apply` overwrites those files when it applies a preset, so a variant added there would be lost. The linter ignores the folder, because those files define the variants the rules enforce.
- After `shadcn apply`, run `pnpm format`, and remove the old font the CLI leaves in the `next/font/google` import of `src/app/layout.tsx`. The starter's own look is preset `b4Wm`.
- **`no-restyle` runs with no allowlist**: a shadcn component accepts no `className` from outside, not even layout or margin. Pick one of the variants it already has, and put layout classes on a plain wrapper element around it.
- Brand marks live in `src/components/icons.tsx`: full-colour logos in each brand's own colours for the floating tiles, and single-colour marks that follow the text colour for the marquee, so `.oxlintrc.json` exempts that one file from `no-raw-colors`. The 7Ovr wordmark in `src/components/logo.tsx` loads Syne through `next/font` for itself alone, so a preset's font change leaves the brand as it is.
- Base UI takes `render`, not `asChild`.
- Add shadcn components with `pnpm dlx shadcn@latest add <name>`, then run `pnpm format`, because the CLI writes double quotes.

## Tests

- **Test logic, not rendering.** Unit tests cover code that decides something: the site URL resolver, the inline-code parser, the content rules, the copy button's clipboard handling and how `ButtonLink` treats a URL. Do not write a test that a component renders its copy, its links or its markup; the page's structure belongs to end-to-end checks against the built site.
- **Tests come first** for that logic. Before writing it, write the test that describes it and watch it fail. A bug fix starts with a test that reproduces the bug.
- **Colocate tests** with the file they cover: `copy-command.test.tsx` sits next to `copy-command.tsx`.
- **Do not test shadcn/ui or Base UI primitives.** They are vendored and tested upstream.
- Vitest with Testing Library in jsdom. When a test needs the DOM, query by role and label, the way people use the page.
- `src/test/setup.ts` mocks `next/font/google`, which only runs inside the Next compiler, and stubs the browser APIs jsdom lacks. Add to it when a component needs another one.
- `src/content/content.test.ts` enforces the copy rules: no em or en dashes, and Title Case labels.

## Skills

Skills for agents working here live in two identical folders: `.claude/skills/` for Claude Code and `.agents/skills/` for every other agent. They are `vercel-react-best-practices`, `vercel-composition-patterns`, `shadcn` and `improve`, the same set as the 7Ovr App Starter, pinned in `skills-lock.json`.

- Add or update a vendored skill for both folders at once, as real files: `pnpm dlx skills add <repo> --skill <name> --agent claude-code universal --copy`. Never hand-edit vendored skills.

## Before you finish

Run `pnpm lint`, `pnpm format:check`, `pnpm typecheck`, `pnpm test` and `pnpm build`. `pnpm lint` fails on any warning, so the codebase stays at zero findings. CI runs the same checks on every push and pull request.
