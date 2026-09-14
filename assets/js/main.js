/* Spyke Technologies — site behaviour: theme, nav, header state, reveals */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---- Theme ---- */
  var SUN =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.8v2.2M12 20v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M1.8 12h2.2M20 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"/></svg>';
  var MOON =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  /* Preference is stored in a first-party cookie so it survives navigation and
     works inside sandboxed frames where web storage is unavailable. */
  function readPref() {
    var m = document.cookie.match(/(?:^|;\s*)spyke-theme=(dark|light)/);
    return m ? m[1] : null;
  }
  function writePref(value) {
    document.cookie = 'spyke-theme=' + value + ';path=/;max-age=31536000;samesite=lax';
  }

  var mode = readPref() || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.setAttribute('data-theme', mode);

  var toggle = document.querySelector('[data-theme-toggle]');
  function paintToggle() {
    if (!toggle) return;
    toggle.innerHTML = mode === 'dark' ? SUN : MOON;
    /* Labels are supplied per language by the generator. */
    var label = mode === 'dark' ? toggle.getAttribute('data-label-light') : toggle.getAttribute('data-label-dark');
    if (label) toggle.setAttribute('aria-label', label);
  }
  paintToggle();
  if (toggle) {
    toggle.addEventListener('click', function () {
      mode = mode === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', mode);
      writePref(mode);
      paintToggle();
    });
  }

  /* ---- Mobile navigation ---- */
  var navToggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', open ? 'false' : 'true');
      navToggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      var nl = navToggle.getAttribute(open ? 'data-label-open' : 'data-label-close');
      if (nl) navToggle.setAttribute('aria-label', nl);
    });
    nav.addEventListener('click', function (ev) {
      if (ev.target.tagName === 'A') {
        nav.setAttribute('data-open', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Header scrolled state ---- */
  var header = document.querySelector('.header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('header--scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Reveal on scroll ---- */
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  items.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
    io.observe(el);
  });
})();
