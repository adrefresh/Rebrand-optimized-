

// // "use client";

// // export default function PathSection() {
// //   const steps = [
// //     {
// //       title: "Step Into the AdRefresh Journey",
// //       desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
// //       colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
// //       bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
// //     },
// //     {
// //       title: "Discover Your Strength",
// //       desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact.",
// //       colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
// //       bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
// //     },
// //     {
// //       title: "Grow, Learn, and Build With Us",
// //       desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration.",
// //       colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
// //       bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
// //     },
// //     {
// //       title: "Your impact starts here",
// //       desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with.",
// //       colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
// //       bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
// //     },
// //     {
// //       title: "Hello Adrexian!",
// //       desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins.",
// //       colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
// //       bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
// //     },
// //   ];

// //   return (
// //     <section className="bg-white py-16 sm:py-24 mb-[-10%]">
// //       <h2 className="mb-12 sm:mb-20 text-center text-[2.4rem] sm:text-[clamp(3rem,6vw,5rem)] font-extrabold">
// //         The Path of an <span className="text-[var(--purple-30)]">ADREXIAN</span>
// //       </h2>

// //       <div className="relative mx-auto max-w-[1200px] px-4 sm:px-0">
// //         {/* DESKTOP CENTER LINE */}
// //         <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-black lg:block" />

// //         {/* MOBILE LINE */}
// //         <div className="absolute left-5 top-0 h-full w-[2px] bg-black lg:hidden" />

// //         {steps.map((step, i) => (
// //           <div
// //             key={i}
// //             className="
// //               relative mb-14

// //               lg:mb-[100px]
// //               lg:grid lg:grid-cols-[1fr_80px_1fr] lg:items-center
// //             "
// //           >
// //             {/* ================= MOBILE CONTENT ================= */}
// //             <div className="lg:hidden pl-10">
// //               {/* DOT */}
// //              <span className="
// //   absolute
// //   left-[0px]          /* 📱 mobile */
// //   lg:left-[18px]       /* 💻 desktop (unchanged) */
// //   top-[4px]
// //   flex h-7 w-7
// //   items-center justify-center
// //   rounded-full
// //   border-2 border-black
// //   bg-white
// //   text-[3.25rem]  font-bold
// // ">
// //   {i + 1}
// // </span>


// //               {/* TITLE */}
// //               <h3 className="text-[1.25rem] font-extrabold mb-2">
// //                 {step.title}
// //               </h3>

// //               {/* DESC */}
// //               <p className="text-[0.95rem] leading-[1.6] text-gray-600 mb-4">
// //                 {step.desc}
// //               </p>

// //               {/* IMAGE (SMALL, RIGHT-ALIGNED) */}
// //               <img
// //                 src={step.colorImg}
// //                 alt=""
// //                 loading="lazy"
// //                 className="ml-auto h-[120px] w-[200px] rounded-[10px] object-cover shadow-[0_10px_24px_rgba(0,0,0,0.15)]"
// //               />
// //             </div>

// //             {/* ================= DESKTOP LEFT ================= */}
// //             <div className="hidden lg:block pr-12 text-right">
// //               <h3 className="text-[48px] font-extrabold mb-2">
// //                 {step.title}
// //               </h3>
// //               <p className="text-[24px] leading-[1.6] text-gray-600 max-w-[420px] ml-auto">
// //                 {step.desc}
// //               </p>
// //             </div>

// //             {/* ================= DESKTOP DOT ================= */}
// //             <div className="hidden lg:flex z-10 h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-black bg-white font-extrabold text-[1.3rem]">
// //               {i + 1}
// //             </div>

// //             {/* ================= DESKTOP IMAGES ================= */}
// //             <div className="hidden lg:block relative ml-auto mr-[10%] h-[180px] w-[260px]">
// //               <img
// //                 src={step.bwImg}
// //                 alt=""
// //                 loading="lazy"
// //                 className="absolute left-[-200px] top-0 h-[180px] w-[280px] rounded-[10px] object-cover grayscale shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
// //               />

// //               <img
// //                 src={step.colorImg}
// //                 alt=""
// //                 loading="lazy"
// //                 className="absolute left-0 bottom-[-70px] z-[4] h-[180px] w-[280px] rounded-[10px] object-cover shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // "use client";

// // import { useEffect } from "react";

