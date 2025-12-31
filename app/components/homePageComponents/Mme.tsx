// // "use client";

// // import { useEffect } from "react";
// // import Image from "next/image";
// // import iconmark from "@/public/images/HomePageImages/IconmarkLimeYellow.png";

// // export default function Features() {
// //   const points = [
// //     {
// //       num: "01",
// //       title: "AI-Driven Precision for High-Velocity Growth",
// //       text: "Our AI-enhanced AdOps engine delivers quicker decisions ,and outcomes engineered for accelerated growth.",
// //     },
// //     {
// //       num: "02",
// //       title: "Experience That Multiplies Impact",
// //       text: "Industry specialists + automation = elevated insights, optimized budgets, and consistent profit acceleration.",
// //     },
// //     {
// //       num: "03",
// //       title: "Always-On Partnership for Momentum",
// //       text: "Adaptive workflows and 24/7 availability ensure uninterrupted operations and long-term marketing momentum.",
// //     },
// //   ];

// //   useEffect(() => {
// //     document.querySelectorAll(".reveal").forEach((el) => {
// //       new IntersectionObserver(
// //         (entries) =>
// //           entries.forEach(
// //             (e) => e.isIntersecting && e.target.classList.add("active")
// //           ),
// //         { threshold: 0.15 }
// //       ).observe(el);
// //     });
// //   }, []);

// //   return (
// //     <section
// //       className="
// //         relative
// //         w-screen
// // w-full
// //         overflow-hidden
// //         bg-gradient-to-r
// //         from-[#9bad23]
// //         to-[#d8f130]
// //       "
// //     >
// //       {/* CANVAS BACKGROUND */}
// //       <canvas
// //         id="neuralCanvas"
// //         className="absolute inset-0 z-0"
// //       />

// //       {/* MAIN CONTENT */}
// //       <section
// //         className="
// //                 mt-[8%]

// //           relative z-10
// //           flex
// //           w-full
          
// //           max-[1024px]:flex-col
// //           max-[1024px]:items-center
// //           max-[1024px]:py-[40px]
// //         "
// //       >
// //         {/* LEFT BLOCK */}
// //         <div
// //           className="
// //             w-[60vw]
// //             pl-[60px]

// //             max-[1024px]:w-full
// //             max-[1024px]:px-[20px]
// //           "
// //         >
// //           {/* HEADER */}
// //           <div
// //             className="reveal mt-[-7%]"
// //           >
// //             <h2
// //               className="
// //                 font-[900]
// //                 text-black
// //                 text-[4rem]
// //                 mb-[-2%]

// //                 max-[1024px]:text-[2.8rem]
// //                 max-[768px]:text-[2.2rem]
// //               "
// //             >
// //               BUILT FOR MODERN
// //             </h2>

// //             <span
// //               className="
// //                 block
// //                 font-[900]
// //                 text-[3.5rem]
// //                 text-[#7A4DFF]

// //                 max-[1024px]:text-[2.4rem]
// //                 max-[768px]:text-[2rem]
// //               "
// //             >
// //               Marketing Excellence
// //             </span>
// //           </div>

// //           {/* FEATURES LIST */}
// //           <div
// //             className="
// //               reveal
// //               flex
// //               flex-col
// //               gap-[44px]
// //               mt-[40px]
// //             "
// //           >
// //             {points.map((p, i) => (
// //               <div
// //                 key={i}
// //                 className="
// //                   flex
// //                   gap-[10px]
// //                   items-start
// //                   py-[6px]
// //                 "
// //               >
// //                 <span
// //                   className="
// //                     text-white
// //                     font-[900]
// //                     text-[6rem]
// //                     leading-none
// //                     min-w-[5.5rem]

// //                     max-[1024px]:text-[3.8rem]
// //                     max-[768px]:text-[2.2rem]
// //                     max-[768px]:min-w-[2rem]
// //                   "
// //                 >
// //                   {p.num}
// //                 </span>

// //                 <div>
// //                   <h3
// //                     className="
// //                       font-[900]
// //                       text-[1.5rem]
// //                       m-0

// //                       max-[768px]:text-[1rem]
// //                     "
// //                   >
// //                     {p.title}
// //                   </h3>

// //                   <p
// //                     className="
// //                       text-[15px]
// //                       leading-[1.35]
// //                       max-w-[480px]

// //                       max-[768px]:text-[10px]
// //                       max-[768px]:max-w-[95%]
// //                     "
// //                   >
// //                     {p.text}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* RIGHT LOGO */}
// //         <div
// //           className="
// //             relative
// //             w-[40vw]
// //             h-[100vh]
// //             flex
// //             items-center
// //             justify-center
// //             m-[2%]

// //             max-[1024px]:w-full
// //             max-[1024px]:h-auto
// //             max-[1024px]:mt-[20px]
// //           "
// //         >
// //           <Image
// //             src={iconmark}
// //             alt="AdRefresh Logo"
// //             fill
// //             className="
// //               object-contain
// //               w-full
// //               h-[90%]

