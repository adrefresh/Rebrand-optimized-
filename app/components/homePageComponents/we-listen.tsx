// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";

// export default function ListenPerform() {
//   const performRef = useRef<HTMLSpanElement | null>(null);
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   /* ---------------- SCROLL ANIMATION ---------------- */
//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             sectionRef.current?.classList.add("show-left");
//             performRef.current?.classList.add("drop-in");
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   /* ---------------- CANVAS ---------------- */
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     type NodePoint = { x: number; y: number; dx: number; dy: number };

//     const count =
//       window.innerWidth < 768 ? 20 : window.innerWidth < 1024 ? 35 : 55;

//     const nodes: NodePoint[] = Array.from({ length: count }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       dx: (Math.random() - 0.5) * 1.1,
//       dy: (Math.random() - 0.5) * 1.6,
//     }));

//     let frameId: number;

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       nodes.forEach((n) => {
//         n.x += n.dx;
//         n.y += n.dy;

//         if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
//         if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

//         ctx.beginPath();
//         ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(156,117,255,0.8)";
//         ctx.fill();

//         nodes.forEach((m) => {
//           const d = Math.hypot(n.x - m.x, n.y - m.y);
//           if (d < 120) {
//             ctx.strokeStyle = "rgba(156,117,255,0.5)";
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(n.x, n.y);
//             ctx.lineTo(m.x, m.y);
//             ctx.stroke();
//           }
//         });
//       });

//       frameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   /* ---------------- JSX ---------------- */
//   return (
//     <section ref={sectionRef} className="lp-section">
//       <canvas ref={canvasRef} className="lp-bg" />

//       <div className="lp-left">
//         <h1 className="lp-title">
//           <span className="white">WE </span>
//           <span className="black">LISTEN</span>
//           <br />
//           <span className="black">WE </span>
//           <span ref={performRef} className="white perform">
//             PERFORM
//           </span>
//         </h1>

//         <p className="lp-sub">
//           We listen to understand your brand, mission, challenges & goals. Then —
//           we perform with precision and creativity to deliver impact.
//         </p>
//       </div>
// {/* CTA → /contact */}


// <div className="lp-right">
//   <Link href="/contact-us" className="circle" aria-label="Go to contact page">
//     <span className="arrow">➜</span>
//   </Link>
// </div>



//       <style jsx>{`
//         .lp-section {
//           position: relative;
//           width: 100vw;
//           margin-left: calc(50% - 50vw);
//           padding: 48px 56px;
//           background: linear-gradient(
//             135deg,
//             #5a2bb3 0%,
//             #9c75ff 38%,
//             #c7a7ff 70%,
//             #be9dfc 100%
//           );
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           overflow: hidden;
//           opacity: 0;
//           transform: translateX(-24px);
//           transition: 0.6s ease;
//         }

//         .lp-section.show-left {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .lp-bg {
//           position: absolute;
//           inset: 0;
//           z-index: 0;
//         }

//         .lp-left {
//           width: 55%;
//           z-index: 2;
//         }

//         .lp-title {
//           font-size: 4.6rem;
//           line-height: 1.03;
//           margin: 0;
//           font-weight: 900;
//         }

//         .white {
//           color: #ffffff;
//         }

//         .black {
//           color: #000;
//         }

//         .lp-sub {
//           margin-top: 20px;
//           max-width: 420px;
//           font-size: 22px;
//           line-height: 1.45;
//           color: rgba(0, 0, 0, 0.85);
//         }

//         .lp-right {
//           width: 45%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 2;
//         }

//         .circle {
//           width: 120px;
//           height: 120px;
//           border-radius: 50%;
//           border: 4px solid #000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: transform 0.25s ease;
//         }

//         .circle:hover {
//           transform: scale(1.06);
//         }

//         .arrow {
//           font-size: 46px;
//           font-weight: 900;
//           color: #000;
//         }

//         /* -------- TABLET -------- */
//         @media (max-width: 1024px) {
//           .lp-section {
//             flex-direction: column;
//             text-align: center;
//             padding: 40px 28px;
//           }

//           .lp-left,
//           .lp-right {
//             width: 100%;
//           }

//           .lp-title {
//             font-size: 3.6rem;
//           }

//           .lp-sub {
//             font-size: 18px;
//             margin: 14px auto 0;
//           }

//           .lp-right {
//             margin-top: 28px;
//           }
//         }

//         /* -------- MOBILE -------- */
//         @media (max-width: 768px) {
//           .lp-section {
//             padding: 28px 20px;
//           }

//           .lp-title {
//             font-size: 2.6rem;
//             line-height: 1.12;
//           }

//           .lp-sub {
//             font-size: 15px;
//           }

//           .circle {
//             width: 92px;
//             height: 92px;
//           }

//           .arrow {
//             font-size: 36px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";

// export default function ListenPerform() {
//   const performRef = useRef<HTMLSpanElement | null>(null);
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   /* ---------------- SCROLL ANIMATION ---------------- */
//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             sectionRef.current?.classList.add("show-left");
//             performRef.current?.classList.add("drop-in");
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   /* ---------------- CANVAS ---------------- */
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     type NodePoint = { x: number; y: number; dx: number; dy: number };

//     const count =
//       window.innerWidth < 768 ? 20 : window.innerWidth < 1024 ? 35 : 55;

//     const nodes: NodePoint[] = Array.from({ length: count }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       dx: (Math.random() - 0.5) * 1.1,
//       dy: (Math.random() - 0.5) * 1.6,
//     }));

//     let frameId: number;

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       nodes.forEach((n) => {
//         n.x += n.dx;
//         n.y += n.dy;

//         if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
//         if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

//         ctx.beginPath();
//         ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(156,117,255,0.8)";
//         ctx.fill();

//         nodes.forEach((m) => {
//           const d = Math.hypot(n.x - m.x, n.y - m.y);
//           if (d < 120) {
//             ctx.strokeStyle = "rgba(156,117,255,0.5)";
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(n.x, n.y);
//             ctx.lineTo(m.x, m.y);
//             ctx.stroke();
//           }
//         });
//       });

//       frameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   /* ---------------- JSX ---------------- */
//   return (
//     <section ref={sectionRef} className="lp-section">
//       <canvas ref={canvasRef} className="lp-bg" />

//       <div className="lp-left">
//         <h1 className="lp-title">
//           <span className="white">WE </span>
//           <span className="black">LISTEN</span>
//           <br />
//           <span className="black">WE </span>
//           <span ref={performRef} className="white perform">
//             PERFORM
//           </span>
//         </h1>

//         <p className="lp-sub">
//           We listen to understand your brand, mission, challenges & goals. Then —
//           we perform with precision and creativity to deliver impact.
//         </p>
//       </div>

//       {/* CTA → /contact-us */}
//       <div className="lp-right">
//         <Link
//           href="/contact-us"
//           className="circle"
//           aria-label="Go to contact page"
//         >
//           <span className="arrow">➜</span>
//         </Link>
//       </div>

//       <style jsx>{`
//         .lp-section {
//           position: relative;
//           width: 100vw;
//           margin-left: calc(50% - 50vw);
//           padding: 48px 56px;
//           background: linear-gradient(
//             135deg,
//             #5a2bb3 0%,
//             #9c75ff 38%,
//             #c7a7ff 70%,
//             #be9dfc 100%
//           );
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           overflow: hidden;
//           opacity: 0;
//           transform: translateX(-24px);
//           transition: 0.6s ease;
//         }

//         .lp-section.show-left {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .lp-bg {
//           position: absolute;
//           inset: 0;
//           z-index: 0;
//         }

//         .lp-left {
//           width: 55%;
//           z-index: 2;
//         }

//         .lp-title {
//           font-size: 4.6rem;
//           line-height: 1.03;
//           margin: 0;
//           font-weight: 900;
//         }

//         .white {
//           color: #ffffff;
//         }

//         .black {
//           color: #000;
//         }

//         .lp-sub {
//           margin-top: 20px;
//           max-width: 420px;
//           font-size: 22px;
//           line-height: 1.45;
//           color: rgba(0, 0, 0, 0.85);
//         }

//         .lp-right {
//           width: 45%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 2;
//         }

//         .circle {
//           width: 120px;
//           height: 120px;
//           border-radius: 50%;
//           border: 4px solid #000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: transform 0.25s ease;
//           text-decoration: none;
//         }

//         .circle:hover {
//           transform: scale(1.06);
//         }

//         .arrow {
//           font-size: 46px;
//           font-weight: 900;
//           color: #000;
//         }
//           .circle:focus-visible {
//   outline: 3px solid #000;
//   outline-offset: 4px;
// }

// .circle:hover .arrow {
//   transform: translateX(4px);
// }
// .arrow {
//   transition: transform 0.2s ease;
// }


//         /* -------- TABLET -------- */
//         @media (max-width: 1024px) {
//           .lp-section {
//             flex-direction: column;
//             text-align: center;
//             padding: 40px 28px;
//           }

//           .lp-left,
//           .lp-right {
//             width: 100%;
//           }

//           .lp-title {
//             font-size: 3.6rem;
//           }

//           .lp-sub {
//             font-size: 18px;
//             margin: 14px auto 0;
//           }

//           .lp-right {
//             margin-top: 28px;
//           }
//         }

//         /* -------- MOBILE -------- */
//         @media (max-width: 768px) {
//           .lp-section {
//             padding: 28px 20px;
//           }

//           .lp-title {
//             font-size: 2.6rem;
//             line-height: 1.12;
//           }

//           .lp-sub {
//             font-size: 15px;
//           }

//           .circle {
//             width: 92px;
//             height: 92px;
//           }

//           .arrow {
//             font-size: 36px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

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
      window.innerWidth < 768 ? 30 : window.innerWidth < 1024 ? 45 : 65;

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
      {/* CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* LEFT */}
      <div className="relative z-10 w-[55%] max-[1024px]:w-full">
        <h1 className="font-black leading-[1.03] text-[4.6rem] max-[1024px]:text-[3.6rem] max-[768px]:text-[2.6rem]">
          <span className="text-white">WE </span>
          <span className="text-black">LISTEN</span>
          <br />
          <span className="text-black">WE </span>
          <span ref={performRef} className="text-white perform">
            PERFORM
          </span>
        </h1>

        <p className="mt-5 max-w-[420px] text-[22px] leading-[1.45] text-black/85 max-[1024px]:mx-auto max-[1024px]:text-[18px] max-[768px]:text-[15px]">
       We take the time to listen and understand your brand, mission, challenges, and goals - then execute with precision and creativity to deliver meaningful impact
        </p>
      </div>

      {/* CTA */}
      <div className="relative z-10 w-[45%] flex justify-center items-center max-[1024px]:w-full max-[1024px]:mt-7">
        <Link
          href="/contact-us"
          aria-label="Go to contact page"
          className="
            group
            w-[120px] h-[120px]
            rounded-full border-4 border-black
            flex items-center justify-center
            transition-transform duration-200 ease-out
            hover:scale-[1.06]
            focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-4

            max-[768px]:w-[92px] max-[768px]:h-[92px]
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
