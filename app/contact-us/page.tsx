

// import type { Metadata } from "next";
// import ContactClient from "../components/contact-us-components/contact-maps";
// import GlobalPresence from "../components/contact-us-components/Globalpresence";
// import ContactHero from "../components/contact-us-components/contact-hero";
// import ContactForm from "../components/contact-us-components/contact-form";
// import PrecisionSection from "../components/contact-us-components/Precesion-section";

// export const metadata: Metadata = {
//   title: "Contact AdRefresh | Get in Touch With Our Global Team",
//   description:
//     "Contact AdRefresh to discuss programmatic advertising, ad operations, and digital marketing solutions.",
//   alternates: {
//     canonical: "https://www.adrefresh.com/contact-us",
//   },
// };

// export default function ContactPage() {
//   return (
//     <main className="relative bg-[#fafafa] text-[#111]">
//       {/* <ContactClient /> */}
//       <ContactHero/>
//       <PrecisionSection/>
//       <GlobalPresence />
//       <ContactForm/>
//     </main>
//   );
// }
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  /* =========================
     PRIMARY SEO
  ========================= */
  title: {
    default: "Contact AdRefresh | Global Programmatic Advertising & Ad Ops Experts",
    template: "%s | AdRefresh",
  },

  description:
    "Get in touch with AdRefresh for programmatic advertising, ad operations, and digital marketing solutions. Speak with our global experts to scale performance efficiently.",

  keywords: [
    "Contact AdRefresh",
    "Programmatic Advertising Company",
    "Ad Operations Services",
    "AdTech Consulting",
    "Digital Advertising Agency",
    "Global Ad Operations Team",
    "Programmatic Marketing Experts",
    "Advertising Operations Support",
  ],

  authors: [{ name: "AdRefresh" }],
  creator: "AdRefresh",
  publisher: "AdRefresh",
  category: "Advertising & Marketing",

  /* =========================
     CANONICAL & LANGUAGE
  ========================= */
  alternates: {
    canonical: "https://www.adrefresh.com/contact-us",
    languages: {
      "en-US": "https://www.adrefresh.com/contact-us",
    },
  },

  /* =========================
     OPEN GRAPH (LinkedIn, WhatsApp, Facebook)
  ========================= */
  openGraph: {
    title: "Contact AdRefresh | Speak With Our Global Ad Operations Team",
    description:
      "Have questions about programmatic advertising or ad operations? Contact AdRefresh and connect with our global team for scalable, performance-driven solutions.",
    url: "https://www.adrefresh.com/contact-us",
    siteName: "AdRefresh",
    images: [
      {
        url: "https://www.adrefresh.com/og/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact AdRefresh – Global Ad Operations Team",
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
    title: "Contact AdRefresh | Programmatic & Ad Ops Experts",
    description:
      "Connect with AdRefresh to discuss programmatic advertising, ad operations, and performance marketing solutions.",
    images: ["https://www.adrefresh.com/og/contact.png"],
    creator: "@adrefresh", // optional
  },

  /* =========================
     ROBOTS & INDEXING
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
     BRAND / APP META
  ========================= */
  applicationName: "AdRefresh",
  referrer: "origin-when-cross-origin",
  themeColor: "#000000",

  /* =========================
     ICONS
  ========================= */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
