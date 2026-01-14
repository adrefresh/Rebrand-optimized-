
// "use client";

// import {
//   Layers,
//   Settings,
//   TrendingUp,
//   LineChart,
//   Headphones,
//   Wrench,
// } from "lucide-react";

// // import PrecisionSectionGray from "../../components/service-page-components/precesion-section-serv";
// import ZigZagSections from "../../components/service-page-components/zig-zag-section";
// import AdOpsContactHero2 from "../../components/service-page-components/adops-contact-hero";
// import PrecisionSectionGray from "@/app/components/service-page-components/precesion-sec-2";

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// export const metadata = {
//   title: "Advertising Operations Services | AdOps Management & Optimization",
//   description:
//     "Professional Advertising Operations (AdOps) services to manage, optimize, and scale your digital ad campaigns. We deliver performance-driven ad operations with transparency and flexibility.",

//   keywords: [
//     "Advertising Operations",
//     "AdOps Services",
//     "Ad Operations Management",
//     "Digital Advertising Operations",
//     "Campaign Optimization Services",
//     "Programmatic Ad Operations",
//     "Media Operations",
//     "Ad Tech Services"
//   ],

//   openGraph: {
//     title: "Advertising Operations Services | AdOps Management & Optimization",
//     description:
//       "End-to-end Advertising Operations services including campaign setup, optimization, reporting, and performance scaling.",
//     url: "https://adrefresh.com/services/ad-operations",
//     siteName: "AdRefresh",
//     images: [
//       {
//         url: "https://adrefresh.com/images/seo/adops-og.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Advertising Operations Services",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Advertising Operations Services | AdOps Management & Optimization",
//     description:
//       "Scalable AdOps services for campaign execution, optimization, reporting, and performance growth.",
//     images: ["https://adrefresh.com/images/seo/adops-og.jpg"],
//   },

//   alternates: {
//     canonical: "https://adrefresh.com/services/ad-operations",
//   },
// };

// export default function AdOpsPageWithVideo() {

//   return (
//     <>
//       {/* ============================================================
//           🌟 SECTION 1 — FULLSCREEN VIDEO HERO
//       ============================================================ */}
//       <section
//         className="
//           relative
//           w-screen
//           h-[89vh]
//           max-[1024px]:h-[65vh]
//           max-[768px]:h-[50vh]
//           overflow-hidden
//           flex
//           items-center
//           justify-center
//           mb-[-2.5%]
//         "
//         style={{ marginLeft: "calc(50% - 50vw)" }}
//       >
//         {/* VIDEO */}
//         <video
//           className="
//             absolute inset-0
//             w-full h-full
//             object-cover
//             z-[1]
//           "
//           src={`${basePath}/images/about-page-videos-images/adopsvd.mp4`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />

//         {/* BLACK OVERLAY */}
//         <div className="absolute inset-0 z-[2] bg-black/35" />

//         {/* GRADIENT DEPTH */}
//         <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

//         {/* TEXT */}
//         <div className="relative z-[5] text-center px-4">
//           <h1
//             className="
//               text-white
//               font-black
//               tracking-[1px]

//               text-[4rem]
//               max-[1280px]:text-[3.4rem]
//               max-[1024px]:text-[3rem]
//               max-[768px]:text-[2.5rem]
//               max-[480px]:text-[2.1rem]
//             "
//           >
//             ADVERTSING OPERATIONS
//           </h1>
//         </div>
//       </section>

//       {/* ============================================================
//           🌟 SECTION 2 — CONTENT BLOCKS
//       ============================================================ */}
//       <section
//         className="
//           w-screen
//           bg-white
//           pt-[120px]
//           pb-[160px]

//           max-[1024px]:pt-[100px]
//           max-[1024px]:pb-[140px]

//           max-[768px]:pt-[80px]
//           max-[768px]:pb-[120px]

//           max-[480px]:pt-[64px]
//           max-[480px]:pb-[100px]
//         "
//         style={{ marginLeft: "calc(50% - 50vw)" }}
//       >
//         {/* Precision Section */}
//            <div className="mt-[-112px] sm:mt-[-100px] md:mt-[-147px]">

//           <PrecisionSectionGray/>
//         </div>

//         <br />

//         {/* ZigZag Content */}
//         <div
//           className="
//             -mt-[5%]
//             max-[1024px]:-mt-[3%]
//             max-[768px]:mt-0
//           "
//         >
//           <ZigZagSections />
//         </div>

//         {/* CTA Hero */}
//       <div className="mb-[-100px] sm:mb-[-100px] md:mb-[-161px]">
//           <br />
//           <AdOpsContactHero2 />
//         </div>
//       </section>
//     </>
//   );
// }
import AdOpsPageClient from "./AdopsPageClient";

export const metadata = {
  title: "Advertising Operations Services | AdOps Management & Optimization",
  description:
    "Professional Advertising Operations (AdOps) services to manage, optimize, and scale your digital ad campaigns. We deliver performance-driven ad operations with transparency and flexibility.",

  keywords: [
    "Advertising Operations",
    "AdOps Services",
    "Ad Operations Management",
    "Digital Advertising Operations",
    "Campaign Optimization Services",
    "Programmatic Ad Operations",
    "Media Operations",
    "Ad Tech Services",
  ],

  alternates: {
    canonical: "https://adrefresh.com/services/ad-operations",
  },
};

export default function Page() {
  return <AdOpsPageClient />;
}
