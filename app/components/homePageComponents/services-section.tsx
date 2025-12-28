"use client";

import { useEffect } from "react";

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
          entries.forEach((e) => e.isIntersecting && el.classList.add("active")),
        { threshold: 0.25 }
      ).observe(el);
    });
  }, []);

  return (
    <section className="relative w-screen overflow-hidden bg-black py-[10px] ml-[calc(50%-50vw)] max-[480px]:mt-[-23%]">
      {/* TITLE */}
      <h2 className="reveal text-center text-[4.5rem] font-[900] text-white mt-0 mb-[3%] max-[1024px]:text-[3.8rem] max-[900px]:text-[3rem]">
        SERVICES
      </h2>

      <div className="relative mx-auto mb-[2%] grid w-[90%] grid-cols-2 justify-items-center gap-[10px] text-center max-[1024px]:gap-[30px] max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
        {/* SPLASH GREEN */}
        <div className="absolute left-[10%] top-[8%] z-[1] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,#ecfc85,#c9ff4c)] opacity-60 blur-[90px] max-[1024px]:h-[280px] max-[1024px]:w-[280px] max-[1024px]:blur-[70px] max-[480px]:h-[200px] max-[480px]:w-[200px] max-[480px]:blur-[60px]" />

        {/* SPLASH PURPLE */}
        <div className="absolute bottom-[5%] right-[10%] z-[1] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,#5a2bb3,#9c75ff)] opacity-60 blur-[90px] max-[1024px]:h-[280px] max-[1024px]:w-[280px] max-[1024px]:blur-[70px] max-[480px]:h-[200px] max-[480px]:w-[200px] max-[480px]:blur-[60px]" />

        {/* COLUMN 1 */}
        <div className="reveal z-[3] w-full max-w-[420px] px-[20px] py-[30px] max-[900px]:max-w-[95%]">
          <h3 className="mb-[20px] text-[1.8rem] font-[900] text-white max-[480px]:text-[1.5rem]">
            DIGITAL MARKETING
          </h3>

          <ul className="mx-auto w-fit list-none p-0 text-left">
            {digitalMarketing.map((item, idx) => (
              <li
                key={idx}
                className="my-[12px] text-[1.1rem] text-white opacity-85 transition-all duration-200 hover:translate-x-[6px] hover:opacity-100 max-[480px]:text-[1rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div className="reveal z-[3] w-full max-w-[420px] px-[20px] py-[30px] max-[900px]:max-w-[95%]">
          <h3 className="mb-[20px] text-[1.8rem] font-[900] text-white max-[480px]:text-[1.5rem]">
            ADVERTISING OPERATIONS
          </h3>

          <ul className="mx-auto w-fit list-none p-0 text-left">
            {adOperations.map((item, idx) => (
              <li
                key={idx}
                className="my-[12px] text-[1.1rem] text-white opacity-85 transition-all duration-200 hover:translate-x-[6px] hover:opacity-100 max-[480px]:text-[1rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 z-[2] h-[87%] w-[2px] -translate-x-1/2 bg-white opacity-60 max-[900px]:hidden" />
      </div>

      {/* REVEAL ANIMATION */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: 0.6s ease;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
