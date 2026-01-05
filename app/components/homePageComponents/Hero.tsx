

"use client";

import { useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const scrollToNext = () => {
    window.scrollBy({
      top: 600,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("show")
        ),
      { threshold: 0.3 }
    );

    const title = document.querySelector(".hero-title");
    if (title) observer.observe(title);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        relative
        w-screen
        overflow-hidden
        bg-black

        h-[100dvh]  /* mobile */
        [@media(min-width:768px)_and_(max-width:1023px)]:h-[85vh] /* tablets */
        lg:h-[100vh] /* laptop & desktop */
      "
    >
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={`${basePath}/images/about-page-videos-images/officevd.mp4`}
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <main
        className="
          relative z-10
          flex h-full
          max-w-7xl
          mx-auto
          flex-col
          items-start
          justify-start
          px-6 sm:px-16
          text-left

          pt-35
          md:pt-18
          lg:pt-38
        "
      >
       <h1 
  className="
    hero-title
    reveal
    max-w-5xl

    /* alignment */
    text-center

    /* font sizes */
    text-[1.4rem]        /* 📱 mobile */
    sm:text-[2.6rem]
    md:text-[4rem]
    lg:text-[5rem]
    xl:text-[6rem]

    /* spacing */
  mt-[-50px]         /* mobile */
sm:mt-4       /* tablet */


    font-bold
    tracking-tight
    leading-tight
    text-white

    /* animation positioning */
    translate-y-0
    xl:translate-y-8
  "
>
  YOUR REMOTE TEAM <br />
  THAT FEELS ON SITE
</h1>

      </main>

      {/* SCROLL BUTTON – desktop only */}
      <button
        onClick={scrollToNext}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-6
          z-20
          opacity-90
          animate-bounce

          hidden
          lg:block
        "
        aria-label="Scroll to next section"
      >
        <FaAngleDoubleDown size={42} color="white" />
      </button>
      <style>{`
  @media (max-width: 639px) {
    .hero-title {
      font-size: 1.4rem;
      margin-top: -100px;
      text-align: center;
      margin-left:-20px;
    }
  }
`}</style>

    </section>
    

  );
}
