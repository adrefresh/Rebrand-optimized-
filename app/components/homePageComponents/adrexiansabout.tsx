

// // // "use client"

// // // import Image from "next/image";
// // //               import Link from "next/link";

// // // import { useEffect } from "react";
// // // import conference from "@/public/images/HomePageImages/conference-40kb.webp";
// // // import start from "@/public/images/HomePageImages/5stars.png";

// // // export default function About() {
// // // useEffect(() => {
// // //   const els = document.querySelectorAll(".reveal");

// // //   const obs = new IntersectionObserver((entries) => {
// // //     entries.forEach((e) => {
// // //       if (e.isIntersecting) {
// // //         e.target.classList.add("active");
// // //         obs.unobserve(e.target);
// // //       }
// // //     });
// // //   });

// // //   els.forEach((el) => obs.observe(el));

// // //   return () => obs.disconnect();
// // // }, []);

// // //   return (
// // //     <section
// // //       className="
     
// // //         relative
// // //         w-screen
// // //         bg-black
// // //         overflow-hidden
// // //         py-[30px]
// // //       "
// // //     >
// // //       {/* BACKGROUND */}
// // // <div className="absolute inset-0">
// // // <Image
// // //   src={conference}
// // //   alt="AdRefresh Team"
// // //   fill
// // //   priority              // ✅ ADD THIS
// // //   sizes="100vw"
// // //   quality={60}
// // //   className="object-cover grayscale brightness-[0.35]"
// // // />
// // // </div>
// // //       {/* CONTENT WRAPPER */}
// // //       <div className="relative z-10 flex justify-center mt-5md:-mt-[12px]">
// // //         <div className="w-full max-w-[900px] px-4 sm:px-6 text-white mb-[-40px]">
          
// // //           {/* TITLE ROW */}
// // //          <div className="flex items-center justify-start md:justify-center gap-3 sm:gap-4 mb-2">

// // //             <h2
// // //               className="
// // //                 text-[#813DFF]
// // //                 font-[900]
// // //                 tracking-[-2px]
// // //                 text-[2rem]
// // //                 sm:text-[3.2rem]
// // //                 md:text-[4rem]
// // //                 lg:text-[5rem]
// // //                 md:mb-[-2%]
// // //                 md:ml-[50px]
// // //                 text-left
// // //               "
// // //             >
// // //               ADREXIANS
// // //             </h2>
// // // <Image
// // //   src={start}
// // //   alt="stars"
// // //   width={88}        // ✅ Match actual display size
// // //   height={58}
// // //   loading="lazy"
// // // />
// // //           </div>

// // //           {/* WE ARE + CONTENT */}
// // //           <div
// // //             className="
// // //               mx-auto
// // //               grid
// // //               grid-cols-1
// // //               md:grid-cols-[70px_1fr]
// // //               gap-2 md:gap-3
// // //               items-start
// // //               text-center md:text-left
// // //             "
// // //           >
// // //             {/* WE ARE */}
// // //           <div
// // //   className="
// // //     text-white
// // //     font-[900]
// // //     tracking-[1px]
// // //     md:tracking-[6px]

// // //     /* MOBILE — left aligned */
// // //     absolute
// // //     top-[-50px]
// // //     left-4
// // //     text-[2rem]
// // //     text-left
// // //     m-0
// // //     p-0

// // //     /* DESKTOP (unchanged) */
// // //     md:static
// // //     md:flex
// // //     md:justify-center
// // //     md:text-[4.2rem]
// // //     md:[writing-mode:vertical-rl]
// // //     md:rotate-180
// // //     md:ml-[177%]
// // //     whitespace-nowrap
// // //   "
// // // >
// // //   WE ARE
// // // </div>

// // //             {/* TEXT CONTENT */}
// // //             <div className="max-w-[600px] mx-auto">
// // //               <p
// // //                 className="
// // //                 text-left
// // //                   reveal
// // //                       text-[17px]
// // //                   sm:text-[19px]
// // //                   md:text-[16px]
// // //                   lg:text-[20px]
// // //                   leading-[1.7]
// // //                   mb-8
// // //                   ml-0
// // //                   md:ml-[10%]
    
   
// // //                 "
// // //               >
// // //                 AdRefresh is a next-generation digital ad performance management partner, uniting strategy, execution, and intelligent optimization under a single agile powerhouse.  
// // //               </p>

