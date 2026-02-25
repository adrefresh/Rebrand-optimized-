

"use client";

import Image from "next/image";
              import Link from "next/link";

import { useEffect } from "react";
import conference from "@/public/images/HomePageImages/conference.webp";
import start from "@/public/images/HomePageImages/5stars.png";

export default function About() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(
        (e) => e.isIntersecting && e.target.classList.add("active")
      );
    });
    els.forEach((el) => obs.observe(el));
  }, []);

  return (
    <section
      className="
     
        relative
        w-screen
        bg-black
        overflow-hidden
        py-[30px]
      "
    >
      {/* BACKGROUND */}
<div className="absolute inset-0">
  <Image
    src={conference}
    alt="AdRefresh Team"
    fill
    loading="lazy"  // 🔥 IMPORTANT
    sizes="100vw"   // 🔥 improves responsive loading
    className="object-cover grayscale brightness-[0.25]"
    style={{
      backgroundColor: "transparent",
      backgroundBlendMode: "multiply",
    }}
  />
</div>
      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex justify-center mt-5 md:mt-[-12px]">
        <div className="w-full max-w-[900px] px-4 sm:px-6 text-white mb-[-40px]">
          
          {/* TITLE ROW */}
         <div className="flex items-center justify-start md:justify-center gap-3 sm:gap-4 mb-2">

            <h2
              className="
                text-[#813DFF]
                font-[900]
                tracking-[-2px]
                text-[2rem]
                sm:text-[3.2rem]
                md:text-[4rem]
                lg:text-[5rem]
                md:mb-[-2%]
                md:ml-[50px]
                text-left
              "
            >
              ADREXIANS
            </h2>

            <Image
              src={start}
              alt="stars"
              width={100}
              height={100}
              className="w-[50px] sm:w-[60px] md:w-[120px] md:h-[80px]"
            />
          </div>

          {/* WE ARE + CONTENT */}
          <div
            className="
              mx-auto
              grid
              grid-cols-1
              md:grid-cols-[70px_1fr]
              gap-2 md:gap-3
              items-start
              text-center md:text-left
            "
          >
            {/* WE ARE */}
          <div
  className="
    text-white
    font-[900]
    tracking-[1px]
    md:tracking-[6px]

    /* MOBILE — left aligned */
    absolute
    top-[-50px]
    left-4
    text-[2rem]
    text-left
    m-0
    p-0

    /* DESKTOP (unchanged) */
    md:static
    md:flex
    md:justify-center
    md:text-[4.2rem]
    md:[writing-mode:vertical-rl]
    md:rotate-180
    md:ml-[177%]
    whitespace-nowrap
  "
>
  WE ARE
</div>

            {/* TEXT CONTENT */}
            <div className="max-w-[600px] mx-auto">
              <p
                className="
                text-left
                  reveal
                      text-[17px]
                  sm:text-[19px]
                  md:text-[16px]
                  lg:text-[20px]
                  leading-[1.7]
                  mb-8
                  ml-0
                  md:ml-[10%]
    
   
                "
              >
                AdRefresh is a next-generation digital ad performance management partner, uniting strategy, execution, and intelligent optimization under a single agile powerhouse.  
              </p>

              <p
                className="
                  reveal
                  text-left
                  text-[17px]
                  sm:text-[19px]
                  md:text-[16px]
                  lg:text-[20px]
                  leading-[1.7]
                  mb-8
                  ml-0
                  md:ml-[10%]
                  
 
                "
              >
                Powered by AI-driven workflows and multi-shift teams operating from sunrise through late hours, we ensure your campaigns continuously perform, adapt, and scale without interruption.
              </p>

              {/* CTA */}

<Link href="/about-us">
  <div
    className="
      flex
      items-center
      justify-center md:justify-start
      gap-2
      font-bold
      text-[1.6rem]
      sm:text-[1.8rem]
      md:text-[2.2rem]

      ml-[-40px]        /* MOBILE only */
      md:ml-[15%]

      md:mb-[40px]
      cursor-pointer
    "
  >
    Discover Our Team
    <span className="animated-arrow">➜</span>
  </div>
</Link>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
