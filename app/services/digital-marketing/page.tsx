// // "use client";

// // import DgZigZagSections from "@/app/components/service-page-components/digital-marketing-components/dgzig-zag";
// // import AdOpsContactHero2 from "@/app/components/service-page-components/digital-marketing-components/digital-contact-hero";
// // import PrecisionSectionGray from "@/app/components/service-page-components/precesion-section-serv";

// // const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// // export default function DigitalMarketingPage() {
// //   return (
// //     <>
// //       {/* ================= HERO VIDEO ================= */}
// //       <section
// //         className="
// //           relative
// //           w-screen
// //           h-[90vh]
// //           max-[768px]:h-[50vh]
// //           ml-[calc(50%-50vw)]
// //           overflow-hidden
// //           flex
// //           items-center
// //           justify-center
// //         "
// //       >
// //         {/* VIDEO */}
// //         <video
// //           className="absolute inset-0 h-full w-full object-cover z-[1]"
// //           src={`${basePath}/images/about-page-videos-images/dgm1.mp4`}
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //         />

// //         {/* DARK OVERLAY (MAIN) */}
// //         <div className="absolute inset-0 z-[2] bg-black/15" />

// //         {/* SOFT GRADIENT OVERLAY (DEPTH) */}
// //         <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/60 via-black/40 to-black/75" />

// //         {/* HERO CONTENT */}
// //         <div className="relative z-[5] text-center px-4">
// //           <h1 className="text-[4rem] max-[768px]:text-[2.5rem] font-black tracking-wide text-white">
// //             DIGITAL MARKETING
// //           </h1>
// //         </div>
// //       </section>

// //       {/* ================= MAIN SECTION ================= */}
// //       <section
// //         className="
// //           relative
// //           w-screen
// //           ml-[calc(50%-50vw)]
// //           bg-white
// //           pt-[100px]
// //           pb-[140px]
// //         "
// //       >
// //         {/* Precision Section (overlap) */}
// //         <div className="mt-[-10%]">
// //           <PrecisionSectionGray />
// //         </div>

// //         {/* ZigZag Section */}
// //         <div className="mx-auto w-[85vw]">
// //           <DgZigZagSections />
// //         </div>

// //         {/* Spacer */}
// //         <div className="mt-[10%]" />

// //         {/* CTA Section (overlap bottom) */}
// //         <div className="mt-[-1.8%] mb-[-10%]">
// //           <AdOpsContactHero2 />
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// "use client";

// import DgZigZagSections from "@/app/components/service-page-components/digital-marketing-components/dgzig-zag";
// import AdOpsContactHero2 from "@/app/components/service-page-components/digital-marketing-components/digital-contact-hero";
// import PrecisionSectionGray from "@/app/components/service-page-components/precesion-section-serv";

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// export default function DigitalMarketingPage() {
//   return (
//     <>
//       {/* ================= HERO VIDEO ================= */}
//       <section
//         className="
//           relative
//           w-screen
//           h-[90vh]
//           max-[1024px]:h-[70vh]
//           max-[768px]:h-[55vh]
//           max-[480px]:h-[50vh]
//           ml-[calc(50%-50vw)]
//           overflow-hidden
//           flex
//           items-center
//           justify-center
//         "
//       >
//         {/* VIDEO */}
//         <video
//           className="absolute inset-0 h-full w-full object-cover z-[1]"
//           src={`${basePath}/images/about-page-videos-images/dgmvd.mp4`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 z-[2] bg-black/15" />

//         {/* GRADIENT OVERLAY */}
//         <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/60 via-black/40 to-black/75" />

//         {/* HERO CONTENT */}
//         <div className="relative z-[5] text-center px-4 sm:px-6 md:px-10">
//           <h1
//             className="
//               text-[4rem]
//               max-[1280px]:text-[3.5rem]
//               max-[1024px]:text-[3rem]
//               max-[768px]:text-[2.4rem]
//               max-[480px]:text-[2rem]
//               font-black
//               tracking-wide
//               text-white
//             "
//           >
//             DIGITAL MARKETING
//           </h1>
//         </div>
//       </section>

//       {/* ================= MAIN SECTION ================= */}
//       <section
//         className="
//           relative
//           w-screen
//           ml-[calc(50%-50vw)]
//           bg-white
//           pt-[100px]
//           max-[1024px]:pt-[80px]
//           max-[768px]:pt-[60px]
//           pb-[140px]
//           max-[1024px]:pb-[110px]
//           max-[768px]:pb-[90px]
//         "
//       >
//         {/* Precision Section */}
//         <div className="mt-[-10%] max-[768px]:mt-[-15%]">
//           <PrecisionSectionGray/>
//         </div>

//         {/* ZigZag Section */}
//         <div
//           className="
//             mx-auto
//             w-[85vw]
//             max-[1280px]:w-[90vw]
//             max-[768px]:w-[94vw]
//           "
//         >
//           <DgZigZagSections />
//         </div>

//         {/* Spacer */}
//         <div className="mt-[10%] max-[768px]:mt-[15%]" />

//         {/* CTA Section */}
//         <div className="mt-[-1.8%] max-[768px]:mt-[-5%] mb-[-10.2%]">
//           <AdOpsContactHero2 />
//         </div>
//       </section>
//     </>
//   );
// }
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
          h-[90vh]                /* 🖥 large desktop */
          max-[1280px]:h-[80vh]   /* 💻 laptop */
          max-[1024px]:h-[70vh]   /* 📱 tablet */
          max-[768px]:h-[55vh]    /* 📱 mobile */
          max-[480px]:h-[50vh]
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

        {/* ✅ SINGLE RESPONSIVE BLACK OVERLAY (NO GRADIENT) */}
        <div
          className="
            absolute inset-0 z-[3]
            bg-black
            opacity-40          /* 📱 mobile */
            sm:opacity-45       /* 📱 large mobile */
            md:opacity-50       /* 📱 tablet */
            lg:opacity-55       /* 💻 laptop */
            xl:opacity-60       /* 🖥 desktop */
          "
        />

        {/* HERO CONTENT */}
        <div className="relative z-[5] text-center px-4 sm:px-6 md:px-10">
          <h1
            className="
              font-black tracking-wide text-white

              text-[2rem]        /* 📱 small mobile */
              sm:text-[2.4rem]
              md:text-[3rem]
              lg:text-[3.5rem]
              xl:text-[4rem]     /* 🖥 desktop */
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

          pt-[100px]
          max-[1024px]:pt-[80px]
          max-[768px]:pt-[60px]

          pb-[140px]
          max-[1024px]:pb-[110px]
          max-[768px]:pb-[90px]
        "
      >
        {/* Precision Section (overlap preserved) */}
        <div className="mt-[-10%] max-[768px]:mt-[-15%]">
          <PrecisionSectionGray />
        </div>

        {/* ZigZag Section */}
        <div
          className="
            mx-auto
            w-[85vw]
            max-[1280px]:w-[90vw]
            max-[768px]:w-[94vw]
          "
        >
          <DgZigZagSections />
        </div>

        {/* Spacer */}
        <div className="mt-[10%] max-[768px]:mt-[15%]" />

        {/* CTA Section (overlap bottom preserved) */}
        <div className="mt-[-1.8%] max-[768px]:mt-[-5%] mb-[-10.2%]">
          <AdOpsContactHero2 />
        </div>
      </section>
    </>
  );
}
