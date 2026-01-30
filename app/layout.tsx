
// import type { Metadata } from "next";
// import "./globals.css";
// import Script from "next/script";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// // import CookieBanner from "./components/cookiebanner/cookiebanner";


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
//       style={{
//         ["--base-path" as any]: basePath,
//       }}
//     >
//       <head>
//         {/* Google Tag Manager */}
//         <Script
//           id="gtm-script"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','GTM-MMMX5TGB');
//             `,
//           }}
          
//         />
//       </head>
//       <body className="layout-root">
//         {/* <CookieBanner/> */}
//         {/* GTM noscript */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-MMMX5TGB"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>
//     <Header/>
//         {children}
//       <Footer/>
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


export const metadata: Metadata = {
  title: "AdRefresh - Digital Marketing and AdOps",
  description: "AI-Enhanced Digital Marketing and Advertising Operations",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
      style={{
        ["--base-path" as any]: basePath,
      }}
    >
      <head>
        <GoogleTagManagerContainer gtmId="GTM-MMMX5TGB" />
      </head>
      <body className="layout-root">
        {/* Cookie Consent Banner */}
        <CookieBanner />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
