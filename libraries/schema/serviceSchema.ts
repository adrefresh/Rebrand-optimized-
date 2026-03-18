import organizationSchema from "./organizationSchema";

/**
 * Service JSON-LD Schema generator — adrefresh.com
 *
 * Generates a per-page Service schema that links back to the Organization
 * already injected globally via layout.tsx.
 *
 * Required per page — four values that always change:
 *   name        — service name, e.g. "Advertising Operations"
 *   url         — full canonical URL including trailing slash
 *   description — match the page's metadata description exactly
 *   serviceType — specific category label, e.g. "Ad Operations Services"
 *
 * Optional per page — only include when relevant:
 *   subServices — list of individual offerings under this service.
 *                 Renders as a hasOfferCatalog block, which enables Google
 *                 to understand the sub-service structure without needing
 *                 separate pages for each one.
 *
 * ── Usage — /app/services/ad-operations/page.tsx ────────────────────────────
 *
 *   import { generateServiceSchema } from "@/libraries/schema/serviceSchema";
 *
 *   export default function AdOperationsPage() {
 *     const schema = generateServiceSchema({
 *       name: "Advertising Operations",
 *       url: "https://www.adrefresh.com/services/ad-operations/",
 *       description: "End-to-end advertising operations — campaign setup, ad trafficking, ...",
 *       serviceType: "Ad Operations Services",
 *       subServices: [
 *         "Campaign Setup & Management",
 *         "Ad Trafficking & Tag Implementation",
 *         "Pixel, Tracking & Measurement Setup",
 *         "Campaign Monitoring & Pacing",
 *         "Reporting, Dashboards & Insights",
 *         "Ad Tech & Platform Administration",
 *       ],
 *     });
 *     return (
 *       <>
 *         <script
 *           type="application/ld+json"
 *           dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 *         />
 *         ...rest of page
 *       </>
 *     );
 *   }
 *
 * ── Usage — /app/services/digital-marketing/page.tsx ────────────────────────
 *
 *   import { generateServiceSchema } from "@/libraries/schema/serviceSchema";
 *
 *   export default function DigitalMarketingPage() {
 *     const schema = generateServiceSchema({
 *       name: "Digital Marketing",
 *       url: "https://www.adrefresh.com/services/digital-marketing/",
 *       description: "Data-driven digital marketing — paid advertising, SEO, social ...",
 *       serviceType: "Digital Marketing Services",
 *       subServices: [
 *         "Paid Advertising",
 *         "Social Media Marketing",
 *         "Search Engine Optimization",
 *         "Creatives & Branding",
 *         "Website Development",
 *         "Analytics & Reporting",
 *       ],
 *     });
 *     return (
 *       <>
 *         <script
 *           type="application/ld+json"
 *           dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 *         />
 *         ...rest of page
 *       </>
 *     );
 *   }
 *
 * ── Adding a future service page ────────────────────────────────────────────
 *
 *   Same pattern — call generateServiceSchema() with the new page's values.
 *   No changes to this file needed. The provider and areaServed are always
 *   pulled from organizationSchema automatically.
 *
 * Spec: https://schema.org/Service
 */

interface ServiceSchemaProps {
  name: string;
  url: string;
  description: string;
  serviceType: string;
  subServices?: string[];
}

export function generateServiceSchema({
  name,
  url,
  description,
  serviceType,
  subServices,
}: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",

    // ── Core service identity ────────────────────────────────────────────────
    name,
    url,
    description,
    serviceType,

    // ── Provider — pulled from organizationSchema, always in sync ────────────
    provider: {
      "@type": "Organization",
      name: organizationSchema.name,
      url: organizationSchema.url,
      logo: organizationSchema.logo,
    },

    // ── Reach — global clientele regardless of office locations ──────────────
    areaServed: "Worldwide",

    // ── Sub-services — only included when subServices array is provided ───────
    // Renders as a named offer catalog, letting Google understand the full
    // service structure without requiring individual pages per sub-service.
    ...(subServices && subServices.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${name} Services`,
            itemListElement: subServices.map((subService, index) => ({
              "@type": "Offer",
              position: index + 1,
              itemOffered: {
                "@type": "Service",
                name: subService,
                provider: {
                  "@type": "Organization",
                  name: organizationSchema.name,
                },
              },
            })),
          },
        }
      : {}),
  };
}