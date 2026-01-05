
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
              SAFETY
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
We build lasting partnerships through honest communication, clear processes, and complete visibility into performance, spend, and outcomes—ensuring accountability and confidence at every stage.             </p>
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
              PRECESION 

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
Every decision is guided by data, accuracy, and measurable impact, enabling us to optimize campaigns continuously and deliver consistent, performance-driven results aligned with business goals. 

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
           EFFICIENCY
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
              Efficiency - By leveraging intelligent automation, streamlined workflows, and experienced execution, we help brands scale faster and smarter while maintaining quality, speed, and operational excellence. 

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
              INNOVATION
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
We embrace AI and emerging technologies with intent, applying innovation thoughtfully to solve real business challenges and create sustainable, long-term value for our clients. 

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
