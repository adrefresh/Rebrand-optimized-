import type { Metadata } from "next";
import AboutHero from "../components/about-us-page-components/abouthero";
import AboutAdRefresh from "../components/about-us-page-components/About-Adrefresh";
import AboutVisionMission from "../components/about-us-page-components/mission-vision";
import VisionMission from "../components/about-us-page-components/vision";
import ListenPerform from "../components/homePageComponents/we-listen";
 // adjust path if needed

export const metadata: Metadata = {
  title: "About Us | AdRefresh – Performance-Driven Ad Operations",
  description:
    "Learn about AdRefresh, a performance-driven ad operations and programmatic advertising partner built on experience, precision, and measurable growth.",

  alternates: {
    canonical: "https://yourdomain.com/about-us",
  },

  openGraph: {
    title: "About AdRefresh – Built on Experience. Driven by Performance.",
    description:
      "Discover how AdRefresh helps brands scale through expert ad operations, programmatic strategy, and performance-focused execution.",
    url: "https://yourdomain.com/about-us",
    siteName: "AdRefresh",
    images: [
      {
        url: "https://yourdomain.com/og/about.png",
        width: 1200,
        height: 630,
        alt: "About AdRefresh",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About AdRefresh – Performance Marketing Experts",
    description:
      "Built on experience. Driven by performance. Learn more about the AdRefresh team and our approach.",
    images: ["https://yourdomain.com/og/about.png"],
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
<ListenPerform/>
      {/* Add more sections below when ready */}
      {/* <WhyUsSection /> */}
      {/* <TeamSection /> */}
      {/* <ValuesSection /> */}
    </main>
  );
}
