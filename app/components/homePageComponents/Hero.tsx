
// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { FaAngleDoubleDown } from "react-icons/fa";

// // // export default function Hero() {
// // //   // const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// // //   const [videoLoaded, setVideoLoaded] = useState(false);

// // //   const scrollToNext = () => {
// // //     window.scrollBy({
// // //       top: 600,
// // //       behavior: "smooth",
// // //     });
// // //   };

// // //   useEffect(() => {
// // //     // Observer kept for other sections if needed later
// // //     const observer = new IntersectionObserver(
// // //       (entries) =>
// // //         entries.forEach(
// // //           (e) => e.isIntersecting && e.target.classList.add("show")
// // //         ),
// // //       { threshold: 0.3 }
// // //     );

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   return (
// // //     <section
// // //       className="
// // //         relative
// // //         w-screen
// // //         overflow-hidden
// // //         bg-black

// // //         h-[100dvh]
// // //         [@media(min-width:768px)_and_(max-width:1023px)]:h-[85vh]
// // //         lg:h-[100vh]
// // //       "
// // //     >
// // //       {/* ================= VIDEO + SKELETON LAYER ================= */}
// // //       <div className="absolute inset-0 z-0 bg-black">
// // //         {/* DARK SKELETON (NO WHITE FLASH) */}
// // //         {!videoLoaded && (
// // //           <div
// // //             className="
// // //               absolute inset-0
// // //               bg-black
// // //               bg-cover bg-center
// // //               animate-pulse
// // //             "
// // //             style={{
// // //               backgroundImage: `url(/images/client-images/hero-img.png)`,
// // //             }}
// // //           />
// // //         )}

// // //         {/* VIDEO */}
// // //          <video
// // //           autoPlay
// // //           muted
// // //           loop
// // //           playsInline
// // //           preload="none"
// // //           poster={`/images/client-images/hero-img.png`}
// // //           onCanPlayThrough={() => setVideoLoaded(true)}
// // //           className="absolute inset-0 w-full h-full object-cover"
// // //         >
// // //           <source
// // //             src={`/images/about-page-videos-images/office-compressed.mp4`}
// // //             type="video/mp4"
// // //           />
// // //         </video>
// // //       </div>

// // //       {/* DARK OVERLAY (UNCHANGED) */}
// // //       <div className="absolute inset-0 z-[1]" />

// // //       {/* ================= CONTENT ================= */}
// // //       <main
// // //         className="
// // //           relative z-10
// // //           flex h-full
// // //           max-w-7xl
// // //           mx-auto
// // //           flex-col
// // //           items-start
// // //           justify-start
// // //           px-2 sm:px-4
// // //           text-left

// // //           pt-35
// // //           md:pt-18
// // //           lg:pt-38
// // //         "
// // //       >
// // //         {/* TITLE — INSTANT, NEVER BLOCKED */}
// // //         <h1
// // //           className="
// // //             hero-title
// // //             reveal
// // //             show

// // //             w-full
// // //             text-left

// // //             text-[1.8rem]
// // //             sm:text-[2.2rem]
// // //             md:text-[4rem]
// // //             lg:text-[5rem]
// // //             xl:text-[6rem]

// // //             mt-[-50px]
// // //             sm:mt-4

// // //             font-bold
// // //             tracking-tight
// // //             leading-tight
// // //             text-white

// // //             translate-y-0
// // //             xl:translate-y-8
// // //           "
// // //         >
// // //           YOUR REMOTE TEAM <br />
// // //           THAT FEELS ON SITE
// // //         </h1>
// // //       </main>

// // //       {/* SCROLL BUTTON */}
// // //       <button
// // //         onClick={scrollToNext}
// // //         className="
// // //           absolute
// // //           left-1/2
// // //           -translate-x-1/2
// // //           bottom-6
// // //           z-20
// // //           opacity-90
// // //           animate-bounce

// // //           hidden
// // //           lg:block
// // //         "
// // //         aria-label="Scroll to next section"
// // //       >
// // //         <FaAngleDoubleDown size={42} color="white" />
// // //       </button>

// // //       {/* ================= SAFETY CSS ================= */}
// // //       <style>{`
// // //         /* FORCE HERO TITLE TO ALWAYS SHOW (NO HYDRATION RACE) */
// // //         .hero-title {
// // //           opacity: 1 !important;
// // //           visibility: visible !important;
// // //         }

// // //         @media (max-width: 639px) {
// // //           .hero-title {
// // //             font-size: 2rem;
// // //             margin-top: -100px;
// // //             text-align: left;
// // //           }
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // }
// // "use client";

// // import { FaAngleDoubleDown } from "react-icons/fa";

// // // ✅ No useState for videoLoaded — removes a render cycle that delayed LCP
// // // ✅ No useEffect needed — observer was unused
// // // ✅ poster image acts as the instant visual while video loads

// // export default function Hero() {
// //   const scrollToNext = () => {
// //     window.scrollBy({ top: 600, behavior: "smooth" });
// //   };

// //   return (
// //     <section className="relative w-screen overflow-hidden bg-black h-[100dvh] [@media(min-width:768px)_and_(max-width:1023px)]:h-[85vh] lg:h-[100vh]">

// //       {/* ===== VIDEO LAYER ===== */}
// //       {/* ✅ preload="metadata" instead of "none" — browser gets duration/dimensions
// //               immediately, preventing layout shift. Audio is muted so autoplay works. */}
// //       {/* ✅ Removed skeleton/pulse div — poster attr handles the placeholder natively,
// //               zero extra DOM, zero CLS, no useState re-render */}
// //       <div className="absolute inset-0 z-0 bg-black">
     
// // <video
// //   autoPlay
// //   muted
// //   loop
// //   playsInline
// //   preload="none"        // ✅ Change from "metadata" to "none" — stops blocking LCP
// //   poster="/images/client-images/hero-img.png"
// //   className="absolute inset-0 w-full h-full object-cover"
// //   width={1920}
// //   height={1080}
// // ></video>
// //       </div>

// //       {/* DARK OVERLAY */}
// //       <div className="absolute inset-0 z-[1]" />

// //       {/* ===== CONTENT ===== */}
// //       {/* ✅ Changed <main> to <div> — having two <main> tags (layout + hero) is invalid HTML
// //               and Lighthouse deducts accessibility points for it */}
// //       <div className="relative z-10 flex h-full max-w-7xl mx-auto flex-col items-start justify-start px-2 sm:px-24text-left pt-35 md:pt-18 lg:pt-38">
// //         {/* ✅ Removed reveal/show classes + inline style override — they were fighting
// //                 each other (opacity:0 then forced to 1 with !important). Clean render now. */}
// //         <h1 className="w-full text-left text-[1.8rem] sm:text-[2.2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] mt-[-100px] sm:mt-4 font-bold tracking-tight leading-tight text-white xl:translate-y-8">
// //           YOUR REMOTE TEAM <br />
// //           THAT FEELS ON SITE
// //         </h1>
// //       </div>

// //       {/* SCROLL BUTTON */}
// //       <button
// //         onClick={scrollToNext}
// //         className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 opacity-90 animate-bounce hidden lg:block"
// //         aria-label="Scroll to next section"
// //       >
// //         <FaAngleDoubleDown size={42} color="white" />
// //       </button>

// //       {/* ✅ Removed <style> tag entirely — hero-title override is no longer needed */}
// //     </section>
// //   );
// // }

// "use client";

// import { FaAngleDoubleDown } from "react-icons/fa";

// export default function Hero() {
//   const scrollToNext = () => {
//     window.scrollBy({ top: 600, behavior: "smooth" });
//   };

//   return (
//     <section className="relative w-screen overflow-hidden bg-black h-[100dvh] [@media(min-width:768px)_and_(max-width:1023px)]:h-[85vh] lg:h-[100vh]">

//       {/* ===== VIDEO LAYER ===== */}
//       <div className="absolute inset-0 z-0 bg-black">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="none"                  // ✅ FIX: was "metadata" — stops video blocking LCP paint
//           poster="/images/client-images/hero-img.png"
//           className="absolute inset-0 w-full h-full object-cover"
//           width={1920}
//           height={1080}
//         >
//           <source
//             src="/images/about-page-videos-images/office-compressed.mp4"
//             type="video/mp4"
//           />
//         </video>
//       </div>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 z-[1]" />

//       {/* ===== CONTENT ===== */}
//       <div className="relative z-10 flex h-full max-w-7xl mx-auto flex-col items-start justify-start px-2 sm:px-24text-left pt-35 md:pt-18 lg:pt-38">
//         <h1 className="w-full text-left text-[1.8rem] sm:text-[2.2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] mt-[-100px] sm:mt-4 font-bold tracking-tight leading-tight text-white xl:translate-y-8">
//           YOUR REMOTE TEAM <br />
//           THAT FEELS ON SITE
//         </h1>
//       </div>

//       {/* SCROLL BUTTON */}
//       <button
//         onClick={scrollToNext}
//         className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 opacity-90 animate-bounce hidden lg:block"
//         aria-label="Scroll to next section"
//       >
//         <FaAngleDoubleDown size={42} color="white" />
//       </button>

//     </section>
//   );
// }
"use client";

import { FaAngleDoubleDown } from "react-icons/fa";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollBy({ top: 600, behavior: "smooth" });
  };

  return (
    <section className="relative w-screen overflow-hidden bg-black h-[100dvh] [@media(min-width:768px)_and_(max-width:1023px)]:h-[85vh] lg:h-[100vh]">

      {/* ===== VIDEO LAYER ===== */}
      <div className="absolute inset-0 z-0 bg-black">
        {/*
          ✅ FIX 1: poster="/images/client-images/hero-img.png"
             The poster is preloaded in layout.tsx <head> so it paints immediately,
             meaning users see the image instantly while the 2MB video loads in background.

          ✅ FIX 2: preload="none"
             Stops the browser from fetching any part of the video during initial load.
             The video only starts downloading after the page is interactive.
             This alone saves ~2,066 KiB from the critical path.

          ✅ FIX 3: width/height on <video>
             Reserves the layout space so nothing shifts when video loads (helps CLS).
        */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/client-images/hero-img.png"
          className="absolute inset-0 w-full h-full object-cover"
          width={1280}
          height={720}
        >
          <source
            src="/images/about-page-videos-images/office-compressed.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-[1]" />

      {/* ===== CONTENT ===== */}
   <div className="relative z-10 flex h-full max-w-7xl mx-auto flex-col items-start justify-start px-4 sm:px-6 md:px-10 lg:px-0 text-left pt-35 md:pt-18 lg:pt-38">
  <h1 className="w-full text-[1.8rem] sm:text-[2.2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] mt-[-100px] sm:mt-4 font-bold tracking-tight leading-tight text-white xl:translate-y-8">
    YOUR REMOTE TEAM <br />
    THAT FEELS ON SITE
  </h1>
</div>
      {/* SCROLL BUTTON */}
      <button
        onClick={scrollToNext}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 opacity-90 animate-bounce hidden lg:block"
        aria-label="Scroll to next section"
      >
        <FaAngleDoubleDown size={42} color="white" />
      </button>

    </section>
  );
}
