
// // import type { Metadata } from "next";
// // import Hero from "./components/homePageComponents/Hero";
// // import About from "./components/homePageComponents/adrexiansabout";
// // import Features from "./components/homePageComponents/Mme";
// // import Flexibility from "./components/homePageComponents/platformExperience";
// // import Section7 from "./components/homePageComponents/platformsMarquee";
// // import CustomizedWorkflow from "./components/homePageComponents/Why-us";
// // import Services from "./components/homePageComponents/services-section";
// // import CaseHeader from "./components/homePageComponents/case-header";
// // import ListenPerform from "./components/homePageComponents/we-listen";
// // import VisionMission from "./components/about-us-page-components/vision";

// // export const metadata: Metadata = {
// //   title: "AdRefresh – Programmatic Advertising & Ad Operations",
// //   description:
// //     "AdRefresh provides programmatic advertising, ad operations, and remote media teams that scale your business efficiently.",

// //   alternates: {
// //     canonical: "https://yourdomain.com/",
// //   },

// //   openGraph: {
// //     title: "AdRefresh – Programmatic Advertising & Ad Operations",
// //     description:
// //       "AdRefresh provides programmatic advertising, ad operations, and remote media teams that scale your business efficiently.",
// //     url: "https://yourdomain.com/",
// //     siteName: "AdRefresh",
// //     images: [
// //       {
// //         url: "https://yourdomain.com/og/home.png",
// //         width: 1200,
// //         height: 630,
// //         alt: "AdRefresh",
// //       },
// //     ],
// //     locale: "en_US",
// //     type: "website",
// //   },

// //   twitter: {
// //     card: "summary_large_image",
// //     title: "AdRefresh – Programmatic Advertising & Ad Operations",
// //     description:
// //       "AdRefresh provides programmatic advertising, ad operations, and remote media teams that scale your business efficiently.",
// //     images: ["https://yourdomain.com/og/home.png"],
// //   },

// //   robots: {
// //     index: true,
// //     follow: true,
// //   },
// // };

// // export default function HomePage() {
// //   return (
// //     <main
// //       className="
// //         relative
// //         w-full
// //         overflow-x-hidden   /* 👈 mobile safety */
// //       "
// //     >
// //       {/* HERO */}
// //       <Hero />

// //       {/* CONTENT SECTIONS */}
// //       <About />
// //       <Features />
// //       <Flexibility />
// //       <Section7 />
// //       <CustomizedWorkflow />
// //       <CaseHeader />
// //       <Services />
// //      <div className="mb-[-160px] sm:mb-[-2px]">
// //   <ListenPerform />
// // </div>

// //       {/* SCROLL TARGET */}
// //       <section
// //         id="prev-section"
// //         className="
// //           relative
// //           h-[1px]
// //           w-full
// //         "
// //       />
// //     </main>
// //   );
// // }
// import type { Metadata } from "next";
// import dynamic from "next/dynamic";

// /* ======================================================
//    DYNAMIC IMPORTS (ALL HEAVY SECTIONS)
// ====================================================== */

// // HERO (heavy – load client-side with placeholder)
// const Hero = dynamic(
//   () => import("./components/homePageComponents/Hero"),
//   {
//     ssr: false,
//     loading: () => (
//       <div className="h-[70vh] w-full bg-neutral-200" />
//     ),
//   }
// );

// const About = dynamic(
//   () => import("./components/homePageComponents/adrexiansabout"),
//   { ssr: false }
// );

// const Features = dynamic(
//   () => import("./components/homePageComponents/Mme"),
//   { ssr: false }
// );

// const Flexibility = dynamic(
//   () => import("./components/homePageComponents/platformExperience"),
//   { ssr: false }
// );

// const Section7 = dynamic(
//   () => import("./components/homePageComponents/platformsMarquee"),
//   { ssr: false }
// );

// const CustomizedWorkflow = dynamic(
//   () => import("./components/homePageComponents/Why-us"),
//   { ssr: false }
// );

// const CaseHeader = dynamic(
//   () => import("./components/homePageComponents/case-header"),
//   { ssr: false }
// );

// const Services = dynamic(
//   () => import("./components/homePageComponents/services-section"),
//   { ssr: false }
// );

