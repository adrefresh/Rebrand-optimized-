// "use client";

// export default function PathSection() {
//   const steps = [
//     {
//       title: "There’s a Muffin in your directory",
//       desc: "We collaborate to shape the ideal workflow.",
//     },
//     {
//       title: "Let’s learn what flavor you are",
//       desc: "We understand your business and needs.",
//     },
//     {
//       title: "Time to bake into Muffins",
//       desc: "Onboarding and execution come together.",
//     },
//     {
//       title: "Your impact starts here",
//       desc: "Optimization and measurable outcomes.",
//     },
//     {
//       title: "Hello Muffin!",
//       desc: "Your growth journey starts now.",
//     },
//   ];

//   return (
//     <section className="bg-white py-24">
//       <h2 className="mb-20 text-center text-[clamp(3rem,6vw,5rem)] font-extrabold">
//         The Path of a Muffin
//       </h2>

//       <div className="relative mx-auto max-w-5xl">
//         <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black" />

//         {steps.map((step, i) => (
//           <div
//             key={i}
//             className="relative mb-24 grid grid-cols-[1fr_80px_1fr] items-center"
//           >
//             <div className="pr-12 text-right">
//               <h3 className="text-4xl font-bold">{step.title}</h3>
//               <p className="mt-3 text-lg text-gray-600">{step.desc}</p>
//             </div>

//             <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-black bg-white font-bold ml-[10%]">
//               {i + 1}
//             </div>

//             <div />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// export default function PathSection() {
//   const steps = [
//     {
//       title: "Step Into the AdRefresh Journey ",
//       desc: "Discover a workplace where curiosity, creativity, and growth come together to shape meaningful digital careers.",
//       colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
//       bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
//     },
//     {
//       title: "Discover Your  Strength ",
//       desc: "Explore your skills, interests, and working style to see where you thrive and create the most impact. ",
//       colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
//       bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
//     },
//     {
//       title: " Grow, Learn, and Build With Us ",
//       desc: "Work on real challenges, learn continuously, and evolve alongside a team that values learning and collaboration. ",
//       colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
//       bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
//     },
//     {
//       title: "Your impact starts here",
//       desc: "Your ideas, efforts, and ownership directly influence our work, culture, and the success of brands we partner with. ",
//       colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
//       bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//     },
//     {
//       title: "Hello Adrexian!",
//       desc: "Welcome to a culture that celebrates individuality, teamwork, and growth—where your journey with AdRefresh truly begins. ",
//       colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
//       bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
//     },
//   ];

//   return (
//     <section className="bg-white py-24 mb-[-10%]">
      
//       <h2 className="mb-20 text-center text-[clamp(3rem,6vw,5rem)] font-extrabold">
//         The Path of a Adrexian
//       </h2>

//       <div className="relative mx-auto max-w-[1200px]">
//         {/* CENTER LINE */}
//         <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black" />

//         {steps.map((step, i) => (
//           <div
//             key={i}
//             className="relative mb-[100px] grid grid-cols-[1fr_80px_1fr] items-center"
//           >
//             {/* LEFT CONTENT */}
//             <div className="pr-12 text-right">
//               <h3 className="text-[48px] font-extrabold mb-2">
//                 {step.title}
//               </h3>
//               <p className="text-[24px] leading-[1.6] text-gray-600 max-w-[420px] ml-auto">
//                 {step.desc}
//               </p>
//             </div>

//             {/* CENTER DOT */}
//             <div className="z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-black bg-white font-extrabold text-[1.3rem]">
//               {i + 1}
//             </div>

//             {/* RIGHT IMAGES */}
//             <div className="relative ml-auto mr-[10%] h-[180px] w-[260px]">
//               <img
//                 src={step.bwImg}
//                 alt=""
//                 loading="lazy"
//                 className="
//                   absolute
//                   left-[-200px]
//                   top-0
//                   h-[180px]
//                   w-[280px]
//                   rounded-[10px]
//                   object-cover
//                   grayscale
//                   shadow-[0_12px_30px_rgba(0,0,0,0.15)]
//                 "
//               />

//               <img
//                 src={step.colorImg}
//                 alt=""
//                 loading="lazy"
//                 className="
//                   absolute
//                   left-0
//                   bottom-[-70px]
//                   z-[4]
//                   h-[180px]
//                   w-[280px]
//                   rounded-[10px]
//                   object-cover
//                   shadow-[0_12px_30px_rgba(0,0,0,0.15)]
//                 "
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// export default function PathSection() {
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

//   return (
//     <section className="bg-white py-16 sm:py-24 mb-[-10%]">
//       <h2 className="mb-12 sm:mb-20 text-center text-[2.4rem] sm:text-[clamp(3rem,6vw,5rem)] font-extrabold">
//         The Path of an Adrexian
//       </h2>

//       <div className="relative mx-auto max-w-[1200px] px-4 sm:px-0">
//         {/* CENTER LINE (desktop only) */}
//         <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-black lg:block" />

//         {/* MOBILE LINE */}
//         <div className="absolute left-6 top-0 h-full w-[2px] bg-black lg:hidden" />

//         {steps.map((step, i) => (
//           <div
//             key={i}
//             className="
//               relative mb-16

