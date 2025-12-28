"use client";

export default function PrecisionSectionGray() {
  return (
    <section
      className="
        relative
        w-full
        h-[75vh]
        max-[900px]:h-auto
        max-[900px]:py-20
        flex
        items-center
        justify-center
        text-center
        overflow-hidden
        bg-[#F2F2F2]
        mt-9
      "
    >
      {/* EXACT ORIGINAL PATTERN (NO ZOOM) */}
    <div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage:
      "url('/rebrand/images/service-page-images-videos/Gray.png')",
    backgroundRepeat: "repeat",
    backgroundPosition: "top left",
    backgroundSize: "650px 300px",
   
  }}
/>


      {/* VERY LIGHT WASH */}
      <div className="absolute inset-0 z-[1] bg-white/30" />

      {/* CONTENT */}
      <div className="relative z-[10] max-w-[1100px] px-5">
        <h1 className="text-black font-black mb-5 text-[3rem] max-[900px]:text-[28px]">
DATA-DRIVEN STRATEGIES FOR SCALABLE, MEASURABLE BUSINESS GROWTH 

        </h1>

        <p className="text-black mx-auto text-[26px] max-w-[900px] max-[900px]:text-[16px] max-[900px]:max-w-[95%]">
          We build strategy-driven digital campaigns using data, creativity, and modern tools to attract audiences, generate leads, and increase conversions. 
        </p>
      </div>
    </section>
  );
}
