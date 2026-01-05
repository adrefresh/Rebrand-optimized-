// "use client";

// import Image from "next/image";
// import { useEffect } from "react";
// import conference from "@/public/images/HomePageImages/conference.jpg";
// import start from "@/public/images/HomePageImages/star3.png";

// export default function About() {
//   useEffect(() => {
//     const els = document.querySelectorAll(".reveal");
//     const obs = new IntersectionObserver((entries) => {
//       entries.forEach(
//         (e) => e.isIntersecting && e.target.classList.add("active")
//       );
//     });
//     els.forEach((el) => obs.observe(el));
//   }, []);

//   return (
//     <section
//       className="
//         relative
//         w-screen
// w-full
//         bg-black
//         overflow-hidden
//         py-[60px]

//         max-[768px]:py-[60px]
//       "
//     >
//       {/* BACKGROUND */}
//       <div className="absolute inset-0">
//         <Image
//           src={conference}
//           alt="AdRefresh Team"
//           fill
//           priority
//           className="object-cover grayscale brightness-[0.25]"
//         />
//       </div>

//       {/* CONTENT WRAPPER (CENTERS EVERYTHING) */}
//       <div className="relative z-10 flex justify-center">
//         <div
//           className="
//             w-full
//             max-w-[900px]
//             px-6
//             text-white
//           "
//         >
//           {/* TITLE ROW */}
//           <div
//             className="
//               flex
//               items-center
//               justify-center
//               gap-4
//               mb-[-2]

//               max-[768px]:mb-1
//             "
//           >
//             <h2
//               className="
//                 text-[#813DFF]
//                 text-[5rem]
//                 font-[900]
//                 tracking-[-2px]
//                 ml-[-10%]
// mt-[-5%]
//                 max-[900px]:text-[3.6rem]
//                 max-[600px]:text-[2.6rem]
//               "
//             >
//               ADREXIANS
//             </h2>

//             <Image
//               src={start}
//               alt="stars"
//               width={80}
//               height={50}
//               className="max-[600px]:w-[60px] mt-[-5%]"
//             />
//           </div>

//           {/* WE ARE + TEXT (CENTERED BLOCK) */}
//           <div
//             className="
//               mx-auto
//               grid
//               grid-cols-[70px_1fr]
//               gap-8
//               items-start

//               max-[768px]:grid-cols-1
//               max-[768px]:text-center
//             "
//           >
//             {/* WE ARE */}
//             <div
//               className="
//                 flex
//                 justify-center
//   ml-[100%]
//                 text-white
//                 text-[5rem]
//                 font-[900]
//                 tracking-[6px]
//                 [writing-mode:vertical-rl]
//                 rotate-180

//                 max-[768px]:[writing-mode:horizontal-tb]
//                 max-[768px]:rotate-0
//                 max-[768px]:text-[2rem]
//                 max-[768px]:mb-4
//               "
//             >
//               WE ARE
//             </div>

//             {/* TEXT CONTENT */}
//             <div className="max-w-[600px] mx-auto">
//               <p
//                 className="
//                   reveal
//                   text-[20px]
//                   leading-[1.7]
//                   mb-4

//                   max-[768px]:text-[17px]
//                   max-[600px]:text-[15px]
//                 "
//               >
//                 AdRefresh is a next-gen Digital Ad Performance Management partner,
//                 bringing together strategy, execution and intelligent optimization
//                 under one agile powerhouse.
//               </p>

//               <p
//                 className="
//                   reveal
//                   text-[20px]
//                   leading-[1.7]
//                   mb-10
//                   max-[768px]:text-[17px]
//                   max-[600px]:text-[15px]
//                 "
//               >
//                 With AI-enhanced workflows and multi-shift teams operating from
//                 sunrise to late hours, we keep your campaigns performing,
//                 adapting and accelerating without pause.With AI-enhanced workflows and multi-shift teams operating from
//                 sunrise to late hours, we keep your campaigns performing,
//                 adapting and accelerating without pause.
//               </p>

//               {/* CTA */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-center
//                   gap-3
//                   text-[2.2rem]
//                   font-bold
// mb-[-25%]
// mt-[-5%]
// ml-[-20%]
//                   max-[600px]:text-[1.8rem]
//                 "
//               >
//                 DiscoverNow
//                 <span className="animated-arrow">➜</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { useEffect } from "react";
// import conference from "@/public/images/HomePageImages/conference.jpg";
// import start from "@/public/images/HomePageImages/star3.png";

// export default function About() {
//   useEffect(() => {
//     const els = document.querySelectorAll(".reveal");
//     const obs = new IntersectionObserver((entries) => {
//       entries.forEach(
//         (e) => e.isIntersecting && e.target.classList.add("active")
//       );
//     });
//     els.forEach((el) => obs.observe(el));
//   }, []);

//   return (
//     <section
//       className="
//         relative
//         w-screen
//         bg-black
//         overflow-hidden
//         py-[30px]
//       "
//     >
//       {/* BACKGROUND */}
//       <div className="absolute inset-0">
//         <Image
//           src={conference}
//           alt="AdRefresh Team"
//           fill
//           priority
//           className="object-cover grayscale brightness-[0.25]"
//         />
//       </div>

