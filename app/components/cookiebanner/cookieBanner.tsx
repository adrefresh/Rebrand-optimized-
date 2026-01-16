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
  const [show, setShow] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

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
    if (!checked) return;
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
          We use cookies to improve your browsing experience and analyze traffic.
        </p>

        <label className="flex items-center gap-2 justify-center sm:justify-start cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 accent-[#813DFF]"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span>
            I agree to the{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>
          </span>
        </label>
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
          disabled={!checked}
          className={`px-6 py-2 border transition ${
            checked
              ? "bg-[#813DFF] text-white border-[#813DFF] hover:opacity-90"
              : "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed"
          }`}
        >
          Accept
        </button>

      
      </div>
    </div>
  );
}