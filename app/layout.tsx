

// // // // // import type { Metadata } from "next";
// // // // // import "./globals.css";
// // // // // import Header from "./components/Header";
// // // // // import Footer from "./components/Footer";
// // // // // import CookieBanner from "./components/cookiebanner/cookieBanner";
// // // // // import GoogleTagManagerContainer from "./components/cookiebanner/GoogleTagManager";
// // // // // import { Manrope } from "next/font/google";
// // // // // import organizationSchema from "@/libraries/schema/organizationSchema";

// // // // // const manrope = Manrope({
// // // // //   subsets: ["latin"],
// // // // //   display: "swap",
// // // // // });

// // // // // export const metadata: Metadata = {
// // // // //   title: "AdRefresh - Digital Marketing and AdOps",
// // // // //   description: "AI-Enhanced Digital Marketing and Advertising Operations",
// // // // // };

// // // // // export default function RootLayout({
// // // // //   children,
// // // // // }: {
// // // // //   children: React.ReactNode;
// // // // // }) {
// // // // //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// // // // //   return (
// // // // //     <html
// // // // //       lang="en"
// // // // //       className={manrope.className}
// // // // //       style={{
// // // // //         ["--base-path" as any]: basePath,
// // // // //       }}
// // // // //     >
// // // // //       <head>
// // // // //         <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />

// // // // //         <script
// // // // //           type="application/ld+json"
// // // // //           dangerouslySetInnerHTML={{
// // // // //             __html: JSON.stringify(organizationSchema),
// // // // //           }}
// // // // //         />
// // // // //       </head>

// // // // //       <body className="layout-root">
// // // // //         <CookieBanner />
// // // // //         <Header />
// // // // //         {children}
// // // // //         <Footer />
// // // // //       </body>
// // // // //     </html>
// // // // //   );
// // // // // }

// // // // import type { Metadata } from "next";
// // // // import "./globals.css";

// // // // import Header from "./components/Header";
// // // // import Footer from "./components/Footer";

// // // // import CookieBanner from "./components/cookiebanner/cookieBanner";
// // // // import GoogleTagManagerContainer from "./components/cookiebanner/GoogleTagManager";

// // // // import { Manrope } from "next/font/google";
// // // // import organizationSchema from "@/libraries/schema/organizationSchema";

// // // // /* =========================
// // // //    FONT CONFIG
// // // // ========================= */

// // // // const manrope = Manrope({
// // // //   subsets: ["latin"],
// // // //   display: "swap",
// // // //   preload: true,
// // // // });

// // // // /* =========================
// // // //    METADATA
// // // // ========================= */

// // // // export const metadata: Metadata = {
// // // //   title: "AdRefresh - Digital Marketing and AdOps",
// // // //   description: "AI-Enhanced Digital Marketing and Advertising Operations",
// // // // };

// // // // /* =========================
// // // //    ROOT LAYOUT
// // // // ========================= */

// // // // export default function RootLayout({
// // // //   children,
// // // // }: {
// // // //   children: React.ReactNode;
// // // // }) {

// // // //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// // // //   return (
// // // //     <html
// // // //       lang="en"
// // // //       className={manrope.className}
// // // //       style={{ ["--base-path" as any]: basePath }}
// // // //     >
// // // //       <head>
// // // // <link rel="preload" as="image" href="/images/client-images/hero-img.png" />
// // // //         {/* ORGANIZATION STRUCTURED DATA */}
// // // //         <script
// // // //           type="application/ld+json"
// // // //           dangerouslySetInnerHTML={{
// // // //             __html: JSON.stringify(organizationSchema),
// // // //           }}
// // // //         />

// // // //       </head>
// // // // <body className="min-h-screen flex flex-col">
// // // //   <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />

// // // //   <CookieBanner />

// // // //   <Header />

// // // //   <main className="flex-1">
// // // //     {children}
// // // //   </main>

// // // //   <Footer />
// // // // </body>
// // // //     </html>
// // // //   );
// // // // }
// // // import type { Metadata } from "next";
// // // import "./globals.css";

// // // import Header from "./components/Header";
// // // import Footer from "./components/Footer";

// // // import CookieBanner from "./components/cookiebanner/cookieBanner";
// // // import GoogleTagManagerContainer from "./components/cookiebanner/GoogleTagManager";

// // // import { Manrope } from "next/font/google";
// // // import organizationSchema from "@/libraries/schema/organizationSchema";