//               lg:mb-[100px]
//               lg:grid lg:grid-cols-[1fr_80px_1fr] lg:items-center
//             "
//           >
//             {/* LEFT CONTENT */}
//             <div className="lg:pr-12 lg:text-right pl-12 lg:pl-0">
//               <h3 className="text-[1.4rem] sm:text-[1.8rem] lg:text-[48px] font-extrabold mb-2">
//                 {step.title}
//               </h3>
//               <p className="text-[0.95rem] sm:text-[1.05rem] lg:text-[24px] leading-[1.6] text-gray-600 max-w-[420px] lg:ml-auto">
//                 {step.desc}
//               </p>
//             </div>

//             {/* CENTER DOT */}
//             <div
//               className="
//                 absolute left-[23px] top-[10px]
//                 flex h-10 w-10 items-center justify-center
//                 rounded-full border-[2px] border-black bg-white
//                 text-sm font-bold

//                 lg:static
//                 lg:h-[72px] lg:w-[72px]
//                 lg:border-[3px]
//                 lg:text-[1.3rem]
//               "
//             >
//               {i + 1}
//             </div>

//             {/* RIGHT IMAGES */}
//             <div className="relative mt-6 ml-12 lg:mt-0 lg:ml-auto lg:mr-[10%] h-[160px] w-[240px] lg:h-[180px] lg:w-[260px]">
//               <img
//                 src={step.bwImg}
//                 alt=""
//                 loading="lazy"
//                 className="
//                   absolute
//                   left-[-120px] lg:left-[-200px]
//                   top-0
//                   h-[140px] w-[220px]
//                   lg:h-[180px] lg:w-[280px]
//                   rounded-[10px]
//                   object-cover
//                   grayscale
//                   shadow-[0_12px_30px_rgba(0,0,0,0.15)]
//                 "
//               />

//               <img
//                 src={step.colorImg}
//                 alt=""
//                 loading="lazy"
//                 className="
//                   absolute
//                   left-0
//                   bottom-[-50px] lg:bottom-[-70px]
//                   z-[4]
//                   h-[140px] w-[220px]
//                   lg:h-[180px] lg:w-[280px]
//                   rounded-[10px]
//                   object-cover
//                   shadow-[0_12px_30px_rgba(0,0,0,0.15)]
//                 "
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

export default function PathSection() {
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

  return (
    <section className="bg-white py-16 sm:py-24 mb-[-10%]">
      <h2 className="mb-12 sm:mb-20 text-center text-[2.4rem] sm:text-[clamp(3rem,6vw,5rem)] font-extrabold">
        The Path of an Adrexian
      </h2>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-0">
        {/* DESKTOP CENTER LINE */}
        <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-black lg:block" />

        {/* MOBILE LINE */}
        <div className="absolute left-5 top-0 h-full w-[2px] bg-black lg:hidden" />

        {steps.map((step, i) => (
          <div
            key={i}
            className="
              relative mb-14

              lg:mb-[100px]
              lg:grid lg:grid-cols-[1fr_80px_1fr] lg:items-center
            "
          >
            {/* ================= MOBILE CONTENT ================= */}
            <div className="lg:hidden pl-10">
              {/* DOT */}
             <span className="
  absolute
  left-[-10px]          /* 📱 mobile */
  lg:left-[15px]       /* 💻 desktop (unchanged) */
  top-[4px]
  flex h-7 w-7
  items-center justify-center
  rounded-full
  border-2 border-black
  bg-white
  text-xl font-bold
">
  {i + 1}
</span>


              {/* TITLE */}
              <h3 className="text-[1.25rem] font-extrabold mb-2">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-[0.95rem] leading-[1.6] text-gray-600 mb-4">
                {step.desc}
              </p>

              {/* IMAGE (SMALL, RIGHT-ALIGNED) */}
              <img
                src={step.colorImg}
                alt=""
                loading="lazy"
                className="ml-auto h-[120px] w-[200px] rounded-[10px] object-cover shadow-[0_10px_24px_rgba(0,0,0,0.15)]"
              />
            </div>

            {/* ================= DESKTOP LEFT ================= */}
            <div className="hidden lg:block pr-12 text-right">
              <h3 className="text-[48px] font-extrabold mb-2">
                {step.title}
              </h3>
              <p className="text-[24px] leading-[1.6] text-gray-600 max-w-[420px] ml-auto">
                {step.desc}
              </p>
            </div>

            {/* ================= DESKTOP DOT ================= */}
            <div className="hidden lg:flex z-10 h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-black bg-white font-extrabold text-[1.3rem]">
              {i + 1}
            </div>

            {/* ================= DESKTOP IMAGES ================= */}
            <div className="hidden lg:block relative ml-auto mr-[10%] h-[180px] w-[260px]">
              <img
                src={step.bwImg}
                alt=""
                loading="lazy"
                className="absolute left-[-200px] top-0 h-[180px] w-[280px] rounded-[10px] object-cover grayscale shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
              />

              <img
                src={step.colorImg}
                alt=""
                loading="lazy"
                className="absolute left-0 bottom-[-70px] z-[4] h-[180px] w-[280px] rounded-[10px] object-cover shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
