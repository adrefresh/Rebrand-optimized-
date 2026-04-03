
'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: Function;
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 1. Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];
    
    // 2. Helper function to handle gtag commands safely
    function gtag() {
      window.dataLayer.push(arguments);
    }

    const savedConsent = localStorage.getItem('consent_granted');

    if (!savedConsent) {
      // 3. Set DEFAULT state to denied for new users
      window.dataLayer.push('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        personalization_storage: 'denied',
        wait_for_update: 500 // Optional: gives GTM time to react
      });
      setShowBanner(true);
    } else {
      // 4. Apply saved consent immediately
      applyConsent(savedConsent as 'granted' | 'denied');
    }
  }, []);

  const applyConsent = (status: 'granted' | 'denied') => {
    // Using dataLayer.push(arguments) style for maximum compatibility
    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push('consent', 'update', {
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
      analytics_storage: status,
      personalization_storage: status,
    });

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
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-white text-black sm:px-2 sm:py-4 px-2 py-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 z-9999 w-full sm:w-[60vw] border-t border-[#6c1cff] sm:rounded-t-xl shadow-2xl">
      <p className="text-center sm:text-left text-[13px] leading-snug">
        We use cookies for analytics and social media tracking per our privacy policy.
      </p>
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
      </div>
    </div>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';

// declare global {
//   interface Window {
//     dataLayer: any[];
//     gtag: Function;
//   }
// }

// export default function CookieBanner() {
//   const [showBanner, setShowBanner] = useState(false);

//   useEffect(() => {
//     // Initialize dataLayer if it doesn't exist
//     window.dataLayer = window.dataLayer || [];

//     const savedConsent = localStorage.getItem('consent_granted');

//     if (!savedConsent) {
//       // Set DEFAULT consent - ALLOW analytics by default
//       window.dataLayer.push('consent', 'default', {
//         ad_storage: 'denied',
//         ad_user_data: 'denied',
//         ad_personalization: 'denied',
//         analytics_storage: 'granted',   // ✅ ALLOW analytics
//         personalization_storage: 'denied',
//         wait_for_update: 500
//       });
//       setShowBanner(true);
//     } else {
//       // Apply previously saved consent
//       applyConsent(savedConsent as 'granted' | 'denied');
//     }
//   }, []);

//   const applyConsent = (status: 'granted' | 'denied') => {
//     window.dataLayer = window.dataLayer || [];

//     window.dataLayer.push('consent', 'update', {
//       ad_storage: status === 'granted' ? 'granted' : 'denied',
//       ad_user_data: status === 'granted' ? 'granted' : 'denied',
//       ad_personalization: status === 'granted' ? 'granted' : 'denied',
//       analytics_storage: 'granted',     // ✅ ALWAYS allow analytics
//       personalization_storage: status === 'granted' ? 'granted' : 'denied',
//     });

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
//     <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-white text-black sm:px-2 sm:py-4 px-2 py-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 z-9999 w-full sm:w-[60vw] border-t border-[#6c1cff] sm:rounded-t-xl shadow-2xl">
//       <p className="text-center sm:text-left text-[13px] leading-snug">
//         We use cookies for analytics and social media tracking per our privacy policy.
//       </p>
//       <div className="flex items-center gap-3 shrink-0">
//         <button
//           onClick={() => handleConsentUpdate('denied')}
//           className="px-2 py-1 text-[10px] sm:text-[13px] font-medium text-black hover:text-gray-800 transition-colors cursor-pointer border rounded-sm"
//         >
//           Decline
//         </button>
//         <button
//           onClick={() => handleConsentUpdate('granted')}
//           className="bg-[#813DFF] hover:bg-[#6c1cff] text-white px-2 py-1 rounded-sm cursor-pointer text-[10px] sm:text-[13px] font-semibold transition-all shadow-md active:scale-95"
//         >
//           Accept
//         </button>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';

// /* TypeScript Declarations for Window object */
// declare global {
//   interface Window {
//     dataLayer?: Object[];
//     gtag: (...args: any[]) => void;
//   }
// }

// export default function CookieBanner() {
//   const [showBanner, setShowBanner] = useState(false);

//   useEffect(() => {
//     const savedConsent = localStorage.getItem('consent_granted');
//     if (!savedConsent) {
//       setShowBanner(true);
//     } else {
//       applyConsent(savedConsent as 'granted' | 'denied');
//     }
//   }, []);

//   const applyConsent = (status: 'granted' | 'denied') => {
//     if (typeof window.gtag === 'undefined') return;

//     window.gtag('consent', 'update', {
//       ad_storage: status,
//       ad_user_data: status,
//       ad_personalization: status,
//       analytics_storage: status,
//       personalization_storage: status,
//     });

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
// <div
//   className="
//     fixed bottom-0 left-1/2 -translate-x-1/2
//     bg-[#ffffff] text-black
//     sm:px-2 sm:py-4
//     px-2 py-1
//     flex flex-col sm:flex-row items-center justify-center
//     gap-2 sm:gap-4
//     z-9999
//     w-full sm:w-[60vw]
//  border-t border-[#6c1cff]
//     sm:rounded-t-xl
//   "
// >
//       {/* Message */}
//     <p className="text-center sm:text-left sm:text-[13px] text-[13px] leading-snug">
//   We use cookies for analytics and social media tracking per our privacy policy
//   {/* <a
//     href="/privacy-policy"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="underline text-[#8ab4f8] hover:text-gray-500 transition-colors sm:text-[13px] text-[11px]"
//   >
//     Privacy Policyyy hello
//   </a>
//   . */}
// </p>
//       {/* Buttons */}
//       <div className="flex items-center gap-3 shrink-0">
//          <button 
//              onClick={() => handleConsentUpdate('denied')} 
//              className="px-2 py-1 text-[10px] sm:text-[13px] font-medium text-black hover:text-gray-800 transition-colors cursor-pointer border rounded-sm"
//            > 
//              Decline
//            </button>
//            <button 
//              onClick={() => handleConsentUpdate('granted')} 
//              className="bg-[#813DFF] hover:bg-[#6c1cff] text-white px-2 py-1 rounded-sm cursor-pointer  text-[10px] sm:text-[13px] font-semibold transition-all shadow-md active:scale-95"
//            >
//              Accept
//            </button>
//         {/* <button
//           onClick={() => handleConsentUpdate('denied')}
//           className="text-[13px] font-medium text-[#8ab4f8] hover:text-white transition-colors underline-offset-2 cursor-pointer"
//         >
//           Decline
//         </button>
//         <button
//           onClick={() => handleConsentUpdate('granted')}
//           className="text-[13px] font-semibold text-[#8ab4f8] hover:text-white transition-colors cursor-pointer"
//         >
//           Ok, Got it.
//         </button> */}
//       </div>
//     </div>
//   );
// }