// //               max-[1024px]:w-[65%]
// //               max-[1024px]:h-[70%]
// //               max-[768px]:w-[75%]
// //             "
// //           />
// //         </div>
// //       </section>

// //       {/* CANVAS SCRIPT */}
// //       <script
// //         dangerouslySetInnerHTML={{
// //           __html: `
// //             const canvas = document.getElementById("neuralCanvas");
// //             const ctx = canvas.getContext("2d");

// //             function resize() {
// //               canvas.width = window.innerWidth;
// //               canvas.height = window.innerHeight;
// //             }
// //             resize();
// //             window.addEventListener("resize", resize);

// //             const isMobile = window.innerWidth < 768;
// //             const isTablet = window.innerWidth < 1024;

// //             const totalNodes = isMobile ? 25 : isTablet ? 40 : 60;
// //             const nodeRadius = isMobile ? 1.2 : isTablet ? 1.6 : 2;
// //             const maxDist = isMobile ? 60 : isTablet ? 90 : 120;

// //             const nodes = Array.from({ length: totalNodes }, () => ({
// //               x: Math.random() * canvas.width,
// //               y: Math.random() * canvas.height,
// //               dx: (Math.random() - 0.5) * (isMobile ? 0.6 : isTablet ? 1.0 : 1.3),
// //               dy: (Math.random() - 0.5) * (isMobile ? 0.9 : isTablet ? 1.3 : 1.9)
// //             }));

// //             function animate() {
// //               ctx.clearRect(0, 0, canvas.width, canvas.height);

// //               nodes.forEach((n) => {
// //                 n.x += n.dx;
// //                 n.y += n.dy;

// //                 if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
// //                 if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

// //                 ctx.beginPath();
// //                 ctx.arc(n.x, n.y, nodeRadius, 0, Math.PI * 2);
// //                 ctx.fillStyle = "#dcee67ff";
// //                 ctx.fill();

// //                 nodes.forEach((m) => {
// //                   const dist = Math.hypot(n.x - m.x, n.y - m.y);
// //                   if (dist < maxDist) {
// //                     ctx.strokeStyle = "#dcee67ff";
// //                     ctx.lineWidth = 0.5;
// //                     ctx.beginPath();
// //                     ctx.moveTo(n.x, n.y);
// //                     ctx.lineTo(m.x, m.y);
// //                     ctx.stroke();
// //                   }
// //                 });
// //               });

// //               requestAnimationFrame(animate);
// //             }

// //             animate();
// //           `,
// //         }}
// //       />
// //     </section>
// //   );
// // }

// // "use client";

// // import { useEffect } from "react";
// // import Image from "next/image";
// // import iconmark from "@/public/images/HomePageImages/IconmarkLimeYellow.png";

// // export default function Features() {
// //   const points = [
// //     {
// //       num: "01",
// //       title: "AI-Driven Precision for High-Velocity Growth",
// //       text: "Our AI-enhanced AdOps engine delivers quicker decisions, and outcomes engineered for accelerated growth.",
// //     },
// //     {
// //       num: "02",
// //       title: "Experience That Multiplies Impact",
// //       text: "Industry specialists + automation = elevated insights, optimized budgets, and consistent profit acceleration.",
// //     },
// //     {
// //       num: "03",
// //       title: "Always-On Partnership for Momentum",
// //       text: "Adaptive workflows and 24/7 availability ensure uninterrupted operations and long-term marketing momentum.",
// //     },
// //   ];

// //   useEffect(() => {
// //     const canvas = document.getElementById("neuralCanvas") as HTMLCanvasElement;
// //     const ctx = canvas.getContext("2d")!;

// //     function resize() {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     }
// //     resize();
// //     window.addEventListener("resize", resize);

// //     const nodes = Array.from({ length: 55 }, () => ({
// //       x: Math.random() * canvas.width,
// //       y: Math.random() * canvas.height,
// //       dx: (Math.random() - 0.5) * 1.2,
// //       dy: (Math.random() - 0.5) * 1.2,
// //     }));

// //     function animate() {
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);

// //       nodes.forEach((n) => {
// //         n.x += n.dx;
// //         n.y += n.dy;

// //         if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
// //         if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

// //         ctx.beginPath();
// //         ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
// //         ctx.fillStyle = "rgba(255,255,255,0.4)";
// //         ctx.fill();

// //         nodes.forEach((m) => {
// //           const dist = Math.hypot(n.x - m.x, n.y - m.y);
// //           if (dist < 120) {
// //             ctx.strokeStyle = "rgba(255,255,255,0.25)";
// //             ctx.lineWidth = 0.6;
// //             ctx.beginPath();
// //             ctx.moveTo(n.x, n.y);
// //             ctx.lineTo(m.x, m.y);
// //             ctx.stroke();
// //           }
// //         });
// //       });

// //       requestAnimationFrame(animate);
// //     }

