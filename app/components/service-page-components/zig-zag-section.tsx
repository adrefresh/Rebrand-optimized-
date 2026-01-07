
"use client";

import { useEffect } from "react";
import data from "@/app/json-data/services-digital-marketing.json";

export default function ZigZagSections() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const services = data.services;

  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      document.querySelectorAll(".zz-block").forEach((el) => {
        el.classList.add("zz-animated");
        (el as HTMLElement).style.removeProperty("--delay");
      });
      return;
    }

    const blocks = Array.from(
      document.querySelectorAll<HTMLElement>(".zz-block")
    );
    if (!blocks.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idx = blocks.indexOf(el);
          const delay = (idx + 1) * 0.14;
          el.style.setProperty("--delay", `${delay}s`);
          el.classList.add("zz-animated");
          obs.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    blocks.forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="zz-wrapper"
      style={
        {
          "--mask-url": `url(${basePath}/images/service-page-images-videos/GrayOutline.svg)`,
        } as React.CSSProperties
      }
    >
      {services.map((item, i) => (
        <div
          key={i}
          className={`zz-block ${item.side} ${item.pattern}`}
        >
          <h2 className="zz-title">{item.title}</h2>
          <p className="zz-desc">{item.description}</p>
          <div className="zz-line" />
        </div>
      ))}

      {/* 🔒 STYLES — UNTOUCHED */}
      <style jsx>{`
        /* ================= BASE ================= */

        .zz-wrapper {
          width: 90vw;
          padding: 10px 0;
          position: relative;
        }

        .zz-block {
          position: relative;
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(40px);
          margin-right: -10%;
          margin-top: 5%;
        }

        .zz-block.zz-animated {
          animation: zz-rise 560ms cubic-bezier(.2,.9,.3,1) both;
          animation-delay: var(--delay, 1s);
        }

        @keyframes zz-rise {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .zz-block.left { margin-left: 2%; text-align: left; }
        .zz-block.right { margin-right: -10%; text-align: right; }

        .zz-title {
          font-size: 3rem;
          font-weight: 900;
          width: 90vw;
        }

        .zz-desc {
          font-size: 28px;
          width: 70vw;
          line-height: 1.6;
          margin-top: 0%;
        }

        .zz-line {
          width: 70vw;
          height: 3px;
          background: #000;
          margin-top: 25px;
          transform: scaleX(0);
        }

        .zz-block.zz-animated .zz-line {
          animation: draw-line 500ms ease-out forwards;
          animation-delay: calc(var(--delay, 1s) + 0.25s);
          transform-origin: left;
        }

        .zz-block.right.zz-animated .zz-line {
          transform-origin: right;
        }

        @keyframes draw-line {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .zz-block.right .zz-title,
        .zz-block.right .zz-desc,
        .zz-block.right .zz-line {
          margin-left: auto;
        }

        .pattern-left::after,
        .pattern-right::after {
          content: "";
          position: absolute;
          top: -14%;
          width: 38vw;
          height: 60vh;
          opacity: 0.55;
          z-index: -100;
          pointer-events: none;
          clip-path: inset(26% 0 6% 0);
          margin-top:-3%;
        }

        .pattern-left::after {
          left: 0%;
          top: -48%;
          background: linear-gradient(to right, #565656 0%, #ffffff 55%);
          -webkit-mask: var(--mask-url) no-repeat right center / 135% 120%;
          mask: var(--mask-url) no-repeat right center / 135% 120%;
        }

        .pattern-right::after {
          right: 0%;
          top: -35%;
          background: linear-gradient(to left, #565656 0%, #ffffff 55%);
          -webkit-mask: var(--mask-url) no-repeat left center / 135% 120%;
          mask: var(--mask-url) no-repeat left center / 135% 120%;
        }

        @media (max-width: 800px) {
          .zz-title { font-size: 2rem; }
          .zz-desc, .zz-line { width: 90vw; }

          .pattern-left::after,
          .pattern-right::after {
            width: 70vw;
            height: 70vw;
            opacity: 0.08;
          }
        }
          @media(max-width:600px){
 .zz-block.left { margin-left: 5%; text-align: left; }
        .zz-block.right { margin-right: -5%; text-align: right; }
  .zz-desc {
          font-size: 18px;
          width: 70vw;
          line-height: 1.6;
          margin-top: 0%;
        }
           .pattern-left::after,
        .pattern-right::after {
         
          opacity: 0.95;
         
        }

       
           .pattern-left::after,
        .pattern-right::after {
       
          top: -14%;
          width: 68vw;
          height: 40vh;
        
        }
           .pattern-right::after {
          right:-10%;
          top: 25%;
       
        }
          .pattern-left::after {
         left:-10%;
          top:25%;
       
        }
        
          }
      `}</style>
    </section>
  );
}
