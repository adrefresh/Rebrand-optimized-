"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    khConfig?: any;
  }
}

export default function CareersClient() {

  useEffect(() => {
    // Define Keka config AFTER DOM is ready
    window.khConfig = {
      identifier: "f67f9089-1c2c-4b65-be95-226a53932b93",
      domain: "https://adrefresh.keka.com/careers/",
      targetContainer: "#khembedjobs",
    };

    // Remove old script if exists (prevents duplicate embeds)
    const oldScript = document.getElementById("keka-script");
    if (oldScript) oldScript.remove();

    // Create script dynamically
    const script = document.createElement("script");
    script.src =
      "https://adrefresh.keka.com/careers/api/embedjobs/js/f67f9089-1c2c-4b65-be95-226a53932b93";
    script.async = true;
    script.id = "keka-script";

    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* ================= HEADING ================= */}
      <div className="mt-16 px-4 text-center sm:mt-20 overflow-x-hidden">
        <h1 className="font-extrabold text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[3rem]">
          JOIN WITH US
        </h1>

        <p className="mt-2 text-gray-600 text-[0.95rem] sm:text-base">
          Explore exciting opportunities to grow your career with AdRefreshh.
        </p>
      </div>

      {/* ================= KEKA JOBS ================= */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        {/* Target container MUST exist before script loads */}
        <div id="khembedjobs" className="w-full min-h-600px"></div>
      </div>
    </>
  );
}
