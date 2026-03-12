// // 'use client';

// // import Script from 'next/script';
// // import { GoogleTagManager as GTM } from '@next/third-parties/google';

// // export default function GoogleTagManagerContainer({ gtmId }: { gtmId: string }) {
// //   return (
// //     <>
// //       {/* 1. Set Default Consent (must run BEFORE GTM) */}
// //       <Script id="google-consent-mode" strategy="afterInteractive">
// //         {`
// //           window.dataLayer = window.dataLayer || [];
// //           function gtag(){dataLayer.push(arguments);}
          
// //           gtag('consent', 'default', {
// //             'ad_storage': 'denied',
// //             'ad_user_data': 'denied',
// //             'ad_personalization': 'denied',
// //             'analytics_storage': 'denied',
// //             'wait_for_update': 500
// //           });
// //         `}
// //       </Script>

// //       {/* 2. Load GTM */}
// //       <GTM gtmId={gtmId} />
// //     </>
// //   );
// // }

// 'use client';

// import Script from 'next/script';
// import { GoogleTagManager as GTM } from '@next/third-parties/google';

// export default function GoogleTagManagerContainer({ gtmId }: { gtmId: string }) {
//   return (
//     <>
//       {/* =========================
//           GOOGLE CONSENT MODE
//           Must run BEFORE GTM
//       ========================== */}
//       <Script id="google-consent-mode" strategy="beforeInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];

//           function gtag(){dataLayer.push(arguments);}
//           window.gtag = gtag;

//           gtag('consent', 'default', {
//             ad_storage: 'denied',
//             ad_user_data: 'denied',
//             ad_personalization: 'denied',
//             analytics_storage: 'denied',
//             wait_for_update: 500
//           });
//         `}
//       </Script>

//       {/* =========================
//           GOOGLE TAG MANAGER
//       ========================== */}
//       <GTM gtmId={gtmId} />

//     </>
//   );
// }

'use client';

import Script from 'next/script';
import { GoogleTagManager as GTM } from '@next/third-parties/google';

export default function GoogleTagManagerContainer({ gtmId }: { gtmId: string }) {
  return (
    <>
      {/* =========================
          GOOGLE CONSENT MODE
          ✅ FIX: Changed from "beforeInteractive" to "afterInteractive"
          beforeInteractive was blocking first paint and hurting LCP/FCP
      ========================== */}
      <Script id="google-consent-mode" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>

      {/* =========================
          GOOGLE TAG MANAGER
      ========================== */}
      <GTM gtmId={gtmId} />

    </>
  );
}