// // //               <p
// // //                 className="
// // //                   reveal
// // //                   text-left
// // //                   text-[17px]
// // //                   sm:text-[19px]
// // //                   md:text-[16px]
// // //                   lg:text-[20px]
// // //                   leading-[1.7]
// // //                   mb-8
// // //                   ml-0
// // //                   md:ml-[10%]
                  
 
// // //                 "
// // //               >
// // //                 Powered by AI-driven workflows and multi-shift teams operating from sunrise through late hours, we ensure your campaigns continuously perform, adapt, and scale without interruption.
// // //               </p>

// // //               {/* CTA */}

// // // <Link href="/about-us">
// // //   <div
// // //     className="
// // //       flex
// // //       items-center
// // //       justify-center md:justify-start
// // //       gap-2
// // //       font-bold
// // //       text-[1.6rem]
// // //       sm:text-[1.8rem]
// // //       md:text-[2.2rem]

// // //       ml-[-40px]        /* MOBILE only */
// // //       md:ml-[15%]

// // //      mb-[40px]
// // //       cursor-pointer
// // //     "
// // //   >
// // //     Discover Our Team
// // //     <span className="animated-arrow">➜</span>
// // //   </div>
// // // </Link>


// // //             </div>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // "use client"

// // import Image from "next/image";
// // import Link from "next/link";

// // import { useEffect } from "react";
// // import conference from "@/public/images/HomePageImages/conference-40kb.webp";
// // import start from "@/public/images/HomePageImages/5stars.png";

// // export default function About() {
// // useEffect(() => {
// //   const els = document.querySelectorAll(".reveal");

// //   const obs = new IntersectionObserver((entries) => {
// //     entries.forEach((e) => {
// //       if (e.isIntersecting) {
// //         e.target.classList.add("active");
// //         obs.unobserve(e.target);
// //       }
// //     });
// //   });

// //   els.forEach((el) => obs.observe(el));

// //   return () => obs.disconnect();
// // }, []);

// //   return (
// //     <section
// //       className="
     
// //         relative
// //         w-screen
// //         bg-black
// //         overflow-hidden
// //         py-[30px]
// //       "
// //     >
// //       {/* BACKGROUND */}
// // <div className="absolute inset-0">
// // <Image
// //   src={conference}
// //   alt="AdRefresh Team"
// //   fill
// //   priority                        // ✅ FIX 1: was loading="lazy" — caused CLS 0.635
// //   sizes="100vw"
// //   quality={60}
// //   className="object-cover grayscale brightness-[0.35]"
// // />
// // </div>
// //       {/* CONTENT WRAPPER */}
// //       <div className="relative z-10 flex justify-center mt-5md:-mt-[12px]">
// //         <div className="w-full max-w-[900px] px-4 sm:px-6 text-white mb-[-40px]">
          
// //           {/* TITLE ROW */}
// //          <div className="flex items-center justify-start md:justify-center gap-3 sm:gap-4 mb-2">

// //             <h2
// //               className="
// //                 text-[#813DFF]
// //                 font-[900]
// //                 tracking-[-2px]
// //                 text-[2rem]
// //                 sm:text-[3.2rem]
// //                 md:text-[4rem]
// //                 lg:text-[5rem]
// //                 md:mb-[-2%]
// //                 md:ml-[50px]
// //                 text-left
// //               "
// //             >
// //               ADREXIANS
// //             </h2>
// // <Image
// //   src={start}
// //   alt="stars"
// //   width={88}                      // ✅ FIX 2: was 120 — actual display size is 88x58
// //   height={58}                     // ✅ FIX 2: was 80 — prevents oversized download
// //   loading="lazy"
// //   className="w-[50px] sm:w-[60px] md:w-[120px] md:h-[80px]"
// // />
// //           </div>

