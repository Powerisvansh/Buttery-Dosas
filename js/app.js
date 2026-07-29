document.addEventListener('DOMContentLoaded', () => {

  /* ─── utilities ─── */
  const q = (s, p) => (p || document).querySelector(s);
  const qa = (s, p) => [...(p || document).querySelectorAll(s)];

  /* ─── hero load ─── */
  requestAnimationFrame(() => document.querySelector('.hero')?.classList.add('loaded'));

  /* ─── scroll reveal ─── */
  const revealEls = qa('[data-reveal]');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  /* ─── header scroll ─── */
  const header = q('#header');
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  if (window.scrollY > 60) header?.classList.add('scrolled');

  /* ─── active nav ─── */
  const navLinks = qa('.nav-link');
  const sections = qa('section[id]');
  const updateNav = () => {
    const y = window.scrollY + 130;
    let current = '';
    sections.forEach((s) => {
      const t = s.offsetTop, h = s.offsetHeight;
      if (y >= t && y < t + h) current = s.id;
    });
    navLinks.forEach((l) => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ─── mobile nav ─── */
  const hamburger = q('#hamburger');
  const nav = q('#nav');
  let overlay;

  const closeNav = () => {
    hamburger?.classList.remove('open');
    nav?.classList.remove('open');
    if (overlay) { overlay.classList.remove('show'); overlay.remove(); overlay = null; }
    document.body.style.overflow = '';
  };
  const openNav = () => {
    hamburger?.classList.add('open');
    nav?.classList.add('open');
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    overlay.addEventListener('click', closeNav);
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay?.classList.add('show'));
    document.body.style.overflow = 'hidden';
  };

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.contains('open') ? closeNav() : openNav();
    });
    qa('a', nav).forEach((link) => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav?.classList.contains('open')) closeNav();
    });
  }

  /* ─── menu tabs ─── */
  const tabs = qa('.tab');
  const grids = {};
  qa('.menu-grid').forEach((g) => { grids[g.id.replace('grid-', '')] = g; });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      Object.values(grids).forEach((g) => g.classList.remove('active'));
      const target = grids[tab.dataset.tab];
      if (target) target.classList.add('active');
    });
  });

  /* ─── review scroller ─── */
  const track = q('#reviewsTrack');
  if (track) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced && track.scrollWidth > track.clientWidth) {
      let pos = 0, dir = 1;
      const step = 0.8, max = track.scrollWidth - track.clientWidth;

      const tick = () => {
        if (max <= 0) return;
        pos += step * dir;
        if (pos <= 0) { dir = 1; pos = 0; }
        if (pos >= max) { dir = -1; pos = max; }
        track.scrollTo({ left: pos, behavior: 'smooth' });
      };

      let t = setInterval(tick, 2600);
      track.addEventListener('mouseenter', () => clearInterval(t));
      track.addEventListener('mouseleave', () => {
        clearInterval(t);
        t = setInterval(tick, 2600);
      });
    }
  }

  /* ─── back to top ─── */
  const topBtn = q('#topBtn');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
  }

});
