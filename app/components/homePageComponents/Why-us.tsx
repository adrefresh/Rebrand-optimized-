
"use client";

export default function WhyUsSection() {
  return (
    <section className="relative w-screen bg-[#0d0d0d] text-white overflow-hidden">
      {/* TITLE */}
   <h1
  className="
    py-3
    text-center
    font-extrabold
    text-[2rem]
    sm:text-[2.6rem]
    md:text-[3.2rem]
    lg:text-[3.5rem]

    mt-[-60px]        /* 📱 Mobile top spacing */
    sm:mt-6      /* Tablet */
    md:mt-0      /* Desktop */
  "
>
  WHY US
</h1>



      {/* ================= DESKTOP / LAPTOP ================= */}
      <div className="relative ml-auto max-w-[1400px] pr-[2vw] pl-[1vw] pb-[80px] hidden sm:block mr-15">

        {/* Vertical line */}
<div className="absolute left-1/2 top-[10%] h-[80%] w-[2px] bg-white -translate-x-1/2" />

        <div className="grid grid-cols-[1fr_80px_1fr] gap-y-[160px] pt-[80px]">

          {/* ===== ROW 1 ===== */}
          <div className="flex justify-end pr-12">
            <h2 className="text-[2.4rem] font-extrabold flex items-center gap-2">
              A CORE OF
              <span className="relative inline-block">
                <span className="absolute inset-[-10px_-18px] bg-[var(--green-tint-30)] opacity-70 blur-[36px]" />
                <span className="relative text-[2.6rem] font-extrabold ml-3">
                  FOCUS
                </span>
              </span>
            </h2>
          </div>

          {/* DOT */}
          <div className="relative flex justify-center">
            <span className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-white bg-[var(--green-20)] ml-3.5" />
          </div>

          {/* TEXT */}
          <p className="max-w-[520px] text-[1.15rem] leading-snug ml-15">
            We focus on quality-led execution, supported by structured processes,
            continuous monitoring, and proactive optimization to ensure every
            campaign delivers consistent performance and measurable results.
          </p>

          {/* ===== ROW 2 ===== */}
          <div className="flex justify-end pr-12">
            <h2 className="text-[2.6rem] font-extrabold flex items-center gap-2 md:text-[2rem] lg:text-[2.3rem] ">
              A LAYER OF
              <span className="relative inline-block">
                <span
                  className="
                    absolute
                    left-1/2 top-1/2
                    -translate-x-1/2 -translate-y-1/2
                    w-[250px]
                    h-[50px]
                    bg-[var(--green-tint-30)]
                    opacity-80
                    blur-[26px]
                    rounded-full
                  "
                />
                <svg
                  width="260"
                  height="90"
                  viewBox="0 0 260 90"
                  className="mx-auto block rotate-[-4deg]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <path
                      id="curve-flex-small"
                      d="M 10 45 Q 65 10 130 45 Q 195 80 250 45"
                    />
                  </defs>
                  <text
                    fill="currentColor"
                    fontSize="36"
                    fontWeight="800"
                    letterSpacing="1.2"
                    textAnchor="middle"
                  >
                    <textPath href="#curve-flex-small" startOffset="55%" dominantBaseline="middle">
                      FLEXIBILITY
                    </textPath>
                  </text>
                </svg>
              </span>
            </h2>
          </div>

          {/* DOT */}
          <div className="relative flex justify-center">
            <span className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-white bg-[var(--green-20)] ml-3.5" />
          </div>

          {/* TEXT */}
          <p className="max-w-[520px] text-[1.15rem] leading-snug ml-15">
            With flexibility at the core, our teams adapt to your workflows,
            platforms, and performance goals to ensure seamless alignment with
            your processes and a working rhythm that supports consistent,
            efficient growth.
          </p>

          {/* ===== ROW 3 ===== */}
          <div className="flex justify-end pr-12">
            <h2 className="text-[2.2rem] font-extrabold flex items-center gap-2 lg:text-[1.7rem]">
              A CULTURE OF
              <span className="relative inline-block">
                <span className="absolute inset-[-8px_0] bg-[var(--green-tint-30)] opacity-60 blur-[18px]" />
                <span className="relative text-[2.2rem] font-extrabold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] ml-1">
                  TRANSPARENCY
                </span>
              </span>
            </h2>
          </div>

          {/* DOT */}
          <div className="relative flex justify-center">
            <span className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-white bg-[var(--green-20)] ml-3.5" />
          </div>

          {/* TEXT */}
          <p className="max-w-[520px] text-[1.15rem] leading-snug ml-15">
            We operate with complete transparency, offering clear reporting and
            full visibility into campaign performance and spend.
          </p>

        </div>
      </div>

      {/* ================= MOBILE (UNCHANGED) ================= */}
      <div className="sm:hidden relative px-4 pb-10">
        <div className="absolute left-6 top-0 h-full w-[2px] bg-white" />

        {/* ITEM 1 */}
        <div className="relative pl-12 pt-6">
          <span className="absolute left-[3px] top-[40px] h-3 w-3 rounded-full border-2 border-white bg-[var(--green-20)]" />
          <h2 className="text-[1.2rem] font-bold">A CORE OF</h2>
          <div className="relative inline-block mt-1">
            <span className="absolute inset-[-8px_-14px] bg-[var(--green-tint-30)] opacity-70 blur-[22px]" />
            <h3 className="relative text-[1.5rem] font-extrabold">FOCUS</h3>
          </div>
          <p className="mt-3 text-[0.95rem] leading-snug opacity-90">
            We focus on quality-led execution, supported by structured processes,
            continuous monitoring, and proactive optimization to ensure every
            campaign delivers consistent performance and measurable results.
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="relative pl-12 pt-10">
          <span className="absolute left-[3px] top-[70px] h-3 w-3 rounded-full border-2 border-white bg-[var(--green-20)]" />
          <h2 className="text-[1.2rem] font-bold">A LAYER OF</h2>
          <div className="relative inline-block mt-1 ml-[-60px]">
            <div className="relative inline-block mt-1 ml-[0px]">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[40px] bg-[var(--green-tint-30)] opacity-50 blur-[12px] rounded-full" />
              <svg width="260" height="90" viewBox="0 0 260 90" className="relative rotate-[-15deg]">
                <defs>
                  <path id="curve-flex-small" d="M 20 80 Q 100 10 250 100" />
                </defs>
                <text fill="currentColor" fontSize="24" fontWeight="800" letterSpacing="1.2">
                  <textPath href="#curve-flex-small" startOffset="50%" textAnchor="middle">
                    FLEXIBILITY
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <p className="mt-3 text-[0.95rem] leading-snug opacity-90">
            We build teams customized to your workflows, platforms, and performance goals,
            ensuring seamless alignment with your processes and a working rhythm that supports consistent, efficient growth.
          </p>
        </div>

        {/* ITEM 3 */}
        <div className="relative pl-12 pt-10">
          <span className="absolute left-[3px] top-[70px] h-3 w-3 rounded-full border-2 border-white bg-[var(--green-20)]" />
          <h2 className="text-[1.2rem] font-bold">A CULTURE OF</h2>
          <div className="relative inline-block mt-1">
            <span className="absolute inset-[-6px_-12px] bg-[var(--green-tint-30)] opacity-60 blur-[18px]" />
            <h3 className="relative text-[1.5rem] font-extrabold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">
              TRANSPARENCY
            </h3>
          </div>
          <p className="mt-3 text-[0.95rem] leading-snug opacity-90">
            We operate with complete transparency, offering clear reporting and full visibility into campaign performance and spend.
          </p>
        </div>
      </div>
    </section>
  );
}
