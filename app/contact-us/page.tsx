import type { Metadata } from "next";
// import ContactClient from "../components/contact-us-components/contact-maps";
import GlobalPresence from "../components/contact-us-components/Globalpresence";
import ContactHero from "../components/contact-us-components/contact-hero";
import ContactForm from "../components/contact-us-components/contact-form";
import PrecisionSection from "../components/contact-us-components/Precesion-section";

// ============================================
// SEO VARIABLES - UPDATE ONLY THESE VALUES
// ============================================
// Variable 1: Page Title (Used for regular SEO, OG, and Twitter)
const PAGE_TITLE = "Connect with AdRefresh | Scale Your Brand";

// Variable 2: Meta Description (Used for regular SEO, OG, and Twitter)
const PAGE_DESCRIPTION = "Partner with AdRefresh to scale faster, maximize ROI, and support your long-term growth and success.";

// Variable 3: Canonical URL
const SEO_CANONICAL_URL = "https://www.adrefresh.com/contact-us";

// Variable 4: Open Graph Image URL (Optional - only modify if you need a custom image)
const SEO_OG_IMAGE_URL = "https://www.adrefresh.com/og/contact.png";

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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: SEO_CANONICAL_URL,
    siteName: "AdRefresh",
    images: [
      {
        url: SEO_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Contact AdRefresh",
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
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="relative bg-[#fafafa] text-[#111]">
      {/* <ContactClient /> */}
      <ContactHero/>
      <PrecisionSection/>
      <GlobalPresence />
      <ContactForm/>
    </main>
  );
}