# Axeonsoft Link-in-Bio

A lightweight, responsive Link-in-Bio landing page built with Vite, HTML, CSS, and vanilla JavaScript. It has no backend or database.

## Requirements

- Node.js LTS and npm
- A GitHub repository with Pages enabled

## Install and run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Vite provides Hot Module Replacement while editing HTML, CSS, and JavaScript.

## Production build and preview

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`. The preview command serves that exact production output locally.

## Edit the links

Open [`script.js`](script.js) and update the three entries in `siteConfig.links`. The page intentionally renders exactly three primary links.

## GitHub repository setup

1. Create a GitHub repository and push this project to its `main` branch.
2. Run `npm install` once and commit the generated `package-lock.json` so GitHub Actions can use `npm ci`.
3. In **Settings → Actions → General**, allow GitHub Actions to run.

## GitHub Pages configuration

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. The included workflow builds `dist/`, uploads it as a Pages artifact, and deploys it.

The Vite base path is configured automatically: local development uses `/`, while GitHub Actions uses `/<repository-name>/`. A future custom domain can use the root path by setting the repository variable `VITE_BASE_PATH=/` and adding a `public/CNAME` file containing the domain name.

## Automatic deployment

Every push to `main` runs `.github/workflows/deploy.yml`. It checks out the repository, sets up Node.js LTS, installs with `npm ci`, runs `npm run build`, uploads `dist`, and deploys through the official GitHub Pages Actions.

Because the project uses only relative asset paths and browser-native APIs, it works directly from the repository root without npm or a build process.

## Files

- `package.json` — Vite development, build, and preview scripts.
- `vite.config.js` — repository-aware GitHub Pages base path.
- `.github/workflows/deploy.yml` — automated Pages build and deployment.
- `index.html` — semantic page structure, SEO metadata, and Open Graph metadata.
- `style.css` — mobile-first dark cinematic styling and responsive layout.
- `script.js` — centralized link configuration and rendering.
- `assets/logo.png` — local profile logo.
- `assets/favicon.png` — local browser icon.
