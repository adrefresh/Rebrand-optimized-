
// // "use client";
// // import Link from "next/link";
// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";

// // export default function CaseStudies() {
// //   const router = useRouter();

// // const cases = [
// //   {
// //     slug: "impression-to-invoice",
// //     title: "From Impression to Invoice Streamlining Campaign Operations",
// //     comment:
// //       "Improved billing accuracy, reduced disputes, and enabled scalable operations across 300M+ programmatic impressions annually for a US-based ad network.",
// //   },
// //   {
// //     slug: "transition-enablers",
// //     title: "Transition Enablers in a Complex Organizational Shift",
// //     comment:
// //       "Supported a large enterprise during acquisition-led restructuring by acting as the backbone for platform knowledge and operational continuity.",
// //   },
// //   {
// //     slug: "audience-infrastructure-fmcg",
// //     title: "Turning Data into Campaign Results",
// //     comment:
// //       "Built scalable audience infrastructure for a global FMCG brand, delivering 99.8% data accuracy and 2x faster campaign launches.",
// //   },
// //   {
// //     slug: "uae-media-execution",
// //     title: "Driving Performance Across Sectors in the UAE",
// //     comment:
// //       "Delivered end-to-end paid media execution for service and retail brands, improving ROAS and reducing CPL across multiple platforms.",
// //   },
// //   {
// //     slug: "luxury-retail-digital-strategy",
// //     title: "Redefining Digital Strategy for a Luxury Appliance Retailer",
// //     comment:
// //       "Shifted from generic reach to premium customer engagement, increasing showroom appointments and improving lead quality.",
// //   },
// //   {
// //     slug: "global-news-monetization",
// //     title: "Scalable Monetization for a Global News Publisher",
// //     comment:
// //       "Optimized global programmatic operations, driving eCPM growth, higher fill rates, and faster reporting cycles.",
// //   },
// // ];


// //   const [index, setIndex] = useState(0);
// //   const [animate, setAnimate] = useState(true);

// //   const current = cases[index];

// //   /* 🔄 AUTO ROTATION */
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setAnimate(false);
// //       setTimeout(() => {
// //         setIndex((i) => (i + 1) % cases.length);
// //         setAnimate(true);
// //       }, 150);
// //     }, 4000);

// //     return () => clearInterval(timer);
// //   }, [cases.length]);

// //   return (
// //     <div
// //       className="
// //         flex
// //         items-center
// //         justify-center
// //         gap-6
// //         sm:gap-10
// //         lg:gap-15
// //       "
// //     >
// //       {/* LEFT ARROW */}
// //       <button
// //   onClick={() =>
// //     setIndex((index - 1 + cases.length) % cases.length)
// //   }
// //   aria-label="Previous case study"
// //   className="
// //     font-black
// //     text-black
// //     opacity-80
// //     transition-opacity
// //     hover:opacity-100
// //     text-[26px]
// //     sm:text-[32px]
// //     lg:text-[36px]
// //     focus:outline-none
// //     focus:ring-2
// //     focus:ring-black
// //     rotate-180
// //   "
// // >
// //  ➜
// // </button>

// //       {/* CONTENT */}
// //       <div className="max-w-155 text-center px-2 sm:px-0">
// //         <div
// //           className={`
// //             transition-all
// //             duration-500
// //             ease-in-out
// //             ${
// //               animate
// //                 ? "opacity-100 translate-y-0"
// //                 : "opacity-0 translate-y-2"
// //             }
// //           `}
// //         >
// //           <h2
// //             className="
// //               mb-3
// //               font-black
// //               text-black
// //               text-[1.1rem]
// //               sm:text-[1.25rem]
// //               lg:text-[1.4rem]
// //             "
// //           >
// //             {current.title}
// //           </h2>

// //           <p
// //             className="
// //               mb-4
// //               text-black
// //               leading-[1.55]
// //               text-[0.9rem]
// //               sm:text-[0.95rem]
// //               lg:text-[1rem]
// //             "
// //           >
// //             {current.comment}
// //           </p>

// //           {/* READ MORE */}
        

// // <Link
// //   href={`/client-success/${current.slug}`}
// //   className="
// //     inline-block
// //     rounded
// //     border
// //     border-black
// //     bg-[#e6ff3b]
// //     px-4
// //     py-2
// //     font-semibold
// //     text-black
// //     text-[0.75rem]
// //     sm:text-[0.8rem]
// //     transition-colors
// //     hover:bg-[#dfff00]
// //     focus:outline-none
// //     focus:ring-2
// //     focus:ring-black
// //   "
// // >
// //   Read More
// // </Link>
// //         </div>

