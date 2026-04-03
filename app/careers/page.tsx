import type { Metadata } from "next";
import CareersHero from "../components/careers-components/careershero";
import PathSection from "../components/careers-components/Pathsection";
import CareersClient from "../components/careers-components/jobs";

// ============================================
// SEO VARIABLES - UPDATE ONLY THESE VALUES
// ============================================

// Variable 1: Page Title (Used for regular SEO, OG, and Twitter)
const SEO_TITLE = "Careers at AdRefresh | Join Our Digital Marketing & Ad Ops Team";

// Variable 2: Meta Description (Used for regular SEO, OG, and Twitter)
const SEO_DESCRIPTION = "Explore exciting career opportunities at AdRefresh. Join our digital marketing, ad operations, and development teams in Hyderabad.";

// Variable 3: Canonical URL
const SEO_CANONICAL_URL = "https://www.adrefresh.com/careers";

// Variable 4: Open Graph Image URL (Optional - only modify if you need a custom image)
const SEO_OG_IMAGE_URL = "https://www.adrefresh.com/og/careers.png";

// Variable 5: Robots Index (true/false)
const SEO_ROBOTS_INDEX = true;

// Variable 6: Robots Follow (true/false)
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
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: SEO_CANONICAL_URL,
    siteName: "AdRefresh", // Hardcoded - no variable
    images: [
      {
        url: SEO_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Careers at AdRefresh", // Hardcoded - no variable
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [SEO_OG_IMAGE_URL],
  },

  robots: {
    index: SEO_ROBOTS_INDEX,
    follow: SEO_ROBOTS_FOLLOW,
  },
};

export default function CareersPage() {
  return (
    <main className="bg-[#fafafa] text-[#111] careers-manrope">
      <CareersHero />
      <PathSection />
      <CareersClient />
    </main>
  );
}

