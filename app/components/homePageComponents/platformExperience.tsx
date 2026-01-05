// "use client";

// import { useEffect } from "react";

// export default function Flexibility() {
//   useEffect(() => {
//     // reveal animation
//     document.querySelectorAll(".reveal").forEach((el) => {
//       new IntersectionObserver(
//         (entries) => {
//           entries.forEach((e) => e.isIntersecting && el.classList.add("active"));
//         },
//         { threshold: 0.2 }
//       ).observe(el);
//     });

//     // experience drop animation
//     const exp = document.querySelector(".exp-animate");
//     if (exp) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               exp.classList.add("drop-in");
//               setTimeout(() => exp.classList.add("wobble"), 900);
//             }
//           });
//         },
//         { threshold: 0.3 }
//       );
//       observer.observe(exp);
//     }
//   }, []);

//   return (
//     <section className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-white lg:h-screen md:h-auto md:py-16">
//       {/* LEFT */}
//       <div className="reveal relative flex h-full w-[40%] items-center justify-center md:h-auto md:w-full md:pb-6">
//         <h2 className="rotate-[-90deg] text-center text-[6rem] font-normal leading-[0.9] text-black lg:text-[6rem] md:rotate-0 md:text-[42px] sm:text-[30px]">
//           INDUSTRY <br />
//           <span className="exp-animate inline-block translate-y-[-120px] text-[5.5rem] font-extrabold tracking-[-5px] text-[var(--purple-30)] opacity-0 transition-all duration-700 lg:text-[5.5rem] md:text-[2.8rem] sm:text-[2rem]">
//             Experience
//           </span>
//         </h2>

//         {/* BLOBS */}
//         <div className="absolute left-[10%] top-[10%] -z-10 h-[180px] w-[180px] rounded-full bg-[#c6adff] opacity-45 blur-[60px] md:h-[130px] md:w-[130px] md:blur-[45px] sm:h-[90px] sm:w-[90px] sm:blur-[30px]" />
//         <div className="absolute bottom-[10%] right-[10%] -z-10 h-[180px] w-[180px] rounded-full bg-[#d9ff5a] opacity-45 blur-[60px] md:h-[130px] md:w-[130px] md:blur-[45px] sm:h-[90px] sm:w-[90px] sm:blur-[30px]" />
//       </div>

//       {/* DIVIDER */}
//       <div className="h-[85%] w-[3px] bg-black opacity-70 md:my-8 md:h-[3px] md:w-full sm:my-4 sm:h-[2px]" />

//       {/* RIGHT */}
//       <div className="reveal flex h-full w-[40%] flex-col justify-center gap-5 pl-[60px] md:h-auto md:w-full md:pl-0 md:text-center md:gap-7 sm:gap-4">
//         {[
//           ["5+", "Years of Experience"],
//           ["50+", "Happy Clients"],
//           ["5K+", "Campaigns Executed"],
//         ].map(([num, label]) => (
//           <div key={num}>
//             <span className="block text-[70px] font-black text-[var(--brand-black)] lg:text-[70px] md:text-[48px] sm:text-[34px]">
//               {num}
//             </span>
//             <p className="mt-[-10px] text-[20px] text-[var(--brand-black)] md:text-[18px] sm:text-[14px]">
//               {label}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* GLOBAL ANIMATIONS */}
//       <style jsx global>{`
//         .reveal {
//           opacity: 0;
//           transform: translateY(40px);
//           transition: 0.8s ease;
//         }
//         .reveal.active {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .exp-animate.drop-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .exp-animate.wobble {
//           animation: wobbleLoop 3s ease-in-out infinite;
//         }

//         @keyframes wobbleLoop {
//           0% {
//             transform: translateY(0) rotate(0deg);
//           }
//           25% {
//             transform: translateY(-4px) rotate(1.5deg);
//           }
//           50% {
//             transform: translateY(0) rotate(-1.5deg);
//           }
//           75% {
//             transform: translateY(3px) rotate(1deg);
//           }
//           100% {
//             transform: translateY(0) rotate(0deg);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


// "use client";

// import { useEffect } from "react";