// // // /* =========================
// // //    FONT CONFIG
// // // ========================= */

// // // const manrope = Manrope({
// // //   subsets: ["latin"],
// // //   display: "swap",
// // //   preload: true,
// // // });

// // // /* =========================
// // //    METADATA
// // // ========================= */

// // // export const metadata: Metadata = {
// // //   title: "AdRefresh - Digital Marketing and AdOps",
// // //   description: "AI-Enhanced Digital Marketing and Advertising Operations",
// // // };

// // // /* =========================
// // //    ROOT LAYOUT
// // // ========================= */

// // // export default function RootLayout({
// // //   children,
// // // }: {
// // //   children: React.ReactNode;
// // // }) {

// // //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// // //   return (
// // //     <html
// // //       lang="en"
// // //       className={manrope.className}
// // //       style={{ ["--base-path" as any]: basePath }}
// // //     >
// // //       <head>

// // //         {/* ✅ FIX: Preload hero poster image so LCP renders instantly */}
// // //         <link
// // //           rel="preload"
// // //           as="image"
// // //           href="/images/client-images/hero-img.png"
// // //         />

// // //         {/* ORGANIZATION STRUCTURED DATA */}
// // //         <script
// // //           type="application/ld+json"
// // //           dangerouslySetInnerHTML={{
// // //             __html: JSON.stringify(organizationSchema),
// // //           }}
// // //         />

// // //       </head>
// // //       <body className="min-h-screen flex flex-col">
// // //         <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />

// // //         <CookieBanner />

// // //         <Header />

// // //         <main className="flex-1">
// // //           {children}
// // //         </main>

// // //         <Footer />
// // //       </body>
// // //     </html>
// // //   );
// // // }
// // import type { Metadata } from "next";
// // import "./globals.css";

// // import Header from "./components/Header";
// // import Footer from "./components/Footer";

// // import CookieBanner from "./components/cookiebanner/cookieBanner";
// // import GoogleTagManagerContainer from "./components/cookiebanner/GoogleTagManager";

// // import { Manrope } from "next/font/google";
// // import organizationSchema from "@/libraries/schema/organizationSchema";

// // /* =========================
// //    FONT CONFIG
// // ========================= */

// // const manrope = Manrope({
// //   subsets: ["latin"],
// //   display: "swap",
// //   preload: true,
// // });

// // /* =========================
// //    METADATA
// // ========================= */

// // export const metadata: Metadata = {
// //   title: "AdRefresh - Digital Marketing and AdOps",
// //   description: "AI-Enhanced Digital Marketing and Advertising Operations",
// // };

