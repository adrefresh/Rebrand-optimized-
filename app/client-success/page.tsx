// "use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ListenPerform from "../components/homePageComponents/we-listen";
import "./clientpage.css";
import DATA from "../json-data/case-studies.json";

// ============================================
// SEO VARIABLES - UPDATE ONLY THESE VALUES
// ============================================

// Variable 1: Page Title (Used for regular SEO, OG, and Twitter)
const PAGE_TITLE = "Client Success Stories | AdRefresh Case Studies & Results";

// Variable 2: Meta Description (Used for regular SEO, OG, and Twitter)
const PAGE_DESCRIPTION = "Explore real client success stories from AdRefresh. See how our ad operations, programmatic strategy, and digital marketing expertise drive measurable business growth.";

// Variable 3: Canonical URL
const SEO_CANONICAL_URL = "https://www.adrefresh.com/client-success";

// Variable 4: Open Graph Image URL (Optional - only modify if you need a custom image)
const SEO_OG_IMAGE_URL = "https://www.adrefresh.com/og/client-success.png";

// ============================================
// METADATA EXPORT (for Next.js)
// ============================================

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  alternates: {
    canonical: SEO_CANONICAL_URL,
  },

  openGraph: {
    title: PAGE_TITLE, // Reuses main title
    description: PAGE_DESCRIPTION, // Reuses main description
    url: SEO_CANONICAL_URL,
    siteName: "AdRefresh", // Hardcoded - no variable
    images: [
      {
        url: SEO_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "AdRefresh Client Success Stories", // Hardcoded - no variable
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE, // Reuses main title
    description: PAGE_DESCRIPTION, // Reuses main description
    images: [SEO_OG_IMAGE_URL],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ================= TYPES ================= */

type Section = {
  heading: string;
  body?: string;
  bullets?: string[];
};

type CaseStudyData = {
  slug: string;
  title: string;
  subtitle?: string;
  featureImage: string;
  sections?: Section[];
};

type CaseStudy = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
};

/* ================= DATA ================= */

// ✅ Properly typed JSON mapping from array
const caseStudies: CaseStudy[] = (DATA as CaseStudyData[]).map((item) => ({
  slug: item.slug,
  title: item.title,
  excerpt:
    item.subtitle ||
    (item.sections?.[0]?.body
      ? item.sections[0].body.slice(0, 140) + "..."
      : ""),
  image: item.featureImage,
}));

/* ================= PAGE ================= */
export default function ClientSuccessPage() {
  const basePath: string = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="
          relative w-screen
          ml-[calc(50%-50vw)]
          flex items-center justify-center overflow-hidden
          h-[60vh]
          sm:h-[88vh]
        "
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${basePath}/images/client-images/turningdata.webp`}
          src={`${basePath}/images/about-page-videos-images/clientvd.mp4`}
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="
              mb-4
              font-extrabold
              tracking-wide
              text-center
              leading-[1.05]
              text-[4rem]
              max-[1280px]:text-[3.4rem]
              max-[1024px]:text-[3rem]
              max-[768px]:text-[2.5rem]
              max-[480px]:text-[2.1rem]
              whitespace-normal
              lg:whitespace-nowrap
            "
          >
            CLIENT SUCCESS
          </h1>

          <p className="mt-3 text-[clamp(1rem,2vw,1.25rem)] opacity-90"></p>
        </div>
      </section>

      {/* ================= PATTERN STRIP ================= */}
      <div className="relative w-full h-[12vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-repeat-x opacity-[0.9]"
          style={{
            zIndex: -3,
            backgroundImage:
              "url(/images/service-page-images-videos/GrayOutline.svg)",
            backgroundSize: "750px",
            transform: "rotate(180deg)",
            maskImage:
              "linear-gradient(to bottom, transparent, black 40%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 40%, black 85%, transparent)",
          }}
        />
      </div>

      {/* ================= HEADER ================= */}
      <section className="max-w-300 mx-auto text-center px-4 mt-[-1%] mb-16">
        <h2 className="font-black text-[clamp(2.4rem,5vw,4rem)] mb-4">
          Success stories
        </h2>
        <p className="text-[#555] text-[clamp(1rem,2vw,1.2rem)] max-w-225 mx-auto leading-relaxed">
          A closer look at how operational precision, platform expertise, and
          execution excellence translate into measurable business impact.
        </p>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="w-screen ml-[calc(50%-50vw)] pb-20">
        {caseStudies.map((cs: CaseStudy, i: number) => (
          <div
            key={cs.slug}
            className={`
              ${i % 2 === 0 ? "bg-[#e9ecef]" : "bg-white"}
              py-20
            `}
          >
            <div className="max-w-300 mx-auto px-4">
              <Link
                href={`/client-success/${cs.slug}`}
                className={`
                  grid gap-10 items-center
                  md:grid-cols-2
                  transition-transform hover:scale-[1.02]
                  ${i % 2 !== 0 ? "direction-rtl" : ""}
                `}
              >
                {/* TEXT */}
                <div className={`${i % 2 !== 0 ? "direction-ltr md:text-left" : ""}`}>
                  <h3
                    className="
                      text-left
                      text-[1.4rem]
                      sm:text-[1.6rem]
                      md:text-[1.8rem]
                      lg:text-[2rem]
                      font-extrabold
                      mb-3
                    "
                  >
                    {cs.title}
                  </h3>

                  <p className="text-[#444] text-[clamp(1rem,2vw,1.1rem)] max-w-120">
                    {cs.excerpt}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="rounded-[18px] overflow-hidden max-w-full relative h-65 md:h-75">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.08]"
                    loading={i === 0 ? "eager" : "lazy"}
                    priority={i === 0}
                    unoptimized
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <div className="-mt-15">
        <ListenPerform />
      </div>
    </>
  );
}