// //           {/* WE ARE + CONTENT */}
// //           <div
// //             className="
// //               mx-auto
// //               grid
// //               grid-cols-1
// //               md:grid-cols-[70px_1fr]
// //               gap-2 md:gap-3
// //               items-start
// //               text-center md:text-left
// //             "
// //           >
// //             {/* WE ARE */}
// //           <div
// //   className="
// //     text-white
// //     font-[900]
// //     tracking-[1px]
// //     md:tracking-[6px]

// //     /* MOBILE — left aligned */
// //     absolute
// //     top-[-50px]
// //     left-4
// //     text-[2rem]
// //     text-left
// //     m-0
// //     p-0

// //     /* DESKTOP (unchanged) */
// //     md:static
// //     md:flex
// //     md:justify-center
// //     md:text-[4.2rem]
// //     md:[writing-mode:vertical-rl]
// //     md:rotate-180
// //     md:ml-[177%]
// //     whitespace-nowrap
// //   "
// // >
// //   WE ARE
// // </div>

// //             {/* TEXT CONTENT */}
// //             <div className="max-w-[600px] mx-auto">
// //               <p
// //                 className="
// //                 text-left
// //                   reveal
// //                       text-[17px]
// //                   sm:text-[19px]
// //                   md:text-[16px]
// //                   lg:text-[20px]
// //                   leading-[1.7]
// //                   mb-8
// //                   ml-0
// //                   md:ml-[10%]
    
   
// //                 "
// //               >
// //                 AdRefresh is a next-generation digital ad performance management partner, uniting strategy, execution, and intelligent optimization under a single agile powerhouse.  
// //               </p>

// //               <p
// //                 className="
// //                   reveal
// //                   text-left
// //                   text-[17px]
// //                   sm:text-[19px]
// //                   md:text-[16px]
// //                   lg:text-[20px]
// //                   leading-[1.7]
// //                   mb-8
// //                   ml-0
// //                   md:ml-[10%]
                  
 
// //                 "
// //               >
// //                 Powered by AI-driven workflows and multi-shift teams operating from sunrise through late hours, we ensure your campaigns continuously perform, adapt, and scale without interruption.
// //               </p>

// //               {/* CTA */}

// // <Link href="/about-us">
// //   <div
// //     className="
// //       flex
// //       items-center
// //       justify-center md:justify-start
// //       gap-2
// //       font-bold
// //       text-[1.6rem]
// //       sm:text-[1.8rem]
// //       md:text-[2.2rem]

// //       ml-[-40px]        /* MOBILE only */
// //       md:ml-[15%]

// //      mb-[40px]
// //       cursor-pointer
// //     "
// //   >
// //     Discover Our Team
// //     <span className="animated-arrow">➜</span>
// //   </div>
// // </Link>


// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client"

// import Image from "next/image";
// import Link from "next/link";

// import { useEffect } from "react";
// import start from "@/public/images/HomePageImages/5stars.png";
// import conference from "@/public/images/HomePageImages/conference-40kb.webp";


// export default function About() {
// useEffect(() => {
//   const els = document.querySelectorAll(".reveal");

//   const obs = new IntersectionObserver((entries) => {
//     entries.forEach((e) => {
//       if (e.isIntersecting) {
//         e.target.classList.add("active");
//         obs.unobserve(e.target);
//       }
//     });
//   });

//   els.forEach((el) => obs.observe(el));

//   return () => obs.disconnect();
// }, []);

//   return (
//     <section
//       className="
     
//         relative
//         w-screen
//         bg-black
//         overflow-hidden
//         py-7.5
//       "
//     >
//       {/* BACKGROUND */}
// <div className="absolute inset-0">
// {/* ✅ FIX CLS: Native img with fetchpriority=high + explicit fill styles
//     Next.js <Image priority> is ignored when unoptimized:true is set in next.config
//     This forces the browser to load this as high priority AND reserves layout space */}
// {/* import Image from "next/image"; */}