// //         {/* DOTS */}
// //        {/* DOTS */}
// // <div
// //   className="mt-4 flex items-center justify-center gap-2 sm:gap-3"
// //   role="tablist"
// //   aria-label="Case studies navigation"
// // >
// //   {cases.map((_, i) => (
// //     <button
// //       key={i}
// //       type="button"
// //       aria-label={`Go to case study ${i + 1}`}
// //       aria-current={index === i}
// //       onClick={() => setIndex(i)}
// //       className="
// //         flex items-center justify-center
// //         w-8 h-8
// //         sm:w-9 sm:h-9
// //         focus:outline-none
// //         focus:ring-2
// //         focus:ring-black
// //       "
// //     >
// //       <span
// //         className={`
// //           h-1.75 w-1.75
// //           sm:h-2 sm:w-2
// //           rounded-full
// //           transition-transform transition-opacity duration-300 ease-in-out
// //           ${
// //             index === i
// //               ? "bg-black scale-[1.4]"
// //               : "bg-black/40 hover:bg-black/70"
// //           }
// //         `}
// //       />
// //     </button>
// //   ))}
// // </div>      </div>

// //       {/* RIGHT ARROW */}
// //      <button
// //   type="button"
// //   title="Next"
// //   aria-label="Next case study"
// //   onClick={() =>
// //     setIndex((index + 1) % cases.length)
// //   }
// //   className="
// //     font-black
// //     text-black
// //     opacity-80
// //     transition-opacity
// //     hover:opacity-100
// //     text-[26px]
// //     sm:text-[32px]
// //     lg:text-[36px]
// //     focus:outline-none
// //     focus:ring-2
// //     focus:ring-black
// //   "
// // >
// //  ➜
// // </button>
// //     </div>
// //   );
// // }

// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import DATA from "../../json-data/case-studies.json";

// export default function CaseStudies() {
//   const router = useRouter();

//   // ✅ Pulling from main JSON instead of hardcoded array
//   const cases = Object.entries(DATA).map(([slug, value]) => ({
//     slug,
//     title: value.title,
//     comment:
//       value.subtitle ||
//       value.sections?.[0]?.body?.slice(0, 120) + "...",
//   }));

//   const [index, setIndex] = useState(0);
//   const [animate, setAnimate] = useState(true);

//   const current = cases[index];

//   /* 🔄 AUTO ROTATION */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setAnimate(false);
//       setTimeout(() => {
//         setIndex((i) => (i + 1) % cases.length);
//         setAnimate(true);
//       }, 150);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [cases.length]);

//   return (
//     <div
//       className="
//         flex
//         items-center
//         justify-center
//         gap-6
//         sm:gap-10
//         lg:gap-15
//       "
//     >
//       {/* LEFT ARROW */}
//       <button
//         onClick={() =>
//           setIndex((index - 1 + cases.length) % cases.length)
//         }
//         aria-label="Previous case study"
//         className="
//           font-black
//           text-black
//           opacity-80
//           transition-opacity
//           hover:opacity-100
//           text-[26px]
//           sm:text-[32px]
//           lg:text-[36px]
//           focus:outline-none
//           focus:ring-2
//           focus:ring-black
//           rotate-180
//         "
//       >
//         ➜
//       </button>

//       {/* CONTENT */}
//       <div className="max-w-155 text-center px-2 sm:px-0">
//         <div
//           className={`
//             transition-all
//             duration-500
//             ease-in-out
//             ${
//               animate
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-2"
//             }
//           `}
//         >
//           <h2
//             className="
//               mb-3
//               font-black
//               text-black
//               text-[1.1rem]
//               sm:text-[1.25rem]
//               lg:text-[1.4rem]
//             "
//           >
//             {current.title}
//           </h2>

//           <p
//             className="
//               mb-4
//               text-black
//               leading-[1.55]
//               text-[0.9rem]
//               sm:text-[0.95rem]
//               lg:text-[1rem]
//             "
//           >
//             {current.comment}
//           </p>

//           {/* READ MORE */}
//           <Link
//             href={`/client-success/${current.slug}`}
//             className="
//               inline-block
//               rounded
//               border
//               border-black
//               bg-[#e6ff3b]
//               px-4
//               py-2
//               font-semibold
//               text-black
//               text-[0.75rem]
//               sm:text-[0.8rem]
//               transition-colors
//               hover:bg-[#dfff00]
//               focus:outline-none
//               focus:ring-2
//               focus:ring-black
//             "
//           >
//             Read More
//           </Link>
//         </div>