//       {/* CONTENT WRAPPER */}
//       <div className="relative z-10 flex justify-center">
//         <div className="w-full max-w-[900px] px-4 sm:px-6 text-white">
          
//           {/* TITLE ROW */}
//           <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
//             <h2
//               className="
//                 text-[#813DFF]
//                 font-[900]
//                 tracking-[-2px]
//                 text-[2.4rem]
//                 sm:text-[3.2rem]
//                 md:text-[4rem]
//                 lg:text-[5rem]
//                 mb-[-2%]
//               "
//             >
//               ADREXIANS
//             </h2>

//             <Image
//               src={start}
//               alt="stars"
//               width={80}
//               height={50}
//               className="w-[50px] sm:w-[60px] md:w-[80px]"
//             />
//           </div>

//           {/* WE ARE + CONTENT */}
//           <div
//             className="
//               mx-auto
//               grid
//               grid-cols-1
//               md:grid-cols-[70px_1fr]
//               gap-4 md:gap-6
//               items-start
//               text-center md:text-left
//             "
//           >
//             {/* WE ARE */}
//             <div
//               className="
//                 flex
//                 justify-center
//                 text-white
//                 font-[900]
//                 tracking-[6px]
//                 text-[5rem]
//                 md:text-[5rem]
//                 md:[writing-mode:vertical-rl]
//                 md:rotate-180
//                 ml-[170%]
//               "
//             >
//               WE ARE
//             </div>

//             {/* TEXT CONTENT */}
//             <div className="max-w-[600px] mx-auto">
//               <p
//                 className="
//                   reveal
//                   text-[15px]
//                   sm:text-[17px]
//                   md:text-[18px]
//                   lg:text-[20px]
//                   leading-[1.7]
//                   mb-4
//                   ml-[10%]
//                 "
//               >
//                 AdRefresh is a next-gen Digital Ad Performance Management partner,
//                 bringing together strategy, execution and intelligent optimization
//                 under one agile powerhouse.
//               </p>

//               <p
//                 className="
//                   reveal
//                   text-[15px]
//                   sm:text-[17px]
//                   md:text-[18px]
//                   lg:text-[20px]
//                   leading-[1.7]
//                   mb-8
//                    ml-[10%]
//                 "
//               >
//                 With AI-enhanced workflows and multi-shift teams operating from
//                 sunrise to late hours, we keep your campaigns performing,
//                 adapting and accelerating without pause.
//               </p>

//               {/* CTA */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-center md:justify-start
//                   gap-2
//                   font-bold
//                   text-[1.6rem]
//                   sm:text-[1.8rem]
//                   md:text-[2.2rem]
//                                     ml-[20%]

//                 "
//               >
//                 Discover Now
//                 <span className="animated-arrow">➜</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
              import Link from "next/link";

import { useEffect } from "react";
import conference from "@/public/images/HomePageImages/conference.jpg";
import start from "@/public/images/HomePageImages/5stars.png";

export default function About() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(
        (e) => e.isIntersecting && e.target.classList.add("active")
      );
    });
    els.forEach((el) => obs.observe(el));
  }, []);

  return (
    <section
      className="
        relative
        w-screen
        bg-black
        overflow-hidden
        py-[30px]
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src={conference}
          alt="AdRefresh Team"
          fill
          priority
          className="object-cover grayscale brightness-[0.25]"
            style={{
 
    backgroundColor: "transparent",
    backgroundBlendMode: "multiply",
  }}
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex justify-center">
        <div className="w-full max-w-[900px] px-4 sm:px-6 text-white">
          
          {/* TITLE ROW */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <h2
              className="
                text-[#813DFF]
                font-[900]
                tracking-[-2px]
                text-[2.4rem]
                sm:text-[3.2rem]
                md:text-[4rem]
                lg:text-[5rem]
                md:mb-[-2%]
                md:ml-[50px]
              "
            >
              ADREXIANS
            </h2>

            <Image
              src={start}
              alt="stars"
              width={100}
              height={100}
              className="w-[50px] sm:w-[60px] md:w-[120px] md:h-[80px]"
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
    font-[900]
    tracking-[6px]

    /* MOBILE */
    absolute top-[-50px] left-1/2 -translate-x-1/2
    text-[2.4rem]

    /* DESKTOP (unchanged) */
    md:static
    md:flex
    md:justify-center
    md:text-[5rem]
    md:[writing-mode:vertical-rl]
    md:rotate-180
    md:ml-[161%]
     whitespace-nowrap 
  "
>
  WE ARE
</div>


            {/* TEXT CONTENT */}
            <div className="max-w-[600px] mx-auto">
              <p
                className="
                  reveal
                                   text-[12px]
                  sm:text-[17px]
                  md:text-[14px]
                  lg:text-[18px]
                  leading-[1.6]
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
                  text-[14px]
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
      ml-0
      md:ml-[20%]
      cursor-pointer
    "
  >
    Discover Now
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
