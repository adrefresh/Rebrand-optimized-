
// "use client";

// import { useEffect } from "react";
// // import { HiArrowLongRight } from "react-icons/hi2";

// export default function Services() {
//   const digitalMarketing = [
//     "Paid Advertising",
//     "Social Media Marketing",
//     "Search Engine Optimization",
//     "Creative & Branding",
//     "Website Development",
//     "Analytics & Reporting",
//   ];

//   const adOperations = [
//     "Campaign Setup & Management",
//     "Ad Trafficking & Tag Implementation",
//     "Pixel, Tracking & Measurement Setup",
//     "Campaign Monitoring & Pacing",
//     "Reporting, Dashboards & Insights",
//     "Ad Tech & Platform Administration",
//   ];

//   useEffect(() => {
//     document.querySelectorAll(".reveal").forEach((el) => {
//       new IntersectionObserver(
//         (entries) =>
//           entries.forEach(
//             (e) => e.isIntersecting && el.classList.add("active")
//           ),
//         { threshold: 0.25 }
//       ).observe(el);
//     });
//   }, []);

//   return (
//     <section className="relative w-screen overflow-hidden bg-black py-8 sm:py-12 ml-[calc(50%-50vw)]">
//       {/* TITLE */}
//       <h2
//         className="
//           reveal
//           text-center
//           font-[900]
//           text-white
//           text-[2.4rem]
//           sm:text-[3rem]
//           md:text-[3.8rem]
//           lg:text-[4.5rem]
//           mb-8
//         "
//       >
//         SERVICES
//       </h2>

//       <div
//         className="
//           relative
//           mx-auto
//           grid
//           w-[92%]
//           grid-cols-1
//           gap-16
//           text-center
//           md:grid-cols-2
//           md:gap-12
//           lg:gap-16
//         "
//       >
//         {/* SPLASH GREEN */}
//         <div
//           className="
//             absolute
//             left-[10%]
//             top-[8%]
//             z-[1]
//             h-[200px]
//             w-[200px]
//             rounded-full
//             bg-[radial-gradient(circle,#ecfc85,#c9ff4c)]
//             opacity-60
//             blur-[60px]
//             sm:h-[280px] sm:w-[280px] sm:blur-[70px]
//             lg:h-[350px] lg:w-[350px] lg:blur-[90px]
//           "
//         />

//         {/* SPLASH PURPLE */}
//         <div
//           className="
//             absolute
//             bottom-[5%]
//             right-[10%]
//             z-[1]
//             h-[200px]
//             w-[200px]
//             rounded-full
//             bg-[radial-gradient(circle,#5a2bb3,#9c75ff)]
//             opacity-60
//             blur-[60px]
//             sm:h-[280px] sm:w-[280px] sm:blur-[70px]
//             lg:h-[350px] lg:w-[350px] lg:blur-[90px]
//           "
//         />

//         {/* COLUMN 1 */}
//         <div className="reveal z-[3] mx-auto w-full max-w-[420px] px-5 py-6">
//           <h3 className="mb-6 font-[900] text-white text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem]">
//             DIGITAL MARKETING
//           </h3>

//           <ul className="mx-auto w-fit text-left">
//             {digitalMarketing.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="
//                   my-3
//                   text-white
//                   opacity-85
//                   transition-all
//                   duration-200
//                   hover:translate-x-[6px]
//                   hover:opacity-100
//                   text-[0.95rem]
//                   sm:text-[1.05rem]
//                   lg:text-[1.1rem]
//                 "
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>

//           {/* BUTTON — UNDER SERVICES */}
// <div className="mt-6 flex justify-center">
//             <a
//               href="/services/digital-marketing"
//               className="
//                 inline-flex items-center gap-2
//                 text-white
//                 opacity-80
//                 transition-all
//                 hover:opacity-100
//                 hover:translate-x-1
//                 text-sm
//                 w-20
//               "
//             >
          
//   <span
//             className="
//               text-[66px] font-black text-white
//               transition-transform duration-200 ease-out
//               group-hover:translate-x-1
//               max-[768px]:text-[36px]
//             "
//           >
//             ➜
//           </span>
//             </a>
//           </div>
//         </div>

