// "use client";

// export default function VisionMission() {
//   return (
//    <section className="w-screen ml-[calc(50%-50vw)] bg-white py-24">
//   <div className="relative mx-auto max-w-[1100px]">

//     <div className="grid grid-cols-1 sm:grid-cols-2">
      
//       <div className="px-20 py-16 text-center sm:px-10">
//         <h3 className="mb-4 text-[2.6rem] font-extrabold">Vision</h3>
//         <p className="mx-auto max-w-[420px] text-sm leading-[1.8] text-[#333]">
//           To build a future-ready media operations ecosystem through intelligent,
//           scalable, and cost-efficient solutions.
//         </p>
//       </div>

//       <div className="px-20 py-16 text-center sm:px-10">
//         <h3 className="mb-4 text-[2.6rem] font-extrabold">Mission</h3>
//         <p className="mx-auto max-w-[420px] text-sm leading-[1.8] text-[#333]">
//           To execute media workflows with transparency, accountability,
//           and operational excellence.
//         </p>
//       </div>

//       <div className="px-20 py-16 text-center sm:px-10">
//         <h3 className="mb-4 text-[2.6rem] font-extrabold">Vision</h3>
//         <p className="mx-auto max-w-[420px] text-sm leading-[1.8] text-[#333]">
//           Empower partners to grow confidently with resilient and future-proof
//           operational frameworks.
//         </p>
//       </div>

//       <div className="px-20 py-16 text-center sm:px-10">
//         <h3 className="mb-4 text-[2.6rem] font-extrabold">Mission</h3>
//         <p className="mx-auto max-w-[420px] text-sm leading-[1.8] text-[#333]">
//           Combine expertise, automation, and discipline to exceed performance
//           benchmarks consistently.
//         </p>
//       </div>
//     </div>

//     {/* CENTER + (desktop only) */}
//     <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[70%] w-px -translate-x-1/2 -translate-y-1/2 bg-[#e2e2e2] sm:block" />
//     <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[70%] -translate-x-1/2 -translate-y-1/2 bg-[#e2e2e2] sm:block" />

//   </div>
// </section>

//   );
// }
"use client";

export default function VisionMission() {
  return (
    <section className="w-screen ml-[calc(50%-50vw)] bg-white py-14 sm:py-24">
      <div className="relative mx-auto max-w-[1100px]">

        <div className="grid grid-cols-1 sm:grid-cols-2">
          
          {/* BLOCK 1 */}
          <div className="px-6 py-10 text-center sm:px-10 sm:py-16">
            <h3
              className="
                mb-3 font-extrabold
                text-[1.8rem]          /* 📱 mobile */
                sm:text-[2.2rem]
                lg:text-[2.6rem]       /* 💻 desktop */
              "
            >
              Vision
            </h3>
            <p
              className="
                mx-auto max-w-[420px]
                text-[0.95rem]
                sm:text-sm
                leading-[1.7]
                text-[#333]
              "
            >
              To build a future-ready media operations ecosystem through intelligent,
              scalable, and cost-efficient solutions.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div className="px-6 py-10 text-center sm:px-10 sm:py-16">
            <h3
              className="
                mb-3 font-extrabold
                text-[1.8rem]
                sm:text-[2.2rem]
                lg:text-[2.6rem]
              "
            >
              Mission
            </h3>
            <p
              className="
                mx-auto max-w-[420px]
                text-[0.95rem]
                sm:text-sm
                leading-[1.7]
                text-[#333]
              "
            >
              To execute media workflows with transparency, accountability,
              and operational excellence.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="px-6 py-10 text-center sm:px-10 sm:py-16">
            <h3
              className="
                mb-3 font-extrabold
                text-[1.8rem]
                sm:text-[2.2rem]
                lg:text-[2.6rem]
              "
            >
              Vision
            </h3>
            <p
              className="
                mx-auto max-w-[420px]
                text-[0.95rem]
                sm:text-sm
                leading-[1.7]
                text-[#333]
              "
            >
              Empower partners to grow confidently with resilient and future-proof
              operational frameworks.
            </p>
          </div>

          {/* BLOCK 4 */}
          <div className="px-6 py-10 text-center sm:px-10 sm:py-16">
            <h3
              className="
                mb-3 font-extrabold
                text-[1.8rem]
                sm:text-[2.2rem]
                lg:text-[2.6rem]
              "
            >
              Mission
            </h3>
            <p
              className="
                mx-auto max-w-[420px]
                text-[0.95rem]
                sm:text-sm
                leading-[1.7]
                text-[#333]
              "
            >
              Combine expertise, automation, and discipline to exceed performance
              benchmarks consistently.
            </p>
          </div>
        </div>

        {/* CENTER + (desktop only — unchanged) */}
        <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[70%] w-px -translate-x-1/2 -translate-y-1/2 bg-[#e2e2e2] sm:block" />
        <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[70%] -translate-x-1/2 -translate-y-1/2 bg-[#e2e2e2] sm:block" />

      </div>
    </section>
  );
}