//         {/* DOTS */}
//         <div
//           className="mt-4 flex items-center justify-center gap-2 sm:gap-3"
//           role="tablist"
//           aria-label="Case studies navigation"
//         >
//           {cases.map((_, i) => (
//             <button
//               key={i}
//               type="button"
//               aria-label={`Go to case study ${i + 1}`}
//               aria-current={index === i}
//               onClick={() => setIndex(i)}
//               className="
//                 flex items-center justify-center
//                 w-8 h-8
//                 sm:w-9 sm:h-9
//                 focus:outline-none
//                 focus:ring-2
//                 focus:ring-black
//               "
//             >
//               <span
//                 className={`
//                   h-1.75 w-1.75
//                   sm:h-2 sm:w-2
//                   rounded-full
//                   transition-transform transition-opacity duration-300 ease-in-out
//                   ${
//                     index === i
//                       ? "bg-black scale-[1.4]"
//                       : "bg-black/40 hover:bg-black/70"
//                   }
//                 `}
//               />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT ARROW */}
//       <button
//         type="button"
//         title="Next"
//         aria-label="Next case study"
//         onClick={() =>
//           setIndex((index + 1) % cases.length)
//         }
//         className="
//           font-black
//           text-black
//           opacity-80
//           transition-opacity
//           hover:opacity-100
//           text-[26px]
//           sm:text-[32px]
//           lg:text-[36px]
//           focus:outline-none
//           focus:ring-2
//           focus:ring-black
//         "
//       >
//         ➜
//       </button>
//     </div>
//   );
// }
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DATA from "../../json-data/case-studies.json";

export default function CaseStudies() {
  const router = useRouter();

  // ✅ Pulling from main JSON array instead of object
  const cases = (DATA as Array<{
    slug: string;
    title: string;
    subtitle?: string;
    sections?: Array<{ heading: string; body?: string }>;
  }>).map((item) => ({
    slug: item.slug,
    title: item.title,
    comment:
      item.subtitle ||
      item.sections?.[0]?.body?.slice(0, 120) + "...",
  }));

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
        lg:gap-15
      "
    >
      {/* LEFT ARROW */}
      <button
        onClick={() =>
          setIndex((index - 1 + cases.length) % cases.length)
        }
        aria-label="Previous case study"
        className="
          font-black
          text-black
          opacity-80
          transition-opacity
          hover:opacity-100
          text-[26px]
          sm:text-[32px]
          lg:text-[36px]
          focus:outline-none
          focus:ring-2
          focus:ring-black
          rotate-180
        "
      >
        ➜
      </button>

      {/* CONTENT */}
      <div className="max-w-155 text-center px-2 sm:px-0">
        <div
          className={`
            transition-all
            duration-500
            ease-in-out
            ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }
          `}
        >
          <h2
            className="
              mb-3
              font-black
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
          <Link
            href={`/client-success/${current.slug}`}
            className="
              inline-block
              rounded
              border
              border-black
              bg-[#e6ff3b]
              px-4
              py-2
              font-semibold
              text-black
              text-[0.75rem]
              sm:text-[0.8rem]
              transition-colors
              hover:bg-[#dfff00]
              focus:outline-none
              focus:ring-2
              focus:ring-black
            "
          >
            Read More
          </Link>
        </div>

        {/* DOTS */}
        <div
          className="mt-4 flex items-center justify-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Case studies navigation"
        >
          {cases.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to case study ${i + 1}`}
              aria-current={index === i}
              onClick={() => setIndex(i)}
              className="
                flex items-center justify-center
                w-8 h-8
                sm:w-9 sm:h-9
                focus:outline-none
                focus:ring-2
                focus:ring-black
              "
            >
              <span
                className={`
                  h-1.75 w-1.75
                  sm:h-2 sm:w-2
                  rounded-full
                  transition-transform transition-opacity duration-300 ease-in-out
                  ${
                    index === i
                      ? "bg-black scale-[1.4]"
                      : "bg-black/40 hover:bg-black/70"
                  }
                `}
              />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT ARROW */}
      <button
        type="button"
        title="Next"
        aria-label="Next case study"
        onClick={() =>
          setIndex((index + 1) % cases.length)
        }
        className="
          font-black
          text-black
          opacity-80
          transition-opacity
          hover:opacity-100
          text-[26px]
          sm:text-[32px]
          lg:text-[36px]
          focus:outline-none
          focus:ring-2
          focus:ring-black
        "
      >
        ➜
      </button>
    </div>
  );
}