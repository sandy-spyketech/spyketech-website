'use strict';

const TRANSLATIONS = {
  en: {
    skip_link: 'Skip to main content',
    nav_about: 'About',
    nav_services: 'Offers',
    nav_how: 'Pathway',
    nav_contact: 'Contact',
    hero_eyebrow: 'Mining Technology Consulting',
    hero_heading: 'From Technical Capability\nto Mine-Ready Product.',
    hero_sub: 'Spyke Technologies helps industrial and emerging-technology teams define the right mining application, build the right field demonstrator, and take proven systems through productization and channel readiness.',
    cta_offers: 'Explore the Offers',
    cta_contact: 'Start a Conversation',
    about_label: 'Positioning',
    about_heading: 'Technology Becomes Valuable in the Right Mining Context.',
    about_lead: 'A promising capability is not automatically a mining product. The first task is to identify the mine problem, operating context, workflow, stakeholder path, and proof required before significant development investment is committed.',
    about_body1: 'Spyke Technologies is a mining technology application-definition, demonstration-platform, productization, and scale-up partner. Engagements are designed to move qualified teams from technical possibility to a credible mining application, a field-deployable demonstrator, a mine-ready product, and a repeatable delivery model.',
    about_body2: 'With more than 30 years of experience across product and system development, deployment, manufacturing readiness, service, and technical leadership, I provide practical, decision-focused support matched to your product’s maturity stage.',
    timeline_1_year: 'Stage 1',
    timeline_1: 'Define the mining application, operating context, stakeholder path, and proof objective.',
    timeline_2_year: 'Stage 2',
    timeline_2: 'Define the field-deployable demonstrator, system requirements, interfaces, and validation evidence.',
    timeline_3_year: 'Stage 3',
    timeline_3: 'Establish the productization baseline and roadmap for a mine-ready commercial product.',
    timeline_4_year: 'Stage 4',
    timeline_4: 'Lead approved execution through readiness gates for deployment, service, support, and channel scale-up.',
    services_label: 'Offers',
    services_heading: 'A Staged Path to Mining Readiness.',
    services_intro: 'Each offer starts from a different evidence base, answers a distinct client question, and produces a defined next decision. Begin at the stage that matches your maturity—not at a predetermined service level.',
    svc1_title: 'Mining Application Framing Sprint',
    svc1_desc: 'For teams with a credible technology but no defined first mining application. Select the right use case, operating context, stakeholder path, and proof objective before committing to a demonstrator. Outcome: a focused application decision, demonstrator brief, and client-led 90-day validation roadmap.',
    svc2_title: 'Mining Demonstration Platform Definition',
    svc2_desc: 'For teams with tested capability or an early prototype that must prove value in a credible mining workflow. Define the field-deployable demonstrator, system requirements, configuration interfaces, operating constraints, and validation evidence. Outcome: a decision-ready demonstrator specification and validation plan.',
    svc3_title: 'Mine-Ready Productization Assessment',
    svc3_desc: 'For teams with a working or field-validated demonstrator that is not yet ready for repeatable commercial deployment. Establish the gaps across architecture, ruggedization, validation, certification planning, manufacturing, service, support, and channel readiness. Outcome: an evidence-based scorecard, prioritized gap register, and productization roadmap.',
    svc4_title: 'Prototype-to-Channel Readiness Program',
    svc4_desc: 'For organizations ready to execute an approved productization roadmap. Provide senior technical leadership and coordinated execution across validation, manufacturing readiness, deployment, service and support readiness, and channel scale-up. Outcome: reduced execution risk and a more repeatable product and delivery model for deployment at scale.',
    how_label: 'Pathway',
    how_heading: 'Define the Mine Problem. Build the Proof. Productize for the Mine. Deploy with Confidence.',
    how_intro: 'The delivery model makes technical uncertainty visible early, establishes the evidence needed for each readiness gate, and gives the client a practical next decision.',
    how_step1_title: 'Define the Mine Problem',
    how_step1_desc: 'Choose the priority application, target workflow, operating context, stakeholder path, and proof objective. The decision enabled: is this the right mining application and demonstration context to pursue?',
    how_step2_title: 'Build the Proof',
    how_step2_desc: 'Define the field-deployable demonstrator, its requirements, interfaces, and validation evidence. The decision enabled: what demonstrator should be built and what must it prove?',
    how_step3_title: 'Productize for the Mine',
    how_step3_desc: 'Expose the gaps between a demonstrator and a repeatable commercial product, then prioritize the readiness work. The decision enabled: what must change before the product can be deployed, supported, and scaled?',
    how_step4_title: 'Deploy at Scale with Confidence',
    how_step4_desc: 'Lead approved work through technical, validation, manufacturing, deployment, service, support, and channel-readiness gates. The decision enabled: how do we execute the roadmap and build delivery capability for deployment at scale?',
    harsh_label: 'Mine Readiness',
    harsh_heading: 'Mine-Ready Means More Than Laboratory Validation.',
    harsh_body1: 'Mining applications impose combined requirements for environmental resilience, installation, power, communications, data, safety, maintainability, reliability, and long-term support. A credible demonstrator may prove technical value; it does not automatically establish commercial readiness.',
    harsh_body2: 'Spyke Technologies helps teams translate operating context into the product, validation, manufacturing, service, support, and channel decisions required at each maturity stage.',
    factor_vibration: 'Environment & Protection',
    factor_thermal: 'Validation & Evidence',
    factor_dust: 'Installation & Integration',
    factor_emc: 'Power, Data & Communications',
    factor_sealing: 'Safety & Compliance Planning',
    factor_power: 'Manufacturing & Testability',
    factor_service: 'Service & Lifecycle Support',
    factor_lifecycle: 'Channel & Execution Readiness',
    conf_label: 'Working Boundaries',
    conf_heading: 'Practical Support. Clear Responsibilities.',
    conf_body1: 'Spyke Technologies provides decision support, requirements definition, productization leadership, and coordination within the agreed scope. Clients retain product ownership, commercial decisions, customer relationships, final release authority, and manufacturer-of-record responsibilities.',
    conf_body2: 'Engagements are not generic staffing, contract manufacturing, a certification laboratory, sales representation, or a guarantee of customer approval, site access, certification, or commercial outcomes.',
    conf_body3: 'Spyke Technologies provides independent advisory services based on general professional experience, independent analysis, and publicly available information. We do not use, disclose, or provide access to confidential, proprietary, or trade-secret information of any current or former employer, client, supplier, or partner.',
    tenet1: 'Decision-focused scope and defined outcomes.',
    tenet2: 'Client ownership and authority remain with the client.',
    tenet3: 'Strict professional discretion and non-disclosure.',
    contact_label: 'Contact',
    contact_heading: 'Find the Right Starting Point.',
    contact_body: 'Whether you are assessing a mining application, defining a field demonstrator, productizing a proven prototype, or planning a scale-up program, start with a confidential conversation about the evidence you have and the next decision you need to make.',
    contact_email_label: 'Email',
    contact_location_label: 'Location',
    contact_location_value: 'Montreal, Quebec, Canada Area',
    contact_person_linkedin_label: 'Personal LinkedIn',
    contact_linkedin: 'Sandy Pyke on LinkedIn',
    contact_company_linkedin_label: 'Company LinkedIn',
    contact_company_linkedin: 'Spyke Technologies on LinkedIn',
    cta_contact_main: 'Start a Conversation',
    footer_tagline: 'Mining Technology Application, Demonstration, Productization & Scale-Up',
    footer_company_linkedin: 'Company LinkedIn',
    footer_copy: '© 2026 Spyke Technologies Inc. All rights reserved.',
    lang_switch_label: 'Passer en français',
  },
  fr: {
    skip_link: 'Passer au contenu principal',
    nav_about: 'À propos',
    nav_services: 'Offres',
    nav_how: 'Parcours',
    nav_contact: 'Contact',
    hero_eyebrow: 'Conseil en technologies minières',
    hero_heading: 'De la capacité technique\nau produit prêt pour la mine.',
    hero_sub: 'Spyke Technologies aide les équipes industrielles et de technologies émergentes à définir la bonne application minière, à concevoir le bon démonstrateur terrain et à faire évoluer des systèmes éprouvés vers la productisation et la préparation du réseau de distribution.',
    cta_offers: 'Explorer les offres',
    cta_contact: 'Démarrer une conversation',
    about_label: 'Positionnement',
    about_heading: 'Une technologie prend sa valeur dans le bon contexte minier.',
    about_lead: 'Une capacité prometteuse ne devient pas automatiquement un produit minier. La première étape consiste à définir le problème minier, le contexte d’exploitation, le flux de travail, le parcours des parties prenantes et la preuve requise avant d’engager un investissement important en développement.',
    about_body1: 'Spyke Technologies est un partenaire de définition d’applications minières, de plateformes de démonstration, de productisation et de mise à l’échelle. Les mandats aident les équipes qualifiées à passer d’une possibilité technique à une application minière crédible, un démonstrateur déployable sur le terrain, un produit prêt pour la mine et un modèle de livraison reproductible.',
    about_body2: 'Fort de plus de 30 ans d’expérience en développement de produits et de systèmes, déploiement, préparation à la fabrication, service et leadership technique, j’offre un soutien pratique et axé sur la décision, adapté au niveau de maturité de votre produit.',
    timeline_1_year: 'Étape 1',
    timeline_1: 'Définir l’application minière, le contexte d’exploitation, le parcours des parties prenantes et l’objectif de preuve.',
    timeline_2_year: 'Étape 2',
    timeline_2: 'Définir le démonstrateur déployable sur le terrain, les exigences système, les interfaces et les preuves de validation.',
    timeline_3_year: 'Étape 3',
    timeline_3: 'Établir la base de productisation et la feuille de route vers un produit commercial prêt pour la mine.',
    timeline_4_year: 'Étape 4',
    timeline_4: 'Diriger l’exécution approuvée à travers les jalons de préparation au déploiement, au service, au soutien et au réseau de distribution.',
    services_label: 'Offres',
    services_heading: 'Un parcours progressif vers la préparation minière.',
    services_intro: 'Chaque offre part d’une base de preuves différente, répond à une question client distincte et produit une prochaine décision définie. Commencez à l’étape qui correspond à votre niveau de maturité, et non à un niveau de service prédéterminé.',
    svc1_title: 'Sprint de cadrage d’application minière',
    svc1_desc: 'Pour les équipes disposant d’une technologie crédible, mais sans première application minière définie. Sélectionner le bon cas d’usage, le contexte d’exploitation, le parcours des parties prenantes et l’objectif de preuve avant d’investir dans un démonstrateur. Résultat : une décision d’application ciblée, un brief de démonstrateur et une feuille de route de validation sur 90 jours menée par le client.',
    svc2_title: 'Définition de plateforme de démonstration minière',
    svc2_desc: 'Pour les équipes disposant d’une capacité éprouvée ou d’un prototype précoce qui doit démontrer sa valeur dans un flux de travail minier crédible. Définir le démonstrateur déployable, les exigences système, les interfaces de configuration, les contraintes d’exploitation et les preuves de validation. Résultat : une spécification de démonstrateur prête à la décision et un plan de validation.',
    svc3_title: 'Évaluation de productisation prête pour la mine',
    svc3_desc: 'Pour les équipes disposant d’un démonstrateur fonctionnel ou validé sur le terrain, mais pas encore prêt pour un déploiement commercial reproductible. Établir les écarts liés à l’architecture, à la robustification, à la validation, à la planification de certification, à la fabrication, au service, au soutien et à la préparation du réseau de distribution. Résultat : une grille d’évaluation fondée sur les preuves, un registre d’écarts priorisé et une feuille de route de productisation.',
    svc4_title: 'Programme de préparation du prototype au réseau de distribution',
    svc4_desc: 'Pour les organisations prêtes à exécuter une feuille de route de productisation approuvée. Offrir un leadership technique senior et une exécution coordonnée couvrant la validation, la préparation à la fabrication, le déploiement, la préparation du service et du soutien, ainsi que le développement du réseau de distribution. Résultat : un risque d’exécution réduit et un modèle de produit et de livraison plus reproductible, prêt pour un déploiement à grande échelle.',
    how_label: 'Parcours',
    how_heading: 'Définir le problème minier. Construire la preuve. Productiser pour la mine. Déployer avec confiance.',
    how_intro: 'Le modèle de livraison rend l’incertitude technique visible tôt, établit les preuves requises à chaque jalon de préparation et donne au client une prochaine décision pratique.',
    how_step1_title: 'Définir le problème minier',
    how_step1_desc: 'Choisir l’application prioritaire, le flux de travail cible, le contexte d’exploitation, le parcours des parties prenantes et l’objectif de preuve. Décision permise : est-ce la bonne application minière et le bon contexte de démonstration à poursuivre?',
    how_step2_title: 'Construire la preuve',
    how_step2_desc: 'Définir le démonstrateur déployable sur le terrain, ses exigences, ses interfaces et ses preuves de validation. Décision permise : quel démonstrateur faut-il construire et que doit-il prouver?',
    how_step3_title: 'Productiser pour la mine',
    how_step3_desc: 'Mettre en évidence les écarts entre un démonstrateur et un produit commercial reproductible, puis prioriser le travail de préparation. Décision permise : que faut-il changer avant que le produit puisse être déployé, soutenu et mis à l’échelle?',
    how_step4_title: 'Déployer à grande échelle avec confiance',
    how_step4_desc: 'Diriger le travail approuvé à travers les jalons de préparation technique, de validation, de fabrication, de déploiement, de service, de soutien et de réseau de distribution. Décision permise : comment exécuter la feuille de route et bâtir la capacité de livraison requise pour un déploiement à grande échelle?',
    harsh_label: 'Préparation minière',
    harsh_heading: 'Être prêt pour la mine exige plus qu’une validation en laboratoire.',
    harsh_body1: 'Les applications minières imposent des exigences combinées de résilience environnementale, d’installation, d’alimentation, de communications, de données, de sécurité, de maintenabilité, de fiabilité et de soutien à long terme. Un démonstrateur crédible peut prouver une valeur technique; il n’établit pas automatiquement la préparation commerciale.',
    harsh_body2: 'Spyke Technologies aide les équipes à traduire le contexte d’exploitation en décisions de produit, de validation, de fabrication, de service, de soutien et de distribution requises à chaque étape de maturité.',
    factor_vibration: 'Environnement et protection',
    factor_thermal: 'Validation et preuves',
    factor_dust: 'Installation et intégration',
    factor_emc: 'Alimentation, données et communications',
    factor_sealing: 'Planification sécurité et conformité',
    factor_power: 'Fabrication et testabilité',
    factor_service: 'Service et soutien sur le cycle de vie',
    factor_lifecycle: 'Préparation du réseau de distribution et de l’exécution',
    conf_label: 'Cadre de travail',
    conf_heading: 'Soutien pratique. Responsabilités claires.',
    conf_body1: 'Spyke Technologies fournit du soutien à la décision, de la définition d’exigences, du leadership de productisation et de la coordination dans le cadre du mandat convenu. Les clients conservent la propriété du produit, les décisions commerciales, les relations clients, l’autorité finale de mise en production et les responsabilités de fabricant officiel.',
    conf_body2: 'Les mandats ne constituent pas du placement de personnel généraliste, de la fabrication à contrat, un laboratoire de certification, de la représentation commerciale ni une garantie d’approbation client, d’accès au site, de certification ou de résultat commercial.',
    conf_body3: 'Spyke Technologies offre des services-conseils indépendants fondés sur l’expérience professionnelle générale, l’analyse indépendante et l’information accessible au public. Nous n’utilisons, ne divulguons ni ne donnons accès à des renseignements confidentiels, exclusifs ou constituant des secrets commerciaux d’un employeur, client, fournisseur ou partenaire actuel ou ancien.',
    tenet1: 'Mandats axés sur la décision et résultats définis.',
    tenet2: 'La propriété et l’autorité du client demeurent au client.',
    tenet3: 'Discrétion professionnelle stricte et non-divulgation.',
    contact_label: 'Contact',
    contact_heading: 'Trouvez le bon point de départ.',
    contact_body: 'Que vous évaluiez une application minière, définissiez un démonstrateur terrain, productisiez un prototype éprouvé ou planifiiez un programme de mise à l’échelle, commencez par une conversation confidentielle sur les preuves dont vous disposez et la prochaine décision à prendre.',
    contact_email_label: 'Courriel',
    contact_location_label: 'Région',
    contact_location_value: 'Région de Montréal, Québec, Canada',
    contact_person_linkedin_label: 'LinkedIn personnel',
    contact_linkedin: 'Sandy Pyke sur LinkedIn',
    contact_company_linkedin_label: 'LinkedIn de l’entreprise',
    contact_company_linkedin: 'Technologies Spyke sur LinkedIn',
    cta_contact_main: 'Démarrer une conversation',
    footer_tagline: 'Application minière, démonstration, productisation et mise à l’échelle',
    footer_company_linkedin: 'LinkedIn de l’entreprise',
    footer_copy: '© 2026 Spyke Technologies Inc. Tous droits réservés.',
    lang_switch_label: 'Switch to English',
  },
};

