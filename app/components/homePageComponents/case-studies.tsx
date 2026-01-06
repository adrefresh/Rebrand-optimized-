
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CaseStudies() {
  const router = useRouter();

const cases = [
  {
    slug: "impression-to-invoice",
    title: "From Impression to Invoice Streamlining Campaign Ops",
    comment:
      "Improved billing accuracy, reduced disputes, and enabled scalable operations across 300M+ programmatic impressions annually for a US-based ad network.",
  },
  {
    slug: "transition-enablers",
    title: "Transition Enablers in a Complex Organizational Shift",
    comment:
      "Supported a large enterprise during acquisition-led restructuring by acting as the backbone for platform knowledge and operational continuity.",
  },
];


  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const current = cases[index];

  /* 🔄 AUTO ROTATION */
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % cases.length);
        setAnimate(true);
      }, 150);
    }, 4000);

    return () => clearInterval(timer);
  }, [cases.length]);

  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-6
        sm:gap-10
        lg:gap-[60px]
      "
    >
      {/* LEFT ARROW */}
      <button
        onClick={() =>
          setIndex((index - 1 + cases.length) % cases.length)
        }
        className="
          font-[900]
          text-black
          opacity-80
          transition
          hover:opacity-100
          text-[26px]
          sm:text-[32px]
          lg:text-[36px]
        "
      >
        ←
      </button>

      {/* CONTENT */}
      <div className="max-w-[620px] text-center px-2 sm:px-0">
        <div
          className={`
            transition-all
            duration-500
            ease-in-out
            ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[8px]"
            }
          `}
        >
          <h2
            className="
              mb-3
              font-[900]
              text-black
              text-[1.1rem]
              sm:text-[1.25rem]
              lg:text-[1.4rem]
            "
          >
            {current.title}
          </h2>

          <p
            className="
              mb-4
              text-black
              leading-[1.55]
              text-[0.9rem]
              sm:text-[0.95rem]
              lg:text-[1rem]
            "
          >
            {current.comment}
          </p>

          {/* READ MORE */}
          <button
            onClick={() =>
              router.push(`/client-success/${current.slug}`)
            }
            className="
              rounded
              border
              border-black
              bg-[#e6ff3b]
              px-4
              py-2
              font-[600]
              text-black
              text-[0.75rem]
              sm:text-[0.8rem]
              transition
              hover:bg-[#dfff00]
            "
          >
            Read More
          </button>
        </div>

        {/* DOTS */}
        <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                h-[7px] w-[7px]
                sm:h-[8px] sm:w-[8px]
                rounded-full
                transition-all
                duration-300
                ease-in-out
                ${
                  index === i
                    ? "bg-black scale-[1.4]"
                    : "bg-black/40 hover:bg-black/70"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={() =>
          setIndex((index + 1) % cases.length)
        }
        className="
          font-[900]
          text-black
          opacity-80
          transition
          hover:opacity-100
          text-[26px]
          sm:text-[32px]
          lg:text-[36px]
        "
      >
        →
      </button>
    </div>
  );
}
