export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined' || !GA_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
