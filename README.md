# Spyke Technologies Inc. — website

Static, dependency-free, **bilingual (EN / FR)** multi-page site. No build step is required to
publish: every file in this folder is served as-is. `build.py` is a generator that regenerates all
HTML from shared templates plus the four copy modules; you can also edit the `.html` files directly,
but changes there are overwritten the next time you run the generator.

## Contents

```
index.html                                              Home (EN)
offers.html                                             The four offers — comparison
pathway.html                                            Maturity pathway, entry points, routing
offer-a-mining-application-framing-sprint.html          Offer A
offer-b-mining-demonstration-platform-definition.html   Offer B
offer-c-mine-ready-productization-assessment.html       Offer C
offer-d-prototype-to-channel-readiness-program.html     Offer D
industries.html                                         Industries & applications
about.html                                              About
contact.html                                            Contact + enquiry form
404.html                                                Not-found page (GitHub Pages serves it)
fr/                                                     The same eleven pages in French
robots.txt, sitemap.xml                                 Crawl / indexing (both languages)
.nojekyll                                               Tells GitHub Pages to skip Jekyll
assets/css/style.css                                    Design system + all component styles
assets/js/main.js                                       Theme toggle, mobile nav, scroll reveal
assets/img/                                             Photography + headshot
assets/brand/                                           Official logo artwork (SVG + PNG)
assets/favicon.svg                                      Favicon (copy of STMarkColor.svg)
build.py                                                Page generator (Python 3, no packages)
content_en.py / content_fr.py                           Site copy: chrome + non-offer pages
offers_en.py / offers_fr.py                             Site copy: the four offer pages
```

All internal links, stylesheets, scripts and images use **relative paths** (no leading `/`), so the
site works unchanged at `https://<user>.github.io/<repo>/` and later at `https://www.spyketech.ca/`.
French pages are one directory deep and reference assets with `../`.

## Bilingual structure

- English lives at the root, French under `fr/` with the **same filenames**.
- The header carries a language button (`FR` on English pages, `EN` on French pages) that links to
  the counterpart of the current page, so a visitor never loses their place when switching.
- Every page declares `<html lang>` plus `hreflang` alternates for `en`, `fr` and `x-default`.
- `sitemap.xml` lists both languages with reciprocal `xhtml:link` alternates.
- Language is **not** auto-detected or redirected — GitHub Pages serves static files only, and
  silent redirects tend to trap visitors in the wrong language.

To change copy, edit the relevant module and re-run `python3 build.py`:

| File             | Covers                                                                   |
| ---------------- | ------------------------------------------------------------------------ |
| `content_en.py`  | Navigation, footer, home, offers index, pathway, industries, about, contact, 404 |
| `offers_en.py`   | The four offer detail pages                                              |
| `content_fr.py`  | French equivalent of `content_en.py`                                     |
| `offers_fr.py`   | French equivalent of `offers_en.py`                                      |

Both languages use identical dictionary keys, so a missing French key raises an error at build time
rather than silently publishing English text on a French page.

## Offer architecture reflected in the site

| Page      | Offer                                         | Question it answers                                            |
| --------- | --------------------------------------------- | -------------------------------------------------------------- |
| Offer A   | Mining Application Framing Sprint             | Where can this technology create practical value in mining?    |
| Offer B   | Mining Demonstration Platform Definition      | What demonstrator should be built, and what must it prove?     |
| Offer C   | Mine-Ready Productization Assessment          | What must change before it can be made, deployed and supported? |
| Offer D   | Prototype-to-Channel Readiness Program        | How is the roadmap converted into an executable program?       |

`offers.html` compares all four; `pathway.html` carries the four-stage chain, the entry-point
routing table, trigger events, progression rules, "not the right answer" criteria and the delivery
network table. Every offer page ends with a link to the next stage.

## 1. Publish on GitHub Pages

