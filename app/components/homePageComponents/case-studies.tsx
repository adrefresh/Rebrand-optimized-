// // "use client";

// // import { useState } from "react";

// // export default function CaseStudies() {
// //   const cases = [
// //     {
// //       title: "Increasing ROAS for a Global Retail Brand",
// //       comment:
// //         "The AdRefresh team delivered exceptional performance improvements. Their structured approach helped us scale effectively.",
// //       author: "JOSEPH",
// //     },
// //     {
// //       title: "Scaling Paid Ads for an E-Commerce Startup",
// //       comment:
// //         "Brilliant execution and communication. They aligned perfectly with our workflow and accelerated growth.",
// //       author: "PRIYA",
// //     },
// //     {
// //       title: "Performance Transformation for a SaaS Platform",
// //       comment:
// //         "True experts! They resolved bottlenecks quickly and delivered consistent progress week after week.",
// //       author: "MARCUS",
// //     },
// //   ];

// //   const [index, setIndex] = useState(0);
// //   const current = cases[index];

// //   return (
// //     <div className="flex items-center justify-center gap-[60px] max-[768px]:gap-[20px]">
// //       {/* LEFT ARROW */}
// //       <button
// //         onClick={() => setIndex((index - 1 + cases.length) % cases.length)}
// //         className="
// //           text-[36px]
// //           font-[900]
// //           text-black
// //           opacity-80
// //           transition
// //           hover:opacity-100
// //         "
// //       >
// //         ←
// //       </button>

// //       {/* CONTENT */}
// //       <div className="max-w-[620px] text-center">
// //         <h2
// //           className="
// //             mb-[14px]
// //             text-[22px]
// //             font-[900]
// //             text-black
// //           "
// //         >
// //           {current.title}
// //         </h2>

// //         <p
// //           className="
// //             mb-[18px]
// //             text-[15px]
// //             leading-[1.5]
// //             text-black
// //           "
// //         >
// //           {current.comment}
// //         </p>

// //         <p
// //           className="
// //             mb-[14px]
// //             text-[14px]
// //             font-[700]
// //             tracking-wide
// //             text-black
// //           "
// //         >
// //           {current.author}
// //         </p>

// //         <button
// //           className="
// //             rounded-[4px]
// //             border
// //             border-black
// //             bg-[#e6ff3b]
// //             px-[18px]
// //             py-[8px]
// //             text-[13px]
// //             font-[600]
// //             text-black
// //           "
// //         >
// //           Read More
// //         </button>
// //       </div>

// //       {/* RIGHT ARROW */}
// //       <button
// //         onClick={() => setIndex((index + 1) % cases.length)}
// //         className="
// //           text-[36px]
// //           font-[900]
// //           text-black
// //           opacity-80
// //           transition
// //           hover:opacity-100
// //         "
// //       >
// //         →
// //       </button>
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";

// export default function CaseStudies() {
//   const cases = [
//     {
//       title: "Increasing ROAS for a Global Retail Brand",
//       comment:
//         "The AdRefresh team delivered exceptional performance improvements. Their structured approach helped us scale effectively.",
//       author: "JOSEPH",
//     },
//     {
//       title: "Scaling Paid Ads for an E-Commerce Startup",
//       comment:
//         "Brilliant execution and communication. They aligned perfectly with our workflow and accelerated growth.",
//       author: "PRIYA",
//     },
//     {
//       title: "Performance Transformation for a SaaS Platform",
//       comment:
//         "True experts! They resolved bottlenecks quickly and delivered consistent progress week after week.",
//       author: "MARCUS",
//     },
//   ];

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
//     <div className="flex items-center justify-center gap-[60px] max-[768px]:gap-[20px]">
//       {/* LEFT ARROW */}
//       <button
//         onClick={() => setIndex((index - 1 + cases.length) % cases.length)}
//         className="
//           text-[36px]
//           font-[900]
//           text-black
//           opacity-80
//           transition
//           hover:opacity-100
//         "
//       >
//         ←
//       </button>

//       {/* CONTENT */}
//       <div
//         className={`
//           max-w-[620px]
//           text-center
//           transition-all
//           duration-500
//           ease-in-out
//           ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[8px]"}
//         `}
//       >
//         <h2
//           className="
//             mb-[14px]
//             text-[22px]
//             font-[900]
//             text-black
//           "
//         >
//           {current.title}
//         </h2>

//         <p
//           className="
//             mb-[18px]
//             text-[15px]
//             leading-[1.5]
//             text-black
//           "
//         >
//           {current.comment}
//         </p>

//         <p
//           className="
//             mb-[14px]
//             text-[14px]
//             font-[700]
//             tracking-wide
//             text-black
//           "
//         >
//           {current.author}
//         </p>

//         <button
//           className="
//             rounded-[4px]
//             border
//             border-black
//             bg-[#e6ff3b]
//             px-[18px]
//             py-[8px]
//             text-[13px]
//             font-[600]
//             text-black
//           "
//         >
//           Read More
//         </button>
//       </div>

//       {/* RIGHT ARROW */}
//       <button
//         onClick={() => setIndex((index + 1) % cases.length)}
//         className="
//           text-[36px]
//           font-[900]
//           text-black
//           opacity-80
//           transition
//           hover:opacity-100
//         "
//       >
//         →
//       </button>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

export default function CaseStudies() {
  const cases = [
    {
      title: "Increasing ROAS for a Global Retail Brand",
      comment:
        "The AdRefresh team delivered exceptional performance improvements. Their structured approach helped us scale effectively.",
      author: "JOSEPH",
    },
    {
      title: "Scaling Paid Ads for an E-Commerce Startup",
      comment:
        "Brilliant execution and communication. They aligned perfectly with our workflow and accelerated growth.",
      author: "PRIYA",
    },
    {
      title: "Performance Transformation for a SaaS Platform",
      comment:
        "True experts! They resolved bottlenecks quickly and delivered consistent progress week after week.",
      author: "MARCUS",
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
    <div className="flex items-center justify-center gap-[60px] max-[768px]:gap-[20px]">
      {/* LEFT ARROW */}
      <button
        onClick={() => setIndex((index - 1 + cases.length) % cases.length)}
        className="
          text-[36px]
          font-[900]
          text-black
          opacity-80
          transition
          hover:opacity-100
        "
      >
        ←
      </button>

      {/* CONTENT */}
      <div className="max-w-[620px] text-center">
        <div
          className={`
            transition-all
            duration-500
            ease-in-out
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[8px]"}
          `}
        >
          <h2 className="mb-[14px] text-[22px] font-[900] text-black">
            {current.title}
          </h2>

          <p className="mb-[18px] text-[15px] leading-[1.5] text-black">
            {current.comment}
          </p>

          <p className="mb-[14px] text-[14px] font-[700] tracking-wide text-black">
            {current.author}
          </p>

          <button
            className="
              rounded-[4px]
              border
              border-black
              bg-[#e6ff3b]
              px-[18px]
              py-[8px]
              text-[13px]
              font-[600]
              text-black
            "
          >
            Read More
          </button>
        </div>

        {/* DOTS */}
        <div className="mt-[18px] flex items-center justify-center gap-[10px]">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                h-[8px] w-[8px] rounded-full
                transition-all duration-300 ease-in-out
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
        onClick={() => setIndex((index + 1) % cases.length)}
        className="
          text-[36px]
          font-[900]
          text-black
          opacity-80
          transition
          hover:opacity-100
        "
      >
        →
      </button>
    </div>
  );
}
