

// "use client";
// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
// export default function AboutAdRefresh() {
//   return (
//     <section
//       className="
//         relative flex w-full items-center justify-center
//         overflow-hidden
// bg-[#dadada] 
//         text-center

//         px-5 py-10               /* 📱 mobile */
//         sm:px-8 sm:py-14         /* 📱 large mobile */
//         md:px-12 md:py-20        /* 📱 tablet */
//         lg:px-20 lg:py-24        /* 💻 laptop */

//         min-h-[60vh] md:min-h-[55vh]
//       "
//     >
//       {/* SEAMLESS PATTERN FIX */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
        
// backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "top center",
//           backgroundSize: "cover 100%",
//           opacity: 0.45,
//         }}
//       />

//       {/* CONTENT */}
//       <div className="relative z-[2] mx-auto max-w-[1000px]">
//         <h2
//           className="
//             mb-6 font-black leading-[1.2] text-black
//             text-[2.2rem]          /* 📱 mobile */
//             sm:text-[2.8rem]
//             md:text-[3.2rem]
//             lg:text-[4rem]         /* 💻 desktop */
//           "
//         >
//           ABOUT ADREFRESH
//         </h2>

//         <p
//           className="
//             mb-4 leading-[1.7] text-black
//             text-[1.05rem]         /* 📱 mobile */
//             sm:text-[1.1rem]
//             md:text-[1.15rem]
//             lg:text-[1.25rem]
//           "
//         >
//           Our clients describe us as connectors, innovators, and disruptors.
//           Our services are future-led, customer-focused, and designed to help
//           brands thrive in an ever-evolving marketing ecosystem.
//         </p>

//         <p
//           className="
//             leading-[1.7] text-black
//             text-[1rem]            /* 📱 mobile */
//             sm:text-[1.05rem]
//             md:text-[1.1rem]
//             lg:text-[1.25rem]
//           "
//         >
//           AdRefresh delivers a complete range of ad operations for advertisers,
//           publishers, agencies, and networks—powered by deep domain expertise
//           and a highly responsive global team.
//         </p>
//       </div>
//     </section>
//   );
// }
"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function AboutAdRefresh() {
  return (
    <section
      className="
        relative
        w-screen
        overflow-hidden
        flex
        items-center
        justify-center
        text-center

        min-h-[60vh]
        md:min-h-[55vh]

        px-5 py-10
        sm:px-8 sm:py-14
        md:px-12 md:py-20
        lg:px-20 lg:py-24

        bg-[#F2F2F2]
      "
    >
      {/* PATTERN — FULL WIDTH & HEIGHT */}
      <div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
          opacity: 0.45,
        }}
      />

      {/* DIRECTIONAL SHADE OVERLAY */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.12), rgba(0,0,0,0.04))",
        }}
      />

      {/* LIGHT WASH */}
      <div className="absolute inset-0 z-[2] bg-white/15" />

      {/* CONTENT */}
      <div className="relative z-[10] mx-auto max-w-[1000px]">
        <h2
          className="
            mb-6
            font-black
            leading-[1.2]
            text-black

            text-[2.2rem]
            sm:text-[2.8rem]
            md:text-[3.2rem]
            lg:text-[4rem]
          "
        >
          ABOUT ADREFRESH
        </h2>

        <p
          className="
            mb-4
            leading-[1.7]
            text-black

            text-[1.05rem]
            sm:text-[1.1rem]
            md:text-[1.15rem]
            lg:text-[1.25rem]
          "
        >
          Our clients describe us as connectors, innovators, and disruptors.
          Our services are future-led, customer-focused, and designed to help
          brands thrive in an ever-evolving marketing ecosystem.
        </p>

        <p
          className="
            leading-[1.7]
            text-black

            text-[1rem]
            sm:text-[1.05rem]
            md:text-[1.1rem]
            lg:text-[1.25rem]
          "
        >
          AdRefresh delivers a complete range of ad operations for advertisers,
          publishers, agencies, and networks—powered by deep domain expertise
          and a highly responsive global team.
        </p>
      </div>
    </section>
  );
}
