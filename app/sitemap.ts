
import { MetadataRoute } from 'next'
import caseStudies from './json-data/case-studies.json'
import blogs from './json-data/blogs.json'

const BASE_URL = 'https://www.adrefresh.com'

// ✅ Add this for static export compatibility
export const dynamic = 'force-static'
export const revalidate = false

/**
 * Static pages with manually-maintained lastModified dates.
 * Update the date here whenever you make meaningful content changes to a page.
 */
const staticPages: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}/`,
    lastModified: new Date('2026-03-16'),
  },
  {
    url: `${BASE_URL}/services/digital-marketing/`,
    lastModified: new Date('2026-01-11'),
  },
  {
    url: `${BASE_URL}/services/ad-operations/`,
    lastModified: new Date('2026-01-11'),
  },
  {
    url: `${BASE_URL}/client-success/`,
    lastModified: new Date('2026-01-11'),
  },
  {
    url: `${BASE_URL}/blogs/`,
    lastModified: new Date('2026-01-11'),
  },
  {
    url: `${BASE_URL}/about-us/`,
    lastModified: new Date('2026-01-11'),
  },
  {
    url: `${BASE_URL}/contact-us/`,
    lastModified: new Date('2026-01-11'),
  },
  {
    url: `${BASE_URL}/careers/`,
    lastModified: new Date('2026-01-11'),
  },
  // /privacy-policy is intentionally excluded — it carries a noindex directive
]

/**
 * Dynamic case study pages — auto-generated from case-studies.json.
 * Each entry must have a `slug` and `lastModified` (ISO date string: "YYYY-MM-DD").
 * Adding a new case study to the JSON automatically adds it here on next build.
 */
const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
  url: `${BASE_URL}/client-success/${study.slug}/`,
  lastModified: new Date(study.lastModified),
}))

/**
 * Dynamic blog post pages — auto-generated from blogs.json.
 * Each entry must have a `slug` and `date` (ISO date string: "YYYY-MM-DD").
 * Adding a new post to the JSON automatically adds it here on next build.
 */
const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
  url: `${BASE_URL}/blogs/${blog.slug}/`,
  lastModified: new Date(blog.date),
}))

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticPages, ...caseStudyPages, ...blogPages]
}


// import { MetadataRoute } from 'next'
// import caseStudies from './json-data/case-studies.json'

// const BASE_URL = 'https://www.adrefresh.com'

// /**
//  * Static pages with manually-maintained lastModified dates.
//  * Update the date here whenever you make meaningful content changes to a page.
//  */
// const staticPages: MetadataRoute.Sitemap = [
//   {
//     url: `${BASE_URL}/`,
//     lastModified: new Date('2026-03-16'),
//   },
//   {
//     url: `${BASE_URL}/services/digital-marketing/`,
//     lastModified: new Date('2026-01-11'),
//   },
//   {
//     url: `${BASE_URL}/services/ad-operations/`,
//     lastModified: new Date('2026-01-11'),
//   },
//   {
//     url: `${BASE_URL}/client-success/`,
//     lastModified: new Date('2026-01-11'),
//   },
//   {
//     url: `${BASE_URL}/about-us/`,
//     lastModified: new Date('2026-01-11'),
//   },
//   {
//     url: `${BASE_URL}/contact-us/`,
//     lastModified: new Date('2026-01-11'),
//   },
//   {
//     url: `${BASE_URL}/careers/`,
//     lastModified: new Date('2026-01-11'),
//   },
//   // /privacy-policy is intentionally excluded — it carries a noindex directive
// ]

// /**
//  * Dynamic case study pages — auto-generated from case-studies.json.
//  * Each entry must have a `slug` and `lastModified` (ISO date string: "YYYY-MM-DD").
//  * Adding a new case study to the JSON automatically adds it here on next build.
//  */
// const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
//   url: `${BASE_URL}/client-success/${study.slug}/`,
//   lastModified: new Date(study.lastModified),
// }))

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [...staticPages, ...caseStudyPages]
// }
