// // // // // 'use client';

// // // // // import Script from 'next/script';
// // // // // import { GoogleTagManager as GTM } from '@next/third-parties/google';

// // // // // export default function GoogleTagManagerContainer({ gtmId }: { gtmId: string }) {
// // // // //   return (
// // // // //     <>
// // // // //       {/* 1. Set Default Consent (must run BEFORE GTM) */}
// // // // //       <Script id="google-consent-mode" strategy="afterInteractive">
// // // // //         {`
// // // // //           window.dataLayer = window.dataLayer || [];
// // // // //           function gtag(){dataLayer.push(arguments);}
          
// // // // //           gtag('consent', 'default', {
// // // // //             'ad_storage': 'denied',
// // // // //             'ad_user_data': 'denied',
// // // // //             'ad_personalization': 'denied',
// // // // //             'analytics_storage': 'denied',
// // // // //             'wait_for_update': 500
// // // // //           });
// // // // //         `}
// // // // //       </Script>

// // // // //       {/* 2. Load GTM */}
// // // // //       <GTM gtmId={gtmId} />
// // // // //     </>
// // // // //   );
// // // // // }

// // // // 'use client';

// // // // import Script from 'next/script';
// // // // import { GoogleTagManager as GTM } from '@next/third-parties/google';

// // // // export default function GoogleTagManagerContainer({ gtmId }: { gtmId: string }) {
// // // //   return (
// // // //     <>
// // // //       {/* =========================
// // // //           GOOGLE CONSENT MODE
// // // //           Must run BEFORE GTM
// // // //       ========================== */}
// // // //       <Script id="google-consent-mode" strategy="beforeInteractive">
// // // //         {`
// // // //           window.dataLayer = window.dataLayer || [];

// // // //           function gtag(){dataLayer.push(arguments);}
// // // //           window.gtag = gtag;

// // // //           gtag('consent', 'default', {
// // // //             ad_storage: 'denied',
// // // //             ad_user_data: 'denied',
// // // //             ad_personalization: 'denied',
// // // //             analytics_storage: 'denied',
// // // //             wait_for_update: 500
// // // //           });
// // // //         `}
// // // //       </Script>

// // // //       {/* =========================
// // // //           GOOGLE TAG MANAGER
// // // //       ========================== */}
// // // //       <GTM gtmId={gtmId} />

// // // //     </>
// // // //   );
// // // // }

// // // 'use client';

// // // import Script from 'next/script';
// // // import { GoogleTagManager as GTM } from '@next/third-parties/google';

// // // export default function GoogleTagManagerContainer({ gtmId }: { gtmId: string }) {
// // //   return (
// // //     <>
// // //       {/* =========================
// // //           GOOGLE CONSENT MODE
// // //           ✅ FIX: Changed from "beforeInteractive" to "afterInteractive"
// // //           beforeInteractive was blocking first paint and hurting LCP/FCP
// // //       ========================== */}
// // //       <Script id="google-consent-mode" strategy="afterInteractive">
// // //         {`
// // //           window.dataLayer = window.dataLayer || [];

// // //           function gtag(){dataLayer.push(arguments);}
// // //           window.gtag = gtag;

// // //           gtag('consent', 'default', {
// // //             ad_storage: 'denied',
// // //             ad_user_data: 'denied',
// // //             ad_personalization: 'denied',
// // //             analytics_storage: 'denied',
// // //             wait_for_update: 500
// // //           });
// // //         `}
// // //       </Script>

// // //       {/* =========================
// // //           GOOGLE TAG MANAGER
// // //       ========================== */}
// // //       <GTM gtmId={gtmId} />

// // //     </>
// // //   );
// // // }
// // 'use client';

// // // ✅ PERF FIX: Replaced @next/third-parties/google GTM with deferred loading.
// // // The old GTM loaded ~275KB of JS immediately on page load, blocking mobile rendering.
// // // Now it loads only after first user interaction (or after 5s as a fallback),
// // // which keeps the initial JS bundle lean and improves Speed Index significantly.
// // // Consent mode defaults are set BEFORE the GTM script injects — same behaviour as before.