// const ListenPerform = dynamic(
//   () => import("./components/homePageComponents/we-listen"),
//   { ssr: false }
// );

// // Optional


// /* ======================================================
//    METADATA
// ====================================================== */

// export const metadata: Metadata = {
//   title: "AdRefresh – Programmatic Advertising & Ad Operations",
//   description:
//     "AdRefresh provides programmatic advertising, ad operations, and remote media teams that scale your business efficiently.",

//   alternates: {
//     canonical: "https://yourdomain.com/",
//   },

//   openGraph: {
//     title: "AdRefresh – Programmatic Advertising & Ad Operations",
//     description:
//       "AdRefresh provides programmatic advertising, ad operations, and remote media teams that scale your business efficiently.",
//     url: "https://yourdomain.com/",
//     siteName: "AdRefresh",
//     images: [
//       {
//         url: "https://yourdomain.com/og/home.png",
//         width: 1200,
//         height: 630,
//         alt: "AdRefresh",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "AdRefresh – Programmatic Advertising & Ad Operations",
//     description:
//       "AdRefresh provides programmatic advertising, ad operations, and remote media teams that scale your business efficiently.",
//     images: ["https://yourdomain.com/og/home.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// /* ======================================================
//    PAGE
// ====================================================== */

// export default function HomePage() {
//   return (
//     <main
//       className="
//         relative
//         w-full
//         overflow-x-hidden
//       "
//     >
//       {/* HERO */}
//       <Hero />

//       {/* HEAVY SECTIONS */}
//       <About />
//       <Features />
//       <Flexibility />
//       <Section7 />
//       <CustomizedWorkflow />
//       <CaseHeader />
//       <Services />

//       <div className="mb-[-160px] sm:mb-[-2px]">
//         <ListenPerform />
//       </div>

//       {/* SCROLL TARGET */}
//       <section
//         id="prev-section"
//         className="relative h-[1px] w-full"
//       />
//     </main>
//   );
// }
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  /* =========================
     BASIC SEO
  ========================= */
  title: {
    default: "AdRefresh – Digital Marketing & Ad Operations",
    template: "%s | AdRefresh",
  },

  description:
    "AdRefresh delivers Digital Marketing and advertising operations, and scalable remote media teams to help brands grow efficiently with data-driven performance.",

  keywords: [
    "AdRefresh",
    "Digital Advertising",
    
    "Ad Operations",
    "Media Buying",
    "Ad Tech",
  "Programmatic Advertising",
    "Remote Media Teams",
    "Advertising Operations",
    "Performance Marketing",
  ],

  authors: [{ name: "AdRefresh" }],
  creator: "AdRefresh",
  publisher: "AdRefresh",

  category: "Advertising & Marketing",

  /* =========================
     CANONICAL
  ========================= */
  alternates: {
    canonical: "https://adrefresh.com/",
  },

  /* =========================
     OPEN GRAPH (Facebook, LinkedIn, WhatsApp)
  ========================= */
  openGraph: {
    title: "AdRefresh – Digital Marketing & Ad Operations",
    description:
      "Digital Marketing and advertising operations services built to scale performance, efficiency, and measurable growth.",
    url: "https://adrefresh.com/",
    siteName: "AdRefresh",
    images: [
      {
        url: "https://adrefresh.com/og/home.png",
        width: 1200,
        height: 630,
        alt: "AdRefresh – Programmatic Advertising & Ad Operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* =========================
     TWITTER / X
  ========================= */
  twitter: {
    card: "summary_large_image",
    title: "AdRefresh – Programmatic Advertising & Ad Operations",
    description:
      "Scale advertising performance with programmatic advertising and expert ad operations from AdRefresh.",
    images: ["https://adrefresh.com/images/HomePageImages/conference.png"],
    creator: "@adrefresh", // optional
  },

  /* =========================
     ROBOTS
  ========================= */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* =========================
     APP / PWA METADATA
  ========================= */
  applicationName: "AdRefresh",
  referrer: "origin-when-cross-origin",

  /* =========================
     ICONS (optional but recommended)
  ========================= */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  /* =========================
     THEME
  ========================= */
  themeColor: "#000000",
};

export default function HomePage() {
  return <HomeClient />;
}
