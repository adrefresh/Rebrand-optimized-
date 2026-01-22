// "use client";
// import { useEffect, useState } from "react";

// /* Declare global window type */
// declare global {
//   interface Window {
//     gtmLoaded?: boolean;
//     dataLayer?: any[];
//   }
// }

// export default function CookieBanner() {
//   const [show, setShow] = useState(false);
//   const [checked, setChecked] = useState(false);

//   useEffect(() => {
//     const consent = localStorage.getItem("cookiesAccepted");

//     if (!consent) {
//       setShow(true);
//     }

//     if (consent === "true") {
//       loadGTM();
//     }
//   }, []);

//   const acceptCookies = () => {
//     if (!checked) return;

//     localStorage.setItem("cookiesAccepted", "true");
//     loadGTM();
//     setShow(false);
//   };

//   const rejectCookies = () => {
//     localStorage.setItem("cookiesAccepted", "false");
//     setShow(false);
//   };

//   const loadGTM = () => {
//     if (window.gtmLoaded) return;
//     window.gtmLoaded = true;

//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({
//       event: "consent_granted",
//     });

//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-MMMX5TGB";
//     document.head.appendChild(script);
//   };

//   if (!show) return null;

//   return (
//     <div
//       className="
//         fixed bottom-6 left-1/2 -translate-x-1/2
//         bg-white text-black
//         px-8 py-5
//         shadow-xl
//         flex flex-col sm:flex-row items-center justify-between
//         gap-6
//         z-[9999]
//         w-[80vw]
//         border border-gray-300
//       "
//     >
//       {/* Left Content */}
//       <div className="flex flex-col gap-2 text-sm text-center sm:text-left">
//         <p>
//           We use cookies to enhance your experience, deliver personalised ads and marketing content, and analyse our traffic. Learn more in our <a href="/privacy-policy" target="_blank">Privacy Policy</a>. By clicking “Accept All”, you consent to our use of cookies.
//         </p>

//         <label className="flex items-center gap-2 justify-center sm:justify-start cursor-pointer">
//           <input
//             type="checkbox"
//             className="w-4 h-4 accent-[#813DFF]"
//             checked={checked}
//             onChange={(e) => setChecked(e.target.checked)}
//           />
        
//         </label>
//       </div>

//       {/* Right Buttons */}
//       <div className="flex gap-4">
//         <button
//           onClick={rejectCookies}
//           className="px-6 py-2 border border-black bg-transparent hover:bg-black hover:text-white transition"
//         >
//           Reject
//         </button>

//         <button
//           onClick={acceptCookies}
//           disabled={!checked}
//           className={`px-6 py-2 border transition ${
//             checked
//               ? "bg-[#813DFF] text-white border-[#813DFF] hover:opacity-90"
//               : "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed"
//           }`}
//         >
//           Accept
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";

/* Declare global window type */
declare global {
  interface Window {
    gtmLoaded?: boolean;
    dataLayer?: any[];
  }
}

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookiesAccepted");

    if (!consent) {
      setShow(true);
    }

    if (consent === "true") {
      loadGTM();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    loadGTM();
    setShow(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShow(false);
  };

  const loadGTM = () => {
    if (window.gtmLoaded) return;
    window.gtmLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_granted",
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-MMMX5TGB";
    document.head.appendChild(script);
  };

  if (!show) return null;

  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        bg-white text-black
        px-8 py-5
        shadow-xl
        flex flex-col sm:flex-row items-center justify-between
        gap-6
        z-[9999]
        w-[80vw]
        border border-gray-300
      "
    >
      {/* Left Content */}
      <div className="flex flex-col gap-2 text-sm text-center sm:text-left">
        <p>
          We use cookies to enhance your experience and analyse our traffic. Learn more in our{" "}
          <a href="/privacy-policy" target="_blank"  className="underline text-[#813DFF] hover:underline">
            Privacy Policy
          </a>
          . By clicking{" "}
          <span className="font-bold text-base">“Accept”</span>, you consent to
          our use of cookies.
        </p>
      </div>

      {/* Right Buttons */}
      <div className="flex gap-4">
        <button
          onClick={rejectCookies}
          className="px-6 py-2 border border-black bg-transparent hover:bg-black hover:text-white transition"
        >
          Reject
        </button>

        <button
          onClick={acceptCookies}
          className="px-6 py-2 border bg-[#813DFF] text-white border-[#813DFF] hover:opacity-90 transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
