// const organizationSchema = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   name: "AdRefresh",
//   url: "https://www.adrefresh.com/",
//   logo: "https://www.adrefresh.com/images/HeaderImages/second.svg",
//   description:
//     "AdRefresh is a performance marketing and paid media agency specializing in Google Ads, Meta Ads, paid search, and growth strategy.",
//   foundingDate: "2013",
//   sameAs: [
//     "https://www.linkedin.com/company/adrefreshmedia/",
//     "https://www.facebook.com/adrefreshmedia",
//     "https://x.com/AdRefresh",
//     "https://www.instagram.com/adrefreshmedia",
//   ],
//   contactPoint: {
//     "@type": "ContactPoint",
//     contactType: "sales",
//     email: "contact@adrefresh.com",
//     areaServed: "Global",
//     availableLanguage: "English",
//   },
// };

// export default organizationSchema;




// **********************************

/**
 * Organization JSON-LD Schema — adrefresh.com
 *
 * Injected globally in app/layout.tsx via a <script type="application/ld+json"> tag.
 * Appears on every page automatically — no per-page configuration needed.
 *
 * Changes from previous version:
 *  1. logo       — changed from plain string to ImageObject (required for Knowledge
 *                  Panel logo eligibility) and from .svg to .png (Google's structured
 *                  data guidelines do not support SVG for Organization logos)
 *  2. description — updated to accurately reflect the full AdRefresh service offering
 *                  (AdOps + digital marketing, not just Google/Meta Ads)
 *  3. contactPoint — contactType changed from "sales" to "customer support"
 *                  — telephone added
 *                  — converted to array (supports multiple contact points in future)
 *  4. address    — added all four office locations
 *  5. areaServed — explicit Country entities (stronger than plain "Global" string)
 *  6. email      — added at top level
 *  7. telephone  — added at top level
 *  8. knowsAbout — added for topical authority signals
 *
 * TODO:
 *  — Replace logo URL with your stable .png path.
 *    Google requirements: min 112×112px, PNG/WebP only, no SVG, publicly crawlable.
 *  — Uncomment hasCredential once you have public certificate URLs.
 *
 * Validate at: https://search.google.com/test/rich-results
 * Spec: https://schema.org/Organization
 */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  // ── Core identity ──────────────────────────────────────────────────────────
  name: "AdRefresh",
  legalName: "AdRefresh",
  url: "https://www.adrefresh.com/",
  foundingDate: "2013",

  // ── Logo ───────────────────────────────────────────────────────────────────
  // Must be ImageObject (not a plain string) for Knowledge Panel eligibility.
  // Must be PNG or WebP — Google does NOT index SVG logos in structured data.
  // TODO: confirm the correct stable .png logo path and update below
  logo: {
    "@type": "ImageObject",
    url: "https://www.adrefresh.com/images/HeaderImages/second.png",
    width: 200,
    height: 60,
  },

  // ── Description ────────────────────────────────────────────────────────────
  description:
    "AdRefresh is a next-generation digital ad performance management partner, " +
    "delivering advertising operations and digital marketing services for advertisers, " +
    "publishers, agencies, and networks. Powered by AI-driven workflows and multi-shift " +
    "teams, we provide end-to-end ad trafficking, programmatic campaign management, " +
    "performance marketing, and SEO across India, USA, Canada, and Australia.",

  // ── Contact ────────────────────────────────────────────────────────────────
  email: "contact@adrefresh.com",
  // telephone: "+91-93923-20142",
  contactPoint: [
    {
      "@type": "ContactPoint",
      // telephone: "+91-93923-20142",
      email: "contact@adrefresh.com",
      contactType: "sales",
      areaServed: ["Worldwide"],
      availableLanguage: "English",
    },
  ],

  // ── Office locations ───────────────────────────────────────────────────────
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "1102D, Manjeera Trinity Corporate, Kukatpally",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500072",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "PO Box 142",
      addressLocality: "Harvard",
      addressRegion: "MA",
      postalCode: "01451",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "300 Alton Towers Circle",
      addressLocality: "Scarborough",
      addressRegion: "ON",
      postalCode: "M1V 4C7",
      addressCountry: "CA",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "1 Daly Gld",
      addressLocality: "Quakers Hill",
      addressRegion: "NSW",
      postalCode: "2763",
      addressCountry: "AU",
    },
  ],

  // ── Areas served ───────────────────────────────────────────────────────────
  areaServed: "Worldwide",

  // ── Topical authority signals ──────────────────────────────────────────────
  knowsAbout: [
    "Advertising Operations",
    "Ad Trafficking",
    "Programmatic Advertising",
    "Digital Marketing",
    "Paid Advertising",
    "Search Engine Optimization",
    "Social Media Marketing",
    "Campaign Management",
    "Ad Tech Platform Administration",
    "Pixel and Tracking Implementation",
    "Performance Marketing",
  ],

  // ── Credentials ────────────────────────────────────────────────────────────
  // TODO: Uncomment and add public certificate URLs when available
  // hasCredential: [
  //   {
  //     "@type": "EducationalOccupationalCredential",
  //     name: "ISO Certified",
  //     url: "https://www.adrefresh.com/iso-certificate.pdf",
  //   },
  //   {
  //     "@type": "EducationalOccupationalCredential",
  //     name: "SOC Certified",
  //     url: "https://www.adrefresh.com/soc-certificate.pdf",
  //   },
  // ],

  // ── Social profiles ────────────────────────────────────────────────────────
  // Trailing slash added to Instagram URL for consistency
  sameAs: [
    "https://www.linkedin.com/company/adrefreshmedia/",
    "https://www.facebook.com/adrefreshmedia",
    "https://x.com/AdRefresh",
    "https://www.instagram.com/adrefreshmedia/",
  ],
};

export default organizationSchema;