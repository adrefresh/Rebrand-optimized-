
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
          min-h-[50vh]          /* 📱 mobile */
          sm:min-h-[60vh]       /* 📱 large mobile */
          md:min-h-[70vh]       /* 📱 tablet */
          lg:min-h-[80vh]       /* 💻 laptop */
          xl:min-h-[90vh]       /* 🖥 desktop */

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
          src={`${basePath}/images/about-page-videos-images/dgmvd.mp4`}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* OVERLAY */}
        <div
          className="
            absolute inset-0 z-[3]
            bg-black
            opacity-40
            sm:opacity-45
            md:opacity-50
            lg:opacity-55
            xl:opacity-60
          "
        />

        {/* HERO CONTENT */}
        <div className="relative z-[5] text-center px-4 sm:px-6 md:px-10">
          <h1
            className="
              font-black
              tracking-wide
              text-white

              text-[1.9rem]     /* 📱 mobile */
              sm:text-[2.4rem]
              md:text-[3rem]
              lg:text-[3.5rem]
              xl:text-[4rem]
            "
          >
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

          pt-16                /* 📱 mobile */
          sm:pt-20
          md:pt-24
          lg:pt-28

          pb-24
          sm:pb-28
          md:pb-32
          lg:pb-36
        "
      >
        {/* Precision Section (overlap preserved) */}
        <div className="mt-[-100px] sm:mt-[-100px] md:mt-[-147px]">
          <PrecisionSectionGray />
        </div>

        {/* ZigZag Section */}
        <div className="mx-auto w-[94vw] sm:w-[90vw] lg:w-[85vw]">
          <DgZigZagSections />
        </div>

        {/* Spacer */}
        <div className="mt-[14%] sm:mt-[12%] md:mt-[10%]" />

        {/* CTA Section (overlap bottom preserved) */}
        <div className="mb-[-95px] sm:mb-[-100px] md:mb-[-147px]">
          <AdOpsContactHero2 />
        </div>
      </section>
    </>
  );
}
