const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AdRefresh",
  url: "https://www.adrefresh.com/",
  logo: "https://www.adrefresh.com/images/HeaderImages/second.svg",
  description:
    "AdRefresh is a performance marketing and paid media agency specializing in Google Ads, Meta Ads, paid search, and growth strategy.",
  foundingDate: "2013",
  sameAs: [
    "https://www.linkedin.com/company/adrefreshmedia/",
    "https://www.facebook.com/adrefreshmedia",
    "https://x.com/AdRefresh",
    "https://www.instagram.com/adrefreshmedia",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "contact@adrefresh.com",
    areaServed: "Global",
    availableLanguage: "English",
  },
};

export default organizationSchema;