// export default function Flexibility() {
//   useEffect(() => {
//     document.querySelectorAll(".reveal").forEach((el) => {
//       new IntersectionObserver(
//         (entries) => {
//           entries.forEach(
//             (e) => e.isIntersecting && el.classList.add("active")
//           );
//         },
//         { threshold: 0.2 }
//       ).observe(el);
//     });

//     const exp = document.querySelector(".exp-animate");
//     if (exp) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               exp.classList.add("drop-in");
//               setTimeout(() => exp.classList.add("wobble"), 900);
//             }
//           });
//         },
//         { threshold: 0.3 }
//       );
//       observer.observe(exp);
//     }
//   }, []);

//   return (
//     <section className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-white">
//       {/* LEFT */}
//       <div className="reveal relative flex h-full w-[40%] items-center justify-center">
//         <h2 className="rotate-[-90deg] text-center leading-[0.9]">
//           <span className="block text-[6rem] font-normal text-black">
//             INDUSTRY
//           </span>
//           <span className="exp-animate block text-[5.5rem] font-extrabold tracking-[-5px] text-[var(--purple-30)] opacity-0">
//             Experience
//           </span>
//         </h2>

//         {/* BLOBS */}
//         <div className="absolute left-[10%] top-[10%] -z-10 h-[180px] w-[180px] rounded-full bg-[#c6adff] opacity-45 blur-[60px]" />
//         <div className="absolute bottom-[10%] right-[10%] -z-10 h-[180px] w-[180px] rounded-full bg-[#d9ff5a] opacity-45 blur-[60px]" />
//       </div>

//       {/* DIVIDER */}
//       <div className="h-[85%] w-[3px] bg-black opacity-70" />

//       {/* RIGHT */}
//       <div className="reveal flex h-full w-[40%] flex-col justify-center gap-6 pl-[60px]">
//         <div>
//           <span className="block text-[70px] font-black text-black">5+</span>
//           <p className="mt-[-10px] text-[20px] text-black">
//             Years of Experience
//           </p>
//         </div>

//         <div>
//           <span className="block text-[70px] font-black text-black">50+</span>
//           <p className="mt-[-10px] text-[20px] text-black">
//             Happy Clients
//           </p>
//         </div>

//         <div>
//           <span className="block text-[70px] font-black text-black">5K+</span>
//           <p className="mt-[-10px] text-[20px] text-black">
//             Campaigns Executed
//           </p>
//         </div>
//       </div>

//       {/* RESPONSIVE (EXACT SAME BEHAVIOR) */}
//       <style jsx global>{`
//         @media (max-width: 1100px) {
//           section {
//             height: auto;
//             padding: 50px 0;
//           }

//           h2 {
//             transform: rotate(0deg) !important;
//           }
//         }

//         @media (max-width: 900px) {
//           section {
//             flex-direction: column;
//             padding: 70px 0;
//           }

//           .rotate-\\[-90deg\\] {
//             transform: rotate(0deg);
//           }

//           .w-\\[40%\\] {
//             width: 100%;
//             text-align: center;
//           }

//           .h-\\[85%\\] {
//             width: 100%;
//             height: 3px;
//             margin: 30px 0;
//           }

//           .pl-\\[60px\\] {
//             padding-left: 0;
//           }
//         }

//         @media (max-width: 768px) {
//           span {
//             font-size: 2rem !important;
//           }
//         }

//         /* ANIMATIONS */
//         .reveal {
//           opacity: 0;
//           transform: translateY(40px);
//           transition: 0.8s ease;
//         }
//         .reveal.active {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .exp-animate.drop-in {
//           opacity: 1;
//           transform: translateY(0);
//           transition: 0.7s ease-out;
//         }

//         .exp-animate.wobble {
//           animation: wobbleLoop 3s ease-in-out infinite;
//         }

//         @keyframes wobbleLoop {
//           0% {
//             transform: translateY(0) rotate(0deg);
//           }
//           25% {
//             transform: translateY(-4px) rotate(1.5deg);
//           }
//           50% {
//             transform: translateY(0) rotate(-1.5deg);
//           }
//           75% {
//             transform: translateY(3px) rotate(1deg);
//           }
//           100% {
//             transform: translateY(0) rotate(0deg);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { useEffect } from "react";

