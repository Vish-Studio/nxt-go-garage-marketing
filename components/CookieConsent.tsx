'use client';
import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Cookie } from 'lucide-react';
import { getConsent, setConsent } from '@/lib/consent';

export default function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  const choose = (choice: 'granted' | 'denied') => {
    setConsent(choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[60] bg-primary border border-secondary/5 rounded-3xl shadow-lg p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-secondary" />
            </div>
            <h2 className="text-lg font-prompt font-bold text-secondary">We value your privacy</h2>
          </div>
          <p className="text-sm text-secondary/70 leading-relaxed mb-5">
            We use analytics cookies to understand how visitors use our site and improve it. You can accept or decline at any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => choose('granted')}
              className="flex-1 bg-accent text-secondary px-6 py-3 rounded-full text-sm font-bold hover:bg-accent/90 transition-all"
            >
              Accept all
            </button>
            <button
              onClick={() => choose('denied')}
              className="flex-1 bg-primary border-2 border-light text-secondary px-6 py-3 rounded-full text-sm font-bold hover:bg-light transition-all"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
