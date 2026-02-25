
// "use client";

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// export default function CareersHero() {
//   return (
//     <section
//       className="
//         relative flex items-center justify-center overflow-hidden
//         h-[60vh]        /* 📱 mobile */
//         sm:h-[90vh]     /* 💻 tablet & above */
//       "
//     >
//       {/* VIDEO */}
//       <video
//         className="absolute inset-0 h-full w-full object-cover"
//         src={`${basePath}/images/about-page-videos-images/careersvd.mp4`}
//         poster={`${basePath}/images/client-images/careers-img.png`}
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="none"
//       />

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-black/65" />

//       {/* CONTENT */}
//       <div className="relative z-10 px-4 text-center text-white">
//         <h1
//           className="
//             mb-4
//             font-extrabold
//             tracking-wide
//             whitespace-nowrap

//             text-[4rem]
//             max-[1280px]:text-[3.4rem]
//             max-[1024px]:text-[3rem]
//             max-[768px]:text-[2.5rem]
//             max-[480px]:text-[2.1rem]
//           "
//         >
//           CAREERS
//         </h1>

//         <p
//           className="
//             opacity-90
//             text-[1rem]
//             sm:text-[1.05rem]
//             md:text-[1.15rem]
//             lg:text-[1.25rem]
//           "
//         >
         
//         </p>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CareersHero() {
  const [showVideo, setShowVideo] = useState(false);

  // 🔥 Delay video loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
        relative flex items-center justify-center overflow-hidden
        h-[60vh]
        sm:h-[90vh]
      "
    >
      {/* FAST HERO IMAGE (LCP) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${basePath}/images/client-images/careers-img.png)`,
        }}
      />

      {/* VIDEO loads AFTER first paint */}
      {showVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={`${basePath}/images/about-page-videos-images/careersvd.mp4`}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 px-4 text-center text-white">
        <h1
          className="
            mb-4 font-extrabold tracking-wide whitespace-nowrap
            text-[4rem]
            max-[1280px]:text-[3.4rem]
            max-[1024px]:text-[3rem]
            max-[768px]:text-[2.5rem]
            max-[480px]:text-[2.1rem]
          "
        >
          CAREERS
        </h1>
      </div>
    </section>
  );
}