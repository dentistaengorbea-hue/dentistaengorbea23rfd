/* Clínica Dental Gorbea — main.js */

(function () {
  const header    = document.getElementById('header');
  const toggle    = document.getElementById('navToggle');
  const menu      = document.getElementById('navMenu');

  // ─── Header scroll effect ───
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ─── Mobile menu toggle ───
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const open = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-active', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Reveal on scroll (IntersectionObserver) ───
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ─── Smooth scroll for anchor links on same page ───
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
