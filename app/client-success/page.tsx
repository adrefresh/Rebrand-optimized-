
import type { Metadata } from "next";
import Link from "next/link";
import ListenPerform from "../components/homePageComponents/we-listen";
import "./clientpage.css";

/* ================= DATA ================= */


const caseStudies = [
  {
    slug: "impression-to-invoice",
    title: "From Impression to Invoice",
    excerpt:
      "End-to-end operational excellence for a genealogy-focused programmatic ad network — streamlining campaign operations in a high-niche market.",
    image: "/images/client-images/1stone.jpg",
  },
  {
    slug: "transition-enablers",
    title: "Transition Enablers: Powering a Complex Organizational Shift",
    excerpt:
      "Supporting enterprise restructuring with operational continuity, platform stability, and execution confidence.",
    image: "/images/client-images/driving.jpg",
  },
  {
    slug: "audience-infrastructure-fmcg",
    title: "Turning Data into Campaign Results",
    excerpt:
      "A behind-the-scenes look at audience infrastructure powering high-quality FMCG campaign activation across 100+ websites and DSPs.",
    image: "/images/client-images/turningdata.JPG",
  },
  {
    slug: "uae-media-execution",
    title: "Driving Performance Across Sectors in the UAE",
    excerpt:
      "Strategic paid media execution for corporate services and lifestyle retail brands across the UAE market.",
          image: "/images/client-images/seamlewss.jpg",

  },
  {
    slug: "luxury-kitchen-appliance-digital-strategy",
    title: "Redefining Digital Strategy for a Luxury Kitchen Appliance Retailer",
    excerpt:
      "From generic reach to premium customer engagement — reducing acquisition costs and increasing showroom visits.",
          image: "/images/client-images/scalable.jpg",

  },
  {
    slug: "global-news-monetization",
    title: "Scalable Monetization & Operational Precision for a Global News Publisher",
    excerpt:
      "End-to-end Programmatic operations powering a worldwide news network with higher eCPMs and fill rates.",
          image: "/images/client-images/redefine.jpg",

  },

];



/* ================= SEO ================= */
export const metadata: Metadata = {
  title: "Client Success | AdRefresh Case Studies",
  description:
    "Explore real-world client success stories from AdRefresh. Discover how operational excellence delivers measurable business impact.",
  alternates: {
    canonical: "https://www.adrefresh.com/client-success",
  },
};

/* ================= PAGE ================= */
export default function ClientSuccessPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
  preload="none"
  poster={`${basePath}/images/client-images/turningdata.jpg`}
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
      <section className="max-w-[1200px] mx-auto text-center px-4 mt-[-1%] mb-16">
        <h2 className="font-black text-[clamp(2.4rem,5vw,4rem)] mb-4">
          Success stories
        </h2>
        <p className="text-[#555] text-[clamp(1rem,2vw,1.2rem)] max-w-[900px] mx-auto leading-relaxed">
          A closer look at how operational precision, platform expertise, and
          execution excellence translate into measurable business impact.
        </p>
      </section>

      {/* ================= CASE STUDIES (ALTERNATE BACKGROUNDS) ================= */}
      <section className="w-screen ml-[calc(50%-50vw)] pb-20">

        {caseStudies.map((cs, i) => (
          <div
            key={cs.slug}
            className={`
              ${i % 2 === 0 ? "bg-[#e9ecef]" : "bg-white"}
              py-20
            `}
          >
            <div className="max-w-[1200px] mx-auto px-4">

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
                <div
                  className={`${
                    i % 2 !== 0 ? "direction-ltr md:text-left" : ""
                  }`}
                >
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

                  <p className="text-[#444] text-[clamp(1rem,2vw,1.1rem)] max-w-[480px]">
                    {cs.excerpt}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="rounded-[18px] overflow-hidden max-w-full">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-[260px] md:h-[300px] object-cover transition-transform duration-500 hover:scale-[1.08]"
                  />
                </div>

              </Link>
            </div>
          </div>
        ))}

      </section>

      {/* ================= FOOTER ================= */}
      <div className="mt-[-60px]">
        <ListenPerform />
      </div>
    </>
  );
}