let currentLang = navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const html = document.documentElement;
const themeToggleBtn = document.querySelector('[data-theme-toggle]');
const langToggleBtn = document.getElementById('lang-toggle');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const siteHeader = document.querySelector('.site-header');

function setTheme(theme) {
  currentTheme = theme;
  html.setAttribute('data-theme', theme);
  if (!themeToggleBtn) return;
  themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggleBtn.innerHTML = theme === 'dark'
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    if (key === 'hero_heading') el.innerHTML = t[key].replace(/\n/g, '<br/>');
    else el.textContent = t[key];
  });
  html.setAttribute('lang', lang);
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === 'en' ? 'FR' : 'EN';
    langToggleBtn.setAttribute('aria-label', t.lang_switch_label);
  }
  document.title = lang === 'fr' ? 'Spyke Technologies Inc. — Conseil en technologies minières' : 'Spyke Technologies Inc. — Mining Technology Consulting';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', lang === 'fr'
      ? 'Spyke Technologies Inc. aide les équipes à définir des applications minières, à concevoir des démonstrateurs terrain, à productiser des systèmes éprouvés et à déployer à grande échelle avec confiance.'
      : 'Spyke Technologies Inc. helps technology teams define mining applications, build field demonstrators, productize proven systems, and deploy at scale with confidence.');
  }
}

