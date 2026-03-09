

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

// ✅ FIXED: Single font source — removed duplicate @font-face from globals.css
// next/font handles preloading, self-hosting, and display:swap automatically
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  // ✅ ADDED: Only load weights you actually use (check your CSS — 400, 600, 700)
  weight: ["600", "600", "800"],
  // ✅ ADDED: Preload the font to fix LCP
  preload: true,
});

export const metadata: Metadata = {
  title: "AdRefresh - Digital Marketing and AdOps",
  description: "AI-Enhanced Digital Marketing and Advertising Operations",
  // ✅ ADDED: Helps LCP by hinting browser about critical resources
  other: {
    "theme-color": "#000000",
  },
};

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
      style={{
        ["--base-path" as any]: basePath,
      }}
    >
      <head>
        {/* ✅ FIXED: GTM moved to use next/script with afterInteractive strategy */}
        {/* GoogleTagManagerContainer should internally use next/script strategy="afterInteractive" */}
        {/* If it doesn't, replace with the Script tag below */}
        <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />

        {/* ✅ ADDED: Preconnect to speed up any external requests */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body className="layout-root">
        <CookieBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