// <Image
//   src={conference}
//   alt="AdRefresh Team"
//   priority
//   width={2000}
//   height={1200}
//   style={{
//     position: "absolute",
//     height: "100%",
//     width: "100%",
//     inset: 0,
//     objectFit: "cover",
//     filter: "grayscale(100%) brightness(0.35)",
//   }}
// />
// </div>
//       {/* CONTENT WRAPPER */}
//       <div className="relative z-10 flex justify-center mt-5md:-mt-[12px]">
//         <div className="w-full max-w-225 px-4 sm:px-6 text-white -mb-10">
          
//           {/* TITLE ROW */}
//          <div className="flex items-center justify-start md:justify-center gap-3 sm:gap-4 mb-2">

//             <h2
//               className="
//                 text-[#813DFF]
//                 font-black
//                 tracking-[-2px]
//                 text-[2rem]
//                 sm:text-[3.2rem]
//                 md:text-[4rem]
//                 lg:text-[5rem]
//                 md:mb-[-2%]
//                 md:ml-12.5
//                 text-left
//               "
//             >
//               ADREXIANS
//             </h2>
// <Image
//   src={start}
//   alt="stars"
//   width={88}                      // ✅ FIX 2: was 120 — actual display size is 88x58
//   height={58}                     // ✅ FIX 2: was 80 — prevents oversized download
//   loading="lazy"
//   className="w-12.5 sm:w-15 md:w-30 md:h-20"
// />
//           </div>

//           {/* WE ARE + CONTENT */}
//           <div
//             className="
//               mx-auto
//               grid
//               grid-cols-1
//               md:grid-cols-[70px_1fr]
//               gap-2 md:gap-3
//               items-start
//               text-center md:text-left
//             "
//           >
//             {/* WE ARE */}
//           <div
//   className="
//     text-white
//     font-black
//     tracking-[1px]
//     md:tracking-[6px]

//     /* MOBILE — left aligned */
//     absolute
//     -top-12.5
//     left-4
//     text-[2rem]
//     text-left
//     m-0
//     p-0

//     /* DESKTOP (unchanged) */
//     md:static
//     md:flex
//     md:justify-center
//     md:text-[4.2rem]
//     md:[writing-mode:vertical-rl]
//     md:rotate-180
//     md:ml-[177%]
//     whitespace-nowrap
//   "
// >
//   WE ARE
// </div>

//             {/* TEXT CONTENT */}
//             <div className="max-w-150 mx-auto">
//               <p
//                 className="
//                 text-left
//                   reveal
//                       text-[17px]
//                   sm:text-[19px]
//                   md:text-[16px]
//                   lg:text-[20px]
//                   leading-[1.7]
//                   mb-8
//                   ml-0
//                   md:ml-[10%]
    
   
//                 "
//               >
//                 AdRefresh is a next-generation digital ad performance management partner, uniting strategy, execution, and intelligent optimization under a single agile powerhouse.  
//               </p>

//               <p
//                 className="
//                   reveal
//                   text-left
//                   text-[17px]
//                   sm:text-[19px]
//                   md:text-[16px]
//                   lg:text-[20px]
//                   leading-[1.7]
//                   mb-8
//                   ml-0
//                   md:ml-[10%]
                  
 
//                 "
//               >
//                 Powered by AI-driven workflows and multi-shift teams operating from sunrise through late hours, we ensure your campaigns continuously perform, adapt, and scale without interruption.
//               </p>

//               {/* CTA */}

// <Link href="/about-us">
//   <div
//     className="
//       flex
//       items-center
//       justify-center md:justify-start
//       gap-2
//       font-bold
//       text-[1.6rem]
//       sm:text-[1.8rem]
//       md:text-[2.2rem]

//       -ml-10        /* MOBILE only */
//       md:ml-[15%]

//      mb-10
//       cursor-pointer
//     "
//   >
//     Discover Our Team
//     <span className="animated-arrow">➜</span>
//   </div>
// </Link>


//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
"use client"

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";
import start from "@/public/images/HomePageImages/5stars.png";

// ✅ PERF FIX: Removed `import conference from "..."` — we now use a native <img> tag
// with fetchPriority="high" directly on the element. Next.js <Image priority> is silently
// ignored when unoptimized:true is set in next.config, so the image was loading late
// and causing CLS 0.635. Native img + fetchPriority="high" forces the browser to treat
// this as a high-priority resource, eliminating the layout shift.

