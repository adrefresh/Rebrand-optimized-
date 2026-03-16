
"use client";

import { useEffect, useRef } from "react";
import PatternBackground from "./patternbg";

export default function PathSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const lineRef = useRef<HTMLDivElement | null>(null);

  const steps = [
    {
      title: "Step Into the AdRefresh Journey",
      desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
      colorImg: `${basePath}/images/careers-images/1.jpg`,
      bwImg: `${basePath}/images/careers-images/1.jpg`,
    },
    {
      title: "Discover Your Strength",
      desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact.",
      colorImg: `${basePath}/images/careers-images/careers2.jpg`,
      bwImg: `${basePath}/images/careers-images/careers2.jpg`,
    },
    {
      title: "Grow, Learn, and Build With Us",
      desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration.",
      colorImg: `${basePath}/images/careers-images/careers3.jpg`,
      bwImg: `${basePath}/images/careers-images/careers3.jpg`,
    },
    {
      title: "Your impact starts here",
      desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with.",
      colorImg: `${basePath}/images/careers-images/4.jpg`,
      bwImg: `${basePath}/images/careers-images/4.jpg`,
    },
    {
      title: "Hello Adrexian!",
      desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins.",
      colorImg: `${basePath}/images/careers-images/5.jpg`,
      bwImg: `${basePath}/images/careers-images/5.jpg`,
    },
  ];

  /* ✅ Smooth + optimized scroll */
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!lineRef.current || ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const lineContainer = lineRef.current!.parentElement!;
        const rect = lineContainer.getBoundingClientRect();
        const viewportMid = window.innerHeight / 2;

        const fill = (viewportMid - rect.top) / rect.height;
        const clamped = Math.min(Math.max(fill, 0), 1);

        lineRef.current!.style.transform = `scaleY(${clamped})`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ✅ Line hit effect (optimized) */
  useEffect(() => {
    const onScroll = () => {
      if (!lineRef.current) return;

      const section = lineRef.current.closest("section");
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const lineBottom =
        lineRef.current.getBoundingClientRect().bottom - sectionTop;

      document.querySelectorAll(".step-circle").forEach((circle) => {
        const rect = circle.getBoundingClientRect();
        const circleTop = rect.top - sectionTop;

        if (lineBottom >= circleTop) {
          circle.classList.add("line-hit");
        } else {
          circle.classList.remove("line-hit");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ✅ Fade in */
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
      <div className="relative py-16">
        <PatternBackground />
        <h2 className="relative z-10 text-center text-[1.8rem] sm:text-[2rem] lg:text-[2rem] xl:text-[2.8rem] font-extrabold">
          The Path of an{" "}
          <span className="text-[var(--purple-30)]">ADREXIAN</span>
        </h2>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-0 pb-[150px]">
        <div className="absolute left-5 lg:left-1/2 top-0 bottom-[90px] w-[2px] lg:-translate-x-1/2 bg-black/20">
          <div
            ref={lineRef}
            className="h-full w-full origin-top bg-black"
            style={{ transform: "scaleY(0)" }}
          />
        </div>

        <div className="space-y-[110px] lg:space-y-[140px]">
          {steps.map((step, i) => (
            <div
              key={i}
              className="timeline-item relative block lg:grid lg:grid-cols-[1fr_120px_1fr] items-start lg:items-center opacity-0 translate-y-6 transition-all duration-700"
            >
              {/* MOBILE */}
              <div className="relative pl-12 lg:hidden block w-full">
                <div className="step-circle absolute left-[-15px] top-0 h-10 w-10 flex items-center justify-center rounded-full border-2 border-black bg-white font-bold text-lg">
                  {i + 1}
                </div>

                <h3 className="text-[26px] font-extrabold mb-3">
                  {step.title}
                </h3>

                <p className="text-[16px] text-gray-600 leading-relaxed mb-6 text-left">
                  {step.desc}
                </p>

                {/* ✅ Lazy loading only */}
                <img
                  src={step.colorImg}
                  loading="lazy"
                  className="w-[280px] h-[170px] rounded-xl object-cover shadow-lg"
                  alt={step.title}
                />
              </div>

              {/* DESKTOP LEFT */}
              <div className="hidden lg:block pr-10 text-left">
                <h3 className="text-[30px] font-extrabold mb-3">
                  {step.title}
                </h3>
                <p className="text-[18px] text-gray-600 max-w-md">
                  {step.desc}
                </p>
              </div>

              {/* DESKTOP NUMBER */}
              <div className="hidden lg:flex justify-center">
                <div className="step-circle h-16 w-16 flex items-center justify-center rounded-full border-2 border-black bg-white font-bold text-2xl">
                  {i + 1}
                </div>
              </div>

              {/* DESKTOP IMAGE */}
              <div className="hidden lg:block relative pl-10 mt-[-170px]">
                <img
                  src={step.colorImg}
                  loading="lazy"
                  className="absolute left-[220px] top-[70px] h-[150px] w-[240px] rounded-xl object-cover shadow-lg"
                  alt=""
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
        .step-circle.line-hit {
          border-color: var(--purple-30);
          background-color: var(--green-10);
        }
      `}</style>
    </section>
  );
}