//         {/* COLUMN 2 */}
//         <div className="reveal z-[3] mx-auto w-full max-w-[420px] px-5 py-6">
//           <h3 className="mb-6 font-[900] text-white text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem]">
//             ADVERTISING OPERATIONS
//           </h3>

//           <ul className="mx-auto w-fit text-left">
//             {adOperations.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="
//                   my-3
//                   text-white
//                   opacity-85
//                   transition-all
//                   duration-200
//                   hover:translate-x-[6px]
//                   hover:opacity-100
//                   text-[0.95rem]
//                   sm:text-[1.05rem]
//                   lg:text-[1.1rem]
//                 "
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>

//           {/* BUTTON — UNDER SERVICES */}
//  <div className="mt-6 flex justify-center">
//             <a
//               href="/services/ad-operations"
//               className="
//                 inline-flex items-center gap-2
//                 text-white
//                 opacity-80
//                 transition-all
//                 hover:opacity-100
//                 hover:translate-x-1
//                 text-sm
//                 text-center
//               "
//             >
            
          
//   <span
//             className="
//               text-[66px] font-black text-white
//               transition-transform duration-200 ease-out
//               group-hover:translate-x-1
//               max-[768px]:text-[36px]
//             "
//           >
//             ➜
//           </span>
//             </a>
//           </div>
//         </div>

//         {/* CENTER LINE — DESKTOP ONLY */}
//         <div className="absolute left-1/2 top-0 z-[2] hidden h-[87%] w-[2px] -translate-x-1/2 bg-white opacity-60 md:block" />
//       </div>
//     </section>
//   );
// // }
// "use client";

// import { useEffect } from "react";

// export default function Services() {
//   const digitalMarketing = [
//     "Paid Advertising",
//     "Social Media Marketing",
//     "Search Engine Optimization",
//     "Creative & Branding",
//     "Website Development",
//     "Analytics & Reporting",
//   ];

//   const adOperations = [
//     "Campaign Setup & Management",
//     "Ad Trafficking & Tag Implementation",
//     "Pixel, Tracking & Measurement Setup",
//     "Campaign Monitoring & Pacing",
//     "Reporting, Dashboards & Insights",
//     "Ad Tech & Platform Administration",
//   ];

//   useEffect(() => {
//     document.querySelectorAll(".reveal").forEach((el) => {
//       new IntersectionObserver(
//         (entries) =>
//           entries.forEach(
//             (e) => e.isIntersecting && el.classList.add("active")
//           ),
//         { threshold: 0.25 }
//       ).observe(el);
//     });
//   }, []);

//   return (
//     <section
//       className="
//         relative
//         w-full
//         overflow-hidden
//         bg-black
//         py-10
//         sm:py-14
//         md:w-screen
//         md:ml-[calc(50%-50vw)]
//       "
//     >
//       {/* TITLE */}
//       <h2
//         className="
//           reveal
//           text-center
//           font-[900]
//           text-white
//           text-[2.2rem]
//           sm:text-[3rem]
//           md:text-[3.8rem]
//           lg:text-[4.5rem]
//           mb-10
//         "
//       >
//         SERVICES
//       </h2>

//       <div
//         className="
//           relative
//           mx-auto
//           grid
//           w-[92%]
//           max-w-[1200px]
//           grid-cols-1
//           gap-14
//           md:grid-cols-2
//           md:gap-16
//           text-center
//         "
//       >
//         {/* GREEN SPLASH */}
//         <div
//           className="
//             absolute
//             left-[8%]
//             top-[6%]
//             z-[1]
//             h-[140px]
//             w-[140px]
//             rounded-full
//             bg-[radial-gradient(circle,#ecfc85,#c9ff4c)]
//             opacity-60
//             blur-[50px]
//             sm:h-[220px] sm:w-[220px] sm:blur-[60px]
//             lg:h-[350px] lg:w-[350px] lg:blur-[90px]
//           "
//         />

