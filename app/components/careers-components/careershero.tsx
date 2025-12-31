// "use client";

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// export default function CareersHero() {
//   return (
//     <section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
//       <video
//         className="absolute inset-0 h-full w-full object-cover"
//         src={`${basePath}/images/about-page-videos-images/1.mp4`}
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       <div className="absolute inset-0 bg-black/65" />

//       <div className="relative z-10 text-center text-white">
//         <h1 className="text-[clamp(3rem,8vw,6rem)] font-black tracking-[0.25em]">
//           CAREERS
//         </h1>
//         <span className="mx-auto my-6 block h-[3px] w-20 bg-white" />
//         <p className="tracking-[0.15em] uppercase opacity-90">
//        Where Talent Meets Opportunity 
//         </p>
//       </div>
//     </section>
//   );
// }

// "use client";

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// export default function CareersHero() {
//   return (
//     <section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
//       {/* VIDEO */}
//       <video
//         className="absolute inset-0 h-full w-full object-cover"
//         src={`${basePath}/images/about-page-videos-images/careersvd.mp4`}
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-black/65" />

//       {/* CONTENT */}
//       <div className="relative z-10 text-center text-white px-4">
//         <h1
//           className="
//             font-black
//             tracking-[0.12em]        /* 📱 mobile */
//             text-[2.8rem]

//             sm:text-[3.6rem] sm:tracking-[0.18em]
//             md:text-[4.6rem] md:tracking-[0.22em]
//             lg:text-[6rem]  lg:tracking-[0.25em]
//           "
//         >
//           CAREERS
//         </h1>

//         <span
//           className="
//             mx-auto my-4
//             block h-[2px] w-14        /* 📱 mobile */
//             sm:my-5 sm:h-[3px] sm:w-16
//             lg:my-6 lg:w-20
//             bg-white
//           "
//         />

//         <p
//           className="
//             uppercase opacity-90
//             tracking-[0.12em]        /* 📱 mobile */
//             text-[0.85rem]

//             sm:text-[0.95rem] sm:tracking-[0.14em]
//             md:text-[1rem]
//             lg:text-[1.05rem]
//           "
//         >
//           Where Talent Meets Opportunity
//         </p>
//       </div>
//     </section>
//   );
// }
"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CareersHero() {
  return (
    <section
      className="
        relative flex items-center justify-center overflow-hidden
        h-[60vh]        /* 📱 mobile */
        sm:h-[90vh]     /* 💻 tablet & above */
      "
    >
      {/* VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={`${basePath}/images/about-page-videos-images/careersvd.mp4`}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 px-4 text-center text-white">
        <h1
          className="
            font-black
            tracking-[0.12em]
            text-[2.8rem]

            sm:text-[3.6rem] sm:tracking-[0.18em]
            md:text-[4.6rem] md:tracking-[0.22em]
            lg:text-[6rem]  lg:tracking-[0.25em]
          "
        >
          CAREERS
        </h1>

        <span
          className="
            mx-auto my-4
            block h-[2px] w-14
            sm:my-5 sm:h-[3px] sm:w-16
            lg:my-6 lg:w-20
            bg-white
          "
        />

        <p
          className="
            uppercase opacity-90
            tracking-[0.12em]
            text-[0.85rem]

            sm:text-[0.95rem] sm:tracking-[0.14em]
            md:text-[1rem]
            lg:text-[1.05rem]
          "
        >
          Where Talent Meets Opportunity
        </p>
      </div>
    </section>
  );
}
