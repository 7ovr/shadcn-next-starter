# 7Ovr Landing Starter

A Next.js landing-page starter on shadcn/ui and Base UI, built so every page is prerendered, complete in the HTML and readable without JavaScript. It is under construction: the landing page is in, and the SEO foundation, the other pages and the tests that prove them arrive in the next pull requests.

## Quick start

You need Node 24 or newer and [pnpm](https://pnpm.io) 12 or newer.

```bash
git clone https://github.com/7ovr/shadcn-next-starter
cd shadcn-next-starter
pnpm install
pnpm dev
```

Open http://localhost:3000. Installing also sets up the Git hooks that format and lint your changes on commit.

## What's inside

| Layer     | Choice                                                          |
| --------- | --------------------------------------------------------------- |
| Framework | Next.js 16 with the App Router                                  |
| UI        | React 19, shadcn/ui (`base-nova` style) on Base UI              |
| Styling   | Tailwind CSS v4 with light and dark theme tokens                |
| Language  | TypeScript 7 in strict mode                                     |
| Lint      | Oxlint with [`@shadcn/lint`](https://github.com/shadcn-ui/lint) |
| Format    | oxfmt, which also sorts imports and Tailwind classes            |
| Tests     | Vitest and Testing Library                                      |
| Hooks     | Lefthook, which formats and lints staged files on commit        |

## Make it yours

- `src/config/site.ts` holds the name, description and links.
- `src/content/` holds every word on the page, one file per section. The sections only render what they are given.
- `src/components/sections/` holds one folder per section. Reorder or drop them in `src/app/page.tsx`.

## Scripts

| Command             | What it does                                 |
| ------------------- | -------------------------------------------- |
| `pnpm dev`          | Start the dev server                         |
| `pnpm build`        | Typecheck, then build the site               |
| `pnpm start`        | Serve the production build locally           |
| `pnpm lint`         | Lint the code                                |
| `pnpm lint:fix`     | Lint and fix what can be fixed automatically |
| `pnpm typecheck`    | Check the types                              |
| `pnpm test`         | Run the tests once                           |
| `pnpm test:watch`   | Run the tests and rerun them on every change |
| `pnpm format`       | Format every file                            |
| `pnpm format:check` | Check the formatting without changing files  |

CI runs `lint`, `format:check`, `typecheck`, `test` and `build` on every push and pull request.

## Restyle with a preset

Every colour, radius and font comes from the shadcn theme tokens in `src/app/globals.css`, so one preset code restyles the whole site. Build a preset at [ui.shadcn.com/create](https://ui.shadcn.com/create), then apply its code:

```bash
pnpm dlx shadcn@latest apply <code>
pnpm format
```

The CLI writes double quotes, so `pnpm format` puts the files it touched back in the house style. If the preset changes the font, remove the old font from the `next/font/google` import in `src/app/layout.tsx`; `pnpm lint` points at it. The starter's own look is preset `b4Wm`, so `apply b4Wm` takes you back.

A preset only sets shadcn's own tokens. If you add a token of your own, a preset leaves it at its old value, so build new shades from the existing tokens instead, such as `bg-primary/10`. Applying a preset also reinstalls the components in `src/components/ui/`, so leave those files as the CLI writes them.

## Working with coding agents

`AGENTS.md` holds every convention for coding agents, and `CLAUDE.md` imports it, so Claude Code, Codex and Cursor all read the same rules.

## Credits

The logos belong to their projects. Several single-colour marks come from [Simple Icons](https://simpleicons.org) (CC0).

## License

[MIT](LICENSE). Made by [7Ovr](https://7ovr.com).