// //     animate();
// //     return () => window.removeEventListener("resize", resize);
// //   }, []);

// //   return (
// //     <section className="relative w-screen min-h-screen overflow-hidden bg-[#c8df2f]">
// //       {/* COSMOS BACKGROUND */}
// //       <canvas
// //         id="neuralCanvas"
// //         className="absolute inset-0 z-0"
// //       />

// //       {/* HUGE RIGHT LOGO (DECORATIVE) */}
// //       <div className="absolute right-[8%] top-1/2 -translate-y-1/2 z-[1] pointer-events-none">
// //         <Image
// //           src={iconmark}
// //           alt="Brand Shape"
// //           width={500}
// //           height={900}
// //           className="object-contain opacity-100"
// //         />
// //       </div>

// //       {/* CONTENT */}
// //       <div className="relative z-10 min-h-screen flex items-center">
// //         <div className="max-w-[1200px] w-full px-[60px]">
// //           {/* TITLE */}
// //           <div className="mb-[40px]">
// //             <h2 className="text-black font-[900] text-[4.5rem] leading-none">
// //               BUILT FOR MODERN
// //             </h2>
// //             <span className="block text-[#7A4DFF] font-[900] text-[3.6rem]">
// //               Marketing Excellence
// //             </span>
// //           </div>

// //           {/* FEATURES */}
// //           <div className="flex flex-col gap-[48px] max-w-[620px]">
// //             {points.map((p) => (
// //               <div key={p.num} className="flex gap-[18px]">
// //                 <span className="text-white font-[900] text-[6.5rem] leading-none min-w-[90px]">
// //                   {p.num}
// //                 </span>

// //                 <div>
// //                   <h3 className="text-black font-[900] text-[1.4rem] mb-1">
// //                     {p.title}
// //                   </h3>
// //                   <p className="text-black text-[15px] leading-[1.35]">
// //                     {p.text}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* MOBILE ADJUSTMENTS */}
// //       <style jsx>{`
// //         @media (max-width: 768px) {
// //           section {
// //             padding-top: 80px;
// //             padding-bottom: 80px;
// //           }

// //           h2 {
// //             font-size: 2.6rem !important;
// //           }

// //           span {
// //             font-size: 2.2rem !important;
// //           }

// //           .absolute.right-\\[-18%\\] {
// //             right: -55%;
// //             opacity: 0.25;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// // "use client";

// // import { useEffect } from "react";
// // import Image from "next/image";
// // import iconmark from "@/public/images/HomePageImages/IconmarkLimeYellow.png";

// // export default function Features() {
// //   const points = [
// //     {
// //       num: "01",
// //       title: "AI-Driven Precision for High-Velocity Growth",
// //       text: "Our AI-enhanced AdOps engine delivers quicker decisions and outcomes engineered for accelerated growth.",
// //     },
// //     {
// //       num: "02",
// //       title: "Experience That Multiplies Impact",
// //       text: "Industry specialists + automation = elevated insights, optimized budgets, and consistent profit acceleration.",
// //     },
// //     {
// //       num: "03",
// //       title: "Always-On Partnership for Momentum",
// //       text: "Adaptive workflows and 24/7 availability ensure uninterrupted operations and long-term marketing momentum.",
// //     },
// //   ];

// //   /* ===== COSMOS BACKGROUND ===== */
// //   useEffect(() => {
// //     const canvas = document.getElementById("neuralCanvas") as HTMLCanvasElement;
// //     const ctx = canvas?.getContext("2d");
// //     if (!ctx) return;

// //     const resize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };
// //     resize();
// //     window.addEventListener("resize", resize);

// //     const nodes = Array.from({ length: 55 }, () => ({
// //       x: Math.random() * canvas.width,
// //       y: Math.random() * canvas.height,
// //       dx: (Math.random() - 0.5) * 1.1,
// //       dy: (Math.random() - 0.5) * 1.1,
// //     }));

// //     const animate = () => {
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);

// //       nodes.forEach((n) => {
// //         n.x += n.dx;
// //         n.y += n.dy;

// //         if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
// //         if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

// //         ctx.beginPath();
// //         ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
// //         ctx.fillStyle = "rgba(255,255,255,0.35)";
// //         ctx.fill();

// //         nodes.forEach((m) => {
// //           const dist = Math.hypot(n.x - m.x, n.y - m.y);
// //           if (dist < 120) {
// //             ctx.strokeStyle = "rgba(255,255,255,0.25)";
// //             ctx.lineWidth = 0.6;
// //             ctx.beginPath();
// //             ctx.moveTo(n.x, n.y);
// //             ctx.lineTo(m.x, m.y);
// //             ctx.stroke();
// //           }
// //         });
// //       });

// //       requestAnimationFrame(animate);
// //     };

// //     animate();
// //     return () => window.removeEventListener("resize", resize);
// //   }, []);

// //   return (
// //     <section className="relative w-screen overflow-hidden bg-[#c8df2f]">
// //       {/* BACKGROUND */}
// //       <canvas id="neuralCanvas" className="absolute inset-0 z-0" />

