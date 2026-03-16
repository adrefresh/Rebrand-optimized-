"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ListenPerform() {
  const performRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  /* ---------------- SCROLL ANIMATION ---------------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRef.current?.classList.add("opacity-100", "translate-x-0");
            performRef.current?.classList.add("drop-in");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------------- CANVAS ---------------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    // ✅ PERF FIX: Skip canvas entirely on mobile (<768px).
    // On mobile CPUs the requestAnimationFrame loop with 30 nodes was blocking
    // the main thread and hurting TBT. Canvas is a visual enhancement only —
    // the section looks identical without it on small screens.
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId: number;
    let started = false;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    type NodePoint = { x: number; y: number; dx: number; dy: number };

    const startAnimation = () => {
      if (started) return;
      started = true;

      resize();
      window.addEventListener("resize", resize);

      // ✅ PERF FIX: Reduced node count on tablet (768-1023px) from 45 to 20.
      // Desktop (1024px+) keeps 65 nodes unchanged.
      const count = window.innerWidth < 1024 ? 20 : 65;

      const nodes: NodePoint[] = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1.1,
        dy: (Math.random() - 0.5) * 1.6,
      }));

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach((n) => {
          n.x += n.dx;
          n.y += n.dy;

          if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
          if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

          ctx.beginPath();
          ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(156,117,255,0.8)";
          ctx.fill();

          nodes.forEach((m) => {
            const d = Math.hypot(n.x - m.x, n.y - m.y);
            if (d < 120) {
              ctx.strokeStyle = "rgba(156,117,255,0.5)";
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(m.x, m.y);
              ctx.stroke();
            }
          });
        });

        frameId = requestAnimationFrame(animate);
      };

      animate();
    };

    // ✅ PERF FIX: Only start the canvas animation when the section is actually
    // visible on screen (IntersectionObserver). Previously it started immediately
    // on mount, consuming CPU even while the user was still reading the hero section.
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            visibilityObserver.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      visibilityObserver.observe(sectionRef.current);
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      visibilityObserver.disconnect();
    };
  }, []);

  /* ---------------- JSX ---------------- */
  return (
    <section
      ref={sectionRef}
      className="
        relative w-screen
        ml-[calc(50%-50vw)]
        px-14 py-12
        flex items-center justify-between
        overflow-hidden
        bg-[linear-gradient(135deg,#5a2bb3_0%,#9c75ff_38%,#c7a7ff_70%,#be9dfc_100%)]
        opacity-0 -translate-x-6
        transition-all duration-700 ease-out

        max-[1024px]:flex-col
        max-[1024px]:text-center
        max-[1024px]:px-7
        max-[768px]:px-5
      "
    >
      {/* CANVAS — neural animation background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10
        w-[55%] max-[1024px]:w-full
        mx-auto text-center
        ml-2 md:ml-10 lg:ml-20 2xl:ml-32">
        <div className="max-w-225 mx-auto text-left">
          <h1 className="font-black leading-[1.03] text-[4.6rem] max-[1024px]:text-[3.6rem] max-[768px]:text-[2.6rem]">
            <div>
              <span className="text-white">WE </span>
              <span className="text-black">LISTEN</span>
            </div>

            <div>
              <span className="text-black">WE </span>
              <span ref={performRef} className="text-white perform">
                PERFORM
              </span>
            </div>
          </h1>

          <p className="mt-5 text-[22px] leading-[1.45] text-black/85 max-[1024px]:text-[18px] max-[768px]:text-[15px]">
            We take the time to listen and understand your brand, mission, challenges, and goals – then execute with precision and creativity to deliver meaningful impact
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 w-[45%] flex justify-center items-center max-[1024px]:w-full max-[1024px]:mt-7">
        <Link
          href="/contact-us"
          aria-label="Go to contact page"
          className="
            group
            w-30 h-30
            rounded-full border-4 border-black
            flex items-center justify-center
            transition-transform duration-200 ease-out
            hover:scale-[1.06] focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-4

            max-[768px]:w-23 max-[768px]:h-23
          "
        >
          <span
            className="
              text-[46px] font-black text-black
              transition-transform duration-200 ease-out
              group-hover:translate-x-1
              max-[768px]:text-[36px]
            "
          >
            ➜
          </span>
        </Link>
      </div>
    </section>
  );
}
