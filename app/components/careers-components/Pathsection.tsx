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
"use client";

export default function PathSection() {
  const steps = [
    {
      title: "There’s a Muffin in your directory",
      desc: "To make this Muffin work, we’ll collaborate and shape the ideal workflow for your organization.",
      colorImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      bwImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "Let’s learn what flavor you are",
      desc: "We’ll understand your business, capabilities, and needs to craft the right strategy.",
      colorImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      bwImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      title: "Time to bake into Muffins",
      desc: "Processes, onboarding, and integrations come together for execution.",
      colorImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      bwImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      title: "Your impact starts here",
      desc: "Continuous optimization and measurable outcomes begin.",
      colorImg: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      bwImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Hello Muffin!",
      desc: "Welcome aboard. Your growth journey starts now.",
      colorImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      bwImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
  ];

  return (
    <section className="bg-white py-24 mb-[-10%]">
      
      <h2 className="mb-20 text-center text-[clamp(3rem,6vw,5rem)] font-extrabold">
        The Path of a Muffin
      </h2>

      <div className="relative mx-auto max-w-[1200px]">
        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black" />

        {steps.map((step, i) => (
          <div
            key={i}
            className="relative mb-[100px] grid grid-cols-[1fr_80px_1fr] items-center"
          >
            {/* LEFT CONTENT */}
            <div className="pr-12 text-right">
              <h3 className="text-[48px] font-extrabold mb-2">
                {step.title}
              </h3>
              <p className="text-[24px] leading-[1.6] text-gray-600 max-w-[420px] ml-auto">
                {step.desc}
              </p>
            </div>

            {/* CENTER DOT */}
            <div className="z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-black bg-white font-extrabold text-[1.3rem]">
              {i + 1}
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative ml-auto mr-[10%] h-[180px] w-[260px]">
              <img
                src={step.bwImg}
                alt=""
                loading="lazy"
                className="
                  absolute
                  left-[-200px]
                  top-0
                  h-[180px]
                  w-[280px]
                  rounded-[10px]
                  object-cover
                  grayscale
                  shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                "
              />

              <img
                src={step.colorImg}
                alt=""
                loading="lazy"
                className="
                  absolute
                  left-0
                  bottom-[-70px]
                  z-[4]
                  h-[180px]
                  w-[280px]
                  rounded-[10px]
                  object-cover
                  shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
