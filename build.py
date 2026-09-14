#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Static site generator for Spyke Technologies Inc. — bilingual (EN / FR).

    python3 build.py

English pages are written to the repository root; French pages are written to
fr/. Every asset reference is relative, so the site works from a GitHub Pages
project subpath (https://user.github.io/repo/) and from a custom domain
without modification.

Copy lives in content_en.py / content_fr.py and offers_en.py / offers_fr.py.
"""

import html
import os
import shutil

import content_en
import content_fr
import offers_en
import offers_fr

HERE = os.path.dirname(os.path.abspath(__file__))

SITE_NAME = "Spyke Technologies Inc."
EMAIL = "info@spyketech.ca"
LI_PERSONAL = "https://www.linkedin.com/in/sandy-pyke-05b07720/"
LI_COMPANY = "https://www.linkedin.com/company/spyke-technologies-inc"
# Replace with your own endpoint — see README.md
FORM_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"
YEAR = "2026"
BASE = "https://www.spyketech.ca/"

LANGS = {"en": (content_en.C, offers_en.OFFERS), "fr": (content_fr.C, offers_fr.OFFERS)}
OFFER_KEYS = ["a", "b", "c", "d"]


def e(text):
    return html.escape(str(text), quote=False)


# --------------------------------------------------------------------------
# Chrome
# --------------------------------------------------------------------------

def brand_logo(p, cls="brand__logo"):
    return (
        f'<img class="{cls} {cls}--light" src="{p}assets/brand/SpykeTechIncColor.svg" '
        f'alt="{SITE_NAME}" width="512" height="128" decoding="async">'
        f'<img class="{cls} {cls}--dark" src="{p}assets/brand/SpykeTechIncWhite.svg" '
        f'alt="" aria-hidden="true" width="512" height="128" decoding="async">'
    )


def header(c, p, current):
    links = []
    for href, label in c["nav"]:
        cur = ' aria-current="page"' if href == current else ""
        links.append(f'<a href="{href}"{cur}>{e(label)}</a>')
    cta_href, cta_label = c["nav_cta"]
    cur = ' aria-current="page"' if current == cta_href else ""
    links.append(f'<a class="btn btn--primary nav__cta" href="{cta_href}"{cur}>{e(cta_label)}</a>')
    nav = "\n        ".join(links)

    # Counterpart page in the other language.
    alt = ("../" + current) if c["lang"] == "fr" else ("fr/" + current)

    return f"""  <a class="skip-link" href="#main">{e(c['skip'])}</a>
  <header class="header">
    <div class="wrap header__inner">
      <a class="brand" href="index.html" aria-label="{e(c['home_label'])}">
        {brand_logo(p)}
      </a>
      <nav class="nav" id="site-nav" data-open="false" aria-label="Primary">
        {nav}
      </nav>
      <div class="header__actions">
        <a class="lang-btn" href="{alt}" hreflang="{c['other_lang']}" lang="{c['other_lang']}" aria-label="{e(c['other_lang_aria'])}">{c['other_lang_label']}</a>
        <button class="icon-btn" type="button" data-theme-toggle aria-label="{e(c['theme_to_dark'])}" data-label-dark="{e(c['theme_to_dark'])}" data-label-light="{e(c['theme_to_light'])}"></button>
        <button class="icon-btn nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="site-nav" aria-label="{e(c['nav_open'])}" data-label-open="{e(c['nav_open'])}" data-label-close="{e(c['nav_close'])}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </div>
  </header>
"""


def footer(c, p):
    offers = "".join(
        f'<li><a href="{o["slug"]}">{e(o["tag"])} — {e(o["name"])}</a></li>' for o in c["offers_meta"]
    )
    site = "".join(f'<li><a href="{h}">{e(l)}</a></li>' for h, l in c["nav"])
    return f"""  <footer class="footer">
    <div class="wrap">
      <div class="footer__top">
        <div class="footer__brand">
          <a class="brand" href="index.html" aria-label="{e(c['home_label'])}">
            <img class="brand__logo" src="{p}assets/brand/SpykeTechIncWhite.svg" alt="{SITE_NAME}" width="512" height="128" loading="lazy" decoding="async">
          </a>
          <p>{e(c['footer_tagline'])}</p>
          <p class="footer__note">{e(c['footer_note'])}</p>
        </div>
        <div>
          <h4>{e(c['footer_offers_title'])}</h4>
          <ul>{offers}</ul>
        </div>
        <div>
          <h4>{e(c['footer_nav_title'])}</h4>
          <ul>{site}<li><a href="{c['nav_cta'][0]}">{e(c['nav_cta'][1])}</a></li></ul>
        </div>
        <div>
          <h4>{e(c['footer_contact_title'])}</h4>
          <ul>
            <li><a href="mailto:{EMAIL}">{EMAIL}</a></li>
            <li><a href="{LI_COMPANY}" rel="noopener">{e(c['li_company_label'])}</a></li>
            <li><a href="{LI_PERSONAL}" rel="noopener">{e(c['li_personal_label'])}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>{e(c['footer_legal'].format(year=YEAR))}</span>
        <span>{e(c['footer_location'])}</span>
      </div>
    </div>
  </footer>
"""


PAGE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{description}">
  <link rel="canonical" href="{base}{canon}">
  <link rel="alternate" hreflang="en" href="{base}{slug}">
  <link rel="alternate" hreflang="fr" href="{base}fr/{slug}">
  <link rel="alternate" hreflang="x-default" href="{base}{slug}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="{site}">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:locale" content="{locale}">
  <meta property="og:image" content="{p}assets/img/hero-underground.webp">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#0A346C">
  <link rel="icon" href="{p}assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://api.fontshare.com">
  <link rel="preconnect" href="https://cdn.fontshare.com" crossorigin>
  <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f%5B%5D=cabinet-grotesk@800,700&amp;display=swap">
  <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f%5B%5D=satoshi@400,500,700&amp;display=swap">
  <link rel="stylesheet" href="{p}assets/css/style.css">
{head_extra}</head>
<body>
{header}
  <main id="main">
{body}
  </main>
{footer}
  <script src="{p}assets/js/main.js" defer></script>
</body>
</html>
"""


def org_jsonld(c):
    return """  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Spyke Technologies Inc.",
    "description": "Independent mining technology consultancy: mining application definition, field demonstration platforms, mine-ready productization assessment and prototype-to-channel readiness programs.",
    "email": "info@spyketech.ca",
    "url": "https://www.spyketech.ca/",
    "areaServed": "Worldwide",
    "availableLanguage": ["en", "fr"],
    "founder": { "@type": "Person", "name": "Sandy Pyke" },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Montr\\u00e9al",
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://www.linkedin.com/company/spyke-technologies-inc",
      "https://www.linkedin.com/in/sandy-pyke-05b07720/"
    ]
  }
  </script>
"""


# --------------------------------------------------------------------------
# Fragments
# --------------------------------------------------------------------------

def crumbs(c, title):
    return (
        '<nav class="crumbs" aria-label="Breadcrumb">'
        f'<a href="index.html">{e(c["breadcrumb_home"])}</a><span>/</span>{e(title)}</nav>'
    )


def pagehero(c, d, extra=""):
    return f"""    <section class="pagehero">
      <div class="wrap pagehero__inner">
        {crumbs(c, d['eyebrow'])}
        <p class="eyebrow">{e(d['eyebrow'])}</p>
        <h1>{e(d['h1'])}</h1>
        <p class="lede">{e(d['lead'])}</p>
{extra}      </div>
    </section>
"""


def cta_band(c, p, h2, body, btn, second=None, img="field-demonstrator.webp", alt=""):
    extra = ""
    if second:
        extra = f'<a class="btn btn--onDark" href="{second[0]}">{e(second[1])}</a>'
    return f"""    <section class="band">
      <img src="{p}assets/img/{img}" alt="{e(alt)}" loading="lazy" width="1400" height="933">
      <div class="wrap band__inner">
        <p class="eyebrow">{e(c['nav_cta'][1])}</p>
        <h2>{e(h2)}</h2>
        <p>{e(body)}</p>
        <div class="btn-row">
          <a class="btn btn--primary" href="{c['nav_cta'][0]}">{e(btn)}</a>
          {extra}
        </div>
      </div>
    </section>
"""


def offer_cards(c, more_label):
    out = []
    for i, o in enumerate(c["offers_meta"], start=1):
        out.append(
            f"""        <a class="card offer reveal" href="{o['slug']}">
          <span class="offer__index" aria-hidden="true">0{i}</span>
          <span class="card__tag">{e(o['tag'])}</span>
          <h3>{e(o['name'])}</h3>
          <p>{e(o['short'])}</p>
          <p class="card__meta"><strong>{e(o['stage'])}</strong> · {e(o['duration'])}</p>
          <span class="card__foot textlink">{e(more_label)} <span class="arrow" aria-hidden="true">&rarr;</span></span>
        </a>"""
        )
    return "\n".join(out)


def data_table(head, rows, wrap=False, label=""):
    cls = "data data--wrap" if wrap else "data"
    ths = "".join(f"<th scope=\"col\">{e(h)}</th>" for h in head)
    trs = []
    for r in rows:
        tds = "".join(f'<td data-label="{e(head[i])}">{cell}</td>' for i, cell in enumerate(r))
        trs.append(f"<tr>{tds}</tr>")
    cap = f"<caption class=\"sr-only\">{e(label)}</caption>" if label else ""
    return f"""        <div class="table-wrap reveal">
          <table class="{cls}">{cap}
            <thead><tr>{ths}</tr></thead>
            <tbody>
              {"".join(trs)}
            </tbody>
          </table>
        </div>"""


def section_head(label, h2, lede=""):
    l = f'<p class="lede">{e(lede)}</p>' if lede else ""
    return f"""        <div class="section-head reveal">
          <p class="eyebrow">{e(label)}</p>
          <h2>{e(h2)}</h2>
          {l}
        </div>"""


def pill_grid(items):
    """items: list of strings, or (title, body) tuples."""
    out = []
    for it in items:
        if isinstance(it, (list, tuple)):
            out.append(f"<div><h4>{e(it[0])}</h4><p>{e(it[1])}</p></div>")
        else:
            out.append(f"<div><h4>{e(it)}</h4></div>")
    return f'        <div class="pills reveal">{"".join(out)}</div>'


def bullet_list(items, cls="prose reveal"):
    lis = "".join(f"<li>{e(i)}</li>" for i in items)
    return f'        <div class="{cls}"><ul>{lis}</ul></div>'


# --------------------------------------------------------------------------
# Pages
# --------------------------------------------------------------------------

def page_home(c, p):
    d = c["home"]
    stats = "".join(
        f'<div class="stats__item"><dt>{e(a)}</dt><dd><strong>{e(b)}</strong><span>{e(cc)}</span></dd></div>'
        for a, b, cc in d["stats"]
    )
    rail = ""
    for i, (title, tag, dec) in enumerate(c["stages"], start=1):
        slug = c["offers_meta"][i - 1]["slug"]
        rail += f"""          <div class="rail__item reveal"><div class="rail__num">0{i}</div><div class="rail__body">
            <h3>{e(title)}</h3>
            <p><a class="textlink" href="{slug}">{e(tag)} — {e(c['offers_meta'][i-1]['name'])}</a></p>
            <span class="rail__decision"><strong>{e(d['stages_decision'])}:</strong> {e(dec)}</span>
          </div></div>
"""
    route_rows = [
        (e(o["start"]), e(o["question"]), f'<a class="textlink" href="{o["slug"]}">{e(o["tag"])}</a>')
        for o in c["offers_meta"]
    ]
    return f"""    <section class="hero">
      <img class="hero__bg" src="{p}assets/img/hero-underground.webp" alt="{e(d['hero_alt'])}" width="1400" height="933" fetchpriority="high">
      <div class="wrap hero__inner">
        <p class="eyebrow">{e(d['hero_eyebrow'])}</p>
        <h1>{e(d['hero_h1_a'])}<em>{e(d['hero_h1_accent'])}</em></h1>
        <p class="lede">{e(d['hero_sub'])}</p>
        <div class="btn-row">
          <a class="btn btn--primary" href="pathway.html">{e(d['hero_cta1'])}</a>
          <a class="btn btn--onDark" href="offers.html">{e(d['hero_cta2'])}</a>
        </div>
      </div>
    </section>

    <section class="wrap" aria-label="{e(d['pos_label'])}">
      <dl class="stats">{stats}</dl>
    </section>

    <section class="section">
      <div class="wrap">
{section_head(d['pos_label'], d['pos_h2'])}
        <div class="split">
          <div class="split__media reveal">
            <img src="{p}assets/img/application-framing.webp" alt="{e(c['offers_meta'][0]['alt'])}" loading="lazy" width="1400" height="933">
            <p class="figure-note">{c['fig']} 01 — {e(c['stages'][0][0])}</p>
          </div>
          <div class="prose reveal">
            <p>{e(d['pos_p1'])}</p>
            <p>{e(d['pos_p2'])}</p>
            <p class="footnote">{e(d['pos_note'])}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--offset">
      <div class="wrap">
{section_head(d['stages_label'], d['stages_h2'], d['stages_intro'])}
        <div class="rail">
{rail}        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
{section_head(d['offers_label'], d['offers_h2'], d['offers_intro'])}
        <div class="grid grid--2">
{offer_cards(c, d['offers_more'])}
        </div>
      </div>
    </section>

    <section class="section section--offset">
      <div class="wrap">
{section_head(d['route_label'], d['route_h2'], d['route_intro'])}
{data_table(d['route_head'], route_rows, wrap=True, label=d['route_h2'])}
        <p class="section-foot"><a class="textlink" href="pathway.html">{e(d['route_cta'])} <span class="arrow" aria-hidden="true">&rarr;</span></a></p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
{section_head(d['readiness_label'], d['readiness_h2'], d['readiness_intro'])}
        <ul class="tags tags--lg reveal">{"".join(f'<li>{e(x)}</li>' for x in d['readiness'])}</ul>
      </div>
    </section>

    <section class="section section--offset">
      <div class="wrap">
{section_head(d['delivery_label'], d['delivery_h2'])}
        <div class="split split--reverse">
          <div class="split__media reveal">
            <img src="{p}assets/img/design-review.webp" alt="{e(d['delivery_alt'])}" loading="lazy" width="1400" height="933">
            <p class="figure-note">{c['fig']} 02 — {e(d['delivery_label'])}</p>
          </div>
          <div class="prose reveal">
            <p>{e(d['delivery_p1'])}</p>
            <p>{e(d['delivery_p2'])}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap wrap--default">
{section_head(d['bound_label'], d['bound_h2'])}
        <div class="callout reveal">
          <p>{e(d['bound_p1'])}</p>
          <p>{e(d['bound_p2'])}</p>
          <p>{e(d['bound_p3'])}</p>
        </div>
      </div>
    </section>

{cta_band(c, p, d['cta_h2'], d['cta_p'], d['cta_btn'], second=('offers.html', d['hero_cta2']), alt=c['offers_meta'][1]['alt'])}"""


def page_offers(c, p):
    d = c["offers"]
    rows = [
        (
            f'<a class="textlink" href="{o["slug"]}">{e(o["tag"])} — {e(o["name"])}</a>',
            e(o["start"]),
            e(o["question"]),
            e(o["outcome"]),
            e(o["duration"]),
        )
        for o in c["offers_meta"]
    ]
    cards = ""
    for i, o in enumerate(c["offers_meta"], start=1):
        cards += f"""        <article class="card card--flush reveal">
          <span class="card__tag">{e(o['tag'])} · {e(o['stage'])}</span>
          <h3>{e(o['name'])}</h3>
          <p class="card__q">{e(o['question'])}</p>
          <dl class="card__dl">
            <div><dt>{e(d['detail_best'])}</dt><dd>{e(o['start'])}</dd></div>
            <div><dt>{e(d['detail_out'])}</dt><dd>{e(o['outcome'])}</dd></div>
          </dl>
          <a class="textlink" href="{o['slug']}">{e(d['detail_more'])} <span class="arrow" aria-hidden="true">&rarr;</span></a>
        </article>"""
    return f"""{pagehero(c, d)}
    <section class="section">
      <div class="wrap wrap--wide">
{section_head(d['table_label'], d['h1'])}
{data_table(d['table_head'], rows, wrap=True, label=d['table_label'])}
      </div>
    </section>

    <section class="section section--offset">
      <div class="wrap">
{section_head(d['cards_label'], d['cards_h2'])}
        <div class="grid grid--2">
{cards}
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap wrap--default">
{section_head(d['rules_label'], d['rules_h2'])}
{bullet_list(d['rules'], cls='prose prose--check reveal')}
      </div>
    </section>

{cta_band(c, p, d['cta_h2'], d['cta_p'], d['cta_btn'], second=('pathway.html', d['cta_btn2']), img='channel-readiness.webp', alt=c['offers_meta'][3]['alt'])}"""


def page_pathway(c, p):
    d = c["pathway"]
    chain_rows = [
        (e(s[0]), f'<a class="textlink" href="{c["offers_meta"][i]["slug"]}">{e(s[1])}</a>', e(s[2]))
        for i, s in enumerate(c["stages"])
    ]
    route_rows = [
        (e(a), e(b), f'<a class="textlink" href="{href}">{e(tag)}</a>')
        for a, b, tag, href in d["routes"]
    ]
    trig = ""
    for title, items in d["trig_groups"]:
        lis = "".join(f"<li>{e(i)}</li>" for i in items)
        trig += f"""        <div class="disclosure reveal">
          <h3>{e(title)}</h3>
          <ul>{lis}</ul>
        </div>"""
    net_rows = [(e(a), e(b), e(cc)) for a, b, cc in d["net"]]
    return f"""{pagehero(c, d)}
    <section class="section">
      <div class="wrap">
{section_head(d['chain_label'], d['chain_h2'])}
{data_table(d['chain_head'], chain_rows, wrap=True, label=d['chain_h2'])}
      </div>
    </section>

    <section class="section section--offset">
      <div class="wrap wrap--wide">
{section_head(d['route_label'], d['route_h2'])}
{data_table(d['route_head'], route_rows, wrap=True, label=d['route_h2'])}
      </div>
    </section>

    <section class="section">
      <div class="wrap">
{section_head(d['trig_label'], d['trig_h2'])}
        <div class="grid grid--3 grid--top">
{trig}
        </div>
      </div>
    </section>

    <section class="section section--offset">
      <div class="wrap wrap--default">
{section_head(d['rules_label'], d['rules_h2'])}
{bullet_list(d['rules'], cls='prose prose--check reveal')}
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap wrap--default">
{section_head(d['fit_label'], d['fit_h2'], d['fit_intro'])}
        <div class="callout callout--warn reveal">
          <ul>{"".join(f"<li>{e(i)}</li>" for i in d['fit'])}</ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap wrap--wide">
{section_head(d['net_label'], d['net_h2'], d['net_intro'])}
{data_table(d['net_head'], net_rows, wrap=True, label=d['net_h2'])}
      </div>
    </section>

{cta_band(c, p, d['cta_h2'], d['cta_p'], d['cta_btn'], img='design-review.webp', alt=c['home']['delivery_alt'])}"""


def page_offer(c, o, key, p):
    idx = OFFER_KEYS.index(key)
    img = c["offers_meta"][idx]["img"]
    alt = c["offers_meta"][idx]["alt"]

    hero_extra = f"""        <div class="btn-row">
          <a class="btn btn--primary" href="{c['nav_cta'][0]}">{e(o['cta_primary'])}</a>
          <a class="btn btn--onDark" href="offers.html">{e(c['home']['hero_cta2'])}</a>
        </div>
"""
    combo = f'<p class="callout callout--slim reveal">{e(o["combo"])}</p>' if o.get("combo") else ""

    # Section: entry criteria
    entry = bullet_list(o["entry"], cls="prose prose--check reveal")

    # Method / workstreams (A, B) or phases (D) or domains (C)
    mid = ""
    if "work" in o and key in ("a", "b"):
        items = "".join(
            f'<div class="numbered__item reveal"><span class="numbered__n">{i:02d}</span>'
            f"<div><h3>{e(t)}</h3><p>{e(b)}</p></div></div>"
            for i, (t, b) in enumerate(o["work"], start=1)
        )
        mid = f"""    <section class="section section--offset">
      <div class="wrap">
{section_head(o['work_label'], o['work_h2'])}
        <div class="numbered">{items}</div>
      </div>
    </section>
"""
    if key == "c":
        items = "".join(
            f'<div class="numbered__item reveal"><span class="numbered__n">{i:02d}</span>'
            f"<div><h3>{e(t)}</h3><p>{e(b)}</p></div></div>"
            for i, (t, b) in enumerate(o["dom"], start=1)
        )
        mid = f"""    <section class="section section--offset">
      <div class="wrap">
{section_head(o['dom_label'], o['dom_h2'])}
        <div class="numbered">{items}</div>
      </div>
    </section>
"""
    if key == "d":
        blocks = ""
        for i, (name, dur, purpose, outs) in enumerate(o["phases"], start=1):
            lis = "".join(f"<li>{e(x)}</li>" for x in outs)
            blocks += f"""          <article class="phase reveal">
            <div class="phase__head">
              <span class="phase__n" aria-hidden="true">0{i}</span>
              <div>
                <h3>{e(name)}</h3>
                <p class="phase__meta">{e(dur)}</p>
              </div>
            </div>
            <p class="phase__purpose">{e(purpose)}</p>
            <ul>{lis}</ul>
          </article>"""
        roles = "".join(
            f'<div><h4>{e(t)}</h4><p>{e(b)}</p></div>' for t, b in o["work"]
        )
        mid = f"""    <section class="section section--offset">
      <div class="wrap">
{section_head(o['phase_label'], o['phase_h2'])}
        <div class="phases">
{blocks}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
{section_head(o['work_label'], o['work_h2'])}
        <div class="pills reveal">{roles}</div>
      </div>
    </section>

    <section class="section section--offset">
      <div class="wrap wrap--default">
{section_head(o['gov_label'], o['gov_h2'])}
{bullet_list(o['gov'], cls='prose prose--check reveal')}
      </div>
    </section>
"""

    deliv = ""
    if "deliv" in o:
        rows = [(e(t), e(b)) for t, b in o["deliv"]]
        head = (o["deliv_label"], o["deliv_h2"].rstrip("."))
        deliv = f"""    <section class="section">
      <div class="wrap wrap--default">
{section_head(o['deliv_label'], o['deliv_h2'])}
{data_table(head, rows, wrap=True, label=o['deliv_h2'])}
      </div>
    </section>
"""

    out = ""
    if "out" in o:
        out = f"""    <section class="section section--offset">
      <div class="wrap wrap--default">
{section_head(o['out_label'], o['out_h2'])}
        <div class="callout callout--warn reveal">
          <ul>{"".join(f"<li>{e(i)}</li>" for i in o['out'])}</ul>
        </div>
      </div>
    </section>
"""

    dm = "".join(
        f'<div class="stats__item"><dt>{e(t)}</dt><dd><span>{e(b)}</span></dd></div>'
        for t, b in o["deliv_model"]
    )

    return f"""{pagehero(c, o, hero_extra)}
    <section class="section section--tight">
      <div class="wrap">
        <div class="split">
          <div class="split__media reveal">
            <img src="{p}assets/img/{img}" alt="{e(alt)}" loading="lazy" width="1400" height="933">
            <p class="figure-note">{c['fig']} 01 — {e(c['offers_meta'][idx]['stage'])}</p>
          </div>
          <div class="prose reveal">
            <p class="eyebrow">{e(o['purpose_label'])}</p>
            <h2 class="q">{e(o['purpose_q'])}</h2>
            <p>{e(o['purpose_p'])}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap wrap--default">
{section_head(o['entry_label'], o['entry_h2'])}
{entry}
        {combo}
      </div>
    </section>

{mid}{deliv}{out}    <section class="section section--tight">
      <div class="wrap">
{section_head(o['deliv_model_label'], o['deliv_model_h2'])}
        <dl class="stats stats--4">{dm}</dl>
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap wrap--default">
{section_head(o['next_label'], o['next_h2'])}
        <div class="prose reveal">
          <p>{e(o['next_p'])}</p>
          <p><a class="textlink" href="{o['next_link']}">{e(o['next_link_label'])} <span class="arrow" aria-hidden="true">&rarr;</span></a></p>
        </div>
      </div>
    </section>

{cta_band(c, p, o['h1'], o['lead'], o['cta_primary'], second=('pathway.html', c['pathway']['eyebrow']), img=img, alt=alt)}"""


def page_industries(c, p):
    d = c["industries"]
    who = "".join(
        f'<article class="card card--flush reveal"><h3>{e(t)}</h3><p>{e(b)}</p></article>'
        for t, b in d["who"]
    )
    dom = "".join(
        f'<article class="card card--flush reveal"><h3>{e(t)}</h3><p>{e(b)}</p></article>'
        for t, b in d["dom"]
    )
    stake = "".join(f"<li>{e(s)}</li>" for s in d["stake"])
    return f"""{pagehero(c, d)}
    <section class="section">
      <div class="wrap">
{section_head(d['who_label'], d['who_h2'])}
        <div class="grid grid--3 grid--top">{who}</div>
      </div>
    </section>

    <section class="section section--offset">
      <div class="wrap">
{section_head(d['dom_label'], d['dom_h2'])}
        <div class="grid grid--3 grid--top">{dom}</div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
{section_head(d['ctx_label'], d['ctx_h2'], d['ctx_intro'])}
        <div class="split split--reverse">
          <div class="split__media reveal">
            <img src="{p}assets/img/openpit-industries.webp" alt="{e(d['ctx_alt'])}" loading="lazy" width="1400" height="933">
            <p class="figure-note">{c['fig']} 01 — {e(d['ctx_label'])}</p>
          </div>
{bullet_list(d['ctx'])}
        </div>
      </div>
    </section>

    <section class="section section--offset">
      <div class="wrap wrap--default">
{section_head(d['stake_label'], d['stake_h2'], d['stake_intro'])}
        <ul class="tags reveal">{stake}</ul>
      </div>
    </section>

{cta_band(c, p, d['cta_h2'], d['cta_p'], d['cta_btn'], second=('pathway.html', c['pathway']['eyebrow']), img='openpit-industries.webp', alt=d['ctx_alt'])}"""


def page_about(c, p):
    d = c["about"]
    bio = "".join(f"<p>{e(x)}</p>" for x in d["bio"])
    prin = "".join(f'<div><h4>{e(t)}</h4><p>{e(b)}</p></div>' for t, b in d["prin"])
    h = c["home"]
    return f"""{pagehero(c, d)}
    <section class="section section--tight">
      <div class="wrap">
        <div class="split split--portrait">
          <div class="portrait reveal">
            <img src="{p}assets/img/sandy-pyke.webp" alt="{e(d['photo_alt'])}" width="384" height="384" loading="lazy">
            <p class="portrait__name">{e(d['person_name'])}</p>
            <p class="portrait__role">{e(d['person_role'])}</p>
          </div>
          <div class="prose reveal">
            <p class="eyebrow">{e(d['bio_label'])}</p>
            {bio}
          </div>
        </div>
      </div>
    </section>

    <section class="section section--offset">
      <div class="wrap wrap--default">
{section_head(d['bg_label'], d['bg_h2'])}
{bullet_list(d['bg'], cls='prose prose--check reveal')}
      </div>
    </section>

    <section class="section">
      <div class="wrap">
{section_head(d['prin_label'], d['prin_h2'])}
        <div class="pills reveal">{prin}</div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap wrap--default">
{section_head(d['bound_label'], d['bound_h2'])}
        <div class="callout reveal">
          <p>{e(h['bound_p1'])}</p>
          <p>{e(h['bound_p2'])}</p>
          <p>{e(h['bound_p3'])}</p>
        </div>
      </div>
    </section>

{cta_band(c, p, d['cta_h2'], d['cta_p'], d['cta_btn'], img='design-review.webp', alt=h['delivery_alt'])}"""


def page_contact(c, p):
    d = c["contact"]
    stage = "".join(f"<option>{e(x)}</option>" for x in d["f_stage_opts"])
    interest = "".join(f"<option>{e(x)}</option>" for x in d["f_interest_opts"])
    nxt = "".join(
        f'<div class="numbered__item reveal"><span class="numbered__n">{i:02d}</span>'
        f"<div><h3>{e(t)}</h3><p>{e(b)}</p></div></div>"
        for i, (t, b) in enumerate(d["next"], start=1)
    )
    return f"""{pagehero(c, d)}
    <section class="section">
      <div class="wrap">
        <div class="contact-grid">
          <form class="form reveal" action="{FORM_ENDPOINT}" method="POST">
            <p class="eyebrow">{e(d['form_label'])}</p>
            <h2>{e(d['form_h2'])}</h2>
            <div class="field-row">
              <div class="field">
                <label for="name">{e(d['f_name'])}</label>
                <input id="name" name="name" type="text" autocomplete="name" required>
              </div>
              <div class="field">
                <label for="company">{e(d['f_company'])}</label>
                <input id="company" name="company" type="text" autocomplete="organization">
              </div>
            </div>
            <div class="field">
              <label for="email">{e(d['f_email'])}</label>
              <input id="email" name="email" type="email" autocomplete="email" required>
            </div>
            <div class="field-row">
              <div class="field">
                <label for="stage">{e(d['f_stage'])}</label>
                <select id="stage" name="stage">{stage}</select>
              </div>
              <div class="field">
                <label for="interest">{e(d['f_interest'])}</label>
                <select id="interest" name="interest">{interest}</select>
              </div>
            </div>
            <div class="field">
              <label for="message">{e(d['f_message'])}</label>
              <textarea id="message" name="message" rows="6" placeholder="{e(d['f_message_ph'])}" required></textarea>
            </div>
            <input type="hidden" name="_subject" value="Spyke Technologies — website enquiry">
            <input type="hidden" name="_language" value="{c['lang']}">
            <button class="btn btn--primary" type="submit">{e(d['f_submit'])}</button>
            <p class="form__note">{e(d['f_note'])}</p>
          </form>
          <div class="reveal">
            <p class="eyebrow">{e(d['details_label'])}</p>
            <h2>{e(d['details_h2'])}</h2>
            <dl class="contact-list">
              <div><dt>{e(d['d_email'])}</dt><dd><a href="mailto:{EMAIL}">{EMAIL}</a></dd></div>
              <div><dt>{e(d['d_region'])}</dt><dd>{e(d['d_region_v'])}</dd></div>
              <div><dt>{e(d['d_languages'])}</dt><dd>{e(d['d_languages_v'])}</dd></div>
              <div><dt>{e(d['d_li'])}</dt><dd><a href="{LI_PERSONAL}" rel="noopener">Sandy Pyke</a></dd></div>
              <div><dt>{e(d['d_lic'])}</dt><dd><a href="{LI_COMPANY}" rel="noopener">{SITE_NAME}</a></dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--offset">
      <div class="wrap wrap--default">
{section_head(d['next_label'], d['next_h2'])}
        <div class="numbered">{nxt}</div>
      </div>
    </section>
"""


def page_404(c, p):
    d = c["notfound"]
    cards = "".join(
        f'<a class="card" href="{h}"><h3>{e(l)}</h3></a>'
        for h, l in c["nav"] + [c["nav_cta"]]
    )
    return f"""    <section class="pagehero">
      <div class="wrap pagehero__inner">
        <p class="eyebrow">{e(d['eyebrow'])}</p>
        <h1>{e(d['h1'])}</h1>
        <p class="lede">{e(d['lead'])}</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="grid grid--3">{cards}</div>
        <p class="section-foot"><a class="textlink" href="index.html">{e(d['back'])} <span class="arrow" aria-hidden="true">&rarr;</span></a></p>
      </div>
    </section>
"""


# --------------------------------------------------------------------------
# Render
# --------------------------------------------------------------------------

def build_lang(lang):
    c, offers = LANGS[lang]
    p = c["dir_prefix"]
    outdir = HERE if lang == "en" else os.path.join(HERE, "fr")
    os.makedirs(outdir, exist_ok=True)
    locale = "en_CA" if lang == "en" else "fr_CA"

    pages = [
        (c["home"]["file"], c["home"]["title"], c["home"]["desc"], page_home(c, p), org_jsonld(c)),
        (c["offers"]["file"], c["offers"]["title"], c["offers"]["desc"], page_offers(c, p), ""),
        (c["pathway"]["file"], c["pathway"]["title"], c["pathway"]["desc"], page_pathway(c, p), ""),
    ]
    for k in OFFER_KEYS:
        o = offers[k]
        meta = c["offers_meta"][OFFER_KEYS.index(k)]
        pages.append((meta["slug"], o["title"], o["desc"], page_offer(c, o, k, p), ""))
    pages += [
        (c["industries"]["file"], c["industries"]["title"], c["industries"]["desc"], page_industries(c, p), ""),
        (c["about"]["file"], c["about"]["title"], c["about"]["desc"], page_about(c, p), ""),
        (c["contact"]["file"], c["contact"]["title"], c["contact"]["desc"], page_contact(c, p), ""),
        (c["notfound"]["file"], c["notfound"]["title"], c["notfound"]["desc"], page_404(c, p), ""),
    ]

    written = []
    for slug, title, desc, body, extra in pages:
        canon = (slug if lang == "en" else "fr/" + slug)
        if slug == "index.html":
            canon = "" if lang == "en" else "fr/"
        out = PAGE.format(
            lang=lang,
            locale=locale,
            title=e(title),
            description=e(desc),
            site=SITE_NAME,
            base=BASE,
            canon=canon,
            slug=slug,
            p=p,
            head_extra=extra,
            header=header(c, p, slug),
            body=body,
            footer=footer(c, p),
        )
        path = os.path.join(outdir, slug)
        with open(path, "w", encoding="utf-8") as f:
            f.write(out)
        written.append(slug)
    return written


def sitemap(en_pages):
    urls = []
    for slug in en_pages:
        if slug == "404.html":
            continue
        for pre in ("", "fr/"):
            loc = BASE + pre + ("" if slug == "index.html" else slug)
            alts = "".join(
                f'\n    <xhtml:link rel="alternate" hreflang="{lg}" href="{BASE}{pr}{"" if slug == "index.html" else slug}"/>'
                for lg, pr in (("en", ""), ("fr", "fr/"))
            )
            pri = "1.0" if slug == "index.html" else "0.8"
            urls.append(
                f"  <url>\n    <loc>{loc}</loc>{alts}\n    <priority>{pri}</priority>\n  </url>"
            )
    xml = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
        'xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        + "\n".join(urls)
        + "\n</urlset>\n"
    )
    with open(os.path.join(HERE, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(xml)


def main():
    # remove pages from the previous single-language structure
    for legacy in (
        "prototype-to-productization.html",
        "mine-readiness-assessment.html",
        "fractional-technical-leadership.html",
    ):
        path = os.path.join(HERE, legacy)
        if os.path.exists(path):
            os.remove(path)

    en = build_lang("en")
    fr = build_lang("fr")
    sitemap(en)
    print(f"Built {len(en)} English pages and {len(fr)} French pages + sitemap.xml")
    for s in en:
        print("  ", s, " / fr/" + s)


if __name__ == "__main__":
    main()
