import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Hero from "./components/homePageComponents/Hero";
import ListenPerform from "./components/homePageComponents/we-listen";
// import CaseStudies from "./components/homePageComponents/case-studies";
import CaseHeader from "./components/homePageComponents/case-header";

// ============================================
// SEO VARIABLES - UPDATE ONLY THESE VALUES
// ============================================

// Variable 1: Default Title
const PAGE_TITLE = "AdRefresh | Digital Marketing & Advertising Operations";

// Variable 2: Title Template
const SEO_TITLE_TEMPLATE = "%s | AdRefresh";

// Variable 3: Meta Description (Used for regular SEO, OG, and Twitter)
const PAGE_DESCRIPTION = "Scale your brand's digital presence with our digital marketing and advertising operations services across all channels.";
// Variable 4: Canonical URL
const SEO_CANONICAL_URL = "https://www.adrefresh.com/";

// Variable 5: Open Graph Image URL
const SEO_OG_IMAGE_URL = "https://adrefresh.com/images/og/home-og-image.png";

// Variable 6: Twitter Creator
const SEO_TWITTER_CREATOR = "@adrefresh";

// Variable 7: Keywords Array (update as needed)
const SEO_KEYWORDS = [
  "AdRefresh",
  "Digital Advertising",
  "Ad Operations",
  "Media Buying",
  "Ad Tech",
  "Programmatic Advertising",
  "Remote Media Teams",
  "Advertising Operations",
  "Performance Marketing",
];

// ============================================
// SEO METADATA GENERATION - DO NOT MODIFY BELOW
// ============================================

export const metadata: Metadata = {
  title: {
    default: PAGE_TITLE,
    template: SEO_TITLE_TEMPLATE,
  },

  description: PAGE_DESCRIPTION,

  keywords: SEO_KEYWORDS,

  authors: [{ name: "AdRefresh" }],
  creator: "AdRefresh",
  publisher: "AdRefresh",
  category: "Advertising & Marketing",

  alternates: {
    canonical: SEO_CANONICAL_URL,
  },

  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: SEO_CANONICAL_URL,
    siteName: "AdRefresh",
    images: [
      {
        url: SEO_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: PAGE_TITLE,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [SEO_OG_IMAGE_URL],
    creator: SEO_TWITTER_CREATOR,
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
      <CaseHeader/>

      <Services />

      {/* Direct import — lightweight footer CTA. */}
      <ListenPerform />

    </main>
  );
}