// //       {/* DECORATIVE LOGO */}
// //       <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-[1]">
// //         <Image
// //           src={iconmark}
// //           alt="Decorative Logo"
// //           width={580}
// //           height={1080}
// //           className="opacity-100 max-[1280px]:w-[400px] max-[1024px]:opacity-40 max-[768px]:opacity-25 ml-[-5%]"
// //         />
// //       </div>

// //       {/* CONTENT */}
// //       <div className="relative z-10 max-w-[1200px] mx-auto px-[20px] pt-[60px] pb-[30px]">
// //         {/* TITLE */}
// //         <div className="mb-[72px]">
// //           <h2 className="text-black font-[900] text-[4.5rem] leading-[1.05]">
// //             BUILT FOR MODERN
// //           </h2>
// //           <span className="block text-[#7A4DFF] font-[900] text-[3.6rem] mt-2">
// //             Marketing Excellence
// //           </span>
// //         </div>

// //         {/* FEATURES */}
// //         <div className="flex flex-col gap-[54px] max-w-[640px] mt-[-5%] ">
// //           {points.map((p) => (
// //             <div key={p.num} className="flex gap-[10px] items-start  ">
// //               {/* NUMBER */}
// //               <span className="text-[rgba(223,250,51,0.85)] font-[900] text-[5.4rem] leading-none min-w-[96px]">
// //                 {p.num}
// //               </span>

// //               {/* TEXT */}
// //               <div>
// //                 <h3 className="text-black font-[900] text-[1.45rem] mb-1">
// //                   {p.title}
// //                 </h3>
// //                 <p className="text-black text-[15px] leading-[1.4]">
// //                   {p.text}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* MOBILE FIXES */}
// //       <style jsx>{`
// //         @media (max-width: 768px) {
// //           section {
// //             padding-bottom: 100px;
// //           }

// //           h2 {
// //             font-size: 2.6rem !important;
// //           }

// //           span {
// //             font-size: 2.2rem !important;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }
// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import iconmark from "@/public/images/HomePageImages/IconmarkLimeYellow.png";

// export default function Features() {
//   const points = [
//     {
//       num: "01",
//       title: "AI-Driven Precision for High-Velocity Growth",
//       text: "Our AI-enhanced AdOps engine delivers quicker decisions and outcomes engineered for accelerated growth.",
//     },
//     {
//       num: "02",
//       title: "Experience That Multiplies Impact",
//       text: "Industry specialists + automation = elevated insights, optimized budgets, and consistent profit acceleration.",
//     },
//     {
//       num: "03",
//       title: "Always-On Partnership for Momentum",
//       text: "Adaptive workflows and 24/7 availability ensure uninterrupted operations and long-term marketing momentum.",
//     },
//   ];

