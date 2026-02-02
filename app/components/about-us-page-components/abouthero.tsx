
// "use client";

// export default function AboutHero() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   return (
//     <section
//       className="
//         relative
//         flex
//         h-[60vh]              /* 📱 mobile */
//         sm:h-[90vh]           /* 💻 tablet & above */
//         w-full
//         items-center
//         justify-center
//         overflow-hidden
//       "
//     >
//       {/* VIDEO */}
//       <video
//         className="absolute inset-0 h-full w-full object-cover"
//         src={`${basePath}/images/about-page-videos-images/aboutvd.mp4`}
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/65" />

//       {/* CONTENT */}
//       <div
//         className="
//           relative
//           z-10
//           flex
//           flex-col
//           items-center
//           text-center
//           max-w-[900px]
//           px-5
//           text-white
//         "
//       >
//        <h1
//   className="
//     mb-4
//     font-extrabold
//     tracking-wide
//     text-center
//     leading-[1.05]

//     /* font sizes */
//    text-[4rem]
//               max-[1280px]:text-[3.4rem]
//               max-[1024px]:text-[3rem]
//               max-[768px]:text-[2.5rem]
//               max-[480px]:text-[2.1rem]

//     /* wrapping behavior */
//     whitespace-normal
//     lg:whitespace-nowrap

//   "
// >
//   ABOUT ADREFRESH
// </h1>


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

import { useState } from "react";

export default function AboutHero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      className="
        relative
        flex
        h-[60vh]              /* 📱 mobile */
        sm:h-[90vh]           /* 💻 tablet & above */
        w-full
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* ================= VIDEO + SKELETON ================= */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* ✅ DARK SKELETON (NO WHITE FLASH) */}
        {!videoLoaded && (
          <div
            className="
              absolute inset-0
              bg-black
              bg-cover bg-center
              animate-pulse
            "
            style={{
              backgroundImage: `url(${basePath}/images/about-page-videos-images/office-poster.jpg)`,
            }}
          />
        )}

        {/* 🎥 VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={`${basePath}/images/client-images/turningdata.JPG`}
          onCanPlayThrough={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={`${basePath}/images/about-page-videos-images/aboutvd.mp4`}
            type="video/mp4"
          />
        </video>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
          max-w-[900px]
          px-5
          text-white
        "
      >
        <h1
          className="
            mb-4
            font-extrabold
            tracking-wide
            text-center
            leading-[1.05]

            text-[4rem]
            max-[1280px]:text-[3.4rem]
            max-[1024px]:text-[3rem]
            max-[768px]:text-[2.5rem]
            max-[480px]:text-[2.1rem]

            whitespace-normal
            lg:whitespace-nowrap
          "
        >
          ABOUT ADREFRESH
        </h1>

 
      </div>
    </section>
  );
}