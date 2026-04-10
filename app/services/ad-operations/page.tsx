import { generateWebPageSchema } from "@/libraries/schema/webPageSchema";
import { generateServiceSchema } from "@/libraries/schema/serviceSchema";
import AdOpsPageClient from "./AdopsPageClient";

// ============================================
// SEO VARIABLES - UPDATE ONLY THESE VALUES
// ============================================

// Variable 1: Page Title (Used for regular SEO, OG, and Twitter)
const PAGE_TITLE = "Advertising Operations & Campaign Management";

// Variable 2: Page Description (Used for regular SEO, OG, and Twitter)
const PAGE_DESCRIPTION = "End-to-end AdOps services including trafficking and platform execution across DSP/SSP to scale your business";

// Variable 3: Page URL (Canonical)
const SEO_PAGE_URL = "https://www.adrefresh.com/services/ad-operations";

// Variable 4: Open Graph Image URL
const SEO_OG_IMAGE_URL = "https://adrefresh.com/images/og/adops-poster.png";

// Variable 5: Service Name (for Schema)
const SEO_SERVICE_NAME = "Advertising Operations";

// Variable 6: Service Type (for Schema)
const SEO_SERVICE_TYPE = "Ad Operations Services";

// Variable 7: Service Sub-Services (Array - update as needed)
const SEO_SERVICE_SUB_SERVICES = [
  "Campaign Setup & Management",
  "Ad Trafficking & Tag Implementation",
  "Pixel, Tracking & Measurement Setup",
  "Campaign Monitoring & Pacing",
  "Reporting, Dashboards & Insights",
  "Ad Tech & Platform Administration"
];

// Variable 8: Keywords Array (update as needed)
const SEO_KEYWORDS = [
  "Advertising Operations",
  "AdOps Services",
  "Ad Operations Management",
  "Digital Advertising Operations",
  "Campaign Optimization Services",
  "Programmatic Ad Operations",
  "Media Operations",
  "Ad Tech Services",
];

// ============================================
// METADATA GENERATION - DO NOT MODIFY BELOW
// ============================================

export function generateMetadata() {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: SEO_KEYWORDS,
    alternates: {
      canonical: SEO_PAGE_URL,
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: SEO_PAGE_URL,
      siteName: "AdRefresh",
      images: [
        {
          url: SEO_OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: "Advertisement Operations",
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
  };
}

export default function Page() {
  const webPageSchema = generateWebPageSchema({
    url: SEO_PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  });
  
  const serviceSchema = generateServiceSchema({
    name: SEO_SERVICE_NAME,
    url: SEO_PAGE_URL,
    description: PAGE_DESCRIPTION,
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
      <AdOpsPageClient />
    </>
  );
}