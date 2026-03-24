
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Hero from "./components/homePageComponents/Hero";
import ListenPerform from "./components/homePageComponents/we-listen";
import CaseStudies from "./components/homePageComponents/case-studies";

// ================= SEO METADATA =================

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

// ================= DYNAMIC IMPORTS =================

// Below-fold components — code-split for JS performance,
// but pre-rendered in static HTML at build time for SEO.
// { loading: () => null } = no visible skeleton, identical visual
// behaviour to the old { ssr: false } but content IS in the HTML.
const About = dynamic(
  () => import("./components/homePageComponents/adrexiansabout"),
  { loading: () => null }
);

const Features = dynamic(
  () => import("./components/homePageComponents/Mme"),
  { loading: () => null }
);

const Flexibility = dynamic(
  () => import("./components/homePageComponents/platformExperience"),
  { loading: () => null }
);

const PlatformsMarquee = dynamic(
  () => import("./components/homePageComponents/platformsMarquee"),
  { loading: () => null }
);

const WhyUs = dynamic(
  () => import("./components/homePageComponents/Why-us"),
  { loading: () => null }
);

const Services = dynamic(
  () => import("./components/homePageComponents/services-section"),
  { loading: () => null }
);

// ================= PAGE COMPONENT =================

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">

      {/* LCP element — direct import, never lazy */}
      <Hero />

      {/* Below-fold — pre-rendered HTML, lazy JS */}
      <About />
      <Features />
      <Flexibility />
      <PlatformsMarquee />
      <WhyUs />

      {/* CaseStudies now includes the SUCCESS STORIES H2
          and section wrapper (case-header.tsx merged in) */}
      <CaseStudies />

      <Services />

      {/* Direct import — lightweight footer CTA */}
      <ListenPerform />

    </main>
  );
}