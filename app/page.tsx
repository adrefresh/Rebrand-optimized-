
// import type { Metadata } from "next";
// import HomeClient from "./HomeClient";

// /* =========================
//    SEO METADATA
// ========================= */
// export const metadata: Metadata = {
//   title: {
//     default: "AdRefresh – Digital Marketing & Ad Operations",
//     template: "%s | AdRefresh",
//   },
//   description:
//     "AdRefresh delivers Digital Marketing and advertising operations, and scalable remote media teams to help brands grow efficiently with data-driven performance.",
//   keywords: [
//     "AdRefresh",
//     "Digital Advertising",
//     "Ad Operations",
//     "Media Buying",
//     "Ad Tech",
//     "Programmatic Advertising",
//     "Remote Media Teams",
//     "Advertising Operations",
//     "Performance Marketing",
//   ],
//   authors: [{ name: "AdRefresh" }],
//   creator: "AdRefresh",
//   publisher: "AdRefresh",
//   category: "Advertising & Marketing",
//   alternates: {
//     canonical: "https://www.adrefresh.com/",
//   },
//   openGraph: {
//     title: "AdRefresh – Digital Marketing & Ad Operations",
//     description:
//       "Digital Marketing and advertising operations services built to scale performance, efficiency, and measurable growth.",
//     url: "https://www.adrefresh.com/",
//     siteName: "AdRefresh",
//     images: [
//       {
//         url: "https://adrefresh.com/images/og/home-og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "AdRefresh – Programmatic Advertising & Advertisement Operations",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "AdRefresh – Programmatic Advertising & Ad Operations",
//     description:
//       "Scale advertising performance with programmatic advertising and expert ad operations from AdRefresh.",
//     images: ["https://adrefresh.com/images/og/home-og-image.png"],
//     creator: "@adrefresh",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },
//   applicationName: "AdRefresh",
//   referrer: "origin-when-cross-origin",
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },
// };

// /* =========================
//    PAGE
// ========================= */
// export default function HomePage() {
//   return <HomeClient />;
// }
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
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

  alternates: {
    canonical: "https://www.adrefresh.com/",
  },

  openGraph: {
    title: "AdRefresh – Digital Marketing & Ad Operations",
    description:
      "Digital Marketing and advertising operations services built to scale performance, efficiency, and measurable growth.",
    url: "https://www.adrefresh.com/",
    siteName: "AdRefresh",

    images: [
      {
        url: "https://adrefresh.com/images/og/home-og-image.png",
        width: 1200,
        height: 630,
        alt: "AdRefresh – Programmatic Advertising & Advertisement Operations",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AdRefresh – Programmatic Advertising & Ad Operations",
    description:
      "Scale advertising performance with programmatic advertising and expert ad operations from AdRefresh.",
    images: ["https://adrefresh.com/images/og/home-og-image.png"],
    creator: "@adrefresh",
  },

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

  applicationName: "AdRefresh",

  referrer: "origin-when-cross-origin",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/* =========================
   PAGE
========================= */

export default function HomePage() {
  return <HomeClient />;
}