1. Create a repository (public, or private on a paid plan) — e.g. `spyke-website`.
2. Push the contents of this folder to the `main` branch, at the repository root:

   ```bash
   cd spyke-site
   git init
   git add .
   git commit -m "Bilingual site"
   git branch -M main
   git remote add origin https://github.com/<your-account>/spyke-website.git
   git push -u origin main
   ```

3. In the repository: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)** → Save
4. Wait for the green check on the Pages deployment, then open
   `https://<your-account>.github.io/spyke-website/`.

### Later: custom domain (spyketech.ca)

1. **Settings → Pages → Custom domain** → enter `www.spyketech.ca` → Save. This creates a `CNAME`
   file in the repository.
2. At your DNS provider add:
   - `CNAME` record: `www` → `<your-account>.github.io`
   - Apex `spyketech.ca` → four `A` records: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153` (and the equivalent `AAAA` records if you want IPv6).
3. Tick **Enforce HTTPS** once the certificate is issued (usually within an hour).
4. The canonical base is already `https://www.spyketech.ca/` (`BASE` in `build.py`). Change it there
   and re-run the generator if the final domain differs.

## 2. Activate the contact form

Both `contact.html` and `fr/contact.html` post to a placeholder endpoint:

```html
<form class="form" action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID" method="POST">
```

To make it live with [Formspree](https://formspree.io):

1. Create a free account and a new form; point it at `info@spyketech.ca`.
2. Copy the form ID (looks like `xrgvabcd`).
3. Replace `REPLACE_WITH_YOUR_FORM_ID` in `build.py` (`FORM_ENDPOINT`) and re-run `python3 build.py`
   so both languages are updated at once.
4. Submit the form once and confirm the verification email Formspree sends.

A hidden `_language` field is submitted with each enquiry (`en` or `fr`) so you know which language
to reply in. A `_subject` line is also set. To redirect to a thank-you page after submission, add:

```html
<input type="hidden" name="_next" value="https://www.spyketech.ca/contact.html?sent=1">
```

Netlify Forms is an equivalent option if you host there instead: add `netlify` and
`name="contact"` attributes to the `<form>` tag and drop the `action`.

## 3. Regenerating pages

```bash
cd spyke-site
python3 build.py
```

This rewrites all 22 `.html` files and `sitemap.xml`, and deletes the three pages from the previous
single-language site structure. Requires Python 3 only — no packages.

## 4. Local preview

```bash
cd spyke-site
python3 -m http.server 8000
# open http://localhost:8000          (English)
# open http://localhost:8000/fr/      (French)
```

## Design notes

- Typefaces: **Cabinet Grotesk** (display) and **Satoshi** (body), loaded from Fontshare. Note that
  Fontshare's API needs a **separate `<link>` per family** — combining two families in one request
  silently drops the second.
- Official palette: Industrial Deep Navy `#0A346C`, Safety Amber `#FFB800`, Cool Slate Grey
  `#708090`, Off-White / Steel `#F2F4F7`.
- Logos come from `assets/brand/`. The header and footer use `SpykeTechIncColor.svg` in the light
  theme and `SpykeTechIncWhite.svg` in the dark theme (CSS swap, no JavaScript). `STMarkColor.svg`
  is the favicon. Navy and mark-only variants are included for other uses.
- Light and dark themes; the toggle stores the choice in a first-party cookie (`spyke-theme`) so it
  survives navigation and works inside sandboxed preview frames, and otherwise follows the
  operating-system setting.
- Photography in `assets/img/` is generated imagery — not client sites, client equipment or stock
  photos. `assets/img/sandy-pyke.webp` is the supplied headshot.

## Content governance

The copy deliberately contains **no client names, no partner or distributor names, no rates, no
capacity figures, no fee estimates and no contractual terms**. Offer pages describe purpose, entry
criteria, method, deliverables, explicit exclusions and delivery model only. Keep it that way when
editing — the working-boundaries paragraphs on the home and about pages, the "does not become"
block on Offer D, and the exclusion lists on every offer page are worded carefully and should be
changed only with intent. In particular the site must not imply certification guarantees or
manufacturer-of-record responsibility.
