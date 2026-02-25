'use client';

import Script from 'next/script';
import { GoogleTagManager as GTM } from '@next/third-parties/google';

export default function GoogleTagManagerContainer({ gtmId }: { gtmId: string }) {
  return (
    <>
      {/* 1. Set Default Consent (must run BEFORE GTM) */}
      <Script id="google-consent-mode" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 500
          });
        `}
      </Script>

      {/* 2. Load GTM */}
      <GTM gtmId={gtmId} />
    </>
  );
}