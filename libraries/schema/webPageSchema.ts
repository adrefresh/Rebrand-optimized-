import organizationSchema from "./organizationSchema";

/**
 * WebPage JSON-LD Schema generator — adrefresh.com
 *
 * Generates a per-page WebPage schema that links back to the Organization
 * already injected globally via layout.tsx.
 *
 * Only three values change per page:
 *   url         — full canonical URL including trailing slash
 *   title       — match the page's metadata title exactly
 *   description — match the page's metadata description exactly
 *
 * ── Usage in a static page ──────────────────────────────────────────────────
 *
 *   // /app/services/ad-operations/page.tsx
 *   import { generateWebPageSchema } from "@/libraries/schema/webPageSchema";
 *
 *   export default function AdOperationsPage() {
 *     const schema = generateWebPageSchema({
 *       url: "https://www.adrefresh.com/services/ad-operations/",
 *       title: "Advertising Operations Services | AdOps Management & Optimization",
 *       description: "End-to-end ad operations — campaign setup, trafficking, ...",
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
 * ── Usage in the dynamic case study template ────────────────────────────────
 *
 *   // /app/client-success/[slug]/page.tsx
 *   import { generateWebPageSchema } from "@/libraries/schema/webPageSchema";
 *   import caseStudies from "@/json-data/case-studies.json";
 *
 *   export default function CaseStudyPage({ params }: { params: { slug: string } }) {
 *     const study = caseStudies.find((s) => s.slug === params.slug);
 *     const schema = generateWebPageSchema({
 *       url: `https://www.adrefresh.com/client-success/${study.slug}/`,
 *       title: study.title,
 *       description: study.description,
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
 * Spec: https://schema.org/WebPage
 */

interface WebPageSchemaProps {
  url: string;
  title: string;
  description: string;
}

export function generateWebPageSchema({
  url,
  title,
  description,
}: WebPageSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: title,
    description,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "AdRefresh",
      url: "https://www.adrefresh.com/",
    },
    publisher: {
      "@type": "Organization",
      name: organizationSchema.name,
      url: organizationSchema.url,
      logo: organizationSchema.logo,
    },
  };
}