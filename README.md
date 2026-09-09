# Spyke Technologies Inc. — Website

Static bilingual website for [spyketech.ca](https://spyketech.ca) built with plain HTML, CSS, and vanilla JavaScript.

## Deployment

### GitHub Pages
1. Push this folder's contents to a GitHub repository (e.g. `spyketech-website`).
2. In repository Settings → Pages → Source, select `main` branch, root `/`.
3. GitHub Pages serves `index.html` automatically.

### Custom Domain (spyketech.ca)
1. Add a `CNAME` file to this folder containing `spyketech.ca`.
2. Configure DNS: add CNAME record pointing `www` → `<username>.github.io`, and A records pointing `@` to GitHub's IPs.

### OneDrive Sync Path
Place this folder at:
```
OneDrive/
└── SpykeTechnologiesInc/
    └── Website/
        └── SpykeTechnologiesSite/   ← copy folder here
            ├── index.html
            ├── style.css
            ├── script.js
            ├── README.md
            └── assets/
                ├── favicon.svg
                ├── hero_mining.jpg
                └── services_bg.jpg
```
Then push from here to GitHub.

## File Map
| File | Purpose |
|---|---|
| `index.html` | Main entry point — full bilingual site (EN/FR), all sections |
| `style.css` | Design tokens, base reset, all component styles, responsive breakpoints, dark mode |
| `script.js` | Language switcher (EN/FR), dark/light toggle, scroll animations, mobile nav |
| `assets/favicon.svg` | Brand favicon derived from Spyke mark |
| `assets/hero_mining.jpg` | Hero section background image |
| `assets/services_bg.jpg` | Services section background art |

## Brand Colors
- Primary: `#0A346C` Industrial Deep Navy
- Accent: `#FFB800` Safety Amber
- Neutral: `#708090` Cool Slate Grey
- Base: `#F2F4F7` Off-White/Steel