//   /* ===== COSMOS BACKGROUND ===== */
//   useEffect(() => {
//     const canvas = document.getElementById("neuralCanvas") as HTMLCanvasElement;
//     const ctx = canvas?.getContext("2d");
//     if (!ctx) return;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const nodes = Array.from({ length: 55 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       dx: (Math.random() - 0.5) * 1.1,
//       dy: (Math.random() - 0.5) * 1.1,
//     }));

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       nodes.forEach((n) => {
//         n.x += n.dx;
//         n.y += n.dy;

//         if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
//         if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

//         ctx.beginPath();
//         ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255,255,255,0.35)";
//         ctx.fill();

//         nodes.forEach((m) => {
//           const dist = Math.hypot(n.x - m.x);
//           if (dist < 120) {
//             ctx.strokeStyle = "rgba(255,255,255,0.25)";
//             ctx.lineWidth = 0.6;
//             ctx.beginPath();
//             ctx.moveTo(n.x, n.y);
//             ctx.lineTo(m.x, m.y);
//             ctx.stroke();
//           }
//         });
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   return (
//     <section className="relative w-screen overflow-hidden bg-[#c8df2f]">
//       {/* BACKGROUND */}
//       <canvas id="neuralCanvas" className="absolute inset-0 z-0" />

//       {/* DECORATIVE LOGO */}
//       <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-[1]">
//         <Image
//           src={iconmark}
//           alt="Decorative Logo"
//           width={580}
//           height={1080}
//           className="
//             opacity-100
//             lg:w-[580px]
//             md:w-[400px]
//             sm:w-[300px]
//             max-sm:opacity-20
//             ml-[-5%]
//           "
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[20px] pt-[60px] pb-[30px]">
//         {/* TITLE */}
//         <div className="mb-[48px] sm:mb-[60px] lg:mb-[72px]">
//           <h2
//             className="
//               text-black
//               font-[900]
//               leading-[1.05]
//               text-[2.4rem]
//               sm:text-[3.2rem]
//               md:text-[4rem]
//               lg:text-[4.5rem]
//             "
//           >
//             BUILT FOR MODERN
//           </h2>

//           <span
//             className="
//               block
//               text-[#7A4DFF]
//               font-[900]
//               mt-2
//               text-[2rem]
//               sm:text-[2.6rem]
//               md:text-[3.2rem]
//               lg:text-[3.6rem]
//             "
//           >
//             Marketing Excellence
//           </span>
//         </div>

//         {/* FEATURES */}
//         <div
//           className="
//             flex flex-col
//             gap-[36px]
//             sm:gap-[44px]
//             lg:gap-[54px]
//             max-w-[640px]
//             mt-0
//             lg:mt-[-5%]
//           "
//         >
//           {points.map((p) => (
//             <div
//               key={p.num}
//               className="
//                 flex
//                 items-start
//                 gap-3
//                 sm:gap-[10px]
//               "
//             >
//               {/* NUMBER */}
//               <span
//                 className="
//                   font-[900]
//                   leading-none
//                   min-w-[56px]
//                   sm:min-w-[72px]
//                   lg:min-w-[96px]
//                   text-[3.2rem]
//                   sm:text-[4.2rem]
//                   lg:text-[5.4rem]
//                   text-[rgba(223,250,51,0.85)]
//                 "
//               >
//                 {p.num}
//               </span>

//               {/* TEXT */}
//               <div>
//                 <h3
//                   className="
//                     text-black
//                     font-[900]
//                     mb-1
//                     text-[1.1rem]
//                     sm:text-[1.25rem]
//                     lg:text-[1.45rem]
//                   "
//                 >
//                   {p.title}
//                 </h3>
//                 <p
//                   className="
//                     text-black
//                     leading-[1.4]
//                     text-[14px]
//                     sm:text-[15px]
//                   "
//                 >
//                   {p.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* MOBILE PADDING SAFETY (kept, not removed) */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           section {
//             padding-bottom: 100px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import iconmark from "@/public/images/HomePageImages/IconmarkLimeYellow.png";

// export default function Features() {
//   const points = [
//     {
//       num: "01",
//       title: "AI-Driven Precision for High-Velocity Growth",
//       text: "Our AI-enhanced AdOps engine delivers quicker decisions and outcomes engineered for accelerated growth.",
//     },
//     {
//       num: "02",
//       title: "Experience That Multiplies Impact",
//       text: "Industry specialists + automation = elevated insights, optimized budgets, and consistent profit acceleration.",
//     },
//     {
//       num: "03",
//       title: "Always-On Partnership for Momentum",
//       text: "Adaptive workflows and 24/7 availability ensure uninterrupted operations and long-term marketing momentum.",
//     },
//   ];

//   /* ===== COSMOS BACKGROUND ===== */
//   useEffect(() => {
//     const canvas = document.getElementById("neuralCanvas") as HTMLCanvasElement;
//     const ctx = canvas?.getContext("2d");
//     if (!ctx) return;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//   const isMobile = window.matchMedia("(max-width: 768px)").matches;

// const nodes = Array.from(
//   { length: isMobile ? 22 : 55 }, // ✅ fewer nodes on mobile
//   () => ({
//     x: Math.random() * canvas.width,
//     y: Math.random() * canvas.height,
//     dx: (Math.random() - 0.5) * 1.1,
//     dy: (Math.random() - 0.5) * 1.1,
//   })
// );


//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       nodes.forEach((n) => {
//         n.x += n.dx;
//         n.y += n.dy;

//         if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
//         if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

//         ctx.beginPath();
//         ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255,255,255,0.35)";
//         ctx.fill();

//         nodes.forEach((m) => {
//           const dist = Math.hypot(n.x - m.x, n.y - m.y);
//           if (dist < 120) {
//             ctx.strokeStyle = "rgba(255,255,255,0.25)";
//             ctx.lineWidth = 0.6;
//             ctx.beginPath();
//             ctx.moveTo(n.x, n.y);
//             ctx.lineTo(m.x, m.y);
//             ctx.stroke();
//           }
//         });
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   return (
//     <section className="relative w-screen overflow-hidden bg-[#c8df2f]">
//       {/* BACKGROUND */}
//       <canvas id="neuralCanvas" className="absolute inset-0 z-0" />

//       {/* DECORATIVE LOGO */}
//       <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-[1]">
//         <Image
//           src={iconmark}
//           alt="Decorative Logo"
//           width={580}
//           height={1080}
//           className="
//             opacity-100
//             w-[280px]
//             sm:w-[360px]
//             md:w-[420px]
//             lg:w-[580px]
//             max-sm:opacity-20
//             ml-[-5%]
//           "
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[20px] pt-[60px] pb-[30px]">
//         {/* TITLE */}
//         <div className="mb-[48px] sm:mb-[60px] lg:mb-[72px]">
//           <h2
//             className="
//               text-black
//               font-[900]
//               leading-[1.05]
//               text-[2.4rem]
//               sm:text-[3.2rem]
//               md:text-[4rem]
//               lg:text-[4.5rem]
//             "
//           >
//             BUILT FOR MODERN
//           </h2>

//           <span
//             className="
//               block
//               text-[#7A4DFF]
//               font-[900]
//               mt-2
//               text-[2rem]
//               sm:text-[2.6rem]
//               md:text-[3.2rem]
//               lg:text-[3.6rem]
//             "
//           >
//             Marketing Excellence
//           </span>
//         </div>

//         {/* FEATURES */}
//         <div
//           className="
//             flex flex-col
//             max-w-[640px]
//             gap-[36px]
//             sm:gap-[44px]
//             lg:gap-[54px]
//             mt-0
//             lg:mt-[-5%]
//           "
//         >
//           {points.map((p) => (
//             <div key={p.num} className="flex items-start gap-3 sm:gap-[10px]">
//               {/* NUMBER */}
//            <span
//   className="
//     font-[900]
//     leading-none
//     min-w-[72px]
//     sm:min-w-[72px]
//     lg:min-w-[96px]
//     text-[6rem]        /* ✅ BIG on mobile */
//     sm:text-[4.2rem]
//     lg:text-[5.4rem]
//     text-[rgba(223,250,51,0.85)]
//   "
// >
//   {p.num}
// </span>


//               {/* TEXT */}
//               <div>
//                 <h3
//                   className="
//                     text-black
//                     font-[900]
//                     mb-1
//                     text-[1.1rem]
//                     sm:text-[1.25rem]
//                     lg:text-[1.45rem]
//                   "
//                 >
//                   {p.title}
//                 </h3>
//                 <p
//                   className="
//                     text-black
//                     leading-[1.4]
//                     text-[14px]
//                     sm:text-[15px]
//                   "
//                 >
//                   {p.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import iconmark from "@/public/images/HomePageImages/IconmarkLimeYellow.png";

// export default function Features() {
//   const points = [
//     {
//       num: "01",
//       title: "AI-Driven Precision for High-Velocity Growth",
//       text: "Our AI-enhanced AdOps engine delivers quicker decisions and outcomes engineered for accelerated growth.",
//     },
//     {
//       num: "02",
//       title: "Experience That Multiplies Impact",
//       text: "Industry specialists + automation = elevated insights, optimized budgets, and consistent profit acceleration.",
//     },
//     {
//       num: "03",
//       title: "Always-On Partnership for Momentum",
//       text: "Adaptive workflows and 24/7 availability ensure uninterrupted operations and long-term marketing momentum.",
//     },
//   ];

//   /* ===== COSMOS BACKGROUND ===== */
//   useEffect(() => {
//     const canvas = document.getElementById("neuralCanvas") as HTMLCanvasElement;
//     const ctx = canvas?.getContext("2d");
//     if (!ctx) return;

//     let nodes: {
//       x: number;
//       y: number;
//       dx: number;
//       dy: number;
//     }[] = [];

//     const setup = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       const isMobile = window.innerWidth <= 768;

//       nodes = Array.from(
//         { length: isMobile ? 22 : 55 },
//         () => ({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           dx: (Math.random() - 0.5) * 1.1,
//           dy: (Math.random() - 0.5) * 1.1,
//         })
//       );
//     };

//     setup();
//     window.addEventListener("resize", setup);

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const isMobile = window.innerWidth <= 768;
//       const maxDist = isMobile ? 80 : 120;

//       nodes.forEach((n) => {
//         n.x += n.dx;
//         n.y += n.dy;

//         if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
//         if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

//         ctx.beginPath();
//         ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255,255,255,0.35)";
//         ctx.fill();

//         nodes.forEach((m) => {
//           const dist = Math.hypot(n.x - m.x, n.y - m.y);
//           if (dist < maxDist) {
//             ctx.strokeStyle = "rgba(255,255,255,0.25)";
//             ctx.lineWidth = 0.6;
//             ctx.beginPath();
//             ctx.moveTo(n.x, n.y);
//             ctx.lineTo(m.x, m.y);
//             ctx.stroke();
//           }
//         });
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();
//     return () => window.removeEventListener("resize", setup);
//   }, []);

//   return (
//     <section className="relative w-screen overflow-hidden bg-[#c8df2f]">
//       {/* BACKGROUND */}
//       <canvas id="neuralCanvas" className="absolute inset-0 z-0" />

//       {/* DECORATIVE LOGO */}
//       <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-[1]">
//         <Image
//           src={iconmark}
//           alt="Decorative Logo"
//           width={580}
//           height={1080}
//           className="
//             opacity-100
//             w-[280px]
//             sm:w-[360px]
//             md:w-[420px]
//             lg:w-[580px]
//             max-sm:opacity-20
//             ml-[-5%]
//           "
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[20px] pt-[60px] pb-[30px]">
//         {/* TITLE */}
//         <div className="mb-[48px] sm:mb-[60px] lg:mb-[72px]">
//           <h2 className="text-black font-[900] leading-[1.05] text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.5rem]">
//             BUILT FOR MODERN
//           </h2>
//           <span className="block text-[#7A4DFF] font-[900] mt-2 text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem]">
//             Marketing Excellence
//           </span>
//         </div>

//         {/* FEATURES */}
//         <div className="flex flex-col max-w-[640px] gap-[36px] sm:gap-[44px] lg:gap-[54px] lg:mt-[-5%]">
//           {points.map((p) => (
//             <div key={p.num} className="flex items-center gap-3 sm:gap-[10px]">
//               {/* NUMBER */}
//  <span
//   className="
//     font-[900]
//     leading-[0.9]
//     min-w-[96px]
//     lg:min-w-[110px]

//     text-[5rem]
//     sm:text-[5.4rem]
//     lg:text-[5.4rem]

//     text-[rgba(223,250,51,0.85)]
//   "
// >
//   {p.num}
// </span>



//               {/* TEXT */}
//               <div>
//                 <h3 className="text-black font-[900] mb-1 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.45rem]">
//                   {p.title}
//                 </h3>
//                 <p className="text-black leading-[1.4] text-[14px] sm:text-[15px]">
//                   {p.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import iconmark from "@/public/images/HomePageImages/IconmarkLimeYellow.png";

// export default function Features() {
//   const points = [
//     {
//       num: "01",
//       title: "AI-Driven Precision for High-Velocity Growth",
//       text: "Our AI-enhanced AdOps engine delivers quicker decisions and outcomes engineered for accelerated growth.",
//     },
//     {
//       num: "02",
//       title: "Experience That Multiplies Impact",
//       text: "Industry specialists + automation = elevated insights, optimized budgets, and consistent profit acceleration.",
//     },
//     {
//       num: "03",
//       title: "Always-On Partnership for Momentum",
//       text: "Adaptive workflows and 24/7 availability ensure uninterrupted operations and long-term marketing momentum.",
//     },
//   ];

//   /* ===== COSMOS BACKGROUND ===== */
//   useEffect(() => {
//     const canvas = document.getElementById("neuralCanvas") as HTMLCanvasElement;
//     const ctx = canvas?.getContext("2d");
//     if (!ctx) return;

//     let nodes: {
//       x: number;
//       y: number;
//       dx: number;
//       dy: number;
//     }[] = [];

//     const setup = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       const isMobile = window.innerWidth <= 768;

//       nodes = Array.from(
//         { length: isMobile ? 22 : 55 },
//         () => ({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           dx: (Math.random() - 0.5) * 1.1,
//           dy: (Math.random() - 0.5) * 1.1,
//         })
//       );
//     };

//     setup();
//     window.addEventListener("resize", setup);

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const isMobile = window.innerWidth <= 768;
//       const maxDist = isMobile ? 80 : 120;

//       nodes.forEach((n) => {
//         n.x += n.dx;
//         n.y += n.dy;

//         if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
//         if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

//         ctx.beginPath();
//         ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255,255,255,0.35)";
//         ctx.fill();

//         nodes.forEach((m) => {
//           const dist = Math.hypot(n.x - m.x, n.y - m.y);
//           if (dist < maxDist) {
//             ctx.strokeStyle = "rgba(255,255,255,0.25)";
//             ctx.lineWidth = 0.6;
//             ctx.beginPath();
//             ctx.moveTo(n.x, n.y);
//             ctx.lineTo(m.x, m.y);
//             ctx.stroke();
//           }
//         });
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();
//     return () => window.removeEventListener("resize", setup);
//   }, []);

//   return (
//     <section className="relative w-screen overflow-hidden bg-[#c8df2f]">
//       {/* BACKGROUND */}
//       <canvas id="neuralCanvas" className="absolute inset-0 z-0" />

//       {/* DECORATIVE LOGO */}
//       <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-[1]">
//         <Image
//           src={iconmark}
//           alt="Decorative Logo"
//           width={580}
//           height={1080}
//           className="
//             opacity-100
//             w-[280px]
//             sm:w-[360px]
//             md:w-[420px]
//             lg:w-[580px]
//             max-sm:opacity-20
//             ml-[-5%]
//           "
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[20px] pt-[36px] sm:pt-[60px] pb-[24px] sm:pb-[30px]">
//         {/* TITLE */}
//         <div className="mb-[32px] sm:mb-[60px] lg:mb-[72px]">
//           <h2 className="text-black font-[900] leading-[1.05] text-[3rem] mt-[-5%]  sm:mt-[0%] md:mt-[0%] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.5rem]">
//             BUILT FOR MODERN
//           </h2>
//           <span className="block text-[#7A4DFF] font-[900] mt-2 text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem]">
//             Marketing Excellence
//           </span>
//         </div>

//         {/* FEATURES */}
//         <div className="flex flex-col max-w-[640px] gap-[24px] sm:gap-[44px] lg:gap-[54px] lg:mt-[-5%]">
//           {points.map((p) => (
//             <div key={p.num} className="flex items-center gap-3 sm:gap-[10px]">
//               {/* NUMBER */}
//             <span
//   className="
//     font-[900]
//     leading-[0.9]

//     min-w-[72px]
//     sm:min-w-[96px]
//     lg:min-w-[110px]

//     text-[4.5rem]          /* ✅ MOBILE = 4rem */
//     sm:text-[4.6rem]
//     lg:text-[5rem]

//     text-[rgba(223,250,51,0.85)]
//   "
// >
//   {p.num}
// </span>


//               {/* TEXT */}
//               <div>
//                 <h3 className="text-black font-[900] mb-1 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.45rem]">
//                   {p.title}
//                 </h3>
//                 <p className="text-black leading-[1.4] text-[14px] sm:text-[15px] 
//     [text-align:justify]
//     [text-justify:inter-word]
//     hyphens-auto">
//                   {p.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect } from "react";
import Image from "next/image";
import iconmark from "@/public/images/HomePageImages/IconmarkLimeYellow.png";

export default function Features() {
  const points = [
    {
      num: "01",
      title: "AI-Driven Precision for High-Velocity Growth",
      text: "Our AI-enhanced AdOps engine delivers quicker decisions and outcomes engineered for accelerated growth.",
    },
    {
      num: "02",
      title: "Experience That Multiplies Impact",
      text: "Industry specialists + automation = elevated insights, optimized budgets, and consistent profit acceleration.",
    },
    {
      num: "03",
      title: "Always-On Partnership for Momentum",
      text: "Adaptive workflows and 24/7 availability ensure uninterrupted operations and long-term marketing momentum.",
    },
  ];

  /* ===== COSMOS BACKGROUND ===== */
  useEffect(() => {
    const canvas = document.getElementById("neuralCanvas") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    let nodes: {
      x: number;
      y: number;
      dx: number;
      dy: number;
    }[] = [];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const isMobile = window.innerWidth <= 768;

      nodes = Array.from(
        { length: isMobile ? 22 : 55 },
        () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 1.1,
          dy: (Math.random() - 0.5) * 1.1,
        })
      );
    };

    setup();
    window.addEventListener("resize", setup);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isMobile = window.innerWidth <= 768;
      const maxDist = isMobile ? 80 : 120;

      nodes.forEach((n) => {
        n.x += n.dx;
        n.y += n.dy;

        if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.fill();

        nodes.forEach((m) => {
          const dist = Math.hypot(n.x - m.x, n.y - m.y);
          if (dist < maxDist) {
            ctx.strokeStyle = "rgba(255,255,255,0.25)";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", setup);
  }, []);

  return (
    <section className="relative w-screen overflow-hidden bg-[#c8df2f]">
      {/* BACKGROUND */}
      <canvas id="neuralCanvas" className="absolute inset-0 z-0" />

      {/* DECORATIVE LOGO */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-[1]">
        <Image
          src={iconmark}
          alt="Decorative Logo"
          width={580}
          height={1080}
          className="
            opacity-100
            w-[280px]
            sm:w-[360px]
            md:w-[420px]
            lg:w-[580px]
            max-sm:opacity-20
            ml-[-5%]
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-[1200px]
          mx-auto
          px-4 sm:px-6 lg:px-[20px]

         pt-[6px]
   /* ↓ reduced mobile top */
          sm:pt-[60px]

          pb-[4px]         /* ↓ reduced mobile bottom */
          sm:pb-[30px]
        "
      >
        {/* TITLE */}
        <div className="mb-[5px] sm:mb-[60px] lg:mb-[72px]">
          <h2 className="text-black font-[900] leading-[1.05] text-[3rem] mt-[-5%] sm:mt-[0%] md:mt-[0%] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.5rem]">
            BUILT FOR MODERN
          </h2>
          <span className="block text-[var(--purple-30)] font-[900] mt-2 text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem]">
            Marketing Excellence
          </span>
        </div>

        {/* FEATURES */}
        <div className="flex flex-col max-w-[640px] gap-[6px] sm:gap-[44px] lg:gap-[54px]
lg:mt-[-5%]">
          {points.map((p) => (
            <div key={p.num} className="flex items-center gap-3 sm:gap-[10px]">
              {/* NUMBER */}
              <span
                className="
                  font-[900]
                  leading-[0.9]

                  min-w-[72px]
                  sm:min-w-[96px]
                  lg:min-w-[110px]

                  text-[4.5rem]
                  sm:text-[4.6rem]
                  lg:text-[5rem]

                  ml-[-10px]      /* mobile only */
                  sm:ml-0

                  text-[rgba(223,250,51,0.85)]
                "
              >
                {p.num}
              </span>

              {/* TEXT */}
              <div>
                <h3 className="text-black font-[900] mb-1 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.45rem]">
                  {p.title}
                </h3>
                <p
                  className="
                    text-black
                    leading-[1.4]
                    text-[14px]
                    sm:text-[15px]
                    [text-align:justify]
                    [text-justify:inter-word]
                    hyphens-auto
                  "
                >
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
