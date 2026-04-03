import type { Metadata } from "next";
import ListenPerform from "@/app/components/homePageComponents/we-listen";
import "./client-success.css";
import Link from "next/link";
import { notFound } from "next/navigation";

import DATA from "../../json-data/case-studies.json";

// ============================================
// SEO VARIABLES - UPDATE ONLY THESE VALUES
// ============================================

// Variable 1: Default Title (when no data found)
const PAGE_TITLE = "Client Success | AdRefresh";

// Variable 2: Default Description (when no data found)
const PAGE_DESCRIPTION = "Explore how AdRefresh delivers operational excellence across programmatic advertising and ad operations.";

// Variable 3: Base URL
const SEO_BASE_URL = "https://www.adrefresh.com";

// ============================================
// TYPES
// ============================================

/* ================= TYPES ================= */
type Section = {
  heading: string;
  body?: string;
  bullets?: string[];
};

type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  featureImage: string;
  sections: Section[];
  lastModified: string;
};

/* ================= SEO ================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = SEO_BASE_URL;
  const data = (DATA as CaseStudy[]).find((item) => item.slug === slug);

  if (!data) {
    return {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      robots: { index: true, follow: true },
    };
  }

  return {
    title: `${data.title} | Client Success – AdRefresh`,
    description: data.subtitle,
    alternates: {
      canonical: `${baseUrl}/client-success/${slug}`,
    },
    openGraph: {
      title: `${data.title} | AdRefresh`,
      description: data.subtitle,
      url: `${baseUrl}/client-success/${slug}`,
      siteName: "AdRefresh", // Hardcoded - no variable
      images: [
        {
          url: data.featureImage,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | AdRefresh`,
      description: data.subtitle,
      images: [data.featureImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ================= STATIC PARAMS ================= */
export function generateStaticParams() {
  return (DATA as CaseStudy[]).map((item) => ({ slug: item.slug }));
}

/* ================= PAGE ================= */
export default async function ClientSuccessDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  const data = (DATA as CaseStudy[]).find((item) => item.slug === slug);
  if (!data) notFound();

  const slugs = (DATA as CaseStudy[]).map((item) => item.slug);
  const index = slugs.indexOf(slug);

  return (
    <>
      <section
        className="cs-hero"
        style={{
          ["--hero-pattern" as any]: `url(/images/service-page-images-videos/GrayOutline.svg)`,
        }}
      >
        <h1 className="cs-hero-title" style={{ color: "black" }}>
          {data.title}
        </h1>
      </section>

      <div className="cs-wrap">
        <div className="cs-grid">
          {/* Left Image */}
          <div className="cs-image">
            <img src={data.featureImage} alt={data.title} />
          </div>
        </div>

        {data.sections.slice(0).map((s, i) => (
          <section key={i} className="cs-section">
            <h2 style={{ marginTop: "4%" }}>{s.heading}</h2>

            {s.body && <p>{s.body}</p>}

            {s.bullets && (
              <ul>
                {s.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <nav className="cs-pagination">
          {index > 0 ? (
            <Link href={`/client-success/${slugs[index - 1]}`}>← Previous</Link>
          ) : (
            <span className="disabled">← Previous</span>
          )}
          {index < slugs.length - 1 ? (
            <Link href={`/client-success/${slugs[index + 1]}`}>Next →</Link>
          ) : (
            <span className="disabled">Next →</span>
          )}
        </nav>

        <div
          className="
    mt-[5%]
    md:-mb-15
    
    mb-[20%]        /* 📱 mobile */
    sm:mb-[-3.7%]   /* 💻 tablet & up */
  "
        >
          <ListenPerform />
        </div>
      </div>
    </>
  );
}
