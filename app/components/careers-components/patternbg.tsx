
// // "use client";

// // export default function PatternBackground() {
// //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// //   return (
// //     <div
// //       aria-hidden
// //       className="
// //         pointer-events-none
// //         absolute
// //         inset-x-0
// //         top-0
// //         h-40
// //         z-0
// //         opacity-[0.7]
// //         bg-repeat
// //       "
// //       style={{
// //         backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
// //         backgroundSize: "500px",
// //         backgroundPosition: "top center",
// //         WebkitMaskImage:
// //           "linear-gradient(to bottom, black 20%, transparent 85%)",
// //         maskImage:
// //           "linear-gradient(to bottom, black 20%, transparent 85%)",
// //       }}
// //     />
// //   );
// // }
// "use client";

// export default function PatternBackground() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   return (
//     <div
//       aria-hidden
//       className="
//         pointer-events-none
//         absolute
//         inset-0
//         z-0
//       "
//     >
//       {/* PATTERN LAYER */}
//       <div
//         className="absolute inset-0 opacity-[0.35]"
//         style={{
//           backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "top center",
//           backgroundSize: "1120px auto", // 👈 KEY FIX (controls zoom)
//         }}
//       />

//       {/* SOFT FADE */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.15), rgba(255,255,255,0))",
//         }}
//       />
//     </div>
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
        top-0
        left-0
        w-full
        h-[25vh]     /* ✅ EXACT HEIGHT */
        z-0
      
        overflow-hidden
      "
      
    >
      {/* PATTERN LAYER */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "1350px auto",
          marginTop:"-40%"
        }}
      />

      {/* SOFT FADE */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.15), rgba(255,255,255,0))",
        }}
      />
    </div>
  );
}
