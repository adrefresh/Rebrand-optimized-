
import type { Metadata } from "next";
import AboutHero from "../components/about-us-page-components/abouthero";
import AboutAdRefresh from "../components/about-us-page-components/About-Adrefresh";
import AboutVisionMission from "../components/about-us-page-components/mission-vision";
import VisionMission from "../components/about-us-page-components/vision";
import ListenPerform from "../components/homePageComponents/we-listen";
import MissionVisionSection from "../components/about-us-page-components/CardsMission";

// ============================================
// SEO VARIABLES - UPDATE ONLY THESE VALUES
// ============================================

// Variable 1: Page Title (Used for both regular SEO, OG, and Twitter)
const PAGE_TITLE = "About Your Partner in Digital Growth | AdRefresh";

// Variable 2: Meta Description (Used for both regular SEO, OG, and Twitter)
const PAGE_DESCRIPTION = "We focus on results-driven strategies and conversions, powered by a passionate team of experienced digital experts.";

// Variable 3: Canonical URL
const SEO_CANONICAL_URL = "https://www.adrefresh.com/about-us";

// Variable 4: Site Name


// Variable 5: Open Graph Image URL (Optional - only modify if you have a custom image)
const SEO_OG_IMAGE_URL = "https://www.adrefresh.com/og/about.png";

// ============================================
// METADATA GENERATION - DO NOT MODIFY BELOW
// ============================================

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  alternates: {
    canonical: SEO_CANONICAL_URL,
  },

  openGraph: {
    title: PAGE_TITLE, // Reuses main title
    description: PAGE_DESCRIPTION, // Reuses main description
    url: SEO_CANONICAL_URL,
    siteName: "Adrefresh",
    images: [
      {
        url: SEO_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `About Adrefresh`,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE, // Reuses main title
    description: PAGE_DESCRIPTION, // Reuses main description
    images: [SEO_OG_IMAGE_URL],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutUsPage() {
  return (
    <main className="relative">
      {/* HERO */}
      <AboutHero/>
      <AboutAdRefresh/>
      <AboutVisionMission/>
      <VisionMission/>
      <MissionVisionSection/>
      <ListenPerform/>
      {/* Add more sections below when ready */}
      {/* <WhyUsSection /> */}
      {/* <TeamSection /> */}
      {/* <ValuesSection /> */}
    </main>
  );
}
