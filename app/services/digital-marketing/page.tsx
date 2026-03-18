import { generateWebPageSchema } from "@/libraries/schema/webPageSchema";
import { generateServiceSchema } from "@/libraries/schema/serviceSchema";
import DigitalMarketingPageClient from "./DigitalMarketingPageClient";

const PAGE_TITLE = "Digital Marketing Services | Performance Marketing & Growth Solutions";
const PAGE_DESCRIPTION =
  "Professional Digital Marketing services by AdRefresh. We drive growth through SEO, PPC, social media marketing, content strategy, and performance-driven campaigns.";
const PAGE_URL = "https://www.adrefresh.com/services/digital-marketing";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  
  keywords: [
    "Digital Marketing",
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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["https://adrefresh.com/images/og/DM-poster.png"],
  },

  alternates: {
    canonical: PAGE_URL,
  },
};

export default function Page() {
  const webPageSchema = generateWebPageSchema({
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  });
  
  const serviceSchema = generateServiceSchema({
    name: "Digital Marketing",
    url: PAGE_URL,
    description: PAGE_DESCRIPTION,
    serviceType: "Digital Marketing Services",
    subServices: [
      "Paid Advertising",
      "Social Media Marketing",
      "Search Engine Optimization",
      "Creative & Branding",
      "Website Development",
      "Analytics & Reporting"
    ],
  });
  
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    <DigitalMarketingPageClient />
    </>
  );
}
