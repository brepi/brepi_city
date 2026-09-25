// brepi · main.js
// vanilla JS, no frameworks. just small things.

(function () {
  'use strict';

  // Update footer with current month/year
  const lastUpdated = document.getElementById('last-updated');
  if (lastUpdated) {
    lastUpdated.textContent = new Date().toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  }

  // Scroll reveal
  const revealTargets = document.querySelectorAll(
    '.section, .cat-punct, .music-feature, .hero-title, .hero-meta'
  );

  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    revealTargets.forEach(el => observer.observe(el));
  } else {
    // Fallback: just show everything
    revealTargets.forEach(el => el.classList.add('visible'));
  }

  // Nav background intensifies on scroll
  const nav = document.querySelector('.nav');
  let lastScroll = 0;
  let ticking = false;

  function updateNav() {
    const scrollY = window.scrollY;
    if (nav) {
      if (scrollY > 40) {
        nav.style.background = 'rgba(11, 11, 18, 0.92)';
        nav.style.borderBottomColor = 'var(--border-bright)';
      } else {
        nav.style.background = 'rgba(11, 11, 18, 0.78)';
        nav.style.borderBottomColor = 'var(--border)';
      }
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });

  // Smooth scroll for nav links (with offset for fixed nav)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href.length < 2) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();