// // import { useEffect } from 'react';

// // export default function GoogleTagManagerContainer({ gtmId }: { gtmId: string }) {
// //   useEffect(() => {
// //     let loaded = false;

// //     const loadGTM = () => {
// //       if (loaded) return;
// //       loaded = true;

// //       // Set default consent BEFORE GTM loads (same as before)
// //       window.dataLayer = window.dataLayer || [];
// //       function gtag(...args: any[]) { window.dataLayer.push(args); }
// //       window.gtag = gtag;

// //       gtag('consent', 'default', {
// //         ad_storage: 'denied',
// //         ad_user_data: 'denied',
// //         ad_personalization: 'denied',
// //         analytics_storage: 'denied',
// //         wait_for_update: 500,
// //       });

// //       // Inject GTM script tag
// //       const script = document.createElement('script');
// //       script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
// //       script.async = true;
// //       document.head.appendChild(script);

// //       // Inject GTM noscript fallback
// //       const noscript = document.createElement('noscript');
// //       const iframe = document.createElement('iframe');
// //       iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
// //       iframe.height = '0';
// //       iframe.width = '0';
// //       iframe.style.display = 'none';
// //       iframe.style.visibility = 'hidden';
// //       noscript.appendChild(iframe);
// //       if (document.body.firstChild) {
// //         document.body.insertBefore(noscript, document.body.firstChild);
// //       }
// //     };

// //     // Trigger on first user interaction
// //     const events = ['mousemove', 'touchstart', 'scroll', 'keydown'];
// //     events.forEach(e => window.addEventListener(e, loadGTM, { once: true, passive: true }));

// //     // Fallback: load after 5 seconds even if no interaction
// //     const timer = setTimeout(loadGTM, 5000);

// //     return () => {
// //       clearTimeout(timer);
// //       events.forEach(e => window.removeEventListener(e, loadGTM));
// //     };
// //   }, [gtmId]);

// //   return null;
// // }

// // declare global {
// //   interface Window {
// //     dataLayer: any[];
// //     gtag: (...args: any[]) => void;
// //   }
// // }

// 'use client';

// import { useEffect } from 'react';

// export default function GoogleTagManagerContainer({ gtmId }: { gtmId: string }) {
//   useEffect(() => {
//     let loaded = false;

//     const loadGTM = () => {
//       if (loaded) return;
//       loaded = true;

//       window.dataLayer = window.dataLayer || [];

//       const gtag = (...args: unknown[]) => {
//         window.dataLayer.push(args);
//       };
//       window.gtag = gtag;

//       gtag('consent', 'default', {
//         ad_storage: 'denied',
//         ad_user_data: 'denied',
//         ad_personalization: 'denied',
//         analytics_storage: 'denied',
//         wait_for_update: 500,
//       });

//       const script = document.createElement('script');
//       script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
//       script.async = true;
//       document.head.appendChild(script);

//       const noscript = document.createElement('noscript');
//       const iframe = document.createElement('iframe');
//       iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
//       iframe.height = '0';
//       iframe.width = '0';
//       iframe.style.display = 'none';
//       iframe.style.visibility = 'hidden';
//       noscript.appendChild(iframe);
//       if (document.body.firstChild) {
//         document.body.insertBefore(noscript, document.body.firstChild);
//       }
//     };

//     const events = ['mousemove', 'touchstart', 'scroll', 'keydown'];
//     events.forEach(e => window.addEventListener(e, loadGTM, { once: true, passive: true }));

//     const timer = setTimeout(loadGTM, 5000);

//     return () => {
//       clearTimeout(timer);
//       events.forEach(e => window.removeEventListener(e, loadGTM));
//     };
//   }, [gtmId]);

//   return null;
// }

// declare global {
//   interface Window {
//     dataLayer: unknown[];
//     gtag: (...args: unknown[]) => void;
//   }
// }
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
