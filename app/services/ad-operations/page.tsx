
import { generateWebPageSchema } from "@/libraries/schema/webPageSchema";
import { generateServiceSchema } from "@/libraries/schema/serviceSchema";
import AdOpsPageClient from "./AdopsPageClient";

const PAGE_TITLE = "Advertising Operations Services | AdOps Management & Optimization";
const PAGE_DESCRIPTION = "Professional Advertising Operations (AdOps) services to manage, optimize, and scale your digital ad campaigns. We deliver performance-driven ad operations with transparency and flexibility.";
const PAGE_URL = "https://www.adrefresh.com/services/ad-operations";

export function generateMetadata() {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      "Advertising Operations",
      "AdOps Services",
      "Ad Operations Management",
      "Digital Advertising Operations",
      "Campaign Optimization Services",
      "Programmatic Ad Operations",
      "Media Operations",
      "Ad Tech Services",
    ],
    alternates: {
      canonical: PAGE_URL,
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      siteName: "AdRefresh",
      images: [
        {
          url: "https://adrefresh.com/images/og/adops-poster.png",
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
      images: ["https://adrefresh.com/images/og/adops-poster.png"],
    },
  };
}

export default function Page() {
  const webPageSchema = generateWebPageSchema({
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  });
  
  const serviceSchema = generateServiceSchema({
    name: "Advertising Operations",
    url: PAGE_URL,
    description: PAGE_DESCRIPTION,
    serviceType: "Ad Operations Services",
    subServices: [
      "Campaign Setup & Management",
      "Ad Trafficking & Tag Implementation",
      "Pixel, Tracking & Measurement Setup",
      "Campaign Monitoring & Pacing",
      "Reporting, Dashboards & Insights",
      "Ad Tech & Platform Administration"
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
      <AdOpsPageClient />
    </>
  );
}