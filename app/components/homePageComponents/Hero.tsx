// "use client";

// import { useEffect } from "react";
// import { FaAngleDoubleDown } from "react-icons/fa";

// export default function Hero() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

//   const scrollToNext = () => {
//     document.querySelector("#prev-section")?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
//       { threshold: 0.3 }
//     );

//     const title = document.querySelector(".hero-title");
//     if (title) observer.observe(title);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       className="
//         relative
//         w-screen
//         h-[100vh]          /* 🔥 reduce hero + video height */
//         overflow-hidden
//         bg-black
//       "
//     >
//       {/* VIDEO */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="
//           absolute inset-0
//           w-full h-full
//           object-cover
//         "
//       >
//         <source
//           src={`${basePath}/images/HomePageImages/officer.mp4`}
//           type="video/mp4"
//         />
//       </video>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* CONTENT */}
//       <main
//         className="
//           relative z-10
//           flex h-full
//           max-w-7xl
//           mx-auto
//           flex-col
//           justify-center
//           px-6 sm:px-16
//         "
//       >
//         <h1
//           className="
//             hero-title
//             reveal
//             max-w-5xl
//             text-5xl
//             sm:text-3xl
//             md:text-4xl
//             lg:text-7xl
//             xl:text-8xl
//             font-bold
//             tracking-tight
//             leading-tight
//             text-white
//             mt-[17%]
           
//           "
//         >
//           YOUR REMOTE TEAM <br />
//           THAT FEELS  ON SITE
//         </h1>
//       </main>

//       {/* SCROLL BUTTON */}
//       <button
//         onClick={scrollToNext}
//         className="
//           absolute
//           left-1/2
//           -translate-x-1/2
//           bottom-6
//           z-20
//           opacity-90
//           animate-bounce
//         "
//         aria-label="Scroll to next section"
//       >
//         <FaAngleDoubleDown size={42} color="white" />
//       </button>
//     </section>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { FaAngleDoubleDown } from "react-icons/fa";

// export default function Hero() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

//   const scrollToNext = () => {
//     document.querySelector("#prev-section")?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
//       { threshold: 0.3 }
//     );

//     const title = document.querySelector(".hero-title");
//     if (title) observer.observe(title);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       className="
//         relative
//         w-screen
//         h-[100vh]     /* ✅ video + hero height */
//         overflow-hidden
//         bg-black
//       "
//     >
//       {/* VIDEO */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="
//           absolute inset-0
//           w-full h-full
//           object-cover
//         "
//       >
//         <source
//           src={`${basePath}/images/HomePageImages/officer.mp4`}
//           type="video/mp4"
//         />
//       </video>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* CONTENT */}
//       <main
//         className="
//           relative z-10
//           flex h-full
//           max-w-7xl
//           mx-auto
//           flex-col
//           justify-center
//           px-6 sm:px-16
//         "
//       >
//         <h1
//           className="
//             hero-title
//             reveal
//             max-w-5xl
//             text-5xl              /* ✅ mobile untouched */
//             sm:text-2xl
//             md:text-2xl
//             lg:text-7xl
//             xl:text-8xl
//             font-bold
//             tracking-tight
//             leading-tight
//             text-white
//             mt-[17%]              /* ✅ mobile untouched */
//             sm:mt-[15%]
//             md:mt-[13%]
//             lg:mt-[10%]
//           "
//         >
//           YOUR REMOTE TEAM <br />
//           THAT FEELS ON SITE
//         </h1>
//       </main>

//       {/* SCROLL BUTTON */}
//       <button
//         onClick={scrollToNext}
//         className="
//           absolute
//           left-1/2
//           -translate-x-1/2
//           bottom-6
//           z-20
//           opacity-90
//           animate-bounce
//         "
//         aria-label="Scroll to next section"
//       >
//         <FaAngleDoubleDown size={42} color="white" />
//       </button>
//     </section>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { FaAngleDoubleDown } from "react-icons/fa";

// export default function Hero() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

//  const scrollToNext = () => {
//   window.scrollBy({
//     top: 600,
//     behavior: "smooth",
//   });
// };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
//       { threshold: 0.3 }
//     );