// // /* =========================
// //    ROOT LAYOUT
// // ========================= */

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {

// //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// //   return (
// //     <html
// //       lang="en"
// //       className={manrope.className}
// //       style={{ ["--base-path" as any]: basePath }}
// //     >
// //       <head>

// //         {/* ✅ FIX: Preload hero poster image so LCP renders instantly */}
// //         <link
// //           rel="preload"
// //           as="image"
// //           href="/images/client-images/hero-img.png"
// //         />

// //         {/* ORGANIZATION STRUCTURED DATA */}
// //         <script
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{
// //             __html: JSON.stringify(organizationSchema),
// //           }}
// //         />

// //       </head>
// //       <body className="min-h-screen flex flex-col">
// //         <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />

// //         <CookieBanner />

// //         <Header />

// //         <main className="flex-1">
// //           {children}
// //         </main>

// //         <Footer />
// //       </body>
// //     </html>
// //   );
// // }

// import type { Metadata } from "next";
// import "./globals.css";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import CookieBanner from "./components/cookiebanner/cookieBanner";
// import GoogleTagManagerContainer from "./components/cookiebanner/GoogleTagManager";

// import { Manrope } from "next/font/google";
// import organizationSchema from "@/libraries/schema/organizationSchema";

// /* =========================
//    FONT CONFIG
// ========================= */

// const manrope = Manrope({
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
// });

// /* =========================
//    METADATA
// ========================= */

// export const metadata: Metadata = {
//   title: "AdRefresh - Digital Marketing and AdOps",
//   description: "AI-Enhanced Digital Marketing and Advertising Operations",
// };

// /* =========================
//    ROOT LAYOUT
// ========================= */

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {

//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   return (
//     <html
//       lang="en"
//       className={manrope.className}
//       style={{ ["--base-path" as any]: basePath }}
//     >
//       <head>

//         {/* ✅ FIX LCP: Preload hero poster so it renders instantly */}
//         <link
//           rel="preload"
//           as="image"
//           href="/images/client-images/hero-img.png"
//         />

//         {/* ✅ FIX LCP: Preload conference image with high fetchpriority to fix CLS */}
//         <link
//           rel="preload"
//           as="image"
//           href="/_next/static/media/conference-40kb.e71a8e5d.webp"
//           fetchPriority="high"
//         />

//         {/* ✅ FIX: Preconnect to third-party origins to reduce connection delays */}
//         <link rel="preconnect" href="https://www.googletagmanager.com" />
//         <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
//         <link rel="preconnect" href="https://snap.licdn.com" crossOrigin="anonymous" />

//         {/* ORGANIZATION STRUCTURED DATA */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(organizationSchema),
//           }}
//         />

//         {/* ✅ FIX: Defer non-critical CSS to stop render blocking (saves 340ms)
//             This loads the CSS after paint so it doesn't block LCP/FCP */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function() {
//                 var links = document.querySelectorAll('link[rel="stylesheet"]');
//                 links.forEach(function(link) {
//                   link.media = 'print';
//                   link.onload = function() { this.media = 'all'; };
//                 });
//               })();
//             `,
//           }}
//         />

//       </head>
//       <body className="min-h-screen flex flex-col">
//         <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />

//         <CookieBanner />

//         <Header />

//         <main className="flex-1">
//           {children}
//         </main>

//         <Footer />
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import CookieBanner from "./components/cookiebanner/cookieBanner";
import GoogleTagManagerContainer from "./components/cookiebanner/GoogleTagManager";

import { Manrope } from "next/font/google";
import organizationSchema from "@/libraries/schema/organizationSchema";

/* =========================
   FONT CONFIG
========================= */

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

/* =========================
   METADATA
========================= */

export const metadata: Metadata = {
  title: "AdRefresh - Digital Marketing and AdOps",
  description: "AI-Enhanced Digital Marketing and Advertising Operations",
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <html
      lang="en"
      className={manrope.className}
      style={{ ["--base-path" as any]: basePath }}
    >
      <head>

        {/* ✅ FIX LCP: Preload hero poster so it paints instantly on load */}
        <link
          rel="preload"
          as="image"
          href="/images/client-images/hero-img.png"
          fetchPriority="high"
        />

        {/* ✅ FIX CLS: Preload conference image — prevents layout shift (was 0.636) */}
        <link
          rel="preload"
          as="image"
          href="/images/HomePageImages/conference-40kb.webp"
          fetchPriority="high"
        />

        {/* ✅ FIX: Preconnect to third-party origins early to reduce connection delays */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://snap.licdn.com" crossOrigin="anonymous" />

        {/* ORGANIZATION STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* ✅ REMOVED: The "defer non-critical CSS" script that was here before.
            It was incorrectly deferring ALL stylesheets including critical ones,
            which caused a flash of unstyled content (FOUC) and hurt FCP.
            Next.js already handles CSS injection correctly — don't override it. */}

      </head>
      <body className="min-h-screen flex flex-col">

        {/* ✅ FIX: GTM now loads via GoogleTagManagerContainer which uses
            afterInteractive strategy — does not block first paint */}
        <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />

        <CookieBanner />
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        {/* ✅ FIX: Facebook Pixel + LinkedIn — loaded after user interaction only.
            Saves ~158 KiB of unused JS on initial load.
            They still fire correctly — just delayed until scroll/click/touch. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var loaded = false;
                function loadTrackingScripts() {
                  if (loaded) return;
                  loaded = true;

                  // Facebook Pixel
                  !function(f,b,e,v,n,t,s){
                    if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)
                  }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || ""}');
                  fbq('track', 'PageView');

                  // LinkedIn Insight
                  var liScript = document.createElement('script');
                  liScript.async = true;
                  liScript.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
                  document.head.appendChild(liScript);
                }

                // Fire on first user interaction
                var events = ['scroll', 'click', 'touchstart', 'keydown'];
                function once() {
                  loadTrackingScripts();
                  events.forEach(function(e) { window.removeEventListener(e, once); });
                }
                events.forEach(function(e) {
                  window.addEventListener(e, once, { passive: true });
                });

                // Fallback: load after 5 seconds even with no interaction
                setTimeout(loadTrackingScripts, 5000);
              })();
            `,
          }}
        />

      </body>
    </html>
  );
}
