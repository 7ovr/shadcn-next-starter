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
- **Server Components by default.** Add `'use client'` only where a component needs state, effects or browser APIs, and keep that client island as small as the interaction.
- **Formatting** is oxfmt: 2-space indent, single quotes, trailing commas, 100-character lines, no semicolons. The pre-commit hook formats staged files; `pnpm format` does the whole repo.
- **Comments only when really necessary**, one line at most, and never a ticket or issue reference. Prefer a clearer name over an explanation.
- **No em dashes anywhere**: code, comments, UI copy, docs, commits and PRs. Use a plain hyphen or rephrase. The only exception is vendored third-party content, the installed skills in `.claude/skills/` and `.agents/skills/`, which we never hand-edit.
- **English only, in Title Case for labels**, capitalising every word: headings, titles, buttons, links, navigation, field labels, badges and the `aria-label` of a control, such as "Get The Starter". Sentences stay in sentence case: descriptions, captions, helper text and FAQ answers. Write Title Case in the source, not with the CSS `capitalize` class, so the text people and screen readers get matches the screen.
- **Docs are for humans.** The README and other docs are written for people using, supporting or deploying the project: plain language, concise, easy to follow. Guidance for whoever writes code belongs in this file.
- **Commits** follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `test:`). No `Co-Authored-By` lines in commits or PRs. Never bypass the hooks with `--no-verify`.

## Design system

`@shadcn/lint` checks Tailwind usage against the design system. All six rules are errors and gate CI: `no-restyle`, `no-raw-colors`, `no-arbitrary-values`, `no-unknown-classes`, `require-static-classes` and `no-inline-styles`. Keep the codebase at zero findings rather than downgrading a rule.

- **Theme tokens only, and only shadcn's own.** Every colour, radius and font comes from the tokens `shadcn init` writes into `src/app/globals.css`, so `pnpm dlx shadcn@latest apply <code>` restyles the whole site at once. A preset rewrites exactly those tokens, so never add a token of your own: it would keep its old value after a restyle. Derive a shade from an existing token instead, such as `bg-primary/10`. Shadows stay on Tailwind's default scale, like `shadow-sm`.
- **Keep `src/components/ui/` as the CLI writes it.** `shadcn apply` overwrites those files when it applies a preset, so a variant added there would be lost. The linter ignores the folder, because those files define the variants the rules enforce.
- **`no-restyle` runs with no allowlist**: a shadcn component accepts no `className` from outside, not even layout or margin. Pick one of the variants it already has, and put layout classes on a plain wrapper element around it.
- Base UI takes `render`, not `asChild`. For navigation, style a Next `Link` with `buttonVariants()`; `<Button render={<Link />}>` makes the link report itself as a button.
- Add shadcn components with `pnpm dlx shadcn@latest add <name>`, then run `pnpm format`, because the CLI writes double quotes.

## Before you finish

Run `pnpm lint`, `pnpm format:check`, `pnpm typecheck` and `pnpm build`. `pnpm lint` fails on any warning, so the codebase stays at zero findings. CI runs the same checks on every push and pull request.
