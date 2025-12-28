"use client";

import { useEffect, useRef } from "react";

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
            sectionRef.current?.classList.add("show-left");
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

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    type NodePoint = { x: number; y: number; dx: number; dy: number };

    const count =
      window.innerWidth < 768 ? 20 : window.innerWidth < 1024 ? 35 : 55;

    const nodes: NodePoint[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 1.1,
      dy: (Math.random() - 0.5) * 1.6,
    }));

    let frameId: number;

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

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ---------------- JSX ---------------- */
  return (
    <section ref={sectionRef} className="lp-section">
      <canvas ref={canvasRef} className="lp-bg" />

      <div className="lp-left">
        <h1 className="lp-title">
          <span className="white">WE </span>
          <span className="black">LISTEN</span>
          <br />
          <span className="black">WE </span>
          <span ref={performRef} className="white perform">
            PERFORM
          </span>
        </h1>

        <p className="lp-sub">
          We listen to understand your brand, mission, challenges & goals. Then —
          we perform with precision and creativity to deliver impact.
        </p>
      </div>

      <div className="lp-right">
        <div className="circle">
          <span className="arrow">➜</span>
        </div>
      </div>

      <style jsx>{`
        .lp-section {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          padding: 48px 56px;
          background: linear-gradient(
            135deg,
            #5a2bb3 0%,
            #9c75ff 38%,
            #c7a7ff 70%,
            #be9dfc 100%
          );
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          opacity: 0;
          transform: translateX(-24px);
          transition: 0.6s ease;
        }

        .lp-section.show-left {
          opacity: 1;
          transform: translateX(0);
        }

        .lp-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .lp-left {
          width: 55%;
          z-index: 2;
        }

        .lp-title {
          font-size: 4.6rem;
          line-height: 1.03;
          margin: 0;
          font-weight: 900;
        }

        .white {
          color: #ffffff;
        }

        .black {
          color: #000;
        }

        .lp-sub {
          margin-top: 20px;
          max-width: 420px;
          font-size: 22px;
          line-height: 1.45;
          color: rgba(0, 0, 0, 0.85);
        }

        .lp-right {
          width: 45%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }

        .circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 4px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.25s ease;
        }

        .circle:hover {
          transform: scale(1.06);
        }

        .arrow {
          font-size: 46px;
          font-weight: 900;
          color: #000;
        }

        /* -------- TABLET -------- */
        @media (max-width: 1024px) {
          .lp-section {
            flex-direction: column;
            text-align: center;
            padding: 40px 28px;
          }

          .lp-left,
          .lp-right {
            width: 100%;
          }

          .lp-title {
            font-size: 3.6rem;
          }

          .lp-sub {
            font-size: 18px;
            margin: 14px auto 0;
          }

          .lp-right {
            margin-top: 28px;
          }
        }

        /* -------- MOBILE -------- */
        @media (max-width: 768px) {
          .lp-section {
            padding: 28px 20px;
          }

          .lp-title {
            font-size: 2.6rem;
            line-height: 1.12;
          }

          .lp-sub {
            font-size: 15px;
          }

          .circle {
            width: 92px;
            height: 92px;
          }

          .arrow {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  );
}