//     const title = document.querySelector(".hero-title");
//     if (title) observer.observe(title);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//   className="
//     relative
//     w-screen
//     h-[100svh]
//     min-h-[100vh]
//     overflow-hidden
//     bg-black
//   "
// >

//       {/* VIDEO */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="
//           absolute inset-0
//           w-full h-full
//           object-cover
//         "
//       >
//         <source
//           src={`${basePath}/images/about-page-videos-images/officevd.mp4`}
//           type="video/mp4"
//         />
//       </video>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* CONTENT */}
//       <main
//         className="
//           relative z-10
//           flex h-full
//           max-w-7xl
//           mx-auto
//           flex-col
//           items-left
//           justify-left
//           px-6 sm:px-16
//           text-left
//         "
//       ><h1
//   className="
//     hero-title
//     reveal
//     max-w-5xl
//     text-[2.2rem]
//     sm:text-[2.6rem]
//     md:text-[3.2rem]
//     lg:text-[4.5rem]
//     xl:text-[5.5rem]
//     font-bold
//     tracking-tight
//     leading-tight
//     text-white
//     mt-[50%]        /* ✅ mobile */
//     sm:mt-[25%]    /* tablet & up */
//   "
// >
//   YOUR REMOTE TEAM <br />
//   THAT FEELS ON SITE
// </h1>

//       </main>

//       {/* SCROLL BUTTON */}
//       <button
//         onClick={scrollToNext}
//         className="
//           absolute
//           left-1/2
//           -translate-x-1/2
//           bottom-6
//           z-20
//           opacity-90
//           animate-bounce
//         "
//         aria-label="Scroll to next section"
//       >
//         <FaAngleDoubleDown size={42} color="white" />
//       </button>
//     </section>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { FaAngleDoubleDown } from "react-icons/fa";

// export default function Hero() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

//   const scrollToNext = () => {
//     window.scrollBy({
//       top: 600,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach(
//           (e) => e.isIntersecting && e.target.classList.add("show")
//         ),
//       { threshold: 0.3 }
//     );

//     const title = document.querySelector(".hero-title");
//     if (title) observer.observe(title);

//     return () => observer.disconnect();
//   }, []);

//   return (
//    <section
//   className="
//     relative
//     w-screen
//     h-[100svh]        /* mobile */
//     md:h-[70vh]       /* tablets */
//     lg:h-[100svh]     /* desktop & above */
//     overflow-hidden
//     bg-black
//   "
// >

//       {/* VIDEO */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source
//           src={`${basePath}/images/about-page-videos-images/officevd.mp4`}
//           type="video/mp4"
//         />
//       </video>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* CONTENT */}
//       <main
//         className="
//           relative z-10
//           flex h-full
//           max-w-7xl
//           mx-auto
//           flex-col
//           items-center
//           justify-center
//           px-6 sm:px-16
//           text-center

//           pt-20        /* mobile */
//           sm:pt-24    /* tablet */
//           lg:pt-28    /* desktop */
//         "
//       >
//         <h1
//           className="
//             hero-title
//             reveal
//             max-w-5xl
//             text-[2.2rem]
//             sm:text-[2.6rem]
//             md:text-[3.1rem]
//             lg:text-[4.5rem]
//             xl:text-[5.5rem]
//             font-bold
//             tracking-tight
//             leading-tight
//             text-white

//             translate-y-0        /* reset */
//             xl:translate-y-8     /* ONLY large screens */
//           "
//         >
//           YOUR REMOTE TEAM <br />
//           THAT FEELS ON SITE
//         </h1>
//       </main>

//       {/* SCROLL BUTTON */}
//       <button
//         onClick={scrollToNext}
//         className="
//           absolute
//           left-1/2
//           -translate-x-1/2
//           bottom-6
//           z-20
//           opacity-90
//           animate-bounce
//         "
//         aria-label="Scroll to next section"
//       >
//         <FaAngleDoubleDown size={42} color="white" />
//       </button>
//     </section>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { FaAngleDoubleDown } from "react-icons/fa";

