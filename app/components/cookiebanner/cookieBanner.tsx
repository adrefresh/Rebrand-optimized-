


// 'use client';

// import { useState, useEffect } from 'react';

// /* 1. TypeScript Declarations for Window object */
// declare global {
//   interface Window {
//     dataLayer?: Object[];
//     gtag: (...args: any[]) => void;
//   }
// }

// export default function CookieBanner() {
//   const [showBanner, setShowBanner] = useState(false);

//   useEffect(() => {
//     // Check if user has already made a choice
//     const savedConsent = localStorage.getItem('consent_granted');

//     if (!savedConsent) {
//       setShowBanner(true);
//     } else {
//       // If they already accepted, re-apply the consent status to GTM
//       // and trigger the custom event so Clarity/GA4 fire immediately
//       applyConsent(savedConsent as 'granted' | 'denied');
//     }
//   }, []);

//   /**
//    * Helper function to update GTM/Google Consent Mode
//    */
//   const applyConsent = (status: 'granted' | 'denied') => {
//     if (typeof window.gtag === 'undefined') return;

//     // A. Update Google's built-in Consent Mode
//     window.gtag('consent', 'update', {
//       'ad_storage': status,
//       'ad_user_data': status,
//       'ad_personalization': status,
//       'analytics_storage': status,
//       'personalization_storage': status,
//     });

//     // B. Push Custom Event to wake up MS Clarity & other 3rd party tags
//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({
//       event: 'consent_update_event',
//       consent_status: status,
//     });
//   };

//   const handleConsentUpdate = (status: 'granted' | 'denied') => {
//     localStorage.setItem('consent_granted', status);
//     applyConsent(status);
//     setShowBanner(false);
//   };

//   if (!showBanner) return null;

//   return (
//     <div
//       className="
//         fixed bottom-6 left-1/2 -translate-x-1/2
//         bg-white text-black
//         px-8 py-5
//         shadow-xl
//         flex flex-col sm:flex-row items-center justify-between
//         gap-6
//         z-9999
//         w-[80vw]
//         border border-gray-300
//       "
//     >
//       {/* Left Content */}
//       <div className="flex flex-col gap-2 text-sm text-center sm:text-left">
//         <p>
//           We use cookies to enhance your experience and analyse our traffic. Learn more in our{" "}
//           <a href="/privacy-policy" target="_blank"  className="underline text-[#813DFF] hover:underline">
//             Privacy Policy
//           </a>
//           . By clicking{" "}
//           <span className="font-bold text-base">“Accept”</span>, you consent to
//           our use of cookies.
//         </p>
//       </div>

//       {/* Right Buttons */}
//       <div className="flex gap-4">
//         <button 
//             onClick={() => handleConsentUpdate('denied')} 
//             className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
//           >
//             Decline
//           </button>
//           <button 
//             onClick={() => handleConsentUpdate('granted')} 
//             className="bg-[#813DFF] hover:bg-[#6b32d4] text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all shadow-md active:scale-95"
//           >
//             Accept All
//           </button>
//           {/* <button
//           onClick={rejectCookies}
//           className="px-6 py-2 border border-black bg-transparent hover:bg-black hover:text-white transition"
//         >
//           Reject
//         </button>

//         <button
//           onClick={acceptCookies}
//           className="px-6 py-2 border bg-[#813DFF] text-white border-[#813DFF] hover:opacity-90 transition"
//         >
//           Accept
//         </button> */}
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';

/* TypeScript Declarations for Window object */
declare global {
  interface Window {
    dataLayer?: Object[];
    gtag: (...args: any[]) => void;
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('consent_granted');
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      applyConsent(savedConsent as 'granted' | 'denied');
    }
  }, []);

  const applyConsent = (status: 'granted' | 'denied') => {
    if (typeof window.gtag === 'undefined') return;

    window.gtag('consent', 'update', {
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
      analytics_storage: status,
      personalization_storage: status,
    });

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'consent_update_event',
      consent_status: status,
    });
  };

  const handleConsentUpdate = (status: 'granted' | 'denied') => {
    localStorage.setItem('consent_granted', status);
    applyConsent(status);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
<div
  className="
    fixed bottom-0 left-1/2 -translate-x-1/2
    bg-[#ffffff] text-black
    sm:px-2 sm:py-4
    px-2 py-1
    flex flex-col sm:flex-row items-center justify-center
    gap-2 sm:gap-4
    z-[9999]
    w-full sm:w-[60vw]
 border-t border-[#6c1cff]
    sm:rounded-t-xl
  "
>
      {/* Message */}
    <p className="text-center sm:text-left sm:text-[13px] text-[13px] leading-snug">
  We use cookies for analytics and social media tracking per our Privacy policy
  {/* <a
    href="/privacy-policy"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-[#8ab4f8] hover:text-gray-500 transition-colors sm:text-[13px] text-[11px]"
  >
    Privacy Policyyy hello
  </a>
  . */}
</p>
      {/* Buttons */}
      <div className="flex items-center gap-3 shrink-0">
         <button 
             onClick={() => handleConsentUpdate('denied')} 
             className="px-2 py-1 text-[10px] sm:text-[13px] font-medium text-black hover:text-gray-800 transition-colors cursor-pointer border rounded-sm"
           > 
             Decline
           </button>
           <button 
             onClick={() => handleConsentUpdate('granted')} 
             className="bg-[#813DFF] hover:bg-[#6c1cff] text-white px-2 py-1 rounded-sm cursor-pointer  text-[10px] sm:text-[13px] font-semibold transition-all shadow-md active:scale-95"
           >
             Accept
           </button>
        {/* <button
          onClick={() => handleConsentUpdate('denied')}
          className="text-[13px] font-medium text-[#8ab4f8] hover:text-white transition-colors underline-offset-2 cursor-pointer"
        >
          Decline
        </button>
        <button
          onClick={() => handleConsentUpdate('granted')}
          className="text-[13px] font-semibold text-[#8ab4f8] hover:text-white transition-colors cursor-pointer"
        >
          Ok, Got it.
        </button> */}
      </div>
    </div>
  );
}