//         {/* PURPLE SPLASH */}
//         <div
//           className="
//             absolute
//             bottom-[5%]
//             right-[8%]
//             z-[1]
//             h-[140px]
//             w-[140px]
//             rounded-full
//             bg-[radial-gradient(circle,#5a2bb3,#9c75ff)]
//             opacity-60
//             blur-[50px]
//             sm:h-[220px] sm:w-[220px] sm:blur-[60px]
//             lg:h-[350px] lg:w-[350px] lg:blur-[90px]
//           "
//         />

//         {/* COLUMN 1 */}
//         <div className="reveal z-[3] mx-auto w-full max-w-[420px] px-4 py-4">
//           <h3 className="mb-6 font-[900] text-white text-[1.3rem] sm:text-[1.6rem] lg:text-[1.8rem]">
//             DIGITAL MARKETING
//           </h3>

//           <ul className="mx-auto w-fit text-left">
//             {digitalMarketing.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="
//                   my-3
//                   text-white
//                   opacity-80
//                   transition-all
//                   duration-200
//                   hover:translate-x-[6px]
//                   hover:opacity-100
//                   text-[0.95rem]
//                   sm:text-[1.05rem]
//                   lg:text-[1.1rem]
//                 "
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>

//           <div className="mt-8 flex justify-center">
//             <a
//               href="/services/digital-marketing"
//               className="
//                 inline-flex
//                 items-center
//                 justify-center
//                 text-white
//                 opacity-80
//                 transition-all
//                 hover:opacity-100
//                 hover:translate-x-1
//               "
//             >
//               <span
//                 className="
//                   text-[28px]
//                   sm:text-[36px]
//                   md:text-[48px]
//                   lg:text-[60px]
//                   font-black
//                 "
//               >
//                 ➜
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* COLUMN 2 */}
//         <div className="reveal z-[3] mx-auto w-full max-w-[420px] px-4 py-4">
//           <h3 className="mb-6 font-[900] text-white text-[1.3rem] sm:text-[1.6rem] lg:text-[1.8rem]">
//             ADVERTISING OPERATIONS
//           </h3>

//           <ul className="mx-auto w-fit text-left">
//             {adOperations.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="
//                   my-3
//                   text-white
//                   opacity-80
//                   transition-all
//                   duration-200
//                   hover:translate-x-[6px]
//                   hover:opacity-100
//                   text-[0.95rem]
//                   sm:text-[1.05rem]
//                   lg:text-[1.1rem]
//                 "
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>

//           <div className="mt-8 flex justify-center">
//             <a
//               href="/services/ad-operations"
//               className="
//                 inline-flex
//                 items-center
//                 justify-center
//                 text-white
//                 opacity-80
//                 transition-all
//                 hover:opacity-100
//                 hover:translate-x-1
//               "
//             >
//               <span
//                 className="
//                   text-[28px]
//                   sm:text-[36px]
//                   md:text-[48px]
//                   lg:text-[60px]
//                   font-black
//                 "
//               >
//                 ➜
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* CENTER DIVIDER — DESKTOP ONLY */}
//         <div className="absolute left-1/2 top-0 z-[2] hidden h-full w-[2px] -translate-x-1/2 bg-white/60 md:block" />
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect } from "react";

