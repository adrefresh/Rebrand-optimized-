
// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import CookieBanner from "./components/cookiebanner/cookieBanner";
// import GoogleTagManagerContainer from "./components/cookiebanner/GoogleTagManager";

// import { Manrope } from "next/font/google";
// export const metadata: Metadata = {
//   title: "AdRefresh - Digital Marketing and AdOps",
//   description: "AI-Enhanced Digital Marketing and Advertising Operations",
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: "/site.webmanifest",
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
//        className={manrope.className}
//       style={{
//         ["--base-path" as any]: basePath,
//       }}
//     >
//       <head>
//         <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />
//       </head>
//       <body className="layout-root">
//         {/* Cookie Consent Banner */}
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

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AdRefresh - Digital Marketing and AdOps",
  description: "AI-Enhanced Digital Marketing and Advertising Operations",
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
        <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />
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