import type { Metadata } from 'next';
import { Poppins, Prompt } from 'next/font/google';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';
import Analytics from '@/components/Analytics';
import EventTracker from '@/components/EventTracker';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-prompt',
});

export const metadata: Metadata = {
  title: 'GoGarage | Next-Gen Automotive Care',
  description: 'Experience the future of car maintenance with GoGarage. AI-powered diagnostics and real-time repair tracking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${prompt.variable}`}>
      <body suppressHydrationWarning className="font-poppins antialiased bg-primary text-secondary">
        {children}
        <CookieConsent />
        <Analytics />
        <EventTracker />
      </body>
    </html>
  );
}
