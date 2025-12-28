// "use client";

// export default function PatternBackground() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   return (
//     <div
//       className="
//         relative
     
//         h-[18vh]
//         pointer-events-none
//         opacity-90
//         bg-repeat
//         bg-center
//         mb-[-10%]
        
//       "
//       style={{
//         backgroundImage: `url(${basePath}/images/service-page-images-videos/GrayOutline.svg)`,
//         backgroundSize: "600px",
//       }}
//     />
//   );
// }
"use client";

export default function PatternBackground() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div
      className="
        relative
        h-[18vh]
        pointer-events-none
        mb-[-10%]
        bg-repeat
        bg-center
        opacity-90
      "
      style={{
        backgroundImage: `url(${basePath}/images/service-page-images-videos/GrayOutline.svg)`,
        backgroundSize: "600px",

        /* 🔥 REAL BLEND */
        WebkitMaskImage:
          "linear-gradient(to bottom, black 60%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, black 60%, transparent 100%)",
      }}
    />
  );
}
