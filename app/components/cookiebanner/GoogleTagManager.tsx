
'use client';

import { useEffect } from 'react';

type WindowWithGTM = Window & {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
};

export default function GoogleTagManagerContainer({ gtmId }: { gtmId: string }) {
  useEffect(() => {
    let loaded = false;

    const loadGTM = () => {
      if (loaded) return;
      loaded = true;

      const win = window as unknown as WindowWithGTM;

      win.dataLayer = win.dataLayer || [];

      const gtag = (...args: unknown[]) => {
        win.dataLayer.push(args);
      };
      win.gtag = gtag;

      gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500,
      });

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      script.async = true;
      document.head.appendChild(script);

      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      noscript.appendChild(iframe);
      if (document.body.firstChild) {
        document.body.insertBefore(noscript, document.body.firstChild);
      }
    };

    const events = ['mousemove', 'touchstart', 'scroll', 'keydown'];
    events.forEach(e => window.addEventListener(e, loadGTM, { once: true, passive: true }));

    const timer = setTimeout(loadGTM, 5000);

    return () => {
      clearTimeout(timer);
      events.forEach(e => window.removeEventListener(e, loadGTM));
    };
  }, [gtmId]);

  return null;
}
