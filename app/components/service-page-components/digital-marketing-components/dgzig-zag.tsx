
"use client";

import { useEffect } from "react";

export default function DgZigZagSections() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
      {/* 1 */}
      <div className="zz-block left pattern-right">
        <h2 className="zz-title">PAID ADVERTISING</h2>
        <p className="zz-desc">
         Strategic paid campaigns on search and social channels optimized continuously to improve reach, clicks, conversions, and ROI. 
        </p>
        <div className="zz-line" />
      </div>

      {/* 2 */}
      <div className="zz-block right pattern-left">
        <h2 className="zz-title">SEARCH ENGINE OPTIMIZATION</h2>
        <p className="zz-desc">
Expert SEO that improves rankings, increases organic traffic, and enhances visibility in search results over time.         </p>
        <div className="zz-line" />
      </div>

      {/* 3 */}
      <div className="zz-block left pattern-right">
        <h2 className="zz-title">CREATIVES & BRANDING</h2>
        <p className="zz-desc">
        Purpose-driven designs and messaging that strengthen brand identity and grab attention across platforms and formats. 
        </p>
        <div className="zz-line" />
      </div>

      {/* 4 */}
      <div className="zz-block right pattern-left">
        <h2 className="zz-title">WEBSITE-DEVELOPMENT</h2>
        <p className="zz-desc">
      Fast, responsive, and performance-optimized websites designed for usability, conversions, and seamless user experience. 
        </p>
        <div className="zz-line" />
      </div>

      {/* 5 */}
      <div className="zz-block left pattern-right">
        <h2 className="zz-title">ANALYTICS & REPORTING</h2>
        <p className="zz-desc">
  Actionable metrics and insights delivered through easy-to-understand dashboards that help refine strategies and drive performance. 
        </p>
        <div className="zz-line" />
      </div>

      {/* 6 */}
      <div className="zz-block right pattern-left">
        <h2 className="zz-title">MEDIA BUYING SUPPORT</h2>
        <p className="zz-desc">
          Forecasting, vendor negotiation, and premium inventory strategies.
          Forecasting, vendor negotiation, and premium inventory strategies.
        </p>
        <div className="zz-line" />
      </div>

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
         margin-right:0%;
         margin-top:1%;
         margin-left:-10%;
        
        }

        .zz-block.zz-animated {
          animation: zz-rise 560ms cubic-bezier(.2,.9,.3,1) both;
          animation-delay: var(--delay, 1s);
        }

        @keyframes zz-rise {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .zz-block.left { margin-left: -7%; text-align: left; }
        .zz-block.right { margin-right: 0%; text-align: right; }

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

        /* ================= DIVIDER LINE ================= */

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

        /* ================= PATTERNS ================= */

        .pattern-left::after,
        .pattern-right::after {
          content: "";
          position: absolute;
          top: -14%;
          width: 38vw;
          height: 65vh;
          opacity: 0.55;
          z-index: -100;
          pointer-events: none;
          clip-path: inset(22% 0 6% 0);
        }

        .pattern-left::after {
          left: 0%;
          top: -60%;
                    z-index: -100;

          background: linear-gradient(to right, #565656 0%, #ffffff 55%);
          -webkit-mask: var(--mask-url) no-repeat right center / 135% 120%;
          mask: var(--mask-url) no-repeat right center / 135% 120%;
        }

        .pattern-right::after {
          right: 0%;
                    z-index: -100;

          top: -50%;
          background: linear-gradient(to left, #565656 0%, #ffffff 55%);
          -webkit-mask: var(--mask-url) no-repeat left center / 135% 120%;
          mask: var(--mask-url) no-repeat left center / 135% 120%;
        }

        /* ================= RESPONSIVE ================= */

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
      `}</style>
    </section>
  );
}
