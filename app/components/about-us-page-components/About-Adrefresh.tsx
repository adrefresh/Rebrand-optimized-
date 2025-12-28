"use client";

export default function AboutAdRefresh() {
  return (
    <section
      className="
        relative flex w-full items-center justify-center
        overflow-hidden
        bg-[#dadada]
        px-30 py-30 text-center
        min-h-[65vh] md:min-h-[55vh]
      "
    >
      {/* SEAMLESS PATTERN FIX */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('images/service-page-images-videos/GrayOutline.svg')",
          backgroundRepeat: "repeat",
          backgroundPosition: "0 0",   // ✅ hard reset
          backgroundSize: "auto",      // ✅ natural SVG size
          opacity: 0.35,               // ✅ softer like previous
        }}
      />

      {/* CONTENT */}
      <div className="relative z-[2] mx-auto max-w-[1000px] -mt-[5%]">
        <h2 className="mb-7 text-[4rem] font-black leading-[1.2] text-black md:text-[4rem]">
          ABOUT ADREFRESH
        </h2>

        <p className="mb-3 text-[2rem] leading-[1.8] text-black md:text-[1.2rem]">
          Our clients describe us as connectors, innovators, and disruptors.
          Our services are future-led, customer-focused, and designed to help
          brands thrive in an ever-evolving marketing ecosystem.
        </p>

        <p className="text-[1.25rem] leading-[1.8] text-black md:text-[1.2rem]">
          AdRefresh delivers a complete range of ad operations for advertisers,
          publishers, agencies, and networks—powered by deep domain expertise
          and a highly responsive global team.
        </p>
      </div>
    </section>
  );
}
