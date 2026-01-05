
"use client";

export default function PrecisionSectionGray() {
  return (
    <section
      className="
        relative
        w-full
        h-[70vh]
        max-[1280px]:h-[65vh]
        max-[1024px]:h-[60vh]
        max-[900px]:h-auto
        max-[900px]:py-20
        max-[640px]:py-16
        flex
        items-center
        justify-center
        text-center
        overflow-hidden
        bg-[#F2F2F2]
        mt-9
      "
    >
      {/* PATTERN — untouched */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/images/service-page-images-videos/Gray-Dual.svg')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "top center",
          backgroundSize: "auto 100%",
          opacity: 1,
        }}
      />

      {/* LIGHT WASH */}
      <div className="absolute inset-0 z-[1]" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-[10]
          max-w-[1100px]
          px-6
          max-[1024px]:px-5
          max-[768px]:px-4
        "
      >
        <h1
          className="
            text-black
            font-black
            mb-6
            leading-[1.15]

            text-[3rem]
            max-[1440px]:text-[2.8rem]
            max-[1280px]:text-[2.5rem]
            max-[1024px]:text-[2.2rem]
            max-[900px]:text-[1.8rem]
            max-[640px]:text-[1.6rem]
          "
        >
     Precision and Performance Through Transformative Advertising Operations 
        </h1>

        <p
          className="
            text-black
            mx-auto
            leading-relaxed

            text-[26px]
            max-w-[900px]

            max-[1440px]:text-[24px]
            max-[1280px]:text-[22px]
            max-[1024px]:text-[20px]
            max-[900px]:text-[16px]
            max-[900px]:max-w-[95%]
            max-[640px]:text-[15px]
          "
        >
We power advertising operations through structured execution, accurate trafficking, advanced tracking, and continuous monitoring to ensure efficiency, compliance, and measurable performance.         </p>
      </div>
    </section>
  );
}
