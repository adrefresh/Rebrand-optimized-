
"use client";

import { useEffect } from "react";
import Image from "next/image";
import iconmark from "@/public/images/HomePageImages/IconmarkLimeYellow.png";

export default function Features() {
  const points = [
    {
      num: "01",
      title: "AI-Driven Precision for High-Velocity Growth",
      text: "Our AI-enhanced AdOps engine delivers quicker decisions and outcomes engineered for accelerated growth.",
    },
    {
      num: "02",
      title: "Experience That Multiplies Impact",
      text: "Industry specialists + automation = elevated insights, optimized budgets, and consistent profit acceleration.",
    },
    {
      num: "03",
      title: "Always-On Partnership for Momentum",
      text: "Adaptive workflows and 24/7 availability ensure uninterrupted operations and long-term marketing momentum.",
    },
  ];

  /* ===== COSMOS BACKGROUND ===== */
  useEffect(() => {
    const canvas = document.getElementById("neuralCanvas") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    let nodes: {
      x: number;
      y: number;
      dx: number;
      dy: number;
    }[] = [];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const isMobile = window.innerWidth <= 768;

      nodes = Array.from(
        { length: isMobile ? 22 : 63 },
        () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 1.1,
          dy: (Math.random() - 0.5) * 1.1,
        })
      );
    };

    setup();
    window.addEventListener("resize", setup);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isMobile = window.innerWidth <= 768;
      const maxDist = isMobile ? 80 : 120;

      nodes.forEach((n) => {
        n.x += n.dx;
        n.y += n.dy;

        if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.fill();

        nodes.forEach((m) => {
          const dist = Math.hypot(n.x - m.x, n.y - m.y);
          if (dist < maxDist) {
            ctx.strokeStyle = "rgba(255,255,255,0.25)";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", setup);
  }, []);

  return (
    <section className="relative w-screen overflow-hidden bg-[#c8df2f]">
      {/* BACKGROUND */}
      <canvas id="neuralCanvas" className="absolute inset-0 z-0" />

      {/* DECORATIVE LOGO */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-[1]">
        <Image
          src={iconmark}
          alt="Decorative Logo"
          width={580}
          height={1080}
          className="
            opacity-100
            w-[280px]
            sm:w-[360px]
            md:w-[420px]
            lg:w-[580px]
            max-sm:opacity-20
            ml-[-5%]
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-[1200px]
          mx-auto
          px-4 sm:px-6 lg:px-[20px]

         pt-[6px]
   /* ↓ reduced mobile top */
          sm:pt-[60px]

          pb-[4px]         /* ↓ reduced mobile bottom */
          sm:pb-[30px]
        "
      >
        {/* TITLE */}
        <div className="mb-[5px] sm:mb-[60px] lg:mb-[72px]">
          <h2 className="text-black font-[900] leading-[1.05] text-[3rem] mt-[-5%] sm:mt-[0%] md:mt-[0%] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.5rem]">
            BUILT FOR MODERN
          </h2>
          <span className="block text-[var(--purple-30)] font-[900] mt-2 text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem]">
            Marketing Excellence
          </span>
        </div>

        {/* FEATURES */}
        <div className="flex flex-col max-w-[640px] gap-[6px] sm:gap-[44px] lg:gap-[54px]
lg:mt-[-5%]">
          {points.map((p) => (
            <div key={p.num} className="flex items-center gap-3 sm:gap-[10px]">
              {/* NUMBER */}
              <span
                className="
                  font-[900]
                  leading-[0.9]

                  min-w-[72px]
                  sm:min-w-[96px]
                  lg:min-w-[110px]

                  text-[4.5rem]
                  sm:text-[4.6rem]
                  lg:text-[5rem]

                  ml-[-30px]   
                  mr-[10px]   /* mobile only */
                  sm:ml-0

                  text-[rgba(223,250,51,0.85)]
                "
              >
                {p.num}
              </span>

              {/* TEXT */}
              <div>
                <h3 className="text-black font-[900] mb-1 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.45rem]">
                  {p.title}
                </h3>
                <p
                  className="
                    text-black
                    leading-[1.4]
                    text-[14px]
                    sm:text-[15px]
                    [text-align:justify]
                    [text-justify:inter-word]
                    hyphens-auto
                  "
                >
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
