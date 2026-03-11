

// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import CookieBanner from "./components/cookiebanner/cookieBanner";
// import GoogleTagManagerContainer from "./components/cookiebanner/GoogleTagManager";
// import { Manrope } from "next/font/google";
// import organizationSchema from "@/libraries/schema/organizationSchema";

// const manrope = Manrope({
//   subsets: ["latin"],
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "AdRefresh - Digital Marketing and AdOps",
//   description: "AI-Enhanced Digital Marketing and Advertising Operations",
// };

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
//       style={{
//         ["--base-path" as any]: basePath,
//       }}
//     >
//       <head>
//         <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(organizationSchema),
//           }}
//         />
//       </head>

//       <body className="layout-root">
//         <CookieBanner />
//         <Header />
//         {children}
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

        {/* ORGANIZATION STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

      </head>
<body className="min-h-screen flex flex-col">
  <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />

  <CookieBanner />

  <Header />

  <main className="flex-1">
    {children}
  </main>

  <Footer />
</body>
    </html>
  );
}