// export default function Hero() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

//   const scrollToNext = () => {
//     window.scrollBy({
//       top: 600,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach(
//           (e) => e.isIntersecting && e.target.classList.add("show")
//         ),
//       { threshold: 0.3 }
//     );

//     const title = document.querySelector(".hero-title");
//     if (title) observer.observe(title);

//     return () => observer.disconnect();
//   }, []);

//   return (
//   <section
//   className="
//     relative
//     w-screen
//     overflow-hidden
//     bg-black

//     h-[100vh]            /* default */
//     max-md:h-[100vh]     /* 🔒 phones ALWAYS 100vh */
//     md:h-[75vh]          /* tablets */
//     lg:h-[100vh]         /* desktop */
//   "
// >

//       {/* VIDEO */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source
//           src={`${basePath}/images/about-page-videos-images/officevd.mp4`}
//           type="video/mp4"
//         />
//       </video>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* CONTENT */}
//       <main
//         className="
//           relative z-10
//           flex h-full
//           max-w-7xl
//           mx-auto
//           flex-col
//           items-center
//           justify-center
//           px-6 sm:px-16
//           text-center

//           pt-20
//           md:pt-24
//           lg:pt-28
//         "
//       >
//         <h1
//           className="
//             hero-title
//             reveal
//             max-w-5xl
//             text-[2.2rem]
//             sm:text-[2.6rem]
//             md:text-[3rem]
//             lg:text-[4.5rem]
//             xl:text-[5.5rem]
//             font-bold
//             tracking-tight
//             leading-tight
//             text-white

//             translate-y-0
//             xl:translate-y-8
//           "
//         >
//           YOUR REMOTE TEAM <br />
//           THAT FEELS ON SITE
//         </h1>
//       </main>

//       {/* SCROLL BUTTON */}
//       <button
//         onClick={scrollToNext}
//         className="
//           absolute
//           left-1/2
//           -translate-x-1/2
//           bottom-6
//           z-20
//           opacity-90
//           animate-bounce
//         "
//         aria-label="Scroll to next section"
//       >
//         <FaAngleDoubleDown size={42} color="white" />
//       </button>
//     </section>
//   );
// }
"use client";

import { useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const scrollToNext = () => {
    window.scrollBy({
      top: 600,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("show")
        ),
      { threshold: 0.3 }
    );

    const title = document.querySelector(".hero-title");
    if (title) observer.observe(title);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        relative
        w-screen
        overflow-hidden
        bg-black

        h-[100dvh]  /* mobile */
        [@media(min-width:768px)_and_(max-width:1023px)]:h-[75vh] /* tablets */
        lg:h-[100vh] /* laptop & desktop */
      "
    >
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={`${basePath}/images/about-page-videos-images/officevd.mp4`}
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <main
        className="
          relative z-10
          flex h-full
          max-w-7xl
          mx-auto
          flex-col
          items-left
          justify-left
          px-6 sm:px-16
          text-left

          pt-35
          md:pt-28
          lg:pt-38
        "
      >
       <h1
  className="
    hero-title
    reveal
    max-w-5xl

    /* alignment */
    text-center

    /* font sizes */
    text-[2.2rem]        /* 📱 mobile */
    sm:text-[2.6rem]
    md:text-[4rem]
    lg:text-[5rem]
    xl:text-[6rem]

    /* spacing */
    mt-[-100px]                /* 📱 mobile only */
    sm:mt-[-100px]
  ml-[-25px]

    font-bold
    tracking-tight
    leading-tight
    text-white

    /* animation positioning */
    translate-y-0
    xl:translate-y-8
  "
>
  YOUR REMOTE TEAM <br />
  THAT FEELS ON SITE
</h1>

      </main>

      {/* SCROLL BUTTON – desktop only */}
      <button
        onClick={scrollToNext}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-6
          z-20
          opacity-90
          animate-bounce

          hidden
          lg:block
        "
        aria-label="Scroll to next section"
      >
        <FaAngleDoubleDown size={42} color="white" />
      </button>
    </section>
  );
}
