/**
 * script.js — Spyke Technologies Inc.
 * Handles: bilingual i18n (EN/FR), dark/light mode toggle,
 *          scroll-driven fade-in animations, sticky header behavior,
 *          mobile navigation, and smooth scroll.
 * Static only — no external dependencies, no localStorage (sandbox-safe).
 * GitHub Pages compatible.
 */

'use strict';

/* ══════════════════════════════════════════════════════════════════════════
   TRANSLATIONS — English and French
   All user-visible strings are keyed here.
   ══════════════════════════════════════════════════════════════════════════ */

const TRANSLATIONS = {
  en: {
    skip_link: 'Skip to main content',
    nav_about: 'About',
    nav_services: 'Services',
    nav_how: 'How I Work',
    nav_contact: 'Contact',

    hero_eyebrow: 'Mining Technology Consulting',
    hero_heading: 'From Validated Prototype\nto Mine-Ready Product.',
    hero_sub: 'Senior technical advisory for mining OEMs and industrial technology firms navigating the gap between field validation and commercial productization.',
    cta_contact: 'Start a Conversation',
    cta_services: 'View Services',

    about_label: 'Experience',
    about_heading: 'Thirty Years Building Technology That Works at the Face.',
    about_lead: 'Since 1994, I have worked inside the development and deployment cycle for mining technology systems — starting when GPS-guided machine control was still a field experiment, through the era of high-speed machine-to-infrastructure networking, into today\'s autonomous and remote operation platforms.',
    about_body1: 'That experience spans surface and underground environments, across monitoring, navigation, control, production tracking, and condition-based platform hardware. I have led cross-functional teams covering electromechanical engineering, embedded software, field validation, order fulfillment, EHS, and global support — at every stage of a product\'s life, from early prototype through multi-year fleet deployment.',
    about_body2: 'I now bring that depth to clients directly: mining OEMs, technology startups, and industrial equipment companies that need senior-level technical leadership without the overhead of a full-time executive hire.',

    timeline_1994: 'Began career in mining technology — GPS, machine guidance, and monitoring systems for surface equipment.',
    timeline_2000s: 'Led development of ruggedized hardware platforms for underground and surface mining — navigation, communications, and production monitoring.',
    timeline_2010s: 'Senior technical and operations leadership: cross-functional teams, global field deployment, manufacturing readiness, and lifecycle support programs.',
    timeline_2020s: 'Advanced autonomous and remote machine control systems. Prototype assessment, productization roadmaps, and certification readiness for new technology entrants.',
    timeline_now_year: 'Now',
    timeline_now: 'Spyke Technologies Inc. — independent consulting for mining OEMs and technology firms navigating prototype-to-product transitions.',

    services_label: 'Services',
    services_heading: 'What I Bring to the Table.',
    services_intro: 'Focused engagements built around the specific challenges of taking a mining technology product from a working prototype to something that can be manufactured, deployed, and supported at scale.',

    svc1_title: 'Prototype Productization Strategy',
    svc1_desc: 'Structured assessment of your current prototype state. Gap analysis against commercial readiness criteria — manufacturability, field serviceability, regulatory and certification pathway, dealer and support infrastructure. Phased roadmap to close those gaps systematically.',

    svc2_title: 'Ruggedization for Mining Environments',
    svc2_desc: 'Technical review of hardware and system architecture against the realities of mine-site operation: vibration, shock, dust ingress, moisture, temperature cycling, EMC, and power quality. Specific, actionable hardening recommendations with experience behind each one.',

    svc3_title: 'Design for Manufacturability & Serviceability',
    svc3_desc: 'Translate prototype engineering into designs that can be built consistently, tested reliably, and repaired efficiently in the field. Supply chain considerations, assembly procedures, spare parts strategy, and the real cost of inaccessible components at 3 a.m. three kilometres underground.',

    svc4_title: 'Technical Leadership for Product Teams',
    svc4_desc: 'Fractional technical leadership for early-stage or transition-stage teams. Structured reviews, design authority, process discipline, and hands-on coaching — without the friction of a permanent executive search. Engagement scoped to your specific need.',

    svc5_title: 'Design Reviews & Mentoring',
    svc5_desc: 'Formal and informal design reviews at any stage of development. Team mentoring in systems engineering discipline, hardware-software integration, field validation planning, and deployment readiness. Building team capability alongside the product.',

    svc6_title: 'Certification & Deployment Readiness',
    svc6_desc: 'Advisory support for EMC and environmental certification planning, field deployment logistics, site commissioning preparation, and the operational and safety considerations that determine whether a first deployment builds confidence or destroys it.',

    how_label: 'Process',
    how_heading: 'A Structured Approach. Practical Results.',
    how_intro: 'Every engagement starts with honest assessment and ends with something your team can execute. No methodology theater.',

    how_step1_title: 'Assess the Current State',
    how_step1_desc: 'Walk the prototype with your team. Review architecture, design decisions, test data, and field observations. Understand what is actually working and what is assumptions-on-paper.',

    how_step2_title: 'Identify Mine-Readiness Gaps',
    how_step2_desc: 'Map the delta between where the product is and where it needs to be to survive real mine-site conditions — and to be built, deployed, and supported without heroics.',

    how_step3_title: 'Build a Phased Roadmap',
    how_step3_desc: 'Prioritize the gaps. Build a phased productization plan with clear milestones, decision gates, and resource requirements — structured so your team can actually execute it.',

    how_step4_title: 'Support Execution & Transfer',
    how_step4_desc: 'Stay engaged through design reviews, technical gate checks, and targeted coaching. Transfer capability to your team so they own the process, not just the deliverable.',

    harsh_label: 'Harsh Environment Engineering',
    harsh_heading: 'The Mine Doesn\'t Care About Lab Test Results.',
    harsh_body1: 'Field conditions routinely exceed design envelopes. Vibration spectra that no shake table reproduces. Dust concentrations that defeat every sealing approach that wasn\'t designed for it. Temperature swings from cold-soak startup to sustained full-load thermal, on the same shift.',
    harsh_body2: 'EMC in underground environments is not a checkbox — it is a system architecture decision. Connector selection is a lifecycle reliability decision. Maintenance access is a safety decision. These realities are baked into the advisory from the first conversation.',

    factor_vibration: 'Vibration & Shock',
    factor_thermal: 'Thermal Cycling',
    factor_dust: 'Dust & Ingress',
    factor_emc: 'EMC / Electrical Noise',
    factor_sealing: 'Sealing & Protection',
    factor_power: 'Power Quality',
    factor_service: 'Field Serviceability',
    factor_lifecycle: 'Lifecycle Reliability',

    conf_label: 'Confidentiality',
    conf_heading: 'Discretion Is a Professional Standard, Not a Feature.',
    conf_body1: 'Consulting in this industry means working with technology that is not yet public, roadmaps that are commercially sensitive, and organizational challenges that require absolute confidence. All engagements are conducted with strict professional discretion.',
    conf_body2: 'References and past project descriptions are generalized to protect client confidentiality. No client names, proprietary systems, or commercially sensitive details are disclosed without explicit written authorization.',
    tenet1: 'Strict non-disclosure, always.',
    tenet2: 'No client names shared without authorization.',
    tenet3: 'Engagement terms documented and respected.',

    contact_label: 'Contact',
    contact_heading: 'Ready to Move Your Product Forward?',
    contact_body: 'If you are leading a mining technology product that needs senior technical perspective — on architecture, productization strategy, or a specific engineering challenge — let\'s talk. Initial conversations are straightforward and confidential.',
    contact_email_label: 'Email',
    contact_location_label: 'Location',
    contact_location_value: 'Montreal, Quebec, Canada Area',
    contact_linkedin: 'Sandy Pyke on LinkedIn',
    cta_contact_main: 'Start a Conversation',

    footer_tagline: 'Mining Technology Consulting · Montreal, Quebec, Canada',
    footer_copy: '© 2025 Spyke Technologies Inc. All rights reserved.',

    lang_switch_label: 'Passer en français',
  },

  fr: {
    skip_link: 'Passer au contenu principal',
    nav_about: 'À propos',
    nav_services: 'Services',
    nav_how: 'Comment je travaille',
    nav_contact: 'Contact',

    hero_eyebrow: 'Conseil en technologies minières',
    hero_heading: 'Du prototype validé\nau produit prêt pour la mine.',
    hero_sub: 'Conseil technique de haut niveau pour les équipementiers miniers et les entreprises de technologie industrielle qui cherchent à combler l\'écart entre la validation terrain et la mise en marché commerciale.',
    cta_contact: 'Démarrer une conversation',
    cta_services: 'Voir les services',

    about_label: 'Expérience',
    about_heading: 'Trente ans à concevoir des technologies qui fonctionnent au fond.',
    about_lead: 'Depuis 1994, j\'ai travaillé au cœur du cycle de développement et de déploiement des systèmes de technologies minières — depuis les premières expériences de guidage par GPS jusqu\'aux plateformes d\'opération autonome et télécommandée d\'aujourd\'hui.',
    about_body1: 'Cette expérience couvre les environnements de surface et souterrains, dans les domaines de la surveillance, de la navigation, du contrôle, du suivi de production et des plateformes matérielles axées sur l\'état des équipements. J\'ai dirigé des équipes pluridisciplinaires couvrant l\'ingénierie électromécanique, les logiciels embarqués, la validation terrain, l\'exécution des commandes, la SST et le support mondial.',
    about_body2: 'Je mets maintenant cette profondeur directement au service de mes clients : équipementiers miniers, startups technologiques et sociétés d\'équipements industriels qui ont besoin d\'un leadership technique senior sans les contraintes d\'un recrutement permanent.',

    timeline_1994: 'Début de carrière en technologies minières — GPS, guidage de machines et systèmes de surveillance pour équipements de surface.',
    timeline_2000s: 'Direction du développement de plateformes matérielles robustifiées pour mines souterraines et de surface — navigation, communications et suivi de production.',
    timeline_2010s: 'Leadership technique et opérationnel senior : équipes pluridisciplinaires, déploiement terrain mondial, préparation à la fabrication et programmes de support sur cycle de vie complet.',
    timeline_2020s: 'Systèmes avancés de contrôle autonome et télécommandé. Évaluation de prototypes, feuilles de route de mise en marché et préparation à la certification pour les nouveaux acteurs technologiques.',
    timeline_now_year: 'Maintenant',
    timeline_now: 'Spyke Technologies Inc. — conseil indépendant pour les équipementiers miniers et les entreprises technologiques en transition du prototype au produit.',

    services_label: 'Services',
    services_heading: 'Ce que j\'apporte à la table.',
    services_intro: 'Des mandats ciblés, centrés sur les défis spécifiques du passage d\'un prototype fonctionnel à un produit de technologies minières qui peut être fabriqué, déployé et soutenu à grande échelle.',

    svc1_title: 'Stratégie de mise en marché du prototype',
    svc1_desc: 'Évaluation structurée de l\'état actuel de votre prototype. Analyse des écarts par rapport aux critères de maturité commerciale — fabricabilité, maintenabilité terrain, voie réglementaire et de certification, infrastructure de support concessionnaire. Feuille de route par phases pour combler ces écarts systématiquement.',

    svc2_title: 'Robustification pour les environnements miniers',
    svc2_desc: 'Revue technique de l\'architecture matérielle et système face aux réalités d\'exploitation minière : vibrations, chocs, pénétration de poussière, humidité, cyclage thermique, CEM et qualité d\'alimentation. Recommandations de durcissement précises et réalisables, appuyées par l\'expérience.',

    svc3_title: 'Conception pour la fabrication et la maintenabilité',
    svc3_desc: 'Transformer l\'ingénierie prototype en conceptions pouvant être assemblées de manière cohérente, testées de façon fiable et réparées efficacement sur le terrain. Considérations de chaîne d\'approvisionnement, procédures d\'assemblage, stratégie de pièces de rechange.',

    svc4_title: 'Leadership technique pour les équipes produit',
    svc4_desc: 'Leadership technique fractionnel pour les équipes en phase de démarrage ou de transition. Revues structurées, autorité de conception, discipline de processus et coaching pratique — sans la friction d\'une recherche de direction permanente.',

    svc5_title: 'Revues de conception et mentorat',
    svc5_desc: 'Revues de conception formelles et informelles à n\'importe quelle étape du développement. Mentorat de l\'équipe en ingénierie systèmes, intégration matériel-logiciel, planification de la validation terrain et préparation au déploiement.',

    svc6_title: 'Préparation à la certification et au déploiement',
    svc6_desc: 'Support consultatif pour la planification de la certification CEM et environnementale, la logistique de déploiement terrain, la préparation à la mise en service sur site et les considérations opérationnelles et de sécurité qui déterminent si un premier déploiement bâtit la confiance ou la détruit.',

    how_label: 'Démarche',
    how_heading: 'Une approche structurée. Des résultats concrets.',
    how_intro: 'Chaque mandat commence par une évaluation honnête et se termine par quelque chose que votre équipe peut exécuter. Sans mise en scène méthodologique.',

    how_step1_title: 'Évaluer l\'état actuel',
    how_step1_desc: 'Examiner le prototype avec votre équipe. Revoir l\'architecture, les décisions de conception, les données de test et les observations terrain. Comprendre ce qui fonctionne réellement et ce qui est encore de l\'ordre de l\'hypothèse.',

    how_step2_title: 'Identifier les lacunes de préparation mine',
    how_step2_desc: 'Cartographier l\'écart entre l\'état actuel du produit et ce qu\'il doit être pour survivre aux conditions réelles d\'exploitation minière — et pour être fabriqué, déployé et soutenu sans héroïsme.',

    how_step3_title: 'Construire une feuille de route par phases',
    how_step3_desc: 'Prioriser les lacunes. Construire un plan de mise en marché par phases avec des jalons clairs, des portes de décision et des besoins en ressources — structuré pour que votre équipe puisse réellement l\'exécuter.',

    how_step4_title: 'Soutenir l\'exécution et le transfert',
    how_step4_desc: 'Maintenir l\'engagement à travers les revues de conception, les contrôles de jalons techniques et le coaching ciblé. Transférer les compétences à votre équipe afin qu\'elle s\'approprie le processus, pas seulement le livrable.',

    harsh_label: 'Ingénierie en environnement sévère',
    harsh_heading: 'La mine se fiche des résultats de laboratoire.',
    harsh_body1: 'Les conditions terrain dépassent régulièrement les enveloppes de conception. Des spectres de vibration qu\'aucune table de vibration ne reproduit. Des concentrations de poussière qui déjouent toute approche d\'étanchéité non conçue spécifiquement pour elles. Des variations de température du démarrage à froid jusqu\'à la thermique de charge soutenue, dans le même quart de travail.',
    harsh_body2: 'La CEM en environnement souterrain n\'est pas une case à cocher — c\'est une décision d\'architecture système. Le choix de connecteurs est une décision de fiabilité sur cycle de vie. L\'accès à la maintenance est une décision de sécurité. Ces réalités sont intégrées au conseil dès la première conversation.',

    factor_vibration: 'Vibrations et chocs',
    factor_thermal: 'Cyclage thermique',
    factor_dust: 'Poussière et pénétration',
    factor_emc: 'CEM / bruit électrique',
    factor_sealing: 'Étanchéité et protection',
    factor_power: 'Qualité d\'alimentation',
    factor_service: 'Maintenabilité terrain',
    factor_lifecycle: 'Fiabilité sur cycle de vie',

    conf_label: 'Confidentialité',
    conf_heading: 'La discrétion est un standard professionnel, pas une caractéristique.',
    conf_body1: 'Conseiller dans ce secteur signifie travailler avec des technologies non encore publiques, des feuilles de route commercialement sensibles et des enjeux organisationnels qui exigent une confiance absolue. Tous les mandats sont menés avec une discrétion professionnelle stricte.',
    conf_body2: 'Les références et descriptions de projets passés sont généralisées pour protéger la confidentialité des clients. Aucun nom de client, système propriétaire ou détail commercialement sensible n\'est divulgué sans autorisation écrite explicite.',
    tenet1: 'Non-divulgation stricte, en tout temps.',
    tenet2: 'Aucun nom de client partagé sans autorisation.',
    tenet3: 'Conditions du mandat documentées et respectées.',

    contact_label: 'Contact',
    contact_heading: 'Prêt à faire avancer votre produit?',
    contact_body: 'Si vous pilotez un produit de technologies minières qui a besoin d\'une perspective technique senior — sur l\'architecture, la stratégie de mise en marché ou un défi d\'ingénierie spécifique — parlons-en. Les premières conversations sont directes et confidentielles.',
    contact_email_label: 'Courriel',
    contact_location_label: 'Région',
    contact_location_value: 'Région de Montréal, Québec, Canada',
    contact_linkedin: 'Sandy Pyke sur LinkedIn',
    cta_contact_main: 'Démarrer une conversation',

    footer_tagline: 'Conseil en technologies minières · Montréal, Québec, Canada',
    footer_copy: '© 2025 Spyke Technologies Inc. Tous droits réservés.',

    lang_switch_label: 'Switch to English',
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   STATE
   ══════════════════════════════════════════════════════════════════════════ */

let currentLang = 'en';
let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

/* ══════════════════════════════════════════════════════════════════════════
   THEME TOGGLE
   ══════════════════════════════════════════════════════════════════════════ */

const html = document.documentElement;
const themeToggleBtn = document.querySelector('[data-theme-toggle]');

function setTheme(theme) {
  currentTheme = theme;
  html.setAttribute('data-theme', theme);
  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggleBtn.innerHTML = theme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
           <circle cx="12" cy="12" r="5"/>
           <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
         </svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
         </svg>`;
  }
}

// Initialize
setTheme(currentTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

/* ══════════════════════════════════════════════════════════════════════════
   LANGUAGE TOGGLE
   ══════════════════════════════════════════════════════════════════════════ */

const langToggleBtn = document.getElementById('lang-toggle');

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    const val = t[key];

    // Hero heading gets line breaks from \n
    if (key === 'hero_heading') {
      el.innerHTML = val.replace(/\n/g, '<br/>');
    } else {
      el.textContent = val;
    }
  });

  // Update html lang attribute
  html.setAttribute('lang', lang);

  // Update lang toggle button label
  if (langToggleBtn) {
    const nextLang = lang === 'en' ? 'FR' : 'EN';
    langToggleBtn.textContent = nextLang;
    langToggleBtn.setAttribute('aria-label', t.lang_switch_label);
  }

  // Update document title
  document.title = lang === 'fr'
    ? 'Spyke Technologies Inc. — Conseil en Technologies Minières'
    : 'Spyke Technologies Inc. — Mining Technology Consulting';

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', lang === 'fr'
      ? 'Spyke Technologies Inc. — Conseil technique senior pour les équipementiers miniers. Du prototype validé au produit commercial prêt pour la mine.'
      : 'Spyke Technologies Inc. — Senior technical consulting for mining OEMs and industrial technology firms. Prototype-to-productization for mine-ready commercial systems.');
  }
}

function switchLanguage() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  applyTranslations(currentLang);
}

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', switchLanguage);
}

// Apply initial language
applyTranslations(currentLang);

/* ══════════════════════════════════════════════════════════════════════════
   STICKY HEADER SCROLL SHADOW
   ══════════════════════════════════════════════════════════════════════════ */

const siteHeader = document.querySelector('.site-header');

function onScroll() {
  if (!siteHeader) return;
  if (window.scrollY > 20) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ══════════════════════════════════════════════════════════════════════════
   MOBILE NAVIGATION
   ══════════════════════════════════════════════════════════════════════════ */

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav    = document.getElementById('mobile-nav');

function closeMobileNav() {
  if (!mobileMenuBtn || !mobileNav) return;
  mobileNav.hidden = true;
  mobileMenuBtn.setAttribute('aria-expanded', 'false');
  mobileMenuBtn.setAttribute('aria-label', 'Open navigation menu');
}

function openMobileNav() {
  if (!mobileMenuBtn || !mobileNav) return;
  mobileNav.hidden = false;
  mobileMenuBtn.setAttribute('aria-expanded', 'true');
  mobileMenuBtn.setAttribute('aria-label', 'Close navigation menu');
  // Focus first link
  const firstLink = mobileNav.querySelector('a');
  if (firstLink) firstLink.focus();
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMobileNav() : openMobileNav();
  });
}

// Close on link click
if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobileNav();
});

/* ══════════════════════════════════════════════════════════════════════════
   SCROLL-DRIVEN FADE-IN ANIMATIONS
   ══════════════════════════════════════════════════════════════════════════ */

function initFadeIn() {
  const fadeElements = document.querySelectorAll('.fade-in');
  if (!fadeElements.length) return;

  // Hero elements start visible immediately
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 100 + i * 150);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add stagger delay based on sibling index
        const siblings = entry.target.parentElement
          ? [...entry.target.parentElement.querySelectorAll('.fade-in')]
          : [];
        const idx = siblings.indexOf(entry.target);
        const delay = Math.min(idx * 80, 320);

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  fadeElements.forEach(el => {
    // Skip hero elements (already handled above)
    if (!el.closest('.hero')) {
      observer.observe(el);
    }
  });
}

/* ══════════════════════════════════════════════════════════════════════════
   SMOOTH SCROLL FOR ANCHOR LINKS
   ══════════════════════════════════════════════════════════════════════════ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without triggering scroll
      history.pushState(null, '', '#' + id);
    });
  });
}

/* ══════════════════════════════════════════════════════════════════════════
   ACTIVE NAV HIGHLIGHTING
   ══════════════════════════════════════════════════════════════════════════ */

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.main-nav a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-68px 0px 0px 0px' });

  sections.forEach(s => sectionObserver.observe(s));
}

/* ══════════════════════════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initFadeIn();
  initSmoothScroll();
  initActiveNav();
  onScroll(); // Initial check
});
