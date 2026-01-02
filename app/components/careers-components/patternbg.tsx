// // "use client";

// // export default function PatternBackground() {
// //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// //   return (
// //     <div
// //       className="
// //         relative
     
// //         h-[18vh]
// //         pointer-events-none
// //         opacity-90
// //         bg-repeat
// //         bg-center
// //         mb-[-10%]
        
// //       "
// //       style={{
// //         backgroundImage: `url(${basePath}/images/service-page-images-videos/GrayOutline.svg)`,
// //         backgroundSize: "600px",
// //       }}
// //     />
// //   );
// // }
// "use client";

// export default function PatternBackground() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   return (
//     <div
//       className="
//         relative
//         h-[18vh]
//         pointer-events-none
//         mb-[-10%]
//         bg-repeat
//         bg-center
//         opacity-90
//       "
//       style={{
//         backgroundImage: `url(${basePath}/images/service-page-images-videos/GrayOutline.svg)`,
//         backgroundSize: "600px",

//         /* 🔥 REAL BLEND */
//         WebkitMaskImage:
//           "linear-gradient(to bottom, black 60%, transparent 100%)",
//         maskImage:
//           "linear-gradient(to bottom, black 60%, transparent 100%)",
//       }}
//     />
//   );
// }

// "use client";

// export default function PatternBackground() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   return (
//     <div
//       className="
//         relative
//         pointer-events-none
//         bg-repeat bg-center
//         opacity-90
//         mb-[-10%]

//         h-[12vh]          /* 📱 mobile */
//         sm:h-[14vh]
//         md:h-[16vh]
//         lg:h-[18vh]       /* 💻 desktop */
//       "
//       style={{
//         backgroundImage: `url(${basePath}/images/service-page-images-videos/GrayOutline.svg)`,

//         backgroundSize: "500px", // 📱 default
//         WebkitMaskImage:
//           "linear-gradient(to bottom, black 60%, transparent 100%)",
//         maskImage:
//           "linear-gradient(to bottom, black 60%, transparent 100%)",
//       }}
//     />
//   );
// }
"use client";

export default function PatternBackground() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        absolute
        inset-x-0
        top-0
        h-40
        z-0
        opacity-[0.7]
        bg-repeat
      "
      style={{
        backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
        backgroundSize: "500px",
        backgroundPosition: "top center",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 20%, transparent 85%)",
        maskImage:
          "linear-gradient(to bottom, black 20%, transparent 85%)",
      }}
    />
  );
}