function switchLanguage() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  applyTranslations(currentLang);
}

function onScroll() {
  if (siteHeader) siteHeader.classList.toggle('scrolled', window.scrollY > 20);
}

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
  const firstLink = mobileNav.querySelector('a');
  if (firstLink) firstLink.focus();
}

function initFadeIn() {
  const fadeElements = document.querySelectorAll('.fade-in');
  if (!fadeElements.length) return;
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 100 + i * 150);
    });
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = entry.target.parentElement ? [...entry.target.parentElement.querySelectorAll('.fade-in')] : [];
      setTimeout(() => entry.target.classList.add('visible'), Math.min(siblings.indexOf(entry.target) * 80, 320));
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  fadeElements.forEach(el => {
    if (!el.closest('.hero')) observer.observe(el);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', '#' + id);
    });
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  if (!sections.length || !navLinks.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + id));
    });
  }, { threshold: 0.3, rootMargin: '-68px 0px 0px 0px' });
  sections.forEach(section => observer.observe(section));
}

function getEmail() {
  return ['info', 'spyketech.ca'].join('@');
}

setTheme(currentTheme);
applyTranslations(currentLang);

if (themeToggleBtn) themeToggleBtn.addEventListener('click', () => setTheme(currentTheme === 'dark' ? 'light' : 'dark'));
if (langToggleBtn) langToggleBtn.addEventListener('click', switchLanguage);
if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => mobileMenuBtn.getAttribute('aria-expanded') === 'true' ? closeMobileNav() : openMobileNav());
if (mobileNav) mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileNav));
window.addEventListener('scroll', onScroll, { passive: true });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileNav(); });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-email-link').forEach(el => {
    const addr = getEmail();
    el.href = 'mailto:' + addr;
    if (el.textContent.includes('spyketech')) el.textContent = addr;
  });
  initFadeIn();
  initSmoothScroll();
  initActiveNav();
  onScroll();
});
