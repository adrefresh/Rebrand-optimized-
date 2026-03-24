

import { MetadataRoute } from 'next'
import rawCaseStudies from './json-data/case-studies.json'

const BASE_URL = 'https://www.adrefresh.com'

type CaseStudy = {
  slug: string
  lastModified: string
}

const caseStudies: CaseStudy[] = Object.entries(rawCaseStudies).map(
  ([slug, data]: [string, any]) => ({
    slug,
    lastModified: data.lastModified || '2026-01-01',
  })
)

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
]

const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
  url: `${BASE_URL}/client-success/${study.slug}/`,
  lastModified: new Date(study.lastModified),
}))

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticPages, ...caseStudyPages]
}