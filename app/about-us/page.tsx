
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
const SEO_TITLE = "About Us | AdRefresh - Performance-Driven Ad Operations";

// Variable 2: Meta Description (Used for both regular SEO, OG, and Twitter)
const SEO_DESCRIPTION = "Learn about AdRefresh, a performance-driven advertising operations and Digital Marketing partner built on experience, precision, and measurable growth.";

// Variable 3: Canonical URL
const SEO_CANONICAL_URL = "https://www.adrefresh.com/about-us";

// Variable 4: Site Name


// Variable 5: Open Graph Image URL (Optional - only modify if you have a custom image)
const SEO_OG_IMAGE_URL = "https://www.adrefresh.com/og/about.png";

// Variable 6: Robots Index (true/false)
const SEO_ROBOTS_INDEX = true;

// Variable 7: Robots Follow (true/false)
const SEO_ROBOTS_FOLLOW = true;

// ============================================
// METADATA GENERATION - DO NOT MODIFY BELOW
// ============================================

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,

  alternates: {
    canonical: SEO_CANONICAL_URL,
  },

  openGraph: {
    title: SEO_TITLE, // Reuses main title
    description: SEO_DESCRIPTION, // Reuses main description
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
    title: SEO_TITLE, // Reuses main title
    description: SEO_DESCRIPTION, // Reuses main description
    images: [SEO_OG_IMAGE_URL],
  },

  robots: {
    index: SEO_ROBOTS_INDEX,
    follow: SEO_ROBOTS_FOLLOW,
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
