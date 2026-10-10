'use client';
import React from 'react';
import { trackEvent } from '@/lib/analytics';

// Declarative tracking: add data-track="event_name" (plus optional data-track-label / data-track-location)
// to any element. Sections with id are also tracked once when scrolled into view.
export default function EventTracker() {
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-track]');
      if (!el) return;
      trackEvent(el.dataset.track!, {
        label: el.dataset.trackLabel ?? el.textContent?.trim().slice(0, 60) ?? '',
        location: el.dataset.trackLocation ?? 'unknown',
      });
    };
    document.addEventListener('click', onClick);

    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !seen.has(entry.target.id)) {
            seen.add(entry.target.id);
            trackEvent('section_view', { section: entry.target.id });
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));

    return () => {
      document.removeEventListener('click', onClick);
      observer.disconnect();
    };
  }, []);

  return null;
}
