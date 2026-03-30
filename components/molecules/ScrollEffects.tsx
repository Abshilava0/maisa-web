'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]')
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    revealElements.forEach((element) => {
      if (!element.classList.contains('is-visible')) {
        revealObserver.observe(element);
      }
    });

    let ticking = false;

    const updateScrollEffects = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

      root.style.setProperty('--scroll-progress', progress.toFixed(3));
      root.dataset.scrolled = scrollTop > 32 ? 'true' : 'false';

      parallaxElements.forEach((element) => {
        const speed = Number(element.dataset.parallaxSpeed ?? '0.08');
        const rect = element.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const offset = (viewportCenter - elementCenter) * speed;

        element.style.setProperty('--parallax-shift', `${offset.toFixed(1)}px`);
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    };

    window.requestAnimationFrame(updateScrollEffects);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  return null;
}
