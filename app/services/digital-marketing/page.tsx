
import DigitalMarketingPageClient from "./DigitalMarketingPageClient";

export const metadata = {
  title: "Digital Marketing Services | Performance Marketing & Growth Solutions",
  description:
    "Professional Digital Marketing services by AdRefresh. We drive growth through SEO, PPC, social media marketing, content strategy, and performance-driven campaigns.",

  keywords: [
    "Digital Marketing Services",
    "Performance Marketing",
    "SEO Services",
    "PPC Marketing",
    "Social Media Marketing",
    "Online Marketing Agency",
    "Growth Marketing",
    "Digital Advertising Services",
  ],

  openGraph: {
    title: "Digital Marketing Services | Performance Marketing & Growth Solutions",
    description:
      "Scale your business with AdRefresh Digital Marketing services. SEO, PPC, social media, and data-driven growth strategies.",
    url: "https://adrefresh.com/services/digital-marketing",
    siteName: "AdRefresh",
    images: [
      {
        url: "https://adrefresh.com/images/og/DM-poster.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services by AdRefresh",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | Performance Marketing & Growth Solutions",
    description:
      "End-to-end Digital Marketing services including SEO, PPC, social media, and growth marketing.",
    images: ["https://adrefresh.com/images/seo/digital-marketing-og.jpg"],
  },

  alternates: {
    canonical: "https://adrefresh.com/services/digital-marketing",
  },
};

export default function Page() {
  return <DigitalMarketingPageClient />;
}
