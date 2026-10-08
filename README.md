# portfolio-web

Source code of my personal portfolio website.

## Tech stack

- [React Router](https://reactrouter.com) (framework mode, SSR) with TypeScript (strict)
- [Tailwind CSS](https://tailwindcss.com)
- [i18next](https://www.i18next.com) for German and English (`/` and `/en`)
- [Oxfmt](https://oxc.rs) for formatting, [Oxlint](https://oxc.rs) for linting
- [Vitest](https://vitest.dev) + Testing Library for unit tests,
  [Playwright](https://playwright.dev) + axe-core for end-to-end and accessibility tests
- pnpm, Node 24, Docker, GitHub Actions

## Development

```sh
pnpm i                               # install dependencies (also installs git hooks)
pnpm dev                             # start the dev server on http://localhost:5173
pnpm check                           # format check, lint and type check
pnpm test                            # unit tests (pnpm test:watch for watch mode)
pnpm exec playwright install chromium   # once: download the browser for E2E tests
pnpm test:e2e                        # E2E + accessibility tests against the production build
pnpm build                           # production build
```

## License

The **source code** is licensed under the [MIT License](./LICENSE).

All **content** — texts, images, photos, the CV and personal data — is © Sebastian Bergen,
all rights reserved, and may not be used without prior written permission.
