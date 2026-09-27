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
- **One folder per section** under `src/components/sections/<name>/`, with the section in `<name>.tsx` and its parts beside it. A section is a `<section>` with an `id` for in-page links and `aria-labelledby` pointing at its `<h2>`, which `SectionHeading` renders with the eyebrow and description.
- Every page has one `<h1>` and never skips a heading level; card titles are `<h3>`.
- **The site URL is never hard-coded.** Read it with `getSiteUrl()` from `src/lib/site-url.ts`: `SITE_URL`, then Vercel's production domain, then localhost.

### Server first

- **Server Components by default.** The only client islands are the theme toggle and switcher, the mobile menu and the copy button. Add `'use client'` only where a component needs state, effects or browser APIs, and keep that island as small as the interaction.
- **Everything a crawler needs is in the server HTML.** The FAQ keeps `hiddenUntilFound` on its `Accordion`: Base UI renders closed panels with `hidden` on the server and switches them to `hidden="until-found"` after hydration, and a `scripting: none` rule in `src/app/globals.css` shows every answer when JavaScript is off.
- The footer's theme switcher marks no option until hydration, through `useSyncExternalStore`, because the server cannot know the stored theme.
- **Testimonials, if you add them, stay plain quotes.** Never turn them into `Review` or `AggregateRating` markup; reviews a site publishes about itself do not qualify.
- Style a link as a button with `ButtonLink` from `src/components/button-link.tsx`. It merges the variant classes through `cn`, as `Button` does, opens external links in a new tab and uses Next's `Link` for internal ones. A bare `buttonVariants()` on a link keeps the transparent base border, so the outline variant loses its edge.

### Motion

- **Motion never gates content.** Entrances, scroll reveals and loops are CSS only (`animate-rise`, `animate-rise-fade`, `animate-float`, `animate-marquee` and `reveal` in `src/app/globals.css`), so the server HTML, the first client render and a page without JavaScript all match. Never start content at `opacity: 0` from JavaScript, and never branch rendered output on the reduced-motion setting.
- The headline uses `animate-rise`, which moves without fading, because the largest paint skips transparent elements.
- Put `motion-reduce:animate-none` beside every animation class. `reveal` needs nothing extra: it only runs where scroll timelines exist and motion is not reduced. Neither does `shimmer` from shadcn's stylesheet, which stops by itself.
- Keep `reveal` off anything in the first screen, where it would load half faded.
- The stack marquee scrolls two copies of one list. The copy is `aria-hidden`, and under reduced motion it is hidden and the list wraps in place.
- The header turns to frosted glass on a scroll timeline in `header-glass`; without scroll timelines it is always glass.
- The illustrations share one 8-second loop, the `animate-illus-*` utilities: each builds up, holds its finished frame, fades out as a group and builds again. An element's normal style is the finished frame, which reduced motion shows. Keep an item's delay within 1.1 seconds of its group's, or its reset shows.
- Decorative visuals, like the hero photo, the CTA cards and the illustrations, are `aria-hidden` and `data-nosnippet`, so they stay out of screen readers and search snippets.

### Images

- Photos live in `src/content/images/` and are imported statically, so `next/image` knows their size. Decorative photos take `alt=""`.
- A photo made for one theme renders twice, with `dark:hidden` and `hidden dark:block`. Leave both lazy and give them `fetchPriority="high"`: a lazy image that is not displayed never loads, while `preload` or `loading="eager"` would load both.

## Design system

`@shadcn/lint` checks Tailwind usage against the design system. All six rules are errors and gate CI: `no-restyle`, `no-raw-colors`, `no-arbitrary-values`, `no-unknown-classes`, `require-static-classes` and `no-inline-styles`. Keep the codebase at zero findings rather than downgrading a rule.

- **Theme tokens only, and only shadcn's own.** Every colour, radius and font comes from the tokens `shadcn init` writes into `src/app/globals.css`, so `pnpm dlx shadcn@latest apply <code>` restyles the whole site at once. A preset rewrites exactly those tokens, so never add a token of your own: it would keep its old value after a restyle. Derive a shade from an existing token instead, such as `bg-primary/10`. Shadows stay on Tailwind's default scale, like `shadow-sm`. Motion and effects are the exception, defined once in `src/app/globals.css` as keyframes and `@utility` rules.
- **Keep `src/components/ui/` as the CLI writes it.** `shadcn apply` overwrites those files when it applies a preset, so a variant added there would be lost. The linter ignores the folder, because those files define the variants the rules enforce.
- After `shadcn apply`, run `pnpm format`, and remove the old font the CLI leaves in the `next/font/google` import of `src/app/layout.tsx`. The starter's own look is preset `b4Wm`.
- **`no-restyle` runs with no allowlist**: a shadcn component accepts no `className` from outside, not even layout or margin. Pick one of the variants it already has, and put layout classes on a plain wrapper element around it.
- Brand marks live in `src/components/icons.tsx` as single-colour Simple Icons paths that follow the text colour. The 7Ovr wordmark in `src/components/logo.tsx` loads Syne through `next/font` for itself alone, so a preset's font change leaves the brand as it is.
- Base UI takes `render`, not `asChild`.
- Add shadcn components with `pnpm dlx shadcn@latest add <name>`, then run `pnpm format`, because the CLI writes double quotes.

## Tests

- **Tests come first.** Before writing the code for a feature or a fix, write the test that describes the behaviour and watch it fail. Then write the code that makes it pass. A bug fix starts with a test that reproduces the bug.
- **Colocate tests** with the file they cover: `stack.test.tsx` sits next to `stack.tsx`.
- **Do not test shadcn/ui or Base UI primitives.** Test the behaviour we build on top of them, such as what a section shows, where a link goes, what the theme switcher does and what the content says.
- Vitest with Testing Library in jsdom. Query by role and label, the way people use the page. Server Components render in tests like any other component.
- `src/test/setup.ts` mocks `next/font/google`, which only runs inside the Next compiler, and stubs the browser APIs jsdom lacks. Add to it when a component needs another one.
- `src/content/content.test.ts` enforces the copy rules: no em or en dashes, and Title Case labels.

## Before you finish

Run `pnpm lint`, `pnpm format:check`, `pnpm typecheck`, `pnpm test` and `pnpm build`. `pnpm lint` fails on any warning, so the codebase stays at zero findings. CI runs the same checks on every push and pull request.
