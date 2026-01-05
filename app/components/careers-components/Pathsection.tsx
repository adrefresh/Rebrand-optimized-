
"use client";

import { useEffect, useRef } from "react";
import PatternBackground from "./patternbg";

export default function PathSection() {
  const lineRef = useRef<HTMLDivElement | null>(null);

  const steps = [
    {
      title: "Step Into the AdRefresh Journey",
      desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
      colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "Discover Your Strength",
      desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact.",
      colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      title: "Grow, Learn, and Build With Us",
      desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration.",
      colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      title: "Your impact starts here",
      desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with.",
      colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Hello Adrexian!",
      desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins.",
      colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
  ];

  /* ================= LINE SCROLL ================= */
  useEffect(() => {
    const onScroll = () => {
      if (!lineRef.current) return;
      const section = lineRef.current.closest("section")!;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress =
        1 -
        Math.min(
          Math.max(rect.bottom / (rect.height + windowHeight), 0),
          1
        );

      lineRef.current.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= FADE IN (CRITICAL FIX) ================= */
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* HEADING */}
      <div className="relative py-16">
        <PatternBackground />
        <h2 className="relative z-10 text-center text-[2.4rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-extrabold">
          The Path of an{" "}
          <span className="text-[var(--purple-30)]">ADREXIAN</span>
        </h2>
      </div>

      {/* TIMELINE */}
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-0 pb-[150px]">
        {/* LINE */}
        <div className="absolute left-5 lg:left-1/2 top-0 h-full w-[2px] lg:-translate-x-1/2 bg-black/20">
          <div
            ref={lineRef}
            className="h-full w-full origin-top bg-black transition-transform duration-400"
            style={{ transform: "scaleY(0)" }}
          />
        </div>

        <div className="space-y-[110px] lg:space-y-[140px]">
          {steps.map((step, i) => (
            <div
              key={i}
              className="timeline-item relative block lg:grid lg:grid-cols-[1fr_120px_1fr] lg:gap-0 items-start lg:items-center opacity-0 translate-y-6 transition-all duration-700"
            >
              {/* ================= MOBILE / TAB ================= */}
              <div className="relative pl-12 lg:hidden block w-full">
                <div className="absolute left-[-15px] top-0 h-10 w-10 flex items-center justify-center rounded-full border-2 border-black bg-white font-bold text-lg">
                  {i + 1}
                </div>

                <h3 className="text-[26px] font-extrabold mb-3">
                  {step.title}
                </h3>

                <p className="text-[16px] text-gray-600 leading-relaxed mb-6">
                  {step.desc}
                </p>

                <img
                  src={step.colorImg}
                  className="w-[280px] h-[170px] rounded-xl object-cover shadow-lg"
                />
              </div>

              {/* ================= DESKTOP ================= */}
              <div className="hidden lg:block pr-10 text-right">
                <h3 className="text-[30px] font-extrabold mb-3">
                  {step.title}
                </h3>
                <p className="text-[18px] text-gray-600 max-w-md ml-auto">
                  {step.desc}
                </p>
              </div>

              <div className="hidden lg:flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full border-2 border-black bg-white font-bold text-2xl">
                  {i + 1}
                </div>
              </div>

              <div className="hidden lg:block relative pl-10 mt-[-170px]">
                <img
                  src={step.bwImg}
                  className="absolute left-30 top-0 h-[150px] w-[240px] rounded-xl object-cover grayscale shadow-lg"
                />
                <img
                  src={step.colorImg}
                  className="absolute left-[220px] top-[70px] h-[150px] w-[240px] rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-item.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
