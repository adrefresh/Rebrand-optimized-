
"use client";

import { useEffect } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Services() {
  const digitalMarketing = [
    "Paid Advertising",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Creative & Branding",
    "Website Development",
    "Analytics & Reporting",
  ];

  const adOperations = [
    "Campaign Setup & Management",
    "Ad Trafficking & Tag Implementation",
    "Pixel, Tracking & Measurement Setup",
    "Campaign Monitoring & Pacing",
    "Reporting, Dashboards & Insights",
    "Ad Tech & Platform Administration",
  ];

  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((el) => {
      new IntersectionObserver(
        (entries) =>
          entries.forEach(
            (e) => e.isIntersecting && el.classList.add("active")
          ),
        { threshold: 0.25 }
      ).observe(el);
    });
  }, []);

  return (
    <section className="relative w-screen overflow-hidden bg-black py-8 sm:py-12 ml-[calc(50%-50vw)]">
      {/* TITLE */}
      <h2
        className="
          reveal
          text-center
          font-[900]
          text-white
          text-[2.4rem]
          sm:text-[3rem]
          md:text-[3.8rem]
          lg:text-[4.5rem]
          mb-8
        "
      >
        SERVICES
      </h2>

      <div
        className="
          relative
          mx-auto
          grid
          w-[92%]
          grid-cols-1
          gap-16
          text-center
          md:grid-cols-2
          md:gap-12
          lg:gap-16
        "
      >
        {/* SPLASH GREEN */}
        <div
          className="
            absolute
            left-[10%]
            top-[8%]
            z-[1]
            h-[200px]
            w-[200px]
            rounded-full
            bg-[radial-gradient(circle,#ecfc85,#c9ff4c)]
            opacity-60
            blur-[60px]
            sm:h-[280px] sm:w-[280px] sm:blur-[70px]
            lg:h-[350px] lg:w-[350px] lg:blur-[90px]
          "
        />

        {/* SPLASH PURPLE */}
        <div
          className="
            absolute
            bottom-[5%]
            right-[10%]
            z-[1]
            h-[200px]
            w-[200px]
            rounded-full
            bg-[radial-gradient(circle,#5a2bb3,#9c75ff)]
            opacity-60
            blur-[60px]
            sm:h-[280px] sm:w-[280px] sm:blur-[70px]
            lg:h-[350px] lg:w-[350px] lg:blur-[90px]
          "
        />

        {/* COLUMN 1 */}
        <div className="reveal z-[3] mx-auto w-full max-w-[420px] px-5 py-6">
          <h3 className="mb-6 font-[900] text-white text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem]">
            DIGITAL MARKETING
          </h3>

          <ul className="mx-auto w-fit text-left">
            {digitalMarketing.map((item, idx) => (
              <li
                key={idx}
                className="
                  my-3
                  text-white
                  opacity-85
                  transition-all
                  duration-200
                  hover:translate-x-[6px]
                  hover:opacity-100
                  text-[0.95rem]
                  sm:text-[1.05rem]
                  lg:text-[1.1rem]
                "
              >
                {item}
              </li>
            ))}
          </ul>

          {/* BUTTON — UNDER SERVICES */}
<div className="mt-6 flex justify-center">
            <a
              href="/services/digital-marketing"
              className="
                inline-flex items-center gap-2
                text-white
                opacity-80
                transition-all
                hover:opacity-100
                hover:translate-x-1
                text-sm
                w-20
              "
            >
          
<HiArrowLongRight className="transition-transform group-hover:translate-x-2" size={48} />
            </a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="reveal z-[3] mx-auto w-full max-w-[420px] px-5 py-6">
          <h3 className="mb-6 font-[900] text-white text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem]">
            ADVERTISING OPERATIONS
          </h3>

          <ul className="mx-auto w-fit text-left">
            {adOperations.map((item, idx) => (
              <li
                key={idx}
                className="
                  my-3
                  text-white
                  opacity-85
                  transition-all
                  duration-200
                  hover:translate-x-[6px]
                  hover:opacity-100
                  text-[0.95rem]
                  sm:text-[1.05rem]
                  lg:text-[1.1rem]
                "
              >
                {item}
              </li>
            ))}
          </ul>

          {/* BUTTON — UNDER SERVICES */}
 <div className="mt-6 flex justify-center">
            <a
              href="/services/ad-operations"
              className="
                inline-flex items-center gap-2
                text-white
                opacity-80
                transition-all
                hover:opacity-100
                hover:translate-x-1
                text-sm
                text-center
              "
            >
            
<HiArrowLongRight className="transition-transform group-hover:translate-x-2" size={48} />
            </a>
          </div>
        </div>

        {/* CENTER LINE — DESKTOP ONLY */}
        <div className="absolute left-1/2 top-0 z-[2] hidden h-[87%] w-[2px] -translate-x-1/2 bg-white opacity-60 md:block" />
      </div>
    </section>
  );
}