export default function Flexibility() {
  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((el) => {
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (e) => e.isIntersecting && el.classList.add("active")
          );
        },
        { threshold: 0.2 }
      ).observe(el);
    });

    const exp = document.querySelector(".exp-animate");
    if (exp) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              exp.classList.add("drop-in");
              setTimeout(() => exp.classList.add("wobble"), 900);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(exp);
    }
  }, []);

  return (
    <section className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-white">
      {/* ================= LEFT ================= */}
<div className="reveal relative flex h-full w-[40%] items-center justify-center lg:mr-[-50px] ml-[-30px] sm:ml-0 stat">
        <h2 className="industry-title rotate-[-90deg] text-center leading-[0.9]">
          <span className="block text-[6rem] font-normal text-black">
            INDUSTRY
          </span>
          <span className="exp-animate block text-[5.5rem] font-extrabold tracking-[-5px] text-[var(--purple-30)] opacity-0">
            Experience
          </span>
        </h2>

        {/* BLOBS */}
        <div className="absolute left-[5%] top-[10%] -z-10 h-[180px] w-[180px] rounded-full bg-[#c6adff] opacity-45 blur-[60px]" />
        <div className="absolute bottom-[10%] right-[10%] -z-10 h-[180px] w-[180px] rounded-full bg-[#d9ff5a] opacity-45 blur-[60px]" />
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="divider h-[85%] w-[3px] bg-black opacity-70 " />

      {/* ================= RIGHT ================= */}
<div className="reveal flex h-full w-[40%] flex-col justify-center gap-8 pl-[60px] ml-[-60px] sm:ml-0 stats">
        <div className="stat">
          <span className="block text-[70px] font-black text-black">10+</span>
          <p className="mt-[-10px] text-[20px] text-black">
            Years of Experience
          </p>
        </div>

        <div className="stat">
          <span className="block text-[70px] font-black text-black">50+</span>
          <p className="mt-[-10px] text-[20px] text-black">
            Happy Clients
          </p>
        </div>

        <div className="stat">
          <span className="block text-[70px] font-black text-black">5K+</span>
          <p className="mt-[-10px] text-[20px] text-black">
            Campaigns Executed
          </p>
        </div>
      </div>

      {/* ================= GLOBAL STYLES ================= */}
      <style jsx global>{`
        /* ================= BASE ================= */
        section {
          max-width: 100vw;
        }

        /* ================= LARGE TABLET ================= */
        @media (max-width: 1100px) {
          section {
            height: auto;
            padding: 60px 0;
          }

          .industry-title {
            transform: rotate(0deg);
          }
        }

        /* ================= TABLET ================= */
        @media (max-width: 900px) {
          section {
            flex-direction: column;
            padding: 80px 20px;
          }

          .w-\\[40%\\] {
            width: 100%;
            text-align: center;
          }

          .divider {
            width: 100%;
            height: 3px;
            margin: 40px 0;
          }

          .pl-\\[60px\\] {
            padding-left: 0;
          }

          .stats {
            align-items: center;
          }
        }

        /* ================= MOBILE (FIXED) ================= */
        @media (max-width: 640px) {
          .industry-title {
             transform: rotate(90deg) !important;
          }
            

          .exp-animate {
            transform: none !important;
          }

          .stats {
            width: 100%;
            gap: 28px;
            text-align: center;
          }

          .stat span {
            font-size: 3rem;
          }

          .stat p {
            font-size: 1rem;
            margin-top: 4px;
          }

          .industry-title span:first-child {
            font-size: 3.2rem;
          }

          .exp-animate {
            font-size: 3rem;
            letter-spacing: -2px;
          }
        }

        /* ================= ANIMATIONS ================= */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: 0.8s ease;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .exp-animate.drop-in {
          opacity: 1;
          transform: translateY(0);
          transition: 0.7s ease-out;
        }

        .exp-animate.wobble {
          animation: wobbleLoop 3s ease-in-out infinite;
        }

        @keyframes wobbleLoop {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-4px) rotate(1.5deg);
          }
          50% {
            transform: translateY(0) rotate(-1.5deg);
          }
          75% {
            transform: translateY(3px) rotate(1deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}
