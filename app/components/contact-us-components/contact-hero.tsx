
// "use client";

// export default function ContactHero() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   return (
//     <section
//       className="
//         relative flex items-center justify-center overflow-hidden

//         /* HEIGHTS */
//         h-[55vh]              /* 📱 small mobile */
//         sm:h-[68vh]           /* 📱 large mobile */
//         md:h-[77vh]           /* 📱 tablet */
//         lg:h-[87vh]           /* 💻 laptop */
//         xl:h-[90vh]           /* 🖥 desktop */
//         2xl:h-[95vh]          /* 🖥 large desktop */
//       "
//     >
//       {/* VIDEO */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover z-[1]"
//         src={`${basePath}/images/about-page-videos-images/contactvd.mp4`}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* OVERLAY */}
//       <div className="absolute inset-0 z-[3] bg-black/50
// " />

//       {/* TITLE */}
//       <h1
//         className="
//           relative z-[5] font-black text-white text-center leading-tight
//       text-[4rem]
//               max-[1280px]:text-[3.4rem]
//               max-[1024px]:text-[3rem]
//               max-[768px]:text-[2.5rem]
//               max-[480px]:text-[2.1rem]
//            /* 🖥 large desktop */
//         "
//       >
//         CONTACT US
//       </h1>
//     </section>
//   );
// }

"use client";

export default function ContactHero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section
      className="
        relative flex items-center justify-center overflow-hidden

        /* HEIGHTS */
        h-[55vh]              /* 📱 small mobile */
        sm:h-[68vh]           /* 📱 large mobile */
        md:h-[77vh]           /* 📱 tablet */
        lg:h-[87vh]           /* 💻 laptop */
        xl:h-[90vh]           /* 🖥 desktop */
        2xl:h-[95vh]          /* 🖥 large desktop */
      "
    >
      {/* VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        src={`${basePath}/images/about-page-videos-images/contactvd.mp4`}
        poster={`${basePath}/images/client-images/contact-img.png`}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 z-[3] bg-black/50" />

      {/* TITLE */}
      <h1
        className="
          relative z-[5] font-black text-white text-center leading-tight
          text-[4rem]
          max-[1280px]:text-[3.4rem]
          max-[1024px]:text-[3rem]
          max-[768px]:text-[2.5rem]
          max-[480px]:text-[2.1rem]
        "
      >
        CONTACT US
      </h1>
    </section>
  );
}