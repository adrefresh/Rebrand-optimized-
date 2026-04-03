import { generateWebPageSchema } from "@/libraries/schema/webPageSchema";
import { generateServiceSchema } from "@/libraries/schema/serviceSchema";
import DigitalMarketingPageClient from "./DigitalMarketingPageClient";

// ============================================
// SEO VARIABLES - UPDATE ONLY THESE VALUES
// ============================================

// Variable 1: Page Title (Used for regular SEO, OG, and Twitter)
const SEO_PAGE_TITLE = "Digital Marketing Services | Performance Marketing & Growth Solutions";

// Variable 2: Page Description (Used for regular SEO, OG, and Twitter)
const SEO_PAGE_DESCRIPTION = "Professional Digital Marketing services by AdRefresh. We drive growth through SEO, PPC, social media marketing, content strategy, and performance-driven campaigns.";

// Variable 3: Page URL (Canonical)
const SEO_PAGE_URL = "https://www.adrefresh.com/services/digital-marketing";

// Variable 4: Open Graph Image URL
const SEO_OG_IMAGE_URL = "https://adrefresh.com/images/og/DM-poster.png";

// Variable 5: Service Name (for Schema)
const SEO_SERVICE_NAME = "Digital Marketing";

// Variable 6: Service Type (for Schema)
const SEO_SERVICE_TYPE = "Digital Marketing Services";

// Variable 7: Service Sub-Services (Array - update as needed)
const SEO_SERVICE_SUB_SERVICES = [
  "Paid Advertising",
  "Social Media Marketing",
  "Search Engine Optimization",
  "Creative & Branding",
  "Website Development",
  "Analytics & Reporting"
];

// Variable 8: Keywords Array (update as needed)
const SEO_KEYWORDS = [
  "Digital Marketing",
  "Digital Marketing Services",
  "Performance Marketing",
  "SEO Services",
  "PPC Marketing",
  "Social Media Marketing",
  "Online Marketing Agency",
  "Growth Marketing",
  "Digital Advertising Services",
];

// ============================================
// METADATA GENERATION - DO NOT MODIFY BELOW
// ============================================

export function generateMetadata() {
  return {
    title: SEO_PAGE_TITLE,
    description: SEO_PAGE_DESCRIPTION,
    keywords: SEO_KEYWORDS,
    alternates: {
      canonical: SEO_PAGE_URL,
    },
    openGraph: {
      title: SEO_PAGE_TITLE,
      description: SEO_PAGE_DESCRIPTION,
      url: SEO_PAGE_URL,
      siteName: "AdRefresh",
      images: [
        {
          url: SEO_OG_IMAGE_URL,
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
      title: SEO_PAGE_TITLE,
      description: SEO_PAGE_DESCRIPTION,
      images: [SEO_OG_IMAGE_URL],
    },
  };
}

export default function Page() {
  const webPageSchema = generateWebPageSchema({
    url: SEO_PAGE_URL,
    title: SEO_PAGE_TITLE,
    description: SEO_PAGE_DESCRIPTION,
  });
  
  const serviceSchema = generateServiceSchema({
    name: SEO_SERVICE_NAME,
    url: SEO_PAGE_URL,
    description: SEO_PAGE_DESCRIPTION,
    serviceType: SEO_SERVICE_TYPE,
    subServices: SEO_SERVICE_SUB_SERVICES,
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