// // export default function PathSection() {
// //   const steps = [
// //     {
// //       title: "Step Into the AdRefresh Journey",
// //       desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
// //       colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
// //       bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
// //     },
// //     {
// //       title: "Discover Your Strength",
// //       desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact.",
// //       colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
// //       bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
// //     },
// //     {
// //       title: "Grow, Learn, and Build With Us",
// //       desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration.",
// //       colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
// //       bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
// //     },
// //     {
// //       title: "Your impact starts here",
// //       desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with.",
// //       colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
// //       bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
// //     },
// //     {
// //       title: "Hello Adrexian!",
// //       desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins.",
// //       colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
// //       bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
// //     },
// //   ];

// //   /* ================= SCROLL ANIMATION ================= */
// //   useEffect(() => {
// //     const items = document.querySelectorAll(".timeline-item");
// //     const lines = document.querySelectorAll(".timeline-line");

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add("is-visible");
// //           }
// //         });
// //       },
// //       { threshold: 0.3 }
// //     );

// //     items.forEach((el) => observer.observe(el));
// //     lines.forEach((el) => observer.observe(el));

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section className="bg-white py-16 sm:py-24 mb-[-10%]">
// //       {/* ✅ FIXED HEADING (NO clamp) */}
// //       <h2 className="mb-12 sm:mb-20 text-center text-[2.4rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-extrabold">
// //         The Path of an <span className="text-[var(--purple-30)]">ADREXIAN</span>
// //       </h2>

// //       <div className="relative mx-auto max-w-[1200px] px-4 sm:px-0">
// //         {/* DESKTOP LINE */}
// //         <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-black/30 lg:block">
// //           <div className="timeline-line h-full w-full origin-top scale-y-0 bg-black" />
// //         </div>

// //         {/* MOBILE LINE */}
// //         <div className="absolute left-5 top-0 h-full w-[2px] bg-black/30 lg:hidden">
// //           <div className="timeline-line h-full w-full origin-top scale-y-0 bg-black" />
// //         </div>

// //         {steps.map((step, i) => (
// //           <div
// //             key={i}
// //             className="
// //               timeline-item
// //               relative mb-14
// //               opacity-0 translate-y-6
// //               transition-all duration-[900ms] ease-in-out
// //               lg:mb-[100px]
// //               lg:grid lg:grid-cols-[1fr_80px_1fr] lg:items-center
// //             "
// //           >
// //             {/* MOBILE */}
// //             <div className="lg:hidden pl-10">
// //               <span
// //                 className="
// //                   absolute left-[0px] top-[4px]
// //                   flex h-7 w-7 items-center justify-center
// //                   rounded-full border-2 border-black bg-white
// //                   text-[3.25rem] font-bold
// //                   scale-0 transition-transform duration-[800ms] ease-in-out
// //                 "
// //               >
// //                 {i + 1}
// //               </span>

// //               <h3 className="text-[1.25rem] font-extrabold mb-2">
// //                 {step.title}
// //               </h3>

// //               <p className="text-[0.95rem] leading-[1.6] text-gray-600 mb-4">
// //                 {step.desc}
// //               </p>

// //               <img
// //                 src={step.colorImg}
// //                 loading="lazy"
// //                 className="ml-auto h-[120px] w-[200px] rounded-[10px] object-cover shadow-lg"
// //               />
// //             </div>

// //             {/* DESKTOP LEFT */}
// //             <div className="hidden lg:block pr-12 text-right">
// //               <h3 className="text-[48px] font-extrabold mb-2">
// //                 {step.title}
// //               </h3>
// //               <p className="text-[24px] leading-[1.6] text-gray-600 max-w-[420px] ml-auto">
// //                 {step.desc}
// //               </p>
// //             </div>

// //             {/* DESKTOP DOT */}
// //             <div
// //               className="
// //                 hidden lg:flex z-10 h-[72px] w-[72px]
// //                 items-center justify-center rounded-full
// //                 border-[3px] border-black bg-white
// //                 font-extrabold text-[1.3rem]
// //                 scale-0 transition-transform duration-[800ms] ease-in-out
// //               "
// //             >
// //               {i + 1}
// //             </div>

// //             {/* DESKTOP IMAGES */}
// //             <div className="hidden lg:block relative ml-auto mr-[10%] h-[180px] w-[260px]">
// //               <img
// //                 src={step.bwImg}
// //                 loading="lazy"
// //                 className="absolute left-[-200px] top-0 h-[180px] w-[280px] rounded-[10px] object-cover grayscale shadow-lg"
// //               />
// //               <img
// //                 src={step.colorImg}
// //                 loading="lazy"
// //                 className="absolute left-0 bottom-[-70px] h-[180px] w-[280px] rounded-[10px] object-cover shadow-lg"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* GLOBAL ANIMATION */}
// //       <style jsx global>{`
// //         .timeline-item.is-visible {
// //           opacity: 1;
// //           transform: translateY(0);
// //         }

