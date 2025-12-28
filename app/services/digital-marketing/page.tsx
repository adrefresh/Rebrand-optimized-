"use client";

import DgZigZagSections from "@/app/components/service-page-components/digital-marketing-components/dgzig-zag";
import AdOpsContactHero2 from "@/app/components/service-page-components/digital-marketing-components/digital-contact-hero";
import PrecisionSectionGray from "@/app/components/service-page-components/precesion-section-serv";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function DigitalMarketingPage() {
  return (
    <>
      {/* ================= HERO VIDEO ================= */}
      <section
        className="
          relative
          w-screen
          h-[90vh]
          max-[768px]:h-[50vh]
          ml-[calc(50%-50vw)]
          overflow-hidden
          flex
          items-center
          justify-center
        "
      >
        {/* VIDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover z-[1]"
          src={`${basePath}/images/about-page-videos-images/dgm1.mp4`}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* DARK OVERLAY (MAIN) */}
        <div className="absolute inset-0 z-[2] bg-black/15" />

        {/* SOFT GRADIENT OVERLAY (DEPTH) */}
        <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/60 via-black/40 to-black/75" />

        {/* HERO CONTENT */}
        <div className="relative z-[5] text-center px-4">
          <h1 className="text-[4rem] max-[768px]:text-[2.5rem] font-black tracking-wide text-white">
            DIGITAL MARKETING
          </h1>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section
        className="
          relative
          w-screen
          ml-[calc(50%-50vw)]
          bg-white
          pt-[100px]
          pb-[140px]
        "
      >
        {/* Precision Section (overlap) */}
        <div className="mt-[-10%]">
          <PrecisionSectionGray />
        </div>

        {/* ZigZag Section */}
        <div className="mx-auto w-[85vw]">
          <DgZigZagSections />
        </div>

        {/* Spacer */}
        <div className="mt-[10%]" />

        {/* CTA Section (overlap bottom) */}
        <div className="mt-[-1.8%] mb-[-10%]">
          <AdOpsContactHero2 />
        </div>
      </section>
    </>
  );
}
