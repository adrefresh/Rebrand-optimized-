
import AdOpsPageClient from "./AdopsPageClient";

export const metadata = {
  title: "Advertising Operations Services | AdOps Management & Optimization",
  description:
    "Professional Advertising Operations (AdOps) services to manage, optimize, and scale your digital ad campaigns. We deliver performance-driven ad operations with transparency and flexibility.",

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
    canonical: "https://adrefresh.com/services/ad-operations",
  },
  openGraph: {
    title: "AdRefresh –Ad Operations",
    description:
      " Advertising operations services built to scale performance, efficiency, and measurable growth.",
    url: "https://www.adrefresh.com/",
    siteName: "AdRefresh",
    images: [
      {
        url: `https://alpha.adrefresh.com/images/og/adops-poster.png`,
        width: 1200,
        height: 630,
        alt: "Advertisement Operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <AdOpsPageClient />;
}