// //         .timeline-item.is-visible span,
// //         .timeline-item.is-visible .lg\\:flex {
// //           transform: scale(1);
// //         }

// //         .timeline-line.is-visible {
// //           transform: scaleY(1);
// //           transition: transform 2.2s ease-in-out;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// // "use client";

// // import { useEffect, useRef } from "react";

// // export default function PathSection() {
// //   const lineRef = useRef<HTMLDivElement | null>(null);

// //   const steps = [
// //     {
// //       title: "Step Into the AdRefresh Journey",
// //       desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
// //       colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
// //       bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
// //     },
// //     {
// //       title: "Discover Your Strength",
// //       desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact.",
// //       colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
// //       bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
// //     },
// //     {
// //       title: "Grow, Learn, and Build With Us",
// //       desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration.",
// //       colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
// //       bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
// //     },
// //     {
// //       title: "Your impact starts here",
// //       desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with.",
// //       colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
// //       bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
// //     },
// //     {
// //       title: "Hello Adrexian!",
// //       desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins.",
// //       colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
// //       bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
// //     },
// //   ];
// //   /* ================= LINE SCROLL ANIMATION ================= */
// //   useEffect(() => {
// //     const onScroll = () => {
// //       if (!lineRef.current) return;

// //       const section = lineRef.current.closest("section")!;
// //       const rect = section.getBoundingClientRect();
// //       const windowHeight = window.innerHeight;

// //       const progress =
// //         1 -
// //         Math.min(
// //           Math.max(rect.bottom / (rect.height + windowHeight), 0),
// //           1
// //         );

// //       lineRef.current.style.transform = `scaleY(${progress})`;
// //     };

// //     window.addEventListener("scroll", onScroll);
// //     onScroll();

// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   /* ================= CONTENT FADE ================= */
// //   useEffect(() => {
// //     const items = document.querySelectorAll(".timeline-item");

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((e) => {
// //           if (e.isIntersecting) e.target.classList.add("show");
// //         });
// //       },
// //       { threshold: 0.3 }
// //     );

// //     items.forEach((el) => observer.observe(el));
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section className="relative bg-white py-18">
// //       <div className="relative mx-auto max-w-7xl">
// //         {/* CENTER LINE */}
// //         <div className="absolute left-1/2 top-10 h-full w-[2px] -translate-x-1/2 bg-black/20">
// //           <div
// //             ref={lineRef}
// //             className="h-full w-full origin-top bg-black transition-transform duration-100 ease-in-out"
// //             style={{ transform: "scaleY(0)" }}
// //           />
// //         </div>

// //         {/* STEPS */}
// //         <div className="space-y-[150px]">
// //           {steps.map((step, i) => (
// //             <div
// //               key={i}
// //               className="timeline-item relative grid grid-cols-[1fr_120px_1fr] items-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
// //             >
// //               {/* LEFT CONTENT */}
// //               <div className="pr-16 text-right">
// //                 <h3 className="text-[42px] font-extrabold leading-tight mb-4">
// //                   {step.title}
// //                 </h3>
// //                 <p className="text-[18px] leading-[1.6] text-gray-600 max-w-md ml-auto">
// //                   {step.desc}
// //                 </p>
// //               </div>

// //               {/* CENTER DOT */}
// //               <div className="flex justify-center">
// //                 <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-white font-bold text-lg">
// //                   {i + 1}
// //                 </div>
// //               </div>

// //               {/* RIGHT IMAGES */}
// //               <div className="relative pl-16 mt-[-200px]">
// //                 <img
// //                   src={step.bwImg}
// //                   alt=""
// //                   className="absolute left-0 top-0 h-[160px] w-[260px] rounded-xl object-cover grayscale shadow-lg"
// //                 />
// //                 <img
// //                   src={step.colorImg}
// //                   alt=""
// //                   className="absolute left-[200px] top-[80px] h-[160px] w-[260px] rounded-xl object-cover shadow-lg"
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* SAFE CSS */}
// //       <style>{`
// //         .timeline-item.show {
// //           opacity: 1;
// //           transform: translateY(0);
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// // "use client";

// // import { useEffect, useRef } from "react";
// // import PatternBackground from "./patternbg";
// // // const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// // export default function PathSection() {
// //   const lineRef = useRef<HTMLDivElement | null>(null);

// //   const steps = [
// //     {
// //       title: "Step Into the AdRefresh Journey",
// //       desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
// //       colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
// //       bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
// //     },
// //     {
// //       title: "Discover Your Strength",
// //       desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact.",
// //       colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
// //       bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
// //     },
// //     {
// //       title: "Grow, Learn, and Build With Us",
// //       desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration.",
// //       colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
// //       bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
// //     },
// //     {
// //       title: "Your impact starts here",
// //       desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with.",
// //       colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
// //       bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
// //     },
// //     {
// //       title: "Hello Adrexian!",
// //       desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins.",
// //       colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
// //       bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
// //     },
// //   ];

// //   /* ================= LINE SCROLL ANIMATION ================= */
// //   useEffect(() => {
// //     const onScroll = () => {
// //       if (!lineRef.current) return;

// //       const section = lineRef.current.closest("section")!;
// //       const rect = section.getBoundingClientRect();
// //       const windowHeight = window.innerHeight;

// //       const progress =
// //         1 -
// //         Math.min(
// //           Math.max(rect.bottom / (rect.height + windowHeight), 0),
// //           1
// //         );

// //       lineRef.current.style.transform = `scaleY(${progress})`;
// //     };

// //     window.addEventListener("scroll", onScroll);
// //     onScroll();

// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   /* ================= CONTENT FADE ================= */
// //   useEffect(() => {
// //     const items = document.querySelectorAll(".timeline-item");

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((e) => {
// //           if (e.isIntersecting) e.target.classList.add("show");
// //         });
// //       },
// //       { threshold: 0.25 }
// //     );

// //     items.forEach((el) => observer.observe(el));
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section className="relative bg-white py-16 sm:py-20 mb-[150px]">
// //       {/* BACKGROUND PATTERN (UNCHANGED IDEA) */}
 


// //       {/* HEADING (RESTORED) */}
// //       <h2 className="relative z-10 mb-10 sm:mb-14 text-center text-[2.4rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-extrabold">
      
// //         The Path of an{" "}
// //         <span className="text-[var(--purple-30)]">ADREXIAN</span>
// //       </h2>

// //       <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-0">
// //         {/* CENTER LINE */}
// //         <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black/20">
// //           <div
// //             ref={lineRef}
// //             className="h-full w-full origin-top bg-black transition-transform duration-500 ease-in-out"
// //             style={{ transform: "scaleY(0)" }}
// //           />
// //         </div>

// //         {/* STEPS */}
// //         <div className="space-y-[140px]">
// //           {steps.map((step, i) => (
// //             <div
// //               key={i}
// //               className="timeline-item relative grid grid-cols-[1fr_120px_1fr] items-center opacity-0 translate-y-6 transition-all duration-700 ease-out"
// //             >
// //               {/* LEFT CONTENT */}
// //               <div className="pr-10 text-right">
// //                 <h3 className="text-[42px] font-extrabold leading-tight mb-3">
// //                   {step.title}
// //                 </h3>
// //                 <p className="text-[18px] leading-[1.6] text-gray-600 max-w-md ml-auto">
// //                   {step.desc}
// //                 </p>
// //               </div>

// //               {/* CENTER DOT (BIGGER NUMBERS) */}
// //               <div className="flex justify-center">
// //                 <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-white font-bold text-2xl">
// //                   {i + 1}
// //                 </div>
// //               </div>

// //               {/* RIGHT IMAGES */}
// //               <div className="relative pl-10 mt-[-170px]">
// //                 <img
// //                   src={step.bwImg}
// //                   alt=""
// //                   loading="lazy"
// //                   className="absolute left-0 top-0 h-[150px] w-[240px] rounded-xl object-cover grayscale shadow-lg"
// //                 />
// //                 <img
// //                   src={step.colorImg}
// //                   alt=""
// //                   loading="lazy"
// //                   className="absolute left-[110px] top-[70px] h-[150px] w-[240px] rounded-xl object-cover shadow-lg"
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* SAFE CSS */}
// //       <style>{`
// //         .timeline-item.show {
// //           opacity: 1;
// //           transform: translateY(0);
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// // "use client";

// // import { useEffect, useRef } from "react";
// // import PatternBackground from "./patternbg";

// // export default function PathSection() {
// //   const lineRef = useRef<HTMLDivElement | null>(null);

// //   const steps = [
// //     {
// //       title: "Step Into the AdRefresh Journey",
// //       desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
// //       colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
// //       bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
// //     },
// //     {
// //       title: "Discover Your Strength",
// //       desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact.",
// //       colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
// //       bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
// //     },
// //     {
// //       title: "Grow, Learn, and Build With Us",
// //       desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration.",
// //       colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
// //       bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
// //     },
// //     {
// //       title: "Your impact starts here",
// //       desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with.",
// //       colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
// //       bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
// //     },
// //     {
// //       title: "Hello Adrexian!",
// //       desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins.",
// //       colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
// //       bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
// //     },
// //   ];

// //   /* ================= LINE SCROLL ANIMATION ================= */
// //   useEffect(() => {
// //     const onScroll = () => {
// //       if (!lineRef.current) return;

// //       const section = lineRef.current.closest("section")!;
// //       const rect = section.getBoundingClientRect();
// //       const windowHeight = window.innerHeight;

// //       const progress =
// //         1 -
// //         Math.min(
// //           Math.max(rect.bottom / (rect.height + windowHeight), 0),
// //           1
// //         );

// //       lineRef.current.style.transform = `scaleY(${progress})`;
// //     };

// //     window.addEventListener("scroll", onScroll);
// //     onScroll();

// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   /* ================= CONTENT FADE ================= */
// //   useEffect(() => {
// //     const items = document.querySelectorAll(".timeline-item");

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((e) => {
// //           if (e.isIntersecting) e.target.classList.add("show");
// //         });
// //       },
// //       { threshold: 0.25 }
// //     );

// //     items.forEach((el) => observer.observe(el));
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section className="relative bg-white py-16 sm:py-20 mb-[150px] overflow-hidden">
// //       {/* ✅ PATTERN BACKGROUND — FIXED POSITION */}
// //       <PatternBackground />

// //       {/* HEADING */}
// //       <h2 className="relative z-10 mb-10 sm:mb-14 text-center text-[2.4rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-extrabold">
// //         The Path of an{" "}
// //         <span className="text-[var(--purple-30)]">ADREXIAN</span>
// //       </h2>

// //       <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-0">
// //         {/* CENTER LINE */}
// //         <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black/20">
// //           <div
// //             ref={lineRef}
// //             className="h-full w-full origin-top bg-black transition-transform duration-500 ease-in-out"
// //             style={{ transform: "scaleY(0)" }}
// //           />
// //         </div>

// //         {/* STEPS */}
// //         <div className="space-y-[140px]">
// //           {steps.map((step, i) => (
// //             <div
// //               key={i}
// //               className="timeline-item relative grid grid-cols-[1fr_120px_1fr] items-center opacity-0 translate-y-6 transition-all duration-700 ease-out"
// //             >
// //               {/* LEFT CONTENT */}
// //               <div className="pr-10 text-right">
// //                 <h3 className="text-[42px] font-extrabold leading-tight mb-3">
// //                   {step.title}
// //                 </h3>
// //                 <p className="text-[18px] leading-[1.6] text-gray-600 max-w-md ml-auto">
// //                   {step.desc}
// //                 </p>
// //               </div>

// //               {/* CENTER DOT */}
// //               <div className="flex justify-center">
// //                 <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-white font-bold text-2xl">
// //                   {i + 1}
// //                 </div>
// //               </div>

// //               {/* RIGHT IMAGES */}
// //               <div className="relative pl-10 mt-[-170px]">
// //                 <img
// //                   src={step.bwImg}
// //                   alt=""
// //                   loading="lazy"
// //                   className="absolute left-0 top-0 h-[150px] w-[240px] rounded-xl object-cover grayscale shadow-lg"
// //                 />
// //                 <img
// //                   src={step.colorImg}
// //                   alt=""
// //                   loading="lazy"
// //                   className="absolute left-[110px] top-[70px] h-[150px] w-[240px] rounded-xl object-cover shadow-lg"
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* SAFE CSS */}
// //       <style>{`
// //         .timeline-item.show {
// //           opacity: 1;
// //           transform: translateY(0);
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// "use client";

// import { useEffect, useRef } from "react";
// import PatternBackground from "./patternbg";

// export default function PathSection() {
//   const lineRef = useRef<HTMLDivElement | null>(null);

//   const steps = [
//     {
//       title: "Step Into the AdRefresh Journey",
//       desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
//       colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
//       bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
//     },
//     {
//       title: "Discover Your Strength",
//       desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact.",
//       colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
//       bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
//     },
//     {
//       title: "Grow, Learn, and Build With Us",
//       desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration.",
//       colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
//       bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
//     },
//     {
//       title: "Your impact starts here",
//       desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with.",
//       colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
//       bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//     },
//     {
//       title: "Hello Adrexian!",
//       desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins.",
//       colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
//       bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
//     },
//   ];

//   /* ================= LINE SCROLL ANIMATION ================= */
//   useEffect(() => {
//     const onScroll = () => {
//       if (!lineRef.current) return;

//       const section = lineRef.current.closest("section")!;
//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const progress =
//         1 -
//         Math.min(
//           Math.max(rect.bottom / (rect.height + windowHeight), 0),
//           1
//         );

//       lineRef.current.style.transform = `scaleY(${progress})`;
//     };

//     window.addEventListener("scroll", onScroll);
//     onScroll();

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   /* ================= CONTENT FADE ================= */
//   useEffect(() => {
//     const items = document.querySelectorAll(".timeline-item");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) e.target.classList.add("show");
//         });
//       },
//       { threshold: 0.25 }
//     );

//     items.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative bg-white overflow-hidden">
//       {/* ================= HEADING STRIP ONLY ================= */}
//       <div className="relative py-16">
//         {/* ✅ PATTERN ONLY HERE */}
//         <PatternBackground />

//         <h2 className="relative z-10 text-center text-[2.4rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-extrabold">
//           The Path of an{" "}
//           <span className="text-[var(--purple-30)]">ADREXIAN</span>
//         </h2>
//       </div>

//       {/* ================= TIMELINE (NO PATTERN) ================= */}
//       <div className="relative mx-auto max-w-[1200px] px-4 sm:px-0 pb-[150px]">
//         {/* CENTER LINE */}
//         <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black/20">
//           <div
//             ref={lineRef}
//             className="h-full w-full origin-top bg-black transition-transform duration-500 ease-in-out"
//             style={{ transform: "scaleY(0)" }}
//           />
//         </div>

//         <div className="space-y-[140px]">
//           {steps.map((step, i) => (
//             <div
//               key={i}
//               className="timeline-item relative grid grid-cols-[1fr_120px_1fr] items-center opacity-0 translate-y-6 transition-all duration-700 ease-out"
//             >
//               {/* LEFT */}
//               <div className="pr-10 text-right">
//                 <h3 className="text-[42px] font-extrabold mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-[18px] text-gray-600 max-w-md ml-auto">
//                   {step.desc}
//                 </p>
//               </div>

//               {/* NUMBER */}
//               <div className="flex justify-center">
//                 <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-white font-bold text-2xl">
//                   {i + 1}
//                 </div>
//               </div>

//               {/* IMAGES */}
//               <div className="relative pl-10 mt-[-170px]">
//                 <img
//                   src={step.bwImg}
//                   className="absolute left-0 top-0 h-[150px] w-[240px] rounded-xl object-cover grayscale shadow-lg"
//                 />
//                 <img
//                   src={step.colorImg}
//                   className="absolute left-[110px] top-[70px] h-[150px] w-[240px] rounded-xl object-cover shadow-lg"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .timeline-item.show {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import PatternBackground from "./patternbg";

// export default function PathSection() {
//   const lineRef = useRef<HTMLDivElement | null>(null);

//   const steps = [
//     {
//       title: "Step Into the AdRefresh Journey",
//       desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
//       colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
//       bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
//     },
//     {
//       title: "Discover Your Strength",
//       desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact.",
//       colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
//       bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
//     },
//     {
//       title: "Grow, Learn, and Build With Us",
//       desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration.",
//       colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
//       bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
//     },
//     {
//       title: "Your impact starts here",
//       desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with.",
//       colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
//       bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//     },
//     {
//       title: "Hello Adrexian!",
//       desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins.",
//       colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
//       bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
//     },
//   ];

//   /* LINE SCROLL */
//   useEffect(() => {
//     const onScroll = () => {
//       if (!lineRef.current) return;

//       const section = lineRef.current.closest("section")!;
//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const progress =
//         1 -
//         Math.min(
//           Math.max(rect.bottom / (rect.height + windowHeight), 0),
//           1
//         );

//       lineRef.current.style.transform = `scaleY(${progress})`;
//     };

//     window.addEventListener("scroll", onScroll);
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   /* FADE */
//   useEffect(() => {
//     const items = document.querySelectorAll(".timeline-item");
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => {
//           if (e.isIntersecting) e.target.classList.add("show");
//         }),
//       { threshold: 0.25 }
//     );

//     items.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative bg-white overflow-hidden">
//       {/* HEADING */}
//       <div className="relative py-16">
//         <PatternBackground />
//         <h2 className="relative z-10 text-center text-[2.4rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-extrabold">
//           The Path of an{" "}
//           <span className="text-[var(--purple-30)]">ADREXIAN</span>
//         </h2>
//       </div>

//       {/* TIMELINE */}
//       <div className="relative mx-auto max-w-[1200px] px-4 sm:px-0 pb-[150px]">
//         {/* LINE */}
//         <div className="absolute left-6 lg:left-1/2 top-0 h-full w-[2px] lg:-translate-x-1/2 bg-black/20">
//           <div
//             ref={lineRef}
//             className="h-full w-full origin-top bg-black transition-transform duration-500"
//             style={{ transform: "scaleY(0)" }}
//           />
//         </div>

//         <div className="space-y-[100px] lg:space-y-[140px]">
//           {steps.map((step, i) => (
//             <div
//               key={i}
//               className="timeline-item relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_120px_1fr] lg:gap-0 items-start lg:items-center opacity-0 translate-y-6 transition-all duration-700"
//             >
//               {/* TEXT */}
//               <div className="text-left lg:pr-10 lg:text-right">
//                 <h3 className="text-[28px] lg:text-[42px] font-extrabold mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-[16px] lg:text-[18px] text-gray-600 max-w-md lg:ml-auto">
//                   {step.desc}
//                 </p>
//               </div>

//               {/* NUMBER */}
//               <div className="flex justify-start lg:justify-center">
//                 <div className="h-14 w-14 lg:h-16 lg:w-16 flex items-center justify-center rounded-full border-2 border-black bg-white font-bold text-xl lg:text-2xl">
//                   {i + 1}
//                 </div>
//               </div>

//               {/* IMAGES */}
//               <div className="relative lg:pl-10 lg:mt-[-170px]">
//                 {/* BW IMAGE — DESKTOP ONLY */}
//                 <img
//                   src={step.bwImg}
//                   className="hidden lg:block absolute left-0 top-0 h-[150px] w-[240px] rounded-xl object-cover grayscale shadow-lg"
//                 />

//                 {/* COLOR IMAGE — ALL SCREENS */}
//                 <img
//                   src={step.colorImg}
//                   className="h-[180px] w-full sm:w-[320px] lg:h-[150px] lg:w-[240px] rounded-xl object-cover shadow-lg lg:absolute lg:left-[110px] lg:top-[70px]"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .timeline-item.show {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import PatternBackground from "./patternbg";

// export default function PathSection() {
//   const lineRef = useRef<HTMLDivElement | null>(null);

//   const steps = [
//     {
//       title: "Step Into the AdRefresh Journey",
//       desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
//       colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
//       bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
//     },
//     {
//       title: "Discover Your Strength",
//       desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact.",
//       colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
//       bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
//     },
//     {
//       title: "Grow, Learn, and Build With Us",
//       desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration.",
//       colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
//       bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
//     },
//     {
//       title: "Your impact starts here",
//       desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with.",
//       colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
//       bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//     },
//     {
//       title: "Hello Adrexian!",
//       desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins.",
//       colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
//       bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
//     },
//   ];

//   /* LINE SCROLL */
//   useEffect(() => {
//     const onScroll = () => {
//       if (!lineRef.current) return;
//       const section = lineRef.current.closest("section")!;
//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const progress =
//         1 -
//         Math.min(
//           Math.max(rect.bottom / (rect.height + windowHeight), 0),
//           1
//         );

//       lineRef.current.style.transform = `scaleY(${progress})`;
//     };

//     window.addEventListener("scroll", onScroll);
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <section className="relative bg-white overflow-hidden">
//       {/* HEADING */}
//       <div className="relative py-16">
//         <PatternBackground />
//         <h2 className="relative z-10 text-center text-[2.4rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-extrabold">
//           The Path of an{" "}
//           <span className="text-[var(--purple-30)]">ADREXIAN</span>
//         </h2>
//       </div>

//       {/* TIMELINE */}
//       <div className="relative mx-auto max-w-[1200px] px-4 sm:px-0 pb-[150px]">
//         {/* LINE */}
//         <div className="absolute left-5 lg:left-1/2 top-0 h-full w-[2px] lg:-translate-x-1/2 bg-black/20">
//           <div
//             ref={lineRef}
//             className="h-full w-full origin-top bg-black transition-transform duration-500"
//             style={{ transform: "scaleY(0)" }}
//           />
//         </div>

//         <div className="space-y-[110px] lg:space-y-[140px]">
//           {steps.map((step, i) => (
//            <div
//   key={i}
//   className="timeline-item relative block lg:grid lg:grid-cols-[1fr_120px_1fr] lg:gap-0 items-start lg:items-center opacity-0 translate-y-6 transition-all duration-700"
// >

//               {/* ================= MOBILE / TAB ================= */}
// <div className="relative pl-12 lg:hidden block w-full">
//                 {/* NUMBER */}
//                 <div className="absolute left-[-6px] top-0 h-10 w-10 flex items-center justify-center rounded-full border-2 border-black bg-white font-bold text-lg">
//                   {i + 1}
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="text-[26px] font-extrabold mb-3">
//                   {step.title}
//                 </h3>

//                 {/* DESC */}
//                 <p className="text-[16px] text-gray-600 leading-relaxed mb-6">
//                   {step.desc}
//                 </p>

//                 {/* SINGLE IMAGE */}
//                 <img
//                   src={step.colorImg}
//                   className="w-[280px] h-[170px] rounded-xl object-cover shadow-lg"
//                 />
//               </div>

//               {/* ================= DESKTOP (UNCHANGED) ================= */}
//               <div className="hidden lg:block pr-10 text-right">
//                 <h3 className="text-[42px] font-extrabold mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-[18px] text-gray-600 max-w-md ml-auto">
//                   {step.desc}
//                 </p>
//               </div>

//               <div className="hidden lg:flex justify-center">
//                 <div className="h-16 w-16 flex items-center justify-center rounded-full border-2 border-black bg-white font-bold text-2xl">
//                   {i + 1}
//                 </div>
//               </div>

//               <div className="hidden lg:block relative pl-10 mt-[-170px]">
//                 <img
//                   src={step.bwImg}
//                   className="absolute left-0 top-0 h-[150px] w-[240px] rounded-xl object-cover grayscale shadow-lg"
//                 />
//                 <img
//                   src={step.colorImg}
//                   className="absolute left-[110px] top-[70px] h-[150px] w-[240px] rounded-xl object-cover shadow-lg"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .timeline-item.show {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import PatternBackground from "./patternbg";

export default function PathSection() {
  const lineRef = useRef<HTMLDivElement | null>(null);

  const steps = [
    {
      title: "Step Into the AdRefresh Journey",
      desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
      colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "Discover Your Strength",
      desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact.",
      colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      title: "Grow, Learn, and Build With Us",
      desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration.",
      colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      title: "Your impact starts here",
      desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with.",
      colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Hello Adrexian!",
      desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins.",
      colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
  ];

  /* ================= LINE SCROLL ================= */
  useEffect(() => {
    const onScroll = () => {
      if (!lineRef.current) return;
      const section = lineRef.current.closest("section")!;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress =
        1 -
        Math.min(
          Math.max(rect.bottom / (rect.height + windowHeight), 0),
          1
        );

      lineRef.current.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= FADE IN (CRITICAL FIX) ================= */
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* HEADING */}
      <div className="relative py-16">
        <PatternBackground />
        <h2 className="relative z-10 text-center text-[2.4rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-extrabold">
          The Path of an{" "}
          <span className="text-[var(--purple-30)]">ADREXIAN</span>
        </h2>
      </div>

      {/* TIMELINE */}
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-0 pb-[150px]">
        {/* LINE */}
        <div className="absolute left-5 lg:left-1/2 top-0 h-full w-[2px] lg:-translate-x-1/2 bg-black/20">
          <div
            ref={lineRef}
            className="h-full w-full origin-top bg-black transition-transform duration-400"
            style={{ transform: "scaleY(0)" }}
          />
        </div>

        <div className="space-y-[110px] lg:space-y-[140px]">
          {steps.map((step, i) => (
            <div
              key={i}
              className="timeline-item relative block lg:grid lg:grid-cols-[1fr_120px_1fr] lg:gap-0 items-start lg:items-center opacity-0 translate-y-6 transition-all duration-700"
            >
              {/* ================= MOBILE / TAB ================= */}
              <div className="relative pl-12 lg:hidden block w-full">
                <div className="absolute left-[-15px] top-0 h-10 w-10 flex items-center justify-center rounded-full border-2 border-black bg-white font-bold text-lg">
                  {i + 1}
                </div>

                <h3 className="text-[26px] font-extrabold mb-3">
                  {step.title}
                </h3>

                <p className="text-[16px] text-gray-600 leading-relaxed mb-6">
                  {step.desc}
                </p>

                <img
                  src={step.colorImg}
                  className="w-[280px] h-[170px] rounded-xl object-cover shadow-lg"
                />
              </div>

              {/* ================= DESKTOP ================= */}
              <div className="hidden lg:block pr-10 text-right">
                <h3 className="text-[42px] font-extrabold mb-3">
                  {step.title}
                </h3>
                <p className="text-[18px] text-gray-600 max-w-md ml-auto">
                  {step.desc}
                </p>
              </div>

              <div className="hidden lg:flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full border-2 border-black bg-white font-bold text-2xl">
                  {i + 1}
                </div>
              </div>

              <div className="hidden lg:block relative pl-10 mt-[-170px]">
                <img
                  src={step.bwImg}
                  className="absolute left-0 top-0 h-[150px] w-[240px] rounded-xl object-cover grayscale shadow-lg"
                />
                <img
                  src={step.colorImg}
                  className="absolute left-[110px] top-[70px] h-[150px] w-[240px] rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-item.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
