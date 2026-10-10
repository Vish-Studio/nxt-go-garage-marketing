'use client';
import React from 'react';
import Script from 'next/script';
import { CONSENT_EVENT, getConsent, type ConsentChoice } from '@/lib/consent';
import { GA_ID } from '@/lib/analytics';

export default function Analytics() {
  const [consent, setConsent] = React.useState<ConsentChoice | null>(null);

  React.useEffect(() => {
    setConsent(getConsent());
    const onChange = (e: Event) => setConsent((e as CustomEvent<ConsentChoice>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  React.useEffect(() => {
    if (GA_ID && consent === 'denied') {
      (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
    }
  }, [consent]);

  if (!GA_ID || consent !== 'granted') return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){ window.dataLayer.push(arguments); };
          window['ga-disable-${GA_ID}'] = false;
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
