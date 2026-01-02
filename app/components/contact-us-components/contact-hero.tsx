// "use client";

// export default function ContactHero() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   return (
//     <section
//       className="
//         relative flex items-center justify-center overflow-hidden
//         h-[60vh]        /* 📱 mobile */
//         sm:h-[90vh]     /* 💻 tablet & desktop */
//       "
//     >
//       <video
//         className="absolute inset-0 w-full h-full object-cover z-[1]"
//         src={`${basePath}/images/contact-us-images-videos/3.mp4`}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/10 via-black/40 to-black/50" />

//       <h1 className="relative z-[5] text-[5rem] font-black text-white max-[768px]:text-[3rem]">
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
        sm:h-[65vh]           /* 📱 large mobile */
        md:h-[75vh]           /* 📱 tablet */
        lg:h-[85vh]           /* 💻 laptop */
        xl:h-[90vh]           /* 🖥 desktop */
        2xl:h-[95vh]          /* 🖥 large desktop */
      "
    >
      {/* VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        src={`${basePath}/images/contact-us-images-videos/3.mp4`}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 z-[3] bg-black/50
" />

      {/* TITLE */}
      <h1
        className="
          relative z-[5] font-black text-white text-center leading-tight
   text-[3.4rem]
            sm:text-[4.2rem]
            md:text-[5rem]
            lg:text-[6rem]
            xl:text-[6.4rem]
           /* 🖥 large desktop */
        "
      >
        CONTACT US
      </h1>
    </section>
  );
}