export default function Services() {
  const digitalMarketing = [
    "Paid Advertising",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Creative & Branding",
    "Website Development",
    "Analytics & Reporting",
  ];

  const adOperations = [
    "Campaign Setup & Management",
    "Ad Trafficking & Tag Implementation",
    "Pixel, Tracking & Measurement Setup",
    "Campaign Monitoring & Pacing",
    "Reporting, Dashboards & Insights",
    "Ad Tech & Platform Administration",
  ];

  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((el) => {
      new IntersectionObserver(
        (entries) =>
          entries.forEach(
            (e) => e.isIntersecting && el.classList.add("active")
          ),
        { threshold: 0.25 }
      ).observe(el);
    });
  }, []);

  return (
    <section
      className="
        relative
        w-full

        overflow-hidden
        bg-black
        py-5
        sm:py-5
        md:w-screen
        md:ml-[calc(50%-50vw)]

      "
    >
      {/* TITLE */}
     <h2
  className="
    reveal
    text-center
    font-[900]
    text-white
    text-[3rem]
    sm:text-[2.8rem]
    md:text-[3.2rem]
    lg:text-[4.5rem]

    mt-[-50px]          // 👈 mobile top margin
    sm:mt-[-40px]      // tablet
    md:mt-[-10px]     // desktop

    mb-10
    px-4
  "
>
  SERVICES
</h2>


      <div
        className="
          relative
          mx-auto
          grid
          w-[92%]
          max-w-[1200px]
          grid-cols-1
          gap-14
          md:grid-cols-2
          md:gap-16
          text-left
          md:text-center
        "
      >
        {/* SPLASHES (UNCHANGED) */}
        <div className="absolute left-[8%] top-[6%] z-[1] h-[140px] w-[140px] rounded-full bg-[radial-gradient(circle,#ecfc85,#c9ff4c)] opacity-60 blur-[50px] sm:h-[220px] sm:w-[220px] sm:blur-[60px] lg:h-[350px] lg:w-[350px] lg:blur-[90px]" />
        <div className="absolute bottom-[5%] right-[8%] z-[1] h-[140px] w-[140px] rounded-full bg-[radial-gradient(circle,#5a2bb3,#9c75ff)] opacity-60 blur-[50px] sm:h-[220px] sm:w-[220px] sm:blur-[60px] lg:h-[350px] lg:w-[350px] lg:blur-[90px]" />

        {/* COLUMN 1 */}
        <div className="reveal z-[3] w-full max-w-[420px] px-4 py-4 md:mx-auto">
          <h3 className="mb-6 font-[900] text-white text-[1.3rem] sm:text-[1.6rem] lg:text-[1.8rem]">
            DIGITAL MARKETING
          </h3>

          <ul className="w-full">
            {digitalMarketing.map((item, idx) => (
              <li
                key={idx}
                className="
                  my-3
                  text-white
                  opacity-80
                  transition-all
                  duration-200
                  hover:translate-x-[6px]
                  hover:opacity-100
                  text-[0.95rem]
                  sm:text-[1.05rem]
                  lg:text-[1.1rem]
                "
              >
                {item}
              </li>
            ))}
          </ul>

          {/* ARROW */}
          <div className="mt-6 flex justify-start md:justify-center">
            <a
              href="/services/digital-marketing"
              className="text-white opacity-80 transition-all hover:opacity-100 hover:translate-x-1"
            >
              <span className="text-[4rem] sm:text-[32px] md:text-[48px] lg:text-[60px] font-black">
                ➜
              </span>
            </a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="reveal z-[3] w-full max-w-[420px] px-4 py-4 md:mx-auto">
          <h3 className="mb-6 font-[900] text-white text-[1.3rem] sm:text-[1.6rem] lg:text-[1.8rem]">
            ADVERTISING OPERATIONS
          </h3>

          <ul className="w-full">
            {adOperations.map((item, idx) => (
              <li
                key={idx}
                className="
                  my-3
                  text-white
                  opacity-80
                  transition-all
                  duration-200
                  hover:translate-x-[6px]
                  hover:opacity-100
                  text-[0.95rem]
                  sm:text-[1.05rem]
                  lg:text-[1.1rem]
                "
              >
                {item}
              </li>
            ))}
          </ul>

          {/* ARROW */}
          <div className="mt-6 flex justify-start md:justify-center">
            <a
              href="/services/ad-operations"
              className="text-white opacity-80 transition-all hover:opacity-100 hover:translate-x-1"
            >
              <span className="text-[4rem] sm:text-[32px] md:text-[48px] lg:text-[60px] font-black">
                ➜
              </span>
            </a>
          </div>
        </div>

        {/* CENTER LINE — DESKTOP ONLY */}
        <div className="absolute left-1/2 top-0 z-[2] hidden h-full w-[2px] -translate-x-1/2 bg-white/60 md:block" />
      </div>
    </section>
  );
}