export default function About() {
useEffect(() => {
  const els = document.querySelectorAll(".reveal");

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("active");
        obs.unobserve(e.target);
      }
    });
  });

  els.forEach((el) => obs.observe(el));

  return () => obs.disconnect();
}, []);

  return (
    <section
      className="
     
        relative
        w-screen
        bg-black
        overflow-hidden
        py-7.5
      "
    >
      {/* BACKGROUND */}
<div className="absolute inset-0">
{/* ✅ PERF FIX: Native <img> with fetchPriority="high" instead of Next.js <Image priority>
    This is the fix for CLS 0.635. No visual change — same image, same styles. */}
<img
  src="/images/HomePageImages/conference-40kb.webp"
  alt="AdRefresh Team"
  fetchPriority="high"
  decoding="async"
  style={{
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: 0,
    objectFit: "cover",
    filter: "grayscale(100%) brightness(0.35)",
  }}
/>
</div>
      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex justify-center mt-5md:-mt-[12px]">
        <div className="w-full max-w-225 px-4 sm:px-6 text-white -mb-10">
          
          {/* TITLE ROW */}
         <div className="flex items-center justify-start md:justify-center gap-3 sm:gap-4 mb-2">

            <h2
              className="
                text-[#813DFF]
                font-black
                tracking-[-2px]
                text-[2rem]
                sm:text-[3.2rem]
                md:text-[4rem]
                lg:text-[5rem]
                md:mb-[-2%]
                md:ml-12.5
                text-left
              "
            >
              ADREXIANS
            </h2>
<Image
  src={start}
  alt="stars"
  width={88}
  height={58}
  loading="lazy"
  className="w-12.5 sm:w-15 md:w-30 md:h-20"
/>
          </div>

          {/* WE ARE + CONTENT */}
          <div
            className="
              mx-auto
              grid
              grid-cols-1
              md:grid-cols-[70px_1fr]
              gap-2 md:gap-3
              items-start
              text-center md:text-left
            "
          >
            {/* WE ARE */}
          <div
  className="
    text-white
    font-black
    tracking-[1px]
    md:tracking-[6px]

    /* MOBILE — left aligned */
    absolute
    -top-12.5
    left-4
    text-[2rem]
    text-left
    m-0
    p-0

    /* DESKTOP (unchanged) */
    md:static
    md:flex
    md:justify-center
    md:text-[4.2rem]
    md:[writing-mode:vertical-rl]
    md:rotate-180
    md:ml-[177%]
    whitespace-nowrap
  "
>
  WE ARE
</div>

            {/* TEXT CONTENT */}
            <div className="max-w-150 mx-auto">
              <p
                className="
                text-left
                  reveal
                      text-[17px]
                  sm:text-[19px]
                  md:text-[16px]
                  lg:text-[20px]
                  leading-[1.7]
                  mb-8
                  ml-0
                  md:ml-[10%]
    
   
                "
              >
                AdRefresh is a next-generation digital ad performance management partner, uniting strategy, execution, and intelligent optimization under a single agile powerhouse.  
              </p>

              <p
                className="
                  reveal
                  text-left
                  text-[17px]
                  sm:text-[19px]
                  md:text-[16px]
                  lg:text-[20px]
                  leading-[1.7]
                  mb-8
                  ml-0
                  md:ml-[10%]
                  
 
                "
              >
                Powered by AI-driven workflows and multi-shift teams operating from sunrise through late hours, we ensure your campaigns continuously perform, adapt, and scale without interruption.
              </p>

              {/* CTA */}

<Link href="/about-us">
  <div
    className="
      flex
      items-center
      justify-center md:justify-start
      gap-2
      font-bold
      text-[1.6rem]
      sm:text-[1.8rem]
      md:text-[2.2rem]

      -ml-10        /* MOBILE only */
      md:ml-[15%]

     mb-10
      cursor-pointer
    "
  >
    Discover Our Team
    <span className="animated-arrow">➜</span>
  </div>
</Link>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
