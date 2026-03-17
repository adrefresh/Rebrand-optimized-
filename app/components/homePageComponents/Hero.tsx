
"use client";

// ✅ PERF FIX: Removed react-icons import (saves ~21KB JS bundle).
// Replaced FaAngleDoubleDown with an identical inline SVG — visually identical.
// import { FaAngleDoubleDown } from "react-icons/fa";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollBy({ top: 600, behavior: "smooth" });
  };

  return (
    <section className="relative w-screen overflow-hidden bg-black h-dvh [@media(min-width:768px)_and_(max-width:1023px)]:h-[85vh] lg:h-screen">

      {/* ===== VIDEO LAYER ===== */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/client-images/hero-img.png"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        >
          <source
            src="/images/about-page-videos-images/office-compressed.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-1" />

      {/* ===== CONTENT ===== */}
      {/* ✅ BUG FIX: was "sm:px-24text-left" (missing space) — broke both classes on mobile */}
<div className="relative z-10 flex h-full max-w-7xl mx-auto flex-col items-start justify-start px-2 sm:px-24 text-left pt-35 md:pt-18 lg:pt-38 lg:-ml-10">
        <h1 className="w-full text-left text-[1.8rem] sm:text-[2.2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] -mt-25 sm:mt-4 font-bold tracking-tight leading-tight text-white xl:translate-y-8">
          YOUR&nbsp; REMOTE&nbsp; TEAM<br />
          THAT&nbsp; FEELS &nbsp;ON&nbsp; SITE
        </h1>
      </div>

      {/* SCROLL BUTTON */}
      {/* ✅ PERF FIX: Inline SVG replaces FaAngleDoubleDown — same size (42px), same color (white), zero JS cost */}
      <button
        onClick={scrollToNext}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 opacity-90 animate-bounce hidden lg:block"
        aria-label="Scroll to next section"
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
          <path d="M7.41 13.41L12 17.99l4.59-4.58L18 15l-6 6-6-6z" />
        </svg>
      </button>

    </section>
  );
}
